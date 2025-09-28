'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, Sparkles, ArrowRight, X, Send } from 'lucide-react'

interface Recommendation {
  id: string
  name: string
  useCase: string
  website: string
  matchScore: number
}

interface WorkflowStep {
  step: number
  title: string
  description: string
  tools: Recommendation[]
}

export default function ChatbotTeaser() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedMode, setSelectedMode] = useState<'toolkit' | 'workflow' | null>(null)
  const [query, setQuery] = useState('')
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [workflow, setWorkflow] = useState<WorkflowStep[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [conversation, setConversation] = useState<Array<{ type: 'user' | 'ai', content: string | Recommendation[] | WorkflowStep[] }>>([])
  const [hasConversation, setHasConversation] = useState(false)

  useEffect(() => {
    // Check for saved conversation
    const saved = localStorage.getItem('ai-chat-conversation')
    if (saved) {
      const parsedConversation = JSON.parse(saved)
      if (parsedConversation.length > 0) {
        setHasConversation(true)
        setConversation(parsedConversation)
      }
    }
  }, [])

  const handleTryRecommendations = () => {
    setIsModalOpen(true)
    setSelectedMode(null) // Reset mode selection
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedMode(null)
    // Save conversation
    if (conversation.length > 0) {
      localStorage.setItem('ai-chat-conversation', JSON.stringify(conversation))
      setHasConversation(true)
    }
  }

  const handleModeSelect = (mode: 'toolkit' | 'workflow') => {
    setSelectedMode(mode)
    // Reset conversation state when switching modes to prevent conflicts
    setConversation([])
    setRecommendations([])
    setWorkflow([])
    setQuery('')
  }

  const handleSwitchMode = () => {
    // Reset all state and show mode selection again
    setSelectedMode(null)
    setConversation([])
    setRecommendations([])
    setWorkflow([])
    setQuery('')
  }

  const handleSubmitQuery = async () => {
    if (!query.trim() || !selectedMode) return

    setIsLoading(true)
    const userMessage = query
    setQuery('')

    // Add user message to conversation
    const newConversation = [...conversation, { type: 'user' as const, content: userMessage }]
    setConversation(newConversation)

    try {
      const response = await fetch('/api/ai-recommendations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: userMessage,
          mode: selectedMode
        })
      })

      const data = await response.json()

      if (selectedMode === 'toolkit' && data.recommendations) {
        setRecommendations(data.recommendations)
        setConversation([...newConversation, { type: 'ai' as const, content: data.recommendations }])
      } else if (selectedMode === 'workflow' && data.workflow) {
        setWorkflow(data.workflow)
        setConversation([...newConversation, { type: 'ai' as const, content: data.workflow }])
      }
    } catch (error) {
      console.error('Failed to get recommendations:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleResumeChat = () => {
    setIsModalOpen(true)
  }
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="text-primary font-medium">AI-Powered Recommendations</span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ask AI to Find Your
              <span className="text-primary"> Perfect Tool</span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Describe what you need, and our AI will instantly recommend the best tools
              for your specific requirements. No more endless searching.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-gray-700">Personalized recommendations based on your needs</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-gray-700">Compare top 3 suggestions instantly</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-gray-700">Get started in under 30 seconds</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleTryRecommendations}
                className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Try AI Recommendations</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {hasConversation && (
                <button
                  onClick={handleResumeChat}
                  className="btn-secondary text-lg px-8 py-4 flex items-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Resume your tool search?</span>
                </button>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">AI Assistant</h4>
                  <span className="text-sm text-green-500">● Online</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                  <p className="text-sm text-gray-700">
                    "I need an AI tool to help me write better code and catch bugs"
                  </p>
                </div>

                <div className="bg-primary/10 rounded-lg p-4 ml-4">
                  <p className="text-sm text-gray-700 mb-3">
                    Based on your needs, here are my top 3 recommendations:
                  </p>

                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm">GitHub Copilot</span>
                        <span className="text-xs bg-accent text-white px-2 py-1 rounded">95% match</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm">Tabnine</span>
                        <span className="text-xs bg-primary text-white px-2 py-1 rounded">88% match</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm">CodeT5</span>
                        <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded">82% match</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* AI Chat Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">AI Tool Recommendations</h3>
                  <span className="text-sm text-green-500">● Ready to help</span>
                </div>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {!selectedMode && conversation.length === 0 && (
                <div className="text-center py-8">
                  <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Choose Your AI Assistant Mode</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
                    <button
                      onClick={() => handleModeSelect('toolkit')}
                      className="p-6 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-all text-left"
                    >
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                        <MessageCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Toolkit Recommendation</h4>
                      <p className="text-sm text-gray-600">Find the best individual tools for specific tasks</p>
                    </button>
                    <button
                      onClick={() => handleModeSelect('workflow')}
                      className="p-6 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-all text-left"
                    >
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                        <Sparkles className="w-5 h-5 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Workflow Builder</h4>
                      <p className="text-sm text-gray-600">Get step-by-step project workflows with recommended tools</p>
                    </button>
                  </div>
                </div>
              )}

              {selectedMode && conversation.length === 0 && (
                <div className="text-center text-gray-500 py-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {selectedMode === 'toolkit' ? <MessageCircle className="w-6 h-6 text-primary" /> : <Sparkles className="w-6 h-6 text-primary" />}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {selectedMode === 'toolkit' ? 'Toolkit Recommendation Mode' : 'Workflow Builder Mode'}
                  </h3>
                  <p className="mb-2">
                    {selectedMode === 'toolkit'
                      ? 'Tell me what specific task you need tools for!'
                      : 'Describe your project and I\'ll create a complete workflow!'
                    }
                  </p>
                  <p className="text-sm">
                    {selectedMode === 'toolkit'
                      ? 'Example: "I need tools to edit videos"'
                      : 'Example: "SaaS development" or "Launch a podcast"'
                    }
                  </p>
                </div>
              )}

              {conversation.map((message, index) => (
                <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {message.type === 'user' ? (
                    <div className="bg-primary text-white rounded-lg px-4 py-2 max-w-xs">
                      {message.content as string}
                    </div>
                  ) : (
                    <div className="space-y-3 max-w-full">
                      {Array.isArray(message.content) && message.content.length > 0 && 'step' in message.content[0] ? (
                        // Workflow response
                        <div className="bg-gray-100 rounded-lg p-4">
                          <p className="text-sm text-gray-700 mb-4">Here's your complete project workflow:</p>
                          <div className="space-y-4">
                            {(message.content as WorkflowStep[]).map((step) => (
                              <div key={step.step} className="bg-white rounded-lg p-4 border border-gray-200">
                                <div className="flex items-start space-x-3 mb-3">
                                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                                    {step.step}
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                                    <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                      {step.tools.map((tool) => (
                                        <div
                                          key={tool.id}
                                          className="bg-gray-50 rounded-lg p-3 hover:bg-primary/5 transition-colors cursor-pointer border"
                                          onClick={() => window.open(tool.website, '_blank')}
                                        >
                                          <div className="flex items-center justify-between mb-1">
                                            <span className="font-medium text-sm">{tool.name}</span>
                                            <ArrowRight className="w-3 h-3 text-primary" />
                                          </div>
                                          <p className="text-xs text-gray-600">{tool.useCase}</p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        // Toolkit response
                        <div className="bg-gray-100 rounded-lg p-4">
                          <p className="text-sm text-gray-700 mb-3">Here are my top recommendations for you:</p>
                          <div className="space-y-3">
                            {(message.content as Recommendation[]).map((rec) => (
                              <div
                                key={rec.id}
                                className="bg-white rounded-lg p-4 border border-gray-200 hover:border-primary transition-colors cursor-pointer"
                                onClick={() => window.open(rec.website, '_blank')}
                              >
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-semibold text-gray-900">{rec.name}</h4>
                                  <span className="text-xs bg-primary text-white px-2 py-1 rounded-full">
                                    {rec.matchScore}% match
                                  </span>
                                </div>
                                <p className="text-sm text-gray-600 mb-2">{rec.useCase}</p>
                                <div className="flex items-center text-primary text-sm">
                                  <span>Visit tool</span>
                                  <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                      <span className="text-sm text-gray-600">Finding the perfect tools for you...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            {selectedMode && (
              <div className="border-t border-gray-200 p-6">
                <div className="flex items-center space-x-3">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && !isLoading && handleSubmitQuery()}
                    placeholder={selectedMode === 'toolkit'
                      ? "What task do you need tools for?"
                      : "What project do you want to build?"
                    }
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSubmitQuery}
                    disabled={!query.trim() || isLoading}
                    className="bg-primary text-white p-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${selectedMode === 'toolkit' ? 'bg-blue-500' : 'bg-green-500'}`}></div>
                    <span className="text-sm font-medium text-gray-700">
                      {selectedMode === 'toolkit' ? 'Toolkit Mode' : 'Workflow Mode'}
                    </span>
                  </div>
                  <button
                    onClick={handleSwitchMode}
                    className="flex items-center space-x-1 px-3 py-1.5 text-xs font-medium text-primary bg-primary/10 hover:bg-primary/20 rounded-full transition-colors duration-200"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    <span>Switch Mode</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}