"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Rocket,
  Zap,
  RefreshCw,
  MessageSquare,
  Mic,
  ImageIcon,
  PenTool,
  Check,
  Github,
  Clock,
  Code,
  Sparkles,
} from "lucide-react"

export default function ModularAILanding() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Ship AI-powered apps in <span className="text-indigo-500">hours</span>, not weeks.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            Plug-and-play modules — Chatbot, Voicebot, Image Gen, Paywall, Auth — wired for Cursor & Gemini.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3">
              Get the Starter Kit
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </div>
          <div className="max-w-4xl mx-auto">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt=""
              className="w-full rounded-lg shadow-2xl border dark:border-gray-800"
            />
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-12 border-y dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-6">
            <p className="text-lg text-muted-foreground">7,190+ makers ship faster</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="hover:opacity-100 transition-opacity opacity-60">
              <p className="font-medium">Lennard</p>
            </div>
            <div className="hover:opacity-100 transition-opacity opacity-60">
              <p className="font-medium">Wahab</p>
            </div>
            <div className="hover:opacity-100 transition-opacity opacity-60">
              <p className="font-medium">Naveen</p>
            </div>
            <div className="hover:opacity-100 transition-opacity opacity-60">
              <p className="font-medium">Artificery</p>
            </div>
            <div className="hover:opacity-100 transition-opacity opacity-60">
              <p className="font-medium">dunsin</p>
            </div>
          </div>
        </div>
      </section>

      {/* Three-Pillar Benefits */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-indigo-500" />
                </div>
                <CardTitle>Zero Boilerplate</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li>• Pre-configured Next.js setup</li>
                  <li>• Authentication & database ready</li>
                  <li>• Deploy with one command</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-indigo-500" />
                </div>
                <CardTitle>LLM-Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li>• OpenAI, Anthropic, Gemini support</li>
                  <li>• Streaming responses built-in</li>
                  <li>• Vector database integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                  <RefreshCw className="h-6 w-6 text-indigo-500" />
                </div>
                <CardTitle>One-File Swaps</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li>• Modular component system</li>
                  <li>• Drop-in replacements</li>
                  <li>• No vendor lock-in</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need, pre-integrated</h2>
            <p className="text-xl text-muted-foreground">Focus on building your product, not integrating APIs</p>
          </div>

          <div className="flex justify-center mb-12">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1n9OHqBlGOnEuQ2vZkGu53aUzUjVhP.png"
              alt="Tech stack diagram showing Next.js, Tailwind, NextAuth, and more"
              className="max-w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-indigo-500" />
                  There's an easier way
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>+ 4 hrs to set up emails</p>
                  <p>+ 6 hrs designing a landing page</p>
                  <p>+ 4 hrs to handle Stripe webhooks</p>
                  <p>+ 2 hrs for SEO tags</p>
                  <p>+ 1 hr applying for Google OAuth</p>
                  <p>+ 3 hrs for DNS records</p>
                  <p>+ 2 hrs for protected API routes</p>
                  <p>+ ∞ hrs overthinking...</p>
                  <p className="font-bold">= 22+ hours of headaches</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-indigo-500" />
                  With Modular AI Starter Kit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-sm bg-muted p-4 rounded-lg overflow-x-auto">
                  {`git clone modular-ai-kit
cd modular-ai-kit
npm install
npm run dev

# Toggle features in config:
export const features = {
  chatbot: true,
  voicebot: false,
  imageGen: true,
  paywall: true,
  auth: "supabase"
}

# That's it! 🚀`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Feature Gallery */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to build AI apps</h2>
            <p className="text-xl text-muted-foreground">Choose your modules and start building immediately</p>
          </div>

          <Tabs defaultValue="chatbot" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="chatbot" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Chatbot
              </TabsTrigger>
              <TabsTrigger value="voicebot" className="flex items-center gap-2">
                <Mic className="h-4 w-4" />
                Voicebot
              </TabsTrigger>
              <TabsTrigger value="imagegen" className="flex items-center gap-2">
                <ImageIcon className="h-4 w-4" />
                Image Gen
              </TabsTrigger>
              <TabsTrigger value="drawing" className="flex items-center gap-2">
                <PenTool className="h-4 w-4" />
                Drawing Board
              </TabsTrigger>
            </TabsList>

            {["chatbot", "voicebot", "imagegen", "drawing"].map((tab) => (
              <TabsContent key={tab} value={tab} className="mt-8">
                <div className="flex justify-center">
                  <div className="bg-background rounded-2xl shadow-2xl p-8 max-w-md">
                    <img
                      src={`/placeholder.svg?height=500&width=300`}
                      alt=""
                      loading="lazy"
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Code Comparison */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skip the setup, start building</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-red-500">Other Boilerplates (15 steps)</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-sm bg-muted p-4 rounded-lg overflow-x-auto">
                  {`npm create-next-app
cd my-app
npm install @auth/nextjs
npm install @prisma/client
npx prisma init
# Configure database
# Setup auth providers
# Configure middleware
# Setup API routes
# Install AI SDK
# Configure vector DB
# Setup payment processing
# Configure email service
# Setup monitoring
# Deploy configuration`}
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-500">Our Kit (1-line toggle)</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-sm bg-muted p-4 rounded-lg overflow-x-auto">
                  {`git clone modular-ai-kit
cd modular-ai-kit
npm install
npm run dev

# Toggle features in config:
export const features = {
  chatbot: true,
  voicebot: false,
  imageGen: true,
  paywall: true,
  auth: "supabase"
}

# That's it! 🚀`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by developers</h2>
            <p className="text-xl text-muted-foreground">See what others have built with our starter kit</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <p className="italic text-muted-foreground mb-4">
                  "Without this starter kit I might have never launched my AI tool and I would still be at $0 MRR."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="font-semibold text-indigo-600">JF</span>
                  </div>
                  <div>
                    <p className="font-medium">Jack Friks</p>
                    <p className="text-sm text-muted-foreground">Built post-bridge.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="italic text-muted-foreground mb-4">
                  "It's a game changer. Comes with an easy-to-follow tutorial, and saves a ton of time."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="font-semibold text-indigo-600">YG</span>
                  </div>
                  <div>
                    <p className="font-medium">Yifan Goh</p>
                    <p className="text-sm text-muted-foreground">Built an AI tool</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="italic text-muted-foreground mb-4">
                  "I was able to launch my project in just one day! I made $170 already."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="font-semibold text-indigo-600">MD</span>
                  </div>
                  <div>
                    <p className="font-medium">Mateus De Nardo</p>
                    <p className="text-sm text-muted-foreground">Built a SaaS</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Simple Pricing */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose your plan</h2>
            <p className="text-xl text-muted-foreground">$100 off for the first 7200 customers (9 left)</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Free Lite</CardTitle>
                <CardDescription className="text-lg">
                  <span className="text-3xl font-bold">$0</span> / forever
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    MIT License
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    Basic chatbot module
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    Community support
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    GitHub repository access
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Get Started Free
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-indigo-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm">Most Popular</span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Pro License</CardTitle>
                <CardDescription className="text-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold">$99</span>
                    <span className="line-through text-muted-foreground">$199</span>
                    <span className="text-sm">/ one-time</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    All modules included
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    Lifetime updates
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    Premium support
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    Commercial license
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    Priority feature requests
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-indigo-500 hover:bg-indigo-600">Get Pro License</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Have another question? Contact us directly</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">What do I get exactly?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You get a complete Next.js boilerplate with pre-integrated AI modules, authentication, payment
                  processing, and all the boring stuff handled for you. Just clone, customize, and launch.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Does it work with AI tools?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! The kit is optimized for Cursor, GitHub Copilot, Claude, OpenAI, and other AI coding assistants.
                  The codebase is clean and well-documented for AI to understand.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">JavaScript or TypeScript?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The kit is built with TypeScript for better developer experience and code quality, but you can easily
                  convert parts to JavaScript if needed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Are there any other costs?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No hidden costs for the kit itself. You'll only pay for external services you choose to use (like
                  OpenAI API, hosting, etc.) based on your usage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-indigo-500" />
            <p className="font-medium text-lg">Modular AI Starter Kit</p>
          </div>
          <p className="text-muted-foreground">Built with ❤️ for the AI developer community</p>
        </div>
      </footer>
    </div>
  )
}
