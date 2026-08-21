"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export const SmmMockup = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-10%" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[580px] flex flex-col items-center select-none py-2"
    >
      {/* Ambient background glow */}
      <div
        className="absolute -inset-2 sm:-inset-6 bg-gradient-to-tr from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-[36px] blur-3xl -z-10 pointer-events-none opacity-60"
        aria-hidden="true"
      />

      {/* Main Browser Card */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full rounded-2xl sm:rounded-[24px] bg-paper dark:bg-paper-dark border border-line-blue/60 dark:border-white/10 shadow-[0_16px_45px_rgba(15,23,42,0.08)] overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-[0_24px_55px_rgba(37,99,235,0.12)]"
      >
        {/* Safari / Browser Header */}
        <div className="bg-paper-dark/95 dark:bg-slate-900/90 backdrop-blur-md px-3.5 sm:px-4 py-2.5 sm:py-3 border-b border-line-blue/40 dark:border-white/10 flex items-center justify-between gap-2 shrink-0 z-20">
          {/* Left: Window Buttons */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/40 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/40 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/40 inline-block" />
          </div>

          {/* Centered URL Search Pill */}
          <div className="flex-1 max-w-[220px] sm:max-w-[260px] mx-auto bg-paper dark:bg-paper/10 px-3 py-1 rounded-full border border-line-blue/40 dark:border-white/10 flex items-center justify-center gap-1.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]">
            <svg className="w-3 h-3 text-pencil/70 dark:text-pencil shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="font-mono text-[10px] sm:text-[11px] text-pencil dark:text-pencil font-medium tracking-tight truncate">
              vk.com/tomatis_samara
            </span>
          </div>

          {/* Right: Balance spacer */}
          <div className="w-[42px] shrink-0" />
        </div>

        {/* Content Viewport with generous vertical space */}
        <div className="relative w-full bg-[#F4F6FB] dark:bg-slate-950 p-3.5 sm:p-4 min-h-[305px] sm:min-h-[335px] flex items-center">
          {/* Layout: Left Post Card (7 cols) + Right 3 Metrics (5 cols) */}
          <div className="w-full grid grid-cols-12 gap-3 sm:gap-3.5 items-stretch">
            {/* Left: Native VK Post Card */}
            <motion.div
              animate={{ y: [-2, 2, -2] }}
              transition={{ repeat: shouldReduceMotion ? 0 : Infinity, duration: 6, ease: "easeInOut" }}
              className="col-span-7 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-line-blue/40 dark:border-white/10 shadow-[0_4px_20px_rgba(15,23,42,0.04)] p-2.5 sm:p-3 flex flex-col justify-between"
            >
              {/* Header: Avatar + Community Name */}
              <div className="flex items-center justify-between shrink-0 mb-1">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border border-line-blue/30 dark:border-white/10 shrink-0">
                    <img
                      src="/images/cases/tomatis-avatar.png"
                      alt="Томатис Самара"
                      className="w-full h-full object-cover block"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-heading font-bold text-[9.5px] sm:text-[10.5px] text-ink-dark dark:text-white leading-tight truncate">
                      Метод Томатис® Самара
                    </span>
                    <span className="text-[7.5px] sm:text-[8px] text-pencil dark:text-pencil/70 leading-tight">
                      логопед Светикова О.А. · 8 апр
                    </span>
                  </div>
                </div>
                <span className="text-pencil/50 text-[10px]">···</span>
              </div>

              {/* Photo: standard robust HTML img */}
              <div className="w-full h-[88px] sm:h-[102px] my-1 rounded-xl overflow-hidden border border-line-blue/20 dark:border-white/5 shadow-2xs shrink-0">
                <img
                  src="/images/cases/tomatis-post-photo.png"
                  alt="Занятия по методу TOMATIS"
                  className="w-full h-full object-cover block"
                  loading="eager"
                />
              </div>

              {/* Title & Category */}
              <div className="text-left shrink-0 my-0.5">
                <h4 className="font-heading font-bold text-[9px] sm:text-[10px] text-ink-dark dark:text-white leading-tight truncate">
                  Как проходят занятия по методу TOMATIS®
                </h4>
                <p className="text-[7.5px] sm:text-[8px] text-pencil dark:text-pencil/70 leading-tight truncate">
                  Статья · Центр развития речи и слуха
                </p>
              </div>

              {/* Reactions Bar with guaranteed padding */}
              <div className="pt-1.5 mt-1 border-t border-line-blue/30 dark:border-white/10 flex items-center justify-between text-[8.5px] sm:text-[9.5px] text-pencil shrink-0">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="flex items-center gap-1 font-semibold text-coral">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-coral" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    12
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-pencil" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.75.75 0 01-.817-.79 5.86 5.86 0 00.75-2.529C3.896 16.146 3 14.18 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                    4
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-pencil" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                    2
                  </span>
                </div>
                <span className="font-mono text-[8px] sm:text-[8.5px] text-pencil/70">
                  👁 1.4K
                </span>
              </div>
            </motion.div>

            {/* Right: SMM Performance Metrics (3 Glass Cards) */}
            <div className="col-span-5 flex flex-col justify-between gap-2">
              {/* Metric 1 */}
              <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-line-blue/40 dark:border-white/10 rounded-2xl p-2.5 sm:p-3 shadow-[0_4px_16px_rgba(15,23,42,0.03)] flex flex-col justify-center transition-all hover:border-ink-blue/30">
                <span className="text-[8.5px] sm:text-[9.5px] text-pencil font-medium tracking-wide">Охват поста</span>
                <span className="font-heading font-extrabold text-xs sm:text-sm text-ink-dark dark:text-white mt-0.5 flex items-center gap-1.5">
                  1 453 <span className="text-emerald-500 text-[9.5px] sm:text-[10.5px] font-bold">↑ +14%</span>
                </span>
              </div>

              {/* Metric 2 */}
              <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-line-blue/40 dark:border-white/10 rounded-2xl p-2.5 sm:p-3 shadow-[0_4px_16px_rgba(15,23,42,0.03)] flex flex-col justify-center transition-all hover:border-coral/30">
                <span className="text-[8.5px] sm:text-[9.5px] text-pencil font-medium tracking-wide">Новые заявки</span>
                <span className="font-heading font-extrabold text-xs sm:text-sm text-coral mt-0.5 flex items-center gap-1.5">
                  2 заявки <span className="text-emerald-500 text-[9.5px] sm:text-[10.5px] font-bold">● CRM</span>
                </span>
              </div>

              {/* Metric 3 */}
              <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-line-blue/40 dark:border-white/10 rounded-2xl p-2.5 sm:p-3 shadow-[0_4px_16px_rgba(15,23,42,0.03)] flex flex-col justify-center transition-all hover:border-ink-blue/30">
                <span className="text-[8.5px] sm:text-[9.5px] text-pencil font-medium tracking-wide">Вовлеченность (ER)</span>
                <span className="font-heading font-extrabold text-xs sm:text-sm text-ink-dark dark:text-white mt-0.5 flex items-center gap-1.5">
                  7.5% <span className="text-emerald-500 text-[9.5px] sm:text-[10.5px] font-bold">↑ +1.2%</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
