
const siteConfig = {
  name: "Shaik Shahul Hameed",
  title: "Front End Developer / Software Engineer / UI Developer",
  description:
    "Portfolio of Shaik Shahul Hameed, a Staff Software Engineer specializing in fullstack Development and UI Architecture with 10 years of experience.",
  url: "https://zakeer.me",
  ogImage: "https://zakeer.me/syed-zakeer-hussain.webp",
  links: {
    twitter: "https://twitter.com/zakeer579",
    github: "https://github.com/zakeer",
    linkedin: "https://linkedin.com/in/zakeer579",
  },
}

export const metadata = {
  title: {
    default: `${siteConfig.name} - ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Frontend Engineer",
    "UI Architect",
    "React",
    "Angular",
    "Vue.js",
    "TypeScript",
    "JavaScript",
    "AI/ML Integration",
    "Senior Software Engineer",
    "Web Development",
  ],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: {
      default: `${siteConfig.name} - ${siteConfig.title}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: `${siteConfig.name} - ${siteConfig.title}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@zakeer579",
  },
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
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

export default siteConfig

