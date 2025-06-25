"use client"

import * as React from "react"
import { User, CreditCard, Shield, Cloud, Sparkles, MoreHorizontal, Check, ExternalLink } from "lucide-react"

const featuresData = {
  onboarding: {
    id: "onboarding",
    name: "Onboarding",
    description: "Onboard the user the right way",
    icon: User,
    url: "https://docs.expo.dev/",
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
    description: "Avoid the headache of setting up payments that work!",
    icon: CreditCard,
    url: "https://www.revenuecat.com/",
    content: [
      "RevenueCat Integration",
      "In-App Purchases",
      "Subscription, One-time Purchases",
      "Payment Processing",
      "Time saved: 8 hours",
    ],
  },
  authentication: {
    id: "authentication",
    name: "Authentication",
    description: "All options that you need",
    icon: Shield,
    url: "https://docs.convex.dev/auth",
    content: [
      "Guest Login",
      "Social Login (Google, Apple)",
      "Email/Password Auth",
      "User Management",
      "Session Handling",
      "Secure token management",
      "Time saved: 6 hours",
    ],
  },
  database: {
    id: "database",
    name: "Database",
    description: "Backend that handles everything",
    icon: Cloud,
    url: "https://convex.dev/",
    content: [
      "Convex Real-time Database",
      "User Profile Management",
      "File Storage",
      "Real-time Sync",
      "Secure Storage",
      "Time saved: 8 hours",
    ],
  },
  "ai-backend": {
    id: "ai-backend",
    name: "AI Backend",
    description: "Multi-model AI wrapper that works",
    icon: Sparkles,
    url: "https://openai.com/",
    content: [
      "OpenAI, Claude, Gemini, etc Integration",
      "Image generation, chatbot, image analysis, etc",
      "Secure API Key Management",
      "Multiple AI Model Support",
      "Streaming Responses",
      "Error Handling & Retries",
      "Cost Optimization",
      "Time saved: 12 hours",
    ],
  },
  more: {
    id: "more",
    name: "More",
    description: "Everything else you'll need",
    icon: MoreHorizontal,
    url: "https://expo.dev/",
    content: [
      "Push Notifications (Expo)",
      "Analytics Setup",
      "App Store Deployment",
      "Play Store Deployment",
      "Landing Page Template",
      "Comprehensive Documentation",
      "Video Tutorials",
      "Time saved: countless hours",
    ],
  },
}

// Technology icons component
const TechIcon = ({ name, url }: { name: string; url: string }) => {
  const icons: Record<string, React.ReactNode> = {
    revenuecat: (
      <div className="w-16 h-8 rounded-lg flex items-center justify-center">
       <img src={"icons/rc.svg"} />
      </div>
    ),
    convex: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center">
       <img src={"icons/convex.svg"} />
      </div>
    ),
    openai: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center">
       <img src={"icons/gpt.webp"} />
      </div>
    ),
    claude: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center">
       <img src={"icons/claude.webp"} />
      </div>
    ),
    expo: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center">
       <img src={"icons/expo.webp"} />
      </div>
    ),
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
    >
      {icons[name.toLowerCase()] || (
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">{name.slice(0, 2).toUpperCase()}</span>
        </div>
      )}
    </a>
  )
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
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-semibold text-foreground">{feature.name} |<span className="font-normal text-lg text-muted-foreground"> {feature.description}</span></h3>
          {/* <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-primary">
            <a href={feature.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button> */}
        </div>

        {/* Technology Icons */}
        {/* <div className="flex flex-wrap gap-3 mb-6">
          {feature.id === "payments" && (
            <>
              <TechIcon name="revenuecat" url="https://www.revenuecat.com/" />
            </>
          )}
          {feature.id === "authentication" && (
            <>
              <TechIcon name="convex" url="https://convex.dev/" />
            </>
          )}
          {feature.id === "database" && (
            <>
              <TechIcon name="convex" url="https://convex.dev/" />
            </>
          )}
          {feature.id === "ai-backend" && (
            <>
              <TechIcon name="openai" url="https://openai.com/" />
              <TechIcon name="claude" url="https://claude.ai/" />
            </>
          )}
          {feature.id === "more" && (
            <>
              <TechIcon name="expo" url="https://expo.dev/" />
            </>
          )}
        </div> */}

        <ul className="space-y-4">
          {feature.content.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-muted-foreground text-lg">
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
      <div className="max-w-3xl mx-auto text-center mb-10">
        <p className="font-mono text-primary text-sm mb-4">let launchTime = "Today"</p>
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tighter text-foreground">
          Vibe code today and{" "}
          <span className="bg-primary text-primary-foreground px-2 py-1 -skew-x-6 inline-block whitespace-nowrap">
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
