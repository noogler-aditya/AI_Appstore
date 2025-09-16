'use client'

import { useState } from 'react'
import { Search, Sparkles } from 'lucide-react'

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = () => {
    // Store the search query so ToolsSection can pick it up
    if (typeof window !== 'undefined' && searchQuery.trim()) {
      sessionStorage.setItem('searchQuery', searchQuery.trim())
    }
    
    // Scroll to tools section
    setTimeout(() => {
      const toolsSection = document.getElementById('tools-section')
      if (toolsSection) {
        toolsSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const handleBrowseTools = () => {
    // Scroll to tools section
    const toolsSection = document.getElementById('tools-section')
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-primary font-medium">AI-Powered Discovery</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Find the Right AI Tool
            <span className="text-primary"> in Seconds</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover, compare, and get AI-powered recommendations—all in one place. 
            Stop wasting hours hunting across fragmented lists.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <button 
              onClick={handleBrowseTools}
              className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
            >
              Get Started Free
            </button>
            <button 
              onClick={handleBrowseTools}
              className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto flex items-center justify-center space-x-2"
            >
              <Search className="w-5 h-5" />
              <span>Browse Tools</span>
            </button>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 max-w-2xl mx-auto">
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
              <Search className="w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Search for AI tools... (e.g., 'code assistant', 'image generator')"
                className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
                aria-label="Search AI tools"
              />
              <button 
                onClick={handleSearch}
                className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}