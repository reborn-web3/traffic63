"use client";

import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useReveal } from "@/hooks/useReveal";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { AgencyBanner } from "@/components/AgencyBanner";
import { ServiceClimber } from "@/components/ServiceClimber";
import { Process } from "@/components/Process";
import { Cases } from "@/components/Cases";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { CursorTrail } from "@/components/CursorTrail";

export default function Home() {
  // Initialize hooks
  useSmoothScroll();
  useReveal();

  return (
    <div className="relative min-h-screen bg-paper overflow-x-clip">
      {/* Decorative Elements */}
      <CursorTrail />

      {/* Main Layout */}
      <Header />

      <main>
        <Hero />
        <Marquee />
        <ServiceClimber />
        <AgencyBanner />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
