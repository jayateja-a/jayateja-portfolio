import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: `${siteConfig.name} – Software Engineer | Backend, Full Stack, Cloud & AI`,
  description: `Official portfolio of ${siteConfig.name}, a software engineer working across Java/Spring Boot backend systems, full-stack products, cloud platforms, distributed systems, data and applied AI.`,
  keywords: [siteConfig.name, "Software Engineer", "Backend Engineer", "Full Stack Engineer", "AI Engineer", "Forward Deployed Engineer", "Java", "Spring Boot", "Python", "React", "AWS", "Azure", "Kubernetes", "Portfolio"],
  authors: [{ name: siteConfig.name, url: siteConfig.domain }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteConfig.domain,
    siteName: `${siteConfig.name} Portfolio`,
    title: `${siteConfig.name} – Software Engineer`,
    description: siteConfig.intro,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteConfig.name} portfolio preview` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} – Software Engineer`,
    description: siteConfig.intro,
    images: ["/twitter-image"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#080a18",
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.domain,
  jobTitle: siteConfig.role,
  email: `mailto:${siteConfig.email}`,
  telephone: siteConfig.phoneDisplay,
  address: { "@type": "PostalAddress", addressCountry: "CA" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of New Brunswick" },
  sameAs: [siteConfig.github, siteConfig.linkedin],
  knowsAbout: ["Java", "Spring Boot", "Python", "React", "TypeScript", "Cloud Computing", "Kubernetes", "Terraform", "Distributed Systems", "Machine Learning", "Cybersecurity"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  );
}
