import { Star, ExternalLink, GitCompare } from 'lucide-react'

interface ToolCardProps {
  name: string
  description: string
  logo: string
  price: string
  rating: number
  category: string
  isNew?: boolean
  isTrending?: boolean
  onCompare?: () => void
  onOpen?: () => void
}

export default function ToolCard({ 
  name, 
  description, 
  logo, 
  price, 
  rating, 
  category,
  isNew,
  isTrending,
  onCompare,
  onOpen
}: ToolCardProps) {
  return (
    <div className="card p-6 group cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
            {logo}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
              {name}
            </h3>
            <span className="text-sm text-gray-500">{category}</span>
          </div>
        </div>
        <div className="flex space-x-1">
          {isNew && (
            <span className="bg-accent text-white text-xs px-2 py-1 rounded-full font-medium">
              New
            </span>
          )}
          {isTrending && (
            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              Trending
            </span>
          )}
        </div>
      </div>
      
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {description}
      </p>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium text-gray-700">{rating}</span>
        </div>
        <span className="text-sm font-semibold text-gray-900">{price}</span>
      </div>
      
      <div className="flex space-x-2">
        <button 
          onClick={onCompare}
          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-3 rounded-lg text-sm transition-colors duration-200 flex items-center justify-center space-x-1"
          aria-label={`Compare ${name}`}
        >
          <GitCompare className="w-4 h-4" />
          <span>Compare</span>
        </button>
        <button 
          onClick={onOpen}
          className="flex-1 btn-primary py-2 text-sm flex items-center justify-center space-x-1"
          aria-label={`Open ${name}`}
        >
          <ExternalLink className="w-4 h-4" />
          <span>Open</span>
        </button>
      </div>
    </div>
  )
}