'use client'

import { Code, Palette, PenTool, Heart, BarChart3, GraduationCap, Camera, MessageSquare, Bot, Presentation, Mail, Image, FileSpreadsheet, Calendar, Workflow, Brain, Video, Zap } from 'lucide-react'

export default function CategoriesSection() {
  const handleCategoryClick = (categoryName: string) => {
    const slug = categoryName.toLowerCase().replace(/\s+/g, '-')
    // Use Next.js router for better performance
    window.location.href = `/category/${slug}`
  }
  const categories = [
    {
      icon: Bot,
      name: "Chatbots",
      count: "8+ tools",
      color: "bg-blue-100 text-blue-600",
      popular: true
    },
    {
      icon: Presentation,
      name: "Presentation",
      count: "8+ tools",
      color: "bg-purple-100 text-purple-600",
      popular: true
    },
    {
      icon: Code,
      name: "Coding",
      count: "6+ tools",
      color: "bg-green-100 text-green-600",
      popular: true
    },
    {
      icon: Mail,
      name: "Email",
      count: "5+ tools",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Image,
      name: "Image Generation",
      count: "7+ tools",
      color: "bg-pink-100 text-pink-600",
      popular: true
    },
    {
      icon: FileSpreadsheet,
      name: "Spreadsheet",
      count: "5+ tools",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: GraduationCap,
      name: "Meeting Notes",
      count: "7+ tools",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: Zap,
      name: "Workflow Automation",
      count: "5+ tools",
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: PenTool,
      name: "Writing",
      count: "9+ tools",
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      icon: Calendar,
      name: "Scheduling",
      count: "6+ tools",
      color: "bg-cyan-100 text-cyan-600"
    },
    {
      icon: Brain,
      name: "Knowledge Management",
      count: "3+ tools",
      color: "bg-amber-100 text-amber-600"
    },
    {
      icon: Video,
      name: "Video Generation",
      count: "10+ tools",
      color: "bg-rose-100 text-rose-600"
    },
    {
      icon: Palette,
      name: "Design",
      count: "6+ tools",
      color: "bg-violet-100 text-violet-600"
    },
    {
      icon: BarChart3,
      name: "Data Visualization",
      count: "5+ tools",
      color: "bg-lime-100 text-lime-600"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover AI tools organized by your specific needs and industry
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              onClick={() => handleCategoryClick(category.name)}
              className="card p-6 hover:scale-105 transition-transform duration-200 cursor-pointer group relative"
            >
              {category.popular && (
                <div className="absolute -top-2 -right-2 bg-accent text-white text-xs px-2 py-1 rounded-full font-medium">
                  Popular
                </div>
              )}
              
              <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <category.icon className="w-6 h-6" />
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              
              <p className="text-sm text-gray-500">
                {category.count}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-secondary text-lg px-8 py-4">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  )
}