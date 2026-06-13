// traffic63\components\CTASection.tsx
"use client";

import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";

export const CTASection = () => {
  return (
    <section className="relative bg-paper py-24 md:py-32 overflow-hidden border-t border-line-blue" id="contact">
      <div className="container mx-auto px-5 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Bold Editorial Heading & Subtitle */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <Reveal delay={0.1}>
              <span className="font-heading text-[10px] font-extrabold tracking-widest text-coral uppercase mb-6 block select-none">
                ✦ ОБСУДИТЬ ПРОЕКТ
              </span>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="font-heading text-4xl sm:text-7xl lg:text-[90px] font-black leading-[0.9] text-ink-dark tracking-tighter uppercase select-none">
                Готовы <br />
                <span className="font-serif italic text-coral lowercase font-normal tracking-normal">вырасти?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="font-body text-lg text-pencil leading-relaxed mt-6 max-w-[480px]">
                Оставьте заявку — обсудим ваш проект бесплатно и составим индивидуальный план действий для вашего бизнеса.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <span className="font-handwritten text-2xl text-ink-blue mt-8 -rotate-1 inline-block select-none">
                ✦ Свяжемся в течение 15 минут
              </span>
            </Reveal>
          </div>

          {/* Right Column: Premium Contact Form Card */}
          <div className="lg:col-span-6 w-full">
            <Reveal delay={0.3} className="w-full">
              <div className="cta-card">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
