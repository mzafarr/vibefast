"use client"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Indie Developer",
    avatar: "SC",
    rating: 5,
    text: "VibeFast saved me months of development time. The Convex integration is seamless and the code quality is top-notch.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Startup Founder",
    avatar: "MR",
    rating: 5,
    text: "Launched my AI app in just 2 weeks using VibeFast. The landing page template alone is worth the price.",
  },
  {
    name: "Emily Johnson",
    role: "Freelance Developer",
    avatar: "EJ",
    rating: 5,
    text: "The authentication and payment setup was incredibly smooth. My clients are impressed with the app quality.",
  },
  {
    name: "David Kim",
    role: "Tech Lead",
    avatar: "DK",
    rating: 5,
    text: "Best React Native boilerplate I've used. The AI backend integration is exactly what I needed.",
  },
  {
    name: "Lisa Wang",
    role: "Product Manager",
    avatar: "LW",
    rating: 5,
    text: "VibeFast helped our team ship 3 apps this quarter. The documentation is excellent and support is responsive.",
  },
  {
    name: "Alex Thompson",
    role: "Solo Entrepreneur",
    avatar: "AT",
    rating: 5,
    text: "From idea to App Store in 10 days. VibeFast is a game-changer for rapid prototyping and launching.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-muted/30 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            Loved by Developers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of developers who are shipping faster with VibeFast
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>

                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
