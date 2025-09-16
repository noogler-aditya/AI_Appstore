import HeroSection from '../components/HeroSection'
import TrustSignals from '../components/TrustSignals'
import HowItWorks from '../components/HowItWorks'
import CategoriesSection from '../components/CategoriesSection'
import ChatbotTeaser from '../components/ChatbotTeaser'
import TrendingSection from '../components/TrendingSection'
import ToolsSection from '../components/ToolsSection'
import StickyCTA from '../components/StickyCTA'

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustSignals />
      <HowItWorks />
      <CategoriesSection />
      <ChatbotTeaser />
      <TrendingSection />
      <ToolsSection />
      <StickyCTA />
    </main>
  )
}