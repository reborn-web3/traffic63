"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { CursorTrail } from "@/components/CursorTrail";
import { useReveal } from "@/hooks/useReveal";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Сколько стоит аудит моего текущего маркетинга?",
    answer: "Аудит бесплатный. Наша команда изучит ваши рекламные кампании, сайт и воронку продаж, подготовит выводы и разберет точки роста на онлайн-созвоне."
  },
  {
    question: "Как быстро вы сможете запустить первые рекламные кампании?",
    answer: "В среднем запуск занимает от 5 до 10 рабочих дней. Мы проводим анализ конкурентов, создаем семантическое ядро, пишем креативы и настраиваем аналитику."
  },
  {
    question: "Вы работаете по договору?",
    answer: "Да, работаем официально как юридическое лицо с фиксацией сроков, бюджета и финальных KPI."
  },
  {
    question: "Какие гарантии результатов вы предоставляете?",
    answer: "Все ключевые метрики (CPL, ROAS, конверсии) фиксируются в договоре. Если показатели отклоняются от плана, мы бесплатно дорабатываем связки."
  },
  {
    question: "Какая минимальная стоимость работы с вами?",
    answer: "Стартовый тариф начинается от 15 000 рублей в месяц. Под конкретные задачи мы составляем индивидуальную смету."
  }
];

const PlusIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    className="shrink-0 transition-transform duration-300 text-ink-dark/60 group-hover:text-coral"
    style={{ transform: isOpen ? "rotate(135deg)" : "rotate(0deg)" }}
  >
    <path
      d="M12 5V19M5 12H19"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ContactsPage() {
  useReveal();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-paper overflow-x-clip font-body text-ink-dark selection:bg-coral/20">
      <CursorTrail />

      <Header />

      <main style={{ paddingTop: "150px", paddingBottom: "100px" }} className="relative z-10">
        
        {/* ── Ultra-soft Ambient Glows spread smoothly across the entire page (Large scale, high blur) ── */}
        <div className="absolute top-[80px] left-[-150px] w-[750px] h-[750px] bg-coral/10 rounded-full blur-[180px] pointer-events-none z-0" />
        <div className="absolute top-[280px] right-[-150px] w-[850px] h-[850px] bg-sky-400/10 rounded-full blur-[200px] pointer-events-none z-0" />

        <div className="container mx-auto px-5 md:px-10 max-w-[1240px] relative z-10">

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-left mb-16"
          >
            <h1 className="font-heading text-4xl sm:text-7xl lg:text-[88px] font-black leading-[0.96] text-ink-dark tracking-tighter uppercase select-none mb-6">
              Давайте обсудим <br />
              <span className="font-serif italic text-coral lowercase font-normal tracking-normal">ваш проект.</span>
            </h1>

            <div className="max-w-[660px]">
              <p className="font-body text-lg md:text-xl text-pencil leading-relaxed font-normal">
                Выберите удобный способ связи или оставьте заявку. Разработаем эффективную стратегию, запустим рекламу и приведём целевых клиентов в ваш бизнес.
              </p>
            </div>
          </motion.div>

          {/* ── Main Contacts & Form Grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-28 items-stretch relative z-10">

            {/* Left Column: Glass Communication Cards */}
            <div className="lg:col-span-5 flex flex-col gap-4 reveal" style={{ transitionDelay: "100ms" }}>
              
              {/* Telegram QR Card */}
              <a
                href="https://t.me/manager_traffic63"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-paper-dark/60 backdrop-blur-xl border border-line-blue/70 hover:border-[#24A1DE]/50 rounded-[28px] p-5 sm:p-6 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(36,161,222,0.12)] flex flex-col sm:flex-row items-center gap-5"
                style={{ textDecoration: "none" }}
              >
                {/* Telegram Ambient Glow */}
                <div className="absolute -top-12 -right-12 w-44 h-44 bg-[#24A1DE]/15 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

                {/* QR Code Container */}
                <div className="relative shrink-0 p-[2.5px] rounded-2xl bg-gradient-to-tr from-[#24A1DE] to-[#34b7f1] shadow-sm group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                  <div className="bg-white rounded-[13px] w-24 h-24 sm:w-28 sm:h-28 overflow-hidden flex items-start justify-center p-1.5">
                    <img
                      src="/images/tg-qr.jpg"
                      alt="Telegram QR Code traffic63"
                      className="w-full h-auto object-top"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center sm:text-left min-w-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#24A1DE]/10 border border-[#24A1DE]/20 text-[#24A1DE] text-[11px] font-bold tracking-wider uppercase mb-2">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-2.04 1.29-5.73 3.79-.54.37-1.03.55-1.47.54-.48-.01-1.41-.27-2.09-.49-.84-.27-1.5-.42-1.44-.88.03-.24.36-.49.99-.75 3.88-1.69 6.46-2.8 7.74-3.35 3.68-1.56 4.44-1.83 4.94-1.84.11 0 .35.03.5.16.13.1.17.24.18.35.01.08 0 .25-.01.32z" />
                    </svg>
                    Telegram
                  </div>
                  <span className="block text-base sm:text-lg font-bold text-ink-dark group-hover:text-[#24A1DE] transition-colors leading-tight">
                    @manager_traffic63
                  </span>
                </div>

                <div className="w-9 h-9 rounded-full bg-paper-dark border border-line-blue/60 flex items-center justify-center text-pencil group-hover:text-[#24A1DE] group-hover:border-[#24A1DE]/40 group-hover:translate-x-1 transition-all shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>



              {/* Instagram QR Card */}
              <a
                href="https://www.instagram.com/traffic63.agency/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-paper-dark/60 backdrop-blur-xl border border-line-blue/70 hover:border-[#E4405F]/50 rounded-[28px] p-5 sm:p-6 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(228,64,95,0.12)] flex flex-col sm:flex-row items-center gap-5"
                style={{ textDecoration: "none" }}
              >
                {/* Instagram Ambient Gradient Glow */}
                <div className="absolute -top-12 -right-12 w-44 h-44 bg-gradient-to-br from-[#833ab4]/15 via-[#fd1d1d]/15 to-[#fcb045]/15 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

                {/* QR Code Container with Gradient Border */}
                <div className="relative shrink-0 p-[2.5px] rounded-2xl bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] shadow-sm group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                  <div className="bg-white rounded-[13px] w-24 h-24 sm:w-28 sm:h-28 overflow-hidden flex items-start justify-center p-1.5">
                    <img
                      src="/images/instagram-qr.png"
                      alt="Instagram QR Code traffic63.agency"
                      className="w-full h-auto object-top"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center sm:text-left min-w-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E4405F]/10 border border-[#E4405F]/20 text-[#E4405F] text-[11px] font-bold tracking-wider uppercase mb-2">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </div>
                  <span className="block text-base sm:text-lg font-bold text-ink-dark group-hover:text-[#E4405F] transition-colors leading-tight">
                    @traffic63.agency
                  </span>
                </div>

                <div className="w-9 h-9 rounded-full bg-paper-dark border border-line-blue/60 flex items-center justify-center text-pencil group-hover:text-[#E4405F] group-hover:border-[#E4405F]/40 group-hover:translate-x-1 transition-all shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>

              {/* VKontakte QR Card */}
              <a
                href="https://vk.ru/traffic63.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-paper-dark/60 backdrop-blur-xl border border-line-blue/70 hover:border-[#0077FF]/50 rounded-[28px] p-5 sm:p-6 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,119,255,0.12)] flex flex-col sm:flex-row items-center gap-5"
                style={{ textDecoration: "none" }}
              >
                {/* VK Ambient Glow */}
                <div className="absolute -top-12 -right-12 w-44 h-44 bg-[#0077FF]/15 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

                {/* QR Code Container */}
                <div className="relative shrink-0 p-[2.5px] rounded-2xl bg-gradient-to-tr from-[#0077FF] to-[#00a2ff] shadow-sm group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                  <div className="bg-white rounded-[13px] w-24 h-24 sm:w-28 sm:h-28 overflow-hidden flex items-start justify-center p-1">
                    <img
                      src="/images/vk-qr.png"
                      alt="VKontakte QR Code traffic63.agency"
                      className="w-full h-auto object-top"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center sm:text-left min-w-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0077FF]/10 border border-[#0077FF]/20 text-[#0077FF] text-[11px] font-bold tracking-wider uppercase mb-2">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15.684 2H8.316C3.992 2 2 3.992 2 8.316v7.368C2 20.008 3.992 22 8.316 22h7.368C20.008 22 22 20.008 22 15.684V8.316C22 3.992 20.008 2 15.684 2zm3.692 14.422h-1.344c-.563 0-.737-.446-1.751-1.46-.88-.865-1.269-.982-1.492-.982-.31 0-.398.087-.398.523v1.321c0 .36-.117.598-1.066.598-1.573 0-3.32-.953-4.551-2.735-1.849-2.585-2.353-4.536-2.353-4.935 0-.222.087-.428.517-.428h1.345c.387 0 .532.176.68.583.746 2.155 1.996 4.048 2.51 4.048.193 0 .281-.088.281-.584V9.825c-.058-1.085-.633-1.18-.633-1.567 0-.184.155-.371.408-.371h2.115c.291 0 .398.156.398.515v2.766c0 .301.136.408.223.408.193 0 .358-.107.717-.466 1.116-1.252 1.908-3.191 1.908-3.191.1-.214.272-.428.66-.428h1.345c.408 0 .504.214.408.515-.165.737-1.726 3.221-1.774 3.299-.145.242-.204.35 0 .62.145.194.621.611 1.038 1.087.756.863 1.339 1.581 1.494 2.076.155.495-.078.747-.504.747z"/>
                    </svg>
                    ВКонтакте
                  </div>
                  <span className="block text-base sm:text-lg font-bold text-ink-dark group-hover:text-[#0077FF] transition-colors leading-tight">
                    vk.ru/traffic63.agency
                  </span>
                </div>

                <div className="w-9 h-9 rounded-full bg-paper-dark border border-line-blue/60 flex items-center justify-center text-pencil group-hover:text-[#0077FF] group-hover:border-[#0077FF]/40 group-hover:translate-x-1 transition-all shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>

              {/* Phone & Email Split */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <a
                  href="tel:+79198037232"
                  className="group bg-paper-dark/60 backdrop-blur-xl border border-line-blue/70 hover:border-coral/40 rounded-[24px] p-5 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)] flex items-center gap-3.5"
                  style={{ textDecoration: "none" }}
                >
                  <div className="w-10 h-10 rounded-xl bg-coral/10 border border-coral/20 flex items-center justify-center text-coral group-hover:scale-105 transition-transform duration-300 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-semibold text-pencil">Телефон</span>
                    <span className="text-sm font-bold text-ink-dark group-hover:text-coral transition-colors truncate block">
                      +7 (919) 803-72-32
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:traffic63.agency@mail.ru"
                  className="group bg-paper-dark/60 backdrop-blur-xl border border-line-blue/70 hover:border-coral/40 rounded-[24px] p-5 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)] flex items-center gap-3.5"
                  style={{ textDecoration: "none" }}
                >
                  <div className="w-10 h-10 rounded-xl bg-coral/10 border border-coral/20 flex items-center justify-center text-coral group-hover:scale-105 transition-transform duration-300 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-semibold text-pencil">Email</span>
                    <span className="text-sm font-bold text-ink-dark group-hover:text-coral transition-colors truncate block">
                      traffic63.agency@mail.ru
                    </span>
                  </div>
                </a>
              </div>

            </div>

            {/* Right Column: Lead Form Card */}
            <div className="lg:col-span-7 reveal" style={{ transitionDelay: "200ms" }}>
              <div className="h-full bg-paper-dark/60 backdrop-blur-2xl border border-line-blue/70 hover:border-coral/30 rounded-[32px] p-8 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.03)] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-ink-dark tracking-tight mb-2">
                    Обсудить ваш проект
                  </h3>
                  <p className="text-pencil text-base leading-relaxed mb-8">
                    Расскажите о ваших задачах — покажем, как выстроить воронку и привести новых клиентов в ваш бизнес.
                  </p>

                  <ContactForm />
                </div>
              </div>
            </div>

          </div>

          {/* ── FAQ Accordions ── */}
          <section className="mb-12 reveal">
            <div className="max-w-[900px] text-left mb-10">
              <h2 className="font-heading text-3xl sm:text-5xl lg:text-[60px] font-black leading-[0.96] text-ink-dark tracking-tighter uppercase select-none">
                Часто задаваемые <br />
                <span className="font-serif italic text-coral lowercase font-normal tracking-normal">вопросы.</span>
              </h2>
            </div>

            <div className="max-w-[900px]">
              {faqData.map((item, idx) => {
                const isOpen = openFAQ === idx;
                return (
                  <div
                    key={idx}
                    className="border-t border-line-blue/60 py-6 cursor-pointer group transition-colors"
                    onClick={() => toggleFAQ(idx)}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <h3 className="font-heading text-base sm:text-lg md:text-xl font-bold text-ink-dark group-hover:text-coral transition-colors duration-200">
                        {item.question}
                      </h3>

                      <button
                        className="focus:outline-none mt-1"
                        aria-label={isOpen ? "Свернуть ответ" : "Развернуть ответ"}
                      >
                        <PlusIcon isOpen={isOpen} />
                      </button>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                            transition: {
                              height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                              opacity: { duration: 0.2, delay: 0.05 }
                            }
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                              height: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                              opacity: { duration: 0.1 }
                            }
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pr-4 pt-3 pb-1">
                            <p className="font-body text-base text-pencil leading-relaxed max-w-[800px]">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
              <div className="border-t border-line-blue/60"></div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
