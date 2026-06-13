"use client";

import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useReveal } from "@/hooks/useReveal";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { AgencyBanner } from "@/components/AgencyBanner";
import { ServiceClimber } from "@/components/ServiceClimber";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Cases } from "@/components/Cases";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { DoodleDecorations } from "@/components/DoodleDecorations";
import { NotebookHoles } from "@/components/NotebookHoles";
import { CursorTrail } from "@/components/CursorTrail";

export default function Home() {
  // Initialize hooks
  useSmoothScroll();
  useReveal();

  return (
    <div className="relative min-h-screen bg-paper overflow-x-clip selection:bg-coral/30">
      {/* Decorative Elements */}
      <NotebookHoles />
      <DoodleDecorations />
      <CursorTrail />

      {/* Main Layout */}
      <Header />

      <main>
        <Hero />
        <Marquee speed={180} startSpeed={70} decelerationDuration={2} />
        <ServiceClimber />
        <AgencyBanner />
        <About />
        <FAQ />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
