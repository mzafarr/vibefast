import type { BlogPostData } from "@/components/blog-post"

export const blogPosts: BlogPostData[] = [
  {
    title: "Building Your First React Native App with VibeFast",
    excerpt:
      "Learn how to set up and deploy your first React Native app using VibeFast boilerplate in under 30 minutes.",
    content: `
      <h2>Getting Started with VibeFast</h2>
      <p>VibeFast is designed to get you from idea to app store in record time. In this guide, we'll walk through setting up your first React Native app using our comprehensive boilerplate.</p>
      
      <h3>Prerequisites</h3>
      <ul>
        <li>Node.js 18+ installed</li>
        <li>Expo CLI</li>
        <li>Basic React knowledge</li>
      </ul>
      
      <h3>Step 1: Installation</h3>
      <p>Start by cloning the VibeFast repository and installing dependencies:</p>
      <pre><code>npx create-vibefast-app my-app
cd my-app
npm install</code></pre>
      
      <h3>Step 2: Configuration</h3>
      <p>Configure your environment variables and database connection. VibeFast comes with Convex pre-configured for real-time data sync.</p>
      
      <h3>Step 3: Customization</h3>
      <p>Customize your app's theme, add your branding, and configure the AI integrations according to your needs.</p>
      
      <h3>Conclusion</h3>
      <p>With VibeFast, you can focus on building your unique features instead of setting up boilerplate code. The included authentication, payments, and AI integrations save you weeks of development time.</p>
    `,
    author: {
      name: "Muhammad Zafar",
    },
    publishedAt: "2024-01-15",
    readTime: "5 min read",
    tags: ["React Native", "Tutorial", "Getting Started"],
    slug: "building-first-react-native-app-vibefast",
  },
  {
    title: "AI Integration Best Practices for Mobile Apps",
    excerpt:
      "Discover how to effectively integrate AI features into your mobile apps without compromising performance or user experience.",
    content: `
      <h2>The Rise of AI in Mobile Development</h2>
      <p>AI integration in mobile apps is no longer a luxury—it's becoming essential for competitive apps. However, implementing AI features requires careful consideration of performance, cost, and user experience.</p>
      
      <h3>Key Considerations</h3>
      <ul>
        <li>API response times and caching strategies</li>
        <li>Cost management for AI API calls</li>
        <li>Fallback mechanisms for offline scenarios</li>
        <li>User privacy and data handling</li>
      </ul>
      
      <h3>VibeFast's AI Architecture</h3>
      <p>VibeFast includes pre-built AI components that handle these challenges:</p>
      <ul>
        <li>Optimized API calls with intelligent caching</li>
        <li>Secure API key management</li>
        <li>Multiple AI provider support (OpenAI, Claude)</li>
        <li>Built-in error handling and retry logic</li>
      </ul>
      
      <h3>Implementation Tips</h3>
      <p>When building AI features, always consider the user journey. Provide clear feedback during processing, implement progressive loading, and ensure graceful degradation when AI services are unavailable.</p>
    `,
    author: {
      name: "Muhammad Zafar",
    },
    publishedAt: "2024-01-10",
    readTime: "7 min read",
    tags: ["AI", "Mobile Development", "Best Practices"],
    slug: "ai-integration-best-practices-mobile-apps",
  },
  {
    title: "From Idea to App Store: A Complete Guide",
    excerpt:
      "A comprehensive walkthrough of taking your app idea from concept to a published app on both iOS and Android app stores.",
    content: `
      <h2>The App Development Journey</h2>
      <p>Building and launching a successful mobile app involves more than just coding. This guide covers the entire process from ideation to app store approval.</p>
      
      <h3>Phase 1: Planning and Validation</h3>
      <p>Before writing any code, validate your idea through market research and user interviews. Define your target audience and core features.</p>
      
      <h3>Phase 2: Development with VibeFast</h3>
      <p>VibeFast accelerates the development phase by providing:</p>
      <ul>
        <li>Pre-built authentication and user management</li>
        <li>Payment processing with RevenueCat</li>
        <li>Real-time database with Convex</li>
        <li>AI-powered features ready to customize</li>
      </ul>
      
      <h3>Phase 3: Testing and Optimization</h3>
      <p>Thorough testing is crucial. Use TestFlight for iOS and internal testing for Android to gather feedback before public release.</p>
      
      <h3>Phase 4: App Store Submission</h3>
      <p>Prepare your app store listings with compelling descriptions, screenshots, and keywords. VibeFast includes ASO guides to help optimize your store presence.</p>
      
      <h3>Phase 5: Launch and Growth</h3>
      <p>Post-launch, focus on user feedback, analytics, and iterative improvements. The built-in analytics in VibeFast help track user behavior and app performance.</p>
    `,
    author: {
      name: "Muhammad Zafar",
    },
    publishedAt: "2024-01-05",
    readTime: "10 min read",
    tags: ["App Store", "Launch Strategy", "Mobile Development"],
    slug: "idea-to-app-store-complete-guide",
  },
]

export function getBlogPost(slug: string): BlogPostData | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts(): BlogPostData[] {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}
