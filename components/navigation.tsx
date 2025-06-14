"use client"

import * as React from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            VibeFast
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
