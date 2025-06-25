"use client"
import { Zap, Plus, Equal } from "lucide-react"
import Image from "next/image"

// AI/LLM tools with their corresponding image files
const aiTools = [
  { name: "GPT", image: "/icons/gpt.webp" },
  { name: "Claude", image: "/icons/claude.webp" },
  { name: "Gemini", image: "/icons/gemini.webp" },
  { name: "DeepSeek", image: "/icons/deepseek.webp" },
  { name: "Grok", image: "/icons/grok.webp" },
  { name: "Copilot", image: "/icons/copilot.webp" },
  { name: "Cursor", image: "/icons/cursor.webp" },
  { name: "Windsurf", image: "/icons/windsurf.webp" },
]

export function TechStackShowcase() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <p className="text-sm font-mono text-primary mb-4">AI-Powered Development</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Built with the best AI tools
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

            {/* AI Tools Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 p-6 bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/20 rounded-2xl">
              {aiTools.map((tool, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-[14px] overflow-hidden shadow-lg bg-white flex items-center justify-center">
                    <Image
                      src={tool.image}
                      alt={tool.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium hidden sm:block">{tool.name}</span>
                </div>
              ))}
            </div>

            {/* Equals */}
            <Equal className="w-8 h-8 text-muted-foreground" />

            {/* Result */}
            <div className="rounded-2xl px-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Launch your idea {" "}
                <span className="bg-gradient-to-r from-primary/20 to-primary/10 text-primary px-3 py-1 rounded-lg">INSTANTLY</span>
              </h3>
              <p className="text-muted-foreground">Leverage the power of multiple AI assistants to build faster and smarter.</p>
            </div>
          </div>

          {/* Features List */}
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-card/50 border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-2">🤖 AI-First Approach</h4>
              <p className="text-sm text-muted-foreground">
                Built using the latest AI coding assistants for maximum efficiency and quality.
              </p>
            </div>
            <div className="bg-card/50 border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-2">⚡ Lightning Fast</h4>
              <p className="text-sm text-muted-foreground">
                AI-powered code generation and optimization for rapid development cycles.
              </p>
            </div>
            <div className="bg-card/50 border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-2">🎯 Best Practices</h4>
              <p className="text-sm text-muted-foreground">
                Code patterns and architecture recommended by leading AI development tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
