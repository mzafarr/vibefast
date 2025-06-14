"use client"

import { Play, Users, Award, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function FounderIntroSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Founder story */}
            <div className="space-y-6">
              {/* Founder badge */}
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">MZ</span>
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Award className="w-6 h-6 text-blue-500" />
                  </div>
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-700 dark:text-blue-400">Full-Stack</div>
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-500">
                    Developer & Indie Builder
                  </div>
                </div>
              </div>

              {/* Intro text */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">
                  Hey, it's Muhammad Zafar <span className="wave">👋</span>
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  I'm Muhammad Zafar — a full-stack developer, indie builder, and creator of VibeFast. Over the past 3
                  years, I've worked with clients across the world on everything from AI tools to internal dashboards
                  and mobile apps, earning thousands of dollars delivering real-world software.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  While freelancing, I kept seeing the same thing: devs — especially beginners — stuck in the weeds
                  setting up boilerplate, or worse, hallucinating code with LLMs that didn't work. So I built VibeFast.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  It's the starter I wish I had — fast, production-ready, and actually designed for{" "}
                  <span className="font-semibold text-primary">vibe coding</span> (coding with AI). I also make videos
                  sharing my journey and learnings in building, shipping, marketing apps and SaaS with this very stack.
                </p>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <p className="text-foreground font-semibold">
                    And I mean it when I say it, VibeFast is your shortcut to real results.
                  </p>
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <p className="text-muted-foreground">
                  I share my journey building and shipping apps on social media, and help developers like you skip the
                  setup headaches and focus on what matters — building profitable products.
                </p>
              </div>
            </div>

            {/* Right side - Video */}
            <div className="space-y-6">
              {/* Video placeholder */}
              <Card className="overflow-hidden shadow-2xl">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black">
                    {/* Video thumbnail */}
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full w-20 h-20 p-0">
                        <Play className="w-8 h-8 ml-1" fill="currentColor" />
                      </Button>
                    </div>

                    {/* Code editor mockup */}
                    <div className="absolute inset-4 bg-gray-900 rounded-lg overflow-hidden">
                      <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
                        <div className="flex gap-1">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-400 text-sm ml-2">VibeFast Demo — 2x if too slow 😉</span>
                      </div>
                      <div className="p-4 font-mono text-sm text-green-400">
                        <div className="text-blue-400">&gt; npm create vibefast-app</div>
                        <div className="text-gray-500">✓ Setting up authentication...</div>
                        <div className="text-gray-500">✓ Configuring database...</div>
                        <div className="text-gray-500">✓ Installing dependencies...</div>
                        <div className="text-yellow-400">🚀 Ready to ship in 3 minutes</div>
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

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="text-center p-4">
                  <CardContent className="p-0">
                    <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">3+</div>
                    <div className="text-sm text-muted-foreground">Years</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-4">
                  <CardContent className="p-0">
                    <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">$1K+</div>
                    <div className="text-sm text-muted-foreground">Earned</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-4">
                  <CardContent className="p-0">
                    <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">∞</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
