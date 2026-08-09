"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

const MARQUEE_ITEMS = [
  "traffic63",
  "traffic63",
  "traffic63",
  "traffic63",
  "traffic63",
  "traffic63",
  "traffic63",
  "traffic63",
  "traffic63",
  "traffic63",
];

// Helper to wrap the value between min and max
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export const Marquee = ({
  speed = 0.5, // Base speed of scrolling (percent of width per second)
}: {
  speed?: number;
  startSpeed?: number; // Kept for backwards compatibility, not used
  decelerationDuration?: number; // Kept for backwards compatibility, not used
}) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  // Map scroll velocity to a speed multiplier (e.g. velocity of 1000px/s adds 1.5% per second speed)
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 1.5], {
    clamp: false,
  });

  /**
   * We render 4 duplicate blocks of the marquee.
   * To achieve a seamless infinite scroll, we wrap the translation percentage between -25% and 0%.
   * Since there are 4 blocks, each block is exactly 25% of the total container width.
   * Wrapping between -25 and 0 means it loops perfectly and invisibly.
   */
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((time, delta) => {
    const deltaSeconds = delta / 1000;

    // Determine movement direction based on scroll velocity (reverses direction on scroll up)
    const currentVelocity = velocityFactor.get();
    if (currentVelocity < 0) {
      directionFactor.current = -1;
    } else if (currentVelocity > 0) {
      directionFactor.current = 1;
    }

    // Base speed translates left (negative translation)
    let moveBy = -speed * deltaSeconds;

    if (directionFactor.current === 1) {
      // Scrolling down (page moves up): speed up moving left (negative baseX change)
      moveBy -= Math.abs(currentVelocity) * deltaSeconds;
    } else if (directionFactor.current === -1) {
      // Scrolling up (page moves down): move right (positive baseX change)
      moveBy += Math.abs(currentVelocity) * deltaSeconds;
    }

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <section className="marquee-section relative w-full overflow-hidden bg-paper border-y border-line-blue/60 py-8 sm:py-10 lg:py-12 select-none">
      <motion.div className="flex w-max whitespace-nowrap" style={{ x }}>
        {/* Render 4 duplicate blocks to guarantee seamless wrapping under any viewport size */}
        {[...Array(4)].map((_, blockIdx) => (
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
      </motion.div>
    </section>
  );
};

export default Marquee;
