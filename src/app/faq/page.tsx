import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "IPTV FAQ 2026 — Common Questions, Setup & Troubleshooting | Coffee & Donut TV",
  description:
    "Everything you need to know about IPTV in Canada and worldwide. Answers to what is IPTV, channel lists, device setup on Firestick, internet speed requirements, trial activation, and anti-buffering tips.",
  keywords: ["what is IPTV", "IPTV FAQ Canada", "is IPTV legal in Canada", "how to fix IPTV buffering", "IPTV internet speed required"],
  alternates: { canonical: "https://www.coffeedonuttv.com/faq" },
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#E2955A]/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#E2955A]/15 via-transparent to-transparent rounded-full blur-[140px] pointer-events-none" />
      <Header />
      <main className="pt-44 sm:pt-48 pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
        <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/10 text-xs text-white/50 mb-10 shadow-lg">
          <Link href="/" className="hover:text-[#E2955A] transition-colors">Home</Link>
          <span className="text-white/30">/</span>
          <span className="text-white font-medium">IPTV FAQ</span>
        </nav>
        <header className="mb-20 text-center sm:text-left">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#E2955A]/10 border border-[#E2955A]/30 text-[#E2955A] text-[11px] font-bold uppercase tracking-[0.25em] mb-6 shadow-[0_0_20px_rgba(226,149,90,0.25)]">
            ❓ Everything You Need to Know
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.08] mb-8">
            IPTV <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#FCE3C8] to-[#E2955A]">Frequently Asked</span>
            <br />
            <span className="text-white/90">Questions (2026)</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed mb-10 font-normal">
            Got questions about IPTV channels, setup guides, trial access, or performance optimization? Find clear, expert answers below.
          </p>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start items-center">
            <Link href="/free-trial" className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#E2955A] to-[#C47D43] text-black font-extrabold uppercase tracking-wider text-xs sm:text-sm hover:scale-[1.02] transition-all shadow-[0_0_35px_rgba(226,149,90,0.45)]">
              Start Free Trial →
            </Link>
          </div>
        </header>
        <section className="mb-20 space-y-6">
          <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <h2 className="text-xl font-bold text-white mb-2">What is IPTV and how does it work?</h2>
            <p className="text-sm text-white/70">Internet Protocol Television (IPTV) delivers television programming and video content via the internet rather than traditional cable or satellite. You simply install a player app on your streaming device, connect your subscription, and stream live TV instantly.</p>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <h2 className="text-xl font-bold text-white mb-2">What devices are supported?</h2>
            <p className="text-sm text-white/70">Amazon Firestick, Android TV, Samsung &amp; LG Smart TVs, Apple TV 4K, iPhone, iPad, Android mobile, and Windows/Mac computers.</p>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <h2 className="text-xl font-bold text-white mb-2">Is the 24-hour trial completely free?</h2>
            <p className="text-sm text-white/70">Yes, 100% free. No credit card or billing details required. Instant access to test our servers on your device.</p>
          </div>
        </section>
        <section className="p-10 sm:p-16 rounded-[2.5rem] bg-gradient-to-b from-[#E2955A]/20 via-white/[0.03] to-transparent border border-[#E2955A]/40 text-center shadow-[0_30px_90px_rgba(226,149,90,0.15)]">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">Ready to Start?</h2>
          <p className="text-white/70 max-w-xl mx-auto text-base sm:text-lg mb-8">Claim your 24-hour free trial now with zero commitment.</p>
          <Link href="/free-trial" className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#E2955A] to-[#C47D43] text-black font-extrabold uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_0_40px_rgba(226,149,90,0.5)]">
            Claim Free Trial →
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
