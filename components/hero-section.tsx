"use client"

import * as React from "react"
import { Trophy, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const appIdeas = [
  "AI Chat App",
  "Photo Editor",
  "Fitness Tracker",
  "Recipe Finder",
  "Language Tutor",
  "Expense Tracker",
  "Any Mobile App",
]

export function HeroSection() {
  const [currentIdea, setCurrentIdea] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdea((prev) => (prev + 1) % appIdeas.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="container mx-auto px-4 sm:px-6 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
        {/* Left side - Content */}
        <div className="space-y-8">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-4 lg:gap-6">
            <div className="flex items-center gap-2 text-sm font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
              ⚡️ DevHunt
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-warning bg-warning/10 px-3 py-1 rounded-full">
              <Trophy className="w-4 h-4" />
              <span>1st</span>
              <span className="text-muted-foreground font-normal">Product of the Week</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-tight">
              Ship viral apps
            </h1>

            <div className="relative h-16 sm:h-20 lg:h-24 overflow-hidden flex justify-start">
              <div className="bg-primary -skew-x-6 flex items-center justify-center px-6 py-2 rounded-lg">
                <span
                  key={currentIdea}
                  className="text-white animate-in fade-in slide-in-from-bottom-10 duration-700 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold whitespace-nowrap"
                >
                  {appIdeas[currentIdea]}
                </span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-tight">
              the fastest way
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl">
            The React Native Expo boilerplate for building monetizable AI apps and mobile experiences FAST ⚡️
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-bold text-lg py-6 px-8 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get VibeFast ⚡️
          </Button>

          {/* Social Proof */}
          <div className="pt-8 border-t border-border">
            <p className="text-primary font-semibold mb-6">Join 250+ developers who are already shipping their apps</p>

            <div className="flex flex-col gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <Avatar key={i} className="border-2 border-background">
                    <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                    <AvatarFallback>U{i}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-warning fill-current" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">250+ happy developers shipping fast ⚡️</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - App Flow Diagram */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <img
              src="/images/app-flow-diagram.png"
              alt="App Development Flow - From Idea to Published App"
              className="w-full max-w-lg h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Stats Grid - Moved below */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mt-16">
        <div className="text-center bg-muted/50 p-6 rounded-lg">
          <p className="text-sm text-muted-foreground mb-2">Most Popular</p>
          <p className="text-3xl font-bold text-foreground mb-1">2025</p>
          <p className="text-sm text-muted-foreground">React Native Kit</p>
        </div>
        <div className="text-center bg-muted/50 p-6 rounded-lg">
          <p className="text-sm text-muted-foreground mb-2">Top Seller</p>
          <p className="text-3xl font-bold text-primary mb-1">#1</p>
          <p className="text-sm text-muted-foreground">Expo Template</p>
        </div>
        <div className="text-center bg-muted/50 p-6 rounded-lg">
          <p className="text-sm text-muted-foreground mb-2">Full Stack</p>
          <div className="w-12 h-12 bg-primary/20 text-primary rounded mx-auto mb-2 flex items-center justify-center text-lg font-bold">
            RN
          </div>
          <p className="text-sm text-muted-foreground">Ready to ship</p>
        </div>
      </div>
    </section>
  )
}
