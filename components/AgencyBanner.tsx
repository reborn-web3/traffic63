"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = ["окупаемым", "эстетичным", "управляемым", "эффективным"];

const PILLARS = [
  {
    num: "01",
    title: "Performance-маркетинг",
    badge: "ROI до 500%",
    desc: "Оцифрованные воронки, управляемый целевой трафик в Яндекс, VK, Telegram и планомерный рост продаж.",
    detail: "120+ запущенных кампаний, средний рост ROAS +340%"
  },
  {
    num: "02",
    title: "Премиальный UX/UI дизайн",
    badge: "Aesthetic Design",
    desc: "Продуманные интерфейсы, чистая типографика и пользовательский опыт, вызывающий доверие с первого клика.",
    detail: "Дизайн-системы, повышающие ценность вашего бренда"
  },
  {
    num: "03",
    title: "Код & AI-технологии",
    badge: "Next.js & AI",
    desc: "Сверхбыстрая разработка сайтов и веб-сервисов, бесшовная интеграция CRM и умных AI-ассистентов.",
    detail: "Надежный и масштабируемый код под любые бизнес-задачи"
  }
];

export const AgencyBanner = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="agency-banner"
      className="relative bg-white py-24 md:py-32 overflow-hidden border-t border-slate-100"
    >
      {/* Decorative blueprint grids in background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="banner-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(15, 23, 42, 0.03)" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#banner-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-5 md:px-10 relative z-10">
        {/* Huge Typographic Headline */}
        <div className="max-w-[1100px] text-left mb-16 md:mb-24">
          <h2 className="font-heading text-4xl sm:text-7xl lg:text-[90px] font-black leading-[0.9] text-ink-dark tracking-tighter uppercase select-none">
            Мы делаем digital <br />
            <span className="inline-flex overflow-hidden pb-1 sm:pb-3 h-[1.1em] relative top-1">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ y: "80%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-80%", opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif italic text-coral lowercase font-normal tracking-normal block"
                >
                  {WORDS[currentWordIndex]}.
                </motion.span>
              </AnimatePresence>
            </span>
          </h2>
        </div>

        {/* Separator and Split Content Grid */}
        <div className="border-t border-slate-200 pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Manifesto / Intro */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <span className="font-heading text-[10px] font-extrabold tracking-widest text-coral uppercase mb-6 block select-none">
                ✦ НАША ФИЛОСОФИЯ
              </span>
              <p className="font-body text-lg md:text-xl text-pencil leading-relaxed font-medium max-w-[480px]">
                <strong>traffic63</strong> — это сплав аналитики, креатива и чистых технологий. Мы строим долговечные системы, которые приносят прибыль вашему бизнесу и вызывают восторг у ваших клиентов.
              </p>
            </div>

            {/* Handwritten script note */}
            <div className="mt-12 lg:mt-0 pt-8 border-t border-slate-100">
              <span className="font-handwritten text-3xl text-ink-blue -rotate-2 inline-block select-none transform hover:scale-105 transition-transform duration-300">
                ⚡️ Трафик. Дизайн. Код.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Editorial Pillars */}
          <div className="lg:col-span-7 flex flex-col">
            <span className="font-heading text-[10px] font-extrabold tracking-widest text-pencil uppercase mb-6 block select-none text-left">
              ▼ НАШИ СТОЛПЫ
            </span>
            <div className="flex flex-col border-b border-slate-100">
              {PILLARS.map((pillar, i) => (
                <motion.div
                  key={pillar.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.15, duration: 0.7 }}
                  className="group flex flex-col md:flex-row text-left py-8 border-t border-slate-100 transition-colors duration-500 hover:bg-slate-50/40 px-4 rounded-xl -mx-4"
                >
                  {/* Number & Tag */}
                  <div className="flex justify-between md:flex-col md:justify-start gap-4 mb-4 md:mb-0 md:w-40 shrink-0">
                    <span className="font-body text-xs font-black text-ink-dark select-none">
                      {pillar.num}
                    </span>
                    <span className="font-heading text-[9px] font-bold tracking-wider text-coral uppercase bg-coral-light/10 border border-coral/10 px-2 py-0.5 rounded-full w-fit">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Main description */}
                  <div className="flex-1 md:pl-4">
                    <h3 className="font-heading text-lg md:text-xl font-extrabold text-ink-dark group-hover:text-coral transition-colors duration-300 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="font-body text-sm text-pencil leading-relaxed mb-4">
                      {pillar.desc}
                    </p>
                    <div className="flex items-center gap-2 text-[11px] font-semibold text-ink-blue">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-ink-blue/50 animate-pulse"></span>
                      <span>{pillar.detail}</span>
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="hidden md:flex items-center justify-end pl-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                    <svg className="w-5 h-5 text-coral" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AgencyBanner;
