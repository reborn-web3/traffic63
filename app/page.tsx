"use client";

// Metadata import removed because generateMetadata is no longer needed
import { useEffect } from "react";
import Image from "next/image";

// generateMetadata removed – layout now provides site‑wide metadata.

export default function Home() {
  useEffect(() => {
    // ===== HEADER SCROLL EFFECT =====
    const header = document.getElementById("header");
    if (!header) return;

    const handleScroll = () => {
      header.classList.toggle("scrolled", window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // ===== BURGER MENU =====
    const burger = document.getElementById("burger");
    const nav = document.getElementById("nav");

    const toggleMenu = () => {
      burger?.classList.toggle("active");
      nav?.classList.toggle("open");
    };
    burger?.addEventListener("click", toggleMenu);

    const closeMenu = () => {
      burger?.classList.remove("active");
      nav?.classList.remove("open");
    };
    nav
      ?.querySelectorAll("a")
      .forEach((link) => link.addEventListener("click", closeMenu));

    // ===== SMOOTH SCROLL =====
    const smoothScrollLinks =
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault();
      const anchor = e.currentTarget as HTMLAnchorElement;
      const href = anchor.getAttribute("href");
      // Guard against empty, null or just "#" which is not a valid selector
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (target && header) {
        const targetPosition =
          target.getBoundingClientRect().top +
          window.scrollY -
          header.offsetHeight -
          20;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    };
    smoothScrollLinks.forEach((anchor) =>
      anchor.addEventListener("click", handleSmoothScroll),
    );

    // ===== REVEAL ON SCROLL =====
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );
    document
      .querySelectorAll(".reveal")
      .forEach((el) => revealObserver.observe(el));

    // ===== COUNTER ANIMATION =====
    const animateCounter = (element: Element, target: number) => {
      const duration = 2000;
      const startTime = performance.now();
      const labelText =
        element.closest(".stat-item")?.querySelector(".stat-label")
          ?.textContent ?? "";
      const suffix = labelText.includes("%") ? "" : "+";

      const step = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent =
          Math.round(eased * target) + (progress === 1 ? suffix : "");
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute("data-target") ?? "0", 10);
            animateCounter(el, target);
            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 },
    );
    document
      .querySelectorAll<Element>(".stat-number[data-target]")
      .forEach((el) => counterObserver.observe(el));

    // ===== PARALLAX FOR DOODLES =====
    const doodles = document.querySelectorAll<HTMLElement>(".hero-doodle");
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      doodles.forEach((doodle, index) => {
        const speed = (index + 1) * 15;
        const rotateSpeed = (index + 1) * 3;
        doodle.style.transform = `translate(${x * speed}px, ${y * speed}px) rotate(${x * rotateSpeed}deg)`;
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // ===== PHONE INPUT MASK =====
    const phoneInput = document.getElementById(
      "phone",
    ) as HTMLInputElement | null;
    const handlePhoneInput = (e: Event) => {
      const input = e.target as HTMLInputElement;
      let value = input.value.replace(/\D/g, "");
      if (!value.length) {
        input.value = "";
        return;
      }
      if (value[0] === "8") value = "7" + value.slice(1);
      if (value[0] !== "7") value = "7" + value;

      let formatted = "+7";
      if (value.length > 1) formatted += " (" + value.slice(1, 4);
      if (value.length > 4) formatted += ") " + value.slice(4, 7);
      if (value.length > 7) formatted += "-" + value.slice(7, 9);
      if (value.length > 9) formatted += "-" + value.slice(9, 11);
      input.value = formatted;
    };
    phoneInput?.addEventListener("input", handlePhoneInput);

    // ===== FORM SUBMISSION =====
    const form = document.getElementById(
      "contactForm",
    ) as HTMLFormElement | null;
    const handleFormSubmit = (e: Event) => {
      e.preventDefault();
      const submitBtn = form?.querySelector<HTMLButtonElement>(
        'button[type="submit"]',
      );
      if (!submitBtn) return;

      const originalHTML = submitBtn.innerHTML;
      submitBtn.innerHTML = "✅ Заявка отправлена!";
      submitBtn.style.background = "#7ec8a0";
      submitBtn.style.pointerEvents = "none";

      setTimeout(() => {
        form?.reset();
        submitBtn.innerHTML = originalHTML;
        submitBtn.style.background = "";
        submitBtn.style.pointerEvents = "";
      }, 3000);
    };
    form?.addEventListener("submit", handleFormSubmit);

    // ===== SVG DOODLE DECORATIONS =====
    const svgDoodles = [
      {
        svg: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M15 2L18 12L28 15L18 18L15 28L12 18L2 15L12 12Z" stroke="#b8d4e8" stroke-width="1.5" fill="none"/></svg>`,
        positions: [
          { top: "20%", left: "5%" },
          { top: "60%", right: "3%" },
          { bottom: "15%", left: "10%" },
        ],
      },
      {
        svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#e8a0a0" stroke-width="1.5" stroke-dasharray="3 3"/></svg>`,
        positions: [
          { top: "35%", right: "8%" },
          { top: "75%", left: "3%" },
        ],
      },
      {
        svg: `<svg width="40" height="20" viewBox="0 0 40 20" fill="none"><path d="M2 10H35M35 10L28 3M35 10L28 17" stroke="#9b8ec4" stroke-width="1.5" stroke-linecap="round"/></svg>`,
        positions: [{ top: "45%", left: "2%" }],
      },
    ];

    const decorElements: HTMLDivElement[] = [];
    svgDoodles.forEach((doodle) => {
      doodle.positions.forEach((pos) => {
        const div = document.createElement("div");
        div.className = "doodle-decoration";
        div.innerHTML = doodle.svg;
        Object.assign(div.style, pos);
        const duration = 3 + Math.random() * 4;
        const delay = Math.random() * 2;
        div.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        document.body.appendChild(div);
        decorElements.push(div);
      });
    });

    // ===== CURSOR TRAIL =====
    let lastTrail = 0;
    const handleCursorTrail = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTrail < 80) return;
      lastTrail = now;

      const trail = document.createElement("div");
      trail.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: 4px;
        height: 4px;
        background: var(--line-blue);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0.3;
        transition: all 0.6s ease;
      `;
      document.body.appendChild(trail);
      requestAnimationFrame(() => {
        trail.style.opacity = "0";
        trail.style.transform = "scale(0)";
      });
      setTimeout(() => trail.remove(), 600);
    };
    document.addEventListener("mousemove", handleCursorTrail, {
      passive: true,
    });

    // ===== CLEANUP =====
    return () => {
      window.removeEventListener("scroll", handleScroll);
      burger?.removeEventListener("click", toggleMenu);
      nav
        ?.querySelectorAll("a")
        .forEach((link) => link.removeEventListener("click", closeMenu));
      smoothScrollLinks.forEach((anchor) =>
        anchor.removeEventListener("click", handleSmoothScroll),
      );
      window.removeEventListener("mousemove", handleMouseMove);
      phoneInput?.removeEventListener("input", handlePhoneInput);
      form?.removeEventListener("submit", handleFormSubmit);
      document.removeEventListener("mousemove", handleCursorTrail);
      revealObserver.disconnect();
      counterObserver.disconnect();
      decorElements.forEach((el) => el.remove());
    };
  }, []);

  return (
    <>
      {/* Notebook holes decoration */}
      <div className="notebook-holes" aria-hidden="true">
        <div className="notebook-hole" />
        <div className="notebook-hole" />
        <div className="notebook-hole" />
        <div className="notebook-hole" />
        <div className="notebook-hole" />
      </div>

      {/* ===== HEADER ===== */}
      <header className="header" id="header">
        <div className="container">
          <a href="#" className="logo">
            traffic<span>63</span>
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
                alt="О команде traffic63"
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
                <strong>traffic63</strong> — это не просто агентство. Это
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
              traffic<span>63</span>
            </a>
            <div className="footer-links">
              <a href="#services">Услуги</a>
              <a href="#about">О нас</a>
              <a href="#cases">Кейсы</a>
              <a href="#contact">Контакты</a>
            </div>
          </div>
          <div className="footer-bottom">
            © 2024 traffic63 — нарисовано с любовью 💙
          </div>
        </div>
      </footer>
    </>
  );
}
