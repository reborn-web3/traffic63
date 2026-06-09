"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const services = [
    {
      num: "01",
      tag: "МАРКЕТИНГ & АНАЛИТИКА",
      src: "/images/editorial_marketing.png",
      title: "Настройка рекламы, сквозная аналитика и системный рост продаж."
    },
    {
      num: "02",
      tag: "ДИЗАЙН & БРЕНДИНГ",
      src: "/images/editorial_design.png",
      title: "Разработка UX/UI интерфейсов, фирменного стиля и визуальных систем."
    },
    {
      num: "03",
      tag: "РАЗРАБОТКА & АВТОМАТИЗАЦИЯ",
      src: "/images/editorial_tech.png",
      title: "Создание корпоративных сайтов, веб-сервисов и интеграция AI-решений."
    }
  ];

  return (
    <section
      id="hero"
      className="relative bg-white pt-28 pb-24 lg:pt-40 lg:pb-32 overflow-hidden"
    >
      <div className="container mx-auto px-5 md:px-10 relative z-10 shrink-0 w-full">
        {/* Typographic Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[1100px] text-left mb-16"
        >
          <h1 className="font-heading text-4xl sm:text-7xl lg:text-[110px] font-black leading-[0.95] text-ink-dark tracking-tighter uppercase select-none">
            <span className="whitespace-nowrap">Поможем бизнесу</span> <br />
            <span className="font-serif italic text-coral lowercase font-normal tracking-normal">вырасти.</span>
          </h1>
        </motion.div>

        {/* Description Row (border-t separated, single column) */}
        <div className="border-t border-slate-200 pt-10 pb-16 md:pb-24 lg:pb-32 text-left">
          <p className="font-body text-lg md:text-xl lg:text-[22px] text-pencil leading-relaxed font-medium max-w-[720px]">
            Помогаем компаниям расти с помощью комплексного performance-маркетинга, премиального UX/UI дизайна и надежной веб-разработки.
          </p>
        </div>

        {/* Editorial Service Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.8 }}
              className="flex flex-col text-left group"
            >
              {/* Header border block */}
              <div className="border-t border-slate-200 pt-4 flex justify-between items-center mb-6">
                <span className="font-body text-xs font-black text-ink-dark select-none">{service.num}</span>
                <span className="font-heading text-[10px] font-extrabold tracking-widest text-pencil select-none">{service.tag}</span>
              </div>

              {/* Art Card */}
              <div className="relative w-full aspect-[4/5] bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-500 mb-6 flex items-center justify-center p-6">
                <Image
                  src={service.src}
                  alt={service.tag}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-8 mix-blend-multiply bg-white hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Descriptor text */}
              <p className="font-body text-sm font-semibold text-pencil leading-relaxed group-hover:text-ink-dark transition-colors">
                {service.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Presentation Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-ink-dark/90 backdrop-blur-md"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl p-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-ink-dark hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Закрыть видео"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              {/* Video container */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black">
                <iframe
                  src="https://player.vimeo.com/video/347119294?autoplay=1&title=0&byline=0&portrait=0"
                  className="absolute inset-0 w-full h-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;



