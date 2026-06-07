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

const services = [
  {
    title: "Лендинг",
    subtitle: "Быстрый старт",
    description:
      "Продающая одностраничная площадка с высокой конверсией. Идеально для быстрого запуска продукта, акции или конкретной услуги.",
    price: "30 000 ₽",
    priceNote: "фиксированная цена",
    icon: "/images/doodle_rocket.png",
    tags: ["Быстрый старт", "Конверсия", "UX/UI"],
    features: [
      "UX-прототип и уникальный дизайн",
      "Адаптивная верстка (mobile-first)",
      "Форма заявки + интеграция",
      "Базовая SEO-оптимизация",
      "Сдача за 7–14 дней",
    ],
    accentColor: "var(--mint)",
    accentBg: "rgba(126, 200, 160, 0.12)",
    badge: null,
    rotate: "-1deg",
  },
  {
    title: "Многостраничный сайт",
    subtitle: "Самый популярный",
    description:
      "Полноценный корпоративный сайт или визитка для вашего бизнеса. Детально раскрывает все преимущества, услуги и ценности бренда.",
    price: "70 000 ₽",
    priceNote: "фиксированная цена",
    icon: "/images/doodle_laptop.png",
    tags: ["Масштабируемость", "SEO-ready", "Брендинг"],
    features: [
      "До 10 страниц с уникальным дизайном",
      "CMS для самостоятельного редактирования",
      "Полная SEO-оптимизация",
      "Интеграция с CRM и аналитикой",
      "Поддержка 3 месяца в подарок",
    ],
    accentColor: "var(--coral)",
    accentBg: "rgba(232, 132, 107, 0.1)",
    badge: "⭐ Популярный",
    rotate: "0.5deg",
  },
  {
    title: "Сложный проект",
    subtitle: "Максимум возможностей",
    description:
      "Веб-приложения, интернет-магазины с корзиной, личным кабинетом, авторизацией и интеграциями с CRM/складскими системами.",
    price: "150 000 ₽",
    priceNote: "от, индивидуально",
    icon: "/images/doodle_idea.png",
    tags: ["E-commerce", "Auth", "Интеграции"],
    features: [
      "Личный кабинет и авторизация",
      "Интернет-магазин с корзиной",
      "Интеграция с CRM / складом",
      "Нагрузочное тестирование",
      "Выделенный менеджер проекта",
    ],
    accentColor: "var(--lavender)",
    accentBg: "rgba(155, 142, 196, 0.1)",
    badge: null,
    rotate: "-0.5deg",
  },
];

const benefits = [
  { icon: "✨", title: "Фикс цена", desc: "Никаких скрытых платежей и внезапных доп. расходов" },
  { icon: "📈", title: "SEO-ready", desc: "Оптимизировано под поисковики с первого дня" },
  { icon: "🧠", title: "UX-фокус", desc: "Проектируем для людей, а не для галочки" },
  { icon: "🤝", title: "Поддержка", desc: "Всегда на связи — пишите в любое время" },
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
                услуги
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

            <p style={{ fontSize: "1.2rem", color: "var(--pencil)", lineHeight: 1.7, maxWidth: "540px" }}>
              Мы превращаем идеи в цифровые продукты, которые работают на ваш результат.{" "}
              <strong style={{ color: "var(--ink-dark)" }}>Только кастомные решения.</strong>
            </p>
          </div>

          {/* ── Service Cards ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "32px",
              marginBottom: "80px",
            }}
          >
            {services.map((svc, idx) => (
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
                          {svc.subtitle}
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

                    {/* Tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                      {svc.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            fontFamily: "var(--font-handwritten)",
                            fontSize: "0.95rem",
                            color: "var(--ink-blue)",
                            background: "rgba(184, 212, 232, 0.2)",
                            border: "1px dashed var(--line-blue)",
                            padding: "3px 14px",
                            borderRadius: "50px",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

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
                          {svc.priceNote}
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "2rem",
                            fontWeight: 900,
                            color: "var(--ink-dark)",
                            letterSpacing: "-0.04em",
                            lineHeight: 1,
                          }}
                        >
                          {svc.price}
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
                        Обсудить
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

          {/* ── Benefits block ── */}
          <div
            className="reveal"
            style={{
              background: "#fff",
              border: "3px solid var(--ink-dark)",
              borderRadius: "40px",
              padding: "clamp(40px, 6vw, 72px)",
              boxShadow: "10px 10px 0 var(--line-blue)",
              marginBottom: "80px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "48px",
                alignItems: "center",
              }}
            >
              {/* Left side */}
              <div>
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-handwritten)",
                    fontSize: "1.3rem",
                    color: "var(--coral)",
                    marginBottom: "12px",
                  }}
                >
                  📌 Почему мы
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                    fontWeight: 900,
                    color: "var(--ink-dark)",
                    lineHeight: 1.1,
                    marginBottom: "40px",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Сайты, которые{" "}
                  <span style={{ color: "var(--coral)", textDecoration: "underline", textDecorationColor: "var(--yellow)", textDecorationThickness: "4px" }}>
                    реально
                  </span>{" "}
                  работают
                </h2>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
                  {benefits.map((b, i) => (
                    <div key={i} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ fontSize: "2.2rem" }}>{b.icon}</span>
                      <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.1rem", color: "var(--ink-dark)" }}>
                        {b.title}
                      </h4>
                      <p style={{ fontSize: "0.9rem", color: "var(--pencil)", lineHeight: 1.55 }}>{b.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side — quote card */}
              <div
                style={{
                  background: "var(--paper)",
                  border: "3px solid var(--line-blue)",
                  borderRadius: "32px",
                  padding: "40px",
                  position: "relative",
                  transform: "rotate(1deg)",
                }}
              >
                {/* tape decoration */}
                <div
                  style={{
                    position: "absolute",
                    top: "-18px",
                    left: "50%",
                    transform: "translateX(-50%) rotate(-2deg)",
                    width: "80px",
                    height: "28px",
                    background: "rgba(245, 215, 110, 0.6)",
                    border: "1px solid rgba(245, 215, 110, 0.9)",
                    borderRadius: "4px",
                  }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-handwritten)",
                    fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)",
                    color: "var(--ink-blue)",
                    lineHeight: 1.5,
                    marginBottom: "28px",
                  }}
                >
                  «Мы проектируем сайты, которые превращают клики в прибыль.»
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "16px",
                      background: "var(--ink-dark)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 900,
                      fontSize: "1rem",
                      letterSpacing: "-0.03em",
                      flexShrink: 0,
                    }}
                  >
                    T63
                  </div>
                  <div>
                    <p style={{ fontWeight: 800, color: "var(--ink-dark)", fontSize: "1rem", lineHeight: 1.2 }}>
                      Команда traffic63
                    </p>
                    <p style={{ fontSize: "0.75rem", color: "var(--pencil)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginTop: "4px" }}>
                      Design & Strategy
                    </p>
                  </div>
                </div>
              </div>
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