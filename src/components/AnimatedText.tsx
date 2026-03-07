"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  highlightWords?: string[];
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  staggerDelay?: number;
}

export function AnimatedText({
  text,
  className = "",
  highlightWords = [],
  delay = 0,
  as: Component = "h2",
  staggerDelay = 0.03,
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const words = text.split(" ");

  // GOD-LEVEL PASTEL COLOR PALETTE
  // These guarantee the text is beautifully visible and never bleeds into the background
  const pastelBase = "hsl(35, 100%, 82%)"; // Warm, bright pastel peach/cream
  const pastelHover = "hsl(35, 100%, 95%)"; // Brighter almost-white peach on hover
  const pastelGlowBase = "0 0 20px rgba(255, 210, 150, 0.4)";
  const defaultTextColor = "#ffffff"; // Or whatever your default text color should be

  // Bulletproof Animation Logic
  const getCharAnimation = (charIndex: number, isHighlighted: boolean, globalDelay: number) => {
    // 1. Initial State (Not in view yet)
    if (!isInView) {
      return {
        opacity: 0,
        y: 60,
        rotateX: -60,
        scale: 0.8,
        color: isHighlighted ? pastelBase : defaultTextColor,
      };
    }

    // 2. Base State (In view, not hovered)
    if (hoveredIndex === null) {
      return {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        rotateZ: 0,
        color: isHighlighted ? pastelBase : defaultTextColor,
        textShadow: isHighlighted ? pastelGlowBase : "none",
      };
    }

    // 3. Hover Physics State
    const distance = Math.abs(charIndex - hoveredIndex);

    // Letters too far away stay normal
    if (distance > 3) {
      return {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        rotateZ: 0,
        color: isHighlighted ? pastelBase : defaultTextColor,
        textShadow: isHighlighted ? pastelGlowBase : "none",
      };
    }

    // Letters close to the cursor get the fluid wave effect
    const intensity = 1 - distance / 4;
    const pushDirection = charIndex > hoveredIndex ? 3 : charIndex < hoveredIndex ? -3 : 0;

    return {
      opacity: 1,
      y: -12 * intensity,
      scale: 1 + 0.2 * intensity,
      rotateZ: pushDirection * intensity,
      rotateX: 0,
      // The highlighted text gets brighter, the normal text gets a warm tint
      color: isHighlighted ? pastelHover : `hsl(30, 60%, ${60 + intensity * 40}%)`,
      textShadow: isHighlighted
        ? `0 0 ${20 + intensity * 20}px rgba(255, 210, 150, ${0.4 + intensity * 0.4})`
        : `0 ${10 * intensity}px ${20 * intensity}px rgba(180, 130, 80, ${intensity * 0.5})`,
    };
  };

  return (
    <motion.div ref={ref} className="perspective-1000">
      <Component className={className} aria-label={text}>
        {words.map((word, wordIndex) => {
          const isHighlighted = highlightWords.includes(word.replace(/[.,!?]/g, ""));
          const globalCharIndex = words
            .slice(0, wordIndex)
            .reduce((acc, w) => acc + w.length + 1, 0);

          return (
            <span
              key={`${word}-${wordIndex}`}
              className={`inline-block mr-[0.25em] ${isHighlighted ? "italic pr-1 font-semibold tracking-wide" : ""}`}
              style={{ perspective: "1000px" }}
              aria-hidden="true"
            >
              {word.split("").map((char, charIndex) => {
                const absoluteIndex = globalCharIndex + charIndex;
                const charDelay = delay + absoluteIndex * staggerDelay;

                return (
                  <motion.span
                    key={`${char}-${absoluteIndex}`}
                    initial={{ opacity: 0, y: 60, rotateX: -60, scale: 0.8 }}
                    animate={getCharAnimation(absoluteIndex, isHighlighted, charDelay)}
                    transition={{
                      // Use delay only for the initial entrance
                      delay: isInView && hoveredIndex === null ? charDelay : 0,
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      mass: 0.8,
                    }}
                    className="inline-block cursor-default relative z-10"
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "bottom center",
                      // Remove any conflicting CSS classes that might ruin the color
                      WebkitBackgroundClip: "border-box",
                      WebkitTextFillColor: "currentcolor"
                    }}
                    onMouseEnter={() => setHoveredIndex(absoluteIndex)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>
          );
        })}
      </Component>
    </motion.div>
  );
}

// Solid "Curtain Reveal" for Paragraphs
export function AnimatedParagraph({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const words = text.split(" ");

  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-flex overflow-hidden mr-[0.25em] align-bottom pb-1" aria-hidden="true">
          <motion.span
            initial={{ y: "120%", opacity: 0, rotateZ: 5 }}
            animate={
              isInView
                ? { y: "0%", opacity: 1, rotateZ: 0 }
                : { y: "120%", opacity: 0, rotateZ: 5 }
            }
            transition={{
              duration: 0.8,
              delay: delay + index * 0.015,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block origin-bottom-left"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </p>
  );
}