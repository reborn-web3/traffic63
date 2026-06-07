"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import Image from "next/image";
import Link from "next/link";
import { DoodleDecorations } from "@/components/DoodleDecorations";
import { NotebookHoles } from "@/components/NotebookHoles";
import { CursorTrail } from "@/components/CursorTrail";
import { useReveal } from "@/hooks/useReveal";

const subscriptions = [
  {
    title: "Lite (Старт)",
    price: "15 000 – 20 000 ₽",
    period: "/ мес",
    priceNote: "для небольшого бизнеса",
    icon: "/images/doodle_laptop.png",
    accentColor: "var(--mint)",
    accentBg: "rgba(126, 200, 160, 0.12)",
    badge: null,
    rotate: "-1deg",
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
    icon: "/images/doodle_growth.png",
    accentColor: "var(--coral)",
    accentBg: "rgba(232, 132, 107, 0.1)",
    badge: "🔥 Рекомендуем",
    rotate: "1.5deg",
    description: "Комплексное ведение и постоянное улучшение воронки. Оптимально для стабильного притока лидов.",
    features: [
      "Всё из тарифа Lite (Старт)",
      "Ведение, оптимизация и масштабирование рекламы",
      "Ежемесячные доработки сайта для роста конверсии",
      "Проектирование новых сценариев AI-бота под новые услуги",
      "Автоматизации (уведомления в Telegram / CRM, отчеты)",
      "Регулярные отчеты по стоимости и качеству заявок",
    ],
  },
  {
    title: "Pro (Партнер)",
    price: "70 000 – 150 000 ₽",
    period: "/ мес",
    priceNote: "максимальное вовлечение команды",
    icon: "/images/doodle_idea.png",
    accentColor: "var(--lavender)",
    accentBg: "rgba(155, 142, 196, 0.1)",
    badge: "👑 VIP-сопровождение",
    rotate: "-0.5deg",
    description: "Для компаний, готовых к кратному росту. Полное делегирование маркетинга и IT-инфраструктуры.",
    features: [
      "Всё из тарифа Growth (Рост)",
      "Постоянная оптимизация всей воронки продаж",
      "Создание новых посадочных страниц (Landing Pages)",
      "Запуск и ведение новых рекламных кампаний",
      "Сложные интеграции и синхронизация по API",
      "Разработка AI-инструментов для ваших сотрудников",
      "Регулярные стратегические консультации",
    ],
  },
];

export default function ServicesPage() {
  useReveal();

  return (
    <div className="relative min-h-screen bg-paper overflow-x-clip selection:bg-coral/30 font-body">
      <NotebookHoles />
      <DoodleDecorations />
      <CursorTrail />

      <Header />

      <main style={{ paddingTop: "140px", paddingBottom: "80px" }} className="relative z-10">
        <div className="container">

          {/* ── Page Header ── */}
          <div className="max-w-3xl mb-20 reveal">
            <div
              className="inline-block px-4 py-1 mb-6 rounded-xl border-2 border-dashed"
              style={{
                background: "rgba(245, 215, 110, 0.3)",
                borderColor: "var(--yellow)",
                transform: "rotate(-1.5deg)",
              }}
            >
              <span
                style={{ fontFamily: "var(--font-handwritten)", fontSize: "1.2rem", color: "var(--ink-blue)" }}
              >
                Exclusive Offers 2026
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(3rem, 8vw, 5.5rem)",
                fontWeight: 900,
                color: "var(--ink-dark)",
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                marginBottom: "24px",
              }}
            >
              Наши{" "}
              <span style={{ color: "var(--coral)", position: "relative", display: "inline-block" }}>
                тарифы
                <svg
                  style={{ position: "absolute", bottom: "-8px", left: 0, width: "100%", height: "10px" }}
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path d="M0,8 Q25,2 50,6 T100,4" stroke="var(--yellow)" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p style={{ fontSize: "1.2rem", color: "var(--pencil)", lineHeight: 1.7, maxWidth: "700px" }}>
              Мы берем на себя постоянное улучшение конверсии вашего сайта, ведение рекламы, развитие AI-ассистента и настройку автоматизаций. Выберите подходящий тариф подписки:
            </p>
          </div>

          {/* ── SUBSCRIPTIONS GRID ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "32px",
              marginBottom: "80px",
            }}
          >
            {subscriptions.map((svc, idx) => (
              <div
                key={idx}
                className="reveal"
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <div
                  style={{
                    background: "#fff",
                    border: `3px solid var(--ink-dark)`,
                    borderRadius: "28px",
                    padding: "0",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    boxShadow: `6px 6px 0 ${svc.accentColor}`,
                    transition: "transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.35s ease",
                    transform: `rotate(${svc.rotate})`,
                    overflow: "hidden",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = `rotate(0deg) translateY(-6px)`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `10px 10px 0 ${svc.accentColor}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = `rotate(${svc.rotate})`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `6px 6px 0 ${svc.accentColor}`;
                  }}
                >
                  {/* Coloured top stripe */}
                  <div style={{ height: "6px", background: svc.accentColor, flexShrink: 0 }} />

                  {/* Badge */}
                  {svc.badge && (
                    <div
                      style={{
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                        background: "var(--coral)",
                        color: "#fff",
                        fontFamily: "var(--font-handwritten)",
                        fontSize: "1rem",
                        padding: "4px 14px",
                        borderRadius: "50px",
                        border: "2px solid var(--ink-dark)",
                        transform: "rotate(2deg)",
                        zIndex: 2,
                      }}
                    >
                      {svc.badge}
                    </div>
                  )}

                  <div style={{ padding: "32px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    {/* Icon + subtitle */}
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                      <div
                        style={{
                          width: "72px",
                          height: "72px",
                          borderRadius: "20px",
                          border: "2px solid var(--line-blue)",
                          background: svc.accentBg,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Image src={svc.icon} alt={svc.title} width={48} height={48} className="object-contain" />
                      </div>
                      <div>
                        <span
                          style={{
                            fontFamily: "var(--font-handwritten)",
                            fontSize: "1rem",
                            color: "var(--pencil)",
                            display: "block",
                          }}
                        >
                          {svc.priceNote}
                        </span>
                        <h3
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "1.5rem",
                            fontWeight: 800,
                            color: "var(--ink-dark)",
                            lineHeight: 1.1,
                          }}
                        >
                          {svc.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p style={{ color: "var(--pencil)", lineHeight: 1.65, marginBottom: "24px", fontSize: "0.98rem" }}>
                      {svc.description}
                    </p>

                    {/* Feature list */}
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: "0 0 24px 0",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        flexGrow: 1,
                      }}
                    >
                      {svc.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "10px",
                            fontSize: "0.92rem",
                            color: "var(--ink-dark)",
                            fontWeight: 600,
                          }}
                        >
                          <span
                            style={{
                              width: "20px",
                              height: "20px",
                              borderRadius: "50%",
                              background: svc.accentBg,
                              border: `2px solid ${svc.accentColor}`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                              marginTop: "1px",
                            }}
                          >
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                              <path d="M1 4L3.5 6.5L9 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: svc.accentColor }} />
                            </svg>
                          </span>
                          {feat}
                        </li>
                      ))}
                    </ul>

                    {/* Price + CTA */}
                    <div
                      style={{
                        borderTop: "2px dashed var(--line-blue)",
                        paddingTop: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "12px",
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontSize: "0.72rem",
                            fontWeight: 800,
                            color: "var(--coral)",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            marginBottom: "2px",
                          }}
                        >
                          ежемесячно
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "1.65rem",
                            fontWeight: 900,
                            color: "var(--ink-dark)",
                            letterSpacing: "-0.04em",
                            lineHeight: 1.1,
                          }}
                        >
                          {svc.price}
                          <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--pencil)" }}>
                            {svc.period}
                          </span>
                        </p>
                      </div>

                      <Link
                        href="/#contact"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          background: "var(--coral)",
                          color: "#fff",
                          fontFamily: "var(--font-body)",
                          fontWeight: 700,
                          fontSize: "0.9rem",
                          padding: "12px 22px",
                          borderRadius: "50px",
                          textDecoration: "none",
                          boxShadow: "0 4px 16px rgba(232,132,107,0.35)",
                          transition: "all 0.3s ease",
                          whiteSpace: "nowrap",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "var(--coral-dark)";
                          (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "var(--coral)";
                          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                        }}
                      >
                        Выбрать
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
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