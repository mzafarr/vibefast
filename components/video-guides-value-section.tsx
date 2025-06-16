"use client"

import { Play, Shield, TrendingUp, AlertTriangle, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const painPoints = [
  {
    icon: AlertTriangle,
    title: "App Store Rejections",
    description: "Your app gets rejected 5-10 times because you don't know Apple/Google policies",
    cost: "Weeks of delays",
    color: "text-red-500",
  },
  {
    icon: TrendingUp,
    title: "Poor App Ranking",
    description: "Your app doesn't rank because you missed crucial ASO optimization steps",
    cost: "Lost revenue",
    color: "text-orange-500",
  },
  {
    icon: Clock,
    title: "Complex Upload Process",
    description: "First-time app upload takes forever due to confusing documentation",
    cost: "Hours wasted",
    color: "text-yellow-500",
  },
  {
    icon: Shield,
    title: "Policy Violations",
    description: "Unknowingly violate platform policies and risk account suspension",
    cost: "Account banned",
    color: "text-red-600",
  },
]

const guidesBenefits = [
  "Step-by-step app store submission process",
  "ASO optimization secrets that actually work",
  "Policy compliance checklist (Apple & Google)",
  "Screenshot and metadata optimization",
  "Pricing strategy for maximum revenue",
  "Launch day marketing tactics",
  "Post-launch growth strategies",
  "Monetization best practices",
]

export function VideoGuidesValueSection() {
  return (
    <section className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-red-950/20 dark:via-orange-950/20 dark:to-yellow-950/20 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-warning/10 text-warning border border-warning/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🎥 Premium Video Guides
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              These guides are literally{" "}
              <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                priceless
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              They don't just save you hours — they save you from devastating mistakes, crushing depression when your
              app doesn't rank, and the nightmare of endless rejections.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
            {/* Left side - Pain Points */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                  Without proper guidance, you'll face:
                </h3>

                <div className="space-y-4">
                  {painPoints.map((pain, index) => (
                    <Card key={index} className="border-l-4 border-l-red-500 bg-red-50/50 dark:bg-red-950/20">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <pain.icon className={`w-6 h-6 ${pain.color} flex-shrink-0 mt-1`} />
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground mb-1">{pain.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{pain.description}</p>
                            <div className="text-xs font-semibold text-red-600 dark:text-red-400">
                              Cost: {pain.cost}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-6">
                <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">😰 The Reality Check</h4>
                <p className="text-sm text-red-600 dark:text-red-500">
                  Most developers spend 3-6 months just figuring out the submission process, only to get rejected
                  multiple times. Some give up entirely after their first rejection.
                </p>
              </div>
            </div>

            {/* Right side - Video Preview */}
            <div className="space-y-6">
              <Card className="overflow-hidden shadow-2xl">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black">
                    {/* Video thumbnail */}
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full w-20 h-20 p-0">
                        <Play className="w-8 h-8 ml-1" fill="currentColor" />
                      </Button>
                    </div>

                    {/* Video content mockup */}
                    <div className="absolute inset-4 bg-gray-900 rounded-lg overflow-hidden">
                      <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
                        <div className="flex gap-1">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-400 text-sm ml-2">App Store Submission Masterclass</span>
                      </div>
                      <div className="p-4 space-y-2">
                        <div className="text-green-400 text-sm">✓ App Store Connect Setup</div>
                        <div className="text-blue-400 text-sm">✓ Metadata Optimization</div>
                        <div className="text-yellow-400 text-sm">✓ Screenshot Guidelines</div>
                        <div className="text-purple-400 text-sm">✓ Review Process Secrets</div>
                      </div>
                    </div>

                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-red-600 hover:bg-red-700 transition-colors rounded-full p-6 cursor-pointer group">
                        <Play
                          className="w-12 h-12 text-white ml-1 group-hover:scale-110 transition-transform"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-6">
                <h4 className="font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  What you'll master:
                </h4>
                <ul className="space-y-2">
                  {guidesBenefits.slice(0, 4).map((benefit, index) => (
                    <li key={index} className="text-sm text-green-600 dark:text-green-500 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-green-600 dark:text-green-500 mt-3 font-semibold">+ 4 more modules</p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-blue-50 dark:from-primary/20 dark:to-blue-900/20 border border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Skip the pain. Get it right the first time.
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These video guides have helped 500+ developers successfully launch their apps without a single rejection.
              The knowledge inside is worth thousands in saved time and avoided mistakes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold text-lg py-6 px-8 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get VibePro with Video Guides
              </Button>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-warning">$216+ value</span> • Included in VibePro
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
