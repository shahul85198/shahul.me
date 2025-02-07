
const siteConfig = {
  name: "Shaik Shahul Hameed",
  title: "Front End Developer / Software Engineer / UI Developer",
  description:
    "Portfolio of Shaik Shahul Hameed, a Software Engineer specializing in front-End Development and UI Developer with 5+ years of experience.",
  url: "https://shahul.me/",
  ogImage: "https://shahul.me/shaik-shahul-hameed.webp",
  links: {
    github: "https://github.com/shahul85198",
    linkedin: "https://www.linkedin.com/in/shahul-hameed85/",
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
    "UI Developer",
    "React",
    "Redux",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Software Engineer",
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
    creator: "@shahul-hameed85",
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

