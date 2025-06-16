import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bot, ImageIcon, Palette, TrendingUp, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Free App Development Tools | VibeFast - React Native Developer Resources",
  description:
    "Free tools for React Native developers: App Store policy chatbot, screenshot generator, logo maker, ASO reviewer. Boost your mobile app development workflow with VibeFast's free resources.",
  keywords: [
    "free app development tools",
    "React Native tools",
    "app store policy checker",
    "app screenshot generator",
    "app logo maker",
    "ASO tools",
    "mobile app development resources",
    "free developer tools",
    "app store optimization",
    "React Native resources",
    "mobile app tools",
    "indie developer tools",
    "app development utilities",
    "free mobile app tools",
  ],
  openGraph: {
    title: "Free App Development Tools | VibeFast",
    description:
      "Free tools for React Native developers: App Store policy chatbot, screenshot generator, logo maker, ASO reviewer.",
    url: "https://vibefast.com/tools",
  },
  alternates: {
    canonical: "https://vibefast.com/tools",
  },
}

const tools = [
  {
    name: "App Store Policy Chatbot",
    description:
      "AI-powered chatbot that helps you understand Apple and Google app store policies. Get instant answers about why your app might be rejected and how to fix it.",
    icon: Bot,
    href: "/tools/policy-chatbot",
    status: "Coming Soon",
    features: ["Policy violation detection", "Rejection reason analysis", "Fix suggestions", "Real-time guidance"],
    color: "from-blue-500 to-purple-600",
  },
  {
    name: "App Screenshot Generator",
    description:
      "Create professional app store screenshots in minutes. Multiple device frames, backgrounds, and text overlays to make your app stand out.",
    icon: ImageIcon,
    href: "/tools/screenshot-generator",
    status: "Coming Soon",
    features: ["Multiple device frames", "Custom backgrounds", "Text overlays", "Batch processing"],
    color: "from-green-500 to-teal-600",
  },
  {
    name: "App Logo Generator",
    description:
      "Generate stunning app icons using AI. Perfect for prototyping or creating professional logos for your mobile applications.",
    icon: Palette,
    href: "/tools/logo-generator",
    status: "Coming Soon",
    features: ["AI-powered generation", "Multiple styles", "High-resolution output", "Icon guidelines"],
    color: "from-orange-500 to-red-600",
  },
  {
    name: "ASO Review Tool",
    description:
      "Analyze your app store listing and get actionable insights to improve your App Store Optimization (ASO) and increase downloads.",
    icon: TrendingUp,
    href: "/tools/aso-reviewer",
    status: "Coming Soon",
    features: ["Keyword analysis", "Competitor research", "Optimization tips", "Performance tracking"],
    color: "from-purple-500 to-pink-600",
  },
]

export default function FreeToolsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-20">
        <section className="container mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🛠️ Free Developer Tools
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
                Free App Development Tools
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Powerful, free tools to accelerate your React Native app development. From policy compliance to ASO
                optimization, we've got you covered.
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {tools.map((tool, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden"
                >
                  <CardContent className="p-0">
                    {/* Header with gradient */}
                    <div className={`h-32 bg-gradient-to-br ${tool.color} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <tool.icon className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/20 backdrop-blur-sm text-white border-0">{tool.status}</Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{tool.description}</p>

                      {/* Features */}
                      <ul className="space-y-2 mb-6">
                        {tool.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        disabled={tool.status === "Coming Soon"}
                      >
                        {tool.status === "Coming Soon" ? "Coming Soon" : "Try Now"}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/10 to-blue-50 dark:from-primary/20 dark:to-blue-900/20 border border-primary/20 rounded-2xl p-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Want more advanced tools?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get VibeFast and access our complete React Native boilerplate with AI integration, plus premium guides
                and tools.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold text-lg py-6 px-8 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get VibeFast ⚡️
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
