import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Best Apollo Group TV Alternative 2026 — Zero Buffering & 24/7 Support | Coffee & Donut TV",
  description:
    "Looking for a reliable Apollo Group TV alternative? Experience faster channel loading, 34,000+ channels, 4K sports streams without freezing, and instant WhatsApp support on Coffee & Donut TV.",
  keywords: ["Apollo Group TV alternative", "Apollo TV down", "Apollo IPTV alternative", "better than Apollo Group TV", "stable IPTV service"],
  alternates: { canonical: "https://www.coffeedonuttv.com/apollo-group-tv-alternative" },
};

export default function ApolloAlternativePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#E2955A]/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#E2955A]/15 via-transparent to-transparent rounded-full blur-[140px] pointer-events-none" />
      <Header />
      <main className="pt-44 sm:pt-48 pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
        <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/10 text-xs text-white/50 mb-10 shadow-lg">
          <Link href="/" className="hover:text-[#E2955A] transition-colors">Home</Link>
          <span className="text-white/30">/</span>
          <span className="text-white font-medium">Apollo Group TV Alternative</span>
        </nav>
        <header className="mb-20 text-center sm:text-left">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#E2955A]/10 border border-[#E2955A]/30 text-[#E2955A] text-[11px] font-bold uppercase tracking-[0.25em] mb-6 shadow-[0_0_20px_rgba(226,149,90,0.25)]">
            🔄 Apollo TV Comparison
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.08] mb-8">
            The Top-Rated <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#FCE3C8] to-[#E2955A]">Apollo Group TV</span>
            <br />
            <span className="text-white/90">Alternative</span>{" "}
            <span className="text-[#E2955A] font-medium text-3xl sm:text-5xl align-middle font-mono">(2026)</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed mb-10 font-normal">
            Tired of unexpected server downtime during high-stakes sporting events? Discover why former Apollo Group TV subscribers are switching to Coffee &amp; Donut TV for higher bitrates, 99.9% uptime, and dedicated human support.
          </p>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start items-center">
            <Link href="/free-trial" className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#E2955A] to-[#C47D43] text-black font-extrabold uppercase tracking-wider text-xs sm:text-sm hover:scale-[1.02] transition-all shadow-[0_0_35px_rgba(226,149,90,0.45)]">
              Test Free Alternative (24h) →
            </Link>
          </div>
        </header>
        <section className="p-10 sm:p-16 rounded-[2.5rem] bg-gradient-to-b from-[#E2955A]/20 via-white/[0.03] to-transparent border border-[#E2955A]/40 text-center shadow-[0_30px_90px_rgba(226,149,90,0.15)]">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">Switch to Coffee &amp; Donut TV Free</h2>
          <p className="text-white/70 max-w-xl mx-auto text-base sm:text-lg mb-8">Experience zero-lag streaming with a free 24-hour instant trial before subscribing.</p>
          <Link href="/free-trial" className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#E2955A] to-[#C47D43] text-black font-extrabold uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_0_40px_rgba(226,149,90,0.5)]">
            Claim Free Trial →
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
