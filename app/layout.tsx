import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "./components/theme-provider"
import { metadata } from "./metadata"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Syed Zakeer Hussain",
              jobTitle: "Staff Software Engineer / UI Architect",
              description: metadata.description,
              image: metadata.openGraph?.images[0].url,
              sameAs: [
                "https://twitter.com/zakeer579",
                "https://github.com/zakeer",
                "https://linkedin.com/in/zakeer579",
              ],
              url: "https://zakeer.me",
              worksFor: {
                "@type": "Organization",
                name: "SAP SuccessFactors",
              },
              alumniOf: {
                "@type": "Organization",
                name: "SwoopTalent",
              },
              knowsAbout: [
                "Frontend Development",
                "UI Architecture",
                "React",
                "Angular",
                "Vue.js",
                "TypeScript",
                "JavaScript",
                "AI/ML Integration",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-background text-foreground">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}

