"use client"

import * as React from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isToolsOpen, setIsToolsOpen] = React.useState(false)
  const dropdownTimeoutRef = React.useRef<NodeJS.Timeout>()

  const freeTools = [
    { name: "App Store Policy Chatbot", href: "/tools/policy-chatbot", status: "Coming Soon" },
    { name: "Screenshot Generator", href: "/tools/screenshot-generator", status: "Coming Soon" },
    { name: "App Logo Generator", href: "/tools/logo-generator", status: "Coming Soon" },
    { name: "ASO Review Tool", href: "/tools/aso-reviewer", status: "Coming Soon" },
  ]

  const handleMouseEnterTools = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setIsToolsOpen(true)
  }

  const handleMouseLeaveTools = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsToolsOpen(false)
    }, 150) // Small delay to allow moving to dropdown
  }

  React.useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current)
      }
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            VibeFast
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </a>

            {/* Free Tools Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={handleMouseEnterTools}
                onMouseLeave={handleMouseLeaveTools}
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                Free Tools
                <ChevronDown className="w-4 h-4" />
              </button>

              {isToolsOpen && (
                <div
                  onMouseEnter={handleMouseEnterTools}
                  onMouseLeave={handleMouseLeaveTools}
                  className="absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-lg shadow-xl py-2 z-50"
                >
                  {freeTools.map((tool, index) => (
                    <a
                      key={index}
                      href={tool.href}
                      className="flex items-center justify-between px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    >
                      <span className="whitespace-nowrap">{tool.name}</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full ml-3 flex-shrink-0">
                        {tool.status}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Service
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Docs
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="h-9 w-9 px-0">
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </a>
              <div className="space-y-2">
                <div className="text-muted-foreground font-semibold">Free Tools</div>
                {freeTools.map((tool, index) => (
                  <a
                    key={index}
                    href={tool.href}
                    className="flex items-center justify-between pl-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span>{tool.name}</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{tool.status}</span>
                  </a>
                ))}
              </div>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                Service
              </a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Docs
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
