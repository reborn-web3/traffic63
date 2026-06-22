"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const AgencyBanner = () => {
  return (
    <section
      id="agency-banner"
      className="bg-paper text-ink-dark py-16 md:py-24 border-t border-line-blue/40"
    >
      <div className="container mx-auto px-5 md:px-10">
        
        {/* Centered Slogan Header */}
        <div className="max-w-[800px] mx-auto text-center mb-12 md:mb-16">
          <motion.h2
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="font-heading text-4xl sm:text-6xl font-extrabold leading-[1.1] text-ink-dark tracking-tight"
          >
            {["Фокусируйтесь", "на", "продукте."].map((word, i) => (
              <React.Fragment key={i}>
                <span className="inline-block overflow-hidden pb-1">
                  <motion.span
                    variants={{
                      hidden: { y: "100%" },
                      visible: {
                        y: 0,
                        transition: {
                          duration: 0.8,
                          ease: [0.16, 1, 0.3, 1],
                        },
                      },
                    }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
                {i < 2 && " "}
              </React.Fragment>
            ))}
            <br />
            <motion.span
              variants={{
                hidden: {
                  opacity: 0,
                  y: 15,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.0,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
              className="font-serif italic text-coral font-normal inline-block origin-left mt-2 sm:mt-3 will-change-[transform,opacity]"
            >
              остальное сделаем мы.
            </motion.span>
          </motion.h2>
        </div>

        {/* 4-Column Minimalist Case Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Case 1: Разработка */}
          <div className="flex flex-col justify-between items-start text-left p-6 bg-paper border border-line-blue/60 hover:border-coral/30 rounded-[20px] transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.015)] group">
            <div>
              <span className="font-heading text-[9px] font-bold tracking-widest text-pencil/40 uppercase mb-3 block">
                // Web-разработка
              </span>
              <div className="text-3xl sm:text-4xl font-light tracking-tight text-ink-dark mb-4">
                3x <span className="font-serif italic text-coral text-xl sm:text-2xl ml-0.5">ускорение</span>
              </div>
              <p className="font-body text-xs sm:text-sm text-pencil/80 leading-relaxed mb-6">
                Спроектировали и разработали высокопроизводительный сайт с адаптивной версткой и идеальной скоростью загрузки.
              </p>
            </div>
            <Link
              href="/services/web-development"
              className="text-xs font-bold uppercase tracking-wider text-ink-dark hover:text-coral transition-colors duration-200"
              style={{ textDecoration: "none" }}
            >
              Подробнее →
            </Link>
          </div>

          {/* Case 2: AI Бот */}
          <div className="flex flex-col justify-between items-start text-left p-6 bg-paper border border-line-blue/60 hover:border-coral/30 rounded-[20px] transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.015)] group">
            <div>
              <span className="font-heading text-[9px] font-bold tracking-widest text-pencil/40 uppercase mb-3 block">
                // Интеграция ИИ
              </span>
              <div className="text-3xl sm:text-4xl font-light tracking-tight text-ink-dark mb-4">
                85% <span className="font-serif italic text-coral text-xl sm:text-2xl ml-0.5">автоматизация</span>
              </div>
              <p className="font-body text-xs sm:text-sm text-pencil/80 leading-relaxed mb-6">
                Создали умного AI-ассистента для обработки входящих лидов и автоматических ответов на вопросы пользователей.
              </p>
            </div>
            <Link
              href="/blog/zachem-biznesu-ai-assistent"
              className="text-xs font-bold uppercase tracking-wider text-ink-dark hover:text-coral transition-colors duration-200"
              style={{ textDecoration: "none" }}
            >
              Подробнее →
            </Link>
          </div>

          {/* Case 3: Таргет */}
          <div className="flex flex-col justify-between items-start text-left p-6 bg-paper border border-line-blue/60 hover:border-coral/30 rounded-[20px] transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.015)] group">
            <div>
              <span className="font-heading text-[9px] font-bold tracking-widest text-pencil/40 uppercase mb-3 block">
                // Таргетированная реклама
              </span>
              <div className="text-3xl sm:text-4xl font-light tracking-tight text-ink-dark mb-4">
                3000% <span className="font-serif italic text-coral text-xl sm:text-2xl ml-0.5">ROI</span>
              </div>
              <p className="font-body text-xs sm:text-sm text-pencil/80 leading-relaxed mb-6">
                Разработали окупаемую рекламную связку в социальной сети ВКонтакте с рекордным показателем рентабельности инвестиций.
              </p>
            </div>
            <Link
              href="/blog/3000-roi-effektivnaya-vk-reklama-or-reklamnyi-keis"
              className="text-xs font-bold uppercase tracking-wider text-ink-dark hover:text-coral transition-colors duration-200"
              style={{ textDecoration: "none" }}
            >
              Подробнее →
            </Link>
          </div>

          {/* Case 4: SMM */}
          <div className="flex flex-col justify-between items-start text-left p-6 bg-paper border border-line-blue/60 hover:border-coral/30 rounded-[20px] transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.015)] group">
            <div>
              <span className="font-heading text-[9px] font-bold tracking-widest text-pencil/40 uppercase mb-3 block">
                // SMM-продвижение
              </span>
              <div className="text-3xl sm:text-4xl font-light tracking-tight text-ink-dark mb-4">
                +600 <span className="font-serif italic text-coral text-xl sm:text-2xl ml-0.5">подписчиков</span>
              </div>
              <p className="font-body text-xs sm:text-sm text-pencil/80 leading-relaxed mb-6">
                Привлекли целевую аудиторию в сообщество бренда, разработали контент-стратегию и оптимизировали конверсию подписок.
              </p>
            </div>
            <Link
              href="/blog/kak-snizit-cpl-yandex-direct"
              className="text-xs font-bold uppercase tracking-wider text-ink-dark hover:text-coral transition-colors duration-200"
              style={{ textDecoration: "none" }}
            >
              Подробнее →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AgencyBanner;
