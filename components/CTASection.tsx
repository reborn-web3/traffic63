// traffic63\components\CTASection.tsx
"use client";

/**
 * CTASection component – combines a call‑to‑action heading with the
 * ContactForm component. All visual styling follows the existing Tailwind
 * configuration.
 */

import { ContactForm } from "./ContactForm";

export const CTASection = () => {
  return (
    <section className="cta-section" id="contact">
      <div className="container mx-auto px-5 md:px-10">
        <div className="cta-card">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-ink-dark mb-4 text-center">
            Готовы расти? 🚀
          </h2>
          <p className="text-lg text-pencil mb-6 text-center">
            Оставьте заявку — обсудим ваш проект бесплатно и составим план
            действий
          </p>

          {/* Contact form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
