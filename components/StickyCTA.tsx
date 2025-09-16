'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, X } from 'lucide-react'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      
      // Show CTA after scrolling 50% of viewport height
      setIsVisible(scrollPosition > windowHeight * 0.5)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isDismissed || !isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-white shadow-2xl border-t border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <h3 className="font-semibold text-lg">Ready to find your perfect AI tool?</h3>
              <p className="text-blue-100 text-sm">Join 10,000+ users discovering better tools daily</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2">
              <span>Start Exploring Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button 
              onClick={() => setIsDismissed(true)}
              className="p-2 hover:bg-blue-600 rounded-lg transition-colors duration-200"
              aria-label="Dismiss banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}