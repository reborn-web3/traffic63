"use client";

import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const Reveal = ({ children, delay = 0, className = "" }: RevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before it enters the viewport
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    const safetyTimer = setTimeout(() => {
      if (elementRef.current && !elementRef.current.classList.contains("visible")) {
        elementRef.current.classList.add("visible");
      }
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(safetyTimer);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};
