import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "How to Set Up IPTV on Samsung Smart TV (2026 Guide) | Coffee & Donut TV",
  description:
    "Complete step-by-step tutorial to install and configure IPTV on Samsung Smart TV (Tizen OS) using IBO Player, Smart IPTV, Nanomid, or IPTV Smarters. Stream 34,000+ channels in 4K.",
  keywords: ["IPTV Samsung Smart TV", "Samsung TV IPTV setup", "IBO Player Samsung TV", "Smart IPTV Samsung Tizen", "IPTV Smarters Samsung"],
  alternates: { canonical: "https://www.coffeedonuttv.com/iptv-samsung-smart-tv" },
};

export default function SamsungIptvPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#E2955A]/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#E2955A]/15 via-transparent to-transparent rounded-full blur-[140px] pointer-events-none" />
      <Header />
      <main className="pt-44 sm:pt-48 pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
        <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/10 text-xs text-white/50 mb-10 shadow-lg">
          <Link href="/" className="hover:text-[#E2955A] transition-colors">Home</Link>
          <span className="text-white/30">/</span>
          <span className="text-white font-medium">Samsung Smart TV IPTV Setup</span>
        </nav>
        <header className="mb-20 text-center sm:text-left">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#E2955A]/10 border border-[#E2955A]/30 text-[#E2955A] text-[11px] font-bold uppercase tracking-[0.25em] mb-6 shadow-[0_0_20px_rgba(226,149,90,0.25)]">
            📺 Samsung Tizen OS Guide
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.08] mb-8">
            How to Install <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#FCE3C8] to-[#E2955A]">IPTV on Samsung</span>
            <br />
            <span className="text-white/90">Smart TVs</span>{" "}
            <span className="text-[#E2955A] font-medium text-3xl sm:text-5xl align-middle font-mono">(2026)</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed mb-10 font-normal">
            Turn your Samsung Smart TV into a cinema powerhouse. Learn how to install IBO Player, Smart IPTV, or Nanomid directly from the Samsung Apps Store and connect your Coffee &amp; Donut TV subscription.
          </p>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start items-center">
            <Link href="/free-trial" className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#E2955A] to-[#C47D43] text-black font-extrabold uppercase tracking-wider text-xs sm:text-sm hover:scale-[1.02] transition-all shadow-[0_0_35px_rgba(226,149,90,0.45)]">
              Get Free Samsung Trial Details →
            </Link>
          </div>
        </header>
        <section className="mb-20 space-y-6">
          <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-2xl border border-white/10 flex gap-6 items-start">
            <div className="w-10 h-10 rounded-full bg-[#E2955A] text-black font-extrabold flex items-center justify-center shrink-0">1</div>
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Open the Samsung Apps Store</h2>
              <p className="text-white/70 text-sm sm:text-base">Press the Home button on your Samsung remote, navigate to APPS, and search for <strong>IBO Player</strong>, <strong>Smart IPTV</strong>, or <strong>Nanomid Player</strong>.</p>
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-2xl border border-white/10 flex gap-6 items-start">
            <div className="w-10 h-10 rounded-full bg-[#E2955A] text-black font-extrabold flex items-center justify-center shrink-0">2</div>
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Locate Your Device MAC Address &amp; Key</h2>
              <p className="text-white/70 text-sm sm:text-base">Launch the app to see your TV&apos;s unique Device ID/MAC Address and Device Key displayed on screen.</p>
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-2xl border border-white/10 flex gap-6 items-start">
            <div className="w-10 h-10 rounded-full bg-[#E2955A] text-black font-extrabold flex items-center justify-center shrink-0">3</div>
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Upload Your Playlist Link</h2>
              <p className="text-white/70 text-sm sm:text-base">Visit the player portal on your phone or computer, paste your Coffee &amp; Donut TV M3U link, and restart your Samsung TV to start streaming in 4K.</p>
            </div>
          </div>
        </section>
        <section className="p-10 sm:p-16 rounded-[2.5rem] bg-gradient-to-b from-[#E2955A]/20 via-white/[0.03] to-transparent border border-[#E2955A]/40 text-center shadow-[0_30px_90px_rgba(226,149,90,0.15)]">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">Stream on Samsung Smart TV Today</h2>
          <p className="text-white/70 max-w-xl mx-auto text-base sm:text-lg mb-8">Claim your 24h free trial to test high-bitrate streaming on your Samsung TV.</p>
          <Link href="/free-trial" className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#E2955A] to-[#C47D43] text-black font-extrabold uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_0_40px_rgba(226,149,90,0.5)]">
            Start Free Trial Now →
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
