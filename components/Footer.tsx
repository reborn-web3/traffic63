"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { navigationLinks } from "@/lib/data";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-paper text-ink-dark py-24 overflow-hidden border-t border-line-blue transition-colors duration-300">
      <div className="container mx-auto px-5 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6 items-start text-left">
            <Link
              href="/#hero"
              className="font-serif italic text-2xl md:text-3xl font-black text-ink-dark tracking-tight transition-opacity hover:opacity-85"
            >
              traffic<span className="text-coral">63</span>
            </Link>
            <p className="font-body text-sm text-pencil leading-relaxed max-w-[280px]">
              Performance-агентство, которое говорит на языке цифр. Рисуем стратегии роста и воплощаем их в жизнь с 2018 года.
            </p>
            <div className="flex gap-4 mt-2">
              <SocialIcon href="https://t.me/traffic63" icon="telegram" />
              <SocialIcon href="https://vk.com/traffic63" icon="vk" />
              <SocialIcon href="https://wa.me/79991234567" icon="whatsapp" />
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col text-left">
            <h4 className="font-heading text-xs font-extrabold uppercase tracking-widest text-pencil mb-6 select-none">
              Компания
            </h4>
            <ul className="flex flex-col gap-4">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group relative font-body text-sm font-semibold text-pencil hover:text-ink-dark transition-colors duration-300 py-1 inline-block"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-coral group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#contact"
                  className="group relative font-body text-sm font-semibold text-pencil hover:text-ink-dark transition-colors duration-300 py-1 inline-block"
                >
                  Обсудить проект
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-coral group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col text-left">
            <h4 className="font-heading text-xs font-extrabold uppercase tracking-widest text-pencil mb-6 select-none">
              Услуги
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                { label: "Контекстная реклама", href: "/#services" },
                { label: "Таргетированная реклама", href: "/#services" },
                { label: "SEO‑продвижение", href: "/#services" },
                { label: "Создание сайтов", href: "/#services" },
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="group relative font-body text-sm font-semibold text-pencil hover:text-ink-dark transition-colors duration-300 py-1 inline-block"
                  >
                    {service.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-coral group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contacts */}
          <div className="flex flex-col gap-4 items-start text-left">
            <h4 className="font-heading text-xs font-extrabold uppercase tracking-widest text-pencil mb-6 select-none">
              Контакты
            </h4>
            <div className="flex flex-col gap-4 items-start w-full">
              <a
                href="tel:+79991234567"
                className="font-heading text-xl font-extrabold text-ink-dark hover:text-coral transition-colors duration-300"
              >
                +7 (999) 123-45-67
              </a>
              <a
                href="mailto:hello@traffic63.ru"
                className="font-body text-sm text-pencil hover:text-ink-dark transition-colors duration-300 border-b border-dashed border-pencil/40 hover:border-ink-dark pb-0.5"
              >
                hello@traffic63.ru
              </a>
              <div className="bg-paper-dark/60 border border-line-blue rounded-2xl p-5 shadow-sm select-none text-left w-full mt-2 hover:shadow-md transition-shadow duration-300">
                <p className="font-heading text-[9px] font-extrabold tracking-widest text-pencil uppercase mb-1">
                  Офис в Самаре
                </p>
                <p className="font-body text-xs text-ink-dark leading-relaxed">
                  ул. Ново-Садовая, 106, офис 402
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-line-blue/60 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-body text-xs text-pencil/80 text-center md:text-left">
            © {currentYear} traffic63 — Performance-агентство.
          </div>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="font-body text-xs text-pencil hover:text-ink-dark transition-colors duration-300"
            >
              Политика конфиденциальности
            </Link>
            <Link
              href="/terms"
              className="font-body text-xs text-pencil hover:text-ink-dark transition-colors duration-300"
            >
              Публичная оферта
            </Link>
          </div>
          <div className="font-body text-xs text-pencil/80 flex items-center gap-1.5 select-none">
            Нарисовано с любовью{" "}
            <motion.span
              className="inline-block text-coral"
              animate={{ scale: [1, 1.25, 1] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              💙
            </motion.span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, icon }: { href: string; icon: string }) => {
  const icons: Record<string, React.ReactElement> = {
    telegram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-2.04 1.29-5.73 3.79-.54.37-1.03.55-1.47.54-.48-.01-1.41-.27-2.09-.49-.84-.27-1.5-.42-1.44-.88.03-.24.36-.49.99-.75 3.88-1.69 6.46-2.8 7.74-3.35 3.68-1.56 4.44-1.83 4.94-1.84.11 0 .35.03.5.16.13.1.17.24.18.35.01.08 0 .25-.01.32z" />
      </svg>
    ),
    vk: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.162 18.994c.609 0 .858-.406.858-.826 0-.733-.031-1.322-.031-1.877 0-.939.447-1.402.927-1.402.384 0 .737.222 1.05.688.369.548.818 1.583 1.265 2.426.33.623.826.991 1.27.991h2.17c.131 0 .236-.104.236-.233 0-.174-.047-.344-.136-.487-.129-.207-.585-.933-1.287-2.04-.335-.523-.733-1.144-.733-1.617 0-.422.312-.733.674-1.097 1.238-1.246 2.503-2.52 2.503-3.663 0-.703-.343-1.024-.915-1.024h-2.107c-.124 0-.224.1-.224.224 0 .359.06.711.178 1.04.144.404.339.78.583 1.12.3.414.611.815.611 1.221 0 .445-.371.741-.741.741-.302 0-.61-.176-.9-.518-.362-.435-.714-1.323-.714-2.205 0-.677.302-1.04.814-1.04h-2.16c-.131 0-.236.105-.236.236 0 .344.022.688.063 1.03.069.59.132 1.18.132 1.77 0 .615-.225.815-.45.815-.316 0-.6-.32-.882-.733-.404-.59-.724-1.503-.724-2.417 0-.464.21-.691.541-.691h-2.02c-.13 0-.236.105-.236.236 0 .54.086 1.074.254 1.583.52 1.573 1.486 2.946 2.766 3.931.338.259.507.52.507.779 0 .406-.356.609-.722.609-.315 0-.623-.114-.833-.314-1.32-1.27-2.316-2.85-2.891-4.591-.063-.19-.24-.316-.439-.316H3.333c-.11 0-.2.09-.2.2 0 .196.023.393.069.585.872 3.647 3.333 9.488 9.96 9.488z" />
      </svg>
    ),
    whatsapp: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.012 2c-5.508 0-9.988 4.48-9.988 9.988 0 1.76.459 3.413 1.264 4.853L2 22l5.307-1.392c1.387.755 2.965 1.187 4.64 1.187 5.507 0 9.987-4.479 9.987-9.988 0-5.508-4.48-9.988-9.988-9.988zm5.292 13.52c-.225.63-.872 1.157-1.42 1.248-.547.091-1.257.165-3.51-.776-2.253-.94-3.713-3.233-3.826-3.382-.113-.15-.92-1.226-.92-2.337 0-1.11.584-1.654.811-1.88.225-.226.49-.283.653-.283.164 0 .327.001.469.008.148.007.348-.056.545.422.197.477.675 1.64.731 1.753.057.113.094.245.019.396-.075.15-.113.245-.226.377-.113.132-.238.293-.34.396-.113.113-.23.237-.098.463.132.226.586.963 1.262 1.564.873.777 1.611 1.018 1.838 1.13.226.113.358.094.49-.057.132-.15.565-.66.716-.886.15-.226.301-.188.508-.113.207.075 1.317.62 1.543.733.226.113.376.17.432.263.056.094.056.546-.169 1.176z" />
      </svg>
    ),
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-xl border border-line-blue hover:border-coral bg-paper/40 hover:bg-coral/10 text-pencil hover:text-coral transition-all duration-300 flex items-center justify-center hover:-translate-y-1 hover:rotate-3 shadow-sm hover:shadow"
    >
      {icons[icon] || null}
    </a>
  );
};

