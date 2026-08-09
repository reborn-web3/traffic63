"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface TypewriterWordProps {
  word?: string;
  words?: string[];
  pauseDuration?: number;
  className?: string;
}

const VOWELS = new Set(["а", "е", "и", "о", "у", "ы", "э", "ю", "я"]);

const getHumanDelay = (index: number, char: string): number => {
  // First keystroke always has a slight initiation hesitation
  if (index === 0) return 210;
  if (char === ".") return 190; // Subtle confident emphasis when typing the period
  const charLower = char.toLowerCase();
  const isVowel = VOWELS.has(charLower);
  // Vowels and vowels-combos roll faster off the fingers (~65ms), consonants (~95ms)
  let base = isVowel ? 65 : 95;
  // Every 3-4 characters add a subtle natural hesitation (hand/row adjustment)
  if (index % 4 === 3) base += 55;
  return base;
};

export const TypewriterWord: React.FC<TypewriterWordProps> = ({
  word = "заметным",
  words,
  pauseDuration = 4500,
  className = "",
}) => {
  const wordList = words && words.length > 0 ? words : [word];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedCount, setDisplayedCount] = useState(0);
  const [phase, setPhase] = useState<"initial_pause" | "typing" | "paused" | "deleting">("initial_pause");
  const shouldReduceMotion = useReducedMotion();

  const currentWord = wordList[wordIndex % wordList.length];

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (phase === "initial_pause") {
      timer = setTimeout(() => {
        setPhase("typing");
      }, 500);
    } else if (phase === "typing") {
      if (displayedCount < currentWord.length) {
        const nextChar = currentWord[displayedCount] || "";
        const baseDelay = getHumanDelay(displayedCount, nextChar);
        // +/- 12ms organic variance
        const variance = Math.floor(Math.random() * 24) - 12;
        const delay = Math.max(40, baseDelay + variance);

        timer = setTimeout(() => {
          setDisplayedCount((prev) => prev + 1);
        }, delay);
      } else {
        setPhase("paused");
      }
    } else if (phase === "paused") {
      timer = setTimeout(() => {
        setPhase("deleting");
      }, pauseDuration);
    } else if (phase === "deleting") {
      if (displayedCount > 0) {
        // Crisp, rapid backspacing speed (~38ms per character)
        timer = setTimeout(() => {
          setDisplayedCount((prev) => prev - 1);
        }, 38);
      } else {
        // Move to the next word in the list after deleting
        timer = setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % wordList.length);
          setPhase("typing");
        }, 450);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedCount, phase, currentWord, pauseDuration, wordList.length]);

  const characters = currentWord.slice(0, displayedCount).split("");

  return (
    <span
      className={`inline-flex items-baseline relative select-none ${className}`}
      aria-label={currentWord}
    >
      <span className="inline-flex items-baseline">
        <AnimatePresence mode="popLayout">
          {characters.map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.18,
                ease: [0.16, 1, 0.3, 1], // Apple luxury ease-out-expo curve
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </AnimatePresence>
      </span>

      {/* Luxury macOS-style cursor: solid while typing/deleting, smooth breathing blink while paused */}
      <motion.span
        aria-hidden="true"
        animate={{
          opacity:
            phase === "typing" || phase === "deleting"
              ? 1
              : [1, 1, 0, 0, 1],
        }}
        transition={{
          duration: phase === "typing" || phase === "deleting" ? 0.15 : 1.15,
          times:
            phase === "typing" || phase === "deleting"
              ? undefined
              : [0, 0.45, 0.55, 0.75, 1],
          repeat: (phase === "typing" || phase === "deleting" || shouldReduceMotion) ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="inline-block w-[3px] sm:w-[3.5px] h-[0.74em] ml-[3px] sm:ml-[4px] bg-coral rounded-full"
      />
    </span>
  );
};

export default TypewriterWord;
