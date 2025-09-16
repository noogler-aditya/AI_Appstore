import { Search, GitCompare, Sparkles } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Discover",
      description: "Browse AI tools by category or search for specific needs",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: GitCompare,
      title: "Compare",
      description: "Side-by-side comparison of features, pricing, and ratings",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Sparkles,
      title: "Get Recommendations",
      description: "AI-powered suggestions tailored to your specific requirements",
      color: "bg-orange-100 text-orange-500"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find your perfect AI tool in three simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <step.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full">
                  <div className="w-full h-0.5 bg-gray-200 relative">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-primary text-lg px-8 py-4">
            Start Exploring Now →
          </button>
        </div>
      </div>
    </section>
  )
}