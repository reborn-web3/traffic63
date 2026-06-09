"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

interface FAQItem {
  question: string;
  answer: string;
}

const PlusIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="shrink-0 transition-transform duration-300"
    style={{ transform: isOpen ? "rotate(135deg)" : "rotate(0deg)" }}
  >
    <path
      d="M12 5V19M5 12H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Какие услуги вы предоставляете?",
      answer: "Мы закрываем три ключевых направления: performance-маркетинг (настройка контекстной и таргетированной рекламы, сквозная аналитика, рост продаж), UX/UI дизайн (веб-интерфейсы, мобильные приложения, брендинг) и веб-разработку (корпоративные сайты, веб-сервисы, интеграция AI-решений)."
    },
    {
      question: "Как строится процесс работы над проектом?",
      answer: "Работа делится на прозрачные этапы: от аналитики, сбора требований и прототипирования до финальной разработки, тестирования и запуска. На каждом этапе вы получаете оцифрованные промежуточные результаты, регулярную отчетность и прямую связь с командой."
    },
    {
      question: "Сколько времени занимает создание сайта или запуск рекламы?",
      answer: "Запуск рекламных кампаний обычно занимает от 7 до 14 дней. Разработка полноценного сайта или интерфейса — от 1 до 3 месяцев, в зависимости от объема и сложности функционала. Точные сроки мы фиксируем в договоре перед началом работ."
    },
    {
      question: "Работаете ли вы по договору и с юридическими лицами?",
      answer: "Да, мы работаем полностью официально. Заключаем двусторонний договор (с ИП или ООО), предоставляем закрывающие акты и работаем по безналичному расчету. Все обязательства, сроки, KPI и финальная стоимость фиксируются в договоре."
    },
    {
      question: "Оказываете ли вы поддержку после запуска?",
      answer: "Да, мы не бросаем проекты после релиза. Мы оказываем техническую поддержку сайтов (мониторинг работы, обновление контента, исправление ошибок), оптимизируем рекламные кампании на основе накапливаемой аналитики и помогаем масштабировать проект по мере роста вашего бизнеса."
    }
  ];

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-white py-24 lg:py-32 overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-5 md:px-10 relative z-10">
        
        {/* Typographic Headline matching Hero */}
        <Reveal delay={0.1}>
          <div className="max-w-[1100px] text-left mb-12 lg:mb-16">
            <h2 className="font-heading text-4xl sm:text-7xl lg:text-[110px] font-black leading-[0.95] text-ink-dark tracking-tighter uppercase select-none">
              Ответы на <br />
              <span className="font-serif italic text-coral lowercase font-normal tracking-normal">вопросы.</span>
            </h2>
          </div>
        </Reveal>

        {/* Description Row (border-t separated, single column) matching Hero */}
        <Reveal delay={0.2}>
          <div className="border-t border-slate-200 pt-10 pb-12 md:pb-16 text-left">
            <p className="font-body text-lg md:text-xl lg:text-[22px] text-pencil leading-relaxed font-medium max-w-[720px]">
              Собрали здесь ответы на самые частые вопросы о процессах работы, стоимости и поддержке проектов. Если не нашли нужный ответ — напишите нам.
            </p>
          </div>
        </Reveal>

        {/* FAQ Accordion List */}
        <div className="max-w-[1000px] mx-auto mt-8">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;
            const itemNum = String(index + 1).padStart(2, "0");

            return (
              <Reveal key={index} delay={0.1 + index * 0.05}>
                <div 
                  className="border-t border-slate-200 py-6 md:py-8 cursor-pointer group"
                  onClick={() => toggleIndex(index)}
                >
                  <div className="flex items-start justify-between gap-4 md:gap-8">
                    <div className="flex items-start gap-4 md:gap-8 flex-1">
                      <span className="font-body text-xs font-black text-ink-dark select-none mt-2">
                        {itemNum}
                      </span>
                      <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-ink-dark group-hover:text-coral transition-colors duration-300">
                        {item.question}
                      </h3>
                    </div>
                    
                    <button 
                      className="text-pencil group-hover:text-coral transition-colors duration-300 focus:outline-none mt-1"
                      aria-label={isOpen ? "Свернуть ответ" : "Развернуть ответ"}
                    >
                      <PlusIcon isOpen={isOpen} />
                    </button>
                  </div>

                  {/* Smooth height expansion answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: "auto", 
                          opacity: 1,
                          transition: {
                            height: { duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] },
                            opacity: { duration: 0.25, delay: 0.1 }
                          }
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: {
                            height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                            opacity: { duration: 0.15 }
                          }
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pl-8 md:pl-12 pr-4 pt-4 pb-2">
                          <p className="font-body text-base md:text-lg text-pencil leading-relaxed max-w-[800px]">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
          {/* Bottom border line to seal the accordion list */}
          <div className="border-t border-slate-200"></div>
        </div>

      </div>
    </section>
  );
};
