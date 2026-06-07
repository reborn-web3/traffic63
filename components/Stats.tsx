"use client";

import { useEffect, useState, useRef } from "react";

interface StatItemProps {
  target: number;
  label: string;
  delay?: number;
}

const StatItem = ({ target, label, delay = 0 }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    const safetyTimer = setTimeout(() => setIsVisible(true), 2000);

    return () => {
      observer.disconnect();
      clearTimeout(safetyTimer);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic for smooth finish
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(step);
    }, delay * 1000);

    return () => clearTimeout(timeoutId);
  }, [isVisible, target, delay]);

  // Logic from script.js: don't add '+' if label contains '%'
  const suffix = label.includes("%") ? "" : "+";

  return (
    <div
      ref={elementRef}
      className={`stat-item text-center transition-all duration-800 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <span className="stat-number font-handwritten text-5xl md:text-[3.5rem] font-bold text-coral-light block mb-2 leading-none">
        {count}
        {count === target ? suffix : ""}
      </span>
      <span className="stat-label text-white/80 font-medium text-sm md:text-base leading-tight block">
        {label}
      </span>
    </div>
  );
};

import { stats as statsData } from "@/lib/data";

export const Stats = () => {
  const stats = statsData;

  return (
    <section className="stats-section relative bg-gradient-to-br from-ink-blue to-[#2c5a7a] py-20 overflow-hidden">
      {/* Notebook ruled lines background effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px)',
          backgroundSize: '100% 32px'
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-5 md:px-10 relative z-10">
        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              target={stat.value}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
