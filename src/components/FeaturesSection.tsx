"use client";

import { motion, useInView, useScroll, useTransform, useMotionValue, useMotionTemplate } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import { AnimatedText, AnimatedParagraph } from "./AnimatedText";

// --- AWWWARDS UPGRADE 1: Animated SVG Paths ---
const drawVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1, 
    transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 } 
  }
};

const fillVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.8, ease: "easeOut", delay: 1.2 } 
  }
};

const LiveTVIcon = ({ inView }: { inView: boolean }) => (
  <motion.svg viewBox="0 0 64 64" fill="none" className="w-full h-full" initial="hidden" animate={inView ? "visible" : "hidden"}>
    <motion.rect variants={drawVariants} x="8" y="12" width="48" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <motion.path variants={drawVariants} d="M24 52h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <motion.path variants={drawVariants} d="M32 44v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <motion.circle variants={drawVariants} cx="32" cy="28" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
    <motion.path variants={fillVariants} d="M29 25l6 3-6 3V25z" fill="currentColor" />
  </motion.svg>
);

const OnDemandIcon = ({ inView }: { inView: boolean }) => (
  <motion.svg viewBox="0 0 64 64" fill="none" className="w-full h-full" initial="hidden" animate={inView ? "visible" : "hidden"}>
    <motion.rect variants={drawVariants} x="12" y="8" width="40" height="48" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <motion.path variants={drawVariants} d="M20 16h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <motion.path variants={drawVariants} d="M20 24h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <motion.path variants={drawVariants} d="M20 32h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <motion.circle variants={drawVariants} cx="32" cy="44" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
    <motion.path variants={fillVariants} d="M30 42l4 2-4 2v-4z" fill="currentColor" />
  </motion.svg>
);

const OmnichannelIcon = ({ inView }: { inView: boolean }) => (
  <motion.svg viewBox="0 0 64 64" fill="none" className="w-full h-full" initial="hidden" animate={inView ? "visible" : "hidden"}>
    <motion.rect variants={drawVariants} x="4" y="20" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <motion.rect variants={drawVariants} x="40" y="20" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <motion.rect variants={drawVariants} x="22" y="40" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <motion.rect variants={drawVariants} x="22" y="8" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <motion.path variants={drawVariants} d="M32 22v18M24 27h-4M44 27h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </motion.svg>
);

const WorldIcon = ({ inView }: { inView: boolean }) => (
  <motion.svg viewBox="0 0 64 64" fill="none" className="w-full h-full" initial="hidden" animate={inView ? "visible" : "hidden"}>
    <motion.circle variants={drawVariants} cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2" fill="none" />
    <motion.ellipse variants={drawVariants} cx="32" cy="32" rx="12" ry="24" stroke="currentColor" strokeWidth="2" fill="none" />
    <motion.path variants={drawVariants} d="M8 32h48M12 20h40M12 44h40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </motion.svg>
);

const SpeedIcon = ({ inView }: { inView: boolean }) => (
  <motion.svg viewBox="0 0 64 64" fill="none" className="w-full h-full" initial="hidden" animate={inView ? "visible" : "hidden"}>
    <motion.path variants={drawVariants} d="M32 8v8M8 32h8M56 32h-8M14 14l6 6M50 14l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <motion.circle variants={drawVariants} cx="32" cy="36" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
    <motion.path variants={drawVariants} d="M32 36l8-12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <motion.circle variants={fillVariants} cx="32" cy="36" r="4" fill="currentColor" />
  </motion.svg>
);

const DevicesIcon = ({ inView }: { inView: boolean }) => (
  <motion.svg viewBox="0 0 64 64" fill="none" className="w-full h-full" initial="hidden" animate={inView ? "visible" : "hidden"}>
    <motion.rect variants={drawVariants} x="4" y="8" width="36" height="28" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <motion.rect variants={drawVariants} x="36" y="20" width="24" height="36" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
    <motion.path variants={drawVariants} d="M4 36h36M44 50h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <motion.circle variants={drawVariants} cx="22" cy="42" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
  </motion.svg>
);

const SupportIcon = ({ inView }: { inView: boolean }) => (
  <motion.svg viewBox="0 0 64 64" fill="none" className="w-full h-full" initial="hidden" animate={inView ? "visible" : "hidden"}>
    <motion.circle variants={drawVariants} cx="32" cy="24" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
    <motion.path variants={drawVariants} d="M16 52c0-8 7-14 16-14s16 6 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <motion.path variants={drawVariants} d="M44 20l8-4M44 28l8 4M20 20l-8-4M20 28l-8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </motion.svg>
);

const features = [
  {
    Icon: LiveTVIcon,
    title: "Live TV",
    description: "Instant access to news, sports, and world-class entertainment.",
  },
  {
    Icon: OnDemandIcon,
    title: "On-Demand",
    description: "A massive library of cinema and series, ready when you are.",
  },
  {
    Icon: OmnichannelIcon,
    title: "Omnichannel",
    description: "Seamless viewing on TVs, phones, tablets, and computers.",
  },
];

const whyUs = [
  {
    Icon: WorldIcon,
    title: "World's Largest Premium",
    description: "From Bollywood to Hollywood, South Indian to Arabic — an exhaustive collection of sports, news, and classics.",
  },
  {
    Icon: SpeedIcon,
    title: "Ultra-Fast, Ultra-Smooth",
    description: "Zero buffering with stability you can trust. High-bitrate streaming the way it was meant to be experienced.",
  },
  {
    Icon: DevicesIcon,
    title: "Multi-Platform Support",
    description: "Native compatibility for Firestick, Android, iOS, and Smart TVs. Your entertainment, synchronized everywhere.",
  },
  {
    Icon: SupportIcon,
    title: "Real Human Support",
    description: "Our dedicated team is online 24/7. We respond with the speed and precision your home cinema deserves.",
  },
];

export function FeaturesSection() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, rgba(60, 40, 30, 0.2) 0%, transparent 60%)`,
          opacity,
        }}
      />

      <div className="container relative z-10">
        <div className="text-center mb-20">
          <AnimatedText
            text="Cinema in the Comfort of Your Home."
            className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto"
            highlightWords={["Cinema", "Home."]}
          />
          <AnimatedParagraph
            text="Everything you need for ultimate entertainment, perfectly synced across all your devices."
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
            delay={0.3}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number; }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "50px" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const { Icon } = feature;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80, rotateX: 20 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 80, rotateX: 20 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      whileHover="hover"
      whileTap="hover" // Mobile Touch Support
      className="group relative p-8 rounded-2xl bg-card/10 border border-white/5 backdrop-blur-md overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none hidden md:block" // Hidden on small screens to prevent sticky hover on mobile
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(180, 130, 80, 0.15), transparent 80%)`,
        }}
      />

      {/* Animated Icon Container */}
      <motion.div 
        variants={{
          hover: { scale: 1.1, rotate: [0, -5, 5, -2, 2, 0], transition: { duration: 0.5 } }
        }}
        className="relative w-16 h-16 mb-6 text-primary z-10"
      >
        <Icon inView={isInView} />
      </motion.div>

      <h3 className="text-xl font-bold mb-3 relative z-10 transition-colors group-hover:text-primary">
        {feature.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
        {feature.description}
      </p>

      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary/50 to-transparent z-10"
        initial={{ width: "0%" }}
        variants={{ hover: { width: "100%" } }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}

export function WhyUsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const logoY = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background Parallax Logo */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 opacity-5 pointer-events-none"
        style={{ y: logoY }}
        initial={{ scale: 0.8 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src="https://ext.same-assets.com/2445618519/4009277168.png"
          alt="Watermark Logo"
          className="w-64 h-64 md:w-96 md:h-96 object-contain blur-sm"
        />
      </motion.div>

      <div className="container relative z-10">
        <div className="text-center mb-20">
          
          {/* Main Focused Logo placed above the heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-8"
          >
            <img
              src="https://ext.same-assets.com/2445618519/4009277168.png"
              alt="Coffee & Donut TV Original Logo"
              className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-xl"
            />
          </motion.div>

          <AnimatedText
            text="Why Coffee & Donut TV?"
            className="text-3xl md:text-5xl lg:text-6xl font-bold"
            highlightWords={["Coffee", "&", "Donut"]}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-xl text-muted-foreground italic"
          >
            &ldquo;Because paying $14.99+ for a single app is a thing of the past.&rdquo;
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
          {whyUs.map((item, index) => (
            <WhyUsCard key={item.title} item={item} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="text-2xl font-bold mb-6">Ready to redefine your viewing?</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="/free-trial"
              className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(180,130,80,0.3)] hover:shadow-[0_0_30px_rgba(180,130,80,0.5)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Start Free Trial
            </motion.a>
            <motion.a
              href="https://wa.me/12268943166"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-foreground font-medium hover:bg-white/10 transition-colors backdrop-blur-md"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Consult with Support
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhyUsCard({ item, index }: { item: (typeof whyUs)[0]; index: number; }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "50px" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const direction = index % 2 === 0 ? -1 : 1;
  const { Icon } = item;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: direction * 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      whileHover="hover"
      whileTap="hover" // Mobile touch support
      className="group flex gap-6 p-6 rounded-2xl bg-card/10 border border-white/5 hover:border-white/15 backdrop-blur-md transition-all duration-500 overflow-hidden relative"
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none hidden md:block" // Hidden on mobile to prevent stuck hover states
        style={{
          background: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(180, 130, 80, 0.1), transparent 80%)`,
        }}
      />

      {/* Animated Icon Container */}
      <motion.div 
        variants={{
          hover: { scale: 1.15, rotate: [0, -5, 5, -2, 2, 0], transition: { duration: 0.5 } }
        }}
        className="relative w-14 h-14 flex-shrink-0 text-primary z-10 origin-center"
      >
        <Icon inView={isInView} />
      </motion.div>

      <div className="relative z-10">
        <h4 className="text-lg font-bold mb-2 transition-colors group-hover:text-primary">
          {item.title}
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}