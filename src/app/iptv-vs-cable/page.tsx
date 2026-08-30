import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "IPTV vs Cable TV Canada (2026 Comparison) — Why You Should Cut the Cord | Coffee & Donut TV",
  description:
    "Comparing IPTV vs Cable TV in Canada. Discover how switching to Coffee & Donut TV IPTV saves you $1,500+ every year while giving you 34,000+ live channels, 4K sports, and zero contracts.",
  keywords: [
    "IPTV vs cable",
    "cut the cord Canada",
    "cancel cable Canada",
    "is IPTV worth it",
    "cheapest way to watch live TV",
    "cable TV alternatives Canada",
    "Rogers cable alternative",
    "Bell TV alternative",
    "save money on cable TV",
  ],
  alternates: {
    canonical: "https://www.coffeedonuttv.com/iptv-vs-cable",
  },
  openGraph: {
    title: "IPTV vs Cable TV in Canada — Save $1,500+ Every Year",
    description:
      "Full breakdown of pricing, channel counts, device flexibility, sports coverage, and contract freedom between Canadian cable and IPTV.",
    url: "https://www.coffeedonuttv.com/iptv-vs-cable",
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
      name: "IPTV vs Cable Guide",
      item: "https://www.coffeedonuttv.com/iptv-vs-cable",
    },
  ],
};

export default function IptvVsCablePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#E2955A]/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <nav aria-label="Breadcrumb" className="text-xs text-white/50 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[#E2955A] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">IPTV vs Cable</span>
        </nav>

        <header className="mb-16 border-b border-white/10 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E2955A]/10 border border-[#E2955A]/30 text-[#E2955A] text-xs font-semibold uppercase tracking-widest mb-6">
            💰 Save Over $1,500 / Year
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            <span className="text-[#E2955A]">IPTV vs Cable TV</span> in Canada: The Definitive 2026 Guide
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed mb-8">
            Why are hundreds of thousands of Canadians canceling Bell, Rogers, Shaw, and Videotron? Here is a breakdown of cost differences, channel libraries, hardware requirements, and why IPTV is the future of home entertainment.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/free-trial"
              className="px-8 py-4 rounded-xl bg-[#E2955A] text-black font-bold uppercase tracking-wider text-sm hover:brightness-110 transition-all shadow-[0_0_25px_rgba(226,149,90,0.4)]"
            >
              Test IPTV Free (24h Trial)
            </Link>
            <Link
              href="/#pricing"
              className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#E2955A]/50 text-white font-semibold text-sm transition-all"
            >
              Compare Plans
            </Link>
          </div>
        </header>

        <article className="space-y-16 text-white/80 leading-relaxed text-base sm:text-lg">
          {/* Key Differences */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              The 5 Major Differences You Need to Know
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <h3 className="text-xl font-bold text-[#E2955A] mb-2">1. Price &amp; Hidden Fees</h3>
                <p className="text-sm text-white/70">
                  Average Canadian cable bills range from $120 to $220/month when you factor in HD box rentals, broadcast fees, regional sports surcharges, and taxes. Coffee &amp; Donut TV is a flat, predictable fee with zero hidden line items.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <h3 className="text-xl font-bold text-[#E2955A] mb-2">2. Channel Variety (34,000+ vs 200)</h3>
                <p className="text-sm text-white/70">
                  Cable providers lock premium movies and sports behind expensive theme tiers. With our IPTV subscription, you unlock over 34,000 live channels worldwide and 125,000+ movies on day one.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <h3 className="text-xl font-bold text-[#E2955A] mb-2">3. Hardware &amp; Setup</h3>
                <p className="text-sm text-white/70">
                  Cable requires proprietary coax cables, technician visits, and bulky rented boxes for every room. IPTV runs over your existing Wi-Fi on Amazon Firestick, Smart TVs, Android boxes, iPads, and smartphones.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <h3 className="text-xl font-bold text-[#E2955A] mb-2">4. Zero Contracts</h3>
                <p className="text-sm text-white/70">
                  Cable companies lock customers into 12 or 24-month commitments with steep early-termination penalties. Coffee &amp; Donut TV gives you full control with flexible month-to-month options you can pause or cancel anytime.
                </p>
              </div>
            </div>
          </section>

          {/* Annual Savings Calculator Box */}
          <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#E2955A]/20 via-white/[0.02] to-transparent border border-[#E2955A]/40">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Annual Savings Breakdown (Canadian Household Average)
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 my-6 text-center">
              <div className="p-6 rounded-2xl bg-black/60 border border-white/10">
                <p className="text-xs uppercase text-white/50 tracking-wider mb-1">Traditional Cable</p>
                <p className="text-3xl font-bold text-red-400">$1,800+</p>
                <p className="text-xs text-white/60 mt-1">per year ($150/mo)</p>
              </div>
              <div className="p-6 rounded-2xl bg-black/60 border border-[#E2955A]/50">
                <p className="text-xs uppercase text-[#E2955A] tracking-wider mb-1">Coffee &amp; Donut TV</p>
                <p className="text-3xl font-bold text-[#E2955A]">$180 - $240</p>
                <p className="text-xs text-white/60 mt-1">per year</p>
              </div>
              <div className="p-6 rounded-2xl bg-[#E2955A] text-black">
                <p className="text-xs uppercase font-bold tracking-wider mb-1">Your Money Saved</p>
                <p className="text-3xl font-black">$1,560+</p>
                <p className="text-xs font-semibold mt-1">kept in your pocket</p>
              </div>
            </div>
            <p className="text-sm text-white/70 text-center">
              *Calculated based on standard 3-room cable package with basic sports and movie tiers vs Coffee &amp; Donut TV multi-device subscription.
            </p>
          </section>

          {/* FAQ snippet */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Common Cord-Cutting Questions
            </h2>
            <div className="space-y-4">
              <details className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 cursor-pointer">
                <summary className="font-bold text-white text-lg">Will my internet be fast enough for IPTV?</summary>
                <p className="text-sm text-white/70 mt-3">
                  Most modern Canadian residential connections (30 Mbps to 1000 Mbps) are more than fast enough. Standard HD streams only require 10 Mbps, and 4K streams need around 25 Mbps.
                </p>
              </details>

              <details className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 cursor-pointer">
                <summary className="font-bold text-white text-lg">Can I still watch local Canadian news and sports?</summary>
                <p className="text-sm text-white/70 mt-3">
                  Yes! Coffee &amp; Donut TV includes CBC, CTV, Global, Citytv, TSN, and Sportsnet feeds from Toronto, Montreal, Calgary, Vancouver, Ottawa, and more.
                </p>
              </details>
            </div>
          </section>

          {/* CTA Box */}
          <section className="text-center p-10 rounded-3xl bg-[#E2955A]/10 border border-[#E2955A]/30">
            <h2 className="text-3xl font-extrabold text-white mb-4">Cut the Cord in Less Than 5 Minutes</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              Start your free 24-hour trial today and see how easy it is to replace cable TV forever.
            </p>
            <Link
              href="/free-trial"
              className="inline-block px-10 py-5 rounded-2xl bg-[#E2955A] text-black font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform shadow-[0_0_30px_rgba(226,149,90,0.5)]"
            >
              Claim Your Free Trial
            </Link>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
