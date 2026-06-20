"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const WORDS = ["окупаемым", "эстетичным", "управляемым", "эффективным"];

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
      className="relative bg-paper py-24 md:py-32 overflow-hidden border-t border-line-blue"
    >
      {/* Decorative blueprint grids in background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="banner-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.8" />
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
        <div className="border-t border-line-blue pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
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
            <div className="mt-12 lg:mt-0 pt-8 border-t border-line-blue">
              <span className="font-handwritten text-3xl text-ink-blue -rotate-2 inline-block select-none transform hover:scale-105 transition-transform duration-300">
                ⚡️ Трафик. Дизайн. Код.
              </span>
            </div>
          </div>

          {/* Right Column: Featured Case Study / ROI Block */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col justify-between p-8 md:p-12 bg-paper-dark border border-line-blue/60 rounded-[32px] overflow-hidden hover:shadow-lg transition-all duration-500"
            >
              {/* Decorative subtle blueprint pattern inside card */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.08]">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="card-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-pencil" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#card-grid)" />
                </svg>
              </div>

              <div className="relative z-10 text-left">
                {/* Badge */}
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <span className="font-heading text-[10px] font-extrabold tracking-widest text-coral uppercase bg-coral-light/10 border border-coral/10 px-3 py-1 rounded-full">
                    ✦ Кейс из блога
                  </span>
                  <span className="text-xs text-pencil font-medium">
                    Автор: Софья Золотарева
                  </span>
                </div>

                {/* Big ROI Number */}
                <div className="mb-6 select-none">
                  <h3 className="font-heading font-black text-7xl sm:text-8xl lg:text-[100px] leading-none tracking-tighter text-ink-dark flex items-baseline">
                    3000%
                    <span className="font-serif italic font-normal text-coral text-3xl sm:text-4xl lg:text-5xl ml-2 sm:ml-4">
                      ROI
                    </span>
                  </h3>
                </div>

                {/* Case Title */}
                <h4 className="font-heading text-xl sm:text-2xl font-extrabold text-ink-dark leading-tight group-hover:text-coral transition-colors duration-300 mb-4 max-w-xl">
                  3000% ROI. Эффективная ВК реклама | Рекламный кейс
                </h4>

                <p className="font-body text-sm sm:text-base text-pencil leading-relaxed mb-8 max-w-xl">
                  Разбор рекламной связки, креативов и настроек таргетинга, которые принесли рекордную окупаемость и кратный рост продаж.
                </p>
              </div>

              {/* Action Button */}
              <div className="relative z-10 pt-6 border-t border-line-blue/60 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <span className="text-xs text-pencil/80 font-semibold uppercase tracking-wider">
                  Кейс: Реклама ВКонтакте
                </span>
                
                <Link
                  href="/blog/3000-roi-effektivnaya-vk-reklama-or-reklamnyi-keis"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-ink-dark text-paper font-bold text-xs uppercase tracking-widest rounded-full hover:bg-coral hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                  style={{ textDecoration: "none" }}
                >
                  Читать статью
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AgencyBanner;
