"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence, MotionValue } from "framer-motion";

interface ServiceBlock {
  num: string;
  tag: string;
  titlePart1: string;
  titleItalic: string;
  titlePart2?: string;
  description: string;
}

const SERVICES: ServiceBlock[] = [
  {
    num: "01",
    tag: "АНАЛИТИКА & СТРАТЕГИЯ",
    titlePart1: "Проектируем",
    titleItalic: "окупаемый",
    titlePart2: "маркетинг.",
    description: "Глубокий аудит рынка, оцифровка воронки и выстраивание сквозной аналитики. Мы не запускаем рекламу «вслепую» — каждое решение опирается на точные данные и бизнес-показатели.",
  },
  {
    num: "02",
    tag: "PERFORMANCE-РЕКЛАМА",
    titlePart1: "Привлекаем клиентов,",
    titleItalic: "а не клики.",
    description: "Профессиональная настройка Яндекс Директ, Telegram Ads и таргетированной рекламы. Точечно выходим на вашу целевую аудиторию и планомерно снижаем стоимость лида.",
  },
  {
    num: "03",
    tag: "UX/UI ДИЗАЙН",
    titlePart1: "Создаем эстетику,",
    titleItalic: "которая продает.",
    description: "Премиальные интерфейсы, чистая типографика и продуманный путь пользователя. Дизайн для нас — это инструмент управления вниманием, вызывающий доверие с первого клика.",
  },
  {
    num: "04",
    tag: "ВЕБ-РАЗРАБОТКА & AI",
    titlePart1: "Строим быстрые",
    titleItalic: "и гибкие",
    titlePart2: "решения.",
    description: "Разработка современных веб-сервисов на React/Next.js, интеграция CRM и решений на базе искусственного интеллекта. Надежный код, готовый к масштабированию.",
  },
  {
    num: "05",
    tag: "AI-ЧАТ-БОТЫ",
    titlePart1: "Интегрируем умных",
    titleItalic: "AI-ассистентов",
    titlePart2: "на сайт.",
    description: "Создаем чат-ботов на базе искусственного интеллекта. Они общаются с клиентами, отвечают на частые вопросы 24/7 и собирают контакты, разгружая вашу поддержку и повышая конверсию.",
  },
];

export const ServiceClimber = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  if (activeIndex !== prevIndex) {
    setDirection(activeIndex > prevIndex ? 1 : -1);
    setPrevIndex(activeIndex);
  }

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.95,
      filter: "blur(4px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.95,
      filter: "blur(4px)",
    }),
  };

  // Set up Framer Motion scroll hooks for scroll-linked animation properties
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const block5Ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: block5Progress } = useScroll({
    target: block5Ref,
    offset: ["start 25vh", "end 75vh"],
  });

  // Smooth out the scroll value for rotation and scaling transitions
  const scrollRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const smoothRotate = useSpring(scrollRotate, { damping: 20, stiffness: 70 });

  const scrollSkew = useTransform(scrollYProgress, [0, 0.5, 1], [0, 12, 0]);
  const smoothSkew = useSpring(scrollSkew, { damping: 25, stiffness: 60 });

  const scrollTranslate = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const smoothTranslate = useSpring(scrollTranslate, { damping: 20, stiffness: 75 });

  // IntersectionObserver to detect active left-side text block
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-49% 0px -49% 0px", // Triggers almost exactly at the center line of the viewport
      threshold: 0.0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute("data-index") || "0", 10);
          setActiveIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const blocks = containerRef.current?.querySelectorAll(".service-scroll-block");
    blocks?.forEach((block) => observer.observe(block));

    return () => {
      blocks?.forEach((block) => observer.unobserve(block));
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-white border-t border-slate-100"
      id="services-scrolly"
    >
      <div className="mx-auto px-5 md:px-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative">

          {/* LEFT COLUMN: Scrollable service text blocks */}
          <div className="col-span-1 md:col-span-6 flex flex-col z-10">
            {SERVICES.map((svc, idx) => (
              <div
                key={idx}
                data-index={idx}
                ref={idx === 4 ? block5Ref : undefined}
                className={`service-scroll-block flex flex-col justify-center ${idx === 4 ? "min-h-[75vh] md:h-[120vh] relative py-0" : "min-h-[75vh] md:min-h-screen py-16 md:py-24"
                  }`}
              >
                <div className={idx === 4 ? "md:sticky md:top-[25vh] md:h-[50vh] flex flex-col justify-center w-full" : "flex flex-col justify-center w-full"}>
                  {/* Visual inline on mobile (hidden on desktop) */}
                  <div className={`block md:hidden mb-8 aspect-square max-w-[320px] mx-auto bg-slate-50/50 border border-slate-100/80 rounded-2xl overflow-hidden relative transition-all duration-300 ${idx === 4 ? "p-0" : "p-4"
                    }`}>
                    <MobileVisual index={idx} progress={scrollYProgress} />
                  </div>

                  {/* Subtitle / Category metadata */}
                  <div className="flex items-center gap-4 border-t border-slate-200 pt-4 mb-6">
                    <span className="font-body text-xs font-black text-ink-dark select-none">
                      {svc.num}
                    </span>
                    <span className="font-heading text-[10px] font-extrabold tracking-widest text-pencil select-none uppercase">
                      {svc.tag}
                    </span>
                  </div>

                  {/* Title styled like the hero section */}
                  <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink-dark leading-tight select-none">
                    {svc.titlePart1}{" "}
                    <span className="font-serif italic text-coral font-normal lowercase tracking-normal">
                      {svc.titleItalic}
                    </span>
                    {svc.titlePart2 && ` ${svc.titlePart2}`}
                  </h3>

                  {/* Paragraph description */}
                  <p className="font-body text-pencil text-base sm:text-lg leading-relaxed mt-6 max-w-md">
                    {svc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: Sticky canvas (hidden on mobile) */}
          <div className="hidden md:block md:col-span-6 sticky top-0 h-screen overflow-hidden">
            <div className="w-full h-full flex items-center justify-center pl-6">

              {/* Decorative design frame */}
              <div className={`relative w-full aspect-square max-w-[460px] bg-slate-50/30 border border-slate-100/60 rounded-[32px] shadow-sm overflow-hidden flex items-center justify-center backdrop-blur-[2px] transition-all duration-300 ${activeIndex === 4 ? "p-0" : "p-8"
                }`}>

                {/* SVG Blueprint Grid Background */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="blueprint-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(15, 23, 42, 0.04)" strokeWidth="0.8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
                  {/* Subtle circular boundary */}
                  <circle cx="50%" cy="50%" r="44%" fill="none" stroke="rgba(15, 23, 42, 0.015)" strokeWidth="1.5" strokeDasharray="5 5" />
                </svg>

                {/* Visual Canvas containing animations */}
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="popLayout" custom={direction}>
                    <motion.div
                      key={activeIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 220, damping: 28 },
                        opacity: { duration: 0.35, ease: "easeInOut" },
                        scale: { duration: 0.45, ease: "easeOut" },
                        filter: { duration: 0.3 }
                      }}
                      className="w-full h-full"
                    >
                      <DesktopVisual
                        index={activeIndex}
                        smoothRotate={smoothRotate}
                        smoothSkew={smoothSkew}
                        smoothTranslate={smoothTranslate}
                        block5Progress={block5Progress}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Corner indicators for architectural blueprint feel */}
                <div className={`absolute top-4 left-4 font-heading text-[9px] font-bold tracking-widest text-slate-300 select-none transition-opacity duration-300 ${activeIndex === 4 ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}>
                  SYS / ACTIVE_VISUAL_0{activeIndex + 1}
                </div>
                <div className={`absolute bottom-4 right-4 font-heading text-[9px] font-bold tracking-widest text-slate-300 select-none transition-opacity duration-300 ${activeIndex === 4 ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}>
                  COORD / [63.00, 4.00]
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

/* ==========================================
   AI CHAT BOT WIDGET MOCKUP
   ========================================== */
const ChatWidgetMockup = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const msg1Opacity = 1;
  const msg1Y = 0;

  const msg2Opacity = useTransform(scrollYProgress, [0.00, 0.15], [0, 1], { clamp: true });
  const msg2Y = useTransform(scrollYProgress, [0.00, 0.15], [12, 0], { clamp: true });

  const typing1Opacity = useTransform(scrollYProgress, [0.20, 0.22, 0.30, 0.35], [0, 1, 1, 0], { clamp: true });
  const typing1Display = useTransform(scrollYProgress, (p) => (p >= 0.20 && p <= 0.34 ? "flex" : "none"));

  const msg3Opacity = useTransform(scrollYProgress, [0.35, 0.48], [0, 1], { clamp: true });
  const msg3Y = useTransform(scrollYProgress, [0.35, 0.48], [12, 0], { clamp: true });

  const msg4Opacity = useTransform(scrollYProgress, [0.53, 0.65], [0, 1], { clamp: true });
  const msg4Y = useTransform(scrollYProgress, [0.53, 0.65], [12, 0], { clamp: true });

  const typing2Opacity = useTransform(scrollYProgress, [0.70, 0.72, 0.78, 0.80], [0, 1, 1, 0], { clamp: true });
  const typing2Display = useTransform(scrollYProgress, (p) => (p >= 0.70 && p <= 0.79 ? "flex" : "none"));

  const msg5Opacity = useTransform(scrollYProgress, [0.80, 0.90], [0, 1], { clamp: true });
  const msg5Y = useTransform(scrollYProgress, [0.80, 0.90], [12, 0], { clamp: true });

  const chatScrollY = useTransform(
    scrollYProgress,
    [0.00, 0.35, 0.48, 0.53, 0.65, 0.80, 0.90, 0.92, 0.99],
    [0, 0, -45, -45, -95, -95, -145, -145, -180],
    { clamp: true }
  );

  const quickReplyOpacity = useTransform(scrollYProgress, [0.92, 0.99], [0, 1], { clamp: true });
  const quickReplyY = useTransform(scrollYProgress, [0.92, 0.99], [10, 0], { clamp: true });

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      {/* Chat window card */}
      <motion.div
        className="w-full h-full rounded-2xl md:rounded-[32px] bg-white border border-slate-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden flex flex-col z-10 transition-shadow hover:shadow-[0_12px_40px_rgba(37,99,235,0.08)]"
      >
        {/* Header */}
        <div className="bg-[#2563eb] px-4 py-3.5 flex items-center justify-between select-none">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
            </span>
            <span className="font-heading text-xs font-semibold tracking-wide text-white">Ассистент</span>
          </div>

          <div className="flex items-center gap-1 text-white/95">
            <svg className="w-3 h-3 text-[#F5D76E]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <span className="font-heading text-[10px] font-bold tracking-wider">Traffic63</span>
          </div>
        </div>

        {/* Message body */}
        <div className="flex-1 p-4 overflow-hidden flex flex-col justify-start min-h-0 bg-[#F8FAFC]/50 relative">
          <motion.div style={{ y: chatScrollY }} className="flex flex-col space-y-3 w-full">
            {/* Message 1 */}
            <motion.div
              style={{ opacity: msg1Opacity, y: msg1Y }}
              className="self-start max-w-[85%]"
            >
              <div className="bg-[#E2E8F0] text-[#1E293B] text-[11px] sm:text-xs px-3.5 py-2.5 rounded-2xl rounded-tl-sm font-body leading-snug">
                Привет! Чем я могу помочь вам сегодня?
              </div>
              <span className="text-[8px] sm:text-[9px] text-[#94A3B8] mt-0.5 block pl-1">10:00</span>
            </motion.div>

            {/* Message 2 */}
            <motion.div
              style={{ opacity: msg2Opacity, y: msg2Y }}
              className="self-end max-w-[85%]"
            >
              <div className="bg-[#2563eb] text-white text-[11px] sm:text-xs px-3.5 py-2.5 rounded-2xl rounded-tr-sm font-body leading-snug">
                Сколько стоит доставка?
              </div>
              <span className="text-[8px] sm:text-[9px] text-[#94A3B8] mt-0.5 block pr-1 text-right">10:01</span>
            </motion.div>

            {/* Typing 1 */}
            <motion.div
              style={{ opacity: typing1Opacity, display: typing1Display }}
              className="self-start bg-[#E2E8F0] px-3.5 py-2.5 rounded-2xl rounded-tl-sm flex items-center gap-1"
            >
              <span className="w-1.5 h-1.5 bg-[#475569] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-1.5 h-1.5 bg-[#475569] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-1.5 h-1.5 bg-[#475569] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </motion.div>

            {/* Message 3 */}
            <motion.div
              style={{ opacity: msg3Opacity, y: msg3Y }}
              className="self-start max-w-[85%]"
            >
              <div className="bg-[#E2E8F0] text-[#1E293B] text-[11px] sm:text-xs px-3.5 py-2.5 rounded-2xl rounded-tl-sm font-body leading-snug">
                Доставка бесплатна при заказе от 3000 ₽. Подсказать условия для вашего города?
              </div>
              <span className="text-[8px] sm:text-[9px] text-[#94A3B8] mt-0.5 block pl-1">10:01</span>
            </motion.div>

            {/* Message 4 */}
            <motion.div
              style={{ opacity: msg4Opacity, y: msg4Y }}
              className="self-end max-w-[85%]"
            >
              <div className="bg-[#2563eb] text-white text-[11px] sm:text-xs px-3.5 py-2.5 rounded-2xl rounded-tr-sm font-body leading-snug">
                Для Москвы
              </div>
              <span className="text-[8px] sm:text-[9px] text-[#94A3B8] mt-0.5 block pr-1 text-right">10:02</span>
            </motion.div>

            {/* Typing 2 */}
            <motion.div
              style={{ opacity: typing2Opacity, display: typing2Display }}
              className="self-start bg-[#E2E8F0] px-3.5 py-2.5 rounded-2xl rounded-tl-sm flex items-center gap-1"
            >
              <span className="w-1.5 h-1.5 bg-[#475569] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-1.5 h-1.5 bg-[#475569] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-1.5 h-1.5 bg-[#475569] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </motion.div>

            {/* Message 5 */}
            <motion.div
              style={{ opacity: msg5Opacity, y: msg5Y }}
              className="self-start max-w-[85%]"
            >
              <div className="bg-[#E2E8F0] text-[#1E293B] text-[11px] sm:text-xs px-3.5 py-2.5 rounded-2xl rounded-tl-sm font-body leading-snug">
                В Москве доставляем бесплатно на следующий день курьером
              </div>
              <span className="text-[8px] sm:text-[9px] text-[#94A3B8] mt-0.5 block pl-1">10:02</span>
            </motion.div>

            {/* Quick reply action button */}
            <motion.div
              style={{ opacity: quickReplyOpacity, y: quickReplyY }}
              className="self-center pt-2 pb-1"
            >
              <a
                href="#contacts"
                className="inline-flex items-center gap-1.5 bg-[#2563eb] hover:bg-blue-700 text-white text-[10px] sm:text-[11px] font-bold px-4 py-2.5 rounded-full shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <span>Заказать ИИ-ассистента</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2 select-none">
          <div className="flex-1 border border-slate-200/80 rounded-xl px-3 py-2 bg-[#FAFAFA] text-left text-[10px] text-[#94A3B8]">
            Введите вопрос...
          </div>
          <div className="w-8 h-8 rounded-lg bg-[#2563eb] flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Floating launcher icon */}
      <motion.div
        className="absolute bottom-3 right-3 md:bottom-4 md:right-4 w-11 h-11 rounded-full bg-[#2563eb] shadow-md flex items-center justify-center text-white cursor-pointer hover:scale-105 transition-transform z-20"
      >
        <svg className="w-5.5 h-5.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
        </svg>
      </motion.div>
    </div>
  );
};

/* ==========================================
   DESKTOP VISUAL ANIMATIONS (SCROLL-LINKED)
   ========================================== */
interface DesktopVisualProps {
  index: number;
  smoothRotate: MotionValue<number>;
  smoothSkew: MotionValue<number> | number;
  smoothTranslate: MotionValue<number> | number;
  block5Progress: MotionValue<number>;
}

const DesktopVisual = ({ index, smoothRotate, smoothSkew, smoothTranslate, block5Progress }: DesktopVisualProps) => {
  const inverseRotate = useTransform(smoothRotate, (r) => -r);

  switch (index) {
    case 0: // 01 / Analytics & Strategy: Radar & Coordinates
      return (
        <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
          {/* Main concentric radar lines */}
          <circle cx="200" cy="200" r="140" stroke="var(--ink-dark)" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.2" />
          <circle cx="200" cy="200" r="100" stroke="var(--ink-dark)" strokeWidth="0.75" opacity="0.1" />
          <circle cx="200" cy="200" r="60" stroke="var(--ink-dark)" strokeWidth="0.75" strokeDasharray="2 2" opacity="0.15" />

          {/* Horizontal / Vertical crosshairs */}
          <line x1="60" y1="200" x2="340" y2="200" stroke="var(--ink-dark)" strokeWidth="0.5" opacity="0.15" />
          <line x1="200" y1="60" x2="200" y2="340" stroke="var(--ink-dark)" strokeWidth="0.5" opacity="0.15" />

          {/* Radar Sweep (Rotated by scroll progress) */}
          <motion.g style={{ rotate: smoothRotate, originX: "200px", originY: "200px" }}>
            <line x1="200" y1="200" x2="200" y2="60" stroke="var(--coral)" strokeWidth="1.5" strokeLinecap="round" />
            <polygon points="200,200 200,60 235,65" fill="var(--coral)" opacity="0.04" />
          </motion.g>

          {/* Active analytical line graph drawing itself */}
          <motion.path
            d="M 80 260 C 130 180, 170 240, 220 150 S 280 180, 320 120"
            stroke="var(--ink-dark)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* Glowing indicator circles */}
          <motion.circle
            cx="220"
            cy="150"
            r="5"
            fill="var(--coral)"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
          <circle cx="320" cy="120" r="4" fill="var(--paper)" stroke="var(--ink-dark)" strokeWidth="1.5" />
          <circle cx="80" cy="260" r="4" fill="var(--paper)" stroke="var(--ink-dark)" strokeWidth="1.5" />
        </svg>
      );

    case 1: // 02 / Performance Ads: concentric orbits & conversion flow
      return (
        <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
          {/* Concentric targets */}
          <circle cx="200" cy="200" r="130" stroke="var(--ink-dark)" strokeWidth="1" strokeDasharray="3 3" opacity="0.15" />
          <circle cx="200" cy="200" r="90" stroke="var(--ink-dark)" strokeWidth="1" strokeDasharray="5 5" opacity="0.2" />
          <circle cx="200" cy="200" r="50" stroke="var(--ink-dark)" strokeWidth="1" opacity="0.1" />

          {/* Funnel structure */}
          <path d="M 120 100 Q 200 120 280 100 L 250 240 Q 200 255 150 240 Z" stroke="var(--ink-dark)" strokeWidth="1.5" opacity="0.75" />
          <path d="M 150 240 L 170 320 Q 200 330 230 320 L 250 240" stroke="var(--ink-dark)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />

          {/* Core conversion target dot */}
          <motion.circle
            cx="200"
            cy="270"
            r="6"
            fill="var(--coral)"
            animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          />

          {/* Orbiting lead particles driven by scroll */}
          <motion.g style={{ rotate: smoothRotate, originX: "200px", originY: "200px" }}>
            <circle cx="200" cy="70" r="4" fill="var(--coral)" />
            <circle cx="70" cy="200" r="5" fill="var(--ink-dark)" />
            <circle cx="330" cy="200" r="3" fill="var(--ink-dark)" opacity="0.6" />
          </motion.g>

          <motion.g style={{ rotate: inverseRotate, originX: "200px", originY: "200px" }}>
            <circle cx="200" cy="110" r="4.5" fill="var(--ink-dark)" />
            <circle cx="200" cy="290" r="3.5" fill="var(--coral)" />
          </motion.g>
        </svg>
      );

    case 2: // 03 / UX/UI Design: Vector curves & anchor guides
      return (
        <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
          {/* Isometric alignment backdrop */}
          <g opacity="0.15">
            <line x1="50" y1="50" x2="350" y2="350" stroke="var(--ink-dark)" strokeWidth="0.5" />
            <line x1="350" y1="50" x2="50" y2="350" stroke="var(--ink-dark)" strokeWidth="0.5" />
            <rect x="80" y="80" width="240" height="240" stroke="var(--ink-dark)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="120" stroke="var(--ink-dark)" strokeWidth="0.5" />
          </g>

          {/* Vector curves tilted & morphing with scroll */}
          <motion.g style={{ skewY: smoothSkew, originX: "200px", originY: "200px" }}>
            {/* Control line left */}
            <line x1="80" y1="200" x2="150" y2="90" stroke="var(--ink-dark)" strokeWidth="1" opacity="0.4" />
            <circle cx="150" cy="90" r="4" fill="var(--paper)" stroke="var(--ink-dark)" strokeWidth="1.5" />

            {/* Control line right */}
            <line x1="320" y1="200" x2="250" y2="310" stroke="var(--ink-dark)" strokeWidth="1" opacity="0.4" />
            <circle cx="250" cy="310" r="4" fill="var(--paper)" stroke="var(--ink-dark)" strokeWidth="1.5" />

            {/* Main Bezier curve */}
            <motion.path
              d="M 80 200 C 150 90, 250 310, 320 200"
              stroke="var(--coral)"
              strokeWidth="3.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            />

            {/* Bezier handle squares */}
            <rect x="76" y="196" width="8" height="8" fill="var(--ink-dark)" stroke="var(--paper)" strokeWidth="1" />
            <rect x="316" y="196" width="8" height="8" fill="var(--ink-dark)" stroke="var(--paper)" strokeWidth="1" />
          </motion.g>

          {/* Target grid focus reticle */}
          <circle cx="200" cy="200" r="10" stroke="var(--coral)" strokeWidth="1" opacity="0.6" />
          <circle cx="200" cy="200" r="2" fill="var(--coral)" />
        </svg>
      );

    case 3: // 04 / Web Dev & AI: Isometric architecture & wireframes
      return (
        <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
          {/* Background grid mesh */}
          <path d="M 80 160 L 200 90 L 320 160 L 200 230 Z" stroke="var(--ink-dark)" strokeWidth="0.5" opacity="0.08" />
          <path d="M 80 240 L 200 170 L 320 240 L 200 310 Z" stroke="var(--ink-dark)" strokeWidth="0.5" opacity="0.08" />

          <motion.g style={{ y: smoothTranslate }}>
            {/* Layer 3 (Top stack) */}
            <g opacity="0.9">
              <polygon points="200,90 270,125 200,160 130,125" fill="var(--paper)" stroke="var(--ink-dark)" strokeWidth="1.5" />
              <line x1="130" y1="125" x2="130" y2="155" stroke="var(--ink-dark)" strokeWidth="1.5" />
              <line x1="200" y1="160" x2="200" y2="190" stroke="var(--ink-dark)" strokeWidth="1.5" />
              <line x1="270" y1="125" x2="270" y2="155" stroke="var(--ink-dark)" strokeWidth="1.5" />
              <polygon points="200,190 270,155 200,160 130,155" fill="none" stroke="var(--ink-dark)" strokeWidth="1.5" />
            </g>

            {/* Glowing flow lines linking the layers */}
            <path d="M 200 190 L 200 230" stroke="var(--coral)" strokeWidth="2" strokeDasharray="3 3" />

            {/* Layer 2 (Middle stack) */}
            <g opacity="0.8">
              <polygon points="200,170 280,210 200,250 120,210" fill="var(--paper)" stroke="var(--ink-dark)" strokeWidth="1.5" />
              <line x1="120" y1="210" x2="120" y2="235" stroke="var(--ink-dark)" strokeWidth="1.5" />
              <line x1="200" y1="250" x2="200" y2="275" stroke="var(--ink-dark)" strokeWidth="1.5" />
              <line x1="280" y1="210" x2="280" y2="235" stroke="var(--ink-dark)" strokeWidth="1.5" />
              <polygon points="200,275 280,235 200,250 120,235" fill="none" stroke="var(--ink-dark)" strokeWidth="1.5" />
            </g>

            {/* Flow lines */}
            <path d="M 120 235 L 120 275" stroke="var(--coral)" strokeWidth="1.5" opacity="0.5" />
            <path d="M 280 235 L 280 275" stroke="var(--coral)" strokeWidth="1.5" opacity="0.5" />

            {/* Layer 1 (Base stack) */}
            <g opacity="0.5">
              <polygon points="200,250 290,295 200,340 110,295" fill="var(--paper)" stroke="var(--ink-dark)" strokeWidth="1.2" />
            </g>
          </motion.g>

          {/* Float vertices representing nodes / AI neurons */}
          <motion.circle cx="90" cy="180" r="3" fill="var(--coral)" animate={{ y: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 3 }} />
          <motion.circle cx="310" cy="140" r="4" fill="var(--ink-dark)" animate={{ y: [4, -4, 4] }} transition={{ repeat: Infinity, duration: 2.5 }} />
          <motion.circle cx="320" cy="270" r="3" fill="var(--coral)" animate={{ y: [-3, 3, -3] }} transition={{ repeat: Infinity, duration: 3.2 }} />
        </svg>
      );

    case 4: // 05 / AI Chat Bots: Interactive widget mockup
      return <ChatWidgetMockup scrollYProgress={block5Progress} />;

    default:
      return null;
  }
};

/* ==========================================
   MOBILE VISUAL ANIMATIONS (STACKED INLINE)
   ========================================== */
interface MobileVisualProps {
  index: number;
  progress: MotionValue<number>;
}

const MobileVisual = ({ index, progress }: MobileVisualProps) => {
  // Use scroll progress to rotate mobile graphics slightly
  const rotateVal = useTransform(progress, [0, 1], [0, 120]);
  const smoothRotate = useSpring(rotateVal, { damping: 20, stiffness: 80 });

  return (
    <div className="w-full h-full flex items-center justify-center relative bg-slate-50/20 rounded-xl">
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="mobile-grid" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(15, 23, 42, 0.05)" strokeWidth="0.7" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mobile-grid)" />
      </svg>

      <DesktopVisual
        index={index}
        smoothRotate={smoothRotate}
        smoothSkew={0}
        smoothTranslate={0}
        block5Progress={progress}
      />
    </div>
  );
};
