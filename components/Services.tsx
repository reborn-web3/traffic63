"use client";

import { ServiceCard } from "./ServiceCard";
import { Reveal } from "./Reveal";

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

  return (
    <section className="section" id="services">
      <div className="container mx-auto px-5 md:px-10">
        <Reveal delay={0}>
          <span className="section-label">📌 Что мы делаем</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">Наши услуги</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="section-subtitle">
            Полный цикл performance‑маркетинга: от стратегии до масштабирования
            результатов
          </p>
        </Reveal>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((svc, idx) => (
            <ServiceCard
              key={idx}
              imageUrl={svc.imageUrl}
              imageAlt={svc.imageAlt}
              title={svc.title}
              description={svc.description}
              tag={svc.tag}
              delay={svc.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
