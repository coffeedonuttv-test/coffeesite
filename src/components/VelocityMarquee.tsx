"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { useScrollContext } from "./ScrollContext";

const logos = [
  { name: "ESPN", color: "#E4002B" },
  { name: "HBO", color: "#ffffff" },
  { name: "CNN", color: "#CC0000" },
  { name: "Discovery", color: "#0072CE" },
  { name: "Cartoon Network", color: "#00D4AA" },
  { name: "Sony", color: "#ffffff" },
  { name: "ZeeTV", color: "#5A2D82" },
  { name: "TSN", color: "#E4002B" },
  { name: "FOX", color: "#FF6600" },
  { name: "NBC", color: "#F37021" },
];

export function VelocityMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollVelocity, scrollDirection } = useScrollContext();

  // Base speed + velocity boost
  const baseSpeed = 30;
  const velocityMultiplier = Math.min(scrollVelocity * 50, 20);
  const currentSpeed = baseSpeed - velocityMultiplier;

  // Direction-based x transform
  const xDirection = scrollDirection === "down" ? -1 : 1;
  const springVelocity = useSpring(scrollVelocity, {
    stiffness: 100,
    damping: 30,
  });

  const x = useTransform(
    springVelocity,
    [0, 2],
    [0, xDirection * 100]
  );

  return (
    <div
      ref={containerRef}
      className="relative py-12 overflow-hidden border-y border-border/30"
    >
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Marquee track */}
      <motion.div
        className="flex gap-16 items-center"
        animate={{
          x: [0, -1400],
        }}
        transition={{
          x: {
            duration: currentSpeed,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
        }}
        style={{
          x: x,
        }}
      >
        {/* Double the logos for seamless loop */}
        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <motion.div
            key={`${logo.name}-${index}`}
            className="flex-shrink-0 flex items-center justify-center px-4"
            whileHover={{
              scale: 1.1,
              opacity: 1,
            }}
          >
            <span
              className="text-lg font-bold tracking-wider opacity-40 hover:opacity-100 transition-all duration-300 whitespace-nowrap"
              style={{
                color: logo.color,
                textShadow: `0 0 20px ${logo.color}20`
              }}
            >
              {logo.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Velocity indicator line */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
        style={{
          width: `${Math.min(100, 20 + scrollVelocity * 100)}%`,
          opacity: Math.min(1, scrollVelocity * 2),
        }}
        animate={{
          x: scrollDirection === "down" ? ["-100%", "100%"] : ["100%", "-100%"],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  );
}
