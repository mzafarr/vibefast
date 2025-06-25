"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's included in VibeFast?",
    answer:
      "VibeFast gives you a complete React Native + Expo mobile app, a fully-themed Next.js landing page, Convex backend integration, AI features (chatbot, voice bot, image generation/analysis), RevenueCat monetization setup, full authentication, localization, and a modular component library powered by NativeWind. It's everything you need to launch a production-ready app—day one.",
  },
  {
    question: "Do I need React Native experience?",
    answer:
      "Not really. VibeFast is made for vibe coders—whether you're a beginner using AI tools like Cursor or Windsurf, or a pro who just wants a clean jumpstart. The codebase is modular, well-commented, and designed to work hand-in-hand with AI pair programmers.",
  },
  {
    question: "Can I customize the design and features?",
    answer:
      "Absolutely. Everything in VibeFast is flexible and modular. You can change the UI, logic, and integrations however you like. It's built to be flexible—from the color theme to the backend adapters—so you can make it fully your own.",
  },
  {
    question: "Are updates and support included?",
    answer:
      "Yes. With the Complete package, you get lifetime updates and access to our private Discord community.",
  },
  {
    question: "Can I use VibeFast for commercial projects?",
    answer:
      "Yes, 100%. VibeFast comes with a commercial license. Build, launch, and sell unlimited apps without attribution or extra fees. This is your starter, not a rental.",
  },
  {
    question: "What makes VibeFast different from other boilerplates?",
    answer:
      "Most boilerplates stop at UI and leave the rest to you. VibeFast gives you the full stack—from mobile app to landing page, real-time backend, lots of AI integrations, paywalls, and localization.\n\nBut what truly sets it apart? VibeFast is built *for AI-assisted development*. It includes pre-wired AI workflows, cursorRules, prompt-friendly code structure, and a modular layout that plays perfectly with tools like Cursor, Windsurf, and GitHub Copilot.\n\nThis isn't just another starter—it's the only one designed specifically for vibe coders who build faster with AI.",
  },
  {
    question: "What if I get stuck or need help?",
    answer:
      "No worries. Every VibeFast PRO user gets access to detailed docs, video walkthroughs, and our private Discord server. You'll get real answers from real devs—fast. Plus, the code is structured to be AI-friendly so tools like Cursor, Windsurf, ChatGPT, Claude, etc can assist as you build.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="container mx-auto px-4 sm:px-6 py-16 lg:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about VibeFast
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-foreground">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="mailto:support@vibefast.com"
            className="text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
}
