"use client"
import { Check, Gift, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const pricingPlans = [
  {
    name: "Open Source",
    description: "Developers & hobbyists on a $0 budget",
    price: 0,
    originalPrice: null,
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
    perfectFor:
      "Developers & hobbyists on a $0 budget — includes Auth, Paywall, Custom UI components, Localization & Settings page. Keeps you coding, no costs.",
  },
  {
    name: "VibeCore",
    description: "Makers who want more power",
    price: 99,
    originalPrice: null,
    features: [
      "Everything in Open Source",
      "Charts & Analytics",
      "Image Generator & Analyzer",
      "Voicebot & Chatbot",
      "iOS Widget (coming soon)",
      "Landing Page Template",
      "Push Notifications",
      "Lifetime updates",
    ],
    popular: false,
    cta: "Get VibeCore",
    ctaVariant: "default" as const,
    perfectFor:
      "Makers who want more power — everything in Open Source plus Charts, Image Generator, Image Analyzer, Voicebot, Chatbot, iOS Widget (coming soon), Landing Page Template, Notifications. + lifetime updates",
  },
  {
    name: "VibePro",
    description: "Serious builders & teams",
    price: 149,
    originalPrice: null,
    features: [
      "Everything in VibeCore",
      "Full Bonus Pack ($216+ value)",
      "Onboarding Guide PDF ($49)",
      "ASO Guide & Keyword Kit ($69)",
      "Paywall Strategy Guide ($39)",
      "Figma Templates ($59)",
      "Video Tutorials & Live Series",
      "Discord community access",
    ],
    popular: true,
    cta: "Get VibePro",
    ctaVariant: "default" as const,
    perfectFor:
      "Serious builders & teams — includes all VibeCore features plus the full bonus pack (Onboarding PDF, ASO Guide & Keyword Kit, Paywall Strategy Guide, Figma templates, Video Tutorials) + Discord community access.",
    bonusPack: true,
  },
]

const commonInclusions = [
  "React Native + Expo + Convex + RevenueCat stack",
  "AI-optimized Chatflow for Cursor",
  "Pre-wired features: Auth, Paywall, Push, Onboarding, AI components",
  "Scalable code structure & multi-theme support",
]

export function PricingSection() {
  return (
    <section id="pricing" className="container mx-auto px-4 sm:px-6 py-16 lg:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
          Choose Your VibeFast Plan
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Choose the starter that matches your needs — from fully open-source to all-inclusive pro.
        </p>
      </div>

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
              className={`h-full flex flex-col p-8 relative overflow-hidden ${
                plan.popular
                  ? "border-primary/50 shadow-2xl shadow-primary/20 bg-gradient-to-b from-card to-card/50"
                  : plan.price === 0
                    ? "border-green-500/50 shadow-lg shadow-green-500/10 bg-gradient-to-b from-card to-green-50/5"
                    : "border-border hover:border-primary/30 transition-colors duration-300"
              }`}
            >
              {plan.bonusPack && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 shadow-lg">
                    <Gift className="w-3 h-3 mr-1" />
                    $216+ Bonus
                  </Badge>
                </div>
              )}

              <div className="relative z-10 flex-1">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    {plan.price === 0 ? (
                      <span className="text-5xl lg:text-6xl font-bold text-green-600 dark:text-green-400">FREE</span>
                    ) : (
                      <>
                        <span className="text-5xl lg:text-6xl font-bold text-foreground">${plan.price}</span>
                        <span className="text-lg font-normal text-muted-foreground">USD</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Perfect For */}
                <div className="mb-6 p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Perfect For:</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{plan.perfectFor}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.popular ? "bg-primary/20" : plan.price === 0 ? "bg-green-500/20" : "bg-muted"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            plan.popular ? "text-primary" : plan.price === 0 ? "text-green-500" : "text-green-500"
                          }`}
                        />
                      </div>
                      <span className="text-muted-foreground text-sm">
                        {feature.includes("$") ? (
                          <span className="font-semibold text-foreground">{feature}</span>
                        ) : (
                          feature
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 relative z-10">
                <Button
                  variant={plan.ctaVariant}
                  className={`w-full font-bold text-lg py-6 transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl"
                      : plan.price === 0
                        ? "border-green-500 text-green-600 dark:text-green-400 hover:bg-green-500 hover:text-white"
                        : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  }`}
                >
                  {plan.cta} <Zap className="w-5 h-5 ml-2" />
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  {plan.price === 0
                    ? "Open source • MIT License • Community support"
                    : "One-time payment • Unlimited apps • Commercial license"}
                </p>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Common Inclusions */}
      <div className="max-w-4xl mx-auto">
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

        {/* Bonus Pack Highlight */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gift className="w-8 h-8 text-yellow-600" />
            <h3 className="text-2xl font-bold text-foreground">🎁 Bonus Pack (VibePro Only)</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              { name: "Onboarding Guide PDF", value: "$49" },
              { name: "ASO Guide & Keyword Kit", value: "$69" },
              { name: "Paywall Strategy Guide", value: "$39" },
              { name: "Figma Screenshot & App Icon Templates", value: "$59" },
              { name: "Video Setup Tutorial & Live Build Series", value: "Priceless" },
            ].map((bonus, index) => (
              <div key={index} className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
                <div className="font-semibold text-foreground text-sm">{bonus.name}</div>
                <div className="text-yellow-600 font-bold">{bonus.value}</div>
              </div>
            ))}
          </div>

          <div className="text-2xl font-bold text-yellow-700 dark:text-yellow-400 mb-2">
            Total bonus value $216+ — included free with VibePro
          </div>
          <p className="text-muted-foreground">One-time payment, unlimited apps</p>
        </div>
      </div>
    </section>
  )
}
