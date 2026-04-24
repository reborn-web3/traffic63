"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  const doodlesRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (!doodlesRef.current) return;
      const doodles = doodlesRef.current.querySelectorAll(".hero-doodle");
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      doodles.forEach((doodle, index) => {
        const speed = (index + 1) * 12;
        const rotateSpeed = (index + 1) * 2;
        (doodle as HTMLElement).style.transform = `translate(${x * speed}px, ${y * speed}px) rotate(${x * rotateSpeed}deg)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="hero" className="hero relative min-h-screen flex items-center pt-[120px] pb-20 overflow-hidden">
      <div className="container mx-auto px-5 md:px-10 relative z-10">
        <div className="hero-content max-w-[680px]">
          <div className="hero-badge inline-flex items-center gap-2 bg-line-blue/25 border-2 border-dashed border-line-blue px-5 py-2 rounded-full font-handwritten text-xl text-ink-blue mb-6 animate-float">
            ✏️ performance-агентство нового поколения
          </div>

          <h1 className="font-heading text-4xl md:text-6xl lg:text-[3.8rem] font-extrabold leading-[1.15] text-ink-dark mb-6">
            Превращаем <span className="relative inline-block text-coral">
              рекламу
              <span className="absolute bottom-1 -left-1 -right-1 h-3 bg-yellow-light -z-10 -rotate-1 rounded-sm" />
            </span>
            <br />
            в <span className="relative inline-block">
              реальные продажи
              <span
                className="absolute -bottom-1 left-0 right-0 h-2 bg-repeat-x pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 8'%3E%3Cpath d='M0,4 Q50,0 100,4 T200,4' fill='none' stroke='%23e8846b' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E")`,
                  backgroundSize: '200px 8px'
                }}
              />
            </span>
          </h1>

          <p className="font-body text-lg md:text-xl text-pencil mb-10 max-w-[540px] leading-relaxed">
            Мы не просто настраиваем рекламу — мы строим системы привлечения клиентов,
            которые работают как часы. Данные, креатив и стратегия в одном флаконе.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="btn-primary inline-flex items-center gap-2 bg-coral text-white font-body text-base font-bold px-9 py-4 rounded-full shadow-xl shadow-coral/30 transition-all hover:bg-coral-dark hover:-translate-y-1 hover:shadow-2xl hover:shadow-coral/40"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Обсудить проект
            </Link>
            <Link
              href="/#cases"
              className="btn-secondary inline-flex items-center gap-2 bg-transparent text-ink-blue font-body text-base font-bold px-9 py-4 rounded-full border-2 border-line-blue transition-all hover:border-ink-blue hover:bg-ink-blue/5 hover:-translate-y-1"
            >
              Посмотреть кейсы →
            </Link>
          </div>
        </div>
      </div>

      {/* Floating doodles */}
      <div ref={doodlesRef} className="hero-doodles absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        {/* Rocket */}
        <div className="hero-doodle absolute top-[15%] right-[8%] w-[120px] md:w-[220px] transition-transform duration-300 ease-out">
          <div className="animate-float opacity-70">
            <Image src="/images/doodle_rocket.png" alt="" width={220} height={220} priority />
          </div>
        </div>
        
        {/* Growth */}
        <div className="hero-doodle absolute bottom-[15%] right-[12%] w-[100px] md:w-[180px] transition-transform duration-300 ease-out">
          <div className="animate-float-delayed opacity-70">
            <Image src="/images/doodle_growth.png" alt="" width={180} height={180} priority />
          </div>
        </div>
        
        {/* Idea */}
        <div className="hero-doodle absolute top-[35%] right-[32%] w-[80px] md:w-[120px] transition-transform duration-300 ease-out">
          <div className="animate-float-slow opacity-40">
            <Image src="/images/doodle_idea.png" alt="" width={120} height={120} priority />
          </div>
        </div>

        {/* Laptop - NEW */}
        <div className="hero-doodle absolute top-[60%] right-[38%] w-[90px] md:w-[140px] transition-transform duration-300 ease-out hidden lg:block">
          <div className="animate-float opacity-50">
            <Image src="/images/doodle_laptop.png" alt="" width={140} height={140} priority />
          </div>
        </div>

        {/* Target - NEW */}
        <div className="hero-doodle absolute top-[10%] right-[40%] w-[70px] md:w-[110px] transition-transform duration-300 ease-out hidden md:block">
          <div className="animate-float-delayed opacity-30">
            <Image src="/images/doodle_target.png" alt="" width={110} height={110} priority />
          </div>
        </div>

        {/* Megaphone - NEW */}
        <div className="hero-doodle absolute bottom-[5%] right-[35%] w-[80px] md:w-[130px] transition-transform duration-300 ease-out hidden lg:block">
          <div className="animate-float-slow opacity-40">
            <Image src="/images/doodle_megaphone.png" alt="" width={130} height={130} priority />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
