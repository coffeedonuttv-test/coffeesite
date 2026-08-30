import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const siteUrl = "https://www.coffeedonuttv.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Coffee & Donut TV — Best IPTV Service Canada | 34,000+ Live Channels",
    template: "%s | Coffee & Donut TV",
  },
  description:
    "Canada's #1 IPTV streaming service. Watch 34,000+ live channels, 125,000+ movies & series, UFC, NFL, NBA, NHL, and global TV. Free 24-hour trial — no credit card required.",
  keywords: [
    "IPTV Canada",
    "best IPTV service Canada",
    "IPTV subscription",
    "IPTV free trial",
    "live TV streaming Canada",
    "IPTV Firestick",
    "IPTV Android TV",
    "sports streaming Canada",
    "UFC IPTV",
    "NFL streaming Canada",
    "GEO IPTV alternative",
    "B1G IPTV alternative",
    "Starshare IPTV",
    "8K IPTV streaming",
    "IPTV 34000 channels",
    "cheap IPTV Canada",
    "Coffee Donut TV",
  ],
  authors: [{ name: "Coffee & Donut TV", url: siteUrl }],
  creator: "Coffee & Donut TV",
  publisher: "Coffee & Donut TV",
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
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Coffee & Donut TV",
    title: "Coffee & Donut TV — Best IPTV Service Canada | 34,000+ Live Channels",
    description:
      "Canada's #1 IPTV streaming service. Watch 34,000+ live channels, 125,000+ movies & series, UFC, NFL, NBA, NHL. Free 24-hour trial — no credit card.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Coffee & Donut TV — Best IPTV Service in Canada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coffee & Donut TV — Best IPTV Service Canada",
    description:
      "34,000+ live channels, 125,000+ movies & series. Free 24-hour trial — no credit card required.",
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@coffeedonuttv",
  },
  verification: {
    // Add your Google Search Console verification token here when you get it
    // google: "YOUR_GSC_VERIFICATION_TOKEN",
  },
};

// JSON-LD Structured Data — Organization + WebSite schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Coffee & Donut TV",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Canada's premium IPTV streaming service offering 34,000+ live channels and 125,000+ movies and series.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-226-894-3166",
    contactType: "customer support",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.tiktok.com/@coffee.donut.tv",
    "https://www.instagram.com/coffeedonuttv",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Coffee & Donut TV",
  url: siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/react-grab/dist/index.global.js"
        />
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
