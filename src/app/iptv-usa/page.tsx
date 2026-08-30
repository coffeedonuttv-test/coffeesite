import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Best IPTV USA 2026 — 34,000+ Live US Channels, Sports & Movies | Coffee & Donut TV",
  description:
    "Top-rated IPTV service for USA cord-cutters. Stream local ABC, CBS, NBC, FOX, HBO, ESPN, NFL Sunday Ticket, NBA League Pass, UFC, and 125,000+ movies in 4K with zero buffering. Free 24h trial.",
  keywords: [
    "IPTV USA",
    "Best IPTV USA",
    "USA IPTV subscription",
    "US live TV streaming",
    "IPTV free trial USA",
    "American IPTV provider",
    "NFL IPTV streaming",
    "NBA IPTV streaming",
    "4K IPTV USA",
  ],
  alternates: {
    canonical: "https://www.coffeedonuttv.com/iptv-usa",
  },
  openGraph: {
    title: "Best IPTV USA — 34,000+ Channels & Live Sports in 4K",
    description:
      "All 50 US states local networks, premium sports, and cinema on Amazon Firestick, Smart TVs, and Apple devices.",
    url: "https://www.coffeedonuttv.com/iptv-usa",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.coffeedonuttv.com" },
    { "@type": "ListItem", position: 2, name: "IPTV USA", item: "https://www.coffeedonuttv.com/iptv-usa" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Coffee & Donut TV USA IPTV Subscription",
  serviceType: "Internet Protocol Television (IPTV)",
  provider: { "@type": "Organization", name: "Coffee & Donut TV", url: "https://www.coffeedonuttv.com" },
  areaServed: { "@type": "Country", name: "United States" },
};

export default function IptvUsaPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#E2955A]/30 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#E2955A]/15 via-transparent to-transparent rounded-full blur-[140px] pointer-events-none" />

      <Header />

      <main className="pt-44 sm:pt-48 pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
        <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/10 text-xs text-white/50 mb-10 shadow-lg">
          <Link href="/" className="hover:text-[#E2955A] transition-colors">Home</Link>
          <span className="text-white/30">/</span>
          <span className="text-white font-medium">IPTV USA</span>
        </nav>

        <header className="mb-20 text-center sm:text-left">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#E2955A]/10 border border-[#E2955A]/30 text-[#E2955A] text-[11px] font-bold uppercase tracking-[0.25em] mb-6 shadow-[0_0_20px_rgba(226,149,90,0.25)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2955A] animate-ping" />
            🇺🇸 #1 Rated USA IPTV Provider
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.08] mb-8">
            Best <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#FCE3C8] to-[#E2955A]">IPTV USA</span>
            <br />
            <span className="text-white/90">Subscription</span>{" "}
            <span className="text-[#E2955A] font-medium text-3xl sm:text-5xl align-middle font-mono">(2026)</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed mb-10 font-normal">
            Stream over <strong className="text-white">34,000+ live HD &amp; 4K channels</strong>, 125,000+ on-demand movies, local US network feeds across all 50 states, premium live sports (NFL, NBA, MLB, UFC), and zero regional blackouts.
          </p>

          <div className="flex flex-wrap gap-4 justify-center sm:justify-start items-center">
            <Link
              href="/free-trial"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#E2955A] to-[#C47D43] text-black font-extrabold uppercase tracking-wider text-xs sm:text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_35px_rgba(226,149,90,0.45)] flex items-center gap-2"
            >
              <span>Get Free USA Trial</span>
              <span>→</span>
            </Link>
            <Link
              href="/#pricing"
              className="px-8 py-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-[#E2955A]/50 hover:bg-white/[0.08] text-white font-semibold text-xs sm:text-sm transition-all"
            >
              Explore USA Plans
            </Link>
          </div>
        </header>

        {/* Bento Grid */}
        <section className="mb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="text-3xl mb-4">🏈</div>
            <h2 className="text-xl font-bold text-white mb-2">NFL RedZone &amp; Sunday Ticket</h2>
            <p className="text-sm text-white/70">Every live touchdown from 1pm to 8pm EST every Sunday without expensive cable sports packages.</p>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="text-3xl mb-4">🗽</div>
            <h2 className="text-xl font-bold text-white mb-2">All 50 US States Local Feeds</h2>
            <p className="text-sm text-white/70">Local ABC, CBS, NBC, FOX, and CW affiliates from New York, Los Angeles, Chicago, Houston, Miami, and more.</p>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] sm:col-span-2 lg:col-span-1">
            <div className="text-3xl mb-4">🎬</div>
            <h2 className="text-xl font-bold text-white mb-2">Premium Movie Multiplex</h2>
            <p className="text-sm text-white/70">HBO, Showtime, Cinemax, Starz, and 125,000+ 4K movies updated daily directly on your screen.</p>
          </div>
        </section>

        {/* CTA Box */}
        <section className="p-10 sm:p-16 rounded-[2.5rem] bg-gradient-to-b from-[#E2955A]/20 via-white/[0.03] to-transparent border border-[#E2955A]/40 text-center shadow-[0_30px_90px_rgba(226,149,90,0.15)]">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">Stream USA TV in 4K Today</h2>
          <p className="text-white/70 max-w-xl mx-auto text-base sm:text-lg mb-8">Test our US streams with a free 24-hour instant trial. No credit card required.</p>
          <Link href="/free-trial" className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#E2955A] to-[#C47D43] text-black font-extrabold uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_0_40px_rgba(226,149,90,0.5)]">
            Start Free Trial Now →
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
