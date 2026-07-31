"use client";

import React from "react";
import { motion } from "framer-motion";

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
            className="group relative bg-paper-dark/60 backdrop-blur-xl border border-line-blue/70 hover:border-coral/40 rounded-[32px] p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col justify-between h-full"
          >
            <div>
              <div className="font-heading text-4xl sm:text-5xl font-light text-coral mb-6 tracking-tight">
                01
              </div>

              <h3 className="font-heading text-2xl sm:text-[28px] font-semibold text-ink-dark tracking-tight mb-4">
                Сайт
              </h3>

              <p className="font-body text-sm sm:text-base text-pencil leading-relaxed font-normal">
                Витрина бизнеса. Понятно рассказывает о продукте и вызывает доверие с первых секунд.
              </p>
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
            className="group relative bg-paper-dark/60 backdrop-blur-xl border border-line-blue/70 hover:border-coral/40 rounded-[32px] p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col justify-between h-full"
          >
            <div>
              <div className="font-heading text-4xl sm:text-5xl font-light text-coral mb-6 tracking-tight">
                02
              </div>

              <h3 className="font-heading text-2xl sm:text-[28px] font-semibold text-ink-dark tracking-tight mb-4">
                Реклама
              </h3>

              <p className="font-body text-sm sm:text-base text-pencil leading-relaxed font-normal">
                Поток новых клиентов. Привлекает аудиторию, которая прямо сейчас ищет продукт или услугу.
              </p>
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
            className="group relative bg-paper-dark/60 backdrop-blur-xl border border-line-blue/70 hover:border-coral/40 rounded-[32px] p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col justify-between h-full"
          >
            <div>
              <div className="font-heading text-4xl sm:text-5xl font-light text-coral mb-6 tracking-tight">
                03
              </div>

              <h3 className="font-heading text-2xl sm:text-[28px] font-semibold text-ink-dark tracking-tight mb-4">
                CRM
              </h3>

              <p className="font-body text-sm sm:text-base text-pencil leading-relaxed font-normal">
                Порядок в продажах. Сохраняет каждое обращение и помогает контролировать статус всех заказов.
              </p>
            </div>
          </motion.div>

        </div>
        </div>

      </div>
    </section>
  );
};

export default FormulaBanner;
