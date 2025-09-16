'use client'

import { X, Star, ExternalLink, Plus } from 'lucide-react'

interface Tool {
  id: string
  name: string
  logo: string
  description: string
  price: string
  rating: number
  category: string
  features: string[]
  pros: string[]
  cons: string[]
}

interface ComparisonTableProps {
  tools: Tool[]
  onRemoveTool: (toolId: string) => void
  onAddTool: () => void
}

export default function ComparisonTable({ tools, onRemoveTool, onAddTool }: ComparisonTableProps) {
  const maxTools = 5
  const canAddMore = tools.length < maxTools

  if (tools.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Start Comparing Tools
        </h3>
        <p className="text-gray-600 mb-6">
          Select up to {maxTools} tools to compare side by side
        </p>
        <button 
          onClick={onAddTool}
          className="btn-primary flex items-center space-x-2 mx-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add Tools to Compare</span>
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-900">
            Tool Comparison ({tools.length}/{maxTools})
          </h3>
          {canAddMore && (
            <button 
              onClick={onAddTool}
              className="btn-secondary flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add Tool</span>
            </button>
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <td className="p-4 font-medium text-gray-900 bg-gray-50 sticky left-0 z-10 min-w-[200px]">
                Tool
              </td>
              {tools.map((tool) => (
                <td key={tool.id} className="p-4 text-center bg-gray-50 min-w-[250px] relative">
                  <button
                    onClick={() => onRemoveTool(tool.id)}
                    className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500 transition-colors"
                    aria-label={`Remove ${tool.name}`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                      {tool.logo}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{tool.name}</h4>
                      <span className="text-sm text-gray-500">{tool.category}</span>
                    </div>
                  </div>
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="p-4 font-medium text-gray-700 bg-gray-50 sticky left-0 z-10">
                Description
              </td>
              {tools.map((tool) => (
                <td key={tool.id} className="p-4 text-sm text-gray-600">
                  {tool.description}
                </td>
              ))}
            </tr>
            
            <tr className="border-b border-gray-200">
              <td className="p-4 font-medium text-gray-700 bg-gray-50 sticky left-0 z-10">
                Price
              </td>
              {tools.map((tool) => (
                <td key={tool.id} className="p-4 text-center">
                  <span className="font-semibold text-gray-900">{tool.price}</span>
                </td>
              ))}
            </tr>
            
            <tr className="border-b border-gray-200">
              <td className="p-4 font-medium text-gray-700 bg-gray-50 sticky left-0 z-10">
                Rating
              </td>
              {tools.map((tool) => (
                <td key={tool.id} className="p-4 text-center">
                  <div className="flex items-center justify-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium text-gray-700">{tool.rating}</span>
                  </div>
                </td>
              ))}
            </tr>
            
            <tr className="border-b border-gray-200">
              <td className="p-4 font-medium text-gray-700 bg-gray-50 sticky left-0 z-10">
                Key Features
              </td>
              {tools.map((tool) => (
                <td key={tool.id} className="p-4">
                  <ul className="space-y-1 text-sm text-gray-600">
                    {tool.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
            
            <tr className="border-b border-gray-200">
              <td className="p-4 font-medium text-gray-700 bg-gray-50 sticky left-0 z-10">
                Pros
              </td>
              {tools.map((tool) => (
                <td key={tool.id} className="p-4">
                  <ul className="space-y-1 text-sm text-gray-600">
                    {tool.pros.map((pro, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
            
            <tr className="border-b border-gray-200">
              <td className="p-4 font-medium text-gray-700 bg-gray-50 sticky left-0 z-10">
                Cons
              </td>
              {tools.map((tool) => (
                <td key={tool.id} className="p-4">
                  <ul className="space-y-1 text-sm text-gray-600">
                    {tool.cons.map((con, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
            
            <tr>
              <td className="p-4 font-medium text-gray-700 bg-gray-50 sticky left-0 z-10">
                Action
              </td>
              {tools.map((tool) => (
                <td key={tool.id} className="p-4 text-center">
                  <button className="btn-primary w-full flex items-center justify-center space-x-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>Try Now</span>
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}