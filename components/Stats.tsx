"use client";

import { useEffect, useState, useRef } from "react";
import { stats as statsData } from "@/lib/data";

interface StatItemProps {
  target: number;
  label: string;
  suffix: string;
  delay?: number;
}

const StatItem = ({ target, label, suffix, delay = 0 }: StatItemProps) => {
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
        threshold: 0.2,
        rootMargin: "0px 0px -30px 0px",
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

    const duration = 1800;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
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

  return (
    <div
      ref={elementRef}
      className={`stat-item px-4 text-center border-slate-100/80 border-r even:border-r-0 md:even:border-r md:last:border-r-0 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <span className="font-heading font-semibold text-5xl md:text-6xl tracking-tight text-ink-dark leading-none block select-none">
        {count}
        {count === target && suffix && (
          <span className="font-serif italic font-normal text-coral text-4xl md:text-5xl ml-1 align-baseline">
            {suffix}
          </span>
        )}
      </span>
      <span className="font-heading text-[10px] font-extrabold tracking-widest text-pencil uppercase block mt-4 select-none">
        {label}
      </span>
    </div>
  );
};

export const Stats = () => {
  return (
    <section className="stats-section bg-white border-y border-slate-100/60 py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-5 md:px-10 relative z-10">
        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0">
          {statsData.map((stat, index) => (
            <StatItem
              key={index}
              target={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
