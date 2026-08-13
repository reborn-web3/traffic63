"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TypewriterWord } from "./TypewriterWord";

/* ── Trust badges data ───────────────────────────────────────────── */
const trustBadges = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "PAGESPEED 95+",
    subtitle: "Оценка скорости сайта",
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

/* ── Hero Video Component ────────────────────────────────────────── */
const HeroVideo = () => (
  <motion.div
    className="relative w-full aspect-[4/3] lg:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-line-blue/40 dark:border-white/10 bg-paper dark:bg-paper-dark transform-gpu"
    variants={dashboardVariants}
    initial="hidden"
    animate="visible"
  >
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/videos/0809.webm" type="video/webm" />
      <source src="/videos/0809.mp4" type="video/mp4" />
    </video>
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

          {/* Right column — Video */}
          <div className="hero-dashboard-wrapper">
            <HeroVideo />
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
