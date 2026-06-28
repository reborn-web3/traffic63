"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import Image from "next/image";
import Link from "next/link";
import { CursorTrail } from "@/components/CursorTrail";
import { useReveal } from "@/hooks/useReveal";

const subscriptions = [
  {
    title: "Lite (Старт)",
    price: "15 000 – 20 000 ₽",
    period: "/ мес",
    priceNote: "для небольшого бизнеса",
    icon: "/images/editorial_tech.png",
    accentColor: "var(--mint)",
    accentBgClass: "bg-mint/10",
    textColorClass: "text-mint",
    badgeColorClass: "bg-mint/10 text-mint",
    description: "Поддержание работоспособности и контроль стабильности вашей воронки привлечения.",
    features: [
      "Поддержка работоспособности сайта",
      "Быстрое исправление ошибок на страницах",
      "Базовая поддержка AI-консультанта",
      "Еженедельная аналитика посещаемости",
    ],
  },
  {
    title: "Growth (Рост)",
    price: "30 000 – 50 000 ₽",
    period: "/ мес",
    priceNote: "основной тариф для развития",
    icon: "/images/editorial_marketing.png",
    accentColor: "var(--coral)",
    accentBgClass: "bg-coral/10",
    textColorClass: "text-coral",
    badgeColorClass: "bg-coral/10 text-coral",
    badge: "🔥 Выгоднее",
    description: "Комплексное ведение и постоянное улучшение воронки. Оптимально для стабильного притока лидов.",
    features: [
      "Всё из тарифа Lite",
      "Ведение, оптимизация и масштабирование рекламы",
      "Ежемесячные доработки сайта для роста конверсии",
      "Проектирование новых сценариев AI-бота",
      "Настройка автоматизаций (Telegram / CRM)",
      "Регулярные отчеты по стоимости лидов",
    ],
  },
  {
    title: "Pro (Партнер)",
    price: "70 000 – 150 000 ₽",
    period: "/ мес",
    priceNote: "максимальное вовлечение",
    icon: "/images/editorial_design.png",
    accentColor: "var(--lavender)",
    accentBgClass: "bg-lavender/10",
    textColorClass: "text-lavender",
    badgeColorClass: "bg-lavender/10 text-lavender",
    badge: "👑 Команда под ключ",
    description: "Для компаний, готовых к кратному росту. Полное делегирование маркетинга и IT-инфраструктуры.",
    features: [
      "Всё из тарифа Growth",
      "Постоянная оптимизация всей воронки продаж",
      "Создание новых посадочных страниц (Landing Pages)",
      "Запуск и ведение новых рекламных кампаний",
      "Сложные интеграции и синхронизация по API",
      "Разработка AI-инструментов для сотрудников",
      "Регулярные стратегические сессии",
    ],
  },
];

const priceCategories = [
  {
    title: "РЕКЛАМА",
    accentColor: "var(--coral)",
    accentBgClass: "bg-coral/10",
    textColorClass: "text-coral",
    items: [
      { name: "Яндекс Директ", price: "от 35 000 ₽" },
      { name: "Google Ads", price: "от 35 000 ₽" },
      { name: "VK Ads", price: "от 25 000 ₽" },
      { name: "Telegram Ads", price: "от 30 000 ₽" },
      { name: "Avito продвижение", price: "от 20 000 ₽" },
      { name: "Комплексная реклама", price: "от 60 000 ₽" },
    ],
  },
  {
    title: "SMM & КОНТЕНТ",
    accentColor: "var(--lavender)",
    accentBgClass: "bg-lavender/10",
    textColorClass: "text-lavender",
    items: [
      { name: "SMM для Instagram", price: "от 35 000 ₽" },
      { name: "SMM для VK", price: "от 25 000 ₽" },
      { name: "SMM для Telegram", price: "от 30 000 ₽" },
      { name: "SMM для TikTok", price: "от 30 000 ₽" },
      { name: "Комплексное SMM продвижение", price: "от 60 000 ₽" },
      { name: "Оформление сообщества под ключ", price: "от 20 000 ₽" },
    ],
  },
  {
    title: "ГЕОПРОДВИЖЕНИЕ",
    accentColor: "var(--mint)",
    accentBgClass: "bg-mint/10",
    textColorClass: "text-mint",
    items: [
      { name: "Продвижение в Яндекс.Карты", price: "от 12 000 ₽" },
      { name: "Продвижение в 2ГИС", price: "от 12 000 ₽" },
      { name: "Комплексное продвижение", price: "от 24 000 ₽" },
    ],
  },
  {
    title: "САЙТ",
    accentColor: "var(--accent-blue)",
    accentBgClass: "bg-accent-blue/10",
    textColorClass: "text-accent-blue",
    items: [
      { name: "Одностраничный сайт", price: "от 40 000 ₽" },
      { name: "Многостраничный сайт", price: "от 80 000 ₽" },
      { name: "Интернет-магазин", price: "от 150 000 ₽" },
      { name: "Техническая поддержка и сопровождение сайтов", price: "от 15 000 ₽" },
      { name: "Разработка умного ИИ-ассистента на сайт", price: "от 25 000 ₽" },
    ],
  },
];

export default function PricesPage() {
  useReveal();

  return (
    <div className="relative min-h-screen bg-paper overflow-x-clip font-body">
      <CursorTrail />

      <Header />

      <main className="relative z-10 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-5 md:px-10">

          {/* ── Page Header ── */}
          <div className="max-w-3xl mb-16 reveal">
            <span className="font-heading text-[10px] font-extrabold tracking-widest text-coral uppercase mb-6 block select-none">
              ✦ Стоимость услуг
            </span>

            <h1 className="font-heading text-4xl sm:text-7xl lg:text-[110px] font-black leading-[0.95] text-ink-dark tracking-tighter uppercase select-none mb-12">
              Цены и <br />
              <span className="font-serif italic text-coral lowercase font-normal tracking-normal">пакеты.</span>
            </h1>

            <div className="border-t border-line-blue pt-10 text-left">
              <p className="font-body text-lg md:text-xl lg:text-[22px] text-pencil leading-relaxed font-medium max-w-[720px]">
                Разовые услуги дают разовый результат. Пакетное ведение по подписке (ретеншн) позволяет системно растить конверсии, оптимизировать рекламу и развивать IT-инфраструктуру на постоянной основе. Выбирайте подход, который лучше всего подходит вашему бизнесу.
              </p>
            </div>
          </div>

          {/* ── SUBSCRIPTIONS GRID ── */}
          <div className="mb-24">
            <h2 className="font-heading text-2xl md:text-3xl font-black text-ink-dark mb-10 reveal">
              Пакетное ведение <span className="font-serif italic text-coral font-normal">ретеншн</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
              {subscriptions.map((svc, idx) => (
                <div
                  key={idx}
                  className="reveal flex"
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div
                    className="relative w-full bg-paper-dark border border-line-blue/60 rounded-[32px] overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-1.5 transition-all duration-500 group"
                  >
                    {/* Colored top stripe */}
                    <div className="h-2 w-full shrink-0" style={{ backgroundColor: svc.accentColor }} />

                    {/* Badge */}
                    {svc.badge && (
                      <div className="absolute top-6 right-6 font-heading text-[10px] font-black tracking-widest text-white bg-coral px-3.5 py-1.5 rounded-full select-none shadow-sm shadow-coral/20">
                        {svc.badge}
                      </div>
                    )}

                    <div className="p-8 md:p-10 flex flex-col flex-grow">
                      {/* Icon + subtitle */}
                      <div className="flex items-center gap-6 mb-6">
                        <div className={`w-16 h-16 rounded-2xl border border-line-blue/60 ${svc.accentBgClass} flex items-center justify-center shrink-0`}>
                          <Image
                            src={svc.icon}
                            alt={svc.title}
                            width={42}
                            height={42}
                            className="object-contain hover:scale-105 transition-transform duration-700 dark-theme-image"
                          />
                        </div>
                        <div>
                          <span className="font-heading text-[10px] font-extrabold tracking-widest text-pencil uppercase block mb-1">
                            {svc.priceNote}
                          </span>
                          <h3 className="font-heading text-xl font-bold text-ink-dark leading-tight">
                            {svc.title}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="font-body text-pencil text-sm leading-relaxed mb-6 flex-grow">
                        {svc.description}
                      </p>

                      {/* Feature list */}
                      <ul className="flex flex-col gap-3.5 mb-8">
                        {svc.features.map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-3 text-sm text-ink-dark font-medium"
                          >
                            <span className={`w-5 h-5 rounded-full ${svc.badgeColorClass} flex items-center justify-center shrink-0 mt-0.5`}>
                              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                <path
                                  d="M1 4L3.5 6.5L9 1.5"
                                  stroke="currentColor"
                                  strokeWidth="2.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Price + CTA */}
                      <div className="border-t border-line-blue/60 pt-6 flex items-center justify-between gap-4 mt-auto">
                        <div>
                          <p className="text-[10px] font-extrabold text-coral uppercase tracking-wider mb-1">
                            ежемесячно
                          </p>
                          <p className="font-heading text-2xl font-black text-ink-dark tracking-tight leading-none">
                            {svc.price}
                          </p>
                        </div>

                        <Link
                          href="/#contact"
                          className="inline-flex items-center gap-2 bg-coral text-white font-body font-extrabold text-xs uppercase tracking-widest py-3.5 px-6 rounded-full shadow-md shadow-coral/20 hover:bg-coral-dark hover:shadow-lg hover:shadow-coral/30 hover:-translate-y-0.5 transition-all duration-300 select-none cursor-pointer"
                        >
                          Выбрать
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0">
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
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── PRICE LIST GRID ── */}
          <div className="mb-20">
            <h2 className="font-heading text-2xl md:text-3xl font-black text-ink-dark mb-10 reveal">
              Каталог разовых <span className="font-serif italic text-coral font-normal">услуг</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {priceCategories.map((category, idx) => (
                <div
                  key={idx}
                  className="reveal flex"
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div
                    className="relative w-full bg-paper-dark border border-line-blue/60 rounded-[32px] overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-1.5 transition-all duration-500 group"
                  >
                    {/* Colored top stripe */}
                    <div className="h-2 w-full shrink-0" style={{ backgroundColor: category.accentColor }} />

                    <div className="p-8 md:p-10 flex flex-col flex-grow">
                      {/* Category Title */}
                      <div className="flex items-center gap-4 mb-8">
                        <div className={`px-4 py-2 rounded-full border border-line-blue/60 ${category.accentBgClass} shrink-0`}>
                          <h3 className={`font-heading text-sm md:text-base font-black uppercase tracking-wider ${category.textColorClass} m-0`}>
                            {category.title}
                          </h3>
                        </div>
                      </div>

                      {/* Price Items */}
                      <ul className="flex flex-col gap-4 flex-grow">
                        {category.items.map((item, iIdx) => (
                          <li
                            key={iIdx}
                            className="flex justify-between items-end border-b border-line-blue/30 pb-3 last:border-0 last:pb-0"
                          >
                            <span className="text-sm md:text-base text-ink-dark font-medium pr-4 leading-tight">
                              {item.name}
                            </span>
                            <span className="font-heading text-base md:text-lg font-bold text-ink-dark shrink-0 whitespace-nowrap">
                              {item.price}
                            </span>
                          </li>
                        ))}
                      </ul>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* CTA */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
