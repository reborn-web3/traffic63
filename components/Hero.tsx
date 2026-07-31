"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TypewriterWord } from "./TypewriterWord";

/* ── Animated Counter ────────────────────────────────────────────── */
import { useEffect, useState, useRef } from "react";

const AnimatedNumber = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "5.0 НА CLUTCH",
    subtitle: "На основе 30+ отзывов",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "ГАРАНТИЯ РЕЗУЛЬТАТА",
    subtitle: "Делаем, как для себя",
  },
];

/* ── Client logos data ───────────────────────────────────────────── */
const clientLogos = [
  { name: "INVITRO", style: "italic" as const },
  { name: "СБЕР", style: "normal" as const },
  { name: "DODO PIZZA", style: "normal" as const },
  { name: "СОГАЗ", style: "normal" as const },
  { name: "Литрес", style: "normal" as const },
  { name: "АТОЛ", style: "normal" as const },
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


/* ── Dashboard Component ─────────────────────────────────────────── */
const HeroDashboard = () => (
  <motion.div
    className="hero-dashboard"
    variants={dashboardVariants}
    initial="hidden"
    animate="visible"
  >
    {/* Main card */}
    <div className="hero-dashboard__card">
      {/* Graph header */}
      <div className="hero-dashboard__graph-header">
        <span className="hero-dashboard__graph-title">Рост конверсий</span>
        <span className="hero-dashboard__graph-badge">+127%</span>
      </div>

      {/* SVG Graph */}
      <div className="hero-dashboard__graph">
        <svg viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-dashboard__graph-svg">
          {/* Grid lines */}
          <line x1="0" y1="30" x2="400" y2="30" stroke="var(--line-blue)" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5" />
          <line x1="0" y1="60" x2="400" y2="60" stroke="var(--line-blue)" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5" />
          <line x1="0" y1="90" x2="400" y2="90" stroke="var(--line-blue)" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5" />

          {/* Area gradient */}
          <defs>
            <linearGradient id="heroGraphGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--coral)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="var(--coral)" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* Area fill */}
          <path
            d="M0 100 Q50 95 80 85 T160 60 Q200 45 240 35 T320 20 Q360 12 400 8 L400 120 L0 120 Z"
            fill="url(#heroGraphGradient)"
            className="hero-dashboard__graph-area"
          />

          {/* Main line */}
          <path
            d="M0 100 Q50 95 80 85 T160 60 Q200 45 240 35 T320 20 Q360 12 400 8"
            stroke="var(--coral)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            className="hero-dashboard__graph-line"
          />

          {/* End dot */}
          <circle cx="400" cy="8" r="4" fill="var(--coral)" className="hero-dashboard__graph-dot" />
          <circle cx="400" cy="8" r="8" fill="var(--coral)" opacity="0.2" className="hero-dashboard__graph-dot-pulse" />
        </svg>

        {/* Tooltip on the graph */}
        <div className="hero-dashboard__graph-tooltip">
          <span className="hero-dashboard__graph-tooltip-label">за 6 месяцев</span>
        </div>
      </div>

      {/* Metrics row */}
      <div className="hero-dashboard__metrics">
        <div className="hero-dashboard__metric">
          <span className="hero-dashboard__metric-label">Трафик</span>
          <AnimatedNumber target={98650} />
          <span className="hero-dashboard__metric-change hero-dashboard__metric-change--up">+35%</span>
        </div>
        <div className="hero-dashboard__metric">
          <span className="hero-dashboard__metric-label">Конверсии</span>
          <AnimatedNumber target={2657} />
          <span className="hero-dashboard__metric-change hero-dashboard__metric-change--up">+127%</span>
        </div>
        <div className="hero-dashboard__metric">
          <span className="hero-dashboard__metric-label">ROI</span>
          <AnimatedNumber target={346} suffix="%" />
          <span className="hero-dashboard__metric-change hero-dashboard__metric-change--up">+89%</span>
        </div>
      </div>

      {/* Bottom tagline */}
      <div className="hero-dashboard__tagline">
        <span className="hero-dashboard__tagline-icon">✦</span>
        Ваш бизнес — наши технологии = устойчивый рост
      </div>
    </div>

    {/* Floating badges */}
    <div className="hero-dashboard__badge hero-dashboard__badge--google">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
      <div className="hero-dashboard__badge-text">
        <span className="hero-dashboard__badge-name">Google</span>
        <span className="hero-dashboard__badge-role">Partner</span>
      </div>
    </div>

    <div className="hero-dashboard__badge hero-dashboard__badge--meta">
      <svg width="18" height="14" viewBox="0 0 36 22" fill="none">
        <path d="M7.5 0C3.91 0 1.1 3.24.22 7.61-.13 9.26 0 10.94 0 11c0 4.42 2.24 11 7.5 11 3.2 0 5.24-3.35 6.93-6.41l1.57-2.84 1.57 2.84C19.26 18.65 21.3 22 24.5 22 29.76 22 32 15.42 32 11c0-.06.13-1.74-.22-3.39C30.9 3.24 28.09 0 24.5 0c-3.2 0-5.24 3.35-6.93 6.41L16 9.25l-1.57-2.84C12.74 3.35 10.7 0 7.5 0z" fill="var(--coral)" />
      </svg>
      <div className="hero-dashboard__badge-text">
        <span className="hero-dashboard__badge-name">Meta</span>
        <span className="hero-dashboard__badge-role">Business Partner</span>
      </div>
    </div>

    <div className="hero-dashboard__badge hero-dashboard__badge--clutch">
      <div className="hero-dashboard__badge-text">
        <span className="hero-dashboard__badge-name hero-dashboard__badge-name--clutch">Clutch</span>
        <span className="hero-dashboard__badge-role">5.0 ★★★★★</span>
      </div>
    </div>
  </motion.div>
);

/* ── Main Hero Component ─────────────────────────────────────────── */
export const Hero = () => {
  return (
    <section
      id="hero"
      className="hero-section relative bg-paper pt-28 pb-12 lg:pt-36 lg:pb-16 overflow-hidden"
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
            {/* Badge */}
            <motion.div variants={itemVariants} className="hero-badge">
              <span className="hero-badge__icon">✦</span>
              PERFORMANCE-МАРКЕТИНГ ДЛЯ РОСТА БИЗНЕСА
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="hero-headline">
              <span className="hero-headline__main">ДЕЛАЕМ БИЗНЕС</span>
              <br />
              <TypewriterWord
                words={["успешным", "заметным", "узнаваемым"]}
                className="hero-headline__accent"
              />
            </motion.h1>

            {/* Description */}
            <motion.p variants={itemVariants} className="hero-description">
              Помогаем компаниям расти с помощью комплексного
              performance-маркетинга, премиального UX/UI дизайна
              и надежной веб-разработки.
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
              <Link href="/#services" className="hero-cta__secondary">
                Смотреть кейсы
              </Link>
            </motion.div>
          </motion.div>

          {/* Right column — Dashboard */}
          <div className="hero-dashboard-wrapper">
            <HeroDashboard />
          </div>
        </div>

        {/* Trust badges row */}
        <motion.div
          className="hero-trust"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
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

        {/* Client logos */}
        <motion.div
          className="hero-clients"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <span className="hero-clients__label">НАМ ДОВЕРЯЮТ</span>
          <div className="hero-clients__logos">
            {clientLogos.map((logo, index) => (
              <span
                key={index}
                className="hero-clients__logo"
                style={{ fontStyle: logo.style }}
              >
                {logo.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
