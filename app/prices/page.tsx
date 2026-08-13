"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import Link from "next/link";
import { CursorTrail } from "@/components/CursorTrail";
import { useReveal } from "@/hooks/useReveal";
import { Reveal } from "@/components/Reveal";
import { motion, AnimatePresence, animate } from "framer-motion";

const subscriptions = [
  {
    id: "lite",
    title: "Lite",
    target: "Старт бизнеса",
    price: "15 000 – 20 000 ₽",
    period: "/ мес",
    isPopular: false,
    description: "Техническая поддержка и стабильная работа вашей текущей воронки.",
    features: [
      "Поддержка сайта 24/7",
      "Быстрое исправление ошибок",
      "Базовый AI-консультант",
      "Еженедельная аналитика",
    ],
  },
  {
    id: "growth",
    title: "Growth",
    target: "Основа для роста",
    price: "30 000 – 50 000 ₽",
    period: "/ мес",
    badge: "Популярный",
    isPopular: true,
    description: "Комплексное ведение рекламы, сайта и постоянный рост конверсий.",
    features: [
      "Всё из тарифа Lite",
      "Оптимизация рекламных кампаний",
      "Доработки сайта для конверсий",
      "Внедрение AI-сценариев",
      "Сквозная аналитика",
      "Отчеты по стоимости лида",
    ],
  },
  {
    id: "pro",
    title: "Pro",
    target: "Команда под ключ",
    price: "70 000 – 150 000 ₽",
    period: "/ мес",
    isPopular: false,
    description: "Полное делегирование маркетинга и разработка IT-инфраструктуры.",
    features: [
      "Всё из тарифа Growth",
      "Постоянная оптимизация воронки",
      "Создание новых посадочных страниц",
      "Интеграции и API-синхронизация",
      "Масштабирование каналов трафика",
      "Разработка AI-инструментов",
    ],
  },
];

const priceCategories = [
  {
    id: "ads",
    title: "Реклама",
    items: [
      { name: "Яндекс Директ", price: "от 35 000 ₽" },
      { name: "Google Ads", price: "от 35 000 ₽" },
      { name: "VK Ads", price: "от 25 000 ₽" },
      { name: "Telegram Ads", price: "от 30 000 ₽" },
      { name: "Avito продвижение", price: "от 20 000 ₽" },
      { name: "Комплексный запуск", price: "от 60 000 ₽" },
    ],
  },
  {
    id: "smm",
    title: "SMM & Контент",
    items: [
      { name: "SMM для Telegram", price: "от 30 000 ₽" },
      { name: "SMM для ВКонтакте", price: "от 25 000 ₽" },
      { name: "SMM для Instagram", price: "от 35 000 ₽" },
      { name: "Reels / TikTok", price: "от 30 000 ₽" },
      { name: "Комплексное SMM", price: "от 60 000 ₽" },
      { name: "Упаковка под ключ", price: "от 20 000 ₽" },
    ],
  },
  {
    id: "geo",
    title: "Геопродвижение",
    items: [
      { name: "Яндекс.Карты", price: "от 12 000 ₽" },
      { name: "2ГИС", price: "от 12 000 ₽" },
      { name: "Комплексный гео-маркетинг", price: "от 24 000 ₽" },
    ],
  },
  {
    id: "web",
    title: "Сайты & AI",
    items: [
      { name: "Landing Page", price: "от 40 000 ₽" },
      { name: "Многостраничный сайт", price: "от 80 000 ₽" },
      { name: "Интернет-магазин", price: "от 150 000 ₽" },
      { name: "Техническая поддержка", price: "от 15 000 ₽" },
      { name: "Умный AI-ассистент", price: "от 25 000 ₽" },
    ],
  },
];

type TabType = "subscriptions" | "catalog";

export default function PricesPage() {
  useReveal();
  const [activeTab, setActiveTab] = useState<TabType>("subscriptions");

  useEffect(() => {
    // Плавно скроллим к тарифам при открытии страницы
    const timer = setTimeout(() => {
      const content = document.getElementById("pricing-content");
      if (content) {
        // Для мобильных устройств делаем отступ чуть меньше
        const isMobile = window.innerWidth < 768;
        const offset = isMobile ? 80 : 120;
        
        const elementPosition = content.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        // Премиальный супер-плавный скролл через framer-motion
        animate(window.scrollY, offsetPosition, {
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1], // Плавная Apple-like кривая Безье
          onUpdate: (latest) => window.scrollTo(0, latest)
        });
      }
    }, 900); // Чуть больше задержка для загрузки всех шрифтов и стартовых анимаций

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-paper overflow-x-clip font-body text-ink-dark transition-colors duration-500">
      <CursorTrail />
      <Header />

      <main className="relative z-10 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-5 md:px-10">

          {/* ── Page Header ── */}
          <Reveal delay={0.1}>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="font-heading text-5xl sm:text-7xl lg:text-[90px] font-black leading-[0.95] text-ink-dark tracking-tighter uppercase select-none mb-6">
                Цены и <br />
                <span className="font-serif italic text-coral lowercase font-normal tracking-normal">
                  тарифы.
                </span>
              </h1>
              <p className="font-body text-base sm:text-lg text-pencil leading-relaxed font-medium max-w-[540px] mx-auto">
                Прозрачная стоимость пакетного сопровождения и честные цены на разовые услуги.
              </p>
            </div>
          </Reveal>

          {/* ── Apple-Style Segmented Control (Native Theme) ── */}
          <Reveal delay={0.15}>
            <div id="pricing-content" className="flex justify-center mb-16">
              <div className="relative inline-flex items-center p-1.5 rounded-full bg-paper-dark border border-line-blue shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] backdrop-blur-xl">
                {/* Subscription Button */}
                <button
                  type="button"
                  onClick={() => setActiveTab("subscriptions")}
                  className={`relative px-7 py-3 rounded-full text-xs sm:text-sm font-heading font-extrabold uppercase tracking-wider transition-colors duration-200 select-none cursor-pointer z-10 ${
                    activeTab === "subscriptions"
                      ? "text-ink-dark"
                      : "text-pencil hover:text-ink-dark"
                  }`}
                >
                  {activeTab === "subscriptions" && (
                    <motion.div
                      layoutId="appleSegmentTab"
                      className="absolute inset-0 rounded-full bg-paper shadow-[0_4px_16px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] border border-line-blue/50"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">Подписка</span>
                </button>

                {/* Catalog Button */}
                <button
                  type="button"
                  onClick={() => setActiveTab("catalog")}
                  className={`relative px-7 py-3 rounded-full text-xs sm:text-sm font-heading font-extrabold uppercase tracking-wider transition-colors duration-200 select-none cursor-pointer z-10 ${
                    activeTab === "catalog"
                      ? "text-ink-dark"
                      : "text-pencil hover:text-ink-dark"
                  }`}
                >
                  {activeTab === "catalog" && (
                    <motion.div
                      layoutId="appleSegmentTab"
                      className="absolute inset-0 rounded-full bg-paper shadow-[0_4px_16px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] border border-line-blue/50"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">Разовые услуги</span>
                </button>
              </div>
            </div>
          </Reveal>

          {/* ── Content Switcher ── */}
          <AnimatePresence mode="wait">
            {activeTab === "subscriptions" ? (
              <motion.div
                key="subscriptions-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="mb-24"
              >
                {/* 3-Column Pristine Cards (Native Theme) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
                  {subscriptions.map((svc) => (
                    <div
                      key={svc.id}
                      className={`relative h-full flex flex-col justify-between p-8 sm:p-9 rounded-[32px] transition-all duration-300 group ${
                        svc.isPopular
                          ? "bg-paper border-2 border-coral shadow-[0_16px_40px_rgba(0,0,0,0.06)] transform hover:-translate-y-1"
                          : "bg-paper border border-line-blue shadow-sm hover:shadow-lg hover:border-line-blue/80 hover:-translate-y-1"
                      }`}
                    >
                      {/* Popular Badge */}
                      {svc.badge && (
                        <div className="absolute -top-3.5 right-6 bg-coral text-white font-heading text-[10px] font-black uppercase tracking-widest py-1 px-4 rounded-full shadow-sm">
                          {svc.badge}
                        </div>
                      )}

                      <div>
                        {/* Target & Title */}
                        <div className="mb-6">
                          <span className="font-heading text-[10px] font-extrabold text-coral uppercase tracking-widest block mb-1">
                            {svc.target}
                          </span>
                          <h3 className="font-heading text-2xl font-black text-ink-dark">
                            {svc.title}
                          </h3>
                        </div>

                        {/* Price */}
                        <div className="mb-6 pb-6 border-b border-line-blue/60 flex items-baseline gap-1.5">
                          <span className="font-heading text-2xl font-semibold tracking-tight text-ink-dark">
                            {svc.price.replace('₽', '').trim()}
                          </span>
                          <span className="font-body text-slate-400 text-sm md:text-base font-medium">
                            ₽ {svc.period}
                          </span>
                        </div>

                        <p className="font-body text-pencil text-sm leading-relaxed mb-6">
                          {svc.description}
                        </p>

                        {/* Features List */}
                        <ul className="space-y-3.5 mb-8">
                          {svc.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-3 text-xs md:text-sm text-ink-dark font-medium leading-tight">
                              <span className="w-1.5 h-1.5 rounded-full bg-coral shrink-0 mt-1.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Button */}
                      <Link
                        href="/#contact"
                        className={`w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full font-heading text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-sm ${
                          svc.isPopular
                            ? "bg-coral text-white hover:bg-coral-dark shadow-coral/20 hover:shadow-lg"
                            : "bg-paper-dark text-ink-dark hover:bg-ink-dark hover:text-paper"
                        }`}
                      >
                        Выбрать тариф
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="shrink-0">
                          <path
                            d="M3 8h10M9 4l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="catalog-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="mb-20"
              >
                {/* Pristine Clean Catalog Grid (Native Theme) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  {priceCategories.map((cat) => (
                    <div
                      key={cat.id}
                      className="bg-paper border border-line-blue rounded-[32px] p-6 sm:p-8 shadow-sm transition-all hover:shadow-md"
                    >
                      <h3 className="font-heading text-lg font-black text-ink-dark uppercase tracking-wider mb-6 pb-4 border-b border-line-blue/60">
                        {cat.title}
                      </h3>

                      <ul className="divide-y divide-line-blue/40">
                        {cat.items.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="py-3.5 px-4 -mx-4 rounded-2xl flex items-center justify-between gap-4 group hover:bg-paper-dark transition-colors duration-300"
                          >
                            <span className="font-body text-sm font-semibold text-pencil group-hover:text-ink-dark transition-colors duration-300">
                              {item.name}
                            </span>
                            <span className="font-heading font-medium text-ink-dark shrink-0 whitespace-nowrap flex items-baseline gap-1.5">
                              {item.price.includes('от') && item.price.includes('₽') && /\d/.test(item.price) ? (
                                <>
                                  <span className="text-xs md:text-sm text-slate-400 font-medium font-body">от</span>
                                  <span className="text-base md:text-lg font-semibold tracking-tight">{item.price.replace(/[^\d\s]/g, '').trim()}</span>
                                  <span className="text-sm text-slate-400 font-medium font-body">₽</span>
                                </>
                              ) : (
                                <span className="text-base md:text-lg font-semibold tracking-tight">{item.price}</span>
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Micro CTA ── */}
          <Reveal delay={0.3}>
            <div className="bg-paper border-2 border-line-blue rounded-[32px] p-8 sm:p-12 flex flex-col sm:flex-row sm:items-center justify-between gap-8 shadow-sm relative overflow-hidden group hover:border-coral/40 transition-colors duration-500">
              <div className="relative z-10">
                <span className="font-heading text-[10px] md:text-xs font-black uppercase tracking-widest text-coral block mb-2">
                  Особая задача
                </span>
                <h3 className="font-heading text-xl md:text-3xl font-black text-ink-dark mb-2">
                  Нужно что-то другое?
                </h3>
                <p className="font-body text-sm text-pencil max-w-sm">
                  Расскажите о вашей задаче — предложим подходящее решение и подготовим расчет.
                </p>
              </div>

              <div className="relative z-10 shrink-0">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-ink-dark text-paper font-heading text-xs font-extrabold uppercase tracking-wider py-4 px-8 rounded-full shadow-lg hover:bg-coral transition-colors duration-300 cursor-pointer"
                >
                  Обсудить проект →
                </Link>
              </div>
            </div>
          </Reveal>

        </div>

        {/* CTA */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
