"use client";

import { ServiceCard } from "./ServiceCard";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

/**
 * Services section component.
 * Renders a grid of service cards with reveal animations.
 */
export const Services = () => {
  const services = [
    {
      imageUrl: "/images/doodle_laptop.png",
      imageAlt: "Разработка сайтов",
      title: "Разработка сайтов",
      description:
        "Лендинги, многостраничные сайты, формы обратной связи и интеграция CMS — под ключ, от дизайна до запуска.",
      tag: "от 200 ₽/день",
      delay: 0,
    },
    {
      imageUrl: "/images/doodle_target.png",
      imageAlt: "Контекстная реклама",
      title: "Контекстная реклама",
      description:
        "Яндекс Директ и Google Ads с максимальной отдачей. Находим вашу аудиторию в момент поиска.",
      tag: "ROI до 500%",
      delay: 0.1,
    },
    {
      imageUrl: "/images/doodle_megaphone.png",
      imageAlt: "Таргетированная реклама",
      title: "Таргетированная реклама",
      description:
        "VK, Telegram Ads и другие соцсети. Точечное попадание в вашу целевую аудиторию.",
      tag: "от 50₽ за лид",
      delay: 0.2,
    },
    {
      imageUrl: "/images/doodle_growth.png",
      imageAlt: "Веб‑аналитика",
      title: "Веб‑аналитика",
      description:
        "Настройка Яндекс Метрики, сквозная аналитика, отслеживание конверсий — видим каждый рубль.",
      tag: "прозрачность 100%",
      delay: 0.3,
    },
    {
      imageUrl: "/images/doodle_idea.png",
      imageAlt: "Стратегия продвижения",
      title: "Стратегия продвижения",
      description:
        "Разрабатываем комплексную стратегию на основе анализа рынка и конкурентов.",
      tag: "индивидуально",
      delay: 0.4,
    },
    {
      imageUrl: "/images/doodle_rocket.png",
      imageAlt: "SEO‑продвижение",
      title: "SEO‑продвижение",
      description:
        "Органический трафик, который работает на вас 24/7. Выводим в ТОП поисковых систем.",
      tag: "ТОП‑10 за 3 мес.",
      delay: 0.5,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="py-24 relative overflow-hidden" id="services">
      {/* Мягкий фон */}
      <div className="absolute inset-0 bg-paper-dark pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-line-blue-light/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-5 md:px-10 relative z-10">
        <div className="max-w-3xl mb-16">
          <Reveal delay={0}>
            <span className="font-handwritten text-2xl text-coral block mb-3 -rotate-2">
              📌 Что мы делаем
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-ink-dark leading-tight mb-6">
              Наши услуги
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-pencil text-lg md:text-xl leading-relaxed max-w-2xl">
              Полный цикл performance‑маркетинга: от стратегии до масштабирования
              результатов. Делаем прозрачно и с фокусом на окупаемость.
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((svc, idx) => (
            <ServiceCard
              key={idx}
              imageUrl={svc.imageUrl}
              imageAlt={svc.imageAlt}
              title={svc.title}
              description={svc.description}
              tag={svc.tag}
              delay={svc.delay} // delay passes to ServiceCard
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
