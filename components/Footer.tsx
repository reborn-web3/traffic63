"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { navigationLinks } from "@/lib/data";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-paper text-ink-dark py-16 md:py-24 overflow-hidden transition-colors duration-300">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-60 dark:opacity-30">
        {/* Curved dotted lines */}
        <svg
          className="absolute inset-0 w-full h-full text-pencil/20 dark:text-white/10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M -50,180 C 120,130 180,240 280,180 C 380,120 480,260 580,200 C 680,140 780,80 880,160 C 980,240 1080,320 1180,240 C 1280,160 1380,140 1550,220"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeDasharray="6 8"
          />
          <path
            d="M -50,280 C 150,240 220,340 320,280 C 420,220 520,360 620,300 C 720,240 820,180 920,260 C 1020,340 1120,420 1220,340 C 1320,260 1420,240 1550,320"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeDasharray="6 8"
            opacity="0.5"
          />
        </svg>

        {/* Floating Organic Blobs */}
        <motion.div
          className="absolute left-[3%] top-[15%] w-24 h-24 text-pencil/10 dark:text-white/5"
          animate={{ rotate: 360, y: [0, -10, 0] }}
          transition={{
            rotate: { repeat: Infinity, duration: 50, ease: "linear" },
            y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
          }}
          whileHover={{ scale: 1.1, color: "var(--coral)", opacity: 0.8 }}
        >
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-current stroke-1">
            <path d="M50 15 C55 25 65 25 75 25 C85 25 85 35 85 50 C85 65 85 75 75 75 C65 75 55 75 50 85 C45 75 35 75 25 75 C15 75 15 65 15 50 C15 35 15 25 25 25 C35 25 45 25 50 15 Z" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute left-[26%] bottom-[15%] w-32 h-32 text-pencil/10 dark:text-white/5 hidden md:block"
          animate={{ rotate: -360, y: [0, 15, 0] }}
          transition={{
            rotate: { repeat: Infinity, duration: 60, ease: "linear" },
            y: { repeat: Infinity, duration: 8, ease: "easeInOut" }
          }}
          whileHover={{ scale: 1.1, color: "var(--coral)", opacity: 0.8 }}
        >
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-current stroke-1">
            <path d="M50 15 C65 20 75 35 70 55 C65 75 45 75 35 75 C25 75 15 60 20 40 C25 20 35 10 50 15 Z" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute left-[48%] top-[10%] w-20 h-20 text-pencil/10 dark:text-white/5 hidden lg:block"
          animate={{ rotate: 360, x: [0, 8, 0] }}
          transition={{
            rotate: { repeat: Infinity, duration: 45, ease: "linear" },
            x: { repeat: Infinity, duration: 5, ease: "easeInOut" }
          }}
          whileHover={{ scale: 1.1, color: "var(--coral)", opacity: 0.8 }}
        >
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-current stroke-1">
            <path d="M50 15 C75 15 85 25 85 50 C85 75 75 85 50 85 C25 85 15 75 15 50 C15 25 25 15 50 15 Z" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute right-[22%] bottom-[20%] w-28 h-28 text-pencil/10 dark:text-white/5 hidden md:block"
          animate={{ rotate: -360, y: [0, -12, 0] }}
          transition={{
            rotate: { repeat: Infinity, duration: 55, ease: "linear" },
            y: { repeat: Infinity, duration: 7, ease: "easeInOut" }
          }}
          whileHover={{ scale: 1.1, color: "var(--coral)", opacity: 0.8 }}
        >
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-current stroke-1">
            <path d="M50 15 C55 25 65 25 75 25 C85 25 85 35 85 50 C85 65 85 75 75 75 C65 75 55 75 50 85 C45 75 35 75 25 75 C15 75 15 65 15 50 C15 35 15 25 25 25 C35 25 45 25 50 15 Z" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute right-[3%] top-[20%] w-24 h-24 text-pencil/10 dark:text-white/5"
          animate={{ rotate: 360, y: [0, 10, 0] }}
          transition={{
            rotate: { repeat: Infinity, duration: 40, ease: "linear" },
            y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
          }}
          whileHover={{ scale: 1.1, color: "var(--coral)", opacity: 0.8 }}
        >
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-current stroke-1">
            <path d="M50 15 C65 20 75 35 70 55 C65 75 45 75 35 75 C25 75 15 60 20 40 C25 20 35 10 50 15 Z" />
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-5 md:px-10 relative z-10">
        {/* Logo centered at the top */}
        <div className="flex flex-col items-center mb-12 md:mb-16 select-none">
          <Link
            href="/#hero"
            className="flex items-center text-3xl md:text-4xl font-black text-ink-dark transition-opacity hover:opacity-85"
          >
            <svg className="inline-block h-[1.15em] w-auto align-middle" viewBox="0 0 130 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="24" fontFamily="Georgia, ui-serif, serif" fontWeight="900" fontStyle="italic" fontSize="28px" fill="currentColor">
                traffic
              </text>
              <text x="92" y="24" fontFamily="Georgia, ui-serif, serif" fontWeight="900" fontStyle="italic" fontSize="28px" fill="var(--coral)">
                6
              </text>
              <text x="110" y="19.5" fontFamily="Georgia, ui-serif, serif" fontWeight="900" fontStyle="italic" fontSize="28px" fill="var(--coral)">
                3
              </text>
            </svg>
          </Link>
        </div>

        {/* 3 Columns centered without header text */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto w-full">
          {/* Column 1: Услуги */}
          <div className="flex flex-col items-center text-center">
            <ul className="flex flex-col items-center gap-4">
              {[
                { label: "Создание сайтов", href: "/services/web-development" },
                { label: "Настройка рекламы", href: "/services/advertising" },
                { label: "Умные чат-боты", href: "/services/chatbots" },
                { label: "Ведение соцсетей", href: "/services/smm" },
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

          {/* Column 2: Компания */}
          <div className="flex flex-col items-center text-center">
            <ul className="flex flex-col items-center gap-4">
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

          {/* Column 3: Контакты & Документы */}
          <div className="flex flex-col items-center text-center">
            <div className="flex flex-col items-center gap-4 w-full">
              <a
                href="tel:+79198037232"
                className="font-heading text-lg font-bold text-ink-dark hover:text-coral transition-colors duration-300"
              >
                +7 (919) 803-72-32
              </a>
              <a
                href="mailto:traffic63.agency@mail.ru"
                className="font-body text-sm text-pencil hover:text-ink-dark transition-colors duration-300 border-b border-dashed border-pencil/40 hover:border-ink-dark pb-0.5"
              >
                traffic63.agency@mail.ru
              </a>
              <p className="font-body text-xs text-pencil leading-relaxed select-none">
                Работаем онлайн по всей России
              </p>

              <div className="flex flex-col items-center gap-2 mt-2 pt-4 border-t border-line-blue/60 w-full">
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
            </div>
          </div>
        </div>

        {/* Social Icons Centered */}
        <div className="flex justify-center gap-6 mt-12 md:mt-16">
          <SocialIcon href="https://t.me/manager_traffic63" icon="telegram" />
          <SocialIcon href="https://vk.ru/traffic63.agency" icon="vk" />
          <SocialIcon href="https://www.instagram.com/traffic63.agency/" icon="instagram" />
        </div>

        {/* Bottom row centered */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-line-blue/40 max-w-4xl mx-auto flex flex-col items-center gap-3 select-none text-center">
          <div className="font-body text-xs text-pencil/80">
            © {currentYear} traffic63 — digital-агентство.
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
        <path d="M15.684 2H8.316C3.992 2 2 3.992 2 8.316v7.368C2 20.008 3.992 22 8.316 22h7.368C20.008 22 22 20.008 22 15.684V8.316C22 3.992 20.008 2 15.684 2zm3.692 14.422h-1.344c-.563 0-.737-.446-1.751-1.46-.88-.865-1.269-.982-1.492-.982-.31 0-.398.087-.398.523v1.321c0 .36-.117.598-1.066.598-1.573 0-3.32-.953-4.551-2.735-1.849-2.585-2.353-4.536-2.353-4.935 0-.222.087-.428.517-.428h1.345c.387 0 .532.176.68.583.746 2.155 1.996 4.048 2.51 4.048.193 0 .281-.088.281-.584V9.825c-.058-1.085-.633-1.18-.633-1.567 0-.184.155-.371.408-.371h2.115c.291 0 .398.156.398.515v2.766c0 .301.136.408.223.408.193 0 .358-.107.717-.466 1.116-1.252 1.908-3.191 1.908-3.191.1-.214.272-.428.66-.428h1.345c.408 0 .504.214.408.515-.165.737-1.726 3.221-1.774 3.299-.145.242-.204.35 0 .62.145.194.621.611 1.038 1.087.756.863 1.339 1.581 1.494 2.076.155.495-.078.747-.504.747z"/>
      </svg>
    ),
    whatsapp: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.012 2c-5.508 0-9.988 4.48-9.988 9.988 0 1.76.459 3.413 1.264 4.853L2 22l5.307-1.392c1.387.755 2.965 1.187 4.64 1.187 5.507 0 9.987-4.479 9.987-9.988 0-5.508-4.48-9.988-9.988-9.988zm5.292 13.52c-.225.63-.872 1.157-1.42 1.248-.547.091-1.257.165-3.51-.776-2.253-.94-3.713-3.233-3.826-3.382-.113-.15-.92-1.226-.92-2.337 0-1.11.584-1.654.811-1.88.225-.226.49-.283.653-.283.164 0 .327.001.469.008.148.007.348-.056.545.422.197.477.675 1.64.731 1.753.057.113.094.245.019.396-.075.15-.113.245-.226.377-.113.132-.238.293-.34.396-.113.113-.23.237-.098.463.132.226.586.963 1.262 1.564.873.777 1.611 1.018 1.838 1.13.226.113.358.094.49-.057.132-.15.565-.66.716-.886.15-.226.301-.188.508-.113.207.075 1.317.62 1.543.733.226.113.376.17.432.263.056.094.056.546-.169 1.176z" />
      </svg>
    ),
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 text-pencil hover:text-ink-dark transition-colors duration-300 flex items-center justify-center hover:-translate-y-0.5"
    >
      {icons[icon] || null}
    </a>
  );
};
