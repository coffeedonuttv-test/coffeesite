import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "How to Set Up IPTV on Apple TV, iPhone & iPad (2026 Tutorial) | Coffee & Donut TV",
  description:
    "Step-by-step guide to stream 34,000+ IPTV channels on Apple TV 4K, iPhone, and iPad using GSE Smart IPTV, Smarters Player Lite, or IPTVX. High-bitrate 4K HDR streams.",
  keywords: ["IPTV Apple TV", "IPTV iPhone setup", "IPTV iPad", "Apple TV 4K IPTV", "GSE Smart IPTV iOS", "IPTVX Apple TV"],
  alternates: { canonical: "https://www.coffeedonuttv.com/iptv-apple-tv-ios" },
};

export default function AppleIptvPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#E2955A]/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#E2955A]/15 via-transparent to-transparent rounded-full blur-[140px] pointer-events-none" />
      <Header />
      <main className="pt-44 sm:pt-48 pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
        <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/10 text-xs text-white/50 mb-10 shadow-lg">
          <Link href="/" className="hover:text-[#E2955A] transition-colors">Home</Link>
          <span className="text-white/30">/</span>
          <span className="text-white font-medium">Apple TV &amp; iOS Setup</span>
        </nav>
        <header className="mb-20 text-center sm:text-left">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#E2955A]/10 border border-[#E2955A]/30 text-[#E2955A] text-[11px] font-bold uppercase tracking-[0.25em] mb-6 shadow-[0_0_20px_rgba(226,149,90,0.25)]">
            🍏 Apple Ecosystem Guide
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.08] mb-8">
            How to Set Up <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#FCE3C8] to-[#E2955A]">IPTV on Apple TV</span>
            <br />
            <span className="text-white/90">&amp; iOS Devices</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed mb-10 font-normal">
            Enjoy premium 4K HDR IPTV streams on Apple TV 4K, iPhone 16 Pro, and iPad. Learn how to configure GSE Smart IPTV or IPTVX in minutes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start items-center">
            <Link href="/free-trial" className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#E2955A] to-[#C47D43] text-black font-extrabold uppercase tracking-wider text-xs sm:text-sm hover:scale-[1.02] transition-all shadow-[0_0_35px_rgba(226,149,90,0.45)]">
              Claim 24h Apple Trial →
            </Link>
          </div>
        </header>
        <section className="p-10 sm:p-16 rounded-[2.5rem] bg-gradient-to-b from-[#E2955A]/20 via-white/[0.03] to-transparent border border-[#E2955A]/40 text-center shadow-[0_30px_90px_rgba(226,149,90,0.15)]">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">Stream on Apple Devices Today</h2>
          <p className="text-white/70 max-w-xl mx-auto text-base sm:text-lg mb-8">Free 24-hour instant trial. Compatible with all iOS and tvOS versions.</p>
          <Link href="/free-trial" className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#E2955A] to-[#C47D43] text-black font-extrabold uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_0_40px_rgba(226,149,90,0.5)]">
            Start Free Apple Trial →
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
