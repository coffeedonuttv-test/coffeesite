import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Best IPTV Canada 2026 — 34,000+ Channels, 4K/8K Streams & Free Trial",
  description:
    "Looking for the best IPTV service in Canada? Coffee & Donut TV delivers 34,000+ live TV channels, 125,000+ VOD movies & series, Canadian sports (NHL, UFC, NFL), and zero buffering. Start your 24h free trial.",
  keywords: [
    "IPTV Canada",
    "Best IPTV Canada",
    "IPTV service Canada",
    "Canada IPTV subscription",
    "IPTV free trial Canada",
    "IPTV Ontario",
    "IPTV Vancouver BC",
    "IPTV Montreal Quebec",
    "IPTV Alberta",
    "Canadian TV channels IPTV",
    "4K IPTV Canada",
    "8K IPTV streaming Canada",
  ],
  alternates: {
    canonical: "https://www.coffeedonuttv.com/iptv-canada",
  },
  openGraph: {
    title: "Best IPTV Canada — 34,000+ Live Channels & Free Trial | Coffee & Donut TV",
    description:
      "Canada's top-rated IPTV provider. Stream TSN, Sportsnet, CBC, CTV, global news, UFC, live NHL & movies in 4K. Instant setup on Firestick & Smart TVs.",
    url: "https://www.coffeedonuttv.com/iptv-canada",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.coffeedonuttv.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "IPTV Canada",
      item: "https://www.coffeedonuttv.com/iptv-canada",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Coffee & Donut TV Canada IPTV Subscription",
  serviceType: "Internet Protocol Television (IPTV)",
  provider: {
    "@type": "Organization",
    name: "Coffee & Donut TV",
    url: "https://www.coffeedonuttv.com",
  },
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "CAD",
    availability: "https://schema.org/InStock",
    url: "https://www.coffeedonuttv.com/free-trial",
  },
};

export default function IptvCanadaPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#E2955A]/30 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#E2955A]/15 via-transparent to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[30%] right-0 w-[500px] h-[400px] bg-[#E2955A]/5 rounded-full blur-[120px] pointer-events-none" />

      <Header />

      <main className="pt-44 sm:pt-48 pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
        {/* Apple-grade Glassmorphism Breadcrumb */}
        <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/10 text-xs text-white/50 mb-10 shadow-lg">
          <Link href="/" className="hover:text-[#E2955A] transition-colors">Home</Link>
          <span className="text-white/30">/</span>
          <span className="text-white font-medium">IPTV Canada</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-20 text-center sm:text-left">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#E2955A]/10 border border-[#E2955A]/30 text-[#E2955A] text-[11px] font-bold uppercase tracking-[0.25em] mb-6 shadow-[0_0_20px_rgba(226,149,90,0.25)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2955A] animate-ping" />
            🍁 Canada&apos;s #1 Rated IPTV Stream
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.08] mb-8">
            Best <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#FCE3C8] to-[#E2955A]">IPTV Canada</span>
            <br />
            <span className="text-white/90">Subscription</span>{" "}
            <span className="text-[#E2955A] font-medium text-3xl sm:text-5xl align-middle font-mono">(2026)</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed mb-10 font-normal">
            Experience over <strong className="text-white">34,000+ live HD, 4K &amp; 8K TV channels</strong>, 125,000+ on-demand movies, full Canadian regional broadcasts, premium live sports (NHL, UFC, NFL, NBA), and 99.9% server uptime without long-term cable contracts.
          </p>

          <div className="flex flex-wrap gap-4 justify-center sm:justify-start items-center">
            <Link
              href="/free-trial"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#E2955A] to-[#C47D43] text-black font-extrabold uppercase tracking-wider text-xs sm:text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_35px_rgba(226,149,90,0.45)] flex items-center gap-2"
            >
              <span>Claim 24-Hour Free Trial</span>
              <span>→</span>
            </Link>
            <Link
              href="/#pricing"
              className="px-8 py-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-[#E2955A]/50 hover:bg-white/[0.08] text-white font-semibold text-xs sm:text-sm transition-all"
            >
              View Canadian Pricing Plans
            </Link>
          </div>
        </header>

        {/* Feature Bento Grid */}
        <section className="mb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-2xl border border-white/10 hover:border-[#E2955A]/40 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
              <div className="w-12 h-12 rounded-2xl bg-[#E2955A]/10 border border-[#E2955A]/30 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#E2955A] transition-colors">
                Anti-Freeze Technology
              </h2>
              <p className="text-sm text-white/70 leading-relaxed">
                Our private high-speed server clusters route your streams through low-latency CDN nodes, ensuring zero buffering even during massive live pay-per-view events.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-2xl border border-white/10 hover:border-[#E2955A]/40 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
              <div className="w-12 h-12 rounded-2xl bg-[#E2955A]/10 border border-[#E2955A]/30 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                🇨🇦
              </div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#E2955A] transition-colors">
                Full Regional Coverage
              </h2>
              <p className="text-sm text-white/70 leading-relaxed">
                Full access to Canadian local networks from Toronto, Montreal, Vancouver, Calgary, Ottawa, and Halifax, including news, weather, and live local programming.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-2xl border border-white/10 hover:border-[#E2955A]/40 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 rounded-2xl bg-[#E2955A]/10 border border-[#E2955A]/30 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                🏆
              </div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#E2955A] transition-colors">
                Zero Blackout Sports
              </h2>
              <p className="text-sm text-white/70 leading-relaxed">
                Never miss an NHL, UFC, NFL, or NBA game due to regional broadcast blackouts. Watch TSN, Sportsnet, and global sports feeds in 60 FPS 4K.
              </p>
            </div>
          </div>
        </section>

        {/* Apple-Grade Comparison Table */}
        <section className="mb-20">
          <div className="text-center sm:text-left mb-8">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              Canadian Cable TV vs. Coffee &amp; Donut TV
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              See why over 10,000+ Canadians have cut the cord this year.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-2xl border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.6)]">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th className="p-5 sm:p-6 text-white/50 font-bold uppercase tracking-wider text-xs">Feature</th>
                    <th className="p-5 sm:p-6 text-[#E2955A] font-bold uppercase tracking-wider text-xs bg-[#E2955A]/10">
                      ☕ Coffee &amp; Donut TV
                    </th>
                    <th className="p-5 sm:p-6 text-white/50 font-bold uppercase tracking-wider text-xs">
                      Traditional Cable (Bell/Rogers)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-5 sm:p-6 font-semibold text-white">Monthly Cost</td>
                    <td className="p-5 sm:p-6 text-[#E2955A] font-bold bg-[#E2955A]/5">Affordable Flat Rate</td>
                    <td className="p-5 sm:p-6 text-white/60">$130 – $220 / month</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-5 sm:p-6 font-semibold text-white">Live Channels</td>
                    <td className="p-5 sm:p-6 text-[#E2955A] font-bold bg-[#E2955A]/5">34,000+ Worldwide &amp; Local</td>
                    <td className="p-5 sm:p-6 text-white/60">150 – 300 Limited</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-5 sm:p-6 font-semibold text-white">VOD Movies &amp; Series</td>
                    <td className="p-5 sm:p-6 text-[#E2955A] font-bold bg-[#E2955A]/5">125,000+ (Updated Daily)</td>
                    <td className="p-5 sm:p-6 text-white/60">Expensive Per-Rental Fees</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-5 sm:p-6 font-semibold text-white">Live Sports &amp; PPV</td>
                    <td className="p-5 sm:p-6 text-[#E2955A] font-bold bg-[#E2955A]/5">All Included (Zero Extra Cost)</td>
                    <td className="p-5 sm:p-6 text-white/60">$80+ Per PPV Event</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-5 sm:p-6 font-semibold text-white">Contract Lock-in</td>
                    <td className="p-5 sm:p-6 text-[#E2955A] font-bold bg-[#E2955A]/5">No Contract (Cancel Anytime)</td>
                    <td className="p-5 sm:p-6 text-white/60">1 to 2 Year Binding Contracts</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-5 sm:p-6 font-semibold text-white">Device Support</td>
                    <td className="p-5 sm:p-6 text-[#E2955A] font-bold bg-[#E2955A]/5">Firestick, Smart TV, iOS, Android</td>
                    <td className="p-5 sm:p-6 text-white/60">Bulky Rented Set-Top Boxes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Interactive Hub Navigation */}
        <section className="mb-20 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent border border-white/10 shadow-2xl">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Explore Related IPTV Guides</h2>
          <p className="text-white/60 text-sm mb-6">
            Get setup guides, competitor breakdowns, and sport schedules:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-semibold uppercase tracking-wider">
            <Link href="/iptv-firestick" className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#E2955A] hover:text-[#E2955A] transition-all flex items-center gap-2">
              <span>🔥</span>
              <span>Firestick Setup</span>
            </Link>
            <Link href="/iptv-sports" className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#E2955A] hover:text-[#E2955A] transition-all flex items-center gap-2">
              <span>🥊</span>
              <span>Live Sports Hub</span>
            </Link>
            <Link href="/geo-iptv-alternative" className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#E2955A] hover:text-[#E2955A] transition-all flex items-center gap-2">
              <span>🔄</span>
              <span>GEO &amp; B1G Compare</span>
            </Link>
            <Link href="/faq" className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#E2955A] hover:text-[#E2955A] transition-all flex items-center gap-2">
              <span>❓</span>
              <span>Frequently Asked</span>
            </Link>
          </div>
        </section>

        {/* Apple-grade CTA Box */}
        <section className="relative overflow-hidden p-10 sm:p-16 rounded-[2.5rem] bg-gradient-to-b from-[#E2955A]/20 via-white/[0.03] to-transparent border border-[#E2955A]/40 text-center shadow-[0_30px_90px_rgba(226,149,90,0.15)]">
          <div className="absolute inset-0 bg-radial-gradient from-[#E2955A]/10 to-transparent pointer-events-none" />
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Ready to Upgrade Your Streaming?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-base sm:text-lg mb-8 font-normal">
            Start your zero-risk, 24-hour instant free trial. No credit card required, instant credential delivery.
          </p>
          <Link
            href="/free-trial"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#E2955A] to-[#C47D43] text-black font-extrabold uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(226,149,90,0.5)]"
          >
            <span>Start Free 24-Hour Trial</span>
            <span>→</span>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
