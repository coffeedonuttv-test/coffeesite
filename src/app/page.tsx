import { ScrollProvider } from "@/components/ScrollContext";
import { Header } from "@/components/Header";
import { ParticleHero } from "@/components/ParticleHero";
import { VelocityMarquee } from "@/components/VelocityMarquee";
import { FeaturesSection, WhyUsSection } from "@/components/FeaturesSection";
import { PricingCards } from "@/components/PricingCards";
import { Footer } from "@/components/Footer";
import HomeClientWidgets from "@/components/HomeClientWidgets";
import type { Metadata } from "next";

// Page-level FAQ structured data — critical for "what is IPTV" and featured snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is IPTV?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IPTV (Internet Protocol Television) is a way to watch live TV, movies, and series over the internet instead of through cable or satellite. With Coffee & Donut TV, you get 34,000+ live channels and 125,000+ on-demand titles streamed directly to your device.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Coffee & Donut TV cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Coffee & Donut TV offers flexible IPTV subscription plans at affordable rates. You can try the service free for 24 hours — no credit card required.",
      },
    },
    {
      "@type": "Question",
      name: "Does Coffee & Donut TV offer a free trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Coffee & Donut TV offers a 24-hour free trial with full access to all 34,000+ channels and content. No credit card needed.",
      },
    },
    {
      "@type": "Question",
      name: "What devices does Coffee & Donut TV support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Coffee & Donut TV works on Amazon Firestick, Android TV, Smart TVs, iOS, Android phones and tablets, MAG boxes, and computers.",
      },
    },
    {
      "@type": "Question",
      name: "Can I watch sports like UFC, NFL, and NHL on Coffee & Donut TV?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Coffee & Donut TV includes dedicated sports channels covering UFC, NFL, NBA, NHL, Premier League, PPV events, and all major Canadian and international sports.",
      },
    },
    {
      "@type": "Question",
      name: "Is Coffee & Donut TV available in Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Coffee & Donut TV is available across Canada, including Ontario, BC, Quebec, Alberta, and all provinces. Canadian channels are included along with US and international content.",
      },
    },
    {
      "@type": "Question",
      name: "How does Coffee & Donut TV compare to GEO IPTV or B1G IPTV?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Coffee & Donut TV offers 34,000+ live channels with 24/7 human customer support, a free trial, and multi-device compatibility — making it the best alternative to GEO IPTV, B1G IPTV, and Starshare IPTV.",
      },
    },
    {
      "@type": "Question",
      name: "What internet speed do I need for IPTV?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For HD streaming, a minimum of 10 Mbps is recommended. For 4K or 8K content, 25 Mbps or higher is ideal.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Coffee & Donut TV IPTV Subscription",
  description:
    "Canada's best IPTV service. Watch 34,000+ live channels, 125,000+ movies and series, including sports, movies, and international content.",
  brand: { "@type": "Brand", name: "Coffee & Donut TV" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "CAD",
    availability: "https://schema.org/InStock",
    url: "https://www.coffeedonuttv.com/#pricing",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "312",
    bestRating: "5",
    worstRating: "1",
  },
};

export const metadata: Metadata = {
  title: "Best IPTV Service Canada — 34,000+ Live Channels | Coffee & Donut TV",
  description:
    "Canada's #1 IPTV service. Stream 34,000+ live channels, 125,000+ movies & series, UFC, NFL, NHL, and global TV. Free 24-hour trial — no credit card required. Works on Firestick, Android TV & more.",
  alternates: {
    canonical: "https://www.coffeedonuttv.com",
  },
};

export default function Home() {
  return (
    <ScrollProvider>
      {/* JSON-LD for this page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <main className="relative">
        {/*
          SEO-critical block: fully server-rendered, visible to Google.
          Uses sr-only so it doesn't interfere with the visual design.
          Google reads this to understand what the site is about.
        */}
        <div className="sr-only">
          <h1>Best IPTV Service in Canada — 34,000+ Live Channels</h1>
          <p>
            Coffee &amp; Donut TV is Canada&apos;s #1 IPTV streaming service. Watch
            34,000+ live channels, 125,000+ movies and series, UFC fights, NFL games,
            NHL hockey, NBA basketball, Premier League soccer, and global entertainment
            — all in one subscription. Free 24-hour trial, no credit card needed.
            Works on Amazon Firestick, Android TV, Smart TVs, iPhone, iPad, Android
            phones, and computers.
          </p>
          <h2>Why Choose Coffee &amp; Donut TV for IPTV in Canada?</h2>
          <ul>
            <li>34,000+ live channels — Canada, USA, UK, and worldwide</li>
            <li>125,000+ movies and series on demand</li>
            <li>HD, 4K, and 8K stream quality</li>
            <li>Live sports: UFC, NFL, NHL, NBA, Premier League, PPV events</li>
            <li>24/7 human customer support</li>
            <li>Works on Firestick, Android TV, Smart TV, iOS, Android, computers</li>
            <li>Free 24-hour trial — no credit card required</li>
            <li>Best alternative to GEO IPTV, B1G IPTV, and Starshare</li>
          </ul>
          <h2>IPTV Pricing Plans</h2>
          <p>
            Affordable monthly, 3-month, 6-month, and yearly IPTV subscription plans.
            Start with a free trial today. Available across all of Canada.
          </p>
        </div>

        {/* Visual components */}
        <Header />
        <ParticleHero />
        <VelocityMarquee />
        <FeaturesSection />
        <PricingCards />
        <WhyUsSection />
        <Footer />

        {/* Client-only interactive widgets */}
        <HomeClientWidgets />
      </main>
    </ScrollProvider>
  );
}
