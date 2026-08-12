"use client";

import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useReveal } from "@/hooks/useReveal";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { CursorTrail } from "@/components/CursorTrail";
import { motion } from "framer-motion";
import Link from "next/link";
import { TypewriterWord } from "@/components/TypewriterWord";

export default function SellersPage() {
  useSmoothScroll();
  useReveal();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }
    },
  };

  const benefits = [
    {
      title: "0% комиссий",
      description: "Все деньги с продаж остаются у вас. Никаких поборов за логистику, хранение и участие в принудительных акциях.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: "Своя база клиентов",
      description: "Собирайте контакты покупателей. Выстраивайте LTV, делайте email и SMS рассылки, возвращайте клиентов дешевле.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: "Полная независимость",
      description: "Никто не заблокирует вашу карточку товара без объяснения причин. Вы сами устанавливаете правила игры.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      )
    }
  ];

  const services = [
    {
      title: "Next.js / React Магазины",
      desc: "Молниеносная скорость, идеальное SEO и полная кастомизация. Лучший выбор для средних и крупных проектов.",
      price: "от 350 000 ₽"
    },
    {
      title: "Shopify / WooCommerce",
      desc: "Быстрый запуск, удобная админка и тысячи готовых модулей. Идеально для старта независимых продаж.",
      price: "от 150 000 ₽"
    },
    {
      title: "Интеграции (МойСклад, 1С)",
      desc: "Свяжем магазин с вашими системами учета. Автоматизация остатков, цен и статусов заказов.",
      price: "от 50 000 ₽"
    }
  ];

  return (
    <div className="relative min-h-screen bg-paper overflow-x-clip">
      <CursorTrail />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-blue-50/50" />
          <div className="container mx-auto px-5 md:px-10 relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 text-blue-700 font-medium text-sm">
                Специальное предложение для селлеров
              </motion.div>
              <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Выросли на маркетплейсах? <br />
                Пора открывать свой <TypewriterWord words={["интернет-магазин", "канал продаж", "независимый бизнес"]} className="text-blue-600" />
              </motion.h1>
              <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Избавьтесь от диктата площадок, высоких комиссий и начните собирать собственную базу лояльных клиентов.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contacts" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 flex items-center gap-2">
                  Обсудить проект
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-5 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Почему вам нужен свой магазин</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Маркетплейс дает трафик, но забирает вашу маржу и клиентов. Свой магазин — это актив, который работает на вас.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-5 md:px-10">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Что мы предлагаем</h2>
              <p className="text-xl text-gray-600">Разрабатываем интернет-магазины любой сложности. От быстрых решений для старта до enterprise-платформ на Next.js.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-8 flex-grow">{service.desc}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <span className="text-gray-500 font-medium font-body">Стоимость</span>
                    <span className="font-heading font-medium text-ink-dark shrink-0 whitespace-nowrap flex items-baseline gap-1.5">
                      {service.price.includes('от') && service.price.includes('₽') && /\d/.test(service.price) ? (
                        <>
                          <span className="text-xs md:text-sm text-slate-400 font-medium font-body">от</span>
                          <span className="text-base md:text-lg font-semibold tracking-tight">{service.price.replace(/[^\d\s]/g, '').trim()}</span>
                          <span className="text-sm text-slate-400 font-medium font-body">₽</span>
                        </>
                      ) : (
                        <span className="text-base md:text-lg font-semibold text-blue-600">{service.price}</span>
                      )}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <CTASection />
      <Footer />
    </div>
  );
}
