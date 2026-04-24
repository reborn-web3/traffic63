"use client";

import React from "react";
import Image from "next/image";

interface ServiceRoadmapItem {
  id: string;
  step: string;
  title: string;
  description: string;
  whyItMatters: string;
  tag: string;
  icon: string;
  translateX: string; // Позиция левее/правее
  translateY: string; // Позиция выше/ниже
}

const ROADMAP: ServiceRoadmapItem[] = [
  {
    id: "development",
    step: "01",
    title: "Создание сайта",
    description: "Лендинги, корпоративные сайты и интернет-магазины. Разрабатываем с фокусом на UX/UI и высокую конверсию.",
    whyItMatters: "Ваш сайт — это фундамент. Мы создаем эстетичное и функциональное пространство, которое вызывает доверие и конвертирует посетителей в клиентов.",
    tag: "от 200 ₽/день",
    icon: "/images/doodle_laptop.png",
    translateX: "-200px", // 1 карточка левее
    translateY: "0px",
  },
  {
    id: "seo",
    step: "02",
    title: "SEO-продвижение",
    description: "Глубокая оптимизация структуры, технический аудит и стратегический вывод в ТОП Яндекс и Google.",
    whyItMatters: "Органический трафик — самый горячий. Люди уже ищут ваши услуги, мы лишь помогаем им найти именно вас, обеспечивая долгосрочный ROI.",
    tag: "ТОП-10 за 3 мес.",
    icon: "/images/doodle_rocket.png",
    translateX: "200px", // 2 карточка правее
    translateY: "0px", // 2 карточка выше
  },
  {
    id: "ads",
    step: "03",
    title: "Запуск рекламы",
    description: "Performance-маркетинг: Яндекс Директ, Google Ads, VK и Telegram. Управляем бюджетами с ювелирной точностью.",
    whyItMatters: "Масштабируемый поток заявок здесь и сейчас. Направляем целевую аудиторию на ваш конверсионный сайт для мгновенного роста продаж.",
    tag: "ROI до 500%",
    icon: "/images/doodle_megaphone.png",
    translateX: "-200px", // 3 карточка левее
    translateY: "0px",  // 3 карточка чуть ниже
  },
  {
    id: "analytics",
    step: "04",
    title: "Веб-аналитика",
    description: "Внедрение сквозной аналитики, дашбордов и коллтрекинга. Полная оцифровка каждого вложенного рубля.",
    whyItMatters: "Управление на основе данных. Мы находим точки кратного роста, отключаем неэффективные каналы и масштабируем то, что приносит прибыль.",
    tag: "прозрачность 100%",
    icon: "/images/doodle_growth.png",
    translateX: "200px",
    translateY: "0px",
  },
];

export const ServiceSnake = () => {
  return (
    <section className="section cozy-roadmap-section" id="services">
      <div className="container">
        <div className="cozy-header">
          <span className="cozy-label">🚀 План действий</span>
          <h2 className="cozy-title">Как мы приводим вас к результату</h2>
          <p className="cozy-subtitle">
            Прозрачный и понятный маршрут к вашим целям. Никакой магии — только логика!
          </p>
        </div>

        <div className="cozy-snake-wrapper">
          {/* Responsive SVG Path connecting the cards */}
          <svg
            className="cozy-path-svg"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <path
              d="M 25 12.5 C 50 12.5, 50 37.5, 75 37.5 C 50 37.5, 50 62.5, 25 62.5 C 50 62.5, 50 87.5, 75 87.5"
              fill="none"
              stroke="var(--coral)"
              strokeWidth="4"
              strokeDasharray="8 8"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {ROADMAP.map((item, index) => {
            const isRight = index % 2 !== 0; // 0=Left, 1=Right, 2=Left, 3=Right

            return (
              <div
                key={item.id}
                className={`cozy-row ${isRight ? 'cozy-row-right' : 'cozy-row-left'}`}
              >
                {/* Node marker on the path */}
                <div className="cozy-node-marker" />

                <div
                  className="cozy-card"
                  style={{
                    // Передаем настройки смещения в CSS переменные
                    "--offset-x": item.translateX,
                    "--offset-y": item.translateY,
                  } as React.CSSProperties}
                >
                  <div className="cozy-card-header">
                    <div className="cozy-card-icon">
                      <Image src={item.icon} alt={item.title} width={40} height={40} />
                    </div>
                    <div>
                      <span className="cozy-step-badge">Шаг {item.step}</span>
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                  <p className="cozy-card-desc">{item.description}</p>

                  {/* Cozy Speech Bubble for "Why" */}
                  <div className="cozy-speech-bubble">
                    <strong>💡 Зачем это нужно:</strong>
                    <p>{item.whyItMatters}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
