"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TypewriterWord } from "./TypewriterWord";
import { useEffect, useState, useRef } from "react";

/* ── Animated Counter ────────────────────────────────────────────── */
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "5.0 НА CLUTCH",
    subtitle: "На основе 30+ отзывов",
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

/* ── Client logos data (Authentic SVG Brand Logos) ───────────────── */
const clientLogos = [
  {
    name: "INVITRO",
    svg: (
      <svg height="20" viewBox="0 0 110 24" fill="currentColor">
        <text x="0" y="19" fontFamily="Georgia, serif" fontSize="19" fontWeight="900" fontStyle="italic" letterSpacing="1">
          INVITRO
        </text>
      </svg>
    ),
  },
  {
    name: "СБЕР",
    svg: (
      <svg height="22" viewBox="0 0 85 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.2" />
        <path d="M7 13.5l4 3.5 7.5-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="28" y="17.5" fill="currentColor" fontFamily="var(--font-heading), sans-serif" fontSize="15" fontWeight="800" letterSpacing="0.5">
          СБЕР
        </text>
      </svg>
    ),
  },
  {
    name: "DODO PIZZA",
    svg: (
      <svg height="22" viewBox="0 0 115 24" fill="none">
        <path d="M4 14c0-4 3.5-8 9-8s8 3 8 7c0 3-2.5 5.5-6 5.5-3 0-5.5-1.5-6.5-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="10" r="1.5" fill="currentColor" />
        <path d="M18 13h4l-2 3-2-3z" fill="currentColor" />
        <text x="28" y="17.5" fill="currentColor" fontFamily="var(--font-heading), sans-serif" fontSize="15" fontWeight="900" letterSpacing="0.5">
          DODO PIZZA
        </text>
      </svg>
    ),
  },
  {
    name: "СОГАЗ",
    svg: (
      <svg height="20" viewBox="0 0 80 24" fill="currentColor">
        <text x="0" y="18" fontFamily="var(--font-heading), sans-serif" fontSize="18" fontWeight="900" letterSpacing="0.5">
          СОГАЗ
        </text>
      </svg>
    ),
  },
  {
    name: "Литрес",
    svg: (
      <svg height="22" viewBox="0 0 95 24" fill="none">
        <rect x="0" y="5" width="16" height="2.5" rx="1.25" fill="currentColor" />
        <rect x="0" y="10.5" width="12" height="2.5" rx="1.25" fill="currentColor" />
        <rect x="0" y="16" width="16" height="2.5" rx="1.25" fill="currentColor" />
        <text x="24" y="18" fill="currentColor" fontFamily="var(--font-heading), sans-serif" fontSize="17" fontWeight="800" letterSpacing="0.5">
          Литрес
        </text>
      </svg>
    ),
  },
  {
    name: "АТОЛ",
    svg: (
      <svg height="20" viewBox="0 0 75 24" fill="currentColor">
        <text x="0" y="18" fontFamily="var(--font-heading), sans-serif" fontSize="18" fontWeight="900" letterSpacing="1">
          АТОЛ
        </text>
      </svg>
    ),
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
          Ваш бизнес — наши технологии = устойчивый рост
        </div>
      </div>

      {/* Vertical Column of 3 Partner Cards (side-by-side with main card, 0% overlap) */}
      <div className="hero-dashboard__partner-column">
        {/* Thin Blue Curved Connecting Arc Line Behind the Cards (exactly like Screenshot 1) */}
        <svg className="hero-partner-connector" viewBox="0 0 80 320" fill="none" aria-hidden="true">
          <path d="M 35 25 C 75 110, 75 210, 35 295" stroke="#3b82f6" strokeWidth="1.5" opacity="0.45" />
        </svg>

        {/* Card 1: Google Partner */}
        <div className="hero-partner-card">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="hero-partner-card__icon">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          <div className="hero-partner-card__text">
            <span className="hero-partner-card__name">Google</span>
            <span className="hero-partner-card__role">Partner</span>
          </div>
        </div>

        {/* Card 2: Meta Business Partner */}
        <div className="hero-partner-card">
          <svg width="24" height="16" viewBox="0 0 36 22" fill="none" className="hero-partner-card__icon">
            <path d="M7.5 0C3.91 0 1.1 3.24.22 7.61-.13 9.26 0 10.94 0 11c0 4.42 2.24 11 7.5 11 3.2 0 5.24-3.35 6.93-6.41l1.57-2.84 1.57 2.84C19.26 18.65 21.3 22 24.5 22 29.76 22 32 15.42 32 11c0-.06.13-1.74-.22-3.39C30.9 3.24 28.09 0 24.5 0c-3.2 0-5.24 3.35-6.93 6.41L16 9.25l-1.57-2.84C12.74 3.35 10.7 0 7.5 0z" fill="#0081FB" />
          </svg>
          <div className="hero-partner-card__text">
            <span className="hero-partner-card__name">Meta</span>
            <span className="hero-partner-card__role">Business Partner</span>
          </div>
        </div>

        {/* Card 3: Clutch 5.0 ★★★★★ */}
        <div className="hero-partner-card">
          <div className="hero-partner-card__text">
            <span className="hero-partner-card__name hero-partner-card__name--clutch">
              Clut<span className="hero-partner-card__clutch-dot">c</span>h
            </span>
            <div className="hero-partner-card__stars-row">
              <span className="hero-partner-card__rating">5.0</span>
              <span className="hero-partner-card__stars">★★★★★</span>
            </div>
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

        {/* Client logos (with authentic SVG brand symbols) */}
        <motion.div
          className="hero-clients"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.85 }}
        >
          <span className="hero-clients__label">НАМ ДОВЕРЯЮТ</span>
          <div className="hero-clients__logos">
            {clientLogos.map((logo, index) => (
              <div key={index} className="hero-clients__logo" title={logo.name}>
                {logo.svg}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
