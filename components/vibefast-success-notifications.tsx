"use client"

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

interface SuccessItem {
  name: string
  description: string
  icon: string
  color: string
  time: string
}

const successNotifications: SuccessItem[] = [
  {
    name: "Revenue Goal Achieved",
    description: "$5,000 MRR milestone unlocked",
    time: "2m ago",
    icon: "💰",
    color: "#059669",
  },
  {
    name: "App Store Approved! 🎉",
    description: "FitTracker Pro accepted on first submission",
    time: "1m ago",
    icon: "🍎",
    color: "#007AFF",
  },
  {
    name: "Annual Subscription Purchased",
    description: "$99.99 via RevenueCat",
    time: "30s ago",
    icon: "💳",
    color: "#00C851",
  },
]

const SuccessNotification = ({ name, description, icon, color, time }: SuccessItem) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[350px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">{description}</p>
        </div>
      </div>
    </figure>
  )
}

export function VibeFastSuccessNotifications({ className }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
          setCurrentIndex(0) // Reset when leaving section
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px 0px 0px",
      },
    )

    // Observe the pricing section
    const pricingSection = document.getElementById("pricing")
    if (pricingSection) {
      observer.observe(pricingSection)
    }

    return () => {
      if (pricingSection) {
        observer.unobserve(pricingSection)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= successNotifications.length - 1) {
          return 0 // Reset to start
        }
        return prev + 1
      })
    }, 3000) // Show each notification for 3 seconds

    return () => clearInterval(interval)
  }, [isVisible])

  if (!isVisible) {
    return null
  }

  return (
    <div
      className={cn(
        "fixed top-4 right-4 z-40 w-80 pointer-events-none",
        "hidden lg:block", // Only show on large screens
        className,
      )}
    >
      <div className="flex flex-col items-center gap-4">
        {successNotifications.slice(0, currentIndex + 1).map((item, idx) => (
          <div
            key={idx}
            className={cn(
              "w-full transition-all duration-500 ease-in-out",
              idx === currentIndex ? "opacity-100 translate-y-0" : "opacity-60 translate-y-2 scale-95",
            )}
          >
            <SuccessNotification {...item} />
          </div>
        ))}
      </div>
    </div>
  )
}
