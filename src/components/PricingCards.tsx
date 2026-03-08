"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence, useMotionTemplate } from "framer-motion";
import { useRef, useState, useEffect, type MouseEvent } from "react";

// Fixed Pricing Data: Base price stays $6 and $8, totals are multiplied by duration.
const pricingData = {
  "1": { standard: { price: 6, total: 6 }, premium: { price: 8, total: 8 } },
  "3": { standard: { price: 6, total: 18 }, premium: { price: 8, total: 24 } },
  "6": { standard: { price: 6, total: 36 }, premium: { price: 8, total: 48 } },
  "12": { standard: { price: 6, total: 72 }, premium: { price: 8, total: 96 } },
};

const durations = [
  { label: "1 MO", value: "1" },
  { label: "3 MO", value: "3" },
  { label: "6 MO", value: "6" },
  { label: "12 MO", value: "12" },
];

interface PricingPlan {
  name: string;
  tier: string;
  features: string[];
  isRecommended?: boolean;
  type: "standard" | "premium";
}

const plans: PricingPlan[] = [
  {
    name: "Entry Level",
    tier: "Standard",
    features: [
      "Standard Server",
      "34,261+ Live Channels",
      "123,499+ Movies",
      "30,481+ Series",
      "Full HD Quality",
      "1 Connection",
      "24/7 Support",
    ],
    type: "standard",
  },
  {
    name: "Recommended",
    tier: "Ultra Elite",
    features: [
      "VIP Anti-Freeze Server",
      "34,261+ Live Channels",
      "123,499+ Movies",
      "30,481+ Series",
      "Full HD & 4K Quality",
      "1 Connection",
      "7-day Catch-up Included",
      "24/7 Support",
    ],
    isRecommended: true,
    type: "premium",
  },
];

// Dynamic Sparkle: Silver for Standard, Gold for Premium
function Sparkle({ delay = 0, isHovered = false, isPremium = false }: { delay?: number; isHovered?: boolean; isPremium?: boolean }) {
  const colorClass = isPremium ? "text-[#E2955A]" : "text-slate-300";
  const glowColor = isPremium ? "rgba(226,149,90,0.8)" : "rgba(148,163,184,0.8)";

  return (
    <motion.svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block flex-shrink-0 transition-colors duration-500 ${isHovered ? colorClass : "text-muted-foreground/50"}`}
      animate={{
        scale: isHovered ? 1.3 : 1,
        rotate: isHovered ? 90 : 0,
        filter: isHovered ? `drop-shadow(0 0 8px ${glowColor})` : "drop-shadow(0 0 0px rgba(0,0,0,0))",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <motion.path
        d="M8 0C8 4.41828 11.5817 8 16 8C11.5817 8 8 11.5817 8 16C8 11.5817 4.41828 8 0 8C4.41828 8 8 4.41828 8 0Z"
        fill="currentColor"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
      />
    </motion.svg>
  );
}

export function PricingCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "100px" });

  const rotatingWords = ["Experience.", "Platform.", "Subscription.", "TV Solution."];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  return (
    <section ref={containerRef} id="pricing" className="relative py-24 md:py-32 bg-[#050505]">

      {/* Isolated Cinematic Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(180,130,80,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_currentColor]" />
            <span className="text-xs tracking-[0.2em] font-medium text-primary uppercase">Select Your Plan</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight flex flex-col md:flex-row items-center justify-center gap-3 py-2 text-foreground">
            <span>One Simple</span>
            <span className="relative inline-flex text-[#E2955A] drop-shadow-[0_0_20px_rgba(226,149,90,0.5)]">
              <span className="invisible" aria-hidden="true">Subscription.</span>
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={wordIndex}
                  initial={{ y: "100%", opacity: 0, rotateX: -90 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  exit={{ y: "-100%", opacity: 0, rotateX: 90 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.8 }}
                  className="absolute left-0 top-0 whitespace-nowrap origin-center"
                  style={{ transformStyle: "preserve-3d", WebkitTextFillColor: "#E2955A" }}
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h2>
        </div>

        {/* 3D Diorama Cards Grid - No global toggle needed! */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto px-4 perspective-[2000px] relative z-10">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.tier}
              plan={plan}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  plan,
  index,
  isInView,
}: {
  plan: PricingPlan;
  index: number;
  isInView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Localized Card State
  const [duration, setDuration] = useState("1");
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  // Derive pricing based on local state
  const currentPricing = pricingData[duration as keyof typeof pricingData][plan.type];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Buttery soft 3D springs
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 100, damping: 30, mass: 0.5 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 100, damping: 30, mass: 0.5 });

  const glowX = useSpring(useMotionValue(50), { stiffness: 100, damping: 30 });
  const glowY = useSpring(useMotionValue(50), { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(nx);
    mouseY.set(ny);
    glowX.set(((e.clientX - rect.left) / rect.width) * 100);
    glowY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const getWhatsAppLink = () => {
    const planName = plan.isRecommended ? "Premium" : "Standard";
    const durationText = duration === "1" ? "1 Month" : `${duration} Months`;
    return `https://wa.me/12268943166?text=Hi!%20I%20want%20to%20try%20the%20${planName}%20${durationText}%20plan%20for%20$${currentPricing.total}.`;
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full h-full group"
      initial={{ opacity: 0, y: 50, rotateX: 15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: 15 }}
      transition={{ duration: 1, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      style={{ transformStyle: "preserve-3d", rotateX, rotateY }}
    >
      {/* 1px Gradient Mask (Silver for Standard, Gold for Premium) */}
      <div
        className={`relative w-full h-full rounded-[2.5rem] p-[1px] transition-colors duration-500 ${plan.isRecommended
            ? "bg-gradient-to-b from-[#E2955A]/50 to-transparent"
            : "bg-gradient-to-b from-slate-400/40 to-transparent"
          }`}
        style={{ transformStyle: "preserve-3d" }}
      >

        {/* Main Card Background */}
        <div
          className="relative w-full h-full flex flex-col rounded-[calc(2.5rem-1px)] bg-[#0A0A0A]/90 backdrop-blur-3xl overflow-hidden"
          style={{ transformStyle: "preserve-3d" }}
        >

          {/* Tracking Spotlight Glow */}
          <motion.div
            className="absolute inset-0 z-0 transition-opacity duration-500 pointer-events-none"
            style={{
              opacity: isHovered ? 1 : 0,
              background: useMotionTemplate`radial-gradient(600px circle at ${glowX}% ${glowY}%, ${plan.isRecommended ? "rgba(226, 149, 90, 0.15)" : "rgba(148, 163, 184, 0.12)"
                } 0%, transparent 70%)`,
            }}
          />

          <div className="relative z-10 flex flex-col flex-grow p-8 md:p-10 lg:p-12" style={{ transformStyle: "preserve-3d" }}>

            {/* The Crown Jewel Badge */}
            {plan.isRecommended && (
              <motion.div
                className="absolute top-0 right-10 -translate-y-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#E2955A] to-[#C87D43] backdrop-blur-md shadow-[0_10px_20px_rgba(226,149,90,0.4)] border border-white/20 z-50"
                style={{ transform: "translateZ(50px)" }}
              >
                <span className="text-[10px] uppercase tracking-widest text-black font-black">Most Popular</span>
              </motion.div>
            )}

            <motion.span
              className={`text-xs tracking-[0.3em] font-bold uppercase ${plan.isRecommended
                  ? "text-[#E2955A] drop-shadow-[0_0_10px_rgba(226,149,90,0.5)]"
                  : "text-slate-300 drop-shadow-[0_0_10px_rgba(148,163,184,0.4)]"
                }`}
              style={{ transform: "translateZ(20px)" }}
            >
              {plan.name}
            </motion.span>

            <motion.h3 className="text-4xl lg:text-5xl font-bold mt-4 tracking-tight text-white" style={{ transform: "translateZ(30px)" }}>
              {plan.tier}
            </motion.h3>

            {/* EMBEDDED DURATION TOGGLE */}
            <div className="mt-6 flex p-1 bg-white/5 border border-white/10 rounded-xl" style={{ transform: "translateZ(35px)" }}>
              {durations.map((d) => (
                <button
                  key={d.value}
                  onClick={() => setDuration(d.value)}
                  className="relative flex-1 py-2 text-[10px] md:text-xs font-bold tracking-wider rounded-lg outline-none transition-colors"
                >
                  {duration === d.value && (
                    <motion.div
                      layoutId={`active-pill-${plan.type}`}
                      className={`absolute inset-0 rounded-lg shadow-md ${plan.isRecommended ? "bg-gradient-to-r from-[#E2955A] to-[#C87D43]" : "bg-white/15"
                        }`}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 ${duration === d.value ? (plan.isRecommended ? "text-black" : "text-white") : "text-muted-foreground hover:text-white"}`}>
                    {d.label}
                  </span>
                </button>
              ))}
            </div>

            {/* 3D MECHANICAL FLIP PRICE BLOCK */}
            <div className="h-32 mt-6 mb-8 perspective-1000" style={{ transform: "translateZ(40px)" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={duration}
                  initial={{ rotateX: 90, opacity: 0, y: 10 }}
                  animate={{ rotateX: 0, opacity: 1, y: 0 }}
                  exit={{ rotateX: -90, opacity: 0, y: -10 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.8 }}
                  className="w-full h-full flex flex-col justify-center origin-center"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-muted-foreground">$</span>
                    <span className="text-6xl lg:text-7xl font-black tracking-tighter text-white tabular-nums leading-none">
                      {currentPricing.total}
                    </span>
                  </div>

                  <div className="mt-2 text-sm font-medium text-muted-foreground tracking-wide">
                    total for {duration === "1" ? "1 month" : `${duration} months`}
                    {duration !== "1" && <span className="opacity-50 text-xs ml-2">(${currentPricing.price}/mo)</span>}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" style={{ transform: "translateZ(10px)" }} />

            {/* Static Features (These stay visible while the price flips!) */}
            <motion.ul className="space-y-5 flex-grow" style={{ transform: "translateZ(25px)" }}>
              {plan.features.map((feature, i) => (
                <motion.li
                  key={feature}
                  className="flex items-start gap-4 text-sm md:text-base text-muted-foreground transition-colors duration-300 hover:text-white group/feature cursor-default"
                  onMouseEnter={() => setHoveredFeature(i)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className="mt-0.5">
                    <Sparkle delay={0.5 + i * 0.1} isHovered={hoveredFeature === i} isPremium={plan.isRecommended} />
                  </div>
                  <span className="leading-snug">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Magnetic Cinematic Button */}
            <motion.a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-12 block w-full py-5 text-center rounded-2xl font-bold tracking-widest uppercase text-sm transition-all duration-300 relative overflow-hidden group/btn shadow-xl ${plan.isRecommended
                  ? "bg-[#E2955A] text-black hover:shadow-[0_0_40px_rgba(226,149,90,0.5)]"
                  : "bg-slate-800 text-white hover:bg-slate-700 hover:shadow-[0_0_30px_rgba(148,163,184,0.3)] border border-slate-500/30"
                }`}
              style={{ transform: "translateZ(45px)" }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Shimmer Line */}
              <motion.div
                className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{ x: "50%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              <span className="relative z-10 inline-block transition-transform duration-300 group-hover/btn:scale-105">
                {plan.isRecommended ? "Unlock Elite Access" : "Get Started"}
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}