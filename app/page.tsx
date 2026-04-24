"use client";

import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useReveal } from "@/hooks/useReveal";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { ServiceSnake } from "@/components/ServiceSnake";
import { ServiceClimber } from "@/components/ServiceClimber";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Cases } from "@/components/Cases";
import { CTASection } from "@/components/CTASection";
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
        <Stats />
        <ServiceClimber />
        <ServiceSnake />
        <About />
        <Process />
        <Cases />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
