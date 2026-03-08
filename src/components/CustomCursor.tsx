"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);

  // AWWWARDS UPGRADE 1: Three distinct states instead of just a boolean
  const [cursorState, setCursorState] = useState<"default" | "hover" | "text">("default");
  const [isClicking, setIsClicking] = useState(false);

  // Start off-screen so it doesn't pop in at the top left corner
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // AWWWARDS UPGRADE 2: "Liquid" Physics (Lower mass, higher stiffness)
  const springConfig = { damping: 28, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;

      // Check for Text Elements (Headings or elements with data-cursor="text")
      if (
        target.tagName === "H1" ||
        target.tagName === "H2" ||
        target.tagName === "H3" ||
        target.closest("[data-cursor='text']")
      ) {
        setCursorState("text");
        return;
      }

      // Check for Interactive Elements
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button"
      ) {
        setCursorState("hover");
        return;
      }

      setCursorState("default");
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  // AWWWARDS UPGRADE 3: Variant configurations for the lens effect
  const variants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor: "transparent",
      border: "2px solid rgba(180, 130, 80, 0.5)",
      mixBlendMode: "normal" as React.CSSProperties["mixBlendMode"],
    },
    hover: {
      width: 60,
      height: 60,
      backgroundColor: "rgba(180, 130, 80, 0.1)",
      border: "2px solid hsl(30, 60%, 55%)",
      mixBlendMode: "normal" as React.CSSProperties["mixBlendMode"],
    },
    text: {
      width: 120, // Massive expansion for the magnifying effect
      height: 120,
      backgroundColor: "rgba(255, 255, 255, 1)", // Pure white...
      border: "none",
      mixBlendMode: "difference" as React.CSSProperties["mixBlendMode"], // ...becomes an inverter lens via difference mode
    },
  };

  return (
    <>
      {/* Outer Lens / Ring */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full hidden md:block"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: "-50%",
          y: "-50%",
          boxShadow: cursorState === "hover" ? "0 0 25px rgba(180, 130, 80, 0.4)" : "none",
        }}
        variants={variants}
        animate={isClicking && cursorState !== "text" ? { scale: 0.8 } : cursorState}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* Inner Dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full bg-primary hidden md:block"
        style={{
          left: cursorX, // Notice this doesn't use the spring? It creates a cool parallax drag effect with the outer ring!
          top: cursorY,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          width: isClicking ? 12 : 6,
          height: isClicking ? 12 : 6,
          opacity: cursorState === "text" || cursorState === "hover" ? 0 : 1, // Hides the dot when hovering
        }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      />
    </>
  );
}