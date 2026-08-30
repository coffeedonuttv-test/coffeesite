import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Best IPTV UK 2026 — Sky Sports, TNT Sports, 3pm Kick-Offs & Free Trial | Coffee & Donut TV",
  description:
    "The ultimate UK IPTV subscription. Watch 34,000+ channels, Sky Sports, TNT Sports, Premier League 3pm blackout-free matches, BBC, ITV, and 125,000+ movies in 4K. Instant 24-hour trial.",
  keywords: ["IPTV UK", "Best IPTV UK", "UK IPTV subscription", "Sky Sports IPTV", "Premier League IPTV", "TNT Sports IPTV", "IPTV free trial UK"],
  alternates: { canonical: "https://www.coffeedonuttv.com/iptv-uk" },
};

export default function IptvUkPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#E2955A]/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#E2955A]/15 via-transparent to-transparent rounded-full blur-[140px] pointer-events-none" />
      <Header />
      <main className="pt-44 sm:pt-48 pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
        <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/10 text-xs text-white/50 mb-10 shadow-lg">
          <Link href="/" className="hover:text-[#E2955A] transition-colors">Home</Link>
          <span className="text-white/30">/</span>
          <span className="text-white font-medium">IPTV UK</span>
        </nav>
        <header className="mb-20 text-center sm:text-left">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#E2955A]/10 border border-[#E2955A]/30 text-[#E2955A] text-[11px] font-bold uppercase tracking-[0.25em] mb-6 shadow-[0_0_20px_rgba(226,149,90,0.25)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2955A] animate-ping" />
            🇬🇧 #1 Rated UK IPTV Stream
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.08] mb-8">
            Best <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#FCE3C8] to-[#E2955A]">IPTV UK</span>
            <br />
            <span className="text-white/90">Subscription</span>{" "}
            <span className="text-[#E2955A] font-medium text-3xl sm:text-5xl align-middle font-mono">(2026)</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed mb-10 font-normal">
            Stream all UK entertainment without costly subscriptions. Sky Sports, TNT Sports, Premier League 3pm Saturday fixtures, BBC iPlayer, ITVX, and 125,000+ movies in 4K UHD.
          </p>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start items-center">
            <Link href="/free-trial" className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#E2955A] to-[#C47D43] text-black font-extrabold uppercase tracking-wider text-xs sm:text-sm hover:scale-[1.02] transition-all shadow-[0_0_35px_rgba(226,149,90,0.45)]">
              Claim 24h UK Free Trial →
            </Link>
            <Link href="/#pricing" className="px-8 py-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-[#E2955A]/50 text-white font-semibold text-xs sm:text-sm transition-all">
              View UK Pricing Plans
            </Link>
          </div>
        </header>
        <section className="mb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="text-3xl mb-4">⚽</div>
            <h2 className="text-xl font-bold text-white mb-2">3pm Saturday Premier League</h2>
            <p className="text-sm text-white/70">Watch every Saturday 3pm Premier League match with zero UK television blackout blocks.</p>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="text-3xl mb-4">🏎️</div>
            <h2 className="text-xl font-bold text-white mb-2">Sky Sports &amp; TNT Sports 4K</h2>
            <p className="text-sm text-white/70">Formula 1, UEFA Champions League, Gallagher Premiership Rugby, and live boxing events in 60 FPS.</p>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] sm:col-span-2 lg:col-span-1">
            <div className="text-3xl mb-4">📺</div>
            <h2 className="text-xl font-bold text-white mb-2">Complete UK Freeview &amp; Sky</h2>
            <p className="text-sm text-white/70">BBC One/Two, ITV 1-4, Channel 4, Channel 5, Sky Cinema, Sky Max, and full EPG TV guide support.</p>
          </div>
        </section>
        <section className="p-10 sm:p-16 rounded-[2.5rem] bg-gradient-to-b from-[#E2955A]/20 via-white/[0.03] to-transparent border border-[#E2955A]/40 text-center shadow-[0_30px_90px_rgba(226,149,90,0.15)]">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">Stream UK Television Today</h2>
          <p className="text-white/70 max-w-xl mx-auto text-base sm:text-lg mb-8">Start your free 24-hour trial today and stream all UK channels without a contract.</p>
          <Link href="/free-trial" className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#E2955A] to-[#C47D43] text-black font-extrabold uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_0_40px_rgba(226,149,90,0.5)]">
            Start Free UK Trial →
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
