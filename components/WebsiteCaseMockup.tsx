"use client";

import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface SlideItem {
  id: string;
  client: string;
  pageTitle: string;
  domainPath: string;
  fullUrl: string;
  image: string;
}

const SLIDES: SlideItem[] = [
  {
    id: "tomatis-hero",
    client: "Томатис-Самара",
    pageTitle: "Главная страница",
    domainPath: "tomatis-samara.ru",
    fullUrl: "https://tomatis-samara.ru",
    image: "/images/cases/tomatis-hero.png",
  },
  {
    id: "tomatis-services",
    client: "Томатис-Самара",
    pageTitle: "Услуги и прайс",
    domainPath: "tomatis-samara.ru/services",
    fullUrl: "https://tomatis-samara.ru/services",
    image: "/images/cases/tomatis-services.png",
  },
  {
    id: "rtc-main",
    client: "ТД РТС",
    pageTitle: "Главная страница",
    domainPath: "td-rtc.ru",
    fullUrl: "https://td-rtc.ru",
    image: "/images/cases/rtc-main-v2.png",
  },
  {
    id: "rtc-catalog",
    client: "ТД РТС",
    pageTitle: "Каталог продукции",
    domainPath: "td-rtc.ru/catalog",
    fullUrl: "https://td-rtc.ru",
    image: "/images/cases/rtc-hero.png",
  },
];

export const WebsiteCaseMockup = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-10%" });

  const currentSlide = SLIDES[currentIndex];

  // Auto-play slide transition every 5 seconds (resets timer on each slide change)
  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isInView, currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
      },
    },
    exit: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[580px] flex flex-col items-center select-none py-2"
    >
      {/* Ambient background glow */}
      <div
        className="absolute -inset-2 sm:-inset-6 bg-gradient-to-tr from-blue-500/10 via-indigo-500/5 to-slate-400/10 rounded-[36px] blur-3xl -z-10 pointer-events-none opacity-60"
        aria-hidden="true"
      />

      {/* Main Browser Window Wrapper */}
      <div className="relative w-full">
        {/* Main Browser Card */}
        <div className="relative w-full rounded-2xl sm:rounded-[24px] bg-paper dark:bg-paper-dark border border-line-blue/80 dark:border-white/10 shadow-[0_16px_45px_rgba(15,23,42,0.1)] overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-[0_24px_55px_rgba(37,99,235,0.14)]">
          {/* Safari / Browser Header */}
          <div className="bg-paper-dark/95 dark:bg-slate-900/90 backdrop-blur-md px-3.5 sm:px-4 py-2.5 sm:py-3 border-b border-line-blue/80 dark:border-white/10 flex items-center justify-between gap-2 shrink-0 z-20">
            {/* Left: Window Buttons */}
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/40 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/40 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/40 inline-block" />
            </div>

            {/* Centered URL Search Pill */}
            <a
              href={currentSlide.fullUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex-1 max-w-[240px] sm:max-w-[280px] mx-auto bg-paper dark:bg-paper/10 hover:bg-slate-100 dark:hover:bg-paper/20 px-3 py-1 rounded-full border border-line-blue/60 dark:border-white/10 flex items-center justify-center gap-1.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)] transition-colors cursor-pointer"
            >
              <svg className="w-3 h-3 text-pencil/70 dark:text-pencil shrink-0 group-hover/link:text-ink-blue transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className="font-mono text-[10px] sm:text-[11px] text-pencil dark:text-pencil font-medium tracking-tight truncate group-hover/link:text-ink-blue transition-colors">
                {currentSlide.domainPath}
              </span>
              <svg className="w-2.5 h-2.5 text-pencil/50 group-hover/link:text-ink-blue transition-colors shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>

            {/* Right: Balance spacer */}
            <div className="w-[42px] shrink-0" />
          </div>

          {/* Browser Content / Fixed Uniform 1024x550 Viewport */}
          <div
            className="relative w-full bg-white dark:bg-slate-950 overflow-hidden flex items-center justify-center"
            style={{ aspectRatio: "1024 / 550" }}
          >
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentSlide.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={currentSlide.image}
                  alt={`${currentSlide.client} - ${currentSlide.pageTitle}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 580px"
                  className="object-cover object-top"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── SLEEK SIDE NAVIGATION ARROWS (LEFT & RIGHT) ── */}
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          aria-label="Предыдущий слайд"
          className="absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-paper/95 dark:bg-paper-dark/95 backdrop-blur-md border border-line-blue/80 dark:border-white/15 shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-center text-ink-dark dark:text-white hover:text-coral dark:hover:text-coral hover:scale-110 active:scale-95 transition-all z-30 cursor-pointer"
        >
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          aria-label="Следующий слайд"
          className="absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-paper/95 dark:bg-paper-dark/95 backdrop-blur-md border border-line-blue/80 dark:border-white/15 shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-center text-ink-dark dark:text-white hover:text-coral dark:hover:text-coral hover:scale-110 active:scale-95 transition-all z-30 cursor-pointer"
        >
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* ── ACCURATE & SLEEK PAGINATION DOTS (BOTTOM) ── */}
      <div className="flex items-center justify-center gap-1.5 mt-3.5 z-20">
        {SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            aria-label={`Перейти к слайду ${idx + 1}`}
            className={`transition-all duration-300 cursor-pointer rounded-full ${idx === currentIndex
              ? "w-6 h-1.5 bg-ink-blue shadow-xs"
              : "w-1.5 h-1.5 bg-pencil/25 hover:bg-pencil/50"
              }`}
          />
        ))}
      </div>
    </div>
  );
};
