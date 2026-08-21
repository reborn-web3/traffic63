"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { WebsiteCaseMockup } from "./WebsiteCaseMockup";
import { AnalyticsMockup } from "./AnalyticsMockup";
import { SmmMockup } from "./SmmMockup";

interface ServiceBlock {
  tag: string;
  titlePart1: string;
  titleItalic: string;
  titlePart2?: string;
  italicColor?: "blue" | "coral";
  description: string;
  slug: string;
}

const SERVICES: ServiceBlock[] = [
  {
    tag: "РАЗРАБОТКА САЙТОВ",
    titlePart1: "Делаем сайты, которые",
    titleItalic: "реально продают",
    titlePart2: "ваши услуги.",
    italicColor: "coral",
    description: "Создаем современные сайты под ключ: от стильного дизайна до настройки заявок. Упакуем ваш продукт так, чтобы клиентам хотелось купить, а вам было удобно получать новые заказы.",
    slug: "web-development",
  },
  {
    tag: "УМНЫЕ ЧАТ-БОТЫ",
    titlePart1: "ИИ-помощник ответит",
    titleItalic: "за одну секунду",
    titlePart2: "в любое время.",
    italicColor: "coral",
    description: "Подключаем к сайту ИИ -ассистента. Он общается с клиентами, отвечает на вопросы о ценах и доставке круглосуточно и собирает контакты, пока вы и ваши менеджеры отдыхаете.",
    slug: "chatbots",
  },
  {
    tag: "РЕКЛАМА & НАСТРОЙКА",
    titlePart1: "Приводим клиентов,",
    titleItalic: "готовых купить",
    titlePart2: "прямо сейчас.",
    italicColor: "blue",
    description: "Настраиваем рекламу в Яндекс и соцсетях. Показываем объявления только тем, кто ищет ваши услуги прямо сейчас. Следим за ценой каждой заявки, чтобы окупать рекламный бюджет.",
    slug: "advertising",
  },
  {
    tag: "ВЕДЕНИЕ СОЦСЕТЕЙ",
    titlePart1: "Оживляем страницы в соцсетях",
    titleItalic: "для роста доверия.",
    titlePart2: "",
    italicColor: "blue",
    description: "Красиво оформляем ваши соцсети, пишем простые и интересные посты, делаем фото и видео. Помогаем вашим клиентам узнать о вас больше и начать доверять вашему бренду.",
    slug: "smm",
  },
];

export const ServiceClimber = () => {
  return (
    <div className="relative w-full bg-paper border-t border-line-blue py-16 md:py-32" id="services">
      <div className="mx-auto px-5 md:px-10 max-w-7xl">
        <div className="flex flex-col gap-16 md:gap-32">
          {SERVICES.map((svc, idx) => (
            <ServiceRowItem key={svc.slug} svc={svc} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

/* ==========================================
   SERVICE ROW ITEM (SMOOTH AESTHETIC REVEAL)
   ========================================== */
const ServiceRowItem = ({ svc, idx }: { svc: ServiceBlock; idx: number }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rowRef, { once: true, margin: "-12% 0px -12% 0px" });
  const isReversed = idx % 2 !== 0;

  return (
    <div
      ref={rowRef}
      className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text Content with subtle staggered lift */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full md:w-1/2 flex flex-col justify-center"
      >
        <motion.h3
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink-dark leading-tight select-none"
        >
          {svc.titlePart1}{" "}
          <span className="font-serif italic text-coral font-normal lowercase tracking-normal">
            {svc.titleItalic}
          </span>
          {svc.titlePart2 && ` ${svc.titlePart2}`}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-pencil text-base sm:text-lg leading-relaxed mt-6 max-w-md"
        >
          {svc.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex justify-start"
        >
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
        </motion.div>
      </motion.div>

      {/* Media / Interactive Mockup with soft scale & floating reveal */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.96 }}
        transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="w-full md:w-1/2 flex justify-center items-center"
      >
        {idx === 0 ? (
          <WebsiteCaseMockup />
        ) : idx === 1 ? (
          <ChatWidgetMockup />
        ) : idx === 2 ? (
          <AnalyticsMockup />
        ) : (
          <SmmMockup />
        )}
      </motion.div>
    </div>
  );
};

/* ==========================================
   AI CHAT BOT WIDGET MOCKUP (AESTHETIC & CLEAN)
   ========================================== */
const ChatWidgetMockup = () => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Trigger animation once when scrolled into view
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const [step, setStep] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (inputValue.trim()) {
      router.push(`/contacts?message=${encodeURIComponent(inputValue.trim())}`);
    } else {
      router.push("/contacts");
    }
  };

  // Start sequence once in view
  useEffect(() => {
    if (isInView && step === 0) {
      setStep(1);
    }
  }, [isInView, step]);

  // Natural pacing between messages
  useEffect(() => {
    if (step === 0 || step >= 8) return;

    const delays = [0, 600, 1400, 700, 1400, 900, 700, 1400];
    const timer = setTimeout(() => setStep((s) => s + 1), delays[step]);

    return () => clearTimeout(timer);
  }, [step]);

  // Smooth auto-scroll to bottom
  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollEl = scrollContainerRef.current;
      scrollEl.scrollTo({
        top: scrollEl.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [step]);

  const msgVariants = {
    hidden: { opacity: 0, y: 12, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 400, damping: 25 },
    },
  };

  const typingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[580px] flex flex-col items-center select-none py-2"
    >
      {/* Ambient background glow */}
      <div
        className="absolute -inset-2 sm:-inset-6 bg-gradient-to-tr from-blue-500/10 via-indigo-500/5 to-slate-400/10 rounded-[36px] blur-3xl -z-10 pointer-events-none opacity-60"
        aria-hidden="true"
      />

      {/* Main Browser Card */}
      <div className="relative w-full h-[360px] sm:h-[362px] rounded-2xl sm:rounded-[24px] bg-paper dark:bg-paper-dark border border-line-blue/80 dark:border-white/10 shadow-[0_16px_45px_rgba(15,23,42,0.1)] overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-[0_24px_55px_rgba(37,99,235,0.14)]">
        {/* macOS Window Header */}
        <div className="bg-paper-dark/95 dark:bg-slate-900/90 backdrop-blur-md px-3.5 sm:px-4 py-3 sm:py-3.5 border-b border-line-blue/80 dark:border-white/10 flex items-center shrink-0 z-20">
          {/* Left: Window Buttons (macOS) */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/40 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/40 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/40 inline-block" />
          </div>
        </div>

        {/* Message body */}
        <div
          ref={scrollContainerRef}
          className="flex-1 p-3.5 sm:p-4 overflow-y-auto flex flex-col justify-start min-h-0 bg-paper-dark/30 dark:bg-slate-950/40 relative scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex flex-col space-y-2.5 sm:space-y-3 w-full pb-3">
            {/* Message 1 */}
            <motion.div variants={msgVariants} initial="hidden" animate="visible" className="self-start max-w-[85%]">
              <div className="bg-paper dark:bg-slate-900 text-ink-dark dark:text-white border border-line-blue/40 dark:border-white/10 text-[11px] sm:text-xs px-3.5 py-2.5 rounded-2xl rounded-tl-xs font-body leading-snug shadow-xs">
                Привет! Чем я могу помочь вам сегодня?
              </div>
              <span className="text-[8px] sm:text-[9px] text-pencil dark:text-pencil/70 mt-0.5 block pl-1">10:00</span>
            </motion.div>

            {/* Typing 1 */}
            <AnimatePresence>
              {step === 1 && (
                <motion.div variants={typingVariants} initial="hidden" animate="visible" exit="exit" className="self-start bg-paper dark:bg-slate-900 border border-line-blue/40 dark:border-white/10 px-3.5 py-2.5 rounded-2xl rounded-tl-xs flex items-center gap-1 shadow-xs">
                  <span className="w-1.5 h-1.5 bg-pencil rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-pencil rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-pencil rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Message 2 */}
            {step >= 2 && (
              <motion.div variants={msgVariants} initial="hidden" animate="visible" className="self-end max-w-[85%]">
                <div className="bg-ink-blue text-white text-[11px] sm:text-xs px-3.5 py-2.5 rounded-2xl rounded-tr-xs font-body leading-snug shadow-xs">
                  Сколько стоит доставка?
                </div>
                <span className="text-[8px] sm:text-[9px] text-pencil dark:text-pencil/70 mt-0.5 block pr-1 text-right">10:01</span>
              </motion.div>
            )}

            {/* Typing 2 */}
            <AnimatePresence>
              {step === 3 && (
                <motion.div variants={typingVariants} initial="hidden" animate="visible" exit="exit" className="self-start bg-paper dark:bg-slate-900 border border-line-blue/40 dark:border-white/10 px-3.5 py-2.5 rounded-2xl rounded-tl-xs flex items-center gap-1 shadow-xs">
                  <span className="w-1.5 h-1.5 bg-pencil rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-pencil rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-pencil rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Message 3 */}
            {step >= 4 && (
              <motion.div variants={msgVariants} initial="hidden" animate="visible" className="self-start max-w-[85%]">
                <div className="bg-paper dark:bg-slate-900 text-ink-dark dark:text-white border border-line-blue/40 dark:border-white/10 text-[11px] sm:text-xs px-3.5 py-2.5 rounded-2xl rounded-tl-xs font-body leading-snug shadow-xs">
                  Доставка бесплатна при заказе от 3000 ₽. Подсказать условия для вашего города?
                </div>
                <span className="text-[8px] sm:text-[9px] text-pencil dark:text-pencil/70 mt-0.5 block pl-1">10:01</span>
              </motion.div>
            )}

            {/* Message 4 */}
            {step >= 5 && (
              <motion.div variants={msgVariants} initial="hidden" animate="visible" className="self-end max-w-[85%]">
                <div className="bg-ink-blue text-white text-[11px] sm:text-xs px-3.5 py-2.5 rounded-2xl rounded-tr-xs font-body leading-snug shadow-xs">
                  Для Москвы
                </div>
                <span className="text-[8px] sm:text-[9px] text-pencil dark:text-pencil/70 mt-0.5 block pr-1 text-right">10:02</span>
              </motion.div>
            )}

            {/* Typing 3 */}
            <AnimatePresence>
              {step === 6 && (
                <motion.div variants={typingVariants} initial="hidden" animate="visible" exit="exit" className="self-start bg-paper dark:bg-slate-900 border border-line-blue/40 dark:border-white/10 px-3.5 py-2.5 rounded-2xl rounded-tl-xs flex items-center gap-1 shadow-xs">
                  <span className="w-1.5 h-1.5 bg-pencil rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-pencil rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-pencil rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Message 5 */}
            {step >= 7 && (
              <motion.div variants={msgVariants} initial="hidden" animate="visible" className="self-start max-w-[85%]">
                <div className="bg-paper dark:bg-slate-900 text-ink-dark dark:text-white border border-line-blue/40 dark:border-white/10 text-[11px] sm:text-xs px-3.5 py-2.5 rounded-2xl rounded-tl-xs font-body leading-snug shadow-xs">
                  В Москве доставляем бесплатно на следующий день курьером
                </div>
                <span className="text-[8px] sm:text-[9px] text-pencil dark:text-pencil/70 mt-0.5 block pl-1">10:02</span>
              </motion.div>
            )}

            {/* Quick reply action button */}
            {step >= 8 && (
              <motion.div variants={msgVariants} initial="hidden" animate="visible" className="self-center pt-2 pb-1">
<<<<<<< HEAD
                <Link
                  href="/contacts"
                  className="inline-flex items-center gap-1.5 bg-ink-blue hover:bg-coral text-white text-[10px] sm:text-[11px] font-bold px-4 py-2.5 rounded-full shadow-md transition-all hover:scale-105 active:scale-95"
=======
                <a
                  href="/contacts"
                  className="inline-flex items-center gap-1.5 bg-ink-blue hover:bg-coral text-white text-[10px] sm:text-[11px] font-bold px-4 py-2.5 rounded-full shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
>>>>>>> 406fb72 (redesign)
                >
                  <span>Заказать ИИ-ассистента</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </motion.div>
            )}
            <div className="h-1" />
          </div>
        </div>

        {/* Footer with Interactive Input & Redirect */}
        <form
          onSubmit={handleSendMessage}
          className="p-2.5 sm:p-3 bg-paper dark:bg-paper-dark border-t border-line-blue/40 dark:border-white/10 flex items-center gap-2 select-none shrink-0 z-20"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Введите вопрос..."
            className="flex-1 rounded-full px-4 py-2 bg-white/90 dark:bg-slate-900/90 text-ink-dark dark:text-white placeholder:text-pencil/50 text-[11px] sm:text-xs border border-black/[0.06] dark:border-white/[0.08] shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] focus:border-ink-blue/40 dark:focus:border-blue-400/40 focus:outline-none transition-all font-body select-text"
          />
          <button
            type="submit"
            aria-label="Перейти к контактам"
            className="w-8 h-8 rounded-full bg-ink-blue flex items-center justify-center text-white cursor-pointer hover:bg-coral transition-all shadow-xs shrink-0 active:scale-95"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};


