"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Star } from "lucide-react"

// Mock app data - replace with real data
const mockApps = [
  {
    id: 1,
    name: "FitTracker Pro",
    description: "AI-powered fitness tracking app",
    image: "/placeholder.svg?height=300&width=200",
    category: "Health & Fitness",
    rating: 4.8,
    downloads: "10K+",
    color: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    name: "MoodJournal",
    description: "Mental wellness companion",
    image: "/placeholder.svg?height=300&width=200",
    category: "Health & Wellness",
    rating: 4.9,
    downloads: "25K+",
    color: "from-green-500 to-teal-600",
  },
  {
    id: 3,
    name: "RecipeAI",
    description: "Smart recipe generator",
    image: "/placeholder.svg?height=300&width=200",
    category: "Food & Drink",
    rating: 4.7,
    downloads: "15K+",
    color: "from-orange-500 to-red-600",
  },
  {
    id: 4,
    name: "StudyBuddy",
    description: "AI study assistant",
    image: "/placeholder.svg?height=300&width=200",
    category: "Education",
    rating: 4.6,
    downloads: "8K+",
    color: "from-indigo-500 to-blue-600",
  },
  {
    id: 5,
    name: "ExpenseTracker",
    description: "Smart expense management",
    image: "/placeholder.svg?height=300&width=200",
    category: "Finance",
    rating: 4.8,
    downloads: "20K+",
    color: "from-emerald-500 to-green-600",
  },
  {
    id: 6,
    name: "PhotoEditor Pro",
    description: "AI-enhanced photo editing",
    image: "/placeholder.svg?height=300&width=200",
    category: "Photography",
    rating: 4.9,
    downloads: "50K+",
    color: "from-pink-500 to-rose-600",
  },
  {
    id: 7,
    name: "TaskMaster",
    description: "Productivity & task management",
    image: "/placeholder.svg?height=300&width=200",
    category: "Productivity",
    rating: 4.7,
    downloads: "12K+",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 8,
    name: "WeatherWise",
    description: "Smart weather predictions",
    image: "/placeholder.svg?height=300&width=200",
    category: "Weather",
    rating: 4.5,
    downloads: "30K+",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 9,
    name: "MusicMood",
    description: "AI music recommendation",
    image: "/placeholder.svg?height=300&width=200",
    category: "Music",
    rating: 4.8,
    downloads: "40K+",
    color: "from-purple-500 to-indigo-600",
  },
  // Add more apps to reach 18+
  {
    id: 10,
    name: "TravelPlanner",
    description: "Smart travel companion",
    image: "/placeholder.svg?height=300&width=200",
    category: "Travel",
    rating: 4.6,
    downloads: "18K+",
    color: "from-teal-500 to-cyan-600",
  },
  {
    id: 11,
    name: "LanguageTutor",
    description: "AI language learning",
    image: "/placeholder.svg?height=300&width=200",
    category: "Education",
    rating: 4.9,
    downloads: "35K+",
    color: "from-amber-500 to-orange-600",
  },
  {
    id: 12,
    name: "PetCare",
    description: "Pet health tracker",
    image: "/placeholder.svg?height=300&width=200",
    category: "Lifestyle",
    rating: 4.7,
    downloads: "22K+",
    color: "from-lime-500 to-green-600",
  },
  {
    id: 13,
    name: "MindfulMoments",
    description: "Meditation & mindfulness",
    image: "/placeholder.svg?height=300&width=200",
    category: "Health & Wellness",
    rating: 4.8,
    downloads: "28K+",
    color: "from-indigo-500 to-purple-600",
  },
  {
    id: 14,
    name: "CookingMaster",
    description: "Interactive cooking guide",
    image: "/placeholder.svg?height=300&width=200",
    category: "Food & Drink",
    rating: 4.6,
    downloads: "16K+",
    color: "from-red-500 to-pink-600",
  },
  {
    id: 15,
    name: "GardenGuru",
    description: "Plant care assistant",
    image: "/placeholder.svg?height=300&width=200",
    category: "Lifestyle",
    rating: 4.7,
    downloads: "14K+",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 16,
    name: "BudgetBuddy",
    description: "Personal finance manager",
    image: "/placeholder.svg?height=300&width=200",
    category: "Finance",
    rating: 4.8,
    downloads: "32K+",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 17,
    name: "WorkoutWiz",
    description: "AI personal trainer",
    image: "/placeholder.svg?height=300&width=200",
    category: "Health & Fitness",
    rating: 4.9,
    downloads: "45K+",
    color: "from-orange-500 to-red-600",
  },
  {
    id: 18,
    name: "SleepTracker",
    description: "Sleep optimization app",
    image: "/placeholder.svg?height=300&width=200",
    category: "Health & Wellness",
    rating: 4.7,
    downloads: "26K+",
    color: "from-purple-500 to-blue-600",
  },
  {
    id: 19,
    name: "BookClub",
    description: "Social reading platform",
    image: "/placeholder.svg?height=300&width=200",
    category: "Social",
    rating: 4.6,
    downloads: "19K+",
    color: "from-teal-500 to-green-600",
  },
  {
    id: 20,
    name: "ArtStudio",
    description: "Digital art creation",
    image: "/placeholder.svg?height=300&width=200",
    category: "Art & Design",
    rating: 4.8,
    downloads: "21K+",
    color: "from-pink-500 to-purple-600",
  },
]

export function AppsShowcaseSection() {
  const [showAll, setShowAll] = React.useState(false)
  const [visibleApps, setVisibleApps] = React.useState<number[]>([])
  const appsToShow = showAll ? mockApps : mockApps.slice(0, 18)

  // Intersection Observer for scroll animations
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const appId = Number.parseInt(entry.target.getAttribute("data-app-id") || "0")
            setVisibleApps((prev) => [...new Set([...prev, appId])])
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    )

    const appElements = document.querySelectorAll("[data-app-id]")
    appElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [appsToShow])

  return (
    <section className="bg-muted/30 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            📱 App Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            Apps made with VibeFast
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of developers who have shipped successful apps using VibeFast. From fitness trackers to AI
            assistants, see what's possible.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {appsToShow.map((app, index) => (
            <div
              key={app.id}
              data-app-id={app.id}
              className={`transform transition-all duration-700 ${
                visibleApps.includes(app.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${(index % 8) * 100}ms`,
              }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
                <CardContent className="p-0">
                  {/* App Icon/Image */}
                  <div className={`h-48 bg-gradient-to-br ${app.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">{app.name.slice(0, 2)}</span>
                      </div>
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 bg-black/30 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                      {app.category}
                    </div>
                    {/* External Link */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* App Info */}
                  <div className="p-4">
                    <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {app.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{app.description}</p>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-medium text-foreground">{app.rating}</span>
                      </div>
                      <div className="text-muted-foreground">{app.downloads} downloads</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {mockApps.length > 18 && (
          <div className="text-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              size="lg"
              className="font-semibold px-8 py-3 transition-all duration-300 transform hover:scale-105"
            >
              {showAll ? "Show Less" : `View More Apps (${mockApps.length - 18} more)`}
            </Button>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">{mockApps.length}+</div>
              <div className="text-muted-foreground">Apps Published</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500K+</div>
              <div className="text-muted-foreground">Total Downloads</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.7★</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
