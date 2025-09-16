import { MessageCircle, Sparkles, ArrowRight } from 'lucide-react'

export default function ChatbotTeaser() {
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
            
            <button className="btn-primary text-lg px-8 py-4 flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span>Try AI Recommendations</span>
              <ArrowRight className="w-5 h-5" />
            </button>
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
    </section>
  )
}