"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  tag: string;
  delay: number;
}

export const ServiceCard = ({
  imageUrl,
  imageAlt,
  title,
  description,
  tag,
  delay,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative z-10 bg-white/90 backdrop-blur-xl border border-line-blue/50 rounded-[24px] p-8 lg:p-10 shadow-[0_4px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_48px_rgba(37,99,235,0.12)] hover:border-coral-light/40 transition-all duration-500 overflow-hidden group"
    >
      {/* Мягкий градиент на фоне при наведении (Glassmorphism highlight) */}
      <div className="absolute inset-0 bg-gradient-to-br from-coral-light/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="inline-block mb-6"
        >
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={80}
            height={80}
            className="object-contain"
            loading="lazy"
          />
        </motion.div>
        
        <h3 className="font-heading text-xl font-bold text-ink-dark mb-3">
          {title}
        </h3>
        <p className="text-pencil text-sm md:text-base leading-relaxed mb-6 max-w-sm">
          {description}
        </p>
        
        <div className="flex items-center gap-2">
          <span className="inline-block font-handwritten text-base text-ink-blue bg-line-blue/20 border border-dashed border-line-blue px-4 py-1.5 rounded-full group-hover:bg-coral-light/10 group-hover:border-coral-light/30 transition-colors duration-300">
            {tag}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

