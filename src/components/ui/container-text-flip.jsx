"use client";
import React, { useState, useEffect, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function ContainerTextFlip({
  words = ["better", "modern", "beautiful", "awesome"],
  interval = 3000,
  className,
  textClassName,
}) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <motion.span
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden py-1 rounded-lg",
        "text-black dark:text-white font-bold",
        "dark:border-gray-700",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[currentWordIndex]} 
          initial={{ y: 20, opacity: 0, filter: "blur(5px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -20, opacity: 0, filter: "blur(5px)" }}
          transition={{ 
            duration: 0.4, 
            ease: [0.32, 0.72, 0, 1] 
          }}
          className={cn("inline-block whitespace-nowrap", textClassName)}
        >
          {words[currentWordIndex].split("").map((letter, index) => (
            <motion.span
              key={`${words[currentWordIndex]}-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
      <span className="invisible h-0 pointer-events-none">
        {words.reduce((a, b) => (a.length > b.length ? a : b))}
      </span>
    </motion.span>
  );
}