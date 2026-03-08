"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState, ReactNode, MouseEvent } from "react";

const navLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Free Trial", href: "/free-trial" },
  { label: "Downloads", href: "/downloads" },
  { label: "Contact", href: "mailto:CoffeeDonutTV@gmail.com" },
];

// --- AWWWARDS UPGRADE 1: Magnetic Button Physics ---
function MagneticSocialIcon({ href, children }: { href: string; children: ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.4);
    y.set(middleY * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="relative w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors backdrop-blur-md group shadow-xl"
      whileTap={{ scale: 0.9 }}
    >
      <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}

// --- GOD-LEVEL UPGRADE: Clean Link with Precision Indicator ---
function CleanFooterLink({ label, href }: { label: string; href: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className="relative py-2 inline-flex items-center group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground group-hover:text-white transition-colors duration-300">
        {label}
      </span>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            layoutId="footer-nav-indicator"
            className="absolute -bottom-1 left-0 right-0 h-[2px] pointer-events-none flex items-center"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          >
            {/* The Dot / Notch */}
            <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(226,149,90,0.8)] z-10" />
            {/* The Sliding Line */}
            <div className="flex-grow h-[1px] bg-gradient-to-r from-primary to-transparent opacity-50" />
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
}

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "100px" });
  const [time, setTime] = useState("00:00:00");
  const [mounted, setMounted] = useState(false);
  const [isPhoneHovered, setIsPhoneHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer ref={footerRef} className="relative pt-32 pb-10 overflow-hidden bg-[#050505]">

      {/* Cinematic Ambient Footlights */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none translate-y-1/2 translate-x-1/2" />

      {/* Massive Background Typography */}
      <motion.div
        className="absolute bottom-10 left-0 right-0 flex justify-center pointer-events-none overflow-hidden select-none z-0"
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 0.03 } : {}}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-[14vw] font-black tracking-tighter text-white whitespace-nowrap leading-none">
          COFFEE & DONUT
        </span>
      </motion.div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-3 gap-16 md:gap-12 pb-16 border-b border-white/5">

          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Link href="/" className="flex items-center gap-4 mb-8 group inline-flex">
              <motion.div
                className="relative w-14 h-14"
                whileHover={{ rotate: 10, scale: 1.05 }}
              >
                <img
                  src="https://ext.same-assets.com/2445618519/4009277168.png"
                  alt="Logo"
                  className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(226,149,90,0.4)]"
                />
              </motion.div>
              <div>
                <h3 className="font-black text-xl tracking-tighter text-white">COFFEE & DONUT TV</h3>
                <p className="text-[8px] text-primary tracking-[0.4em] uppercase font-black mt-1">
                  Premium Cinema
                </p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs opacity-60">
              A cozy cup of entertainment—brewed daily. Experience 34,000+ live channels and cinematic releases at your fingertips.
            </p>
          </motion.div>

          {/* Navigation column - NO MORE MESSY ROLLING TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:mx-auto"
          >
            <h4 className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase mb-8">Index</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <CleanFooterLink key={link.label} label={link.label} href={link.href} />
              ))}
            </nav>
          </motion.div>

          {/* Contact column - PRECISION UNDERLINE FOR PHONE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:text-right flex flex-col md:items-end"
          >
            <h4 className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase mb-8">Support</h4>

            <a
              href="https://wa.me/12268943166"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsPhoneHovered(true)}
              onMouseLeave={() => setIsPhoneHovered(false)}
              className="text-2xl lg:text-3xl font-black text-white hover:text-primary transition-colors tracking-tighter relative inline-block py-2"
            >
              +1 (226) 894-3166

              <AnimatePresence>
                {isPhoneHovered && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-[2px] pointer-events-none flex items-center"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    exit={{ opacity: 0, scaleX: 0 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  >
                    {/* The Dot / Notch */}
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_rgba(226,149,90,1)] z-10" />
                    {/* The Sliding Line */}
                    <div className="flex-grow h-[1px] bg-gradient-to-r from-primary to-transparent opacity-80" />
                  </motion.div>
                )}
              </AnimatePresence>
            </a>

            {/* Magnetic Social Links */}
            <div className="flex gap-4 mt-10">
              <MagneticSocialIcon href="https://tiktok.com/@coffee.donut.tv">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </MagneticSocialIcon>
              <MagneticSocialIcon href="https://www.instagram.com/coffeedonuttv">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </MagneticSocialIcon>
            </div>
          </motion.div>
        </div>

        {/* Bottom System Bar */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="relative flex items-center justify-center w-3 h-3">
              <motion.span
                className="absolute inset-0 rounded-full bg-green-500/50"
                animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" />
            </div>
            <span className="text-[9px] font-black tracking-[0.3em] text-white/40 uppercase">SYSTEM ACTIVE</span>
            <span className="text-[9px] font-mono text-primary border-l border-white/20 pl-3 ml-1 tabular-nums tracking-widest">{time}</span>
          </div>

          <p className="text-[9px] font-black tracking-[0.4em] text-white/20 uppercase">
            © {new Date().getFullYear()} COFFEE & DONUT TV
          </p>
        </motion.div>
      </div>
    </footer>
  );
}