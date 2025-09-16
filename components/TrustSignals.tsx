import { Users, Shield, Zap } from 'lucide-react'

export default function TrustSignals() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-gray-600 font-medium">
            Trusted by 10,000+ students and professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">10,000+ Users</h3>
            <p className="text-gray-600 text-sm">
              Students and professionals trust our recommendations
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Verified Tools</h3>
            <p className="text-gray-600 text-sm">
              Every tool is tested and verified by our team
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Always Updated</h3>
            <p className="text-gray-600 text-sm">
              Latest tools and features added daily
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-center space-x-8 mt-12 opacity-60">
          <div className="text-2xl font-bold text-gray-400">Google</div>
          <div className="text-2xl font-bold text-gray-400">Microsoft</div>
          <div className="text-2xl font-bold text-gray-400">OpenAI</div>
          <div className="text-2xl font-bold text-gray-400">Anthropic</div>
        </div>
      </div>
    </section>
  )
}