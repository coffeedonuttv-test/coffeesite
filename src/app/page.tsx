"use client";

import { useEffect, useState } from "react";
import { ScrollProvider } from "@/components/ScrollContext";
import { Header } from "@/components/Header";
import { ParticleHero } from "@/components/ParticleHero";
import { VelocityMarquee } from "@/components/VelocityMarquee";
import { FeaturesSection, WhyUsSection } from "@/components/FeaturesSection";
import { PricingCards } from "@/components/PricingCards";
import { Footer } from "@/components/Footer";
import { FloatingDonuts, DonutRain } from "@/components/FloatingDonuts";
import { CoffeeProgress } from "@/components/CoffeeProgress";
import { DonutToast } from "@/components/DonutToast";
import { useScrollContext } from "@/components/ScrollContext";

function MainContent() {
  const { showDonutRain } = useScrollContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Floating donuts on sides */}
      <FloatingDonuts />

      {/* Donut rain easter egg */}
      <DonutRain active={showDonutRain} />

      {/* Coffee progress indicator */}
      <CoffeeProgress />

      {/* Donut collection toast */}
      <DonutToast />

      {/* Header */}
      <Header />

      {/* Hero section with 3D particle animation */}
      <ParticleHero />

      {/* Logo marquee */}
      <VelocityMarquee />

      {/* Features section */}
      <FeaturesSection />

      {/* Pricing section */}
      <PricingCards />

      {/* Why us section */}
      <WhyUsSection />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default function Home() {
  return (
    <ScrollProvider>
      <main className="relative">
        <MainContent />
      </main>
    </ScrollProvider>
  );
}
