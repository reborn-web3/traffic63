"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { CursorTrail } from "@/components/CursorTrail";

export default function RknPage() {
  return (
    <div className="relative min-h-screen bg-paper overflow-x-clip pt-24 md:pt-32">
      <CursorTrail />
      <Header />
      
      <main className="container mx-auto px-5 md:px-10 py-16 md:py-24 max-w-4xl flex flex-col items-center justify-center text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-ink-dark mb-6 tracking-tight">
          Заявка в <span className="text-coral">РКН</span>
        </h1>
        
        <div className="font-body text-base md:text-lg text-pencil leading-relaxed mb-12 max-w-2xl text-center flex flex-col gap-4">
          <p>
            Согласно закону № 152-ФЗ «О персональных данных», любой сайт или лендинг, собирающий личную информацию пользователей (имя, номер телефона, email), обязан числиться в реестре Роскомнадзора.
          </p>
          <p className="font-semibold text-ink-dark text-lg md:text-xl my-2">
            Заказывая разработку сайта в нашем агентстве, вы получаете полное юридическое сопровождение этого вопроса.
          </p>
          <p>
            Мы не только создадим современный и конверсионный проект, но и подготовим все необходимые документы для легального сбора данных, взяв на себя регистрацию в РКН.
          </p>
        </div>

        <div className="w-full max-w-2xl bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-line-blue/30 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-coral/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-transform duration-700 group-hover:scale-150"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-coral/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 transition-transform duration-700 group-hover:scale-150"></div>
          
          <div className="relative z-10">
            <h2 className="font-heading text-2xl font-bold text-ink-dark mb-8 text-center">
              Обсудить проект
            </h2>
            <ContactForm defaultMessage="Здравствуйте! Хочу обсудить разработку сайта/лендинга." />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
