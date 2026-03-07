"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { useScrollContext } from "./ScrollContext";

interface Toast {
  id: number;
  message: string;
  type: "donut" | "achievement" | "secret";
}

export function DonutToast() {
  const { donutCount, isKonamiActive } = useScrollContext();
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [lastDonutCount, setLastDonutCount] = useState(0);

  const addToast = useCallback((message: string, type: Toast["type"] = "donut") => {
    const newToast: Toast = {
      id: Date.now(),
      message,
      type,
    };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
    }, 4000); // Extended slightly so users can read the God-Level design
  }, []);

  // Donut collection toast
  useEffect(() => {
    if (donutCount > lastDonutCount && lastDonutCount > 0) {
      const messages = [
        `Donut Secured! (${donutCount})`,
        `Sweet Find! ${donutCount} total.`,
        `Sugar Rush! Donut #${donutCount}`,
        `+1 Premium Donut`,
      ];
      addToast(messages[Math.floor(Math.random() * messages.length)], "donut");
    }
    setLastDonutCount(donutCount);
  }, [donutCount, lastDonutCount, addToast]);

  // Milestone toasts
  useEffect(() => {
    if (donutCount === 5) {
      addToast("Achievement Unlocked: Donut Lover!", "achievement");
    } else if (donutCount === 10) {
      addToast("Achievement Unlocked: Sugar Rush!", "achievement");
    } else if (donutCount === 20) {
      addToast("God Tier: Donut Master!", "achievement");
    }
  }, [donutCount, addToast]);

  // Konami code activated
  useEffect(() => {
    if (isKonamiActive) {
      addToast("Secret Override: Donut Rain Activated!", "secret");
    }
  }, [isKonamiActive, addToast]);

  return (
    <div className="fixed bottom-8 left-8 z-[9999] flex flex-col-reverse gap-3 items-start pointer-events-none">

      {/* Persistent donut counter with God-Level "Pop" Physics */}
      <AnimatePresence>
        {donutCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
            <span className="text-xl relative z-10 drop-shadow-[0_0_8px_rgba(180,130,80,0.8)]">🍩</span>

            <div className="flex items-baseline gap-1 relative z-10">
              {/* This key change forces the number to animate every time it updates */}
              <motion.span
                key={donutCount}
                initial={{ scale: 2, color: "hsl(35, 100%, 82%)", y: -10 }}
                animate={{ scale: 1, color: "hsl(0, 0%, 80%)", y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="text-sm font-bold tabular-nums"
              >
                {donutCount}
              </motion.span>
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                Collected
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Toasts */}
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <motion.div
            layout // This magical prop makes them smoothly push each other out of the way
            key={toast.id}
            initial={{ opacity: 0, x: -50, scale: 0.8, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(8px)", transition: { duration: 0.2 } }}
            transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.8 }}
            className={`relative flex items-center gap-4 px-5 py-4 rounded-2xl backdrop-blur-2xl border shadow-2xl overflow-hidden ${toast.type === "donut"
                ? "bg-black/60 border-primary/30"
                : toast.type === "achievement"
                  ? "bg-amber-950/60 border-yellow-500/50"
                  : "bg-fuchsia-950/60 border-fuchsia-500/50"
              }`}
          >
            {/* Glossy top edge for 3D realism */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* Background Glow */}
            <div className={`absolute inset-0 opacity-20 blur-xl ${toast.type === "donut" ? "bg-primary" : toast.type === "achievement" ? "bg-yellow-500" : "bg-fuchsia-500"
              }`} />

            {/* Icon Box */}
            <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center border shadow-inner ${toast.type === "donut"
                ? "bg-primary/10 border-primary/20"
                : toast.type === "achievement"
                  ? "bg-yellow-500/20 border-yellow-500/30"
                  : "bg-fuchsia-500/20 border-fuchsia-500/30"
              }`}>
              <motion.span
                className="text-xl drop-shadow-lg"
                initial={{ rotate: -45, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", delay: 0.1, stiffness: 200 }}
              >
                {toast.type === "donut" ? "🍩" : toast.type === "achievement" ? "🏆" : "✨"}
              </motion.span>
            </div>

            {/* Message Text */}
            <div className="relative z-10 flex flex-col">
              <span className={`text-[10px] uppercase tracking-widest font-bold mb-0.5 ${toast.type === "donut" ? "text-primary" : toast.type === "achievement" ? "text-yellow-400" : "text-fuchsia-400"
                }`}>
                {toast.type === "donut" ? "Item Found" : toast.type === "achievement" ? "Milestone" : "Secret Found"}
              </span>
              <span className="text-sm font-medium text-foreground tracking-wide shadow-black drop-shadow-md">
                {toast.message}
              </span>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

    </div>
  );
}