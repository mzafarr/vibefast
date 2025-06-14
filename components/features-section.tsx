"use client"

import * as React from "react"
import { User, CreditCard, Shield, Cloud, Sparkles, MoreHorizontal, Check } from "lucide-react"

const featuresData = {
  onboarding: {
    id: "onboarding",
    name: "Onboarding",
    icon: User,
    content: [
      "Multiple Pages",
      "Single Page",
      "Request Review",
      "Integrated in Paywall and Signup Flow",
      "Time saved: 4 hours",
    ],
  },
  payments: {
    id: "payments",
    name: "Payments",
    icon: CreditCard,
    content: [
      "Stripe Integration",
      "In-App Purchases",
      "Subscription Management",
      "Payment Processing",
      "Time saved: 8 hours",
    ],
  },
  authentication: {
    id: "authentication",
    name: "Authentication",
    icon: Shield,
    content: [
      "Social Login (Google, Apple)",
      "Email/Password Auth",
      "User Management",
      "Session Handling",
      "Time saved: 6 hours",
    ],
  },
  database: {
    id: "database",
    name: "Database",
    icon: Cloud,
    content: [
      "Convex Real-time Database",
      "User Profile Management",
      "CRUD Operations",
      "Real-time Sync",
      "Time saved: 8 hours",
    ],
  },
  aiBackend: {
    id: "ai-backend",
    name: "AI Backend",
    icon: Sparkles,
    content: [
      "OpenAI Integration",
      "Claude Integration",
      "API Key Security",
      "Multiple AI Models",
      "Custom Prompts",
      "Time saved: 12 hours",
    ],
  },
  more: {
    id: "more",
    name: "More",
    icon: MoreHorizontal,
    content: [
      "Push Notifications",
      "Analytics Setup",
      "App Store Deployment",
      "Landing Page Template",
      "Documentation",
      "Time saved: 20+ hours",
    ],
  },
}

export function FeaturesSection() {
  const [activeFeatureTab, setActiveFeatureTab] = React.useState("onboarding")
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null)

  const startAutoSwitch = React.useCallback((delay = 3000) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    intervalRef.current = setInterval(() => {
      setActiveFeatureTab((prev) => {
        const features = Object.keys(featuresData)
        const currentIndex = features.indexOf(prev)
        const nextIndex = (currentIndex + 1) % features.length
        return features[nextIndex]
      })
    }, delay)
  }, [])

  React.useEffect(() => {
    startAutoSwitch()
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [startAutoSwitch])

  const handleTabClick = (tabId: string) => {
    setActiveFeatureTab(tabId)
    // Reset timer with longer delay when user clicks
    startAutoSwitch(5000) // 5 seconds instead of 3
  }

  const renderFeatureContent = () => {
    const feature = featuresData[activeFeatureTab as keyof typeof featuresData]
    if (!feature) return null

    return (
      <div key={activeFeatureTab} className="bg-muted/50 p-6 lg:p-8 rounded-lg">
        <h3 className="text-xl font-bold text-foreground mb-6">{feature.name}</h3>
        <ul className="space-y-4">
          {feature.content.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-muted-foreground">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <span className={item.includes("Time saved") ? "text-green-600 dark:text-green-400 font-semibold" : ""}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <section className="container mx-auto px-4 sm:px-6 py-16 lg:py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="font-mono text-primary text-sm mb-4">let launchTime = "Today"</p>
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tighter text-foreground">
          Vibe code today and{" "}
          <span className="bg-green-700 text-white px-2 py-1 -skew-x-6 inline-block whitespace-nowrap">
            get profitable
          </span>
        </h2>
        <p className="mt-8 text-lg text-muted-foreground">
          Complete React Native setup with authentication, payments, AI integration, and real-time database. VibeFast
          provides everything you need to launch your mobile app FAST.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Feature Tabs */}
        <div className="flex justify-center flex-wrap gap-2 sm:gap-4 lg:gap-8 border-b border-border pb-4 mb-8">
          {Object.values(featuresData).map((feature) => {
            const Icon = feature.icon
            const isActive = activeFeatureTab === feature.id

            return (
              <button
                key={feature.id}
                onClick={() => handleTabClick(feature.id)}
                className={`flex flex-col items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                <span className="text-xs sm:text-sm font-semibold">{feature.name}</span>
              </button>
            )
          })}
        </div>

        {/* Feature Content */}
        {renderFeatureContent()}
      </div>
    </section>
  )
}
