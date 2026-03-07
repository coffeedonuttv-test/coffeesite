"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useScrollContext } from "./ScrollContext";

interface SteamParticle {
  id: number;
  startX: number;
  endX: number;
  delay: number;
  duration: number;
  scale: number;
}

export function CoffeeProgress() {
  const { scrollProgress } = useScrollContext();
  const [mounted, setMounted] = useState(false);
  const [steamParticles, setSteamParticles] = useState<SteamParticle[]>([]);
  const steamIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Convert raw scroll context to a MotionValue for fluid color transformation
  const progressMV = useMotionValue(0);

  // God-Level: Coffee dynamically brews from light caramel to dark espresso
  const coffeeColor = useTransform(progressMV, [0, 1], ["#E2955A", "#3E1E0F"]);

  const fillPercent = Math.min(100, Math.max(0, scrollProgress * 100));
  const steamIntensity = Math.min(1, fillPercent / 40);

  // Magnetic Hover Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Butter-smooth springs for the magnetic pull
  const springConfig = { damping: 15, stiffness: 150, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-20, 20], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-20, 20], [-15, 15]), springConfig);
  const translateX = useSpring(mouseX, springConfig);
  const translateY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Calculate distance from center (clamped for subtle effect)
    mouseX.set(Math.max(-20, Math.min(20, e.clientX - centerX)));
    mouseY.set(Math.max(-20, Math.min(20, e.clientY - centerY)));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    progressMV.set(scrollProgress);
  }, [scrollProgress, progressMV]);

  useEffect(() => {
    if (!mounted) return;

    steamIntervalRef.current = setInterval(() => {
      // Start making steam slightly earlier and make a lot more of it
      if (steamIntensity > 0.05) {
        setSteamParticles((prev) => {
          const filtered = prev.filter((p) => Date.now() - p.id < 3000); // Live longer (3 seconds)

          // Upped the limit from 8 to 25 for thick, billowy steam
          if (filtered.length < 25 && Math.random() < steamIntensity * 2) {
            return [
              ...filtered,
              {
                id: Date.now() + Math.random(),
                startX: 30 + Math.random() * 40, // Spread across the top of the cup
                endX: (Math.random() - 0.5) * 30, // Wider twisting drift
                delay: Math.random() * 0.1,
                duration: 2 + Math.random() * 1.5, // Lasts longer on screen
                scale: 0.8 + Math.random() * 1.2, // Generates larger particles
              },
            ];
          }
          return filtered;
        });
      }
    }, 80); // Cut interval time in half to spawn much faster

    return () => {
      if (steamIntervalRef.current) {
        clearInterval(steamIntervalRef.current);
      }
    };
  }, [mounted, steamIntensity]);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 perspective-1000"
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8, type: "spring", bounce: 0.4 }}
    >
      <motion.div
        className="relative group p-4 cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* God-Level Tooltip */}
        <motion.div
          className="absolute -top-6 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/80 backdrop-blur-md rounded-lg text-[11px] font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10 shadow-[0_10px_20px_rgba(0,0,0,0.5)] flex items-center gap-2 pointer-events-none"
          style={{ transform: "translateZ(30px) translateX(-50%)" }} // Pops out in 3D
        >
          <span className="text-white/60 uppercase tracking-widest text-[9px]">Brewing</span>
          <span className="text-primary">{Math.round(fillPercent)}%</span>
        </motion.div>

        {/* Thick Volumetric Steam Container */}
        <div className="absolute -top-12 left-0 right-0 h-24 overflow-visible pointer-events-none" style={{ transform: "translateZ(10px)" }}>
          <AnimatePresence>
            {steamParticles.map((particle) => (
              <motion.div
                key={particle.id}
                // Brighter (white/60), larger (w-4 h-4), and more blurred for cloud effect
                className="absolute w-4 h-4 rounded-full bg-white/60 blur-[3px]"
                style={{
                  left: `${particle.startX}%`,
                  bottom: 0,
                }}
                initial={{ y: 0, opacity: 0, scale: 0.2, rotate: 0 }}
                animate={{
                  y: -60, // Rises much higher
                  x: particle.endX, // Twists as it rises
                  opacity: [0, 0.8, 0], // Reaches a higher peak opacity
                  scale: [0.2, particle.scale, particle.scale * 2], // Expands massively
                  rotate: particle.endX * 5,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: particle.duration,
                  delay: particle.delay,
                  ease: "easeOut",
                }}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Enhanced Cup SVG */}
        <div style={{ transform: "translateZ(20px)" }} className="relative">
          {/* Ambient Glow behind cup based on fill */}
          <motion.div
            className="absolute inset-0 bg-primary/20 blur-xl rounded-full transition-opacity duration-300 -z-10"
            style={{ opacity: fillPercent / 100 }}
          />

          <svg viewBox="0 0 24 32" className="w-10 h-12 drop-shadow-2xl">
            <defs>
              <linearGradient id="miniCup" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                <stop offset="100%" stopColor="rgba(200,200,200,0.7)" />
              </linearGradient>
              <clipPath id="miniInterior">
                <path d="M 5 8 L 4 26 Q 4 28 6 28 L 18 28 Q 20 28 20 26 L 19 8 Z" />
              </clipPath>
              {/* Premium Gloss Overlay */}
              <linearGradient id="cupGloss" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                <stop offset="20%" stopColor="rgba(255,255,255,0.0)" />
                <stop offset="80%" stopColor="rgba(255,255,255,0.0)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0.2)" />
              </linearGradient>
            </defs>

            {/* Cup body */}
            <path
              d="M 4 6 L 3 26 Q 3 30 7 30 L 17 30 Q 21 30 21 26 L 20 6 Z"
              fill="url(#miniCup)"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="0.5"
            />

            {/* Coffee fill with dynamic color binding */}
            <g clipPath="url(#miniInterior)">
              <motion.rect
                x="3"
                y={28 - (fillPercent * 0.22)}
                width="18"
                height={fillPercent * 0.22 + 4}
                style={{ fill: coffeeColor }} // Color dynamically shifts!
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              />
            </g>

            {/* Cup Gloss Overlay */}
            <path
              d="M 4 6 L 3 26 Q 3 30 7 30 L 17 30 Q 21 30 21 26 L 20 6 Z"
              fill="url(#cupGloss)"
              pointerEvents="none"
            />

            {/* Sleeve */}
            <path
              d="M 4.5 12 L 3.5 21 Q 3.5 22 4.5 22 L 19.5 22 Q 20.5 22 20.5 21 L 19.5 12 Q 19.5 11 18.5 11 L 5.5 11 Q 4.5 11 4.5 12 Z"
              fill="hsl(25, 30%, 15%)"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="0.5"
            />
            {/* Logo on sleeve */}
            <circle cx="12" cy="16.5" r="2.5" fill="hsl(35, 60%, 55%)" opacity="0.8" />

            {/* Lid */}
            <path
              d="M 3 6 Q 3 3 6 3 L 18 3 Q 21 3 21 6 L 20 6 Q 20 4 17 4 L 7 4 Q 4 4 4 6 Z"
              fill="hsl(0, 0%, 12%)"
            />
            <ellipse cx="12" cy="6" rx="9" ry="1.5" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <ellipse cx="12" cy="4" rx="2" ry="0.5" fill="hsl(0, 0%, 5%)" />
          </svg>
        </div>

        {/* Minimal Percentage Below */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[9px] font-bold text-muted-foreground/50 tabular-nums transition-colors group-hover:text-primary">
          {Math.round(fillPercent)}%
        </div>
      </motion.div>
    </motion.div>
  );
}