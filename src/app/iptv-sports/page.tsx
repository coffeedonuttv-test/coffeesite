import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Live Sports IPTV Canada — UFC, NHL, NFL, NBA, Premier League & PPV | Coffee & Donut TV",
  description:
    "Stream every live sports event in 4K & 60FPS. Watch UFC Pay-Per-Views, NHL hockey, NFL RedZone, NBA League Pass, UEFA Champions League, and English Premier League on Coffee & Donut TV IPTV.",
  keywords: [
    "UFC IPTV",
    "live sports IPTV",
    "IPTV sports Canada",
    "NHL IPTV streaming",
    "NFL RedZone IPTV",
    "NBA League Pass IPTV",
    "Premier League IPTV",
    "PPV IPTV live events",
    "Formula 1 IPTV",
    "Champions League IPTV",
  ],
  alternates: {
    canonical: "https://www.coffeedonuttv.com/iptv-sports",
  },
  openGraph: {
    title: "Best Sports IPTV in Canada — Live UFC, NHL, NFL & PPV in 4K",
    description:
      "Never miss a match. Full access to TSN, Sportsnet, ESPN, Sky Sports, DAZN, BT Sport, and all global sports networks with zero buffering.",
    url: "https://www.coffeedonuttv.com/iptv-sports",
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
      name: "Live Sports IPTV",
      item: "https://www.coffeedonuttv.com/iptv-sports",
    },
  ],
};

const sportsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Available Live Sports Channels on Coffee & Donut TV",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "UFC Fight Night & Pay-Per-View Main Cards" },
    { "@type": "ListItem", position: 2, name: "NHL Center Ice & Regional Canadian Hockey" },
    { "@type": "ListItem", position: 3, name: "NFL Sunday Ticket & NFL RedZone" },
    { "@type": "ListItem", position: 4, name: "NBA League Pass & Playoff Broadcasts" },
    { "@type": "ListItem", position: 5, name: "English Premier League & Champions League Soccer" },
    { "@type": "ListItem", position: 6, name: "Formula 1, MotoGP & Motorsport Live Streams" },
  ],
};

export default function IptvSportsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#E2955A]/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsSchema) }}
      />

      <Header />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <nav aria-label="Breadcrumb" className="text-xs text-white/50 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[#E2955A] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">IPTV Sports</span>
        </nav>

        <header className="mb-16 border-b border-white/10 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E2955A]/10 border border-[#E2955A]/30 text-[#E2955A] text-xs font-semibold uppercase tracking-widest mb-6">
            🥊 Zero Blackouts • 60 FPS Ultra HD
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Best <span className="text-[#E2955A]">Sports IPTV</span> in Canada (UFC, NHL, NFL, Soccer)
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed mb-8">
            Stop paying $80+ per PPV or dealing with local blackout rules. Get instant, unrestricted access to every UFC event, NHL game, NFL matchup, Premier League fixture, and international tournament in pristine 4K 60FPS.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/free-trial"
              className="px-8 py-4 rounded-xl bg-[#E2955A] text-black font-bold uppercase tracking-wider text-sm hover:brightness-110 transition-all shadow-[0_0_25px_rgba(226,149,90,0.4)]"
            >
              Test Sports Free (24h Trial)
            </Link>
            <Link
              href="/#pricing"
              className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#E2955A]/50 text-white font-semibold text-sm transition-all"
            >
              View Sports Packages
            </Link>
          </div>
        </header>

        <article className="space-y-16 text-white/80 leading-relaxed text-base sm:text-lg">
          {/* Sports Coverage Cards */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Complete Global Sports Coverage
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-3xl mb-2">🥊</div>
                <h3 className="text-xl font-bold text-[#E2955A] mb-2">UFC &amp; Combat Sports</h3>
                <p className="text-sm text-white/70">
                  Every numbered UFC Pay-Per-View, Fight Night, Dana White&apos;s Contender Series, Boxing PPVs (Canelo, Fury, Joshua), ONE Championship, and Bellator MMA live in HD &amp; 4K with no additional fees.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-3xl mb-2">🏒</div>
                <h3 className="text-xl font-bold text-[#E2955A] mb-2">NHL Hockey &amp; Canada Regional</h3>
                <p className="text-sm text-white/70">
                  Watch every Toronto Maple Leafs, Montreal Canadiens, Vancouver Canucks, Edmonton Oilers, Calgary Flames, Ottawa Senators, and Winnipeg Jets game without local regional blackout restrictions.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-3xl mb-2">🏈</div>
                <h3 className="text-xl font-bold text-[#E2955A] mb-2">NFL Sunday Ticket &amp; RedZone</h3>
                <p className="text-sm text-white/70">
                  Every regular season touchdown with NFL RedZone, Sunday afternoon games, Thursday Night Football, Sunday Night Football, Monday Night Football, and the Super Bowl.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-3xl mb-2">⚽</div>
                <h3 className="text-xl font-bold text-[#E2955A] mb-2">Premier League, UEFA &amp; Global Soccer</h3>
                <p className="text-sm text-white/70">
                  Live English Premier League, UEFA Champions League, Europa League, La Liga, Serie A, Bundesliga, MLS, and FIFA World Cup matches on TSN, Sportsnet, Sky Sports, and beIN Sports.
                </p>
              </div>
            </div>
          </section>

          {/* Network Lineup Table */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Included Sports Channels Lineup
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5 text-white font-bold border-b border-white/10">
                  <tr>
                    <th className="p-4">Network / Provider</th>
                    <th className="p-4">Sports Covered</th>
                    <th className="p-4 text-[#E2955A]">Stream Quality</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="p-4 font-semibold">TSN 1 - 5 &amp; Sportsnet Regional</td>
                    <td className="p-4 text-white/70">NHL, CFL, NBA Raptors, MLB Blue Jays, Tennis</td>
                    <td className="p-4 text-[#E2955A] font-bold">1080p 60FPS &amp; 4K</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">ESPN, ESPN 2 &amp; ESPNU (USA)</td>
                    <td className="p-4 text-white/70">College Football, NBA, MLB, NHL, UFC Prelims</td>
                    <td className="p-4 text-[#E2955A] font-bold">1080p 60FPS</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Sky Sports Main Event &amp; Football (UK)</td>
                    <td className="p-4 text-white/70">Premier League, Formula 1, Golf, Cricket</td>
                    <td className="p-4 text-[#E2955A] font-bold">4K UHD &amp; 1080p 60FPS</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">TNT Sports &amp; Discovery+ (UK)</td>
                    <td className="p-4 text-white/70">Champions League, UFC Live Cards, MotoGP</td>
                    <td className="p-4 text-[#E2955A] font-bold">1080p 60FPS &amp; 4K</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">PPV Live Events Hub</td>
                    <td className="p-4 text-white/70">UFC Main Cards, Championship Boxing, WWE, AEW</td>
                    <td className="p-4 text-[#E2955A] font-bold">4K &amp; 1080p Multiple Feeds</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* CTA Box */}
          <section className="text-center p-10 rounded-3xl bg-[#E2955A]/10 border border-[#E2955A]/30">
            <h2 className="text-3xl font-extrabold text-white mb-4">Watch the Next Big Fight or Game Free</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              Experience the difference of zero-lag, 60 FPS sports streams with a free 24-hour trial before committing.
            </p>
            <Link
              href="/free-trial"
              className="inline-block px-10 py-5 rounded-2xl bg-[#E2955A] text-black font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform shadow-[0_0_30px_rgba(226,149,90,0.5)]"
            >
              Start Free Sports Trial
            </Link>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
