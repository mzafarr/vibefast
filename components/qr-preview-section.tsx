"use client"

import { Smartphone, QrCode, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function QRPreviewSection() {
  return (
    <section className="bg-muted/30 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              📱 Live Preview
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Try VibeFast Now
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Scan the QR code with your phone to experience VibeFast in action. See the AI features, smooth animations,
              and professional UI components.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - QR Code */}
            <div className="text-center">
              <Card className="inline-block p-8 bg-white shadow-2xl">
                <CardContent className="p-0">
                  {/* QR Code Placeholder - Replace with actual QR code */}
                  <div className="w-64 h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-6">
                    <QrCode className="w-32 h-32 text-gray-400" />
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Scan with Expo Go</p>
                    <p className="text-sm text-gray-600">iOS & Android</p>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://apps.apple.com/app/expo-go/id982107779"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      iOS Expo Go
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://play.google.com/store/apps/details?id=host.exp.exponent"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Android Expo Go
                    </a>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Don't have Expo Go? Download it first, then scan the QR code
                </p>
              </div>
            </div>

            {/* Right side - Features */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">What you'll experience:</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Smartphone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Native Mobile Experience</h4>
                      <p className="text-muted-foreground text-sm">
                        Smooth animations, native components, and professional UI that feels like a production app.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">AI</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">AI Features in Action</h4>
                      <p className="text-muted-foreground text-sm">
                        Test the AI chatbot, image generation, and voice features powered by OpenAI and Claude.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold text-sm">💳</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Payment Flow Demo</h4>
                      <p className="text-muted-foreground text-sm">
                        See the RevenueCat integration with subscription paywalls and purchase flows.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold text-sm">⚡</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Real-time Features</h4>
                      <p className="text-muted-foreground text-sm">
                        Experience Convex real-time database updates and live data synchronization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <h4 className="font-semibold text-primary mb-2">🚀 Production Ready</h4>
                <p className="text-sm text-muted-foreground">
                  This isn't just a demo - it's the actual VibeFast boilerplate running live. What you see is what you
                  get when you purchase VibeFast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
