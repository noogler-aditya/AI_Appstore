import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Toolkit Hub - Find the Right AI Tool in Seconds',
  description: 'Discover, compare, and get AI-powered recommendations for the best AI tools. Trusted by 10,000+ students and professionals.',
  keywords: 'AI tools, artificial intelligence, productivity, comparison, recommendations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}