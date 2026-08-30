"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface ChannelGroup {
  category: string;
  count: string;
  popular: string[];
}

const channelData: ChannelGroup[] = [
  {
    category: "Live Sports & PPV",
    count: "4,200+ Channels",
    popular: ["TSN 1-5 (Canada)", "Sportsnet East/West/Ontario/Pacific", "Sky Sports Main Event/F1/Premier League", "TNT Sports 1-4", "ESPN, ESPN 2, ESPNU", "NFL RedZone & Sunday Ticket", "UFC Fight Pass & PPV Live", "NHL Center Ice", "NBA League Pass", "beIN Sports HD", "DAZN 1-4"],
  },
  {
    category: "Canada Regional & National",
    count: "1,850+ Channels",
    popular: ["CBC Toronto/Montreal/Vancouver", "CTV News & CTV Local", "Global TV", "Citytv", "CP24 Toronto News", "TVA & ICI Radio-Canada (French)", "YTV Canada", "BNN Bloomberg", "MuchMusic", "HGTV Canada", "Food Network Canada"],
  },
  {
    category: "United States Networks",
    count: "6,500+ Channels",
    popular: ["ABC, CBS, NBC, FOX (All 50 States)", "HBO East/West, HBO Signature", "Showtime, The Movie Channel", "Starz, Cinemax", "CNN, MSNBC, Fox News", "USA Network, TBS, TNT", "Discovery, History, National Geographic", "Disney Channel, Cartoon Network"],
  },
  {
    category: "United Kingdom & Ireland",
    count: "2,400+ Channels",
    popular: ["BBC One, BBC Two, BBC News", "ITV 1, 2, 3, 4", "Channel 4, Channel 5", "Sky Cinema Premiere/Action/Comedy", "Sky Atlantic, Sky Witness", "Premier Sports 1-2", "RTE One & RTE Two (Ireland)", "E4, Film4, Dave"],
  },
  {
    category: "India & South Asia (Bollywood & Cricket)",
    count: "3,800+ Channels",
    popular: ["Star Sports 1-3 & Hindi", "Sony Sports Ten 1-5", "Zee TV, Zee Cinema", "Colors TV, Star Plus, Sony TV", "PTC Punjabi, Zee Punjabi", "Sun TV, KTV (Tamil)", "Star Maa (Telugu)", "Geo News, ARY Digital (Pakistan)"],
  },
  {
    category: "Arabic & Middle East",
    count: "2,900+ Channels",
    popular: ["beIN Sports 1-9 (Arabic)", "MBC 1, 2, 3, 4, Action, Drama", "Al Jazeera, Al Arabiya", "Rotana Cinema, Rotana Classic", "Dubai TV, Abu Dhabi Sports", "Shahid VIP Network"],
  },
  {
    category: "Latino & Spanish",
    count: "3,100+ Channels",
    popular: ["Telemundo, Univision", "TUDN Sports (Liga MX)", "ESPN Deportes, Fox Deportes", "Caracol, RCN (Colombia)", "Las Estrellas, Azteca 7 (Mexico)", "Movistar Plus (Spain)", "Directv Sports Latin America"],
  },
  {
    category: "Europe (France, Germany, Italy, Spain, Scandinavia)",
    count: "5,400+ Channels",
    popular: ["Canal+ France, RMC Sport", "Sky Deutschland (Sky Sport Bundesliga)", "DAZN Germany", "Sky Italia (Sky Calcio)", "Movistar LaLiga (Spain)", "Viaplay Sport (Nordic)", "Ziggo Sport (Netherlands)"],
  },
];

export default function ChannelsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredChannels = channelData.filter((group) => {
    const matchesCategory = selectedCategory === "All" || group.category === selectedCategory;
    const matchesSearch =
      searchTerm === "" ||
      group.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.popular.some((ch) => ch.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#E2955A]/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#E2955A]/15 via-transparent to-transparent rounded-full blur-[140px] pointer-events-none" />

      <Header />

      <main className="pt-44 sm:pt-48 pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
        <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/10 text-xs text-white/50 mb-10 shadow-lg">
          <Link href="/" className="hover:text-[#E2955A] transition-colors">Home</Link>
          <span className="text-white/30">/</span>
          <span className="text-white font-medium">34,000+ Channels Directory</span>
        </nav>

        <header className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E2955A]/10 border border-[#E2955A]/30 text-[#E2955A] text-xs font-semibold uppercase tracking-widest mb-6">
            📺 Live Channel Catalog
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Search <span className="text-[#E2955A]">34,000+ Channels</span> Worldwide
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-8">
            Explore live TV channels across Canada, USA, UK, Latin America, Europe, South Asia, and the Middle East in HD, 4K, and 8K.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl">
            <input
              type="text"
              placeholder="Search by channel name (e.g., TSN, Sky Sports, HBO, UFC)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl bg-white/[0.05] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[#E2955A] transition-all shadow-xl"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </header>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {["All", ...channelData.map((g) => g.category)].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-[#E2955A] text-black font-bold shadow-[0_0_15px_rgba(226,149,90,0.3)]"
                  : "bg-white/[0.04] text-white/70 hover:bg-white/[0.08] hover:text-white border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Channel Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-8 mb-20">
          {filteredChannels.map((group) => (
            <div
              key={group.category}
              className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-white">{group.category}</h2>
                  <p className="text-xs text-[#E2955A] font-semibold mt-1">{group.count}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.popular.map((ch) => (
                  <span
                    key={ch}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/5 text-xs text-white/80"
                  >
                    {ch}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <section className="p-10 sm:p-16 rounded-[2.5rem] bg-gradient-to-b from-[#E2955A]/20 via-white/[0.03] to-transparent border border-[#E2955A]/40 text-center shadow-[0_30px_90px_rgba(226,149,90,0.15)]">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Unlock All 34,000+ Channels Today
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-base sm:text-lg mb-8">
            Test the full channel lineup on your device with a free 24-hour instant trial. No credit card required.
          </p>
          <Link
            href="/free-trial"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#E2955A] to-[#C47D43] text-black font-extrabold uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_0_40px_rgba(226,149,90,0.5)]"
          >
            Start Free 24h Trial →
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
