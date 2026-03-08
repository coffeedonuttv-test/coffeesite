"use client";

import { ScrollProvider } from "@/components/ScrollContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CoffeeProgress } from "@/components/CoffeeProgress";
import { PricingCards } from "@/components/PricingCards";

export default function PricingPage() {
  return (
    <ScrollProvider>
      <Header />
      <CoffeeProgress />
      <main className="relative min-h-screen">
        <PricingCards />
      </main>
      <Footer />
    </ScrollProvider>
  );
}
