import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogList } from "@/components/blog-post"
import { getAllBlogPosts } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "VibeFast Blog - React Native Development Tips & Tutorials",
  description:
    "Learn React Native development, AI integration, and mobile app best practices with VibeFast tutorials and guides.",
  keywords: "React Native blog, mobile development tutorials, AI integration, app development tips, VibeFast guides",
  openGraph: {
    title: "VibeFast Blog - React Native Development Tips & Tutorials",
    description:
      "Learn React Native development, AI integration, and mobile app best practices with VibeFast tutorials and guides.",
    url: "https://vibefast.com/blog",
  },
  alternates: {
    canonical: "https://vibefast.com/blog",
  },
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-20">
        <section className="container mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
                VibeFast Blog
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Learn React Native development, AI integration, and mobile app best practices with our comprehensive
                guides and tutorials.
              </p>
            </header>

            <BlogList posts={posts} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
