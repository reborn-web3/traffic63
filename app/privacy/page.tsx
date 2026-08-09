"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CursorTrail } from "@/components/CursorTrail";
import { useReveal } from "@/hooks/useReveal";

interface PrivacySection {
  num: string;
  tag: string;
  title: string;
  paragraphs: string[];
}

const sections: PrivacySection[] = [
  {
    num: "01",
    tag: "СБОР ДАННЫХ",
    title: "Какую информацию мы собираем",
    paragraphs: [
      "Мы собираем персональные данные, которые вы добровольно оставляете в формах обратной связи на нашем сайте: ваше имя, контактный телефон, адрес электронной почты и информацию о вашей компании или проекте.",
      "Кроме того, при посещении нашего ресурса автоматически собираются технические обезличенные данные с помощью веб-аналитики (Яндекс.Метрика, Google Analytics и др.): файлы cookie, IP-адрес, тип браузера, операционная система, время посещения и пути перемещения по страницам."
    ]
  },
  {
    num: "02",
    tag: "ИСПОЛЬЗОВАНИЕ",
    title: "Для чего нужны ваши данные",
    paragraphs: [
      "Все собранные данные используются исключительно для связи с вами по вашему запросу, подготовки индивидуальных коммерческих предложений, а также для аналитики посещаемости и повышения удобства пользования сайтом.",
      "Мы не отправляем спам-рассылки без вашего явного предварительного согласия и не используем ваши контакты в навязчивых маркетинговых кампаниях."
    ]
  },
  {
    num: "03",
    tag: "БЕЗОПАСНОСТЬ",
    title: "Защита и конфиденциальность",
    paragraphs: [
      "Мы обеспечиваем защиту полученных персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения с помощью современных стандартов шифрования и организационных мер безопасности.",
      "Ваша личная информация ни при каких обстоятельствах не продается, не передается в аренду и не раскрывается третьим лицам, за исключением случаев, строго предусмотренных действующим законодательством РФ."
    ]
  },
  {
    num: "04",
    tag: "COOKIES",
    title: "Использование файлов cookie",
    paragraphs: [
      "Файлы cookie помогают нам анализировать взаимодействие пользователей с сайтом, выявлять технические ошибки и оптимизировать производительность страниц. Вы можете отключить cookie в настройках вашего браузера в любое время.",
      "Обратите внимание, что отключение некоторых файлов cookie может привести к некорректной работе отдельных разделов сайта или снижению скорости его загрузки."
    ]
  },
  {
    num: "05",
    tag: "ВАШИ ПРАВА",
    title: "Управление вашими данными",
    paragraphs: [
      "Вы имеете полное право в любой момент запросить информацию о том, какие именно персональные данные о вас у нас хранятся, а также потребовать их изменения, уточнения или полного удаления из нашей базы.",
      "Для отзыва согласия на обработку данных просто напишите нам на электронную почту traffic63.agency@mail.ru с пометкой в теме «Отзыв персональных данных»."
    ]
  }
];

export default function PrivacyPage() {
  useReveal();

  return (
    <div className="relative min-h-screen bg-paper overflow-x-clip font-body">
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
              Политика <br />
              <span className="font-serif italic text-coral lowercase font-normal tracking-normal">конфиденциальности.</span>
            </h1>

            {/* Description Row (matching Hero and Contact pages) */}
            <div className="border-t border-line-blue pt-10 pb-6 text-left">
              <p className="font-body text-lg md:text-xl lg:text-[22px] text-pencil leading-relaxed font-medium max-w-[720px]">
                Мы ценим доверие наших пользователей и бережно относимся к безопасности ваших данных. В этом документе подробно описаны принципы сбора и обработки информации.
              </p>
            </div>
          </motion.div>

          {/* ── Privacy Policy Content (Editorial layout) ── */}
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


        </div>
      </main>

      <Footer />
    </div>
  );
}
