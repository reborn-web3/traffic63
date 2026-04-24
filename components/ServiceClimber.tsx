"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface ServiceBar {
  label: string;
  emoji: string;
  height: number; // percentage height of the bar
}

const SERVICES: ServiceBar[] = [
  { label: "Веб-аналитика", emoji: "📊", height: 20 },
  { label: "SEO-продвижение", emoji: "🚀", height: 35 },
  { label: "Разработка сайтов", emoji: "💻", height: 48 },
  { label: "Таргетированная реклама", emoji: "📣", height: 60 },
  { label: "Контекстная реклама", emoji: "🎯", height: 72 },
  { label: "Стратегия продвижения", emoji: "📈", height: 85 },
];

// How many extra viewport-heights the section takes for scroll capture
// Уменьшили с 4 до 2.5, чтобы скролл был более динамичным и страница не казалась слишком длинной
const SCROLL_MULTIPLIER = 2.5;

export const ServiceClimber = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const barsContainerRef = useRef<HTMLDivElement>(null);
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const [activeBar, setActiveBar] = useState(0);
  const [jumpAnim, setJumpAnim] = useState(false);
  const [charPos, setCharPos] = useState({ x: 0, yPercent: 0 });
  const [facingRight, setFacingRight] = useState(true);
  const prevBar = useRef(0);

  // Обновляем позицию человечка
  const updateCharPos = useCallback(() => {
    const container = barsContainerRef.current;
    const activeEl = barRefs.current[activeBar];
    
    if (container && activeEl) {
      const containerRect = container.getBoundingClientRect();
      const barRect = activeEl.getBoundingClientRect();
      
      // X = центр активного столбика
      const x = barRect.left - containerRect.left + barRect.width / 2;
      // Y берем напрямую из данных в процентах (плюс 4px паддинга снизу в CSS)
      const yPercent = SERVICES[activeBar].height;
      
      setCharPos({ x, yPercent });
    }
  }, [activeBar]);

  useEffect(() => {
    const timeout = setTimeout(updateCharPos, 100);
    window.addEventListener("resize", updateCharPos);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", updateCharPos);
    };
  }, [updateCharPos]);

  const handleBarClick = useCallback((index: number) => {
    const outer = outerRef.current;
    if (!outer) return;

    const outerHeight = outer.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollableRange = outerHeight - viewportHeight;
    
    // Center progress for the clicked bar
    const targetProgress = (index + 0.5) / SERVICES.length;
    const targetScrolled = targetProgress * scrollableRange;
    
    // Absolute Y position
    const targetY = targetScrolled + outer.offsetTop;

    window.scrollTo({
      top: targetY,
      behavior: "smooth"
    });
  }, []);

  const handleScroll = useCallback(() => {
    const outer = outerRef.current;
    if (!outer) return;

    const rect = outer.getBoundingClientRect();
    const outerHeight = outer.offsetHeight;
    const viewportHeight = window.innerHeight;

    const scrollableRange = outerHeight - viewportHeight;
    if (scrollableRange <= 0) return;

    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableRange));

    const barIndex = Math.min(
      SERVICES.length - 1,
      Math.floor(progress * SERVICES.length)
    );

    if (barIndex !== prevBar.current) {
      setFacingRight(barIndex > prevBar.current);
      setJumpAnim(true);
      setTimeout(() => setJumpAnim(false), 500);
      prevBar.current = barIndex;
    }

    setActiveBar(barIndex);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      className="climber-outer"
      ref={outerRef}
      style={{ height: `${SCROLL_MULTIPLIER * 100}vh` }}
    >
      <div className="climber-sticky">
        <section className="climber-section" aria-label="Наши услуги — интерактивная диаграмма">
          <div className="container">
            <div className="climber-header">
              <span className="section-label">🎮 Прокачай свой бизнес</span>
              <h2 className="section-title">Поднимайся к успеху</h2>
              <p
                className="section-subtitle"
                style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}
              >
                Скролль вниз — и увидишь, как растут возможности с каждой нашей услугой
              </p>
            </div>

            <div className="climber-arena">
              <div className="climber-glow" />

              <div className="climber-grid" aria-hidden="true">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="climber-grid-line"
                    style={{ bottom: `${(i + 1) * 15}%` }}
                  />
                ))}
              </div>

              <div className="climber-bars" ref={barsContainerRef}>
                {SERVICES.map((svc, idx) => {
                  const isActive = idx === activeBar;
                  const isPast = idx < activeBar;
                  const isFuture = idx > activeBar;

                  return (
                    <div 
                      className="climber-bar-wrapper" 
                      key={idx}
                      onClick={() => handleBarClick(idx)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div
                        className={`climber-bar ${
                          isActive ? "climber-bar--active" : ""
                        } ${isPast ? "climber-bar--past" : ""} ${
                          isFuture ? "climber-bar--future" : ""
                        }`}
                        style={{ height: `${svc.height}%` }}
                        ref={(el) => { barRefs.current[idx] = el; }}
                      >
                        {/* Стилизованный вылетающий лейбл внутри бара (чтобы отталкиваться от его высоты) */}
                        <div
                          className={`climber-label-modern ${
                            isActive ? "climber-label-modern--visible" : ""
                          }`}
                        >
                          <div className="climber-label-modern-inner">
                            <div className="climber-label-modern-icon">{svc.emoji}</div>
                            <div className="climber-label-modern-text">{svc.label}</div>
                          </div>
                        </div>

                        <div className="climber-bar-fill">
                          {isActive && <div className="climber-bar-glint" />}
                        </div>
                        <div className="climber-bar-glass-top" />
                        <span className="climber-bar-number">{idx + 1}</span>
                      </div>
                    </div>
                  );
                })}

                <div 
                  className="climber-character-global"
                  style={{ 
                    transform: `translateX(${charPos.x}px)`,
                    bottom: `calc(${charPos.yPercent}% + 4px)`,
                    opacity: charPos.x === 0 ? 0 : 1
                  }}
                >
                  <div className={`climber-character-inner ${jumpAnim ? "is-jumping" : ""}`}>
                    <div className="climber-character-shadow" />
                    
                    <svg
                      viewBox="0 0 60 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="climber-svg"
                      style={{ transform: facingRight ? 'scaleX(1)' : 'scaleX(-1)' }}
                    >
                      <circle cx="30" cy="16" r="12" stroke="var(--ink-dark)" strokeWidth="3" fill="var(--paper)"/>
                      <circle cx="25" cy="14" r="2" fill="var(--ink-dark)" />
                      <circle cx="35" cy="14" r="2" fill="var(--ink-dark)" />
                      <path d="M24 20 Q30 26 36 20" stroke="var(--coral)" strokeWidth="2" strokeLinecap="round" fill="none"/>
                      <line x1="30" y1="28" x2="30" y2="58" stroke="var(--ink-dark)" strokeWidth="3" strokeLinecap="round"/>
                      <g className="climber-arms">
                        <line x1="30" y1="38" x2="14" y2="48" stroke="var(--ink-dark)" strokeWidth="3" strokeLinecap="round"/>
                        <line x1="30" y1="38" x2="46" y2="32" stroke="var(--ink-dark)" strokeWidth="3" strokeLinecap="round"/>
                      </g>
                      <g className="climber-legs">
                        <line x1="30" y1="58" x2="18" y2="78" stroke="var(--ink-dark)" strokeWidth="3" strokeLinecap="round"/>
                        <line x1="30" y1="58" x2="42" y2="78" stroke="var(--ink-dark)" strokeWidth="3" strokeLinecap="round"/>
                      </g>
                      <g className="climber-flag">
                        <line x1="46" y1="32" x2="46" y2="8" stroke="var(--ink-dark)" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M46 8 L58 14 L46 20" fill="var(--coral)" stroke="var(--ink-dark)" strokeWidth="1" strokeLinejoin="round" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="climber-baseline" aria-hidden="true" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
