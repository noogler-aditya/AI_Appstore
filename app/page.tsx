import HeroSection from '../components/HeroSection'
import TrustSignals from '../components/TrustSignals'
import HowItWorks from '../components/HowItWorks'
import CategoriesSection from '../components/CategoriesSection'
import ChatbotTeaser from '../components/ChatbotTeaser'

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustSignals />
      <HowItWorks />
      <CategoriesSection />
      <ChatbotTeaser />
    </main>
  )
}