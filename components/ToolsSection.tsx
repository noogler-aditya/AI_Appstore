export default function ToolsSection() {
  const mockTools = [
    {
      id: '1',
      name: 'ChatGPT',
      logo: '🤖',
      description: 'Advanced conversational AI for writing, coding, and problem-solving',
      price: 'Free',
      rating: 4.8,
      category: 'AI Assistant'
    },
    {
      id: '2',
      name: 'GitHub Copilot',
      logo: '👨‍💻',
      description: 'AI pair programmer that helps you write code faster',
      price: '$10/mo',
      rating: 4.7,
      category: 'Coding'
    },
    {
      id: '3',
      name: 'Midjourney',
      logo: '🎨',
      description: 'AI-powered image generation from text descriptions',
      price: '$10/mo',
      rating: 4.9,
      category: 'Design'
    },
    {
      id: '4',
      name: 'Notion AI',
      logo: '📝',
      description: 'AI writing assistant integrated into your workspace',
      price: '$8/mo',
      rating: 4.6,
      category: 'Productivity'
    },
    {
      id: '5',
      name: 'Runway ML',
      logo: '🎬',
      description: 'AI-powered video generation and editing platform',
      price: '$15/mo',
      rating: 4.7,
      category: 'Video'
    },
    {
      id: '6',
      name: 'Grammarly',
      logo: '✍️',
      description: 'AI-powered writing assistant for grammar and style',
      price: 'Free',
      rating: 4.5,
      category: 'Writing'
    }
  ]

  return (
    <section id="tools-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover AI Tools
          </h2>
          <p className="text-xl text-gray-600">
            Search, filter, and compare the best AI tools for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {mockTools.map((tool) => (
            <div key={tool.id} className="card p-6 group cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                    {tool.logo}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                      {tool.name}
                    </h3>
                    <span className="text-sm text-gray-500">{tool.category}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {tool.description}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm font-medium text-gray-700">{tool.rating}</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">{tool.price}</span>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-3 rounded-lg text-sm transition-colors duration-200">
                  Compare
                </button>
                <button className="flex-1 btn-primary py-2 text-sm">
                  Open
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}