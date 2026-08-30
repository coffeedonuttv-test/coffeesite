import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Best GEO IPTV, B1G IPTV & Starshare Alternative (2026 Comparison) | Coffee & Donut TV",
  description:
    "Looking for a reliable GEO IPTV, B1G IPTV, or Starshare alternative? Compare server uptime, stream quality, channel selection, and customer support. Switch to Coffee & Donut TV for 34,000+ channels with zero buffering.",
  keywords: [
    "GEO IPTV alternative",
    "B1G IPTV alternative",
    "Starshare IPTV",
    "Starshare alternative",
    "GEO IPTV Canada",
    "B1G IPTV review",
    "best IPTV alternative",
    "stable IPTV server",
    "IPTV comparison 2026",
  ],
  alternates: {
    canonical: "https://www.coffeedonuttv.com/geo-iptv-alternative",
  },
  openGraph: {
    title: "Best Alternative to GEO IPTV, B1G & Starshare in Canada",
    description:
      "Tired of buffering servers, missing EPG, or unhelpful resellers? Discover why users are switching to Coffee & Donut TV for 34,000+ channels and 24/7 support.",
    url: "https://www.coffeedonuttv.com/geo-iptv-alternative",
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
      name: "GEO & B1G IPTV Alternative",
      item: "https://www.coffeedonuttv.com/geo-iptv-alternative",
    },
  ],
};

export default function GeoAlternativePage() {
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
          <span className="text-white">GEO &amp; B1G Alternative</span>
        </nav>

        <header className="mb-16 border-b border-white/10 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E2955A]/10 border border-[#E2955A]/30 text-[#E2955A] text-xs font-semibold uppercase tracking-widest mb-6">
            🔄 Unbiased IPTV Comparison
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            The #1 <span className="text-[#E2955A]">GEO IPTV &amp; B1G IPTV Alternative</span> for 2026
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed mb-8">
            Frustrated by unexpected server buffering during prime-time matches, slow reseller responses, or broken channel playlists? Here is how Coffee &amp; Donut TV delivers higher uptime, better 4K bitrates, and dedicated 24/7 human support.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/free-trial"
              className="px-8 py-4 rounded-xl bg-[#E2955A] text-black font-bold uppercase tracking-wider text-sm hover:brightness-110 transition-all shadow-[0_0_25px_rgba(226,149,90,0.4)]"
            >
              Test Our Server Free (24h)
            </Link>
            <Link
              href="/#pricing"
              className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#E2955A]/50 text-white font-semibold text-sm transition-all"
            >
              See Subscription Pricing
            </Link>
          </div>
        </header>

        <article className="space-y-16 text-white/80 leading-relaxed text-base sm:text-lg">
          {/* Provider Breakdowns */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Understanding Legacy Services: GEO IPTV, B1G &amp; Starshare
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">What is GEO IPTV?</h3>
                <p className="text-sm text-white/70">
                  GEO IPTV is a legacy provider widely distributed through third-party resellers. While it historically offered decent channel volume, users often report overloaded nodes during high-traffic UFC and Premier League events, leading to periodic freezing and audio de-sync.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">What is B1G IPTV?</h3>
                <p className="text-sm text-white/70">
                  B1G IPTV (Big IPTV) has been a popular budget option for North American viewers. However, customer support is often fragmented across unverified Telegram groups and email bots, making account renewals and technical troubleshooting frustrating when links go down.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">What is Starshare IPTV?</h3>
                <p className="text-sm text-white/70">
                  Starshare is another multi-server system with mixed reliability. In many regions, ISP throttling heavily impacts Starshare streams unless paired with high-performance VPNs, and on-demand VOD libraries are rarely updated with current cinematic releases.
                </p>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Head-to-Head Comparison
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5 text-white font-bold border-b border-white/10">
                  <tr>
                    <th className="p-4">Feature</th>
                    <th className="p-4 text-[#E2955A]">Coffee &amp; Donut TV</th>
                    <th className="p-4">GEO IPTV</th>
                    <th className="p-4">B1G IPTV</th>
                    <th className="p-4">Starshare</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="p-4 font-semibold">Live Channels</td>
                    <td className="p-4 text-[#E2955A] font-bold">34,000+ Verified</td>
                    <td className="p-4 text-white/70">18,000+</td>
                    <td className="p-4 text-white/70">20,000+</td>
                    <td className="p-4 text-white/70">15,000+</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">VOD Movies &amp; Shows</td>
                    <td className="p-4 text-[#E2955A] font-bold">125,000+ (Daily Sync)</td>
                    <td className="p-4 text-white/70">40,000+</td>
                    <td className="p-4 text-white/70">50,000+</td>
                    <td className="p-4 text-white/70">30,000+</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Instant Free Trial</td>
                    <td className="p-4 text-[#E2955A] font-bold">✅ Yes (24 Hours Free)</td>
                    <td className="p-4 text-white/70">❌ Paid or Unavailable</td>
                    <td className="p-4 text-white/70">❌ Inconsistent</td>
                    <td className="p-4 text-white/70">❌ Rare</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Anti-Buffering Infrastructure</td>
                    <td className="p-4 text-[#E2955A] font-bold">✅ Multi-Node CDN</td>
                    <td className="p-4 text-white/70">⚠️ High peak load</td>
                    <td className="p-4 text-white/70">⚠️ Frequent lag</td>
                    <td className="p-4 text-white/70">⚠️ High ISP throttling</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Customer Support</td>
                    <td className="p-4 text-[#E2955A] font-bold">✅ 24/7 Human WhatsApp &amp; Email</td>
                    <td className="p-4 text-white/70">⚠️ Reseller dependent</td>
                    <td className="p-4 text-white/70">⚠️ Ticket queue</td>
                    <td className="p-4 text-white/70">❌ Minimal</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">4K &amp; 8K Streams</td>
                    <td className="p-4 text-[#E2955A] font-bold">✅ Yes (High Bitrate)</td>
                    <td className="p-4 text-white/70">⚠️ Compressed 1080p</td>
                    <td className="p-4 text-white/70">⚠️ Mostly 720p/1080p</td>
                    <td className="p-4 text-white/70">⚠️ Variable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Switching Steps */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              How Easy Is It to Switch to Coffee &amp; Donut TV?
            </h2>
            <p className="mb-4">
              If you already have an existing player app on your Firestick, Android TV, or Apple device (like TiviMate, IPTV Smarters, XCIPTV, or GSE Smart IPTV), switching takes less than 60 seconds:
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-white/80">
              <li>Request your <strong>24-Hour Free Trial</strong> login details.</li>
              <li>Open your current player and select <strong>Add Playlist / Add User</strong>.</li>
              <li>Enter your new Coffee &amp; Donut TV Xtream credentials or M3U link.</li>
              <li>Enjoy immediate high-bandwidth streams without buying any new equipment.</li>
            </ol>
          </section>

          {/* CTA Box */}
          <section className="text-center p-10 rounded-3xl bg-[#E2955A]/10 border border-[#E2955A]/30">
            <h2 className="text-3xl font-extrabold text-white mb-4">Upgrade Your IPTV Experience Today</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              See why hundreds of former GEO, B1G, and Starshare subscribers switched to Coffee &amp; Donut TV. Start your zero-risk 24h trial now.
            </p>
            <Link
              href="/free-trial"
              className="inline-block px-10 py-5 rounded-2xl bg-[#E2955A] text-black font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform shadow-[0_0_30px_rgba(226,149,90,0.5)]"
            >
              Try Free Trial Now
            </Link>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
