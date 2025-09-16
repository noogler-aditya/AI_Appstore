import ToolCard from './ToolCard'
import { TrendingUp } from 'lucide-react'

export default function TrendingSection() {
  const trendingTools = [
    {
      name: "ChatGPT",
      description: "Advanced conversational AI for writing, coding, and problem-solving",
      logo: "🤖",
      price: "Free",
      rating: 4.8,
      category: "Writing",
      isTrending: true
    },
    {
      name: "Midjourney",
      description: "AI-powered image generation from text descriptions",
      logo: "🎨",
      price: "$10/mo",
      rating: 4.9,
      category: "Design",
      isTrending: true
    },
    {
      name: "GitHub Copilot",
      description: "AI pair programmer that helps you write code faster",
      logo: "👨‍💻",
      price: "$10/mo",
      rating: 4.7,
      category: "Coding",
      isTrending: true
    },
    {
      name: "Notion AI",
      description: "AI writing assistant integrated into your workspace",
      logo: "📝",
      price: "$8/mo",
      rating: 4.6,
      category: "Productivity",
      isNew: true
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-6 h-6 text-orange-500" />
              <span className="text-orange-500 font-medium">Hot Right Now</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Trending AI Tools
            </h2>
            <p className="text-xl text-gray-600 mt-2">
              Most popular tools this week
            </p>
          </div>
          
          <button className="btn-secondary hidden md:block">
            View All Trending
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingTools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>
        
        <div className="text-center mt-12 md:hidden">
          <button className="btn-secondary w-full">
            View All Trending
          </button>
        </div>
      </div>
    </section>
  )
}