import type React from "react"
import type { Metadata } from "next"
import { Bricolage_Grotesque } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-bricolage",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://vibefast.com"),
  title: {
    default: "VibeFast - Ship React Native Apps Fast with AI Integration",
    template: "%s | VibeFast",
  },
  description:
    "The complete React Native Expo boilerplate with AI backend, Convex database, authentication, payments, and landing page. Ship your mobile app in minutes, not months. Perfect for indie hackers and developers.",
  keywords: [
    "React Native boilerplate",
    "Expo template",
    "AI mobile app",
    "React Native starter",
    "mobile app development",
    "indie hacker tools",
    "app boilerplate",
    "React Native AI",
    "Convex database",
    "mobile app template",
    "startup tools",
    "app development kit",
    "React Native authentication",
    "mobile payments integration",
    "AI app development",
    "vibe coding",
    "ship fast mobile",
    "React Native SaaS",
  ],
  authors: [{ name: "Muhammad Zafar", url: "https://vibefast.com" }],
  creator: "Muhammad Zafar",
  publisher: "VibeFast",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vibefast.com",
    siteName: "VibeFast",
    title: "VibeFast - Ship React Native Apps Fast with AI Integration",
    description:
      "The complete React Native Expo boilerplate with AI backend, Convex database, authentication, payments, and landing page. Ship your mobile app in minutes, not months.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VibeFast - React Native Boilerplate with AI Integration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VibeFast - Ship React Native Apps Fast with AI Integration",
    description:
      "The complete React Native Expo boilerplate with AI backend. Ship your mobile app in minutes, not months.",
    images: ["/twitter-image.png"],
    creator: "@your_twitter_handle", // Replace with your actual Twitter handle
  },
  alternates: {
    canonical: "https://vibefast.com",
  },
  category: "technology",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "VibeFast",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#22c55e",
    "theme-color": "#22c55e",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={bricolageGrotesque.variable}>
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/_next/static/media/bricolage-grotesque-latin-400-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Additional SEO meta tags */}
        <meta name="application-name" content="VibeFast" />
        <meta name="apple-mobile-web-app-title" content="VibeFast" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#22c55e" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#22c55e" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "VibeFast",
              description:
                "Complete React Native Expo boilerplate with AI backend, Convex database, authentication, payments, and landing page",
              url: "https://vibefast.com",
              author: {
                "@type": "Person",
                name: "Muhammad Zafar",
              },
              offers: {
                "@type": "Offer",
                price: "199",
                priceCurrency: "USD",
              },
              applicationCategory: "DeveloperApplication",
              operatingSystem: "iOS, Android, Web",
            }),
          }}
        />
      </head>
      <body className={`${bricolageGrotesque.className} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
