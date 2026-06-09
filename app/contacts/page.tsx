"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { DoodleDecorations } from "@/components/DoodleDecorations";
import { NotebookHoles } from "@/components/NotebookHoles";
import { CursorTrail } from "@/components/CursorTrail";
import { useReveal } from "@/hooks/useReveal";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Сколько стоит аудит моего текущего маркетинга? 🧐",
    answer: "Аудит полностью бесплатный! Наша команда изучит ваши текущие рекламные кампании, сайт и воронку продаж. Мы найдем критические ошибки, которые сливают бюджет, определим потенциальные точки роста и покажем всё это на удобной презентации во время онлайн-созвона."
  },
  {
    question: "Как быстро вы сможете запустить первые рекламные кампании? ⚡",
    answer: "В среднем подготовка и запуск занимают от 5 до 10 рабочих дней. В этот период мы погружаемся в проект, проводим глубокий анализ конкурентов, создаем семантическое ядро (для контекста), пишем продающие тексты и заголовки, разрабатываем креативы и настраиваем сквозную аналитику. Мы запускаемся только после согласования всех деталей с вами."
  },
  {
    question: "Вы работаете по договору? 📝",
    answer: "Да, абсолютно. Мы работаем полностью официально в качестве юридического лица. Перед стартом подписываем подробный договор, где четко прописываем состав работ, сроки, стоимость, порядок отчетности и KPI. В конце каждого месяца предоставляем акты выполненных работ для вашей бухгалтерии."
  },
  {
    question: "Какие гарантии результатов вы предоставляете? 🎯",
    answer: "Мы гарантируем качественное выполнение всех согласованных работ, соблюдение дедлайнов и фиксацию KPI в договоре. Наш основной приоритет — окупаемость инвестиций (ROAS) и стоимость целевого обращения (CPL). В отличие от агентств, которые обещают нереалистичные миллионы лидов, мы опираемся на реальные тесты и данные и перенастраиваем рекламу бесплатно, если показатели отклоняются от плана."
  },
  {
    question: "Какая минимальная стоимость работы с вами? 💸",
    answer: "Мы предлагаем гибкую тарифную сетку. Наш стартовый тариф Lite (Старт) начинается от 15 000 рублей в месяц и отлично подходит для локального бизнеса. Для компаний, готовых к активному росту, мы рекомендуем тариф Growth (Рост) за 30 000 – 50 000 рублей в месяц, куда уже включена комплексная работа со всеми рекламными каналами, поддержка сайта и автоматизации."
  }
];

export default function ContactsPage() {
  useReveal();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-paper overflow-x-clip selection:bg-coral/30 font-body">
      {/* Decorative notebook layout elements */}
      <NotebookHoles />
      <DoodleDecorations />
      <CursorTrail />

      <Header />

      <main style={{ paddingTop: "140px", paddingBottom: "80px" }} className="relative z-10">
        <div className="container mx-auto px-5 md:px-10">
          
          {/* ── Page Header ── */}
          <div className="max-w-3xl mb-16 reveal">
            <div
              className="inline-block px-4 py-1 mb-6 rounded-xl border-2 border-dashed"
              style={{
                background: "rgba(245, 215, 110, 0.3)",
                borderColor: "var(--yellow)",
                transform: "rotate(-1.5deg)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-handwritten)",
                  fontSize: "1.2rem",
                  color: "var(--ink-blue)",
                }}
              >
                Всегда на связи 📞
              </span>
            </div>

            <h1
              className="font-heading font-extrabold text-ink-dark leading-none tracking-tight mb-6"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Давайте обсудим{" "}
              <span style={{ color: "var(--coral)", position: "relative", display: "inline-block" }}>
                ваш проект!
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

            <p className="text-lg md:text-xl text-pencil leading-relaxed max-w-2xl">
              Оставьте заявку, напишите в удобный мессенджер или позвоните. Мы ответим на все вопросы, рассчитаем бюджет и составим медиаплан бесплатно.
            </p>
          </div>

          {/* ── Main Contacts Grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
            
            {/* Left Column: Contact Methods */}
            <div className="lg:col-span-5 flex flex-col gap-6 reveal" style={{ transitionDelay: "100ms" }}>
              
              {/* Telegram & WhatsApp Sticky Note */}
              <div 
                className="bg-white border-3 border-ink-dark rounded-3xl p-8 relative"
                style={{
                  boxShadow: "6px 6px 0 var(--line-blue)",
                  transform: "rotate(-0.5deg)"
                }}
              >
                <span className="font-handwritten text-coral text-lg block mb-2">Отвечаем за 10 минут ⚡</span>
                <h3 className="font-heading font-bold text-xl text-ink-dark mb-6">Быстрая связь в мессенджерах</h3>
                
                <div className="flex flex-col gap-4">
                  <a 
                    href="https://t.me/traffic63" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 border-2 border-ink-dark rounded-2xl hover:bg-line-blue/10 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="w-12 h-12 bg-[#24A1DE]/10 rounded-xl flex items-center justify-center border border-[#24A1DE]/20">
                      <svg className="w-6 h-6 text-[#24A1DE]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-2.04 1.29-5.73 3.79-.54.37-1.03.55-1.47.54-.48-.01-1.41-.27-2.09-.49-.84-.27-1.5-.42-1.44-.88.03-.24.36-.49.99-.75 3.88-1.69 6.46-2.8 7.74-3.35 3.68-1.56 4.44-1.83 4.94-1.84.11 0 .35.03.5.16.13.1.17.24.18.35.01.08 0 .25-.01.32z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block font-semibold text-ink-dark">Telegram</span>
                      <span className="text-sm text-pencil">@traffic63</span>
                    </div>
                    <svg className="ml-auto w-5 h-5 text-pencil" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  <a 
                    href="https://wa.me/79991234567" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 border-2 border-ink-dark rounded-2xl hover:bg-line-blue/10 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center border border-[#25D366]/20">
                      <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.012 2c-5.508 0-9.988 4.48-9.988 9.988 0 1.76.459 3.413 1.264 4.853L2 22l5.307-1.392c1.387.755 2.965 1.187 4.64 1.187 5.507 0 9.987-4.479 9.987-9.988 0-5.508-4.48-9.988-9.988-9.988zm5.292 13.52c-.225.63-.872 1.157-1.42 1.248-.547.091-1.257.165-3.51-.776-2.253-.94-3.713-3.233-3.826-3.382-.113-.15-.92-1.226-.92-2.337 0-1.11.584-1.654.811-1.88.225-.226.49-.283.653-.283.164 0 .327.001.469.008.148.007.348-.056.545.422.197.477.675 1.64.731 1.753.057.113.094.245.019.396-.075.15-.113.245-.226.377-.113.132-.238.293-.34.396-.113.113-.23.237-.098.463.132.226.586.963 1.262 1.564.873.777 1.611 1.018 1.838 1.13.226.113.358.094.49-.057.132-.15.565-.66.716-.886.15-.226.301-.188.508-.113.207.075 1.317.62 1.543.733.226.113.376.17.432.263.056.094.056.546-.169 1.176z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block font-semibold text-ink-dark">WhatsApp</span>
                      <span className="text-sm text-pencil">+7 (999) 123-45-67</span>
                    </div>
                    <svg className="ml-auto w-5 h-5 text-pencil" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Direct Contacts Info Note */}
              <div 
                className="bg-white border-3 border-ink-dark rounded-3xl p-8 relative flex flex-col gap-6"
                style={{
                  boxShadow: "6px 6px 0 var(--yellow)",
                  transform: "rotate(0.5deg)"
                }}
              >
                <h3 className="font-heading font-bold text-xl text-ink-dark">Контакты агентства</h3>

                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 border border-coral/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-coral" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-pencil">Номер телефона</span>
                      <a href="tel:+79991234567" className="font-heading font-bold text-lg text-ink-dark hover:text-coral transition-colors">
                        +7 (999) 123-45-67
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 border border-coral/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-coral" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-pencil">Электронная почта</span>
                      <a href="mailto:hello@traffic63.ru" className="font-heading font-bold text-lg text-ink-dark hover:text-coral border-b border-dashed border-ink-dark/40 hover:border-coral transition-all">
                        hello@traffic63.ru
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 border border-coral/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-coral" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-pencil">Главный офис</span>
                      <span className="font-semibold text-ink-dark block">
                        г. Самара, ул. Ново-Садовая, 106, офис 402
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 border border-coral/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-coral" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm text-pencil">Режим работы</span>
                      <span className="font-semibold text-ink-dark block">
                        Будние дни: с 10:00 до 19:00 (МСК+1)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Lead Form Card */}
            <div className="lg:col-span-7 reveal" style={{ transitionDelay: "200ms" }}>
              <div 
                className="bg-white border-3 border-ink-dark rounded-[32px] p-8 md:p-10 relative h-full"
                style={{
                  boxShadow: "8px 8px 0 var(--coral)",
                  transform: "rotate(0.5deg)"
                }}
              >
                <div className="mb-8">
                  <span className="font-handwritten text-ink-blue text-xl block mb-1">Заполните анкету ✍️</span>
                  <h3 className="font-heading font-extrabold text-2xl text-ink-dark">Обсудить ваш проект</h3>
                  <p className="text-pencil text-sm mt-1">
                    Расскажите о ваших задачах, и мы подготовимся к звонку заранее.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>

          </div>

          {/* ── FAQ Objection-Closing Section ── */}
          <section className="mb-20 reveal">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="font-handwritten text-coral text-2xl block mb-2 transform -rotate-1">Отвечаем честно 💡</span>
                <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-ink-dark">Часто задаваемые вопросы</h2>
                <p className="text-pencil mt-2">Развеиваем сомнения и рассказываем, как строится совместная работа</p>
              </div>

              <div className="flex flex-col gap-4">
                {faqData.map((item, idx) => {
                  const isOpen = openFAQ === idx;
                  return (
                    <div 
                      key={idx}
                      className="bg-white border-3 border-ink-dark rounded-2xl overflow-hidden transition-all duration-300"
                      style={{
                        boxShadow: isOpen ? "4px 4px 0 var(--coral-light)" : "4px 4px 0 var(--line-blue)",
                        transform: isOpen ? "translateY(-2px)" : "translateY(0)"
                      }}
                    >
                      <button
                        className="w-full text-left px-6 py-5 flex items-center justify-between font-heading font-bold text-lg text-ink-dark transition-colors hover:text-ink-blue"
                        onClick={() => toggleFAQ(idx)}
                      >
                        <span>{item.question}</span>
                        <div 
                          className="w-8 h-8 rounded-full border-2 border-ink-dark flex items-center justify-center transition-transform duration-300 bg-paper-dark"
                          style={{
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
                          }}
                        >
                          <svg className="w-4 h-4 text-ink-dark" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>

                      <div 
                        className={`transition-all duration-300 ease-in-out overflow-hidden`}
                        style={{
                          maxHeight: isOpen ? "200px" : "0px",
                          borderTop: isOpen ? "2px dashed var(--line-blue)" : "none"
                        }}
                      >
                        <div className="p-6 text-pencil leading-relaxed bg-paper/30">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── Stylized Interactive Office Map ── */}
          <section className="reveal">
            <div className="max-w-5xl mx-auto relative">
              
              {/* Paper Tapes Decoration */}
              <div className="tape tape-left -translate-y-4 -translate-x-2 hidden md:block"></div>
              <div className="tape tape-right -translate-y-4 translate-x-2 hidden md:block"></div>

              <div 
                className="bg-white border-3 border-ink-dark rounded-[32px] p-4 relative overflow-hidden"
                style={{
                  boxShadow: "10px 10px 0 var(--line-blue)",
                  transform: "rotate(-0.5deg)"
                }}
              >
                <div className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between border-b-2 border-dashed border-line-blue mb-4">
                  <div>
                    <h3 className="font-heading font-extrabold text-xl text-ink-dark flex items-center gap-2">
                      <span>Наш уютный офис 🏢</span>
                    </h3>
                    <p className="text-sm text-pencil">Приезжайте в гости обсудить ваш проект на месте!</p>
                  </div>
                  <div className="mt-2 md:mt-0 font-handwritten text-ink-blue text-lg">
                    Самара, ул. Ново-Садовая, 106
                  </div>
                </div>

                <div 
                  className="w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden relative border-2 border-ink-dark"
                  style={{
                    // CSS filters to make the map style blend with the ruled notebook theme (warm sepia paper style)
                    filter: "sepia(0.2) hue-rotate(330deg) contrast(1.05) saturate(0.95)"
                  }}
                >
                  <iframe 
                    src="https://yandex.ru/map-widget/v1/?ll=50.138867%2C53.213264&z=16&mode=search&text=%D0%A1%D0%B0%D0%BC%D0%B0%D1%80%D0%B0%2C%20%D0%BD%D0%BE%D0%B2%D0%BE-%D1%81%D0%B0%D0%B4%D0%BE%D0%B2%D0%B0%D1%8F%2C%20106"
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    allowFullScreen={true}
                    style={{ position: "relative" }}
                    title="Офис traffic63 на карте"
                  />
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
