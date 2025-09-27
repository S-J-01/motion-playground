"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const TextReveal = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const texts = ["MOTION", "ANIMATION", "CREATIVITY", "INNOVATION", "DESIGN"];

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setCurrentText((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isActive, texts.length]);

  const letters = texts[currentText].split("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900 p-8">
      <motion.h2
        className="text-4xl font-bold text-white mb-16 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        Text Reveal
      </motion.h2>

      <div className="relative w-96 h-96 bg-black/20 rounded-3xl border border-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
        <div className="flex items-center justify-center space-x-2">
          {letters.map((letter, index) => (
            <motion.span
              key={`${currentText}-${index}`}
              className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-500 to-purple-600"
              initial={{
                opacity: 0,
                y: 50,
                rotateX: -90,
                scale: 0.5,
              }}
              animate={
                isActive
                  ? {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      scale: 1,
                    }
                  : {
                      opacity: 0,
                      y: 50,
                      rotateX: -90,
                      scale: 0.5,
                    }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              whileHover={{
                scale: 1.2,
                rotateY: 360,
                transition: { duration: 0.5 },
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-purple-500/10 rounded-3xl"
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-8 left-8 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
          animate={
            isActive
              ? {
                  x: [0, 30, -20, 0],
                  y: [0, -25, 15, 0],
                  scale: [1, 1.5, 0.5, 1],
                  opacity: [0.5, 1, 0.3, 0.5],
                }
              : {}
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-8 right-8 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
          animate={
            isActive
              ? {
                  x: [0, -30, 20, 0],
                  y: [0, 25, -15, 0],
                  scale: [1, 0.5, 1.5, 1],
                  opacity: [0.4, 0.8, 0.2, 0.4],
                }
              : {}
          }
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        <motion.div
          className="absolute bottom-8 left-8 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
          animate={
            isActive
              ? {
                  x: [0, 25, -30, 0],
                  y: [0, -20, 25, 0],
                  scale: [1, 1.3, 0.7, 1],
                  opacity: [0.3, 0.9, 0.1, 0.3],
                }
              : {}
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute bottom-8 right-8 w-3 h-3 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full"
          animate={
            isActive
              ? {
                  x: [0, -25, 30, 0],
                  y: [0, 20, -25, 0],
                  scale: [1, 0.7, 1.3, 1],
                  opacity: [0.5, 0.7, 0.3, 0.5],
                }
              : {}
          }
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white/20 rounded-full"
          animate={
            isActive
              ? {
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                  opacity: [0.3, 0.8, 0.3],
                }
              : {}
          }
          transition={{
            duration: 3,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white/30 rounded-full"
          animate={
            isActive
              ? {
                  scale: [1, 1.1, 1],
                  rotate: [0, -360],
                  opacity: [0.2, 0.6, 0.2],
                }
              : {}
          }
          transition={{
            duration: 4,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      <motion.button
        className="mt-8 px-10 py-4 bg-gradient-to-r from-rose-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(244, 63, 94, 0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsActive(!isActive)}
        animate={isActive ? { scale: [1, 1.02, 1] } : {}}
        transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
      >
        {isActive ? "Stop" : "Start"} Reveal
      </motion.button>

      <motion.div
        className="mt-8 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-white/80 text-lg">
          Dynamic text animations with 3D rotation and gradient effects
        </p>
      </motion.div>
    </div>
  );
};

export default TextReveal;
