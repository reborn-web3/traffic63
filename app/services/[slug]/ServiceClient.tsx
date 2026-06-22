"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CursorTrail } from "@/components/CursorTrail";
import { ContactForm } from "@/components/ContactForm";
import { useReveal } from "@/hooks/useReveal";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { ServiceData } from "@/lib/servicesData";

interface ServiceClientProps {
  data: ServiceData;
}

export const ServiceClient = ({ data }: ServiceClientProps) => {
  useReveal();
  useSmoothScroll();

  const [selectedTariff, setSelectedTariff] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleTariffSelect = (tariffName: string) => {
    setSelectedTariff(
      `Здравствуйте! Меня интересует тариф "${tariffName}" для услуги "${data.hero.titlePart1} ${data.hero.titleItalic} ${data.hero.titlePart2 || ""}".`
    );
    const formElement = document.getElementById("contact");
    if (formElement) {
      const offset = 80; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = formElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Get icons for tariffs
  const getTariffIcon = (index: number) => {
    switch (index) {
      case 0:
        return "/images/doodle_rocket.png";
      case 1:
        return "/images/doodle_laptop.png";
      case 2:
      default:
        return "/images/doodle_idea.png";
    }
  };

  return (
    <div className="relative min-h-screen bg-paper overflow-x-clip font-body">
      <CursorTrail />
      <Header />

      <main className="relative z-10">
        {/* ── 1. HERO SECTION ── */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-line-blue">
          {/* Background grid */}
          <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-grid)" />
            </svg>
          </div>

          <div className="container mx-auto px-5 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Text */}
              <div className="col-span-1 lg:col-span-7 flex flex-col items-start reveal">
                <span className="section-label select-none">
                  {data.hero.label}
                </span>

                <h1 className="font-heading text-4xl sm:text-5xl lg:text-[72px] font-black leading-[1.05] text-ink-dark tracking-tighter uppercase select-none mb-6">
                  {data.hero.titlePart1}{" "}
                  <span className="font-serif italic text-coral font-normal lowercase tracking-normal block sm:inline">
                    {data.hero.titleItalic}
                  </span>
                  {data.hero.titlePart2 && ` ${data.hero.titlePart2}`}
                </h1>

                <p className="font-body text-base sm:text-lg lg:text-xl text-pencil leading-relaxed font-medium mb-10 max-w-2xl text-left">
                  {data.hero.description}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 relative">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-coral text-white font-body font-extrabold text-xs uppercase tracking-widest py-4 px-8 rounded-full shadow-md shadow-coral/20 hover:bg-coral-dark hover:shadow-lg hover:shadow-coral/30 hover:-translate-y-0.5 transition-all duration-300 select-none cursor-pointer"
                  >
                    <span>Обсудить проект</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                  
                  {/* Handwritten tooltip */}
                  <span className="font-handwritten text-lg text-coral/80 sm:absolute sm:left-full sm:top-1/2 sm:-translate-y-1/2 sm:ml-4 sm:whitespace-nowrap select-none rotate-[-2deg] sm:rotate-[2deg] mt-2 sm:mt-0">
                    {data.hero.ctaSubtext}
                  </span>
                </div>
              </div>

              {/* Right Column: Sketch Illustration */}
              <div className="col-span-1 lg:col-span-5 flex justify-center items-center reveal" style={{ transitionDelay: "200ms" }}>
                <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square bg-paper-dark/30 border border-line-blue/50 rounded-[48px] p-8 flex items-center justify-center shadow-inner select-none">
                  {/* Decorative frame corners */}
                  <div className="absolute top-6 left-6 font-heading text-[8px] font-extrabold tracking-widest text-pencil/30">SYS / INIT_IMG</div>
                  <div className="absolute bottom-6 right-6 font-heading text-[8px] font-extrabold tracking-widest text-pencil/30">SCALE / [1.00]</div>

                  <Image
                    src={data.hero.doodleImage}
                    alt={data.hero.titleItalic}
                    width={320}
                    height={320}
                    className="object-contain animate-float hover:scale-105 transition-transform duration-700 dark-theme-image"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. PAINS & SOLUTIONS ── */}
        <section className="relative py-20 md:py-28 bg-paper-dark/30 border-b border-line-blue">
          <div className="container mx-auto px-5 md:px-10">
            <div className="max-w-3xl mb-16 reveal">
              <span className="section-label select-none">✦ боли и решения</span>
              <h2 className="section-title">С какими проблемами вы сталкиваетесь?</h2>
              <p className="font-body text-base text-pencil leading-relaxed max-w-[620px] text-left">
                Мы знаем, как сложно бывает найти надежного партнера и контролировать каждый этап. Посмотрите, как мы превращаем боли бизнеса в оцифрованные результаты.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {data.painsAndSolutions.map((item, idx) => (
                <div
                  key={idx}
                  className="reveal relative bg-paper border border-line-blue/60 rounded-[32px] p-8 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:rotate-[0.3deg] hover:shadow-[12px_12px_0_var(--coral-light)] dark:hover:shadow-[12px_12px_0_rgba(255,107,107,0.15)] group"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {/* Notebook sheet grid background */}
                  <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id={`grid-pattern-${idx}`} width="18" height="18" patternUnits="userSpaceOnUse">
                          <path d="M 18 0 L 0 0 0 18" fill="none" stroke="currentColor" strokeWidth="0.8" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#grid-pattern-${idx})`} />
                    </svg>
                  </div>

                  <div className="flex flex-col gap-6 relative z-10 text-left h-full">
                    {/* Pain block */}
                    <div className="flex gap-4 items-start">
                      <span className="w-6 h-6 rounded-full bg-red-500/10 dark:bg-red-500/20 flex items-center justify-center shrink-0 text-red-500 font-bold text-[10px] mt-1 select-none">
                        ✕
                      </span>
                      <div>
                        <span className="font-heading text-[9px] font-extrabold tracking-widest text-red-500/80 uppercase block mb-1 select-none">
                          Проблема / Боль
                        </span>
                        <p className="font-body text-pencil text-sm sm:text-[15px] leading-relaxed font-medium">
                          {item.pain}
                        </p>
                      </div>
                    </div>

                    {/* Dotted separator */}
                    <div className="border-t border-dashed border-line-blue/80 dark:border-white/10 my-1" />

                    {/* Solution block */}
                    <div className="flex gap-4 items-start mt-auto">
                      <span className="w-6 h-6 rounded-full bg-mint/10 dark:bg-mint/20 flex items-center justify-center shrink-0 text-mint font-bold text-[10px] mt-1 select-none">
                        ✓
                      </span>
                      <div>
                        <span className="font-heading text-[9px] font-extrabold tracking-widest text-mint uppercase block mb-1 select-none">
                          Решение от traffic63
                        </span>
                        <p className="font-body text-ink-dark font-semibold text-sm sm:text-[15px] leading-relaxed">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. TARIFFS SECTION ── */}
        <section className="relative py-20 md:py-28 border-b border-line-blue">
          <div className="container mx-auto px-5 md:px-10">
            <div className="max-w-3xl mb-16 reveal">
              <span className="section-label select-none">✦ тарифные планы</span>
              <h2 className="section-title">Выберите формат работы</h2>
              <p className="font-body text-base text-pencil leading-relaxed max-w-[620px] text-left">
                Мы предлагаем прозрачное ценообразование и гибкие форматы работы в зависимости от масштаба и задач вашего бизнеса.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
              {data.tariffs.map((tariff, idx) => (
                <div
                  key={idx}
                  className="reveal flex"
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div
                    className={`relative w-full bg-paper-dark/60 border rounded-[32px] overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl group ${
                      tariff.recommended 
                        ? "border-coral shadow-md shadow-coral/5" 
                        : "border-line-blue/60"
                    }`}
                  >
                    {/* Top Accent bar */}
                    <div 
                      className={`h-2.5 w-full shrink-0 ${
                        tariff.recommended ? "bg-coral" : "bg-line-blue/40"
                      }`} 
                    />

                    {/* Pop badge */}
                    {tariff.recommended && (
                      <div className="absolute top-6 right-6 font-heading text-[9px] font-black tracking-widest text-white bg-coral px-3.5 py-1.5 rounded-full select-none shadow-sm shadow-coral/25 uppercase">
                        🔥 Популярно
                      </div>
                    )}

                    <div className="p-8 md:p-10 flex flex-col flex-grow text-left">
                      {/* Icon + Title */}
                      <div className="flex items-center gap-5 mb-6">
                        <div className={`w-14 h-14 rounded-2xl border border-line-blue/50 flex items-center justify-center shrink-0 bg-paper`}>
                          <Image
                            src={getTariffIcon(idx)}
                            alt={tariff.name}
                            width={34}
                            height={34}
                            className="object-contain hover:scale-105 transition-transform duration-700 dark-theme-image"
                          />
                        </div>
                        <div>
                          <h3 className="font-heading text-lg font-bold text-ink-dark leading-tight">
                            {tariff.name}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="font-body text-pencil text-sm leading-relaxed mb-6 min-h-[60px]">
                        {tariff.description}
                      </p>

                      {/* Features */}
                      <ul className="flex flex-col gap-3.5 mb-8 flex-grow">
                        {tariff.features.map((feature, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-3 text-sm text-ink-dark font-medium leading-tight"
                          >
                            <span className="w-5 h-5 rounded-full bg-mint/10 dark:bg-mint/20 text-mint flex items-center justify-center shrink-0 mt-0.5 select-none">
                              <svg width="9" height="7" viewBox="0 0 10 8" fill="none">
                                <path
                                  d="M1 4L3.5 6.5L9 1.5"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Price & CTA */}
                      <div className="border-t border-line-blue/60 pt-6 flex items-center justify-between gap-4 mt-auto">
                        <div>
                          <span className="text-[9px] font-extrabold text-coral uppercase tracking-wider block mb-1">
                            {tariff.period === "месяц" ? "ежемесячно" : "за проект"}
                          </span>
                          <span className="font-heading text-2xl font-black text-ink-dark tracking-tight leading-none">
                            {tariff.price}
                          </span>
                        </div>

                        <button
                          onClick={() => handleTariffSelect(tariff.name)}
                          className={`inline-flex items-center gap-1.5 font-body font-extrabold text-xs uppercase tracking-widest py-3.5 px-6 rounded-full shadow-md transition-all duration-300 cursor-pointer select-none ${
                            tariff.recommended
                              ? "bg-coral text-white shadow-coral/20 hover:bg-coral-dark hover:shadow-coral/30"
                              : "bg-paper border border-line-blue hover:bg-line-blue/20 hover:border-pencil"
                          }`}
                        >
                          <span>Выбрать</span>
                          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="shrink-0">
                            <path
                              d="M3 8h10M9 4l4 4-4 4"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. ROADMAP SECTION ── */}
        <section className="relative py-20 md:py-28 bg-paper-dark/30 border-b border-line-blue">
          <div className="container mx-auto px-5 md:px-10">
            <div className="max-w-3xl mb-16 reveal">
              <span className="section-label select-none">✦ процесс работы</span>
              <h2 className="section-title">Как будет строиться работа</h2>
              <p className="font-body text-base text-pencil leading-relaxed max-w-[620px] text-left">
                Мы выстроили прозрачную поэтапную систему сотрудничества. На каждом шаге вы четко понимаете действия команды и получаете оцифрованный артефакт.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.roadmap.map((step, idx) => (
                <div
                  key={idx}
                  className="reveal flex"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="relative w-full bg-paper border border-line-blue/60 rounded-[32px] p-6 flex flex-col justify-between hover:shadow-md transition-shadow text-left">
                    <div>
                      <span className="font-heading text-4xl font-black text-coral/15 dark:text-coral/5 block mb-4 select-none">
                        {step.step}
                      </span>
                      <h3 className="font-heading text-[16px] font-bold text-ink-dark mb-2.5">
                        {step.title}
                      </h3>
                      <p className="font-body text-pencil text-xs sm:text-sm leading-relaxed mb-6">
                        {step.description}
                      </p>
                    </div>

                    <div className="bg-paper-dark border border-line-blue/40 rounded-2xl p-4 mt-auto select-none">
                      <span className="font-heading text-[8px] font-extrabold tracking-widest text-pencil uppercase block mb-1 opacity-70">
                        Артефакт на выходе:
                      </span>
                      <span className="font-body text-xs font-bold text-ink-dark leading-tight block">
                        {step.artifact}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. FAQ SECTION ── */}
        <section className="relative py-20 md:py-28 border-b border-line-blue">
          <div className="container mx-auto px-5 md:px-10">
            <div className="max-w-3xl mb-16 reveal">
              <span className="section-label select-none">✦ ответы на вопросы</span>
              <h2 className="section-title">Часто задаваемые вопросы</h2>
            </div>

            <div className="max-w-4xl mx-auto flex flex-col gap-4">
              {data.faq.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="reveal border border-line-blue/60 rounded-2xl overflow-hidden bg-paper transition-colors duration-300"
                    style={{ transitionDelay: `${idx * 80}ms` }}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer outline-none select-none"
                    >
                      <h3 className="font-heading text-sm sm:text-base font-bold text-ink-dark pr-6 leading-snug">
                        {item.question}
                      </h3>
                      <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full border border-line-blue hover:border-coral transition-colors">
                        <svg
                          className={`w-3 h-3 transition-transform duration-300 text-ink-dark ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-6 md:px-6 md:pb-7 text-left">
                            <div className="border-t border-line-blue/30 pt-4">
                              <p className="font-body text-pencil text-sm sm:text-[15px] leading-relaxed font-medium">
                                {item.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 6. CTA / CONTACT SECTION ── */}
        <section className="relative py-20 md:py-28 bg-paper overflow-hidden" id="contact">
          <div className="container mx-auto px-5 md:px-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Side text */}
              <div className="col-span-1 lg:col-span-6 flex flex-col items-start text-left reveal">
                <span className="section-label select-none">✦ обсудим проект</span>
                
                <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-ink-dark tracking-tighter uppercase mb-6">
                  Готовы получить <br />
                  <span className="font-serif italic text-coral font-normal lowercase tracking-normal">поток клиентов?</span>
                </h2>

                <p className="font-body text-base sm:text-lg text-pencil leading-relaxed font-medium mb-10 max-w-lg">
                  Заполните форму справа. Наш специалист свяжется с вами в течение 15 минут для обсуждения деталей, аудита и расчета медиаплана.
                </p>

                {/* Decorative pointing arrow & handwritten tip */}
                <div className="hidden lg:flex items-center gap-4 mt-4 select-none relative w-full h-[60px]">
                  <span className="font-handwritten text-xl text-coral rotate-[-4deg] absolute left-0 top-0">
                    ✦ Ответим за 15 минут!
                  </span>
                  
                  {/* Decorative sketch arrow */}
                  <svg className="w-24 h-12 text-coral absolute left-[220px] top-1 rotate-12" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 20 C40 10, 60 40, 85 25" />
                    <path d="M75 15 L85 25 L75 35" />
                  </svg>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="col-span-1 lg:col-span-6 reveal" style={{ transitionDelay: "200ms" }}>
                <div className="relative bg-paper-dark border border-line-blue rounded-[36px] p-6 sm:p-10 shadow-lg">
                  {/* Notepad sheet line pattern in background of form card */}
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <line x1="0" y1="20" x2="100%" y2="20" stroke="currentColor" strokeWidth="1" />
                      <line x1="0" y1="40" x2="100%" y2="40" stroke="currentColor" strokeWidth="1" />
                      <line x1="0" y1="60" x2="100%" y2="60" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </div>

                  <ContactForm defaultMessage={selectedTariff} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
