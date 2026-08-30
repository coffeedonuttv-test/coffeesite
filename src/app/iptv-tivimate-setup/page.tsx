import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "TiviMate IPTV Setup Guide (2026 Masterclass) — Xtream Codes & M3U | Coffee & Donut TV",
  description:
    "The definitive guide to configuring TiviMate IPTV Player on Firestick & Android TV. Setup Xtream Codes API, customize EPG TV guides, multi-view 4 screens, and enable anti-buffering buffers.",
  keywords: ["TiviMate setup", "TiviMate IPTV guide", "TiviMate Xtream Codes", "TiviMate M3U URL", "best IPTV player TiviMate"],
  alternates: { canonical: "https://www.coffeedonuttv.com/iptv-tivimate-setup" },
};

export default function TivimateIptvPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#E2955A]/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#E2955A]/15 via-transparent to-transparent rounded-full blur-[140px] pointer-events-none" />
      <Header />
      <main className="pt-44 sm:pt-48 pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
        <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/10 text-xs text-white/50 mb-10 shadow-lg">
          <Link href="/" className="hover:text-[#E2955A] transition-colors">Home</Link>
          <span className="text-white/30">/</span>
          <span className="text-white font-medium">TiviMate Setup Tutorial</span>
        </nav>
        <header className="mb-20 text-center sm:text-left">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#E2955A]/10 border border-[#E2955A]/30 text-[#E2955A] text-[11px] font-bold uppercase tracking-[0.25em] mb-6 shadow-[0_0_20px_rgba(226,149,90,0.25)]">
            ⭐ #1 IPTV Player Tutorial
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.08] mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#FCE3C8] to-[#E2955A]">TiviMate IPTV</span>
            <br />
            <span className="text-white/90">Setup Masterclass</span>{" "}
            <span className="text-[#E2955A] font-medium text-3xl sm:text-5xl align-middle font-mono">(2026)</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed mb-10 font-normal">
            Step-by-step guide to pair TiviMate IPTV Player with Coffee &amp; Donut TV. Unlock 34,000+ live channels, 7-day TV catch-up, multi-view 4 screens, and instant channel zapping.
          </p>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start items-center">
            <Link href="/free-trial" className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#E2955A] to-[#C47D43] text-black font-extrabold uppercase tracking-wider text-xs sm:text-sm hover:scale-[1.02] transition-all shadow-[0_0_35px_rgba(226,149,90,0.45)]">
              Get TiviMate Trial Credentials →
            </Link>
          </div>
        </header>
        <section className="p-10 sm:p-16 rounded-[2.5rem] bg-gradient-to-b from-[#E2955A]/20 via-white/[0.03] to-transparent border border-[#E2955A]/40 text-center shadow-[0_30px_90px_rgba(226,149,90,0.15)]">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">Test TiviMate on Coffee &amp; Donut TV Free</h2>
          <p className="text-white/70 max-w-xl mx-auto text-base sm:text-lg mb-8">Start your free 24-hour trial to experience high-bitrate TiviMate streaming today.</p>
          <Link href="/free-trial" className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#E2955A] to-[#C47D43] text-black font-extrabold uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_0_40px_rgba(226,149,90,0.5)]">
            Claim Free Trial →
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
