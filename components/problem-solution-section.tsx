"use client";
import { X, Check } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote:
      "Don't marry your startup idea. Out of the 20+ startups I launched, only 1 made good money and grew. It's the same pattern for most solopreneurs who made life-changing money.",
    author: "Marc Lou",
    handle: "@marc_louvion",
    stats: "125K followers on X | $70k/month",
    avatar: "ML",
    imagePath: "avatars/marc.webp"
  },
  {
    quote:
      "You may need to try shipping 10 to 30 products before you have anything that works. I don't know anybody who shipped one product and instantly became successful.",
    author: "Pieter Levels",
    handle: "@levelsio",
    stats: "526K followers on X | $300k/month",
    avatar: "PL",
    imagePath: "avatars/levelsio.webp"
  },
  {
    quote:
      "You build 10 products. 9 products will fail. 1 product will change your life 🙏",
    author: "Tony Dinh",
    handle: "@tdinh_me",
    stats: "138K followers on X | $50k/month",
    avatar: "TD",
    imagePath: "avatars/3rd-guy.webp"
  },
];

export function ProblemSolutionSection() {
  return (
    <section className="bg-primary/10 container mx-auto sm:px-6 py-20 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-[32px] font-bold tracking-tight text-foreground space-y-8 max-w-[640px] mx-auto">
          <div>
            <span className="mr-2">❌</span> Sorry, but 90% of your products
            will fail
          </div>
          <div>
            <span className="mr-2">✅</span> Launch more apps and faster without
            writing repetitive boilerplate code
          </div>
        </h2>

        {/* <p className="mt-8 text-lg text-muted-foreground max-w-3xl mx-auto">

        </p> */}

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border p-6 flex flex-col justify-between h-full hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </CardContent>
              <CardFooter className="p-0 mt-6 pt-6 border-t border-border flex justify-between items-center">
                <div className="flex-1">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.handle}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.stats}
                  </p>
                </div>
                <Avatar className="ml-4 w-14 h-14">
                  <AvatarImage className="" src={testimonial.imagePath} />
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
