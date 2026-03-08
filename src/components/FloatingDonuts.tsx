"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useMemo, useState, useEffect } from "react";
import { useScrollContext } from "./ScrollContext";

interface FloatingDonut {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  delay: number;
  side: "left" | "right";
  color1: string; // Frosting top color
  color2: string; // Frosting bottom color
}

export function FloatingDonuts() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY, addDonut } = useScrollContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const donuts = useMemo<FloatingDonut[]>(() => {
    const frostings = [
      { c1: "hsl(350, 70%, 70%)", c2: "hsl(350, 60%, 55%)" }, // Strawberry
      { c1: "hsl(30, 80%, 60%)", c2: "hsl(20, 70%, 45%)" },   // Caramel
      { c1: "hsl(200, 70%, 70%)", c2: "hsl(200, 60%, 50%)" }, // Blue Raspberry
      { c1: "hsl(60, 80%, 65%)", c2: "hsl(40, 70%, 50%)" },   // Vanilla/Lemon
      { c1: "hsl(280, 60%, 65%)", c2: "hsl(280, 50%, 45%)" }, // Grape
    ];

    return Array.from({ length: 12 }, (_, i) => {
      const frosting = frostings[i % frostings.length];
      return {
        id: i,
        x: Math.random() * 100,
        y: i * 600 + 400 + Math.random() * 300, // Spaced further apart
        rotation: Math.random() * 360,
        scale: 0.6 + Math.random() * 0.4,
        delay: Math.random() * 2,
        side: i % 2 === 0 ? "left" : "right",
        color1: frosting.c1,
        color2: frosting.c2,
      };
    });
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
    >
      {donuts.map((donut) => (
        <FloatingDonutItem
          key={donut.id}
          donut={donut}
          scrollY={scrollY}
          onCollect={addDonut}
        />
      ))}
    </div>
  );
}

function FloatingDonutItem({
  donut,
  scrollY,
  onCollect,
}: {
  donut: FloatingDonut;
  scrollY: number;
  onCollect: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "200px" });

  // State to track if the user found it
  const [isCollected, setIsCollected] = useState(false);

  const targetY = donut.y;
  // Parallax calculations
  const shouldShow = scrollY > targetY - 800 && scrollY < targetY + 600;
  const xOffset = donut.side === "left" ? -150 : 150;
  const animatedX = shouldShow ? 0 : xOffset;
  const rotation = donut.rotation + scrollY * 0.08; // Slightly faster spin

  const handleCollect = () => {
    if (isCollected) return; // Prevent double clicks
    setIsCollected(true);
    onCollect();
  };

  if (isCollected && !isInView) return null; // Unmount completely once collected and scrolled away

  return (
    <motion.div
      ref={ref}
      className={`absolute ${donut.side === "left" ? "left-4 md:left-12 lg:left-24" : "right-4 md:right-12 lg:right-24"
        } ${isCollected ? "pointer-events-none z-50" : "pointer-events-auto cursor-pointer z-10"}`}
      style={{
        top: targetY,
      }}
      initial={{ x: xOffset, opacity: 0, rotate: 0 }}
      animate={
        isCollected
          ? {
            // God-Level Collection Explosion
            scale: 2.5,
            opacity: 0,
            y: -100,
            rotate: rotation + 180,
            filter: "brightness(2) blur(10px)",
          }
          : {
            // Normal floating state
            x: animatedX,
            opacity: shouldShow ? 0.8 : 0,
            rotate: rotation,
            y: [0, -15, 0], // Continuous organic hovering
          }
      }
      transition={
        isCollected
          ? { duration: 0.6, ease: "easeOut" }
          : {
            x: { type: "spring", stiffness: 50, damping: 15 },
            opacity: { duration: 0.4 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: donut.delay },
          }
      }
      whileHover={
        !isCollected
          ? {
            scale: 1.2,
            rotate: rotation + 45,
            filter: "brightness(1.2)",
            transition: { type: "spring", stiffness: 300, damping: 10 },
          }
          : undefined
      }
      onClick={handleCollect}
    >
      {/* Detailed Donut SVG */}
      <svg
        width={70 * donut.scale}
        height={70 * donut.scale}
        viewBox="0 0 100 100"
        className={`drop-shadow-2xl ${isCollected ? "" : "hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all"}`}
      >
        <defs>
          <linearGradient id={`donut-base-${donut.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(35, 70%, 75%)" />
            <stop offset="100%" stopColor="hsl(25, 60%, 45%)" />
          </linearGradient>
          <linearGradient id={`frosting-${donut.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={donut.color1} />
            <stop offset="100%" stopColor={donut.color2} />
          </linearGradient>
          {/* Inner Shadow for 3D depth */}
          <filter id="inset-shadow">
            <feOffset dx="0" dy="4" />
            <feGaussianBlur stdDeviation="4" result="offset-blur" />
            <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
            <feFlood floodColor="black" floodOpacity="0.3" result="color" />
            <feComposite operator="in" in="color" in2="inverse" result="shadow" />
            <feComposite operator="over" in="shadow" in2="SourceGraphic" />
          </filter>
        </defs>

        {/* Donut base */}
        <circle cx="50" cy="50" r="42" fill={`url(#donut-base-${donut.id})`} />

        {/* Frosting */}
        <path
          d="M 12 45 Q 18 28 35 22 Q 50 16 65 22 Q 82 28 88 45 Q 92 58 88 65 Q 75 52 50 50 Q 25 52 12 65 Q 8 58 12 45"
          fill={`url(#frosting-${donut.id})`}
          filter="url(#inset-shadow)"
        />

        {/* Donut hole (cut out) */}
        <circle cx="50" cy="50" r="16" fill="hsl(0, 0%, 5%)" />
        {/* Hole highlight for depth */}
        <circle cx="50" cy="50" r="16" fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="3" />

        {/* High-quality Sprinkles */}
        <g stroke="rgba(0,0,0,0.1)" strokeWidth="0.5">
          <rect x="30" y="28" width="7" height="2.5" rx="1.5" fill="#FFF" transform="rotate(-20 33 29)" />
          <rect x="60" y="25" width="7" height="2.5" rx="1.5" fill="#5EEAD4" transform="rotate(35 63 26)" />
          <rect x="45" y="34" width="7" height="2.5" rx="1.5" fill="#FDE047" transform="rotate(-10 48 35)" />
          <rect x="70" y="42" width="7" height="2.5" rx="1.5" fill="#E879F9" transform="rotate(65 73 43)" />
          <rect x="22" y="45" width="7" height="2.5" rx="1.5" fill="#38BDF8" transform="rotate(-45 25 46)" />
          <rect x="38" y="55" width="7" height="2.5" rx="1.5" fill="#FFF" transform="rotate(15 41 56)" />
        </g>

        {/* Gloss overlay */}
        <path d="M 20 35 Q 35 20 50 25" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
      </svg>
    </motion.div>
  );
}

// God-Level Donut Rain for Konami code
export function DonutRain({ active }: { active: boolean }) {
  const donuts = useMemo(() => {
    const colors = [
      { c1: "#F472B6", c2: "#DB2777" }, // Pink
      { c1: "#FBBF24", c2: "#D97706" }, // Amber
      { c1: "#38BDF8", c2: "#0284C7" }, // Blue
      { c1: "#A78BFA", c2: "#7C3AED" }, // Purple
    ];

    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 3, // Staggered rain
      duration: 1.5 + Math.random() * 2, // Varied falling speeds
      rotation: Math.random() * 720,
      size: 25 + Math.random() * 50, // Varied sizes for depth
      color1: colors[i % colors.length].c1,
      color2: colors[i % colors.length].c2,
    }));
  }, []);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
      {/* Screen Dimmer */}
      <motion.div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {donuts.map((donut) => (
        <motion.div
          key={donut.id}
          className="absolute drop-shadow-2xl"
          style={{ left: `${donut.x}%` }}
          initial={{ y: -150, rotate: 0, opacity: 1 }}
          animate={{
            y: "110vh",
            rotate: donut.rotation,
          }}
          transition={{
            duration: donut.duration,
            delay: donut.delay,
            ease: "linear", // Linear makes it look like real gravity/falling
          }}
        >
          <svg width={donut.size} height={donut.size} viewBox="0 0 100 100">
            <defs>
              <linearGradient id={`rain-donut-${donut.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(30, 60%, 65%)" />
                <stop offset="100%" stopColor="hsl(25, 50%, 45%)" />
              </linearGradient>
              <linearGradient id={`rain-frosting-${donut.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={donut.color1} />
                <stop offset="100%" stopColor={donut.color2} />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="40" fill={`url(#rain-donut-${donut.id})`} />
            <circle cx="50" cy="50" r="15" fill="hsl(0, 0%, 5%)" />
            <path
              d="M 15 45 Q 20 30 35 25 Q 50 20 65 25 Q 80 30 85 45 Q 88 55 85 60 Q 75 50 50 48 Q 25 50 15 60 Q 12 55 15 45"
              fill={`url(#rain-frosting-${donut.id})`}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}