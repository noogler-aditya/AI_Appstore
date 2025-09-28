import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'
import path from 'path'
import { promises as fs } from 'fs'

export async function POST(request: NextRequest) {
  try {
    // Check if API key exists
    if (!process.env.GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY is not set')
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 })
    }

    const { query, mode } = await request.json()

    if (!query || typeof query !== 'string') {
      return NextResponse.json({ error: 'Valid query is required' }, { status: 400 })
    }

    if (!mode || (mode !== 'toolkit' && mode !== 'workflow')) {
      return NextResponse.json({ error: 'Valid mode is required' }, { status: 400 })
    }

    // Load tools data from file system instead of fetch
    let tools: any
    try {
      const toolsPath = path.join(process.cwd(), 'public', 'tools.json')
      const toolsData = await fs.readFile(toolsPath, 'utf8')
      tools = JSON.parse(toolsData)
    } catch (fileError) {
      console.error('Failed to load tools data:', fileError)
      return NextResponse.json({ error: 'Failed to load tools data' }, { status: 500 })
    }

    // Initialize Gemini AI
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-pro' })

    let prompt = ''

    if (mode === 'toolkit') {
      prompt = `You are an AI tool recommendation expert. Based on the user's query: "${query}"

Here are the available AI tools:
${JSON.stringify(tools, null, 2)}

Please recommend the top 3 most relevant tools for the user's needs. Return your response as a JSON array with this exact structure:

[
  {
    "id": "1",
    "name": "Tool Name",
    "useCase": "One-line specific use case for this user's need",
    "website": "https://example.com",
    "matchScore": 95
  }
]

Rules:
- Only recommend tools from the provided list
- Focus on tools that directly solve the user's problem
- The matchScore should be 80-100 based on relevance
- Return ONLY the JSON array, no other text or formatting
- Ensure the JSON is valid and parseable`
    } else {
      prompt = `You are an AI workflow expert. Based on the user's project: "${query}"

Here are the available AI tools:
${JSON.stringify(tools, null, 2)}

Create a step-by-step workflow for this project. Return your response as a JSON array with this exact structure:

[
  {
    "step": 1,
    "title": "Step Title",
    "description": "Brief description of what to do in this step",
    "tools": [
      {
        "id": "1",
        "name": "Tool Name",
        "useCase": "How this tool helps in this step",
        "website": "https://example.com",
        "matchScore": 95
      }
    ]
  }
]

Rules:
- Create 3-5 logical steps for the project
- Only recommend tools from the provided list
- Each step should have 1-3 relevant tools
- Focus on the logical flow from start to finish
- Return ONLY the JSON array, no other text or formatting
- Ensure the JSON is valid and parseable`
    }

    const result = await model.generateContent(prompt)
    const response = result.response
    const text = response.text()

    console.log('AI Response:', text)

    try {
      // Clean the response text
      const cleanText = text.trim().replace(/```json\n?/g, '').replace(/```\n?/g, '')
      const parsedResponse = JSON.parse(cleanText)

      // Validate the response structure
      if (!Array.isArray(parsedResponse)) {
        throw new Error('Response is not an array')
      }

      if (mode === 'toolkit') {
        // Validate toolkit recommendations
        const validRecommendations = parsedResponse.filter((rec: any) =>
          rec.id && rec.name && rec.useCase && rec.website && rec.matchScore
        ).slice(0, 3)
        
        return NextResponse.json({ recommendations: validRecommendations })
      } else {
        // Validate workflow steps
        const validWorkflow = parsedResponse.filter((step: any) =>
          step.step && step.title && step.description && Array.isArray(step.tools)
        ).slice(0, 5)
        
        return NextResponse.json({ workflow: validWorkflow })
      }
    } catch (parseError) {
      console.error('Failed to parse AI response:', text, parseError)

      if (mode === 'toolkit') {
        // Fallback toolkit recommendations
        const fallbackRecommendations = [
          {
            id: "1",
            name: "ChatGPT",
            useCase: "Perfect for general AI assistance and problem-solving",
            website: "https://chat.openai.com",
            matchScore: 90
          },
          {
            id: "19",
            name: "Cursor",
            useCase: "Ideal for AI-powered coding and development",
            website: "https://cursor.sh",
            matchScore: 85
          },
          {
            id: "68",
            name: "Notion",
            useCase: "Great for project management and organization",
            website: "https://notion.so",
            matchScore: 80
          }
        ]
        return NextResponse.json({ recommendations: fallbackRecommendations })
      } else {
        // Fallback workflow
        const fallbackWorkflow = [
          {
            step: 1,
            title: "Planning & Research",
            description: "Start by researching and planning your project",
            tools: [
              {
                id: "1",
                name: "ChatGPT",
                useCase: "Brainstorm ideas and create project plans",
                website: "https://chat.openai.com",
                matchScore: 90
              }
            ]
          },
          {
            step: 2,
            title: "Development & Creation",
            description: "Build and develop your project",
            tools: [
              {
                id: "19",
                name: "Cursor",
                useCase: "AI-powered coding and development",
                website: "https://cursor.sh",
                matchScore: 85
              }
            ]
          },
          {
            step: 3,
            title: "Organization & Management",
            description: "Organize and manage your project workflow",
            tools: [
              {
                id: "68",
                name: "Notion",
                useCase: "Project management and documentation",
                website: "https://notion.so",
                matchScore: 80
              }
            ]
          }
        ]
        return NextResponse.json({ workflow: fallbackWorkflow })
      }
    }

  } catch (error) {
    console.error('AI Recommendations error:', error)
    return NextResponse.json({
      error: 'Failed to get recommendations',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}