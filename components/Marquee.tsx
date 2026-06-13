"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const MARQUEE_ITEMS = [
  "Рост",
  "Трафик",
  "Клиенты",
  "Performance",
  "Design",
  "Analytics",
  "traffic63",
  "Развитие",
  "Конверсия",
  "Креативность",
];

export const Marquee = ({ 
  speed = 200, 
  startSpeed = 8,
  decelerationDuration = 6
}: { 
  speed?: number; 
  startSpeed?: number; 
  decelerationDuration?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Motion value starting at a fast speed
  const speedVal = useMotionValue(startSpeed);
  // Transform numerical duration to a CSS duration string (e.g. "8s")
  const speedStyle = useTransform(speedVal, (v) => `${v}s`);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset to very fast speed when it enters the viewport
          speedVal.set(startSpeed);
          // Smoothly decelerate to the target speed over decelerationDuration seconds
          animate(speedVal, speed, {
            duration: decelerationDuration,
            ease: "easeOut",
          });
        }
      },
      {
        threshold: 0.05, // Trigger as soon as the top edge of the marquee enters the viewport
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [speedVal, speed, startSpeed, decelerationDuration]);

  return (
    <motion.section
      ref={containerRef}
      className="marquee-section relative w-full overflow-hidden bg-paper border-y border-line-blue/60 py-8 sm:py-10 lg:py-12 select-none"
      style={{ "--marquee-duration": speedStyle } as any}
    >
      <div className="flex w-max animate-marquee-slow whitespace-nowrap">
        
        {/* Render duplicate blocks to cover the infinite screen loop width */}
        {[...Array(3)].map((_, blockIdx) => (
          <div key={blockIdx} className="flex shrink-0 items-center gap-6 sm:gap-8 lg:gap-12 px-3 sm:px-4">
            {MARQUEE_ITEMS.map((item, itemIdx) => (
              <React.Fragment key={itemIdx}>
                {/* Text Item */}
                <span className="font-heading font-black text-5xl sm:text-7xl lg:text-[85px] leading-none text-ink-dark tracking-tighter uppercase">
                  {item}
                </span>
                {/* Slanted Slash Divider */}
                <span 
                  className="font-serif italic font-normal text-coral text-4xl sm:text-6xl lg:text-7xl select-none"
                  aria-hidden="true"
                >
                  /
                </span>
              </React.Fragment>
            ))}
          </div>
        ))}

      </div>
    </motion.section>
  );
};

export default Marquee;
