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
    tag: "РАЗРАБОТКА САЙТОВ",
    titlePart1: "Делаем сайты, которые",
    titleItalic: "реально продают",
    titlePart2: "ваши услуги.",
    description: "Создаем красивые и быстрые сайты для вашего бизнеса. Клиентам будет удобно найти информацию и оставить заявку, а все контакты сразу придут вам в Telegram или CRM.",
  },
  {
    num: "02",
    tag: "УМНЫЕ ЧАТ-БОТЫ",
    titlePart1: "ИИ-помощник ответит",
    titleItalic: "за одну секунду",
    titlePart2: "в любое время.",
    description: "Подключаем к сайту умного робота. Он общается с клиентами, отвечает на вопросы о ценах и доставке круглосуточно и собирает контакты, пока вы и ваши менеджеры отдыхаете.",
  },
  {
    num: "03",
    tag: "РЕКЛАМА & НАСТРОЙКА",
    titlePart1: "Приводим клиентов,",
    titleItalic: "готовых купить",
    titlePart2: "прямо сейчас.",
    description: "Настраиваем рекламу в Яндекс и соцсетях. Показываем объявления только тем, кто ищет ваши услуги прямо сейчас. Следим за ценой каждой заявки, чтобы окупать рекламный бюджет.",
  },
  {
    num: "04",
    tag: "ВЕДЕНИЕ СОЦСЕТЕЙ",
    titlePart1: "Оживляем страницы",
    titleItalic: "в Telegram и VK",
    titlePart2: "для роста доверия.",
    description: "Красиво оформляем ваши соцсети, пишем простые и интересные посты, делаем фото и видео. Помогаем вашим клиентам узнать о вас больше и начать доверять вашему бренду.",
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

  const block2Ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: block2Progress } = useScroll({
    target: block2Ref,
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
      className="relative w-full bg-paper border-t border-line-blue"
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
                ref={idx === 1 ? block2Ref : undefined}
                className={`service-scroll-block flex flex-col ${idx === 1 ? "justify-center md:justify-start min-h-[75vh] md:h-[220vh] relative py-0" : "justify-center min-h-[75vh] md:min-h-screen py-16 md:py-24"
                  }`}
              >
                <div className={idx === 1 ? "md:sticky md:top-[25vh] md:h-[50vh] flex flex-col justify-center w-full" : "flex flex-col justify-center w-full"}>
                  {/* Visual inline on mobile (hidden on desktop) */}
                  <div className={`block md:hidden mb-8 aspect-square max-w-[320px] mx-auto bg-paper-dark border border-line-blue rounded-2xl overflow-hidden relative transition-all duration-300 ${idx === 1 ? "p-0" : "p-4"
                    }`}>
                    <MobileVisual index={idx} progress={scrollYProgress} block2Progress={block2Progress} />
                  </div>

                  {/* Subtitle / Category metadata */}
                  <div className="flex items-center gap-4 border-t border-line-blue pt-4 mb-6">
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
              <div className={`relative w-full aspect-square max-w-[460px] bg-paper-dark/30 border border-line-blue/60 rounded-[32px] shadow-sm overflow-hidden flex items-center justify-center backdrop-blur-[2px] transition-all duration-300 ${activeIndex === 1 ? "p-0" : "p-8"
                }`}>

                {/* SVG Blueprint Grid Background */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="blueprint-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
                  {/* Subtle circular boundary */}
                  <circle cx="50%" cy="50%" r="44%" fill="none" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1.5" strokeDasharray="5 5" />
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
                        block2Progress={block2Progress}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Corner indicators for architectural blueprint feel */}
                <div className={`absolute top-4 left-4 font-heading text-[9px] font-bold tracking-widest text-pencil/50 select-none transition-opacity duration-300 ${activeIndex === 1 ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}>
                  SYS / ACTIVE_VISUAL_0{activeIndex + 1}
                </div>
                <div className={`absolute bottom-4 right-4 font-heading text-[9px] font-bold tracking-widest text-pencil/50 select-none transition-opacity duration-300 ${activeIndex === 1 ? "opacity-0 pointer-events-none" : "opacity-100"
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

  const msg2Opacity = useTransform(scrollYProgress, [0.10, 0.22], [0, 1], { clamp: true });
  const msg2Y = useTransform(scrollYProgress, [0.10, 0.22], [12, 0], { clamp: true });

  const typing1Opacity = useTransform(scrollYProgress, [0.26, 0.28, 0.36, 0.40], [0, 1, 1, 0], { clamp: true });
  const typing1Display = useTransform(scrollYProgress, (p) => (p >= 0.26 && p <= 0.39 ? "flex" : "none"));

  const msg3Opacity = useTransform(scrollYProgress, [0.40, 0.50], [0, 1], { clamp: true });
  const msg3Y = useTransform(scrollYProgress, [0.40, 0.50], [12, 0], { clamp: true });

  const msg4Opacity = useTransform(scrollYProgress, [0.56, 0.66], [0, 1], { clamp: true });
  const msg4Y = useTransform(scrollYProgress, [0.56, 0.66], [12, 0], { clamp: true });

  const typing2Opacity = useTransform(scrollYProgress, [0.70, 0.72, 0.78, 0.82], [0, 1, 1, 0], { clamp: true });
  const typing2Display = useTransform(scrollYProgress, (p) => (p >= 0.70 && p <= 0.81 ? "flex" : "none"));

  const msg5Opacity = useTransform(scrollYProgress, [0.82, 0.90], [0, 1], { clamp: true });
  const msg5Y = useTransform(scrollYProgress, [0.82, 0.90], [12, 0], { clamp: true });

  const chatScrollY = useTransform(
    scrollYProgress,
    [0.00, 0.40, 0.50, 0.56, 0.66, 0.82, 0.90, 0.92, 0.98],
    [0, 0, -45, -45, -95, -95, -145, -145, -180],
    { clamp: true }
  );

  const quickReplyOpacity = useTransform(scrollYProgress, [0.92, 0.98], [0, 1], { clamp: true });
  const quickReplyY = useTransform(scrollYProgress, [0.92, 0.98], [10, 0], { clamp: true });

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      {/* Chat window card */}
      <motion.div
        className="w-full h-full rounded-2xl md:rounded-[32px] bg-paper border border-line-blue shadow-[0_8px_30px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col z-10 transition-shadow hover:shadow-[0_12px_40px_rgba(96,165,250,0.15)]"
      >
        {/* Header */}
        <div className="bg-ink-blue px-4 py-3.5 flex items-center justify-between select-none">
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
        <div className="flex-1 p-4 overflow-hidden flex flex-col justify-start min-h-0 bg-paper-dark/50 relative">
          <motion.div style={{ y: chatScrollY }} className="flex flex-col space-y-3 w-full">
            {/* Message 1 */}
            <motion.div
              style={{ opacity: msg1Opacity, y: msg1Y }}
              className="self-start max-w-[85%]"
            >
              <div className="bg-paper border border-line-blue text-ink-dark text-[11px] sm:text-xs px-3.5 py-2.5 rounded-2xl rounded-tl-sm font-body leading-snug">
                Привет! Чем я могу помочь вам сегодня?
              </div>
              <span className="text-[8px] sm:text-[9px] text-pencil mt-0.5 block pl-1">10:00</span>
            </motion.div>

            {/* Message 2 */}
            <motion.div
              style={{ opacity: msg2Opacity, y: msg2Y }}
              className="self-end max-w-[85%]"
            >
              <div className="bg-ink-blue text-white text-[11px] sm:text-xs px-3.5 py-2.5 rounded-2xl rounded-tr-sm font-body leading-snug">
                Сколько стоит доставка?
              </div>
              <span className="text-[8px] sm:text-[9px] text-pencil mt-0.5 block pr-1 text-right">10:01</span>
            </motion.div>

            {/* Typing 1 */}
            <motion.div
              style={{ opacity: typing1Opacity, display: typing1Display }}
              className="self-start bg-paper border border-line-blue px-3.5 py-2.5 rounded-2xl rounded-tl-sm flex items-center gap-1"
            >
              <span className="w-1.5 h-1.5 bg-pencil rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-1.5 h-1.5 bg-pencil rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-1.5 h-1.5 bg-pencil rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </motion.div>

            {/* Message 3 */}
            <motion.div
              style={{ opacity: msg3Opacity, y: msg3Y }}
              className="self-start max-w-[85%]"
            >
              <div className="bg-paper border border-line-blue text-ink-dark text-[11px] sm:text-xs px-3.5 py-2.5 rounded-2xl rounded-tl-sm font-body leading-snug">
                Доставка бесплатна при заказе от 3000 ₽. Подсказать условия для вашего города?
              </div>
              <span className="text-[8px] sm:text-[9px] text-pencil mt-0.5 block pl-1">10:01</span>
            </motion.div>

            {/* Message 4 */}
            <motion.div
              style={{ opacity: msg4Opacity, y: msg4Y }}
              className="self-end max-w-[85%]"
            >
              <div className="bg-ink-blue text-white text-[11px] sm:text-xs px-3.5 py-2.5 rounded-2xl rounded-tr-sm font-body leading-snug">
                Для Москвы
              </div>
              <span className="text-[8px] sm:text-[9px] text-pencil mt-0.5 block pr-1 text-right">10:02</span>
            </motion.div>

            {/* Typing 2 */}
            <motion.div
              style={{ opacity: typing2Opacity, display: typing2Display }}
              className="self-start bg-paper border border-line-blue px-3.5 py-2.5 rounded-2xl rounded-tl-sm flex items-center gap-1"
            >
              <span className="w-1.5 h-1.5 bg-pencil rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-1.5 h-1.5 bg-pencil rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-1.5 h-1.5 bg-pencil rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </motion.div>

            {/* Message 5 */}
            <motion.div
              style={{ opacity: msg5Opacity, y: msg5Y }}
              className="self-start max-w-[85%]"
            >
              <div className="bg-paper border border-line-blue text-ink-dark text-[11px] sm:text-xs px-3.5 py-2.5 rounded-2xl rounded-tl-sm font-body leading-snug">
                В Москве доставляем бесплатно на следующий день курьером
              </div>
              <span className="text-[8px] sm:text-[9px] text-pencil mt-0.5 block pl-1">10:02</span>
            </motion.div>

            {/* Quick reply action button */}
            <motion.div
              style={{ opacity: quickReplyOpacity, y: quickReplyY }}
              className="self-center pt-2 pb-1"
            >
              <a
                href="#contacts"
                className="inline-flex items-center gap-1.5 bg-ink-blue hover:bg-coral text-white text-[10px] sm:text-[11px] font-bold px-4 py-2.5 rounded-full shadow-md transition-all hover:scale-105 active:scale-95"
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
        <div className="p-3 bg-paper border-t border-line-blue flex items-center gap-2 select-none">
          <div className="flex-1 border border-line-blue rounded-xl px-3 py-2 bg-paper-dark text-left text-[10px] text-pencil">
            Введите вопрос...
          </div>
          <div className="w-8 h-8 rounded-lg bg-ink-blue flex items-center justify-center text-white cursor-pointer hover:bg-coral transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Floating launcher icon */}
      <motion.div
        className="absolute bottom-3 right-3 md:bottom-4 md:right-4 w-11 h-11 rounded-full bg-ink-blue shadow-md flex items-center justify-center text-white cursor-pointer hover:scale-105 transition-transform z-20"
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
  block2Progress: MotionValue<number>;
}

const DesktopVisual = ({ index, smoothRotate, smoothSkew, smoothTranslate, block2Progress }: DesktopVisualProps) => {
  switch (index) {
    case 0: // 01 / Web Development
      return (
        <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
          {/* Decorative isometric/grid lines */}
          <g opacity="0.15">
            <line x1="50" y1="50" x2="350" y2="350" stroke="var(--ink-dark)" strokeWidth="0.5" />
            <rect x="60" y="60" width="280" height="280" stroke="var(--ink-dark)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="130" stroke="var(--ink-dark)" strokeWidth="0.5" />
          </g>

          {/* Browser Window Mockup */}
          <motion.g style={{ y: smoothTranslate }}>
            <rect x="80" y="100" width="240" height="200" rx="12" fill="var(--paper)" stroke="var(--ink-dark)" strokeWidth="2" />
            {/* Window Header */}
            <line x1="80" y1="125" x2="320" y2="125" stroke="var(--ink-dark)" strokeWidth="1.5" />
            {/* Window Dots */}
            <circle cx="95" cy="112" r="3" fill="var(--ink-dark)" opacity="0.4" />
            <circle cx="105" cy="112" r="3" fill="var(--ink-dark)" opacity="0.4" />
            <circle cx="115" cy="112" r="3" fill="var(--ink-dark)" opacity="0.4" />

            {/* Layout Blocks (representing sections of a website) */}
            {/* Hero text lines */}
            <rect x="100" y="145" width="80" height="10" rx="3" fill="var(--coral)" opacity="0.8" />
            <rect x="100" y="162" width="120" height="6" rx="2" fill="var(--ink-dark)" opacity="0.15" />
            <rect x="100" y="174" width="100" height="6" rx="2" fill="var(--ink-dark)" opacity="0.15" />

            {/* CTA Button */}
            <motion.rect
              x="100"
              y="195"
              width="45"
              height="15"
              rx="4"
              fill="var(--ink-blue)"
              whileHover={{ scale: 1.05 }}
              animate={{ fill: ["var(--ink-blue)", "var(--coral)", "var(--ink-blue)"] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
            <rect x="108" y="200" width="29" height="5" rx="1" fill="var(--paper)" />

            {/* Visual element (Mockup image/graph) */}
            <rect x="235" y="145" width="65" height="65" rx="8" stroke="var(--ink-dark)" strokeWidth="1.5" strokeDasharray="3 3" />
            <motion.path
              d="M 245 195 L 260 170 L 275 185 L 290 155"
              stroke="var(--coral)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
            <circle cx="260" cy="170" r="3" fill="var(--ink-dark)" />
            <circle cx="290" cy="155" r="3" fill="var(--ink-dark)" />

            {/* Cards layout below */}
            <rect x="100" y="235" width="60" height="45" rx="6" fill="var(--paper)" stroke="var(--ink-dark)" strokeWidth="1" />
            <circle cx="115" cy="250" r="6" fill="var(--coral)" opacity="0.2" />
            <rect x="126" y="247" width="28" height="4" rx="1" fill="var(--ink-dark)" opacity="0.2" />
            <rect x="126" y="255" width="20" height="3" rx="1" fill="var(--ink-dark)" opacity="0.1" />

            <rect x="170" y="235" width="60" height="45" rx="6" fill="var(--paper)" stroke="var(--ink-dark)" strokeWidth="1" />
            <circle cx="185" cy="250" r="6" fill="var(--ink-blue)" opacity="0.2" />
            <rect x="196" y="247" width="28" height="4" rx="1" fill="var(--ink-dark)" opacity="0.2" />
            <rect x="196" y="255" width="20" height="3" rx="1" fill="var(--ink-dark)" opacity="0.1" />

            <rect x="240" y="235" width="60" height="45" rx="6" fill="var(--paper)" stroke="var(--ink-dark)" strokeWidth="1" />
            <circle cx="255" cy="250" r="6" fill="var(--coral)" opacity="0.2" />
            <rect x="266" y="247" width="28" height="4" rx="1" fill="var(--ink-dark)" opacity="0.2" />
            <rect x="266" y="255" width="20" height="3" rx="1" fill="var(--ink-dark)" opacity="0.1" />

            {/* Interactive Mouse Cursor */}
            <motion.g
              animate={{
                x: [280, 120, 120, 280],
                y: [280, 205, 205, 280],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                times: [0, 0.3, 0.45, 1],
                ease: "easeInOut",
              }}
            >
              <path
                d="M 0 0 L 12 12 L 7 13 L 5 18 Z"
                fill="var(--ink-dark)"
                stroke="var(--paper)"
                strokeWidth="1.5"
              />
              {/* Click pulse effect */}
              <motion.circle
                cx="0"
                cy="0"
                r="10"
                stroke="var(--coral)"
                strokeWidth="1.5"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  times: [0, 0.35, 0.45],
                  ease: "easeOut",
                }}
              />
            </motion.g>
          </motion.g>
        </svg>
      );

    case 1: // 02 / AI Bot
      return <ChatWidgetMockup scrollYProgress={block2Progress} />;

    case 2: // 03 / Advertising & Analytics
      return (
        <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
          {/* Grid background & Radar concentric rings */}
          <circle cx="200" cy="180" r="140" stroke="var(--ink-dark)" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.1" />
          <circle cx="200" cy="180" r="100" stroke="var(--ink-dark)" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.15" />
          <circle cx="200" cy="180" r="60" stroke="var(--ink-dark)" strokeWidth="0.75" opacity="0.1" />

          {/* Radar Sweep line */}
          <motion.g style={{ rotate: smoothRotate, originX: "200px", originY: "180px" }}>
            <line x1="200" y1="180" x2="200" y2="40" stroke="var(--ink-dark)" strokeWidth="1" opacity="0.2" />
            <polygon points="200,180 200,40 225,43" fill="var(--ink-dark)" opacity="0.02" />
          </motion.g>

          {/* Funnel structure */}
          <motion.g style={{ skewY: smoothSkew, originX: "200px", originY: "180px" }}>
            {/* Top Funnel Ring */}
            <ellipse cx="200" cy="100" rx="80" ry="20" stroke="var(--ink-dark)" strokeWidth="2" fill="var(--paper)" />
            
            {/* Funnel body */}
            <path d="M 120 100 L 170 220 L 230 220 L 280 100" stroke="var(--ink-dark)" strokeWidth="2" strokeLinejoin="round" />
            <ellipse cx="200" cy="220" rx="30" ry="8" stroke="var(--ink-dark)" strokeWidth="1.5" fill="var(--paper)" />

            {/* Conversions dropping out */}
            <path d="M 200 228 L 200 290" stroke="var(--coral)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
            
            {/* Converted leads at the bottom */}
            <motion.g
              animate={{
                y: [0, 60],
                opacity: [0, 1, 0],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeIn"
              }}
            >
              <circle cx="200" cy="228" r="5" fill="var(--coral)" />
            </motion.g>

            {/* Orbiting particles going into the funnel */}
            <motion.g
              animate={{
                rotate: 360
              }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: "linear"
              }}
              style={{ originX: "200px", originY: "100px" }}
            >
              <circle cx="120" cy="100" r="4" fill="var(--ink-blue)" />
              <circle cx="280" cy="100" r="4" fill="var(--coral)" />
            </motion.g>

            <motion.g
              animate={{
                rotate: -360
              }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: "linear"
              }}
              style={{ originX: "200px", originY: "100px" }}
            >
              <circle cx="200" cy="80" r="3" fill="var(--ink-dark)" />
              <circle cx="200" cy="120" r="3.5" fill="var(--coral)" />
            </motion.g>
          </motion.g>

          {/* Analytical graph at the bottom */}
          <motion.path
            d="M 60 330 C 120 330, 140 280, 200 290 S 260 230, 340 210"
            stroke="var(--ink-blue)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          {/* Target points on graph */}
          <circle cx="340" cy="210" r="4" fill="var(--coral)" />
          <motion.circle
            cx="340"
            cy="210"
            r="8"
            stroke="var(--coral)"
            strokeWidth="1.5"
            animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          <circle cx="200" cy="290" r="3" fill="var(--paper)" stroke="var(--ink-dark)" strokeWidth="1.5" />
          <circle cx="60" cy="330" r="3" fill="var(--paper)" stroke="var(--ink-dark)" strokeWidth="1.5" />
        </svg>
      );

    case 3: // 04 / Content & SMM
      return (
        <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
          {/* Grid background elements */}
          <g opacity="0.1">
            <line x1="50" y1="200" x2="350" y2="200" stroke="var(--ink-dark)" strokeWidth="0.5" />
            <line x1="200" y1="50" x2="200" y2="350" stroke="var(--ink-dark)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="140" stroke="var(--ink-dark)" strokeWidth="0.5" />
          </g>

          <motion.g style={{ y: smoothTranslate, skewX: smoothSkew, originX: "200px", originY: "200px" }}>
            {/* Social Post Card */}
            <rect x="90" y="80" width="220" height="240" rx="20" fill="var(--paper)" stroke="var(--ink-dark)" strokeWidth="2" />
            
            {/* Profile Header */}
            <circle cx="120" cy="110" r="14" fill="var(--paper)" stroke="var(--ink-dark)" strokeWidth="1.5" />
            {/* Inside avatar - abstract user icon */}
            <circle cx="120" cy="106" r="4" fill="var(--ink-dark)" opacity="0.3" />
            <path d="M 112 118 A 8 8 0 0 1 128 118 Z" fill="var(--ink-dark)" opacity="0.3" />

            <rect x="144" y="102" width="70" height="8" rx="2" fill="var(--ink-dark)" opacity="0.8" />
            <rect x="144" y="114" width="40" height="5" rx="1.5" fill="var(--ink-dark)" opacity="0.25" />

            {/* More icon (...) */}
            <circle cx="280" cy="110" r="1.5" fill="var(--ink-dark)" />
            <circle cx="286" cy="110" r="1.5" fill="var(--ink-dark)" />
            <circle cx="292" cy="110" r="1.5" fill="var(--ink-dark)" />

            {/* Post Image Container */}
            <rect x="106" y="136" width="188" height="118" rx="10" fill="var(--paper)" stroke="var(--ink-dark)" strokeWidth="1.5" />
            
            {/* Aesthetic design within image - camera grid, mountains/vector shapes or camera focus */}
            <rect x="116" y="146" width="168" height="98" rx="6" fill="var(--paper-dark)" opacity="0.5" />
            {/* Camera reticle */}
            <circle cx="200" cy="195" r="18" stroke="var(--ink-dark)" strokeWidth="1" strokeDasharray="3 2" opacity="0.3" />
            <circle cx="200" cy="195" r="3" fill="var(--coral)" />
            
            {/* Sparkles / Magic wand effect representing content creation */}
            <motion.path
              d="M 240 170 L 250 170 M 245 165 L 245 175"
              stroke="var(--coral)"
              strokeWidth="1.5"
              strokeLinecap="round"
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M 155 210 L 163 210 M 159 206 L 159 214"
              stroke="var(--coral)"
              strokeWidth="1"
              strokeLinecap="round"
              animate={{ opacity: [1, 0.2, 1], scale: [1.1, 0.8, 1.1] }}
              transition={{ repeat: Infinity, duration: 2.3, ease: "easeInOut" }}
            />

            {/* Interactive footer (Likes, Comments) */}
            {/* Heart Icon (SMM key metric) */}
            <g transform="translate(110, 266)">
              <motion.path
                d="M 12 5 C 8 1.5, 2 3.5, 2 9 C 2 14, 12 20, 12 20 C 12 20, 22 14, 22 9 C 22 3.5, 16 1.5, 12 5 Z"
                fill="var(--coral)"
                stroke="var(--ink-dark)"
                strokeWidth="1.5"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              />
            </g>

            {/* Comment Icon */}
            <path
              d="M 148 276 C 148 271, 158 271, 160 271 C 167 271, 172 276, 172 281 C 172 287, 167 291, 162 291 C 160 291, 150 295, 148 296 C 148 296, 148 291, 148 291 Z"
              stroke="var(--ink-dark)"
              strokeWidth="1.5"
              strokeLinejoin="round"
              fill="none"
              transform="translate(0, -2)"
            />

            {/* Share Icon */}
            <path
              d="M 188 271 L 202 278 L 188 285 Z M 202 278 L 182 278"
              stroke="var(--ink-dark)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Text lines (Copywriting/SMM caption) */}
            <rect x="108" y="296" width="184" height="5" rx="1" fill="var(--ink-dark)" opacity="0.5" />
            <rect x="108" y="306" width="120" height="5" rx="1" fill="var(--ink-dark)" opacity="0.3" />

            {/* Floating Like Particles */}
            <motion.g
              animate={{
                y: [0, -60],
                x: [0, -10, 10, -5],
                opacity: [0, 1, 0],
                scale: [0.6, 1, 0.6]
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeOut"
              }}
              style={{ originX: "122px", originY: "276px" }}
            >
              {/* Little floating heart */}
              <path
                d="M 122 256 C 120 254.5, 117 255.5, 117 258 C 117 260.5, 122 263.5, 122 263.5 C 122 263.5, 127 260.5, 127 258 C 127 255.5, 124 254.5, 122 256 Z"
                fill="var(--coral)"
                opacity="0.8"
              />
            </motion.g>

            <motion.g
              animate={{
                y: [-10, -80],
                x: [5, 15, 0, 5],
                opacity: [0, 0.9, 0],
                scale: [0.5, 0.9, 0.5]
              }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                delay: 1.2,
                ease: "easeOut"
              }}
              style={{ originX: "122px", originY: "276px" }}
            >
              {/* Another floating heart */}
              <path
                d="M 122 256 C 120 254.5, 117 255.5, 117 258 C 117 260.5, 122 263.5, 122 263.5 C 122 263.5, 127 260.5, 127 258 C 127 255.5, 124 254.5, 122 256 Z"
                fill="var(--coral)"
                opacity="0.6"
              />
            </motion.g>
          </motion.g>
        </svg>
      );

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
  block2Progress: MotionValue<number>;
}

const MobileVisual = ({ index, progress, block2Progress }: MobileVisualProps) => {
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
        block2Progress={index === 1 ? block2Progress : progress}
      />
    </div>
  );
};
