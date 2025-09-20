'use client'

import { Code, Palette, PenTool, Heart, BarChart3, GraduationCap, Camera, MessageSquare } from 'lucide-react'

export default function CategoriesSection() {
  const handleCategoryClick = (categoryName: string) => {
    const slug = categoryName.toLowerCase().replace(/\s+/g, '-')
    window.location.href = `/category/${slug}`
  }
  const categories = [
    {
      icon: Code,
      name: "Coding",
      count: "150+ tools",
      color: "bg-blue-100 text-blue-600",
      popular: true
    },
    {
      icon: Palette,
      name: "Design",
      count: "120+ tools",
      color: "bg-purple-100 text-purple-600",
      popular: true
    },
    {
      icon: PenTool,
      name: "Writing",
      count: "80+ tools",
      color: "bg-green-100 text-green-600",
      popular: true
    },
    {
      icon: Heart,
      name: "Healthcare",
      count: "45+ tools",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: BarChart3,
      name: "Analytics",
      count: "90+ tools",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: GraduationCap,
      name: "Education",
      count: "65+ tools",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: Camera,
      name: "Media",
      count: "75+ tools",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: MessageSquare,
      name: "Communication",
      count: "55+ tools",
      color: "bg-teal-100 text-teal-600"
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
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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