"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
  useRef,
} from "react";

interface ScrollContextType {
  scrollY: number;
  scrollProgress: number;
  scrollVelocity: number;
  isScrolling: boolean;
  scrollDirection: "up" | "down" | null;
  donutCount: number;
  addDonut: () => void;
  isKonamiActive: boolean;
  triggerKonami: () => void;
  isIdle: boolean;
  showDonutRain: boolean;
  setShowDonutRain: (show: boolean) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: ReactNode }) {
  // --- Core State ---
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);

  // --- Gamification State ---
  const [donutCount, setDonutCount] = useState(0);
  const [isKonamiActive, setIsKonamiActive] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const [showDonutRain, setShowDonutRain] = useState(false);

  // --- Refs for Performance (Avoids closures capturing stale state) ---
  const lastScrollY = useRef(0);
  const lastTime = useRef(Date.now());
  const smoothedVelocity = useRef(0);

  // God-Level Konami Code Detection
  useEffect(() => {
    const konamiCode = [
      "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
      "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
      "KeyB", "KeyA"
    ];
    let konamiIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {

          // Awwwards Judge Easter Egg
          console.log(
            "%c🍩 GOD MODE UNLOCKED 🍩\n%cYou found the secret. Enjoy the sugar rush.",
            "color: #E2955A; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px rgba(226,149,90,0.5);",
            "color: #a1a1aa; font-size: 14px;"
          );

          setIsKonamiActive(true);
          setShowDonutRain(true);
          konamiIndex = 0;

          setTimeout(() => {
            setShowDonutRain(false);
            setIsKonamiActive(false);
          }, 5000);
        }
      } else {
        konamiIndex = 0; // Reset if they mess up
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // God-Level High-Performance Scroll Engine
  useEffect(() => {
    let ticking = false;
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const currentTime = Date.now();
          const timeDiff = currentTime - lastTime.current;

          // Safety check to prevent divide-by-zero
          if (timeDiff > 0) {
            const docHeight = document.documentElement.scrollHeight;
            const winHeight = window.innerHeight;
            const maxScroll = Math.max(0, docHeight - winHeight);

            // Calculate Progress (0 to 1)
            const progress = maxScroll > 0 ? currentScrollY / maxScroll : 0;

            // Calculate Raw Velocity
            const rawVelocity = (currentScrollY - lastScrollY.current) / timeDiff;

            // God-Level Detail: Lerp the velocity for smooth physics calculations downstream
            smoothedVelocity.current = smoothedVelocity.current * 0.8 + rawVelocity * 0.2;

            // Batch React State Updates
            setScrollY(currentScrollY);
            setScrollProgress(Math.min(1, Math.max(0, progress)));
            setScrollVelocity(smoothedVelocity.current);
            setScrollDirection(currentScrollY > lastScrollY.current ? "down" : "up");
            setIsScrolling(true);

            // Update refs for next frame
            lastScrollY.current = currentScrollY;
            lastTime.current = currentTime;
          }

          // Reset scrolling state when user stops
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            setIsScrolling(false);
            // Decay velocity to 0 smoothly when stopped
            setScrollVelocity(0);
            smoothedVelocity.current = 0;
          }, 150);

          ticking = false;
        });

        ticking = true;
      }
    };

    // Passive true is required for smooth scrolling performance on mobile
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial calculate
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Flawless Idle Detection
  useEffect(() => {
    let idleTimeout: ReturnType<typeof setTimeout>;

    const resetIdle = () => {
      setIsIdle(false);
      clearTimeout(idleTimeout);
      idleTimeout = setTimeout(() => {
        setIsIdle(true);
      }, 5000); // 5 seconds of inactivity = idle
    };

    window.addEventListener("scroll", resetIdle, { passive: true });
    window.addEventListener("mousemove", resetIdle, { passive: true });
    window.addEventListener("keydown", resetIdle, { passive: true });
    window.addEventListener("touchstart", resetIdle, { passive: true });

    resetIdle();

    return () => {
      window.removeEventListener("scroll", resetIdle);
      window.removeEventListener("mousemove", resetIdle);
      window.removeEventListener("keydown", resetIdle);
      window.removeEventListener("touchstart", resetIdle);
      clearTimeout(idleTimeout);
    };
  }, []);

  // Safe Actions
  const addDonut = useCallback(() => {
    setDonutCount((prev) => prev + 1);
  }, []);

  const triggerKonami = useCallback(() => {
    setIsKonamiActive(true);
    setShowDonutRain(true);
    setTimeout(() => {
      setShowDonutRain(false);
      setIsKonamiActive(false);
    }, 5000);
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        scrollY,
        scrollProgress,
        scrollVelocity,
        isScrolling,
        scrollDirection,
        donutCount,
        addDonut,
        isKonamiActive,
        triggerKonami,
        isIdle,
        showDonutRain,
        setShowDonutRain,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollContext() {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
}