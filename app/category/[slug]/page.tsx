'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { toolsData } from '@/data/tools'

interface CategoryPageProps {
  params: {
    slug: string
  }
}

interface Tool {
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

// Convert URL slug to category name
function formatCategoryName(slug: string): string {
  // Handle special cases for multi-word categories
  const specialCases: { [key: string]: string } = {
    'image-generation': 'Image Generation',
    'meeting-notes': 'Meeting Notes',
    'workflow-automation': 'Workflow Automation',
    'knowledge-management': 'Knowledge Management',
    'video-generation': 'Video Generation',
    'data-visualization': 'Data Visualization'
  }

  if (specialCases[slug]) {
    return specialCases[slug]
  }

  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// Get tools by category
function getToolsByCategory(category: string): Tool[] {
  return toolsData.filter(tool =>
    tool.category.toLowerCase() === category.toLowerCase()
  )
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const router = useRouter()
  const [tools, setTools] = useState<Tool[]>([])
  const [categoryName, setCategoryName] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const name = formatCategoryName(params.slug)
    const categoryTools = getToolsByCategory(name)

    setCategoryName(name)
    setTools(categoryTools)
    setLoading(false)

    // Set page title
    if (typeof document !== 'undefined') {
      document.title = `${name} AI Tools - AI Toolkit Hub`
    }
  }, [params.slug])

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading tools...</p>
        </div>
      </main>
    )
  }

  // If no tools found for this category, show 404
  if (tools.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600 mb-8">The category you're looking for doesn't exist.</p>
          <button
            onClick={() => router.push('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </main>
    )
  }

  const handleToolClick = (website: string, toolName: string) => {
    // Analytics tracking could be added here
    window.open(website, '_blank', 'noopener,noreferrer')
  }

  const handleBackClick = () => {
    router.back()
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Category Header */}
      <section className="category-header-animate bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <button
              onClick={() => router.push('/')}
              className="flex items-center space-x-1 hover:text-blue-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Home</span>
            </button>
            <span>/</span>
            <span className="text-gray-900 font-medium">{categoryName}</span>
          </nav>

          {/* Back Button */}
          <button
            onClick={handleBackClick}
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors mb-8 group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Categories</span>
          </button>

          {/* Category Title and Info */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {categoryName} <span className="text-blue-600">AI Tools</span>
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Discover the best {categoryName.toLowerCase()} AI tools to enhance your workflow and productivity.
            </p>

            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200 shadow-sm">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="text-sm font-medium text-gray-700">
                {tools.length} {tools.length === 1 ? 'tool' : 'tools'} available
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div
                key={tool.id}
                className="tool-card-animate tool-card-hover bg-white rounded-xl border border-gray-200 shadow-sm p-6 group cursor-pointer relative overflow-hidden"
                onClick={() => handleToolClick(tool.website, tool.name)}
                style={{
                  opacity: 0,
                  animationDelay: `${index * 0.1}s`
                }}
                role="button"
                tabIndex={0}
                aria-label={`Open ${tool.name} - ${tool.description}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleToolClick(tool.website, tool.name)
                  }
                }}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                {/* Tool Icon and Header */}
                <div className="relative flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      {tool.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 text-lg">
                        {tool.name}
                      </h3>
                      {tool.featured && (
                        <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium mt-1">
                          ⭐ Featured
                        </span>
                      )}
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>

                {/* Tool Description */}
                <div className="relative">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {tool.description}
                  </p>
                </div>

                {/* Tool Metadata */}
                <div className="relative flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    {tool.rating && (
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm font-medium text-gray-700">{tool.rating}</span>
                      </div>
                    )}
                    {tool.pricing && (
                      <span className="text-sm font-semibold text-gray-900 bg-gray-100 px-2 py-1 rounded-md">
                        {tool.pricing}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-1 text-blue-600 group-hover:translate-x-1 transition-transform duration-200">
                    <span className="text-sm font-medium">Visit</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State Message */}
          {tools.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No tools found</h3>
              <p className="text-gray-600 mb-6">We're working on adding more tools to this category.</p>
              <button
                onClick={() => router.push('/')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Explore Other Categories
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}