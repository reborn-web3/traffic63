"use client";

import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export const AdToLeadMockup = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-10%" });
  const shouldReduceMotion = useReducedMotion();
  const [pulseStep, setPulseStep] = useState(0);

  // Cycle animation steps: 0 = idle/ad, 1 = click & beam stream, 2 = lead pops in Telegram
  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      setPulseStep((prev) => (prev + 1) % 3);
    }, 3500);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[520px] aspect-[4/3.8] sm:aspect-square flex items-center justify-center select-none py-2"
      style={{ perspective: "1200px" }}
    >
      {/* Ambient background glow */}
      <div
        className="absolute -inset-4 sm:-inset-8 bg-gradient-to-tr from-amber-500/10 via-blue-500/10 to-indigo-500/15 rounded-[40px] blur-3xl -z-10 pointer-events-none opacity-70"
        aria-hidden="true"
      />

      {/* 3D Isometric Canvas */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [-6, 6, -6],
                rotateX: [10, 14, 10],
                rotateY: [-8, -12, -8],
              }
        }
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "easeInOut",
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full flex flex-col items-center justify-center"
      >
        {/* ── LAYER 1: YANDEX DIRECT SEARCH AD CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
          style={{ transform: "translateZ(30px)" }}
          className="relative w-[92%] sm:w-[88%] rounded-2xl bg-paper dark:bg-paper-dark border border-line-blue/80 dark:border-white/10 shadow-[0_12px_35px_rgba(15,23,42,0.12)] p-3.5 sm:p-4 z-20 transition-all duration-300"
        >
          {/* Top meta: Yandex Direct tag */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="bg-[#FFCC00] text-black font-extrabold text-[9px] px-1.5 py-0.2 rounded font-mono uppercase tracking-wider">
                Реклама
              </span>
              <span className="font-mono text-[10px] text-pencil dark:text-pencil truncate">
                td-rtc.ru / кабель-оптом
              </span>
            </div>

            {/* Rank badge */}
            <div className="flex items-center gap-1 text-[9px] font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">
              <span>★ 1-е место в поиске</span>
            </div>
          </div>

          {/* Ad Title */}
          <h4 className="font-heading font-extrabold text-xs sm:text-sm text-ink-blue dark:text-blue-400 leading-snug hover:underline cursor-pointer">
            Оптический кабель в Самаре — Со склада от завода
          </h4>

          {/* Ad Description */}
          <p className="font-body text-[10px] sm:text-[11px] text-pencil mt-1 leading-snug">
            В наличии от 500 м. Доставка по РФ за 24ч. Оптовый прайс-лист от производителя.
          </p>

          {/* Sitelinks (Быстрые ссылки Яндекса) */}
          <div className="mt-2.5 pt-2 border-t border-line-blue/50 dark:border-white/10 flex items-center gap-2 overflow-hidden text-[9px] sm:text-[10px] text-ink-blue dark:text-blue-400 font-semibold">
            <span className="bg-ink-blue/5 dark:bg-blue-400/10 px-2 py-0.5 rounded">📦 Прайс-лист</span>
            <span className="bg-ink-blue/5 dark:bg-blue-400/10 px-2 py-0.5 rounded">⚡ Склад Самара</span>
            <span className="hidden sm:inline bg-ink-blue/5 dark:bg-blue-400/10 px-2 py-0.5 rounded">🛡 Гарантия 5 лет</span>
          </div>

          {/* Click Ripple / Pulse */}
          <AnimatePresence>
            {pulseStep >= 1 && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0.8 }}
                animate={{ scale: 1.04, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0 rounded-2xl border-2 border-blue-500 pointer-events-none"
              />
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── 3D CONNECTING STREAM (ENERGY BEAM) ── */}
        <div className="relative w-full h-10 sm:h-12 flex items-center justify-center my-1 z-10">
          <svg viewBox="0 0 100 60" className="w-20 h-full overflow-visible" fill="none">
            {/* Dashed background path */}
            <path
              d="M 50 0 L 50 60"
              stroke="var(--line-blue)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* Glowing animated laser pulse */}
            <motion.path
              d="M 50 0 L 50 60"
              stroke="#2563eb"
              strokeWidth="3"
              strokeLinecap="round"
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      pathLength: [0, 1],
                      pathOffset: [0, 1],
                      opacity: [0, 1, 0],
                    }
              }
              transition={{
                repeat: Infinity,
                duration: 2.2,
                ease: "easeInOut",
              }}
            />

            {/* Conversion indicator badge in the middle */}
            <g transform="translate(50, 30)">
              <rect x="-35" y="-9" width="70" height="18" rx="9" fill="var(--paper)" stroke="var(--ink-blue)" strokeWidth="1" />
              <text x="0" y="3" textAnchor="middle" fill="var(--ink-blue)" fontSize="8" fontWeight="bold" fontFamily="sans-serif">
                КЛИК ➔ ЛИД
              </text>
            </g>
          </svg>
        </div>

        {/* ── LAYER 2: TELEGRAM / CRM LEAD NOTIFICATION CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ transform: "translateZ(75px)" }}
          className="relative w-[95%] sm:w-[90%] rounded-2xl bg-paper dark:bg-slate-900 border-2 border-emerald-500/40 shadow-[0_16px_45px_rgba(16,185,129,0.15)] p-3.5 sm:p-4 z-30 transition-transform duration-300 hover:scale-[1.02]"
        >
          {/* Telegram Header */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-line-blue/60 dark:border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#0088cc] flex items-center justify-center text-white text-xs shadow-sm">
                ✈️
              </div>
              <div>
                <span className="font-heading text-[11px] sm:text-xs font-bold text-ink-dark dark:text-white block leading-tight">
                  Telegram Bot • Traffic63 Leads
                </span>
                <span className="text-[8px] sm:text-[9px] text-emerald-600 dark:text-emerald-400 font-semibold">
                  ● Онлайн • Мгновенно
                </span>
              </div>
            </div>

            <span className="text-[9px] font-mono text-pencil">
              только что
            </span>
          </div>

          {/* Lead Details */}
          <div className="space-y-1 sm:space-y-1.5 text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-xs">🔥</span>
              <span className="font-heading font-extrabold text-[11px] sm:text-xs text-ink-dark dark:text-white">
                Новая горячая заявка с сайта!
              </span>
            </div>

            <div className="bg-paper-dark dark:bg-white/5 rounded-xl p-2 sm:p-2.5 space-y-1 text-[10px] sm:text-[11px] font-body">
              <div className="flex items-center justify-between">
                <span className="text-pencil">Клиент:</span>
                <span className="font-bold text-ink-dark dark:text-white">Алексей (ООО «СвязьСтрой»)</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-pencil">Телефон:</span>
                <span className="font-mono font-bold text-ink-blue dark:text-blue-400">+7 (927) 345-**-**</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-pencil">Интересует:</span>
                <span className="font-semibold text-ink-dark dark:text-white">Дроп-кабель ADSS (1 500 м)</span>
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-line-blue/40 dark:border-white/10">
                <span className="text-pencil font-medium">Сумма заказа:</span>
                <span className="font-heading font-extrabold text-xs text-emerald-600 dark:text-emerald-400">185 000 ₽</span>
              </div>
            </div>

            {/* CRM Status Tag */}
            <div className="flex items-center justify-between pt-1 text-[9px] sm:text-[10px] text-pencil font-medium">
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Сделка создана в amoCRM
              </span>
              <span className="font-mono text-pencil">CPL: 340 ₽</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
