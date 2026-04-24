// traffic63\components\Cases.tsx
"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";

/**
 * Cases section component.
 * Displays a grid of case cards with a reveal animation.
 */
import { cases as casesData } from "@/lib/data";

/**
 * Cases section component.
 * Displays a grid of case cards with a reveal animation.
 */
export const Cases = () => {
  const cases = casesData;

  return (
    <section className="section" id="cases">
      <div className="container mx-auto px-5 md:px-10">
        <Reveal delay={0}>
          <span className="section-label">📊 Результаты</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">Наши кейсы</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="section-subtitle">
            Реальные цифры, которыми мы гордимся
          </p>
        </Reveal>

        <div className="cases-grid grid gap-8 md:grid-cols-2 lg:grid-cols-2 mt-12">
          {cases.map((c, idx) => (
            <Reveal
              key={idx}
              delay={0.3 + idx * 0.1}
              className="case-card"
            >
              <div className="case-card-header flex items-center gap-4 mb-4">
                <div className="case-icon text-3xl">{c.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-ink-dark">
                    {c.title}
                  </h3>
                  <span className="case-niche text-sm text-pencil">
                    {c.niche}
                  </span>
                </div>
              </div>

              {/* Optional image placeholder – you can replace with real images */}
              <Image
                src="/images/doodle_idea.png"
                alt={c.title}
                width={80}
                height={80}
                className="mb-4"
                loading="lazy"
              />

              <p className="mb-4 text-pencil">{c.description}</p>

              <div className="case-results grid grid-cols-2 gap-4">
                {c.results.map((m, mIdx) => (
                  <div key={mIdx} className="case-metric text-center">
                    <span className="value font-bold text-2xl text-coral">
                      {m.value}
                    </span>
                    <span className="label block text-sm text-pencil">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
