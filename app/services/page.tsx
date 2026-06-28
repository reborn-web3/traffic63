"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { CursorTrail } from "@/components/CursorTrail";
import { useReveal } from "@/hooks/useReveal";
import Link from "next/link";

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
              ✦ Каталог услуг
            </span>

            <h1 className="font-heading text-4xl sm:text-7xl lg:text-[110px] font-black leading-[0.95] text-ink-dark tracking-tighter uppercase select-none mb-12">
              Наши<br />
              <span className="font-serif italic text-coral lowercase font-normal tracking-normal">услуги.</span>
            </h1>

            <div className="border-t border-line-blue pt-10 text-left">
              <p className="font-body text-lg md:text-xl lg:text-[22px] text-pencil leading-relaxed font-medium max-w-[720px]">
                Прозрачные цены на все виды услуг. Выбирайте необходимое направление или закажите комплексное продвижение для максимального результата.
              </p>
            </div>
          </div>

          {/* ── PRICE LIST GRID ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-20">
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

        {/* CTA */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}