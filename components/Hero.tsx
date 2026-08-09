"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { TypewriterWord } from "./TypewriterWord";
import { useEffect, useState, useRef } from "react";

/* ── Animated Counter ────────────────────────────────────────────── */
const AnimatedNumber = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    if (shouldReduceMotion) {
      setCount(target);
      return;
    }
    const duration = 1600;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, target]);

  return (
    <span ref={ref} className="hero-dashboard__metric-value">
      {count.toLocaleString("ru-RU")}
      {count === target && suffix && <span className="hero-dashboard__metric-suffix">{suffix}</span>}
    </span>
  );
};

/* ── Trust badges data ───────────────────────────────────────────── */
const trustBadges = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "PAGESPEED: 95+",
    subtitle: "Идеальная скорость работы",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "75% КЛИЕНТОВ",
    subtitle: "Возвращаются к нам снова",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "ГАРАНТИЯ РЕЗУЛЬТАТА",
    subtitle: "Делаем, как для себя",
  },
];

/* ── Stagger animation variants ──────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const dashboardVariants = {
  hidden: { opacity: 0, x: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay: 0.35,
    },
  },
} as const;

/* ── Dashboard Component (1:1 Pixel-Perfect with Screenshot 1) ───── */
const HeroDashboard = () => (
  <motion.div
    className="hero-dashboard"
    variants={dashboardVariants}
    initial="hidden"
    animate="visible"
  >
    {/* Background Glow & Wireframe Circles */}
    <div className="hero-dashboard-glow" aria-hidden="true">
      <svg viewBox="0 0 600 600" className="hero-dashboard-glow__circles">
        <circle cx="330" cy="240" r="170" stroke="rgba(37, 99, 235, 0.15)" strokeWidth="1" fill="none" />
        <circle cx="330" cy="240" r="260" stroke="rgba(37, 99, 235, 0.08)" strokeWidth="1" fill="none" />
        <circle cx="330" cy="240" r="350" stroke="rgba(37, 99, 235, 0.04)" strokeWidth="1" fill="none" />
      </svg>
    </div>

    {/* 3D Isometric Scene container holding Main Card + 3 Partner Cards */}
    <div className="hero-dashboard-3d-scene">
      {/* Main White Dashboard Card */}
      <div className="hero-dashboard__card">
        {/* Graph Header: ONLY Title and +127% on the left, NO period pill in header! */}
        <div className="hero-dashboard__graph-header">
          <span className="hero-dashboard__graph-title">Рост конверсий</span>
          <span className="hero-dashboard__graph-badge">+127%</span>
        </div>

        {/* SVG Graph with Wavy Curve & bottom-right label */}
        <div className="hero-dashboard__graph">
          <svg viewBox="0 0 440 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-dashboard__graph-svg">
            {/* Grid horizontal lines */}
            <line x1="0" y1="30" x2="440" y2="30" stroke="var(--line-blue)" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
            <line x1="0" y1="70" x2="440" y2="70" stroke="var(--line-blue)" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
            <line x1="0" y1="110" x2="440" y2="110" stroke="var(--line-blue)" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />

            {/* Area gradient */}
            <defs>
              <linearGradient id="heroGraphGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Area fill */}
            <path
              d="M 10 105 C 45 102, 70 95, 100 95 C 130 95, 150 106, 180 97 C 210 88, 230 75, 260 77 C 290 79, 310 63, 345 63 C 380 63, 405 40, 430 16 L 430 130 L 10 130 Z"
              fill="url(#heroGraphGradient)"
              className="hero-dashboard__graph-area"
            />

            {/* Smooth Wavy Line (no end dot, exactly as in Screenshot 1) */}
            <path
              d="M 10 105 C 45 102, 70 95, 100 95 C 130 95, 150 106, 180 97 C 210 88, 230 75, 260 77 C 290 79, 310 63, 345 63 C 380 63, 405 40, 430 16"
              stroke="#2563eb"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              className="hero-dashboard__graph-line"
            />
          </svg>

          {/* Period text at bottom right of the graph area */}
          <div className="hero-dashboard__graph-period-bottom">за 6 месяцев</div>
        </div>

        {/* 3 Metrics Cards inside Dashboard */}
        <div className="hero-dashboard__metrics">
          <div className="hero-dashboard__metric">
            <span className="hero-dashboard__metric-label">Трафик</span>
            <AnimatedNumber target={98650} />
            <span className="hero-dashboard__metric-change">+35%</span>
          </div>
          <div className="hero-dashboard__metric">
            <span className="hero-dashboard__metric-label">Конверсии</span>
            <AnimatedNumber target={2657} />
            <span className="hero-dashboard__metric-change">+127%</span>
          </div>
          <div className="hero-dashboard__metric">
            <span className="hero-dashboard__metric-label">ROI</span>
            <AnimatedNumber target={346} suffix="%" />
            <span className="hero-dashboard__metric-change">+89%</span>
          </div>
        </div>

        {/* Bottom tagline (nowrap so it NEVER splits to 2 lines!) */}
        <div className="hero-dashboard__tagline">
          Ваш бизнес + наши технологии = устойчивый рост
        </div>
      </div>

      {/* Vertical Column of 3 Partner Cards (side-by-side with main card, 0% overlap) */}
      <div className="hero-dashboard__partner-column">
        {/* Thin Blue Curved Connecting Arc Line Behind the Cards (exactly like Screenshot 1) */}
        <svg className="hero-partner-connector" viewBox="0 0 80 320" fill="none" aria-hidden="true">
          <path d="M 35 25 C 75 110, 75 210, 35 295" stroke="#3b82f6" strokeWidth="1.5" opacity="0.45" />
        </svg>

        {/* Card 1: Next.js */}
        <div className="hero-partner-card">
          <svg width="24" height="24" viewBox="0 0 128 128" fill="none" className="hero-partner-card__icon text-ink-dark dark:text-white">
            <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-7.4V43.6h15l46.2 68.7c14.2-11.8 23.2-29.2 23.2-48.3 0-35.3-28.7-64-64-64z" fill="currentColor" />
            <path d="M84.3 84.1l-6.8-10.1v-30.4h7.4v31.4l5.9 8.8-6.5.3z" fill="currentColor" />
          </svg>
          <div className="hero-partner-card__text">
            <span className="hero-partner-card__name">Сайты на Next.js</span>
            <span className="hero-partner-card__role">Кастомная разработка</span>
          </div>
        </div>

        {/* Card 2: VK & Yandex Direct */}
        <div className="hero-partner-card">
          <div className="flex items-center mr-3 relative">
            {/* VK (Top) */}
            <div className="relative z-10 flex items-center justify-center w-7 h-7 rounded-full bg-paper dark:bg-paper-dark shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-line-blue/20 dark:border-white/10">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#0077FF]">
                <path d="M13.682 17.5c-4.416 0-7.23-3.136-7.318-8.5h2.646c.058 3.86 1.83 5.42 3.221 5.76V9h2.518v3.293c1.36-.145 2.825-1.576 3.3-3.293h2.52c-.39 2.08-1.854 3.51-2.923 4.238 1.07.593 2.748 1.848 3.393 4.262h-2.734c-.5-1.636-1.802-2.882-3.556-3.05v3.05h-1.067z" />
              </svg>
            </div>
            {/* Yandex Direct (Bottom) */}
            <div className="relative z-0 -ml-2 flex items-center justify-center w-7 h-7 rounded-full bg-paper dark:bg-paper-dark shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-line-blue/20 dark:border-white/10 opacity-90">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF0000]">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
          </div>
          <div className="hero-partner-card__text">
            <span className="hero-partner-card__name">Реклама</span>
            <span className="hero-partner-card__role">VK & Яндекс Директ</span>
          </div>
        </div>

        {/* Card 3: SMM */}
        <div className="hero-partner-card">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hero-partner-card__icon text-[#E1306C]">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          <div className="hero-partner-card__text">
            <span className="hero-partner-card__name">SMM</span>
            <span className="hero-partner-card__role">Ведение соцсетей</span>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

/* ── Main Hero Component ─────────────────────────────────────────── */
export const Hero = () => {
  return (
    <section
      id="hero"
      className="hero-section relative bg-paper pt-28 pb-14 lg:pt-36 lg:pb-20 overflow-hidden"
    >
      <div className="container mx-auto px-5 md:px-10 relative z-10">
        {/* Two-column layout */}
        <div className="hero-grid">
          {/* Left column — Text */}
          <motion.div
            className="hero-text"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Headline */}
            <motion.h1 variants={itemVariants} className="hero-headline">
              <span className="hero-headline__main">ДЕЛАЕМ БИЗНЕС</span>
              <TypewriterWord
                words={["успешным", "заметным", "узнаваемым"]}
                className="hero-headline__accent"
              />
            </motion.h1>

            {/* Description */}
            <motion.p variants={itemVariants} className="hero-description">
              Берем маркетинг и IT на себя. От стильного сайта до стабильного потока заявок — делаем всё, чтобы ваш бизнес рос и приносил больше прибыли
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="hero-cta">
              <Link href="/contacts" className="hero-cta__primary">
                Обсудить проект
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right column — 3D Perspective Dashboard */}
          <div className="hero-dashboard-wrapper">
            <HeroDashboard />
          </div>
        </div>

        {/* Trust badges row (no divider line above, clean layout matching reference) */}
        <motion.div
          className="hero-trust"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          {trustBadges.map((badge, index) => (
            <div key={index} className="hero-trust__item">
              <span className="hero-trust__icon">{badge.icon}</span>
              <div className="hero-trust__text">
                <span className="hero-trust__title">{badge.title}</span>
                <span className="hero-trust__subtitle">{badge.subtitle}</span>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
