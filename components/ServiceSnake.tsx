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
  {
    id: "smm",
    step: "05",
    title: "SMM и Контент",
    description: "Ведение социальных сетей, создание вовлекающего контента и комьюнити-менеджмент. Делаем ваш бренд живым.",
    whyItMatters: "Соцсети — это лицо бизнеса. Мы формируем лояльное сообщество вокруг вашего бренда, подогреваем интерес и превращаем подписчиков в адвокатов бренда.",
    tag: "охваты и лояльность",
    icon: "/images/doodle_megaphone.png", // Используем имеющуюся иконку
    translateX: "-200px",
    translateY: "0px",
  },
  {
    id: "crm",
    step: "06",
    title: "CRM и Автоматизация",
    description: "Внедрение CRM, email-маркетинга и чат-ботов. Выстраиваем систему возврата и удержания покупателей.",
    whyItMatters: "Привлечь клиента дорого, удержать — дешевле. Мы автоматизируем воронку продаж так, чтобы клиенты покупали снова и снова.",
    tag: "рост LTV",
    icon: "/images/doodle_growth.png", // Используем имеющуюся иконку
    translateX: "200px",
    translateY: "0px",
  },
];

// Генератор SVG пути для любого количества карточек
const generateSnakePath = (numItems: number) => {
  if (numItems === 0) return "";
  const points = [];
  for (let i = 0; i < numItems; i++) {
    const isRight = i % 2 !== 0;
    const x = isRight ? 75 : 25;
    const y = 12.5 + i * 25;
    points.push({ x, y });
  }

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < numItems; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    d += ` C 50 ${prev.y}, 50 ${curr.y}, ${curr.x} ${curr.y}`;
  }
  return d;
};

export const ServiceSnake = () => {
  const numItems = ROADMAP.length;
  const viewBoxHeight = numItems * 25;
  const pathD = generateSnakePath(numItems);

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
            viewBox={`0 0 100 ${viewBoxHeight}`}
          >
            <path
              d={pathD}
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

