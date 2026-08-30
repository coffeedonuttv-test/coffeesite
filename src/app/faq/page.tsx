import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "IPTV FAQ 2026 — Common Questions, Setup & Troubleshooting | Coffee & Donut TV",
  description:
    "Everything you need to know about IPTV in Canada. Answers to what is IPTV, channel lists, device setup on Firestick, internet speed requirements, trial activation, and anti-buffering tips.",
  keywords: [
    "what is IPTV",
    "IPTV FAQ Canada",
    "is IPTV legal in Canada",
    "how to fix IPTV buffering",
    "IPTV internet speed required",
    "IPTV free trial questions",
    "how does IPTV work",
    "IPTV setup questions",
  ],
  alternates: {
    canonical: "https://www.coffeedonuttv.com/faq",
  },
  openGraph: {
    title: "IPTV FAQ 2026 — Answers to All Your IPTV Questions",
    description:
      "Comprehensive guide and answers regarding Coffee & Donut TV IPTV channels, trials, setup, and performance.",
    url: "https://www.coffeedonuttv.com/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What exactly is IPTV?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IPTV stands for Internet Protocol Television. Instead of receiving TV signals through traditional cable cords, fiber lines, or satellite dishes, IPTV streams live television and on-demand movies over your existing home high-speed internet connection directly to your TV, phone, or streaming stick.",
      },
    },
    {
      "@type": "Question",
      name: "What devices can I use with Coffee & Donut TV?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can watch on Amazon Fire TV Stick, Android TV boxes (Nvidia Shield, Chromecast with Google TV), Samsung & LG Smart TVs, Apple iOS (iPhone/iPad/Apple TV), Android mobile devices, MAG boxes, and Windows/Mac computers.",
      },
    },
    {
      "@type": "Question",
      name: "How fast does my internet connection need to be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For standard definition and 720p HD channels, we recommend at least 10 Mbps. For Full HD 1080p and 60FPS sports, 15-20 Mbps is recommended. For 4K UHD and 8K premium streams, 25-50 Mbps ensures a completely buffer-free experience.",
      },
    },
    {
      "@type": "Question",
      name: "How does the 24-Hour Free Trial work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simply submit your name, email, and preferred streaming device on our Free Trial page. We will email you your server credentials immediately. No credit card, billing info, or commitment is required.",
      },
    },
    {
      "@type": "Question",
      name: "Are Pay-Per-View (PPV) and live sports included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all major live Pay-Per-View events—including UFC, Championship Boxing, WWE, NFL Sunday Ticket, NHL Center Ice, NBA League Pass, and Premier League matches—are included at no extra charge in every subscription.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do if a stream buffers or freezes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "First, restart your Wi-Fi router and streaming device. If your Canadian ISP is throttling video traffic during major events, connecting through a reliable VPN (like Surfshark or NordVPN) will bypass ISP restrictions and restore full streaming speed.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use my subscription on multiple devices simultaneously?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard plans allow 1 active stream at a time. We also offer discounted multi-connection plans allowing 2, 3, or more devices to stream simultaneously in different rooms.",
      },
    },
    {
      "@type": "Question",
      name: "What payment methods do you accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We accept Interac e-Transfer for Canadian customers, major Credit/Debit Cards, PayPal, and cryptocurrency for maximum privacy and convenience.",
      },
    },
  ],
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
      name: "FAQ",
      item: "https://www.coffeedonuttv.com/faq",
    },
  ],
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#E2955A]/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <nav aria-label="Breadcrumb" className="text-xs text-white/50 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[#E2955A] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">IPTV FAQ</span>
        </nav>

        <header className="mb-16 border-b border-white/10 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E2955A]/10 border border-[#E2955A]/30 text-[#E2955A] text-xs font-semibold uppercase tracking-widest mb-6">
            ❓ Everything You Need to Know
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            IPTV <span className="text-[#E2955A]">Frequently Asked Questions</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed mb-8">
            Got questions about IPTV channels, setup guides, trial access, or performance optimization? Find clear, expert answers below.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/free-trial"
              className="px-8 py-4 rounded-xl bg-[#E2955A] text-black font-bold uppercase tracking-wider text-sm hover:brightness-110 transition-all shadow-[0_0_25px_rgba(226,149,90,0.4)]"
            >
              Start Free Trial
            </Link>
            <Link
              href="mailto:CoffeeDonutTV@gmail.com"
              className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#E2955A]/50 text-white font-semibold text-sm transition-all"
            >
              Contact Support
            </Link>
          </div>
        </header>

        <article className="space-y-16 text-white/80 leading-relaxed text-base sm:text-lg">
          {/* Section 1: General & Overview */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">
              General IPTV Questions
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">What is IPTV and how does it work?</h3>
                <p className="text-sm text-white/70">
                  Internet Protocol Television (IPTV) delivers television programming and video content via the internet rather than traditional broadcast, cable, or satellite signals. You simply install a compatible player app on your streaming device, connect your subscription credentials, and stream live TV or on-demand movies instantly.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">How many channels and movies are included?</h3>
                <p className="text-sm text-white/70">
                  Coffee &amp; Donut TV includes over <strong>34,000+ live TV channels</strong> spanning Canada, USA, UK, Latin America, Europe, Asia, and the Middle East, along with an on-demand library of <strong>125,000+ movies and complete TV series</strong> updated daily.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">Are live sports and Pay-Per-View events included?</h3>
                <p className="text-sm text-white/70">
                  Yes. All UFC Pay-Per-Views, boxing title fights, NHL Center Ice, NFL Sunday Ticket &amp; RedZone, NBA League Pass, MLS, and Premier League matches are included in all active plans with zero extra fees.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Technical & Setup */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">
              Setup &amp; Technical Requirements
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">What devices are supported?</h3>
                <p className="text-sm text-white/70 mb-3">
                  Coffee &amp; Donut TV supports virtually any internet-connected screen:
                </p>
                <ul className="list-disc pl-5 text-sm text-white/70 space-y-1">
                  <li>Amazon Fire TV Stick (4K, 4K Max, Lite, Cube)</li>
                  <li>Android TV &amp; Google TV (Chromecast, Nvidia Shield, Sony, TCL)</li>
                  <li>Apple iOS &amp; tvOS (iPhone, iPad, Apple TV 4K)</li>
                  <li>Smart TVs (Samsung Tizen, LG webOS via IPTV Smarters or IBO Player)</li>
                  <li>Windows PC, Mac, and Web Browsers</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">What internet speed do I need?</h3>
                <p className="text-sm text-white/70">
                  A minimum of 15 Mbps download speed is recommended for smooth 1080p 60FPS streaming. If you plan to stream in 4K UHD or have multiple devices streaming simultaneously, 25 to 50+ Mbps is recommended.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">Do I need a VPN to use IPTV in Canada?</h3>
                <p className="text-sm text-white/70">
                  While not strictly mandatory, using a VPN (Virtual Private Network) is highly recommended. Many major Canadian internet service providers throttle high-bandwidth video traffic during peak evening hours or live sporting events. A VPN encrypts your traffic, bypassing ISP throttling and ensuring buffer-free streaming.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Billing & Trial */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">
              Billing, Trials &amp; Activation
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">Is the 24-hour trial completely free?</h3>
                <p className="text-sm text-white/70">
                  Yes, 100% free. No credit card or billing details are required. You get full unrestricted access to all 34,000+ channels and VOD titles for 24 hours so you can test our server speed and quality before subscribing.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">Are there any contracts or cancellation fees?</h3>
                <p className="text-sm text-white/70">
                  Zero contracts. All plans are prepaid on a month-to-month, 3-month, 6-month, or 12-month basis. You can choose not to renew at any time with no penalties.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Box */}
          <section className="text-center p-10 rounded-3xl bg-[#E2955A]/10 border border-[#E2955A]/30">
            <h2 className="text-3xl font-extrabold text-white mb-4">Still Have Questions?</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              Experience the service firsthand with a 24-hour free trial, or contact our support team on WhatsApp anytime.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/free-trial"
                className="px-10 py-5 rounded-2xl bg-[#E2955A] text-black font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform shadow-[0_0_30px_rgba(226,149,90,0.5)]"
              >
                Claim Free Trial
              </Link>
              <a
                href="https://wa.me/12268943166"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#E2955A]/50 text-white font-bold uppercase tracking-wider text-sm transition-all"
              >
                Chat on WhatsApp (+1 226-894-3166)
              </a>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
