"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DoodleDecorations } from "@/components/DoodleDecorations";
import { NotebookHoles } from "@/components/NotebookHoles";
import { CursorTrail } from "@/components/CursorTrail";
import { useReveal } from "@/hooks/useReveal";

interface TermsSection {
  num: string;
  tag: string;
  title: string;
  paragraphs: string[];
}

const sections: TermsSection[] = [
  {
    num: "01",
    tag: "ПРЕДМЕТ ДОГОВОРА",
    title: "Общие положения оферты",
    paragraphs: [
      "Настоящий документ является публичной офертой performance-агентства traffic63 (Исполнитель) и содержит все существенные условия договора на оказание услуг интернет-маркетинга, поискового продвижения (SEO), ведения рекламных кампаний, разработки сайтов и интеграции AI-решений.",
      "Акцептом настоящей оферты (принятием условий) считается любое из следующих действий: заполнение заявки на аудит или коммерческое предложение на сайте, подписание договора-счета или осуществление полной/частичной оплаты услуг Исполнителя."
    ]
  },
  {
    num: "02",
    tag: "ПОРЯДОК УСЛУГ",
    title: "Как выполняются наши работы",
    paragraphs: [
      "Все работы по разработке, рекламе или оптимизации выполняются Исполнителем на основе информации и материалов, предоставленных Заказчиком. Заказчик обязуется своевременно предоставлять доступы, тексты и графику для ведения проектов.",
      "Услуги могут оказываться как по модели разовых проектов (на основе технического задания), так и в формате ежемесячной подписки по выбранному тарифу. Отчетный период по абонентским тарифам составляет 1 (один) календарный месяц."
    ]
  },
  {
    num: "03",
    tag: "СТОИМОСТЬ И ОПЛАТА",
    title: "Финансовые условия подписки",
    paragraphs: [
      "Стоимость разовых услуг фиксируется в коммерческих предложениях или счетах-договорах. Стоимость абонентского обслуживания определяется тарифами («Lite», «Growth», «Pro»), опубликованными на странице услуг.",
      "Оплата услуг производится Заказчиком в безналичном порядке на расчетный счет Исполнителя на условиях 100% предоплаты, если иной порядок платежей не согласован сторонами в индивидуальном порядке."
    ]
  },
  {
    num: "04",
    tag: "ГАРАНТИИ И ОТВЕТСТВЕННОСТЬ",
    title: "Ограничение ответственности",
    paragraphs: [
      "Исполнитель обязуется выполнять все работы качественно и в соответствии с профессиональными стандартами. Однако, учитывая зависимость результатов от внешних факторов (алгоритмы поисковых систем Google/Яндекс, модерация рекламных сетей, рыночный спрос), Исполнитель не гарантирует конкретные позиции в поиске или фиксированное количество заявок.",
      "Стороны освобождаются от ответственности за частичное или полное неисполнение обязательств по договору, если это неисполнение явилось следствием обстоятельств непреодолимой силы (форс-мажор)."
    ]
  },
  {
    num: "05",
    tag: "СРОКИ И ИЗМЕНЕНИЯ",
    title: "Изменение условий и расторжение",
    paragraphs: [
      "Исполнитель оставляет за собой право вносить изменения в условия настоящей оферты в любое время. Изменения вступают в силу с момента их публикации на сайте.",
      "Договор может быть расторгнут любой из сторон с предварительным письменным уведомлением другой стороны не менее чем за 15 (пятнадцать) календарных дней до предполагаемой даты расторжения. При этом уже фактически выполненные работы подлежат оплате."
    ]
  }
];

export default function TermsPage() {
  useReveal();

  return (
    <div className="relative min-h-screen bg-paper overflow-x-clip font-body">
      {/* Decorative elements */}
      <NotebookHoles />
      <DoodleDecorations />
      <CursorTrail />

      <Header />

      <main style={{ paddingTop: "140px", paddingBottom: "80px" }} className="relative z-10">
        <div className="container mx-auto px-5 md:px-10">
          
          {/* ── Page Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[1100px] text-left mb-16"
          >
            <h1 className="font-heading text-4xl sm:text-7xl lg:text-[90px] font-black leading-[0.95] text-ink-dark tracking-tighter uppercase select-none mb-12">
              Публичная <br />
              <span className="font-serif italic text-coral lowercase font-normal tracking-normal">оферта.</span>
            </h1>

            {/* Description Row (matching Privacy page) */}
            <div className="border-t border-line-blue pt-10 pb-6 text-left">
              <p className="font-body text-lg md:text-xl lg:text-[22px] text-pencil leading-relaxed font-medium max-w-[720px]">
                Правила предоставления услуг, порядок расчетов, условия взаимодействия и ответственность сторон при работе с performance-агентством traffic63.
              </p>
            </div>
          </motion.div>

          {/* ── Terms Content (Editorial layout) ── */}
          <div className="max-w-[900px] mx-auto mt-12 mb-20">
            {sections.map((section) => (
              <div 
                key={section.num}
                className="border-t border-line-blue py-10 md:py-12 flex flex-col md:flex-row gap-6 md:gap-12 reveal"
              >
                {/* Left meta block */}
                <div className="md:w-1/4 flex justify-between md:flex-col md:justify-start gap-4">
                  <span className="font-body text-xs font-black text-ink-dark select-none mt-1">
                    {section.num}
                  </span>
                  <span className="font-heading text-[10px] font-extrabold tracking-widest text-pencil select-none uppercase mt-1">
                    {section.tag}
                  </span>
                </div>

                {/* Right content block */}
                <div className="md:w-3/4 text-left">
                  <h2 className="font-heading text-xl md:text-2xl font-black text-ink-dark mb-5 uppercase tracking-tight">
                    {section.title}
                  </h2>
                  <div className="flex flex-col gap-4">
                    {section.paragraphs.map((p, i) => (
                      <p 
                        key={i} 
                        className="font-body text-sm md:text-base text-pencil leading-relaxed font-medium"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-line-blue"></div>
          </div>

          {/* ── Footer Contact CTA ── */}
          <div className="max-w-[720px] mx-auto text-center reveal border border-line-blue rounded-[32px] p-8 md:p-12 bg-paper-dark relative overflow-hidden">
            {/* SVG Grid background */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="terms-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M 24 0 L 0 0 0 24" fill="none" stroke="var(--line-blue)" strokeWidth="0.8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#terms-grid)" />
            </svg>

            <div className="relative z-10 flex flex-col items-center">
              <span className="font-heading text-[10px] font-extrabold tracking-widest text-coral uppercase mb-2 select-none">
                ✦ ЕСТЬ ВОПРОСЫ ПО ОФЕРТЕ?
              </span>
              <h3 className="font-heading font-extrabold text-xl md:text-2xl text-ink-dark mb-4">Юридический отдел</h3>
              <p className="font-body text-sm text-pencil leading-relaxed mb-6 max-w-[500px]">
                Если вам требуется согласовать индивидуальный договор услуг или уточнить условия оплаты, свяжитесь с нами по почте.
              </p>
              <a 
                href="mailto:hello@traffic63.ru" 
                className="font-heading text-xs font-black uppercase tracking-widest bg-coral hover:bg-coral-dark text-white py-4 px-8 rounded-full transition-all hover:shadow-md cursor-pointer select-none"
              >
                hello@traffic63.ru
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
