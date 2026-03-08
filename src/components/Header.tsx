"use client";

import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import Link from "next/link";
import { useEffect, useState, useRef, MouseEvent } from "react";

const navLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Free Trial", href: "/free-trial" },
  { label: "Downloads", href: "/downloads" },
];

// --- AWWWARDS UPGRADE 1: Organic Steam Physics ---
function SteamParticle({ delay = 0, xOffset = 0 }: { delay?: number; xOffset?: number }) {
  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full bg-white/30 blur-[1px]"
      style={{ left: `calc(50% + ${xOffset}px)`, bottom: "80%" }}
      initial={{ y: 0, opacity: 0, scale: 0.2, rotate: 0 }}
      animate={{
        y: [-5, -20, -40],
        opacity: [0, 0.8, 0],
        scale: [0.2, 1.5, 2.5],
        rotate: [0, xOffset > 0 ? 45 : -45, xOffset > 0 ? 90 : -90],
        x: [0, xOffset * 1.5, xOffset * 3],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeOut",
      }}
    />
  );
}

// --- AWWWARDS UPGRADE 2: Magnetic Nav Links ---
function MagneticNavLink({ href, label }: { href: string; label: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent<HTMLAnchorElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative px-4 py-2 text-xs font-medium tracking-widest uppercase text-muted-foreground hover:text-white transition-colors group"
    >
      {label}
      {/* Subtle bottom glow on hover */}
      <motion.div
        className="absolute -bottom-1 left-4 right-4 h-[1px] bg-primary/0 group-hover:bg-primary/50 transition-all duration-300 blur-[1px]"
      />
    </motion.a>
  );
}

export function Header() {
  const { scrollY } = useScroll();
  const [time, setTime] = useState("CALCULATING");
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Smooth out the raw scroll value for transforms
  const smoothScrollY = useSpring(scrollY, { damping: 20, stiffness: 100 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [mounted]);

  // --- AWWWARDS UPGRADE 3: Dynamic Island Shrink Physics ---
  const headerWidth = useTransform(smoothScrollY, [0, 150], ["100%", "85%"]);
  const headerPadding = useTransform(smoothScrollY, [0, 150], ["1rem", "0.5rem"]);
  const headerBg = useTransform(smoothScrollY, [0, 150], ["rgba(5, 5, 5, 0)", "rgba(10, 10, 10, 0.7)"]);
  const headerBorder = useTransform(smoothScrollY, [0, 150], ["rgba(255,255,255,0)", "rgba(255,255,255,0.1)"]);
  const headerBlur = useTransform(smoothScrollY, [0, 150], [0, 16]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[100] pt-6 flex justify-center pointer-events-none"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="pointer-events-auto rounded-[2rem] flex items-center justify-between shadow-2xl overflow-hidden relative"
        style={{
          width: headerWidth,
          maxWidth: "1400px", // Prevents it getting too crazy on ultrawides
          padding: headerPadding,
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          backgroundColor: headerBg,
          borderColor: headerBorder,
          borderWidth: "1px",
          backdropFilter: `blur(${headerBlur}px)`,
        }}
      >
        {/* Ambient Inner Glow when scrolled */}
        <AnimatePresence>
          {isScrolled && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"
            />
          )}
        </AnimatePresence>

        {/* Left: Logo Area */}
        <Link href="/" className="flex items-center gap-4 group flex-shrink-0 relative z-10">
          <motion.div
            className="relative w-10 h-10 flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            {/* Organic Steam particles */}
            <div className="absolute inset-0 pointer-events-none">
              <SteamParticle delay={0} xOffset={-4} />
              <SteamParticle delay={0.8} xOffset={2} />
              <SteamParticle delay={1.6} xOffset={5} />
              <SteamParticle delay={2.2} xOffset={-2} />
            </div>

            <motion.img
              src="https://ext.same-assets.com/2445618519/4009277168.png"
              alt="Coffee & Donut TV"
              className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_10px_rgba(180,130,80,0.5)]"
            />
          </motion.div>

          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight hidden sm:block">
              COFFEE & DONUT TV
            </span>
            <span className="font-bold text-sm tracking-tight sm:hidden">
              C&D TV
            </span>

            {/* Tagline only shows at the top */}
            <AnimatePresence>
              {!isScrolled && (
                <motion.span
                  initial={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-[9px] text-primary tracking-[0.2em] uppercase font-medium mt-0.5"
                >
                  Premium Cinema
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </Link>

        {/* Center: Navigation (Only shows when scrolled down) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10">
          <AnimatePresence mode="wait">
            {isScrolled && (
              <motion.div
                key="navigation"
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-inner"
              >
                {navLinks.map((link) => (
                  <MagneticNavLink key={link.label} href={link.href} label={link.label} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right: Status & Action */}
        <div className="flex items-center gap-6 flex-shrink-0 relative z-10">
          {mounted && (
            <div className="hidden lg:flex items-center gap-3 px-3 py-1.5 rounded-full bg-black/40 border border-white/5">
              <motion.span
                className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#4ade80]"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-white/60 font-mono text-[10px] tracking-widest">
                {time}
              </span>
            </div>
          )}

          {/* Premium Contact Button */}
          <motion.a
            href="mailto:CoffeeDonutTV@gmail.com?subject=Contact%20CoffeeDonutTV"
            className="relative px-6 py-2.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Shimmer sweep effect */}
            <motion.div
              className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-primary/40 to-transparent -skew-x-12"
              initial={{ x: "-100%" }}
              whileHover={{ x: "50%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Contact</span>
          </motion.a>
        </div>
      </motion.div>
    </motion.header>
  );
}