"use client";

import Image from "next/image";

export const AnalyticsMockup = () => {
  return (
    <div className="relative w-full max-w-[580px] flex flex-col items-center select-none py-2">
      {/* Ambient background glow */}
      <div
        className="absolute -inset-2 sm:-inset-6 bg-gradient-to-tr from-amber-500/10 via-blue-500/10 to-indigo-500/10 rounded-[36px] blur-3xl -z-10 pointer-events-none opacity-60"
        aria-hidden="true"
      />

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
          <div className="flex-1 max-w-[200px] sm:max-w-[240px] mx-auto bg-paper dark:bg-paper/10 px-3 py-1 rounded-full border border-line-blue/60 dark:border-white/10 flex items-center justify-center gap-1.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]">
            <svg className="w-3 h-3 text-pencil/70 dark:text-pencil shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="font-mono text-[10px] sm:text-[11px] text-pencil dark:text-pencil font-medium tracking-tight truncate">
              metrika.yandex.ru
            </span>
          </div>

          {/* Right: Balance spacer */}
          <div className="w-[42px] shrink-0" />
        </div>

        {/* Browser Content / High-Res Real Metrika Screenshot */}
        <div
          className="relative w-full bg-white dark:bg-slate-950 overflow-hidden flex items-center justify-center"
          style={{ aspectRatio: "1024 / 550" }}
        >
          <Image
            src="/images/cases/yandex-metrika-v2.png"
            alt="Отчёт Яндекс.Метрики для td-rtc.ru"
            fill
            sizes="(max-width: 768px) 100vw, 580px"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            priority
          />
        </div>
      </div>
    </div>
  );
};
