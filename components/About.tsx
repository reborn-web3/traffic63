"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

const LOG_MESSAGES = [
  "system://initializing_funnel_scan...",
  "analytics://traffic_stream_connected",
  "optimization://roas_target_active",
  "system://cpa_reduction_mode_enabled",
  "analytics://attribution_model_synced",
  "optimization://scaling_funnel_node_02",
  "system://all_systems_nominal"
];

const DashboardVisual = () => {
  const [logs, setLogs] = useState<{ id: number; text: string }[]>([]);
  const [activeBar, setActiveBar] = useState<number>(0);

  // Rotate log messages
  useEffect(() => {
    let logId = 0;
    setLogs([{ id: logId++, text: LOG_MESSAGES[0] }]);
    let count = 1;
    const interval = setInterval(() => {
      setLogs((prev) => {
        const nextLogs = [...prev, { id: logId++, text: LOG_MESSAGES[count % LOG_MESSAGES.length] }];
        if (nextLogs.length > 3) nextLogs.shift();
        return nextLogs;
      });
      count++;
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Equalizer bar animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBar(Math.floor(Math.random() * 8));
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full aspect-[4/3] bg-paper-dark border border-line-blue rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-500 select-none">
      {/* Blueprint background grid */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dashboard-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" className="text-line-blue" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dashboard-grid)" />
      </svg>

      {/* Header */}
      <div className="flex items-center justify-between border-b border-line-blue pb-4 relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
          <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
          <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
        </div>
        <span className="font-heading text-[9px] font-extrabold tracking-widest text-pencil uppercase">
          traffic63_performance.hub
        </span>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-3 gap-2 py-4 border-b border-line-blue relative z-10">
        <div className="text-left">
          <span className="font-heading text-[8px] font-extrabold tracking-widest text-pencil uppercase block">ROAS</span>
          <span className="font-heading text-base sm:text-lg font-black text-ink-dark block mt-0.5">
            +340%
          </span>
        </div>
        <div className="text-left border-l border-line-blue pl-3">
          <span className="font-heading text-[8px] font-extrabold tracking-widest text-pencil uppercase block">ROI</span>
          <span className="font-heading text-base sm:text-lg font-black text-ink-dark block mt-0.5">
            до 500%
          </span>
        </div>
        <div className="text-left border-l border-line-blue pl-3">
          <span className="font-heading text-[8px] font-extrabold tracking-widest text-pencil uppercase block">CPA</span>
          <span className="font-heading text-base sm:text-lg font-black text-coral block mt-0.5">
            -25%
          </span>
        </div>
      </div>

      {/* Graph Area */}
      <div className="flex-1 relative min-h-0 py-4 flex items-center justify-center">
        {/* Animated Line Chart SVG */}
        <svg viewBox="0 0 300 120" className="w-full h-full overflow-visible" fill="none">
          {/* Grid lines */}
          <line x1="0" y1="30" x2="300" y2="30" stroke="var(--line-blue)" strokeWidth="0.75" strokeDasharray="3 3" />
          <line x1="0" y1="60" x2="300" y2="60" stroke="var(--line-blue)" strokeWidth="0.75" strokeDasharray="3 3" />
          <line x1="0" y1="90" x2="300" y2="90" stroke="var(--line-blue)" strokeWidth="0.75" strokeDasharray="3 3" />

          {/* Area under curve */}
          <motion.path
            d="M 0 110 Q 50 110, 80 80 T 160 50 T 240 70 T 300 20 L 300 120 L 0 120 Z"
            fill="url(#area-gradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
          />

          <defs>
            <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--coral)" />
              <stop offset="100%" stopColor="var(--coral)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Main Chart Curve */}
          <motion.path
            d="M 0 110 Q 50 110, 80 80 T 160 50 T 240 70 T 300 20"
            stroke="var(--coral)"
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Pulse target node */}
          <motion.circle
            cx="300"
            cy="20"
            r="6"
            fill="var(--coral)"
            animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          />
          <circle cx="300" cy="20" r="3" fill="var(--paper)" />
        </svg>

        {/* Floating live badge */}
        <div className="absolute top-2 right-2 bg-green-500/10 border border-green-500/20 rounded-full px-2 py-0.5 flex items-center gap-1 select-none">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
          </span>
          <span className="font-heading text-[8px] font-bold text-green-500 uppercase tracking-wider">LIVE</span>
        </div>
      </div>

      {/* Terminal Log Console */}
      <div className="border-t border-line-blue pt-4 flex flex-col justify-end min-h-[72px] bg-paper/30 p-3 rounded-xl border border-line-blue/50 relative z-10">
        <div className="flex flex-col gap-1 min-h-[48px] justify-end">
          <AnimatePresence mode="popLayout">
            {logs.map((log, index) => (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1 - (logs.length - 1 - index) * 0.35, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="font-mono text-[9px] text-pencil flex items-center gap-1.5 leading-none"
              >
                <span className="text-coral opacity-80">$</span>
                <span>{log.text}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Blueprint labels */}
      <div className="absolute bottom-2 left-4 font-heading text-[8px] font-bold tracking-widest text-pencil/40 uppercase">
        SYS // PERF_MONITOR_v3.2
      </div>
      <div className="absolute bottom-2 right-4 font-heading text-[8px] font-bold tracking-widest text-pencil/40 uppercase">
        STATUS // ACTIVE
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <section id="about" className="relative bg-paper py-24 md:py-32 overflow-hidden border-t border-line-blue">
      <div className="container mx-auto px-5 md:px-10 relative z-10">
        
        {/* Typographic Headline matching Hero */}
        <Reveal delay={0.1}>
          <div className="max-w-[1100px] text-left mb-16">
            <span className="font-heading text-[10px] font-extrabold tracking-widest text-coral uppercase mb-6 block select-none">
              ✦ О КОМАНДЕ
            </span>
            <h2 className="font-heading text-4xl sm:text-7xl lg:text-[90px] font-black leading-[0.9] text-ink-dark tracking-tighter uppercase select-none">
              Цифры и <br />
              <span className="font-serif italic text-coral lowercase font-normal tracking-normal">результат.</span>
            </h2>
          </div>
        </Reveal>

        {/* Separator and Split Content Grid */}
        <div className="border-t border-line-blue pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Interactive Digital Analytics Dashboard */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <Reveal delay={0.2} className="w-full">
              <DashboardVisual />
            </Reveal>
          </div>

          {/* Right Column: Editorial Text & manifesto */}
          <div className="lg:col-span-6 flex flex-col justify-between text-left">
            <div>
              <Reveal delay={0.2}>
                <h3 className="font-heading text-2xl font-extrabold text-ink-dark mb-6">
                  Команда, которая живёт вашим ростом
                </h3>
              </Reveal>
              
              <div className="space-y-6">
                <Reveal delay={0.3}>
                  <p className="font-body text-lg text-pencil leading-relaxed">
                    <strong>traffic63</strong> — это не просто агентство. Это команда опытных маркетологов, аналитиков и инженеров, которые помешаны на performance-показателях. Мы верим, что в современном digital каждый рубль бюджета должен приносить измеримый и масштабируемый результат.
                  </p>
                </Reveal>

                <Reveal delay={0.4}>
                  <p className="font-body text-lg text-pencil leading-relaxed">
                    Мы глубоко погружаемся в специфику вашего бизнеса, выстраиваем прозрачную аналитику от клика до сделки и создаем решения, готовые к масштабированию. Без пустых обещаний и размытых отчетов.
                  </p>
                </Reveal>
              </div>

              {/* Operating Principles */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Reveal delay={0.5}>
                  <div className="flex items-start gap-3">
                    <span className="text-coral text-lg mt-0.5">✦</span>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-ink-dark uppercase tracking-wider mb-1">Прозрачность</h4>
                      <p className="font-body text-xs text-pencil">Доступ ко всем кабинетам, сквозная аналитика и ежедневные подробные отчеты.</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.6}>
                  <div className="flex items-start gap-3">
                    <span className="text-coral text-lg mt-0.5">✦</span>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-ink-dark uppercase tracking-wider mb-1">Фокус на ROI</h4>
                      <p className="font-body text-xs text-pencil">Ориентируемся на чистую прибыль клиентов и окупаемость рекламных инвестиций.</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Editorial manifesto quote */}
            <Reveal delay={0.7} className="mt-12 lg:mt-0 pt-8 border-t border-line-blue">
              <p className="font-serif italic text-xl md:text-2xl text-ink-blue leading-relaxed">
                «Мы не тратим ваш рекламный бюджет — мы инвестируем его в кратный рост вашего бизнеса.»
              </p>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
