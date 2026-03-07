
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Point3D = {
  x: number;
  y: number;
  z: number;
  color: string;
  isCup: boolean;
};
type SteamPoint = {
  x: number;
  y: number;
  z: number;
  opacity: number;
  speed: number;
  sway: number;
};

function PixelCoffeeDonut() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationRef = useRef<number | null>(null);

  const pointsRef = useRef<Point3D[]>([]);
  const steamRef = useRef<SteamPoint[]>([]);
  const rotationRef = useRef({ x: 0.2, y: 0 });

  useEffect(() => {
    const updateSize = () => {
      const size = Math.min(
        window.innerWidth * 0.9,
        window.innerHeight * 0.75,
        700
      );
      setDimensions({ width: size, height: size });

      const pts: Point3D[] = [];
      const cTan = "34, 44%, 80%";
      const cBrown = "25, 30%, 35%";
      const cIcing = "350, 70%, 75%";
      const cDonutBase = "30, 60%, 65%";

      const addRing = (
        y: number,
        radius: number,
        count: number,
        color: string,
        isCup: boolean
      ) => {
        for (let i = 0; i < count; i++) {
          const angle = (i / count) * Math.PI * 2;
          pts.push({
            x: Math.cos(angle) * radius,
            y,
            z: Math.sin(angle) * radius,
            color,
            isCup,
          });
        }
      };

      // Generate Coffee Cup
      for (let y = 0.6; y >= -0.6; y -= 0.035) {
        const t = (0.6 - y) / 1.2;
        let radius = 0.35 + t * 0.18;
        const isSleeve = y < 0.2 && y > -0.2;
        const color = isSleeve ? cBrown : cTan;
        if (isSleeve) radius *= 1.06;
        addRing(y, radius, Math.floor(radius * 160), color, true);
      }

      // Cup bottom
      for (let y = -0.6; y >= -0.68; y -= 0.02) {
        addRing(y, 0.56, 120, cBrown, true);
      }

      // Donut on the side
      const dX = 0.48;
      const dY = 0.5;
      const dZ = 0.28;
      const majorR = 0.28;
      const minorR = 0.13;
      for (let p = 0; p < Math.PI * 2; p += 0.08) {
        for (let t = 0; t < Math.PI * 2; t += 0.15) {
          const tx = (majorR + minorR * Math.cos(t)) * Math.cos(p);
          const tz = (majorR + minorR * Math.cos(t)) * Math.sin(p);
          const ty = minorR * Math.sin(t);
          const color = ty < -0.02 ? cIcing : cDonutBase;
          pts.push({
            x: tx + dX,
            y: tz + dY,
            z: ty + dZ,
            color,
            isCup: false,
          });
        }
      }

      // Add sprinkles on donut
      for (let i = 0; i < 30; i++) {
        const p = Math.random() * Math.PI * 2;
        const t = Math.random() * Math.PI - Math.PI / 2;
        const tx = (majorR + minorR * Math.cos(t)) * Math.cos(p);
        const tz = (majorR + minorR * Math.cos(t)) * Math.sin(p);
        const ty = minorR * Math.sin(t);
        if (ty < -0.02) {
          const sprinkleColors = [
            "60, 90%, 65%",
            "180, 80%, 55%",
            "120, 70%, 50%",
            "280, 65%, 60%",
            "30, 90%, 60%",
          ];
          pts.push({
            x: tx + dX,
            y: tz + dY,
            z: ty + dZ,
            color: sprinkleColors[Math.floor(Math.random() * sprinkleColors.length)],
            isCup: false,
          });
        }
      }

      pointsRef.current = pts;

      // Initialize Steam
      const steam: SteamPoint[] = [];
      for (let i = 0; i < 200; i++) {
        steam.push({
          x: (Math.random() - 0.5) * 0.4,
          y: -0.7 - Math.random() * 1.5,
          z: (Math.random() - 0.5) * 0.4,
          opacity: Math.random() * 0.6,
          speed: 0.002 + Math.random() * 0.006,
          sway: Math.random() * 10,
        });
      }
      steamRef.current = steam;
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      const centerX = dimensions.width / 2;
      const centerY = dimensions.height * 0.6;
      const globalScale = dimensions.width * 0.4;
      const perspective = 800;

      rotationRef.current.y += 0.004;

      const cx = Math.cos(rotationRef.current.x);
      const sx = Math.sin(rotationRef.current.x);
      const cy = Math.cos(rotationRef.current.y);
      const sy = Math.sin(rotationRef.current.y);

      // Sort by depth for proper rendering
      const sortedPoints = [...pointsRef.current].sort((a, b) => {
        const azFinal = a.isCup
          ? a.y * sx + (a.x * sy + a.z * cy) * cx
          : a.y * sx + a.z * cx;
        const bzFinal = b.isCup
          ? b.y * sx + (b.x * sy + b.z * cy) * cx
          : b.y * sx + b.z * cx;
        return azFinal - bzFinal;
      });

      // Draw particles
      sortedPoints.forEach((p) => {
        let x: number;
        let y: number;
        let zFinal: number;

        if (p.isCup) {
          const rx = p.x * cy - p.z * sy;
          const rz = p.x * sy + p.z * cy;
          y = p.y * cx - rz * sx;
          zFinal = p.y * sx + rz * cx;
          x = rx;
        } else {
          y = p.y * cx - p.z * sx;
          zFinal = p.y * sx + p.z * cx;
          x = p.x;
        }

        const scale = perspective / (perspective + zFinal * globalScale);
        const screenX = centerX + x * globalScale * scale;
        const screenY = centerY + y * globalScale * scale;

        if (scale > 0) {
          const opacity = Math.max(0.15, (zFinal + 1.2) / 2.5);
          ctx.fillStyle = `hsla(${p.color}, ${opacity})`;
          ctx.beginPath();
          ctx.arc(screenX, screenY, scale * 1.4, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw Steam
      steamRef.current.forEach((s) => {
        s.y -= s.speed;
        s.opacity -= 0.0015;

        const swayX = Math.sin(s.y * 3 + s.sway) * 0.05;

        if (s.opacity <= 0 || s.y < -2.8) {
          s.y = -0.7;
          s.opacity = 0.4 + Math.random() * 0.5;
          s.x = (Math.random() - 0.5) * 0.4;
          s.z = (Math.random() - 0.5) * 0.4;
        }

        const sy_rot = s.y * cx - s.z * sx;
        const sz_rot = s.y * sx + s.z * cx;
        const sScale = perspective / (perspective + sz_rot * globalScale);
        const sX = centerX + (s.x + swayX) * globalScale * sScale;
        const sY = centerY + sy_rot * globalScale * sScale;

        ctx.beginPath();
        ctx.globalAlpha = Math.max(0, s.opacity * 0.3);
        const gradient = ctx.createRadialGradient(sX, sY, 0, sX, sY, sScale * 10);
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.4)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.arc(sX, sY, sScale * 10, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1.0;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className="opacity-90"
    />
  );
}

export function ParticleHero() {
  return (
    <section className="relative w-full h-screen bg-background overflow-hidden flex flex-col justify-between items-center">
      {/* Top text */}
      <motion.div
        className="h-24 flex items-end"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="text-[9px] uppercase tracking-[0.5em] text-foreground/30 font-medium">
          scroll to explore
        </div>
      </motion.div>

      {/* 3D Coffee Cup */}
      <div className="flex-1 flex items-center justify-center w-full overflow-visible">
        <PixelCoffeeDonut />
      </div>

      {/* Title */}
      <motion.div
        className="w-full px-4 pb-8 md:pb-12 text-center relative z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h1 className="text-[10vw] md:text-[7vw] lg:text-[6vw] font-bold text-foreground tracking-tight leading-none uppercase select-none flex flex-wrap items-baseline justify-center gap-x-2 md:gap-x-4">
          <span>Coffee</span>
          <span className="text-primary">&</span>
          <span>Donut</span>
          <span className="text-[3vw] md:text-[1.5vw] font-normal align-super">TV</span>
        </h1>
        <motion.p
          className="mt-4 text-sm md:text-base text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Epic Stories. Endless Worlds.
        </motion.p>
      </motion.div>

      {/* Atmospheric Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
