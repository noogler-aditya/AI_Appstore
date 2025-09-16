'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, Clock, Star, ExternalLink } from 'lucide-react'

interface TrendingItem {
  id: string
  name: string
  logo: string
  description: string
  category: string
  rating: number
  price: string
  timeAgo: string
  trendType: 'hot' | 'new' | 'rising'
  changePercent: number
}

export default function TrendingFeed() {
  const [items, setItems] = useState<TrendingItem[]>([])
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date())

  const mockTrendingItems: TrendingItem[] = [
    {
      id: '1',
      name: 'Claude 3',
      logo: '🧠',
      description: 'Advanced AI assistant with superior reasoning capabilities',
      category: 'AI Assistant',
      rating: 4.9,
      price: '$20/mo',
      timeAgo: '2 min ago',
      trendType: 'hot',
      changePercent: 15
    },
    {
      id: '2',
      name: 'Runway ML',
      logo: '🎬',
      description: 'AI-powered video generation and editing platform',
      category: 'Video',
      rating: 4.7,
      price: '$15/mo',
      timeAgo: '5 min ago',
      trendType: 'rising',
      changePercent: 8
    },
    {
      id: '3',
      name: 'Perplexity AI',
      logo: '🔍',
      description: 'AI search engine with real-time information',
      category: 'Search',
      rating: 4.6,
      price: 'Free',
      timeAgo: '8 min ago',
      trendType: 'new',
      changePercent: 12
    },
    {
      id: '4',
      name: 'Cursor',
      logo: '⚡',
      description: 'AI-first code editor built for productivity',
      category: 'Coding',
      rating: 4.8,
      price: '$20/mo',
      timeAgo: '12 min ago',
      trendType: 'hot',
      changePercent: 22
    },
    {
      id: '5',
      name: 'Luma AI',
      logo: '📱',
      description: '3D capture and neural rendering technology',
      category: '3D/AR',
      rating: 4.5,
      price: 'Free',
      timeAgo: '15 min ago',
      trendType: 'rising',
      changePercent: 6
    }
  ]

  useEffect(() => {
    // Initialize with mock data
    setItems(mockTrendingItems)

    // Simulate auto-updating feed
    const interval = setInterval(() => {
      setLastUpdate(new Date())
      
      // Randomly shuffle and update items to simulate real-time changes
      setItems(prev => {
        const shuffled = [...prev]
        // Randomly update one item's timeAgo and changePercent
        const randomIndex = Math.floor(Math.random() * shuffled.length)
        shuffled[randomIndex] = {
          ...shuffled[randomIndex],
          timeAgo: 'Just now',
          changePercent: Math.floor(Math.random() * 25) + 1
        }
        return shuffled
      })
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const getTrendIcon = (trendType: string) => {
    switch (trendType) {
      case 'hot':
        return '🔥'
      case 'new':
        return '✨'
      case 'rising':
        return '📈'
      default:
        return '🔥'
    }
  }

  const getTrendColor = (trendType: string) => {
    switch (trendType) {
      case 'hot':
        return 'text-red-500 bg-red-50'
      case 'new':
        return 'text-blue-500 bg-blue-50'
      case 'rising':
        return 'text-green-500 bg-green-50'
      default:
        return 'text-red-500 bg-red-50'
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-orange-500" />
            <h3 className="text-lg font-semibold text-gray-900">Live Trending Feed</h3>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>Updated {lastUpdate.toLocaleTimeString()}</span>
          </div>
        </div>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer group"
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                  {item.logo}
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                    {item.name}
                  </h4>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${getTrendColor(item.trendType)}`}>
                    {getTrendIcon(item.trendType)} {item.trendType}
                  </span>
                  <span className="text-xs text-green-600 font-medium">
                    +{item.changePercent}%
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 mb-2 line-clamp-1">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>{item.category}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span>{item.rating}</span>
                    </div>
                    <span className="font-medium text-gray-700">{item.price}</span>
                  </div>
                  <span className="text-xs text-gray-400">{item.timeAgo}</span>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-gray-400 hover:text-primary">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 bg-gray-50 text-center">
        <button className="text-sm text-primary hover:text-primary/80 font-medium">
          View All Trending Tools
        </button>
      </div>
    </div>
  )
}