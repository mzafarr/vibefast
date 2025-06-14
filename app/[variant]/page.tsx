import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { TechStackShowcase } from "@/components/tech-stack-showcase"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { TimeWastedSection } from "@/components/time-wasted-section"
import { FeaturesSection } from "@/components/features-section"
import { FounderIntroSection } from "@/components/founder-intro-section"
import { AppsShowcaseSection } from "@/components/apps-showcase-section"
import { ShipItTodaySection } from "@/components/ship-it-today-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { AffiliateHeroSection } from "@/components/affiliate-hero-section"
import { notFound } from "next/navigation"

const variants = {
  affiliates: {
    title: "VibeFast Affiliate Program - Earn $99 Per Sale | React Native Boilerplate",
    description:
      "Join VibeFast affiliate program and earn $99 commission per sale. Promote the #1 React Native boilerplate loved by 1000+ developers. High conversion rates, lifetime cookies.",
    keywords:
      "affiliate program, React Native affiliate, mobile app affiliate, developer tools affiliate, earn money coding, VibeFast affiliate",
    heroComponent: AffiliateHeroSection,
  },
  // Add more variants as needed
}

type VariantKey = keyof typeof variants

interface PageProps {
  params: {
    variant: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const variant = variants[params.variant as VariantKey]

  if (!variant) {
    return {
      title: "Page Not Found | VibeFast",
      description: "The page you're looking for doesn't exist.",
    }
  }

  return {
    title: variant.title,
    description: variant.description,
    keywords: variant.keywords,
    openGraph: {
      title: variant.title,
      description: variant.description,
      url: `https://vibefast.com/${params.variant}`,
    },
    twitter: {
      title: variant.title,
      description: variant.description,
    },
    alternates: {
      canonical: `https://vibefast.com/${params.variant}`,
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(variants).map((variant) => ({
    variant,
  }))
}

export default function VariantPage({ params }: PageProps) {
  const variant = variants[params.variant as VariantKey]

  if (!variant) {
    notFound()
  }

  const HeroComponent = variant.heroComponent

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-20">
        <HeroComponent />
        <TechStackShowcase />
        <ProblemSolutionSection />
        <TimeWastedSection />
        <FeaturesSection />
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
