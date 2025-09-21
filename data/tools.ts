export interface Tool {
  id: string
  name: string
  icon: string
  description: string
  website: string
  category: string
  subcategory?: string
  rating?: number
  tags?: string[]
  featured?: boolean
}

export const toolsData: Tool[] = [
  // AI CHATBOTS
  {
    id: '1',
    name: 'ChatGPT',
    icon: '🟢',
    description: 'Advanced conversational AI for writing, coding, and problem-solving',
    website: 'https://chat.openai.com',
    category: 'Chatbots',
    rating: 4.7,
    featured: true
  },
  {
    id: '2',
    name: 'Claude',
    icon: '🟠',
    description: 'AI assistant by Anthropic for helpful, harmless, and honest conversations',
    website: 'https://claude.ai',
    category: 'Chatbots',
    rating: 4.6
  },
  {
    id: '3',
    name: 'DeepSeek',
    icon: '🔵',
    description: 'Advanced AI model for complex reasoning and problem-solving',
    website: 'https://deepseek.com',
    category: 'Chatbots',
    rating: 4.3
  },
  {
    id: '4',
    name: 'Gemini',
    icon: '🔶',
    description: 'Google\'s multimodal AI assistant for text, code, and creative tasks',
    website: 'https://gemini.google.com',
    category: 'Chatbots',
    rating: 4.5
  },
  {
    id: '5',
    name: 'Grok',
    icon: '⚫',
    description: 'X\'s AI chatbot with real-time information and witty personality',
    website: 'https://grok.x.ai',
    category: 'Chatbots',
    rating: 4.1
  },
  {
    id: '6',
    name: 'Meta AI',
    icon: '🔵',
    description: 'Meta\'s AI assistant integrated across Facebook, Instagram, and WhatsApp',
    website: 'https://ai.meta.com',
    category: 'Chatbots',
    rating: 4.2
  },
  {
    id: '7',
    name: 'MS Copilot',
    icon: '🟦',
    description: 'Microsoft\'s AI assistant integrated into Windows and Office suite',
    website: 'https://copilot.microsoft.com',
    category: 'Chatbots',
    rating: 4.4
  },
  {
    id: '8',
    name: 'Perplexity',
    icon: '🟣',
    description: 'AI-powered search engine that provides accurate answers with sources',
    website: 'https://perplexity.ai',
    category: 'Chatbots',
    rating: 4.5
  },

  // AI PRESENTATION
  {
    id: '9',
    name: 'Beautiful.AI',
    icon: '🟡',
    description: 'AI-powered presentation maker with smart design suggestions',
    website: 'https://beautiful.ai',
    category: 'Presentation',
    rating: 4.3
  },
  {
    id: '10',
    name: 'Gamma',
    icon: '🟢',
    description: 'Create presentations, documents, and websites with AI assistance',
    website: 'https://gamma.app',
    category: 'Presentation',
    rating: 4.6,
    featured: true
  },
  {
    id: '11',
    name: 'Pitch',
    icon: '🟠',
    description: 'Collaborative presentation software with AI-powered templates',
    website: 'https://pitch.com',
    category: 'Presentation',
    rating: 4.2
  },
  {
    id: '12',
    name: 'Plus',
    icon: '🔵',
    description: 'AI presentation tool for creating engaging slides automatically',
    website: 'https://plus.ai',
    category: 'Presentation',
    rating: 4.1
  },
  {
    id: '13',
    name: 'PopAI',
    icon: '🟣',
    description: 'AI-powered presentation creator with interactive elements',
    website: 'https://popai.pro',
    category: 'Presentation',
    rating: 4.0
  },
  {
    id: '14',
    name: 'Presentation.AI',
    icon: '🔶',
    description: 'Transform ideas into professional presentations using AI',
    website: 'https://presentation.ai',
    category: 'Presentation',
    rating: 3.9
  },
  {
    id: '15',
    name: 'Slidesgo',
    icon: '🟡',
    description: 'AI-enhanced presentation templates and design tools',
    website: 'https://slidesgo.com',
    category: 'Presentation',
    rating: 4.1
  },
  {
    id: '16',
    name: 'Tome',
    icon: '⚫',
    description: 'AI storytelling format for presentations and documents',
    website: 'https://tome.app',
    category: 'Presentation',
    rating: 4.3
  },

  // AI CODING ASSISTANCE
  {
    id: '17',
    name: 'AskCodi',
    icon: '🔵',
    description: 'AI coding assistant for faster development and debugging',
    website: 'https://askcodi.com',
    category: 'Coding',
    rating: 4.1
  },
  {
    id: '18',
    name: 'Codeium',
    icon: '🟢',
    description: 'Free AI-powered code completion and chat assistant',
    website: 'https://codeium.com',
    category: 'Coding',
    rating: 4.4
  },
  {
    id: '19',
    name: 'Cursor',
    icon: '⚫',
    description: 'AI-first code editor built for pair programming with AI',
    website: 'https://cursor.sh',
    category: 'Coding',
    rating: 4.7,
    featured: true
  },
  {
    id: '20',
    name: 'GitHub Copilot',
    icon: '⚫',
    description: 'AI pair programmer that helps you write code faster',
    website: 'https://github.com/features/copilot',
    category: 'Coding',
    rating: 4.6
  },
  {
    id: '21',
    name: 'Replit',
    icon: '🟠',
    description: 'Online IDE with AI-powered coding assistance and collaboration',
    website: 'https://replit.com',
    category: 'Coding',
    rating: 4.3
  },
  {
    id: '22',
    name: 'Sublime',
    icon: '🟡',
    description: 'Advanced text editor with AI-enhanced coding features',
    website: 'https://sublimetext.com',
    category: 'Coding',
    rating: 4.2
  },

  // AI EMAIL ASSISTANCE
  {
    id: '23',
    name: 'Clippit.AI',
    icon: '🔵',
    description: 'AI email assistant for writing and managing communications',
    website: 'https://clippit.ai',
    category: 'Email',
    rating: 4.0
  },
  {
    id: '24',
    name: 'Floify',
    icon: '🟢',
    description: 'AI-powered email automation and customer communication',
    website: 'https://floify.com',
    category: 'Email',
    rating: 3.9
  },
  {
    id: '25',
    name: 'Mailmeteor',
    icon: '🟠',
    description: 'AI-enhanced email marketing and mail merge tool',
    website: 'https://mailmeteor.com',
    category: 'Email',
    rating: 4.2
  },
  {
    id: '26',
    name: 'SaneBox',
    icon: '🟡',
    description: 'AI email organizer that prioritizes important messages',
    website: 'https://sanebox.com',
    category: 'Email',
    rating: 4.1
  },
  {
    id: '27',
    name: 'Superhuman',
    icon: '🔵',
    description: 'AI-powered email client for blazingly fast email management',
    website: 'https://superhuman.com',
    category: 'Email',
    rating: 4.4
  },

  // AI IMAGE GENERATION
  {
    id: '28',
    name: 'Adobe Firefly',
    icon: '🔵',
    description: 'Creative generative AI for images, text effects, and design',
    website: 'https://firefly.adobe.com',
    category: 'Image Generation',
    rating: 4.3
  },
  {
    id: '29',
    name: 'DALL-E',
    icon: '🟢',
    description: 'OpenAI\'s image generator that creates images from text descriptions',
    website: 'https://openai.com/dall-e-2',
    category: 'Image Generation',
    rating: 4.5
  },
  {
    id: '30',
    name: 'FLUX.1',
    icon: '🟡',
    description: 'Advanced AI image generation model with high-quality outputs',
    website: 'https://flux.ai',
    category: 'Image Generation',
    rating: 4.4
  },
  {
    id: '31',
    name: 'Ideogram',
    icon: '🟣',
    description: 'AI image generator specializing in text-to-image creation',
    website: 'https://ideogram.ai',
    category: 'Image Generation',
    rating: 4.2
  },
  {
    id: '32',
    name: 'Midjourney',
    icon: '🔵',
    description: 'AI art generator creating stunning images from text prompts',
    website: 'https://midjourney.com',
    category: 'Image Generation',
    rating: 4.7,
    featured: true
  },
  {
    id: '33',
    name: 'Recraft',
    icon: '🟠',
    description: 'AI design tool for creating vector art and illustrations',
    website: 'https://recraft.ai',
    category: 'Image Generation',
    rating: 4.1
  },
  {
    id: '34',
    name: 'StableDiffusion',
    icon: '🟢',
    description: 'Open-source AI image generation with customizable models',
    website: 'https://stability.ai',
    category: 'Image Generation',
    rating: 4.3
  },

  // AI SPREADSHEET
  {
    id: '35',
    name: 'Bricks',
    icon: '🟠',
    description: 'AI-powered spreadsheet that creates visuals from your data',
    website: 'https://bricks.co',
    category: 'Spreadsheet',
    rating: 4.2
  },
  {
    id: '36',
    name: 'Formula Bot',
    icon: '🟢',
    description: 'AI assistant for Excel and Google Sheets formula generation',
    website: 'https://formulabot.com',
    category: 'Spreadsheet',
    rating: 4.0
  },
  {
    id: '37',
    name: 'GPTsheet',
    icon: '🟡',
    description: 'Bring ChatGPT functions directly into Google Sheets',
    website: 'https://gptsheet.com',
    category: 'Spreadsheet',
    rating: 3.9
  },
  {
    id: '38',
    name: 'Rows AI',
    icon: '🔵',
    description: 'Next-generation spreadsheet with built-in AI capabilities',
    website: 'https://rows.com',
    category: 'Spreadsheet',
    rating: 4.1
  },
  {
    id: '39',
    name: 'SheetAI',
    icon: '🟣',
    description: 'AI-powered Google Sheets add-on for data analysis',
    website: 'https://sheetai.app',
    category: 'Spreadsheet',
    rating: 3.8
  },

  // AI MEETING NOTES
  {
    id: '40',
    name: 'Airgram',
    icon: '🔵',
    description: 'AI meeting assistant for recording, transcribing, and summarizing',
    website: 'https://airgram.io',
    category: 'Meeting Notes',
    rating: 4.1
  },
  {
    id: '41',
    name: 'Equal Time',
    icon: '🟡',
    description: 'AI-powered meeting analytics and participation tracking',
    website: 'https://equaltime.io',
    category: 'Meeting Notes',
    rating: 3.9
  },
  {
    id: '42',
    name: 'Fireflies',
    icon: '🟠',
    description: 'AI meeting recorder and note-taker for video conferences',
    website: 'https://fireflies.ai',
    category: 'Meeting Notes',
    rating: 4.3
  },
  {
    id: '43',
    name: 'Fellow.App',
    icon: '🟢',
    description: 'AI meeting management with agendas, notes, and action items',
    website: 'https://fellow.app',
    category: 'Meeting Notes',
    rating: 4.2
  },
  {
    id: '44',
    name: 'Grain',
    icon: '🟣',
    description: 'AI-powered conversation analytics and meeting insights',
    website: 'https://grain.co',
    category: 'Meeting Notes',
    rating: 4.0
  },
  {
    id: '45',
    name: 'Krisp',
    icon: '🔵',
    description: 'AI noise cancellation and meeting transcription tool',
    website: 'https://krisp.ai',
    category: 'Meeting Notes',
    rating: 4.4
  },
  {
    id: '46',
    name: 'Otter',
    icon: '🟢',
    description: 'AI meeting transcription and collaboration platform',
    website: 'https://otter.ai',
    category: 'Meeting Notes',
    rating: 4.5,
    featured: true
  },

  // AI WORKFLOW AUTOMATION
  {
    id: '47',
    name: 'Integromat',
    icon: '🔵',
    description: 'Advanced automation platform with AI-powered workflows',
    website: 'https://integromat.com',
    category: 'Workflow Automation',
    rating: 4.2
  },
  {
    id: '48',
    name: 'Make',
    icon: '🟣',
    description: 'Visual automation platform for connecting apps and services',
    website: 'https://make.com',
    category: 'Workflow Automation',
    rating: 4.3
  },
  {
    id: '49',
    name: 'Monday.com',
    icon: '🟠',
    description: 'Work management platform with AI-powered automation',
    website: 'https://monday.com',
    category: 'Workflow Automation',
    rating: 4.1
  },
  {
    id: '50',
    name: 'N8n',
    icon: '🟡',
    description: 'Open-source workflow automation with AI integrations',
    website: 'https://n8n.io',
    category: 'Workflow Automation',
    rating: 4.0
  },
  {
    id: '51',
    name: 'Zapier',
    icon: '🟠',
    description: 'Automation platform connecting 5000+ apps with AI features',
    website: 'https://zapier.com',
    category: 'Workflow Automation',
    rating: 4.4
  },

  // AI WRITING GENERATION
  {
    id: '52',
    name: 'Copy.AI',
    icon: '🟢',
    description: 'AI copywriter for marketing content and creative writing',
    website: 'https://copy.ai',
    category: 'Writing',
    rating: 4.2
  },
  {
    id: '53',
    name: 'Grammarly',
    icon: '🟢',
    description: 'AI writing assistant for grammar, style, and clarity',
    website: 'https://grammarly.com',
    category: 'Writing',
    rating: 4.5,
    featured: true
  },
  {
    id: '54',
    name: 'Jasper',
    icon: '🟣',
    description: 'AI content platform for enterprise marketing teams',
    website: 'https://jasper.ai',
    category: 'Writing',
    rating: 4.3
  },
  {
    id: '55',
    name: 'JotBot',
    icon: '🔵',
    description: 'AI writing assistant that mimics your personal style',
    website: 'https://jotbot.ai',
    category: 'Writing',
    rating: 4.0
  },
  {
    id: '56',
    name: 'Quillbot',
    icon: '🟡',
    description: 'AI paraphrasing and writing enhancement tool',
    website: 'https://quillbot.com',
    category: 'Writing',
    rating: 4.1
  },
  {
    id: '57',
    name: 'Quillow',
    icon: '🟠',
    description: 'AI-powered long-form content creation and editing',
    website: 'https://quillow.ai',
    category: 'Writing',
    rating: 3.9
  },
  {
    id: '58',
    name: 'Rytr',
    icon: '🔵',
    description: 'AI writing assistant for blogs, emails, and ad copy',
    website: 'https://rytr.me',
    category: 'Writing',
    rating: 4.0
  },
  {
    id: '59',
    name: 'Sudowrite',
    icon: '🟢',
    description: 'AI writing partner for creative fiction and storytelling',
    website: 'https://sudowrite.com',
    category: 'Writing',
    rating: 4.2
  },
  {
    id: '60',
    name: 'Writesonic',
    icon: '🟣',
    description: 'AI content creation platform for marketing and SEO',
    website: 'https://writesonic.com',
    category: 'Writing',
    rating: 4.1
  },

  // AI SCHEDULING
  {
    id: '61',
    name: 'Calendly',
    icon: '🟠',
    description: 'AI-enhanced scheduling and appointment booking platform',
    website: 'https://calendly.com',
    category: 'Scheduling',
    rating: 4.3
  },
  {
    id: '62',
    name: 'Clockwise',
    icon: '🔵',
    description: 'AI-powered focus time and calendar optimization',
    website: 'https://clockwise.com',
    category: 'Scheduling',
    rating: 4.1
  },
  {
    id: '63',
    name: 'Motion',
    icon: '🟣',
    description: 'AI calendar that automatically plans your perfect day',
    website: 'https://motion.com',
    category: 'Scheduling',
    rating: 4.2
  },
  {
    id: '64',
    name: 'Reclaim.AI',
    icon: '🟢',
    description: 'AI scheduling assistant for defending focus time',
    website: 'https://reclaim.ai',
    category: 'Scheduling',
    rating: 4.0
  },
  {
    id: '65',
    name: 'Taskade',
    icon: '🟡',
    description: 'AI-powered project management and team collaboration',
    website: 'https://taskade.com',
    category: 'Scheduling',
    rating: 3.9
  },
  {
    id: '66',
    name: 'Trevor AI',
    icon: '🔵',
    description: 'AI time-blocking and productivity planning assistant',
    website: 'https://trevor.ai',
    category: 'Scheduling',
    rating: 3.8
  },

  // AI KNOWLEDGE MANAGEMENT
  {
    id: '67',
    name: 'Mem',
    icon: '🟡',
    description: 'AI-powered note-taking with automatic organization',
    website: 'https://mem.ai',
    category: 'Knowledge Management',
    rating: 4.0
  },
  {
    id: '68',
    name: 'Notion',
    icon: '⚫',
    description: 'All-in-one workspace with AI writing and organization features',
    website: 'https://notion.so',
    category: 'Knowledge Management',
    rating: 4.4,
    featured: true
  },
  {
    id: '69',
    name: 'Tettra',
    icon: '🔵',
    description: 'AI-powered team knowledge base and documentation',
    website: 'https://tettra.com',
    category: 'Knowledge Management',
    rating: 3.9
  },

  // AI VIDEO GENERATION
  {
    id: '70',
    name: 'Descript',
    icon: '🟣',
    description: 'AI video editing with text-based editing and voice cloning',
    website: 'https://descript.com',
    category: 'Video Generation',
    rating: 4.3
  },
  {
    id: '71',
    name: 'Heygen AI',
    icon: '🟠',
    description: 'AI avatar video generator with realistic human presenters',
    website: 'https://heygen.com',
    category: 'Video Generation',
    rating: 4.2
  },
  {
    id: '72',
    name: 'InVideo AI',
    icon: '🔵',
    description: 'AI video creation platform with templates and automation',
    website: 'https://invideo.io',
    category: 'Video Generation',
    rating: 4.1
  },
  {
    id: '73',
    name: 'Kling',
    icon: '🟡',
    description: 'AI video generation from text prompts and images',
    website: 'https://kling.ai',
    category: 'Video Generation',
    rating: 4.0
  },
  {
    id: '74',
    name: 'Krea AI',
    icon: '🟢',
    description: 'AI creative suite for generating videos and images',
    website: 'https://krea.ai',
    category: 'Video Generation',
    rating: 3.9
  },
  {
    id: '75',
    name: 'LTX Studio',
    icon: '⚫',
    description: 'AI filmmaking platform for complete video production',
    website: 'https://ltxstudio.ai',
    category: 'Video Generation',
    rating: 3.8
  },
  {
    id: '76',
    name: 'Luma AI',
    icon: '🔵',
    description: '3D AI video generation and neural rendering platform',
    website: 'https://lumalabs.ai',
    category: 'Video Generation',
    rating: 4.1
  },
  {
    id: '77',
    name: 'Pika AI',
    icon: '🟣',
    description: 'AI video generator creating videos from text and images',
    website: 'https://pika.art',
    category: 'Video Generation',
    rating: 4.0
  },
  {
    id: '78',
    name: 'Runway',
    icon: '⚫',
    description: 'AI video editing and generation platform for creators',
    website: 'https://runwayml.com',
    category: 'Video Generation',
    rating: 4.4,
    featured: true
  },
  {
    id: '79',
    name: 'Sora',
    icon: '🟢',
    description: 'OpenAI\'s text-to-video generation model',
    website: 'https://openai.com/sora',
    category: 'Video Generation',
    rating: 4.5
  },

  // AI DESIGN
  {
    id: '80',
    name: 'AutoDraw',
    icon: '🔵',
    description: 'Google\'s AI drawing tool that guesses what you\'re sketching',
    website: 'https://autodraw.com',
    category: 'Design',
    rating: 3.9
  },
  {
    id: '81',
    name: 'Canva',
    icon: '🔵',
    description: 'Design platform with AI-powered templates and magic tools',
    website: 'https://canva.com',
    category: 'Design',
    rating: 4.4,
    featured: true
  },
  {
    id: '82',
    name: 'Design.Com',
    icon: '🟠',
    description: 'AI-assisted logo and brand design platform',
    website: 'https://design.com',
    category: 'Design',
    rating: 4.0
  },
  {
    id: '83',
    name: 'Framer',
    icon: '⚫',
    description: 'AI-powered web design and prototyping tool',
    website: 'https://framer.com',
    category: 'Design',
    rating: 4.3
  },
  {
    id: '84',
    name: 'Microsoft Designer',
    icon: '🔵',
    description: 'AI design tool integrated with Microsoft 365 suite',
    website: 'https://designer.microsoft.com',
    category: 'Design',
    rating: 4.1
  },
  {
    id: '85',
    name: 'Uizard',
    icon: '🟡',
    description: 'AI-powered UI/UX design tool for rapid prototyping',
    website: 'https://uizard.io',
    category: 'Design',
    rating: 4.0
  },

  // AI DATA VISUALIZATION
  {
    id: '86',
    name: 'Deepnote',
    icon: '🔵',
    description: 'AI-enhanced data science notebook with collaboration features',
    website: 'https://deepnote.com',
    category: 'Data Visualization',
    rating: 4.2
  },
  {
    id: '87',
    name: 'Flourish',
    icon: '🟢',
    description: 'AI-powered data visualization and storytelling platform',
    website: 'https://flourish.studio',
    category: 'Data Visualization',
    rating: 4.1
  },
  {
    id: '88',
    name: 'Julius',
    icon: '🟠',
    description: 'AI data analyst that generates insights from your data',
    website: 'https://julius.ai',
    category: 'Data Visualization',
    rating: 4.0
  },
  {
    id: '89',
    name: 'Vizme',
    icon: '🟣',
    description: 'AI-powered data visualization and dashboard creation',
    website: 'https://vizme.io',
    category: 'Data Visualization',
    rating: 3.9
  },
  {
    id: '90',
    name: 'Zing Data',
    icon: '🟡',
    description: 'Mobile-first business intelligence with AI insights',
    website: 'https://zingdata.com',
    category: 'Data Visualization',
    rating: 3.8
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