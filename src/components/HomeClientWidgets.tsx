"use client";

import { useEffect, useState } from "react";
import { FloatingDonuts, DonutRain } from "@/components/FloatingDonuts";
import { CoffeeProgress } from "@/components/CoffeeProgress";
import { DonutToast } from "@/components/DonutToast";
import { useScrollContext } from "@/components/ScrollContext";

function HomeClientWidgetsInner() {
  const { showDonutRain } = useScrollContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <FloatingDonuts />
      <DonutRain active={showDonutRain} />
      <CoffeeProgress />
      <DonutToast />
    </>
  );
}

export default function HomeClientWidgets() {
  return <HomeClientWidgetsInner />;
}
