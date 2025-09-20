'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft, Home, Search } from 'lucide-react'

export default function CategoryNotFound() {
  const router = useRouter()
  
  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Search className="w-12 h-12 text-gray-400" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Category Not Found
        </h1>
        
        <p className="text-gray-600 mb-8">
          The category you're looking for doesn't exist or has been moved. 
          Let's get you back to exploring our AI tools.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => router.back()}
            className="btn-secondary flex items-center justify-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
          
          <button 
            onClick={() => router.push('/')}
            className="btn-primary flex items-center justify-center space-x-2"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </button>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Popular categories:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['Coding', 'Design', 'Writing', 'Analytics'].map((category) => (
              <button
                key={category}
                onClick={() => router.push(`/category/${category.toLowerCase()}`)}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}