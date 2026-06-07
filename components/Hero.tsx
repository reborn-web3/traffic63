"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effects for scroll
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  // Mouse tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1000], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1800], [-5, 5]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const titleWords = "Создаем цифровые экосистемы с нуля".split(" ");

  return (
    <section 
      id="hero" 
      className="hero relative min-h-screen flex items-center justify-center pt-[100px] pb-20 overflow-hidden bg-paper"
      onMouseMove={handleMouseMove}
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(var(--line-blue-light) 1px, transparent 1px)', backgroundSize: '100% 32px' }} />
      </div>

      <motion.div 
        className="container mx-auto px-5 md:px-10 relative z-10"
        style={{ opacity, scale, y: y1, perspective: 1000 }}
      >
        <motion.div 
          className="max-w-[900px] mx-auto text-center"
          style={{ rotateX, rotateY }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white border-2 border-ink-blue px-6 py-2 rounded-full font-handwritten text-xl text-ink-blue mb-8 shadow-[4px_4px_0_var(--line-blue)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-default"
          >
            ✏️ Digital-агентство полного цикла
          </motion.div>

          {/* Headline with kinetic typography */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-ink-dark mb-8 tracking-tight">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? -2 : 2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ 
                  delay: 0.3 + i * 0.1,
                  type: "spring",
                  stiffness: 100 
                }}
                className={`inline-block mx-[0.2em] ${word === "экосистемы" ? "text-coral relative" : ""}`}
              >
                {word}
                {word === "экосистемы" && (
                  <motion.svg 
                    className="absolute -bottom-2 left-0 w-full h-4 -z-10"
                    viewBox="0 0 200 20"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  >
                    <motion.path 
                      d="M2 15.5C30 15.5 60 4 198 4" 
                      stroke="var(--yellow)" 
                      strokeWidth="12" 
                      strokeLinecap="round" 
                      fill="none"
                    />
                  </motion.svg>
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="font-body text-xl md:text-2xl text-pencil mb-12 max-w-[700px] mx-auto leading-relaxed"
          >
            Мы не просто настраиваем рекламу. Мы берем на себя всё: от <span className="text-ink-blue font-bold">UX/UI дизайна</span> и разработки до брендинга и комплексного маркетинга.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="flex flex-wrap gap-6 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/#contact"
                className="btn-primary group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  Обсудить проект
                </span>
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/services"
                className="btn-secondary"
              >
                Наши услуги →
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Doodles with advanced parallax */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[
          { src: "/images/doodle_rocket.png", top: "15%", right: "12%", speed: 0.05, rotate: 15 },
          { src: "/images/doodle_laptop.png", bottom: "20%", left: "10%", speed: -0.04, rotate: -10 },
          { src: "/images/doodle_idea.png", top: "20%", left: "15%", speed: 0.03, rotate: -5 },
          { src: "/images/doodle_target.png", bottom: "15%", right: "8%", speed: -0.06, rotate: 20 },
          { src: "/images/doodle_growth.png", top: "45%", right: "5%", speed: 0.02, rotate: 0 },
        ].map((doodle, i) => (
          <DoodleItem key={i} {...doodle} mouseX={mouseX} mouseY={mouseY} />
        ))}
      </div>

      {/* Interactive cursor follower decoration */}
      <motion.div 
        className="absolute w-64 h-64 border-2 border-dashed border-line-blue/30 rounded-full pointer-events-none -z-10"
        style={{ 
          x: useSpring(useTransform(mouseX, (v: any) => v - 128), springConfig),
          y: useSpring(useTransform(mouseY, (v: any) => v - 128), springConfig)
        }}
      />
    </section>
  );
};

const DoodleItem = ({ src, top, left, right, bottom, speed, rotate, mouseX, mouseY }: any) => {
  const x = useSpring(useTransform(mouseX, (v: any) => (v - 900) * speed), { damping: 30, stiffness: 100 });
  const y = useSpring(useTransform(mouseY, (v: any) => (v - 450) * speed), { damping: 30, stiffness: 100 });

  return (
    <motion.div
      style={{ top, left, right, bottom, x, y, rotate }}
      className="absolute w-24 md:w-32 lg:w-40 opacity-70"
    >
      <Image src={src} alt="" width={160} height={160} priority />
    </motion.div>
  );
};

export default Hero;



