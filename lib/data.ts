export const navigationLinks = [
  { label: "Услуги", href: "/#services" },
  { label: "О нас", href: "/#about" },
  { label: "Как работаем", href: "/#process" },
  { label: "Кейсы", href: "/#cases" },
];

export const stats = [
  { value: 50, label: "довольных клиентов", suffix: "+" },
  { value: 120, label: "запущенных кампаний", suffix: "+" },
  { value: 340, label: "% средний рост ROAS", suffix: "" },
  { value: 3, label: "года на рынке", suffix: "+" },
];

export const processSteps = [
  {
    number: "01",
    title: "Бриф и аудит",
    description: "Погружаемся в ваш бизнес, изучаем конкурентов и текущие каналы",
  },
  {
    number: "02",
    title: "Стратегия",
    description: "Формируем план действий с чёткими KPI и таймлайном",
  },
  {
    number: "03",
    title: "Запуск",
    description: "Настраиваем рекламу, подключаем аналитику, тестируем гипотезы",
  },
  {
    number: "04",
    title: "Масштабирование",
    description: "Усиливаем то, что работает, и отключаем то, что нет",
  },
];

export const cases = [
  {
    icon: "🏠",
    title: "Агентство недвижимости",
    niche: "Контекстная реклама",
    description: "За 3 месяца увеличили количество целевых заявок в 4 раза при снижении стоимости лида на 60%.",
    results: [
      { value: "×4", label: "рост заявок" },
      { value: "−60%", label: "стоимость лида" },
    ],
  },
  {
    icon: "🛒",
    title: "Интернет-магазин одежды",
    niche: "Таргет + ретаргетинг",
    description: "Запустили рекламу в VK и достигли ROAS 580% за первые 2 месяца с нуля.",
    results: [
      { value: "580%", label: "ROAS" },
      { value: "890", label: "заказов/мес" },
    ],
  },
  {
    icon: "🏥",
    title: "Медицинская клиника",
    niche: "SEO + контекст",
    description: "Комплексная работа: вывели сайт в ТОП‑5 и настроили рекламу с конверсией в запись 12%.",
    results: [
      { value: "ТОП‑5", label: "по 40 запросам" },
      { value: "12%", label: "конверсия в запись" },
    ],
  },
  {
    icon: "🍕",
    title: "Доставка еды",
    niche: "Полный цикл",
    description: "Лендинг + реклама + аналитика = 1200 заказов в месяц с первой итерации.",
    results: [
      { value: "1200", label: "заказов/мес" },
      { value: "95₽", label: "стоимость заказа" },
    ],
  },
];
