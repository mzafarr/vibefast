"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What's included in VibeFast?",
    answer:
      "VibeFast includes a complete React Native Expo app, Next.js landing page, Convex backend setup, AI integrations, authentication system, payment processing, and comprehensive documentation.",
  },
  {
    question: "Do I need experience with React Native?",
    answer:
      "Basic React knowledge is helpful, but VibeFast includes detailed documentation and tutorials to get you started. The code is well-commented and follows best practices.",
  },
  {
    question: "Can I customize the design and features?",
    answer:
      "VibeFast is a boilerplate, not a rigid template. You have full access to the source code and can customize everything to match your brand and requirements.",
  },
  {
    question: "What about updates and support?",
    answer:
      "The Complete package includes lifetime updates and access to our private Discord community. We regularly add new features and improvements based on user feedback.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Yes! We offer a 30-day money-back guarantee. If you're not satisfied with VibeFast, we'll refund your purchase, no questions asked.",
  },
  {
    question: "Can I use this for commercial projects?",
    answer:
      "Yes, VibeFast comes with a commercial license. You can use it to build and sell unlimited apps without any attribution requirements or ongoing fees.",
  },
  {
    question: "How is this different from other boilerplates?",
    answer:
      "VibeFast is the only boilerplate that includes both a mobile app AND a landing page, with Convex for real-time features and secure AI backend integration. It's a complete solution, not just an app template.",
  },
  {
    question: "What if I need help with implementation?",
    answer:
      "Complete package users get access to our Discord community where you can ask questions and get help from other developers and our team. We also provide detailed documentation and video tutorials.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="container mx-auto px-4 sm:px-6 py-16 lg:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">Everything you need to know about VibeFast</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-foreground">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">{faq.answer}</AccordionContent>
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
  )
}
