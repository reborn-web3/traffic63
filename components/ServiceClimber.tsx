"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence, MotionValue, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";

interface ServiceBlock {
  tag: string;
  titlePart1: string;
  titleItalic: string;
  titlePart2?: string;
  description: string;
  slug: string;
}

const SERVICES: ServiceBlock[] = [
  {
    tag: "РАЗРАБОТКА САЙТОВ",
    titlePart1: "Делаем сайты, которые",
    titleItalic: "реально продают",
    titlePart2: "ваши услуги.",
    description: "Создаем современные сайты под ключ: от стильного дизайна до настройки заявок. Упакуем ваш продукт так, чтобы клиентам хотелось купить, а вам было удобно получать новые заказы.",
    slug: "web-development",
  },
  {
    tag: "УМНЫЕ ЧАТ-БОТЫ",
    titlePart1: "ИИ-помощник ответит",
    titleItalic: "за одну секунду",
    titlePart2: "в любое время.",
    description: "Подключаем к сайту ИИ-ассистента. Он общается с клиентами, отвечает на вопросы о ценах и доставке круглосуточно и собирает контакты, пока вы и ваши менеджеры отдыхаете.",
    slug: "chatbots",
  },
  {
    tag: "РЕКЛАМА & НАСТРОЙКА",
    titlePart1: "Приводим клиентов,",
    titleItalic: "готовых купить",
    titlePart2: "прямо сейчас.",
    description: "Настраиваем рекламу в Яндекс и соцсетях. Показываем объявления только тем, кто ищет ваши услуги прямо сейчас. Следим за ценой каждой заявки, чтобы окупать рекламный бюджет.",
    slug: "advertising",
  },
  {
    tag: "ВЕДЕНИЕ СОЦСЕТЕЙ",
    titlePart1: "Оживляем страницы",
    titleItalic: "в Telegram и VK",
    titlePart2: "для роста доверия.",
    description: "Красиво оформляем ваши соцсети, пишем простые и интересные посты, делаем фото и видео. Помогаем вашим клиентам узнать о вас больше и начать доверять вашему бренду.",
    slug: "smm",
  },
];

export const ServiceClimber = () => {
  return (
    <div className="relative w-full bg-paper border-t border-line-blue py-16 md:py-32" id="services">
      <div className="mx-auto px-5 md:px-10 max-w-7xl">
        <div className="flex flex-col gap-16 md:gap-32">
          {SERVICES.map((svc, idx) => {
            const isReversed = idx % 2 !== 0;
            return (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${isReversed ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Text Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  {/* The tag/eyebrow has been removed per user request */}

                  <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink-dark leading-tight select-none">
                    {svc.titlePart1}{" "}
                    <span className="font-serif italic text-coral font-normal lowercase tracking-normal">
                      {svc.titleItalic}
                    </span>
                    {svc.titlePart2 && ` ${svc.titlePart2}`}
                  </h3>

                  <p className="font-body text-pencil text-base sm:text-lg leading-relaxed mt-6 max-w-md">
                    {svc.description}
                  </p>

                  <div className="mt-8 flex justify-start">
                    <Link
                      href={`/services/${svc.slug}`}
                      className="group/btn inline-flex items-center gap-2.5 font-body font-bold text-[13px] sm:text-sm uppercase tracking-widest text-pencil hover:text-coral transition-all duration-300 select-none pb-1 border-b border-dashed border-pencil/40 hover:border-coral hover:translate-x-1"
                    >
                      Подробнее
                      <svg
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Media/Video Player Mockup */}
                <div className="w-full md:w-1/2 flex justify-center items-center">
                  {idx === 0 ? (
                    <div className="relative w-full aspect-[16/10] max-w-[600px] rounded-[24px] shadow-xl overflow-hidden flex items-center justify-center bg-black border border-line-blue/20 transform transition-transform hover:scale-[1.02] duration-500">
                      <video
                        aria-label="Демонстрация разработанного сайта"
                        className="w-full h-full object-cover scale-[1.35]"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                      >
                        <source src="/videos/0809.webm" type="video/webm" />
                        <source src="/videos/0809.mp4" type="video/mp4" />
                      </video>
                    </div>
                  ) : (
                    <div className={`relative w-full aspect-square max-w-[500px] flex items-center justify-center ${idx === 1 ? "" : "p-6 md:p-8"}`}>

                      {/* Corner indicators removed per user request */}

                      {/* The Visual Animation */}
                      <div className="relative w-full h-full flex items-center justify-center z-10">
                        <DesktopVisual index={idx} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* ==========================================
   AI CHAT BOT WIDGET MOCKUP
   ========================================== */
const ChatWidgetMockup = ({ scrollYProgress }: { scrollYProgress?: MotionValue<number> }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Trigger animation when the chat widget comes into view
  const isInView = useInView(containerRef, { once: false, margin: "-10%" });
  const [step, setStep] = useState(0);

  // Reset or start sequence
  useEffect(() => {
    if (isInView) {
      if (step === 0) setStep(1);
    } else {
      // Reset when out of view so it replays next time
      setStep(0);
    }
  }, [isInView]);

  // Sequence orchestration
  useEffect(() => {
    if (step === 0 || step >= 9) return;

    let timer: NodeJS.Timeout;
    // Delays between steps for a natural feel
    const delays = [0, 800, 1500, 800, 1500, 1000, 800, 1500, 1000];
    timer = setTimeout(() => setStep(s => s + 1), delays[step]);

    return () => clearTimeout(timer);
  }, [step]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollEl = scrollContainerRef.current;
      scrollEl.scrollTo({
        top: scrollEl.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [step]);

  const msgVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 400, damping: 25 } }
  };

  const typingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
  };

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center select-none">
      {/* Chat window card */}
      <div
        className="w-full h-full rounded-2xl md:rounded-[32px] bg-paper shadow-[0_8px_30px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col z-10 transition-shadow hover:shadow-[0_12px_40px_rgba(96,165,250,0.15)]"
      >
        {/* Header */}
        <div className="bg-ink-blue px-4 py-3.5 flex items-center justify-between select-none shrink-0 z-20 shadow-sm">
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
        <div
          ref={scrollContainerRef}
          className="flex-1 p-4 overflow-y-auto flex flex-col justify-start min-h-0 bg-paper-dark/50 relative scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex flex-col space-y-3 w-full pb-2">
            {/* Message 1 */}
            <motion.div variants={msgVariants} initial="hidden" animate="visible" className="self-start max-w-[85%]">
              <div className="bg-paper text-ink-dark text-[11px] sm:text-xs px-3.5 py-2.5 rounded-2xl rounded-tl-sm font-body leading-snug shadow-sm">
                Привет! Чем я могу помочь вам сегодня?
              </div>
              <span className="text-[8px] sm:text-[9px] text-pencil mt-0.5 block pl-1">10:00</span>
            </motion.div>

            {/* Typing 1 */}
            <AnimatePresence>
              {step === 1 && (
                <motion.div variants={typingVariants} initial="hidden" animate="visible" exit="exit" className="self-start bg-paper px-3.5 py-2.5 rounded-2xl rounded-tl-sm flex items-center gap-1 shadow-sm">
                  <span className="w-1.5 h-1.5 bg-pencil rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-pencil rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-pencil rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Message 2 */}
            {step >= 2 && (
              <motion.div variants={msgVariants} initial="hidden" animate="visible" className="self-end max-w-[85%]">
                <div className="bg-ink-blue text-white text-[11px] sm:text-xs px-3.5 py-2.5 rounded-2xl rounded-tr-sm font-body leading-snug shadow-sm">
                  Сколько стоит доставка?
                </div>
                <span className="text-[8px] sm:text-[9px] text-pencil mt-0.5 block pr-1 text-right">10:01</span>
              </motion.div>
            )}

            {/* Typing 2 */}
            <AnimatePresence>
              {step === 3 && (
                <motion.div variants={typingVariants} initial="hidden" animate="visible" exit="exit" className="self-start bg-paper px-3.5 py-2.5 rounded-2xl rounded-tl-sm flex items-center gap-1 shadow-sm">
                  <span className="w-1.5 h-1.5 bg-pencil rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-pencil rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-pencil rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Message 3 */}
            {step >= 4 && (
              <motion.div variants={msgVariants} initial="hidden" animate="visible" className="self-start max-w-[85%]">
                <div className="bg-paper text-ink-dark text-[11px] sm:text-xs px-3.5 py-2.5 rounded-2xl rounded-tl-sm font-body leading-snug shadow-sm">
                  Доставка бесплатна при заказе от 3000 ₽. Подсказать условия для вашего города?
                </div>
                <span className="text-[8px] sm:text-[9px] text-pencil mt-0.5 block pl-1">10:01</span>
              </motion.div>
            )}

            {/* Message 4 */}
            {step >= 5 && (
              <motion.div variants={msgVariants} initial="hidden" animate="visible" className="self-end max-w-[85%]">
                <div className="bg-ink-blue text-white text-[11px] sm:text-xs px-3.5 py-2.5 rounded-2xl rounded-tr-sm font-body leading-snug shadow-sm">
                  Для Москвы
                </div>
                <span className="text-[8px] sm:text-[9px] text-pencil mt-0.5 block pr-1 text-right">10:02</span>
              </motion.div>
            )}

            {/* Typing 3 */}
            <AnimatePresence>
              {step === 6 && (
                <motion.div variants={typingVariants} initial="hidden" animate="visible" exit="exit" className="self-start bg-paper px-3.5 py-2.5 rounded-2xl rounded-tl-sm flex items-center gap-1 shadow-sm">
                  <span className="w-1.5 h-1.5 bg-pencil rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-pencil rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-pencil rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Message 5 */}
            {step >= 7 && (
              <motion.div variants={msgVariants} initial="hidden" animate="visible" className="self-start max-w-[85%]">
                <div className="bg-paper text-ink-dark text-[11px] sm:text-xs px-3.5 py-2.5 rounded-2xl rounded-tl-sm font-body leading-snug shadow-sm">
                  В Москве доставляем бесплатно на следующий день курьером
                </div>
                <span className="text-[8px] sm:text-[9px] text-pencil mt-0.5 block pl-1">10:02</span>
              </motion.div>
            )}

            {/* Quick reply action button */}
            {step >= 8 && (
              <motion.div variants={msgVariants} initial="hidden" animate="visible" className="self-center pt-2 pb-1">
                <a
                  href="contacts"
                  className="inline-flex items-center gap-1.5 bg-ink-blue hover:bg-coral text-white text-[10px] sm:text-[11px] font-bold px-4 py-2.5 rounded-full shadow-md transition-all hover:scale-105 active:scale-95"
                >
                  <span>Заказать ИИ-ассистента</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </motion.div>
            )}
            {/* Added empty div to ensure scrolling padding at bottom */}
            <div className="h-1" />
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-paper flex items-center gap-2 select-none shrink-0 z-20">
          <div className="flex-1 rounded-xl px-3 py-2 bg-paper-dark text-left text-[10px] text-pencil">
            Введите вопрос...
          </div>
          <div className="w-8 h-8 rounded-lg bg-ink-blue flex items-center justify-center text-white cursor-pointer hover:bg-coral transition-colors shadow-sm">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating launcher icon removed per user request */}
    </div>
  );
};

/* ==========================================
   DESKTOP VISUAL ANIMATIONS (SCROLL-LINKED)
   ========================================== */
interface DesktopVisualProps {
  index: number;
}

const DesktopVisual = ({ index }: DesktopVisualProps) => {
  const shouldReduceMotion = useReducedMotion();

  switch (index) {
    case 0: // 01 / Web Development (Now handled in the main component)
      return null;

    case 1: // 02 / AI Bot
      return <ChatWidgetMockup />;

    case 2: // 03 / Advertising & Analytics
      return (
        <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
          {/* Grid background & Radar concentric rings */}
          <circle cx="200" cy="180" r="140" stroke="var(--ink-dark)" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.1" />
          <circle cx="200" cy="180" r="100" stroke="var(--ink-dark)" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.15" />
          <circle cx="200" cy="180" r="60" stroke="var(--ink-dark)" strokeWidth="0.75" opacity="0.1" />

          {/* Radar Sweep line */}
          <motion.g animate={{ rotate: 360 }} transition={{ repeat: shouldReduceMotion ? 0 : Infinity, duration: 6, ease: "linear" }} style={{ originX: "200px", originY: "180px" }}>
            <line x1="200" y1="180" x2="200" y2="40" stroke="var(--ink-dark)" strokeWidth="1" opacity="0.2" />
            <polygon points="200,180 200,40 225,43" fill="var(--ink-dark)" opacity="0.02" />
          </motion.g>

          {/* Funnel structure */}
          <motion.g animate={{ skewY: [0, 5, 0] }} transition={{ repeat: shouldReduceMotion ? 0 : Infinity, duration: 9, ease: "easeInOut" }} style={{ originX: "200px", originY: "180px" }}>
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
                repeat: shouldReduceMotion ? 0 : Infinity,
                duration: 4,
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
                repeat: shouldReduceMotion ? 0 : Infinity,
                duration: 12,
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
                repeat: shouldReduceMotion ? 0 : Infinity,
                duration: 18,
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
            transition={{ repeat: shouldReduceMotion ? 0 : Infinity, duration: 3 }}
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

          <motion.g animate={{ y: [-5, 5, -5], skewX: [0, 2, 0] }} transition={{ repeat: shouldReduceMotion ? 0 : Infinity, duration: 7.5, ease: "easeInOut" }} style={{ originX: "200px", originY: "200px" }}>
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
              transition={{ repeat: shouldReduceMotion ? 0 : Infinity, duration: 3, ease: "easeInOut" }}
            />
            <motion.path
              d="M 155 210 L 163 210 M 159 206 L 159 214"
              stroke="var(--coral)"
              strokeWidth="1"
              strokeLinecap="round"
              animate={{ opacity: [1, 0.2, 1], scale: [1.1, 0.8, 1.1] }}
              transition={{ repeat: shouldReduceMotion ? 0 : Infinity, duration: 3.5, ease: "easeInOut" }}
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
                transition={{ repeat: shouldReduceMotion ? 0 : Infinity, duration: 2.5, ease: "easeInOut" }}
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
                repeat: shouldReduceMotion ? 0 : Infinity,
                duration: 4.5,
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
                repeat: shouldReduceMotion ? 0 : Infinity,
                duration: 5,
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


