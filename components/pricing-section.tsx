"use client"
import { Check, Zap, Clock, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { VibeFastSuccessNotifications } from "@/components/vibefast-success-notifications"
import { useState } from "react"

const pricingPlans = [
  {
    name: "VibeCore",
    description: "Perfect for solo developers",
    price: 99,
    fullPrice: 199,
    features: [
      "Everything in Open Source",
      "Charts & Analytics",
      "Image Generator & Analyzer",
      "Voicebot & Chatbot",
      "iOS Widget (coming soon)",
      "Landing Page Template",
      "Push Notifications",
      "Documentation and Step-by-Step tutorials",
      "ChatGPT prompts for terms & privacy",
      "Lifetime updates (Last updated: Jan 15)",
    ],
    popular: false,
    cta: "Get VibeCore",
    ctaVariant: "default" as const,
    notes: "Perfect for solo developers",
  },
  {
    name: "VibePro",
    description: "Most popular choice",
    price: 149,
    fullPrice: 349,
    features: [
      "Everything in VibeCore, and...",
      "$216+ Worth of Premium Bonuses",
      "Video Tutorials & Live Series",
      "Discord community access",
    ],
    popular: true,
    bestValue: false,
    cta: "Get VibePro",
    ctaVariant: "default" as const,
    notes: "Most popular with premium bonuses",
    bonusPack: false,
    bonusDetails: [
      { name: "Onboarding Guide PDF", value: "$49" },
      { name: "ASO Guide & Keyword Kit", value: "$69" },
      { name: "Paywall Strategy Guide", value: "$39" },
      { name: "Figma Templates", value: "$59" },
      { name: "Video Setup Tutorial & Live Build Series", value: "Priceless" },
    ],
  },
  {
    name: "Open Source",
    description: "MIT core, community support",
    price: 0,
    fullPrice: null,
    features: [
      "Auth & Paywall system",
      "Custom UI components",
      "Localization support",
      "Settings page",
      "React Native + Expo + Convex",
      "Community support",
    ],
    popular: false,
    cta: "Start Free",
    ctaVariant: "outline" as const,
    notes: "MIT core, community support",
  },
]

const commonInclusions = [
  "React Native + Expo + Convex + RevenueCat stack",
  "AI-optimized Chatflow for Cursor",
  "Pre-wired features: Auth, Paywall, Push, Onboarding, AI components",
  "Scalable code structure & multi-theme support",
]

export function PricingSection() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const soldCount = 39 // Mock sold count
  const totalSpots = 50
  const spotsLeft = totalSpots - soldCount
  const progressPercentage = (soldCount / totalSpots) * 100

  const renderFeatureItem = (feature: string, planName: string, plan: any) => {
    const isFirstVibeProFeature = planName === "VibePro" && feature === "Everything in VibeCore, and..."
    const isBonusFeature = feature.includes("$216+ Worth")
    const isDiscordFeature = feature === "Discord community access"

    if (isFirstVibeProFeature) {
      return (
        <li key={feature} className="flex items-start gap-3">
          <ArrowLeft className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <span className="text-muted-foreground text-sm">{feature}</span>
        </li>
      )
    }

    if (isBonusFeature) {
      return (
        <li
          key={feature}
          className="flex items-start gap-3 relative"
          onMouseEnter={() => setHoveredItem("bonus")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <span className="text-muted-foreground text-sm cursor-help">
            <span className="text-warning font-semibold relative">
              $216+
              <span className="absolute -bottom-1 left-0 w-full h-0 border-b-2 border-dotted border-success"></span>
            </span>{" "}
            Worth of Premium Bonuses
          </span>

          {/* Bonus Details Tooltip - Fixed positioning */}
          {hoveredItem === "bonus" && (
            <div
              className="fixed z-[9999] w-80 bg-card border border-border rounded-lg shadow-2xl p-4 pointer-events-none"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                maxWidth: "calc(100vw - 2rem)",
                maxHeight: "calc(100vh - 2rem)",
              }}
            >
              <h4 className="font-semibold text-foreground mb-3">🎁 Premium Bonus Pack</h4>
              <div className="space-y-2">
                {plan.bonusDetails?.map((bonus: any, index: number) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">{bonus.name}</span>
                    <span className="text-warning font-bold">{bonus.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-border">
                <div className="text-sm font-semibold text-warning">Total value: $216+</div>
              </div>
            </div>
          )}
        </li>
      )
    }

    if (isDiscordFeature) {
      return (
        <li
          key={feature}
          className="flex items-start gap-3 relative"
          onMouseEnter={() => setHoveredItem("discord")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <span className="text-muted-foreground text-sm cursor-help">
            <span className="relative">
              Discord community access
              <span className="absolute -bottom-1 left-0 w-full h-0 border-b-2 border-dotted border-success"></span>
            </span>
          </span>

          {/* Discord Screenshot Tooltip - Fixed positioning */}
          {hoveredItem === "discord" && (
            <div
              className="fixed z-[9999] w-96 bg-card border border-border rounded-lg shadow-2xl overflow-hidden pointer-events-none"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                maxWidth: "calc(100vw - 2rem)",
                maxHeight: "calc(100vh - 2rem)",
              }}
            >
              <img src="/images/discord-community.png" alt="Discord Community Screenshot" className="w-full h-auto" />
            </div>
          )}
        </li>
      )
    }

    return (
      <li key={feature} className="flex items-start gap-3">
        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <span className="text-muted-foreground text-sm">{feature}</span>
      </li>
    )
  }

  return (
    <section id="pricing" className="container mx-auto px-4 sm:px-6 py-16 lg:py-24 relative">
      {/* Animated Success Notifications - Now positioned absolutely */}
      <VibeFastSuccessNotifications />

      <div className="text-center mb-16">
        {/* Early Bird Badge */}
        <div className="inline-flex items-center gap-2 bg-warning/10 text-warning border border-warning/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <Clock className="w-4 h-4" />
          Early-bird launch pricing
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
          Choose Your VibeFast Plan
        </h2>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 max-w-2xl mx-auto mb-8">
          <p className="text-red-700 dark:text-red-400 font-semibold">
            🔥 First 50 buyers lock these prices forever — then they rise.
          </p>
          <p className="text-sm text-red-600 dark:text-red-500 mt-1">Prices will raise after 50 sales.</p>
        </div>
      </div>

      {/* Pricing Cards - Back to original layout */}
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto mb-16">
        {pricingPlans.map((plan, index) => (
          <div key={index} className={`relative flex-1 max-w-md mx-auto lg:mx-0 ${plan.popular ? "lg:scale-105" : ""}`}>
            {plan.popular && (
              <>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-sm font-bold px-6 py-2 rounded-full shadow-lg z-10">
                  MOST POPULAR
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl -z-10"></div>
              </>
            )}

            <Card
              className={`h-full flex flex-col p-8 relative overflow-hidden min-h-[600px] ${
                plan.popular
                  ? "border-primary/50 shadow-2xl shadow-primary/20 bg-gradient-to-b from-card to-card/50"
                  : "border-border hover:border-primary/30 transition-colors duration-300"
              }`}
            >
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex items-baseline gap-2">
                      {plan.price === 0 ? (
                        <span className="text-5xl lg:text-6xl font-bold text-foreground">FREE</span>
                      ) : (
                        <>
                          <span className="text-5xl lg:text-6xl font-bold text-foreground">${plan.price}</span>
                          <span className="text-lg font-normal text-muted-foreground">USD</span>
                        </>
                      )}
                    </div>
                    {plan.fullPrice && (
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Full price</div>
                        <div className="text-2xl font-bold text-muted-foreground line-through">${plan.fullPrice}</div>
                      </div>
                    )}
                  </div>

                  {plan.fullPrice && (
                    <div className="bg-success/10 text-success text-sm font-semibold px-3 py-1 rounded-full inline-block">
                      Save ${plan.fullPrice - plan.price} (Early Bird)
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => renderFeatureItem(feature, plan.name, plan))}
                </ul>

                <div className="space-y-4 mt-auto">
                  <Button
                    variant={plan.ctaVariant}
                    className="w-full font-bold text-lg py-6 transition-all duration-300 transform hover:scale-105 bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl"
                  >
                    {plan.cta} <Zap className="w-5 h-5 ml-2" />
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">{plan.notes}</p>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Custom Development Service Card */}
      <div className="max-w-4xl mx-auto mb-16">
        <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🚀 Custom Development
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Want me to build your app for you?</h3>

            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Skip the learning curve. I'll build your complete React Native app with AI integration, from concept to
              App Store launch.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold text-foreground mb-1">Fast Delivery</h4>
                <p className="text-sm text-muted-foreground">2-4 weeks from start to App Store</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold text-foreground mb-1">Custom Features</h4>
                <p className="text-sm text-muted-foreground">Tailored AI integration & unique features</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📱</span>
                </div>
                <h4 className="font-semibold text-foreground mb-1">Full Package</h4>
                <p className="text-sm text-muted-foreground">App + Landing Page + Backend</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg py-6 px-8 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Custom Quote
              </Button>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold">Starting at $5,000</span> • Full app development
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Common Inclusions Grid */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">✔️ Common Inclusions</h3>
          <p className="text-muted-foreground">Every plan includes these powerful features</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {commonInclusions.map((inclusion, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground font-medium">{inclusion}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA Banner */}
      <div className="bg-gradient-to-r from-primary/10 to-blue-50 dark:from-primary/20 dark:to-blue-900/20 border border-primary/20 rounded-2xl p-8 text-center max-w-4xl mx-auto">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Ship it today.</h3>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Don't wait months — turn ideas into profit now.
        </p>

        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white font-bold text-lg py-6 px-8 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-6"
        >
          Start Building Now <Zap className="w-5 h-5 ml-2" />
        </Button>

        <div className="space-y-4">
          <p className="text-warning font-semibold">🔥 {spotsLeft} early-bird spots left</p>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>0 sold</span>
              <span className="font-semibold text-foreground">{soldCount}/50 sold</span>
              <span>50 spots</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-success to-success/80 h-3 rounded-full progress-bar transition-all duration-1000 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
