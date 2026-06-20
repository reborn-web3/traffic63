"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("traffic63-cookie-consent");
    if (!consent) {
      // Delay showing the banner slightly (1.5 seconds) for a smoother UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("traffic63-cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("traffic63-cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: "spring", damping: 20, stiffness: 150 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:bottom-8 z-[900] w-auto md:w-[380px]"
        >
          <div className="bg-paper/95 backdrop-blur-md border border-line-blue rounded-2xl p-6 shadow-2xl relative overflow-hidden transition-colors duration-300">
            {/* Descriptor text */}
            <p className="font-body text-xs md:text-sm text-pencil leading-relaxed mb-6">
              Мы используем файлы cookie для анализа трафика и улучшения сайта. Подробности о защите ваших данных в нашей{" "}
              <Link
                href="/privacy"
                className="text-ink-blue hover:text-coral transition-colors underline underline-offset-2 font-semibold"
              >
                политике конфиденциальности
              </Link>
              .
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 bg-coral hover:bg-coral-dark text-white font-body text-[10px] font-extrabold uppercase tracking-widest py-3 rounded-xl transition-all hover:shadow-md cursor-pointer select-none text-center"
              >
                Принять
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 border border-line-blue hover:bg-paper-dark hover:border-pencil text-ink-dark font-body text-[10px] font-extrabold uppercase tracking-widest py-3 rounded-xl transition-all cursor-pointer select-none text-center"
              >
                Отклонить
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
