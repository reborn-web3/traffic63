// traffic63\components\CTASection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";

export const CTASection = () => {
  return (
    <section className="relative bg-paper py-20 md:py-28 overflow-hidden border-t border-line-blue/40" id="contact">
      <div className="container mx-auto px-5 md:px-10 relative z-10 text-center flex flex-col items-center">
        
        {/* Animated Parent Container */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="w-full flex flex-col items-center"
        >
          {/* Title */}
          <h2 className="font-heading text-4xl sm:text-6xl font-extrabold leading-[1.1] text-ink-dark tracking-tight mb-4 flex flex-wrap items-end justify-center gap-x-[0.22em]">
            <span className="inline-block overflow-hidden">
              <motion.span
                variants={{
                  hidden: { y: "100%" },
                  visible: {
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                className="inline-block"
              >
                Готовы
              </motion.span>
            </span>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
              className="font-serif italic text-coral font-normal inline-block will-change-[transform,opacity] pr-[0.15em] -mr-[0.15em]"
            >
              вырасти?
            </motion.span>
          </h2>
          
          {/* Subtitle */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
            className="font-body text-sm md:text-base text-pencil/80 leading-relaxed max-w-[500px] mx-auto mb-12 will-change-[transform,opacity]"
          >
            Оставьте заявку — обсудим ваш проект бесплатно и составим индивидуальный план действий для вашего бизнеса.
          </motion.p>

          {/* Minimalist Contact Form */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
            className="w-full max-w-[480px] mx-auto will-change-[transform,opacity]"
          >
            <ContactForm />
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};
