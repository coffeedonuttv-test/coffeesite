import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "How to Set Up IPTV on Firestick (2026 Step-by-Step Guide) | Coffee & Donut TV",
  description:
    "Learn how to install and set up IPTV on Amazon Firestick, Fire TV Cube, and Android TV in under 5 minutes. Complete tutorial with Downloader app, IPTV Smarters, TiviMate, and M3U playlist configuration.",
  keywords: [
    "IPTV Firestick",
    "how to install IPTV on Firestick",
    "IPTV Firestick setup guide",
    "best IPTV app for Firestick",
    "TiviMate Firestick IPTV",
    "IPTV Smarters Firestick",
    "IPTV Android TV setup",
    "sideload IPTV Fire TV",
    "IPTV setup Canada",
  ],
  alternates: {
    canonical: "https://www.coffeedonuttv.com/iptv-firestick",
  },
  openGraph: {
    title: "How to Install IPTV on Amazon Firestick (2026 Complete Guide)",
    description:
      "Step-by-step tutorial to configure Coffee & Donut TV IPTV on Firestick and Android TV using TiviMate or IPTV Smarters Pro.",
    url: "https://www.coffeedonuttv.com/iptv-firestick",
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
      name: "IPTV Firestick Guide",
      item: "https://www.coffeedonuttv.com/iptv-firestick",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Install & Configure IPTV on Amazon Firestick",
  description: "A fast 5-minute setup tutorial to install an IPTV player on Amazon Firestick and connect your Coffee & Donut TV subscription.",
  step: [
    {
      "@type": "HowToStep",
      name: "Step 1: Install the Downloader App",
      text: "From your Firestick home screen, search for 'Downloader' and click Get/Download.",
    },
    {
      "@type": "HowToStep",
      name: "Step 2: Enable Developer Options & Unknown Apps",
      text: "Go to Settings > My Fire TV > Developer Options > Install Unknown Apps > Turn Downloader to ON.",
    },
    {
      "@type": "HowToStep",
      name: "Step 3: Download IPTV Player (TiviMate or IPTV Smarters)",
      text: "Open the Downloader app and enter the shortcode or URL for your preferred IPTV app such as IPTV Smarters Pro or TiviMate.",
    },
    {
      "@type": "HowToStep",
      name: "Step 4: Enter Your Coffee & Donut TV Credentials",
      text: "Open the installed IPTV player, select 'Login with Xtream Codes API' or enter your M3U Playlist URL provided in your activation email.",
    },
    {
      "@type": "HowToStep",
      name: "Step 5: Enjoy 34,000+ Live Channels",
      text: "Wait a few seconds for the electronic program guide (EPG) to sync, then start streaming live HD and 4K channels.",
    },
  ],
};

export default function IptvFirestickPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#E2955A]/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <Header />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <nav aria-label="Breadcrumb" className="text-xs text-white/50 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[#E2955A] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">IPTV Firestick Setup</span>
        </nav>

        <header className="mb-16 border-b border-white/10 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E2955A]/10 border border-[#E2955A]/30 text-[#E2955A] text-xs font-semibold uppercase tracking-widest mb-6">
            🔥 5-Minute Installation Tutorial
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            How to Set Up <span className="text-[#E2955A]">IPTV on Firestick</span> (2026 Guide)
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed mb-8">
            The complete, foolproof guide to installing and streaming Coffee &amp; Donut TV on any Amazon Fire TV Stick 4K, 4K Max, Lite, Fire TV Cube, or Android Smart TV in under 5 minutes.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/free-trial"
              className="px-8 py-4 rounded-xl bg-[#E2955A] text-black font-bold uppercase tracking-wider text-sm hover:brightness-110 transition-all shadow-[0_0_25px_rgba(226,149,90,0.4)]"
            >
              Get Free Trial Login Details
            </Link>
            <Link
              href="/downloads"
              className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#E2955A]/50 text-white font-semibold text-sm transition-all"
            >
              Download Player APKs
            </Link>
          </div>
        </header>

        <article className="space-y-16 text-white/80 leading-relaxed text-base sm:text-lg">
          {/* Hardware Requirements */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              What You Need Before Starting
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-2xl mb-2">📺</div>
                <h3 className="font-bold text-white mb-1">Amazon Firestick</h3>
                <p className="text-sm text-white/70">Any generation Fire TV Stick, 4K Max, Cube, or Fire TV Edition TV.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-2xl mb-2">📶</div>
                <h3 className="font-bold text-white mb-1">Stable Internet</h3>
                <p className="text-sm text-white/70">15+ Mbps recommended for Full HD, 25+ Mbps for 4K live sports.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-2xl mb-2">☕</div>
                <h3 className="font-bold text-white mb-1">C&amp;D TV Subscription</h3>
                <p className="text-sm text-white/70">Xtream Codes or M3U link from your free trial or active plan.</p>
              </div>
            </div>
          </section>

          {/* Step-by-Step Instructions */}
          <section className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Step-by-Step Firestick Installation Walkthrough
            </h2>

            <div className="space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-[#E2955A] text-black font-extrabold flex items-center justify-center shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Install the &quot;Downloader&quot; Application</h3>
                  <p className="text-white/70 text-sm sm:text-base">
                    From your Amazon Firestick Home screen, navigate to the <strong>Find / Search</strong> icon. Type <strong>Downloader</strong> in the search bar. Click the orange Downloader app tile and choose <strong>Download / Get</strong>.
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-[#E2955A] text-black font-extrabold flex items-center justify-center shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Enable Unknown Apps in Developer Options</h3>
                  <p className="text-white/70 text-sm sm:text-base mb-2">
                    Go to <strong>Settings</strong> &gt; <strong>My Fire TV</strong> &gt; <strong>Developer Options</strong>. Click <strong>Install Unknown Apps</strong> and toggle <strong>Downloader</strong> to <strong>ON</strong>.
                  </p>
                  <p className="text-xs text-[#E2955A]">
                    💡 Note: On newer Fire OS builds, if Developer Options is hidden, go to Settings &gt; My Fire TV &gt; About, and click your device name 7 times rapidly until it says &quot;You are now a developer.&quot;
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-[#E2955A] text-black font-extrabold flex items-center justify-center shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Download Your Preferred IPTV App</h3>
                  <p className="text-white/70 text-sm sm:text-base">
                    Launch Downloader, enter your app download code or direct APK URL (such as <strong>IPTV Smarters Pro</strong>, <strong>TiviMate Companion</strong>, or <strong>XCIPTV</strong>), and hit <strong>Go</strong>. Once downloaded, tap <strong>Install</strong> and then <strong>Open</strong>.
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-[#E2955A] text-black font-extrabold flex items-center justify-center shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Sign In with Your Coffee &amp; Donut TV Credentials</h3>
                  <p className="text-white/70 text-sm sm:text-base">
                    Select <strong>Login with Xtream Codes API</strong>. Enter any profile name, followed by your <strong>Server URL</strong>, <strong>Username</strong>, and <strong>Password</strong> received upon trial registration. Click <strong>Add User</strong> and your channels will automatically populate.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Recommended Players */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Best IPTV Apps for Firestick in 2026
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <h3 className="text-xl font-bold text-[#E2955A] mb-2">⭐ TiviMate IPTV Player</h3>
                <p className="text-sm text-white/70 mb-4">
                  Widely regarded as the cleanest, most responsive IPTV interface for Fire TV and Android TV. Offers multi-view split-screen, catch-up TV, customizable TV guides, and lightning-fast channel zapping.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <h3 className="text-xl font-bold text-[#E2955A] mb-2">⭐ IPTV Smarters Pro</h3>
                <p className="text-sm text-white/70 mb-4">
                  The most versatile cross-platform player. Built-in video player with subtitle switching, audio track toggles, parental controls, and seamless VOD movie library organization.
                </p>
              </div>
            </div>
          </section>

          {/* Related Links */}
          <section className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-wrap gap-4 items-center justify-between">
            <div>
              <h3 className="font-bold text-white text-lg">Looking for more information?</h3>
              <p className="text-sm text-white/60">Check our comprehensive regional guides and FAQs.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/iptv-canada" className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#E2955A] text-sm text-[#E2955A]">
                🍁 IPTV Canada Overview
              </Link>
              <Link href="/faq" className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#E2955A] text-sm text-white">
                ❓ FAQ Hub
              </Link>
            </div>
          </section>

          {/* CTA Box */}
          <section className="text-center p-10 rounded-3xl bg-[#E2955A]/10 border border-[#E2955A]/30">
            <h2 className="text-3xl font-extrabold text-white mb-4">Test Your Firestick Setup Free for 24 Hours</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              Get instant access to 34,000+ live channels and 125,000+ movies on your Firestick right now. No credit card required.
            </p>
            <Link
              href="/free-trial"
              className="inline-block px-10 py-5 rounded-2xl bg-[#E2955A] text-black font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform shadow-[0_0_30px_rgba(226,149,90,0.5)]"
            >
              Start Free Firestick Trial
            </Link>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
