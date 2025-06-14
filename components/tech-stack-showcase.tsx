"use client"
import { Zap, Plus, Equal } from "lucide-react"

// Dummy logo components
const DummyLogo = ({ name, color }: { name: string; color: string }) => (
  <div
    className={`w-16 h-16 ${color} rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg`}
  >
    {name.slice(0, 2).toUpperCase()}
  </div>
)

const techLogos = [
  { name: "React Native", color: "bg-blue-500" },
  { name: "Expo", color: "bg-purple-600" },
  { name: "Convex", color: "bg-orange-500" },
  { name: "Next.js", color: "bg-gray-800" },
  { name: "Stripe", color: "bg-indigo-600" },
  { name: "OpenAI", color: "bg-green-600" },
  { name: "Claude", color: "bg-red-500" },
  { name: "Vercel", color: "bg-black" },
]

export function TechStackShowcase() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <p className="text-sm font-mono text-primary mb-4">Complete Stack</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Everything you need in one package
            </h2>
          </div>

          {/* Visual Formula */}
          <div className="flex flex-col items-center gap-8 mb-16">
            {/* VibeFast Logo */}
            <div className="flex items-center gap-3 bg-card border border-border rounded-2xl px-6 py-4 shadow-lg">
              <Zap className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">VibeFast</span>
            </div>

            {/* Plus */}
            <Plus className="w-8 h-8 text-muted-foreground" />

            {/* Tech Stack Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 p-6 bg-muted/50 rounded-2xl border border-border">
              {techLogos.map((tech, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <DummyLogo name={tech.name} color={tech.color} />
                  <span className="text-xs text-muted-foreground font-medium hidden sm:block">{tech.name}</span>
                </div>
              ))}
            </div>

            {/* Equals */}
            <Equal className="w-8 h-8 text-muted-foreground" />

            {/* Result */}
            <div className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/20 rounded-2xl px-8 py-6">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                Launch your idea{" "}
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-lg">INSTANTLY</span>
              </h3>
              <p className="text-muted-foreground">No more weeks of setup. Start building your profitable app today.</p>
            </div>
          </div>

          {/* Features List */}
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-card/50 border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-2">🚀 Ready to Deploy</h4>
              <p className="text-sm text-muted-foreground">
                Pre-configured deployment scripts for App Store, Google Play, and web.
              </p>
            </div>
            <div className="bg-card/50 border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-2">🔒 Production Ready</h4>
              <p className="text-sm text-muted-foreground">
                Security best practices, error handling, and performance optimizations included.
              </p>
            </div>
            <div className="bg-card/50 border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-2">📚 Complete Docs</h4>
              <p className="text-sm text-muted-foreground">
                Step-by-step guides, video tutorials, and community support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
