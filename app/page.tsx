"use client";

import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="header" id="header">
        <div className="container">
          <a href="#" className="logo">
            traffik<span>63</span>
          </a>
          <nav className="nav" id="nav">
            <a href="#services">Услуги</a>
            <a href="#about">О нас</a>
            <a href="#process">Как работаем</a>
            <a href="#cases">Кейсы</a>
            <a href="#contact" className="nav-cta">
              Обсудить проект
            </a>
          </nav>
          <div className="burger" id="burger" aria-label="Открыть меню">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              ✏️ performance-агентство нового поколения
            </div>
            <h1>
              Превращаем <span className="highlight">рекламу</span>
              <br />в <span className="underline-sketch">реальные продажи</span>
            </h1>
            <p>
              Мы не просто настраиваем рекламу — мы строим системы привлечения
              клиентов, которые работают как часы. Данные, креатив и стратегия в
              одном флаконе.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Обсудить проект
              </a>
              <a href="#cases" className="btn-secondary">
                Посмотреть кейсы →
              </a>
            </div>
          </div>
        </div>

        {/* Floating doodles */}
        <div className="hero-doodles" aria-hidden="true">
          <Image
            src="/images/doodle_rocket.png"
            alt=""
            className="hero-doodle"
            width={80}
            height={80}
            loading="lazy"
          />
          <Image
            src="/images/doodle_growth.png"
            alt=""
            className="hero-doodle"
            width={80}
            height={80}
            loading="lazy"
          />
          <Image
            src="/images/doodle_idea.png"
            alt=""
            className="hero-doodle"
            width={80}
            height={80}
            loading="lazy"
          />
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item reveal">
              <span className="stat-number" data-target="50">
                0
              </span>
              <span className="stat-label">довольных клиентов</span>
            </div>
            <div className="stat-item reveal reveal-delay-1">
              <span className="stat-number" data-target="120">
                0
              </span>
              <span className="stat-label">запущенных кампаний</span>
            </div>
            <div className="stat-item reveal reveal-delay-2">
              <span className="stat-number" data-target="340">
                0
              </span>
              <span className="stat-label">% средний рост ROAS</span>
            </div>
            <div className="stat-item reveal reveal-delay-3">
              <span className="stat-number" data-target="3">
                0
              </span>
              <span className="stat-label">года на рынке</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section" id="services">
        <div className="container">
          <span className="section-label reveal">📌 Что мы делаем</span>
          <h2 className="section-title reveal">Наши услуги</h2>
          <p className="section-subtitle reveal">
            Полный цикл performance‑маркетинга: от стратегии до масштабирования
            результатов
          </p>

          <div className="services-grid">
            {/* Card 1 */}
            <div className="service-card reveal">
              <Image
                src="/images/doodle_target.png"
                alt="Контекстная реклама"
                className="service-card-icon"
                width={64}
                height={64}
              />
              <h3>Контекстная реклама</h3>
              <p>
                Яндекс Директ и Google Ads с максимальной отдачей. Находим вашу
                аудиторию в момент поиска.
              </p>
              <span className="tag">ROI до 500%</span>
            </div>
            {/* Card 2 */}
            <div className="service-card reveal reveal-delay-1">
              <Image
                src="/images/doodle_megaphone.png"
                alt="Таргетированная реклама"
                className="service-card-icon"
                width={64}
                height={64}
              />
              <h3>Таргетированная реклама</h3>
              <p>
                VK, Telegram Ads и другие соцсети. Точечное попадание в вашу
                целевую аудиторию.
              </p>
              <span className="tag">от 50₽ за лид</span>
            </div>
            {/* Card 3 */}
            <div className="service-card reveal reveal-delay-2">
              <Image
                src="/images/doodle_growth.png"
                alt="Веб-аналитика"
                className="service-card-icon"
                width={64}
                height={64}
              />
              <h3>Веб-аналитика</h3>
              <p>
                Настройка Яндекс Метрики, сквозная аналитика, отслеживание
                конверсий — видим каждый рубль.
              </p>
              <span className="tag">прозрачность 100%</span>
            </div>
            {/* Card 4 */}
            <div className="service-card reveal reveal-delay-3">
              <Image
                src="/images/doodle_laptop.png"
                alt="Создание лендингов"
                className="service-card-icon"
                width={64}
                height={64}
              />
              <h3>Создание лендингов</h3>
              <p>
                Высококонверсионные посадочные страницы, которые превращают
                трафик в заявки.
              </p>
              <span className="tag">конверсия от 5%</span>
            </div>
            {/* Card 5 */}
            <div className="service-card reveal reveal-delay-4">
              <Image
                src="/images/doodle_idea.png"
                alt="Стратегия продвижения"
                className="service-card-icon"
                width={64}
                height={64}
              />
              <h3>Стратегия продвижения</h3>
              <p>
                Разрабатываем комплексную стратегию на основе анализа рынка и
                конкурентов.
              </p>
              <span className="tag">индивидуально</span>
            </div>
            {/* Card 6 */}
            <div className="service-card reveal reveal-delay-5">
              <Image
                src="/images/doodle_rocket.png"
                alt="SEO‑продвижение"
                className="service-card-icon"
                width={64}
                height={64}
              />
              <h3>SEO‑продвижение</h3>
              <p>
                Органический трафик, который работает на вас 24/7. Выводим в ТОП
                поисковых систем.
              </p>
              <span className="tag">ТОП‑10 за 3 мес.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrapper reveal">
              <Image
                src="/images/doodle_laptop.png"
                alt="О команде traffik63"
                width={400}
                height={300}
              />
            </div>
            <div className="about-text reveal reveal-delay-1">
              <span className="section-label">🧑‍💻 Кто мы?</span>
              <h2>
                Команда, которая живёт
                <br />
                цифрами и результатом
              </h2>
              <p>
                <strong>traffik63</strong> — это не просто агентство. Это
                команда маркетологов, аналитиков и дизайнеров, которые помешаны
                на performance. Мы верим: каждый рубль бюджета должен приносить
                измеримый результат.
              </p>
              <p>
                Работаем с бизнесом любого масштаба — от локальных стартапов до
                федеральных брендов. Погружаемся в нишу, выстраиваем стратегию и
                масштабируем то, что работает.
              </p>
              <div className="handwritten-note">
                💡 «Не тратим бюджет — инвестируем его в рост вашего бизнеса»
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="section" id="process">
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <span className="section-label reveal">📋 Как это работает</span>
            <h2 className="section-title reveal">Наш процесс</h2>
            <p
              className="section-subtitle reveal"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              Прозрачный и понятный путь от брифа до первых результатов
            </p>
          </div>

          <div className="process-steps">
            <div className="process-step reveal">
              <div className="step-number">01</div>
              <h3>Бриф и аудит</h3>
              <p>
                Погружаемся в ваш бизнес, изучаем конкурентов и текущие каналы
              </p>
            </div>
            <div className="process-step reveal reveal-delay-1">
              <div className="step-number">02</div>
              <h3>Стратегия</h3>
              <p>Формируем план действий с чёткими KPI и таймлайном</p>
            </div>
            <div className="process-step reveal reveal-delay-2">
              <div className="step-number">03</div>
              <h3>Запуск</h3>
              <p>
                Настраиваем рекламу, подключаем аналитику, тестируем гипотезы
              </p>
            </div>
            <div className="process-step reveal reveal-delay-3">
              <div className="step-number">04</div>
              <h3>Масштабирование</h3>
              <p>Усиливаем то, что работает, и отключаем то, что нет</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CASES ===== */}
      <section className="section" id="cases">
        <div className="container">
          <span className="section-label reveal">📊 Результаты</span>
          <h2 className="section-title reveal">Наши кейсы</h2>
          <p className="section-subtitle reveal">
            Реальные цифры, которыми мы гордимся
          </p>

          <div className="cases-grid">
            {/* Case 1 */}
            <div className="case-card reveal">
              <div className="case-card-header">
                <div className="case-icon">🏠</div>
                <div>
                  <h3>Агентство недвижимости</h3>
                  <span className="case-niche">Контекстная реклама</span>
                </div>
              </div>
              <p>
                За 3 месяца увеличили количество целевых заявок в 4 раза при
                снижении стоимости лида на 60%.
              </p>
              <div className="case-results">
                <div className="case-metric">
                  <span className="value">×4</span>
                  <span className="label">рост заявок</span>
                </div>
                <div className="case-metric">
                  <span className="value">−60%</span>
                  <span className="label">стоимость лида</span>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="case-card reveal reveal-delay-1">
              <div className="case-card-header">
                <div className="case-icon">🛒</div>
                <div>
                  <h3>Интернет-магазин одежды</h3>
                  <span className="case-niche">Таргет + ретаргетинг</span>
                </div>
              </div>
              <p>
                Запустили рекламу в VK и достигли ROAS 580% за первые 2 месяца с
                нуля.
              </p>
              <div className="case-results">
                <div className="case-metric">
                  <span className="value">580%</span>
                  <span className="label">ROAS</span>
                </div>
                <div className="case-metric">
                  <span className="value">890</span>
                  <span className="label">заказов/мес</span>
                </div>
              </div>
            </div>

            {/* Case 3 */}
            <div className="case-card reveal reveal-delay-2">
              <div className="case-card-header">
                <div className="case-icon">🏥</div>
                <div>
                  <h3>Медицинская клиника</h3>
                  <span className="case-niche">SEO + контекст</span>
                </div>
              </div>
              <p>
                Комплексная работа: вывели сайт в ТОП‑5 и настроили рекламу с
                конверсией в запись 12%.
              </p>
              <div className="case-results">
                <div className="case-metric">
                  <span className="value">ТОП‑5</span>
                  <span className="label">по 40 запросам</span>
                </div>
                <div className="case-metric">
                  <span className="value">12%</span>
                  <span className="label">конверсия в запись</span>
                </div>
              </div>
            </div>

            {/* Case 4 */}
            <div className="case-card reveal reveal-delay-3">
              <div className="case-card-header">
                <div className="case-icon">🍕</div>
                <div>
                  <h3>Доставка еды</h3>
                  <span className="case-niche">Полный цикл</span>
                </div>
              </div>
              <p>
                Лендинг + реклама + аналитика = 1200 заказов в месяц с первой
                итерации.
              </p>
              <div className="case-results">
                <div className="case-metric">
                  <span className="value">1200</span>
                  <span className="label">заказов/мес</span>
                </div>
                <div className="case-metric">
                  <span className="value">95₽</span>
                  <span className="label">стоимость заказа</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA + CONTACT ===== */}
      <section className="cta-section" id="contact">
        <div className="container">
          <div className="cta-card reveal">
            <h2>Готовы расти? 🚀</h2>
            <p>
              Оставьте заявку — обсудим ваш проект бесплатно и составим план
              действий
            </p>
            <form className="contact-form" id="contactForm">
              <div className="form-group">
                <label htmlFor="name">Ваше имя ✍️</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Как вас зовут?"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Телефон 📱</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+7 (___) ___-__-__"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Расскажите о проекте 💬</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Чем занимается ваш бизнес? Какие задачи хотите решить?"
                />
              </div>
              <button
                type="submit"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Отправить заявку ✉️
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <a href="#" className="logo">
              traffik<span>63</span>
            </a>
            <div className="footer-links">
              <a href="#services">Услуги</a>
              <a href="#about">О нас</a>
              <a href="#cases">Кейсы</a>
              <a href="#contact">Контакты</a>
            </div>
          </div>
          <div className="footer-bottom">
            © 2024 traffik63 — нарисовано с любовью 💙
          </div>
        </div>
      </footer>

      {/* External script for interactive behaviour */}
      <Script src="/script.js" strategy="afterInteractive" />
    </>
  );
}
