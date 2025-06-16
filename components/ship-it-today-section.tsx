"use client"

import * as React from "react"
import { AppleHelloEnglishEffect } from "@/components/ui/apple-hello-effect"
import { Button } from "@/components/ui/button"

export function ShipItTodaySection() {
  const [showButton, setShowButton] = React.useState(false)
  const [shouldStartAnimation, setShouldStartAnimation] = React.useState(false)
  const sectionRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldStartAnimation(true)
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="bg-muted/30 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <p className="text-lg text-muted-foreground mb-4">Ready to launch your next big idea?</p>
            <div className="flex items-center justify-center mb-8">
              <AppleHelloEnglishEffect
                speed={1.2}
                className="h-16 sm:h-20 lg:h-24 text-primary"
                shouldStart={shouldStartAnimation}
                onAnimationComplete={() => setShowButton(true)}
              />
            </div>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">Ship it today</div>
          </div>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't wait months to build what you can ship today. VibeFast gives you everything you need to turn your idea
            into a profitable app.
          </p>

          <div
            className={`transition-all duration-700 ${showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6 px-8 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Building Now ⚡️
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
