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
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#E2955A]/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Header />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Breadcrumb Visual */}
        <nav aria-label="Breadcrumb" className="text-xs text-white/50 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[#E2955A] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">IPTV Canada</span>
        </nav>

        {/* Hero Banner */}
        <header className="mb-16 text-center sm:text-left border-b border-white/10 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E2955A]/10 border border-[#E2955A]/30 text-[#E2955A] text-xs font-semibold uppercase tracking-widest mb-6">
            🍁 Canada&apos;s #1 Rated IPTV Stream
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Best <span className="text-[#E2955A]">IPTV Canada</span> Subscription (2026 Edition)
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed mb-8">
            Experience over 34,000+ live HD, 4K &amp; 8K TV channels, 125,000+ on-demand movies, full Canadian regional broadcasts, premium live sports (NHL, UFC, NBA, Premier League), and 99.9% server uptime without long-term cable contracts.
          </p>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <Link
              href="/free-trial"
              className="px-8 py-4 rounded-xl bg-[#E2955A] text-black font-bold uppercase tracking-wider text-sm hover:brightness-110 transition-all shadow-[0_0_25px_rgba(226,149,90,0.4)]"
            >
              Claim 24-Hour Free Trial
            </Link>
            <Link
              href="/#pricing"
              className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#E2955A]/50 text-white font-semibold text-sm transition-all"
            >
              View Canadian Pricing Plans
            </Link>
          </div>
        </header>

        {/* Core Value Proposition */}
        <article className="space-y-16 text-white/80 leading-relaxed text-base sm:text-lg">
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Why Coffee &amp; Donut TV is Canada&apos;s Best IPTV Provider
            </h2>
            <p className="mb-4">
              Traditional Canadian cable providers like Bell, Rogers, Shaw, and Videotron charge upwards of $120 to $200 per month for basic cable packages packed with hidden equipment rental fees and blackout restrictions.
            </p>
            <p className="mb-4">
              <strong>Coffee &amp; Donut TV</strong> provides modern Canadian cord-cutters with an ultra-reliable, high-bandwidth IPTV service delivering crystal-clear 1080p, 4K UHD, and select 8K live streams across Ontario, British Columbia, Quebec, Alberta, Manitoba, and beyond.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <h3 className="text-xl font-semibold text-[#E2955A] mb-2">⚡ Anti-Freeze Technology</h3>
                <p className="text-sm text-white/70">
                  Our private high-speed server clusters route your streams through low-latency CDN nodes, ensuring zero buffering even during massive live pay-per-view events.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <h3 className="text-xl font-semibold text-[#E2955A] mb-2">🇨🇦 Complete Regional Channels</h3>
                <p className="text-sm text-white/70">
                  Full access to Canadian local networks from Toronto, Montreal, Vancouver, Calgary, Ottawa, and Halifax, including news, weather, and live local programming.
                </p>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Canadian Cable TV vs. Coffee &amp; Donut TV IPTV
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5 text-white font-bold border-b border-white/10">
                  <tr>
                    <th className="p-4">Feature</th>
                    <th className="p-4 text-[#E2955A]">Coffee &amp; Donut TV</th>
                    <th className="p-4">Traditional Canadian Cable</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="p-4 font-medium">Monthly Cost</td>
                    <td className="p-4 text-[#E2955A] font-bold">Affordable Flat Rate</td>
                    <td className="p-4 text-white/60">$130 - $220 / month</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Live Channels</td>
                    <td className="p-4 text-[#E2955A] font-bold">34,000+ Global &amp; Local</td>
                    <td className="p-4 text-white/60">150 - 300 Limited</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">VOD Movies &amp; Shows</td>
                    <td className="p-4 text-[#E2955A] font-bold">125,000+ Updated Daily</td>
                    <td className="p-4 text-white/60">Paid On-Demand Rentals</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Live Sports &amp; PPV</td>
                    <td className="p-4 text-[#E2955A] font-bold">All Included (NHL, UFC, NFL)</td>
                    <td className="p-4 text-white/60">Expensive Add-ons &amp; Blackouts</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Contract Required</td>
                    <td className="p-4 text-[#E2955A] font-bold">No Contracts (Cancel Anytime)</td>
                    <td className="p-4 text-white/60">1 to 2 Year Locked Contracts</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Device Compatibility</td>
                    <td className="p-4 text-[#E2955A] font-bold">Firestick, Android, iOS, Smart TV</td>
                    <td className="p-4 text-white/60">Proprietary Set-Top Box Required</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Setup Links & Hub */}
          <section className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Explore More IPTV Resources</h2>
            <p className="text-white/70 mb-6">
              Learn how to configure your devices and discover sport channel lineups:
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <Link href="/iptv-firestick" className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#E2955A] text-white hover:text-[#E2955A] transition-colors">
                🔥 Firestick IPTV Setup Guide
              </Link>
              <Link href="/iptv-sports" className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#E2955A] text-white hover:text-[#E2955A] transition-colors">
                🥊 Live Sports &amp; UFC IPTV
              </Link>
              <Link href="/geo-iptv-alternative" className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#E2955A] text-white hover:text-[#E2955A] transition-colors">
                🔄 GEO &amp; B1G IPTV Comparison
              </Link>
              <Link href="/faq" className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#E2955A] text-white hover:text-[#E2955A] transition-colors">
                ❓ IPTV Frequently Asked Questions
              </Link>
            </div>
          </section>

          {/* CTA Box */}
          <section className="text-center p-10 rounded-3xl bg-[#E2955A]/10 border border-[#E2955A]/30">
            <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Switch to Canada&apos;s Best IPTV?</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              Test drive our high-speed streams with a 100% free, 24-hour instant trial. No credit card, no risk, immediate activation.
            </p>
            <Link
              href="/free-trial"
              className="inline-block px-10 py-5 rounded-2xl bg-[#E2955A] text-black font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform shadow-[0_0_30px_rgba(226,149,90,0.5)]"
            >
              Start Free 24-Hour Trial Now
            </Link>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
