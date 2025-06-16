"use client"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TechStackShowcase } from "@/components/tech-stack-showcase"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { TimeWastedSection } from "@/components/time-wasted-section"
import { FeaturesSection } from "@/components/features-section"
import { VibeFastTerminalDemo } from "@/components/vibefast-terminal-demo"
import { QRPreviewSection } from "@/components/qr-preview-section"
import { VideoGuidesValueSection } from "@/components/video-guides-value-section"
import { FounderIntroSection } from "@/components/founder-intro-section"
import { AppsShowcaseSection } from "@/components/apps-showcase-section"
import { ShipItTodaySection } from "@/components/ship-it-today-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-20">
        <HeroSection />
        <TechStackShowcase />
        <ProblemSolutionSection />
        <TimeWastedSection />
        <FeaturesSection />
        <div className="container mx-auto px-4 sm:px-6 py-16 lg:py-24 flex justify-center">
          <VibeFastTerminalDemo />
        </div>
        <QRPreviewSection />
        <VideoGuidesValueSection />
        <FounderIntroSection />
        <AppsShowcaseSection />
        <ShipItTodaySection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
