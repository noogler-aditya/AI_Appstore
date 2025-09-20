export interface Tool {
  id: string
  name: string
  icon: string
  description: string
  website: string
  category: string
  subcategory?: string
  rating?: number
  pricing?: string
  tags?: string[]
  featured?: boolean
}

export const toolsData: Tool[] = [
  // Coding Tools
  {
    id: '1',
    name: 'GitHub Copilot',
    icon: '🤖',
    description: 'AI pair programmer that helps you write code faster and with fewer bugs',
    website: 'https://github.com/features/copilot',
    category: 'Coding',
    rating: 4.8,
    pricing: '$10/mo',
    featured: true
  },
  {
    id: '2',
    name: 'Tabnine',
    icon: '⚡',
    description: 'AI code completion tool that predicts and suggests code completions',
    website: 'https://www.tabnine.com',
    category: 'Coding',
    rating: 4.6,
    pricing: 'Free'
  },
  {
    id: '3',
    name: 'Replit Ghostwriter',
    icon: '👻',
    description: 'AI-powered code completion and generation in your browser',
    website: 'https://replit.com/site/ghostwriter',
    category: 'Coding',
    rating: 4.5,
    pricing: '$7/mo'
  },
  {
    id: '4',
    name: 'CodeT5',
    icon: '🔧',
    description: 'AI model for code understanding and generation tasks',
    website: 'https://github.com/salesforce/CodeT5',
    category: 'Coding',
    rating: 4.4,
    pricing: 'Free'
  },
  {
    id: '5',
    name: 'Amazon CodeWhisperer',
    icon: '🔮',
    description: 'ML-powered code generator that provides code recommendations',
    website: 'https://aws.amazon.com/codewhisperer',
    category: 'Coding',
    rating: 4.3,
    pricing: 'Free'
  },

  // Design Tools
  {
    id: '6',
    name: 'Midjourney',
    icon: '🎨',
    description: 'AI-powered image generation from text descriptions',
    website: 'https://midjourney.com',
    category: 'Design',
    rating: 4.9,
    pricing: '$10/mo',
    featured: true
  },
  {
    id: '7',
    name: 'DALL-E 2',
    icon: '🖼️',
    description: 'Create realistic images and art from text descriptions',
    website: 'https://openai.com/dall-e-2',
    category: 'Design',
    rating: 4.8,
    pricing: '$15/mo'
  },
  {
    id: '8',
    name: 'Stable Diffusion',
    icon: '🌟',
    description: 'Open-source AI image generation model',
    website: 'https://stability.ai/stable-diffusion',
    category: 'Design',
    rating: 4.7,
    pricing: 'Free'
  },
  {
    id: '9',
    name: 'Canva AI',
    icon: '✨',
    description: 'AI-powered design tools integrated into Canva platform',
    website: 'https://canva.com/ai-image-generator',
    category: 'Design',
    rating: 4.6,
    pricing: '$12/mo'
  },
  {
    id: '10',
    name: 'Adobe Firefly',
    icon: '🔥',
    description: 'Creative generative AI models for digital content creation',
    website: 'https://firefly.adobe.com',
    category: 'Design',
    rating: 4.5,
    pricing: '$20/mo'
  },

  // Writing Tools
  {
    id: '11',
    name: 'ChatGPT',
    icon: '💬',
    description: 'Advanced conversational AI for writing, coding, and problem-solving',
    website: 'https://chat.openai.com',
    category: 'Writing',
    rating: 4.8,
    pricing: 'Free',
    featured: true
  },
  {
    id: '12',
    name: 'Grammarly',
    icon: '✍️',
    description: 'AI-powered writing assistant for grammar, style, and clarity',
    website: 'https://grammarly.com',
    category: 'Writing',
    rating: 4.7,
    pricing: '$12/mo'
  },
  {
    id: '13',
    name: 'Jasper AI',
    icon: '📝',
    description: 'AI content generator for marketing copy and long-form content',
    website: 'https://jasper.ai',
    category: 'Writing',
    rating: 4.6,
    pricing: '$29/mo'
  },
  {
    id: '14',
    name: 'Copy.ai',
    icon: '📋',
    description: 'AI copywriter for marketing content and social media posts',
    website: 'https://copy.ai',
    category: 'Writing',
    rating: 4.5,
    pricing: '$36/mo'
  },
  {
    id: '15',
    name: 'Notion AI',
    icon: '📄',
    description: 'AI writing assistant integrated into your Notion workspace',
    website: 'https://notion.so/product/ai',
    category: 'Writing',
    rating: 4.4,
    pricing: '$8/mo'
  },

  // Healthcare Tools
  {
    id: '16',
    name: 'Ada Health',
    icon: '🏥',
    description: 'AI-powered health assessment and symptom checker',
    website: 'https://ada.com',
    category: 'Healthcare',
    rating: 4.6,
    pricing: 'Free'
  },
  {
    id: '17',
    name: 'Babylon Health',
    icon: '⚕️',
    description: 'AI chatbot for medical consultations and health advice',
    website: 'https://babylonhealth.com',
    category: 'Healthcare',
    rating: 4.4,
    pricing: '$9/mo'
  },
  {
    id: '18',
    name: 'Tempus',
    icon: '🧬',
    description: 'AI platform for precision medicine and cancer care',
    website: 'https://tempus.com',
    category: 'Healthcare',
    rating: 4.7,
    pricing: 'Enterprise'
  },

  // Analytics Tools
  {
    id: '19',
    name: 'Tableau AI',
    icon: '📊',
    description: 'AI-powered data visualization and business intelligence',
    website: 'https://tableau.com/products/tableau-ai',
    category: 'Analytics',
    rating: 4.7,
    pricing: '$70/mo'
  },
  {
    id: '20',
    name: 'DataRobot',
    icon: '🤖',
    description: 'Automated machine learning platform for predictive analytics',
    website: 'https://datarobot.com',
    category: 'Analytics',
    rating: 4.6,
    pricing: 'Enterprise'
  },
  {
    id: '21',
    name: 'MonkeyLearn',
    icon: '🐵',
    description: 'Text analysis and data visualization with machine learning',
    website: 'https://monkeylearn.com',
    category: 'Analytics',
    rating: 4.5,
    pricing: '$299/mo'
  },

  // Education Tools
  {
    id: '22',
    name: 'Duolingo',
    icon: '🦉',
    description: 'AI-powered language learning with personalized lessons',
    website: 'https://duolingo.com',
    category: 'Education',
    rating: 4.7,
    pricing: 'Free'
  },
  {
    id: '23',
    name: 'Khan Academy',
    icon: '🎓',
    description: 'AI tutoring and personalized learning platform',
    website: 'https://khanacademy.org',
    category: 'Education',
    rating: 4.8,
    pricing: 'Free'
  },
  {
    id: '24',
    name: 'Coursera AI',
    icon: '📚',
    description: 'AI-powered course recommendations and learning paths',
    website: 'https://coursera.org',
    category: 'Education',
    rating: 4.6,
    pricing: '$39/mo'
  },

  // Media Tools
  {
    id: '25',
    name: 'Runway ML',
    icon: '🎬',
    description: 'AI-powered video generation and editing platform',
    website: 'https://runwayml.com',
    category: 'Media',
    rating: 4.7,
    pricing: '$15/mo'
  },
  {
    id: '26',
    name: 'Descript',
    icon: '🎙️',
    description: 'AI-powered audio and video editing with transcription',
    website: 'https://descript.com',
    category: 'Media',
    rating: 4.6,
    pricing: '$12/mo'
  },
  {
    id: '27',
    name: 'Luma AI',
    icon: '📹',
    description: '3D capture and AI-powered video enhancement',
    website: 'https://lumalabs.ai',
    category: 'Media',
    rating: 4.5,
    pricing: 'Free'
  },

  // Communication Tools
  {
    id: '28',
    name: 'Otter.ai',
    icon: '🦦',
    description: 'AI-powered meeting transcription and note-taking',
    website: 'https://otter.ai',
    category: 'Communication',
    rating: 4.6,
    pricing: '$8.33/mo'
  },
  {
    id: '29',
    name: 'Krisp',
    icon: '🔇',
    description: 'AI-powered noise cancellation for calls and meetings',
    website: 'https://krisp.ai',
    category: 'Communication',
    rating: 4.7,
    pricing: '$5/mo'
  },
  {
    id: '30',
    name: 'Calendly AI',
    icon: '📅',
    description: 'AI-powered scheduling and meeting coordination',
    website: 'https://calendly.com',
    category: 'Communication',
    rating: 4.5,
    pricing: '$8/mo'
  }
]

export const getToolsByCategory = (category: string): Tool[] => {
  return toolsData.filter(tool => 
    tool.category.toLowerCase() === category.toLowerCase()
  )
}

export const getCategoryInfo = (category: string) => {
  const tools = getToolsByCategory(category)
  return {
    name: category,
    toolCount: tools.length,
    tools
  }
}