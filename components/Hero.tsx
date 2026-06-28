"use client";

import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-paper pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden"
    >
      <div className="container mx-auto px-5 md:px-10 relative z-10 shrink-0 w-full">
        {/* Typographic Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[1100px] text-left mb-12 sm:mb-16"
        >
          <h1 className="font-heading text-[44px] leading-[0.9] sm:text-7xl lg:text-[110px] font-black sm:leading-[0.95] text-ink-dark tracking-tighter uppercase select-none">
            <span className="md:whitespace-nowrap">Поможем бизнесу</span> <br />
            <span className="font-serif italic text-coral lowercase font-normal tracking-normal">вырасти.</span>
          </h1>
        </motion.div>

        {/* Description Row (border-t separated, single column) */}
        <div className="border-t border-line-blue pt-8 sm:pt-10 pb-12 sm:pb-16 text-left">
          <p className="font-body text-[17px] md:text-xl lg:text-[22px] text-pencil leading-[1.6] sm:leading-relaxed font-medium max-w-[720px]">
            Помогаем компаниям расти с помощью комплексного performance-маркетинга, премиального UX/UI дизайна и надежной веб-разработки.
          </p>
        </div>

        {/* Minimalist Stanford Credibility Quote Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="border-t border-line-blue pt-10 sm:pt-12 text-left"
        >
          <blockquote className="font-serif italic text-[26px] leading-[1.1] sm:text-4xl lg:text-[44px] text-ink-dark sm:leading-tight tracking-tight mb-5 sm:mb-6 max-w-4xl select-none">
            «75% пользователей судят о надежности компании исключительно по дизайну ее сайта»
          </blockquote>
          <span className="font-heading text-[10px] font-extrabold tracking-widest text-coral uppercase block select-none">
            ✦ Stanford Web Credibility Project
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
