"use client";

import { useState, useRef, type MouseEvent } from "react";
import { motion, useInView, AnimatePresence, useMotionValue, useMotionTemplate } from "framer-motion";
import { ScrollProvider } from "@/components/ScrollContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CoffeeProgress } from "@/components/CoffeeProgress";

function DownloadsContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const [activeApp, setActiveApp] = useState<"mobile" | "tv">("mobile");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500); // Slightly longer for the stagger effect to breathe
  };

  const apps = {
    mobile: {
      name: "Mobile & Touch",
      poweredBy: "XCIPTV",
      code: "8138590",
      tagline: "Perfect for phones and tablets",
      features: [
        "Built for touchscreens",
        "Smooth, fast navigation",
        "Clean layout for daily watching",
        "Perfect for mobile & casual viewing",
      ],
      gradient: "rgba(245, 158, 11, 0.15)", // Amber glow
    },
    tv: {
      name: "TV Edition",
      poweredBy: "TiviMate",
      code: "3374467",
      tagline: "The ultimate cinema experience",
      features: [
        "Designed for large screens",
        "Remote-friendly navigation",
        "Advanced EPG & channel management",
        "Favorites, categories, full control",
      ],
      gradient: "rgba(16, 185, 129, 0.15)", // Emerald glow
    },
  };

  const currentApp = apps[activeApp];

  return (
    <>
      <Header />
      <CoffeeProgress />

      <main className="min-h-screen pt-28 pb-20 overflow-hidden relative">
        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div ref={containerRef} className="container max-w-5xl relative z-10">
          {/* Hero */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_currentColor]" />
              <span className="text-xs tracking-[0.2em] font-medium text-primary uppercase">INSTALL VIA DOWNLOADER</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Download <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Your App</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto leading-relaxed">
              Two premium applications. One seamless entertainment experience. Choose your platform below.
            </p>
          </motion.div>

          {/* App Selector - Creative Toggle */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative inline-flex rounded-2xl bg-card/30 border border-white/10 p-1.5 backdrop-blur-xl shadow-2xl">
              <motion.div
                className="absolute inset-y-1.5 rounded-xl bg-foreground shadow-lg"
                layoutId="app-selector"
                animate={{
                  left: activeApp === "mobile" ? "6px" : "50%",
                  right: activeApp === "mobile" ? "50%" : "6px",
                }}
                transition={{ type: "spring", stiffness: 500, damping: 35, mass: 0.8 }}
              />
              <button
                type="button"
                onClick={() => setActiveApp("mobile")}
                className={`relative z-10 px-8 py-3.5 rounded-xl text-sm font-semibold transition-colors duration-300 ${
                  activeApp === "mobile" ? "text-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Mobile & Tablet
                </span>
              </button>
              <button
                type="button"
                onClick={() => setActiveApp("tv")}
                className={`relative z-10 px-8 py-3.5 rounded-xl text-sm font-semibold transition-colors duration-300 ${
                  activeApp === "tv" ? "text-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Smart TV Box
                </span>
              </button>
            </div>
          </motion.div>

          {/* App Card - Main Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeApp}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -40, filter: "blur(8px)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative group mx-4 md:mx-0"
              onMouseMove={handleMouseMove}
            >
              <div className="relative rounded-3xl bg-card/20 border border-white/10 backdrop-blur-2xl overflow-hidden shadow-2xl">
                
                {/* Dynamic Spotlight */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0 hidden md:block"
                  style={{
                    background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${currentApp.gradient}, transparent 70%)`,
                  }}
                />

                <div className="grid md:grid-cols-2 gap-0 relative z-10">
                  {/* Left - App Info */}
                  <div className="p-6 sm:p-8 md:p-12 lg:p-16">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      <span className="text-xs tracking-[0.2em] font-bold text-muted-foreground uppercase">
                        Powered by {currentApp.poweredBy}
                      </span>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-2 tracking-tight">{currentApp.name}</h2>
                      <p className="text-primary italic text-base md:text-lg mb-8 opacity-90">"{currentApp.tagline}"</p>

                      <ul className="space-y-4 mb-8">
                        {currentApp.features.map((feature, i) => (
                          <motion.li
                            key={feature}
                            className="flex items-center gap-4 text-sm md:text-base text-muted-foreground transition-colors hover:text-foreground"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                          >
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs">✓</span>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Right - GOD LEVEL Download Code Area */}
                  <div className="bg-gradient-to-br from-white/5 to-transparent p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center items-center border-t md:border-t-0 md:border-l border-white/10">
                    <motion.div
                      className="text-center w-full max-w-[320px] mx-auto"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      <p className="text-xs sm:text-sm tracking-[0.2em] text-muted-foreground uppercase mb-6 font-medium">
                        Downloader App Code
                      </p>

                      {/* Tactile Copy Box */}
                      <motion.button
                        type="button"
                        onClick={() => copyToClipboard(currentApp.code)}
                        className="relative w-full group outline-none"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.96 }}
                      >
                        {/* Ambient glow behind the box on hover */}
                        <div className="absolute -inset-2 bg-primary/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* 1px gradient border trick for maximum premium feel */}
                        <div className="relative p-[1px] rounded-[2rem] bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden">
                          
                          {/* Inner Dark Box */}
                          <div className="relative bg-black/60 backdrop-blur-xl rounded-[calc(2rem-1px)] px-4 py-8 sm:px-6 sm:py-10 flex justify-center items-center overflow-hidden">
                            
                            {/* Hover shimmer streak */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -skew-x-12"
                              initial={{ x: "-200%" }}
                              whileHover={{ x: "200%" }}
                              transition={{ duration: 0.7, ease: "easeInOut" }}
                            />
                            
                            {/* Flex-spaced characters (Prevents mobile overflow perfectly) */}
                            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                              {currentApp.code.split("").map((char, index) => (
                                <motion.span
                                  key={`${copiedCode ? 'copied' : 'idle'}-${index}`}
                                  initial={copiedCode ? { y: -20, opacity: 0 } : { y: 0, opacity: 1 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  transition={{ 
                                    delay: copiedCode ? index * 0.05 : 0, // Stagger effect on copy
                                    type: "spring", 
                                    stiffness: 300, 
                                    damping: 15 
                                  }}
                                  className="text-4xl sm:text-5xl md:text-6xl font-mono font-bold text-primary drop-shadow-[0_0_12px_rgba(180,130,80,0.4)] group-hover:drop-shadow-[0_0_20px_rgba(180,130,80,0.8)] transition-all duration-300"
                                >
                                  {char}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Animated Copy Status */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full flex justify-center">
                          <AnimatePresence mode="wait">
                            {copiedCode === currentApp.code ? (
                              <motion.span
                                key="copied"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="text-sm font-medium text-primary flex items-center justify-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 backdrop-blur-sm"
                              >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                Code Copied!
                              </motion.span>
                            ) : (
                              <motion.span
                                key="copy"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-sm text-muted-foreground group-hover:text-foreground transition-colors py-1.5 block"
                              >
                                Click code to copy
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.button>

                      <motion.a
                        href="https://wa.me/12268943166?text=Hi!%20I%20need%20help%20installing%20the%20app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-20 inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-primary text-primary-foreground font-semibold tracking-wide shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.5)] transition-all text-sm sm:text-base w-full sm:w-auto justify-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Need Install Help?</span>
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Connected "Journey" Steps */}
          <motion.div
            className="mt-32 relative mx-4 md:mx-0"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold tracking-tight mb-4">Installation Journey</h3>
              <p className="text-muted-foreground">Follow these 4 simple steps to get started</p>
            </div>
            
            <div className="relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-white/5">
                <motion.div 
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary/0 via-primary to-primary/0"
                  initial={{ width: "0%", opacity: 0 }}
                  whileInView={{ width: "100%", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                />
              </div>

              <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative z-10">
                {[
                  { step: "1", title: "Get Downloader", desc: "Install the 'Downloader' app from your TV's app store." },
                  { step: "2", title: "Enter Code", desc: `Open Downloader and type the code: ${currentApp.code}` },
                  { step: "3", title: "Install App", desc: "Click go, let it download, and hit Install." },
                  { step: "4", title: "Login & Enjoy", desc: "Open the app and enter the credentials we sent you." },
                ].map((item, i) => (
                  <motion.div
                    key={item.step}
                    className="relative p-6 rounded-2xl bg-card/10 border border-white/5 backdrop-blur-sm text-center group hover:bg-card/30 transition-colors"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.6 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-background border-4 border-card flex items-center justify-center mx-auto mb-6 relative z-10 shadow-xl group-hover:border-primary/50 transition-colors duration-500">
                      <span className="text-xl font-bold text-primary">{item.step}</span>
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default function DownloadsPage() {
  return (
    <ScrollProvider>
      <DownloadsContent />
    </ScrollProvider>
  );
}