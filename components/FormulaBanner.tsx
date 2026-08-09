"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const FormulaBanner = () => {
  return (
    <section className="bg-paper text-ink-dark py-20 sm:py-28 relative overflow-hidden">
      <div className="container mx-auto px-5 md:px-10 relative z-10">
        
        {/* Apple-style minimalist centered header - clean, confident, zero noise */}
        <div className="max-w-[880px] mx-auto text-center mb-12 sm:mb-16">
          <h2 className="font-heading text-4xl sm:text-6xl md:text-[64px] font-light text-pencil tracking-tight leading-[1.08]">
            <span className="font-black text-ink-dark">90% проблем</span> с привлечением клиентов решает{" "}
            <span className="font-serif italic font-normal text-coral">простая формула.</span>
          </h2>
        </div>

        {/* Real Apple Frosted Glass Cards */}
        <div className="max-w-[1100px] mx-auto relative">
          {/* Ambient glows centered directly behind the blocks */}
          <div className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-coral/15 rounded-full blur-[160px] pointer-events-none -z-0" />
          <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-sky-400/10 rounded-full blur-[160px] pointer-events-none -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 lg:gap-6 items-stretch md:items-center relative z-10">
          
          {/* Card 1: Сайт */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group relative [perspective:1000px] h-full min-h-[260px] lg:min-h-[280px]"
          >
            <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front Face */}
              <div className="h-full w-full bg-paper-dark/60 backdrop-blur-xl border border-line-blue/70 rounded-[32px] p-8 sm:p-10 flex flex-col justify-between overflow-hidden [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                <div className="absolute -bottom-4 -right-4 w-[220px] h-[220px] opacity-95 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6 pointer-events-none">
                  <Image src="/images/cards/website_nobg_v4.webp" alt="Разработка конверсионного сайта для бизнеса" fill sizes="220px" className="object-cover" />
                </div>
                
                <div className="relative z-10 text-left">
                  <h3 className="font-heading text-3xl sm:text-4xl font-bold text-ink-dark tracking-tight">
                    Сайт
                  </h3>
                </div>
              </div>
              
              {/* Back Face */}
              <div className="absolute inset-0 h-full w-full bg-paper-dark backdrop-blur-xl border border-coral/40 rounded-[32px] p-8 sm:p-10 flex flex-col justify-end items-start text-left [transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                <h4 className="font-heading text-xl sm:text-2xl font-bold text-ink-dark mb-2">
                  Витрина бизнеса.
                </h4>
                <p className="font-body text-sm sm:text-base text-pencil leading-relaxed font-normal">
                  Понятно рассказывает о продукте и вызывает доверие с первых секунд.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Aesthetic Formula Connector 1 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center justify-center py-1 md:py-0 select-none"
          >
            <span className="font-heading font-extralight text-3xl sm:text-4xl text-pencil/50 transition-colors duration-300 hover:text-coral">
              +
            </span>
          </motion.div>

          {/* Card 2: Реклама */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative [perspective:1000px] h-full min-h-[260px] lg:min-h-[280px]"
          >
            <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front Face */}
              <div className="h-full w-full bg-paper-dark/60 backdrop-blur-xl border border-line-blue/70 rounded-[32px] p-8 sm:p-10 flex flex-col justify-between overflow-hidden [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                <div className="absolute -bottom-4 -right-4 w-[220px] h-[220px] opacity-95 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6 pointer-events-none">
                  <Image src="/images/cards/ads_nobg_v4.webp" alt="Настройка эффективной рекламы и лидогенерация" fill sizes="220px" className="object-cover" />
                </div>
                
                <div className="relative z-10 text-left">
                  <h3 className="font-heading text-3xl sm:text-4xl font-bold text-ink-dark tracking-tight">
                    Реклама
                  </h3>
                </div>
              </div>

              {/* Back Face */}
              <div className="absolute inset-0 h-full w-full bg-paper-dark backdrop-blur-xl border border-coral/40 rounded-[32px] p-8 sm:p-10 flex flex-col justify-end items-start text-left [transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                <h4 className="font-heading text-xl sm:text-2xl font-bold text-ink-dark mb-2">
                  Поток новых клиентов.
                </h4>
                <p className="font-body text-sm sm:text-base text-pencil leading-relaxed font-normal">
                  Привлекает аудиторию, которая прямо сейчас ищет продукт или услугу.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Aesthetic Formula Connector 2 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex items-center justify-center py-1 md:py-0 select-none"
          >
            <span className="font-heading font-extralight text-3xl sm:text-4xl text-pencil/50 transition-colors duration-300 hover:text-coral">
              +
            </span>
          </motion.div>

          {/* Card 3: CRM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group relative [perspective:1000px] h-full min-h-[260px] lg:min-h-[280px]"
          >
            <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front Face */}
              <div className="h-full w-full bg-paper-dark/60 backdrop-blur-xl border border-line-blue/70 rounded-[32px] p-8 sm:p-10 flex flex-col justify-between overflow-hidden [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                <div className="absolute -bottom-4 -right-4 w-[220px] h-[220px] opacity-95 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6 pointer-events-none">
                  <Image src="/images/cards/crm_nobg_v4.webp" alt="Внедрение CRM системы для автоматизации продаж" fill sizes="220px" className="object-cover" />
                </div>
                
                <div className="relative z-10 text-left">
                  <h3 className="font-heading text-3xl sm:text-4xl font-bold text-ink-dark tracking-tight">
                    CRM
                  </h3>
                </div>
              </div>

              {/* Back Face */}
              <div className="absolute inset-0 h-full w-full bg-paper-dark backdrop-blur-xl border border-coral/40 rounded-[32px] p-8 sm:p-10 flex flex-col justify-end items-start text-left [transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                <h4 className="font-heading text-xl sm:text-2xl font-bold text-ink-dark mb-2">
                  Порядок в продажах.
                </h4>
                <p className="font-body text-sm sm:text-base text-pencil leading-relaxed font-normal">
                  Сохраняет каждое обращение и помогает контролировать статус всех заказов.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
        </div>

      </div>
    </section>
  );
};

export default FormulaBanner;
