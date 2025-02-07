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
              name: "Shaik Shahul Hameed",
              jobTitle: "Front End Developer / Software Engineer / UI Developer",
              description: metadata.description,
              image: metadata.openGraph?.images[0].url,
              sameAs: [
                "https://github.com/shahul85198",
                "https://www.linkedin.com/in/shahul-hameed85/",
              ],
              url: "https://shahul.me",
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
                "Redux",
                "Next.js",
                "TypeScript",
                "JavaScript",
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

