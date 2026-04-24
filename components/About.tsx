"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";

/**
 * About section component.
 * Displays a side‑by‑side image and descriptive text.
 */
export const About = () => {
  return (
    <section className="section" id="about">
      <div className="container mx-auto px-5 md:px-10">
        <div className="about-grid grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <Reveal delay={0} className="about-image-wrapper">
            <Image
              src="/images/doodle_laptop.png"
              alt="О команде traffic63"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </Reveal>

          {/* Text */}
          <div className="about-text space-y-4">
            <Reveal delay={0.1}>
              <span className="section-label">🧑‍💻 Кто мы?</span>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="text-3xl font-bold text-ink-dark">
                Команда, которая живёт
                <br />
                цифрами и результатом
              </h2>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-lg text-pencil">
                <strong>traffic63</strong> — это не просто агентство. Это команда
                маркетологов, аналитиков и дизайнеров, которые помешаны на
                performance. Мы верим: каждый рубль бюджета должен приносить
                измеримый результат.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="text-lg text-pencil">
                Работаем с бизнесом любого масштаба — от локальных стартапов до
                федеральных брендов. Погружаемся в нишу, выстраиваем стратегию и
                масштабируем то, что работает.
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="handwritten-note">
                💡 «Не тратим бюджет — инвестируем его в рост вашего бизнеса»
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
