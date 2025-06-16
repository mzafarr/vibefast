"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/ui/terminal"

export function VibeFastTerminalDemo() {
  const [isVisible, setIsVisible] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
        rootMargin: "0px 0px -100px 0px", // Start animation a bit before fully visible
      },
    )

    if (terminalRef.current) {
      observer.observe(terminalRef.current)
    }

    return () => {
      if (terminalRef.current) {
        observer.unobserve(terminalRef.current)
      }
    }
  }, [])

  return (
    <div ref={terminalRef}>
      <Terminal>
        <TypingAnimation shouldStart={isVisible}>&gt; npx create-vibefast-app my-app</TypingAnimation>

        <AnimatedSpan delay={1500} className="text-green-500" shouldStart={isVisible}>
          <span>✔ Setting up React Native + Expo project</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2000} className="text-green-500" shouldStart={isVisible}>
          <span>✔ Configuring Convex database</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className="text-green-500" shouldStart={isVisible}>
          <span>✔ Installing RevenueCat for payments</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3000} className="text-green-500" shouldStart={isVisible}>
          <span>✔ Setting up authentication system</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3500} className="text-green-500" shouldStart={isVisible}>
          <span>✔ Configuring AI integrations (OpenAI + Claude)</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4000} className="text-green-500" shouldStart={isVisible}>
          <span>✔ Adding push notifications</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4500} className="text-green-500" shouldStart={isVisible}>
          <span>✔ Installing UI components & theming</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5000} className="text-green-500" shouldStart={isVisible}>
          <span>✔ Setting up analytics & onboarding</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5500} className="text-blue-500" shouldStart={isVisible}>
          <span>ℹ Created files:</span>
          <span className="pl-2">- Mobile app (React Native + Expo)</span>
          <span className="pl-2">- Landing page (Next.js)</span>
          <span className="pl-2">- Backend (Convex + AI)</span>
        </AnimatedSpan>

        <TypingAnimation delay={6000} className="text-primary" shouldStart={isVisible}>
          🚀 VibeFast app ready! Ship in minutes, not months.
        </TypingAnimation>

        <TypingAnimation delay={6500} className="text-muted-foreground" shouldStart={isVisible}>
          Run: cd my-app && npm run dev
        </TypingAnimation>
      </Terminal>
    </div>
  )
}
