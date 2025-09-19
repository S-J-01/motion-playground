"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const LiquidMorph = () => {
  const [isActive, setIsActive] = useState(false);
  const [morphIndex, setMorphIndex] = useState(0);

  const morphShapes = [
    { borderRadius: "50% 20% 50% 20%" },
    { borderRadius: "20% 50% 20% 50%" },
    { borderRadius: "40% 60% 30% 70%" },
    { borderRadius: "60% 40% 70% 30%" },
    { borderRadius: "30% 70% 40% 60%" },
    { borderRadius: "70% 30% 60% 40%" },
  ];

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setMorphIndex((prev) => (prev + 1) % morphShapes.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isActive, morphShapes.length]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 p-8">
      <motion.h2
        className="text-4xl font-bold text-white mb-16 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        Liquid Morph
      </motion.h2>

      <div className="relative w-96 h-96 bg-black/20 rounded-3xl border border-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
        <motion.div
          className="relative w-48 h-48 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 shadow-2xl"
          animate={
            isActive
              ? {
                  borderRadius: morphShapes[morphIndex].borderRadius,
                  scale: [1, 1.1, 0.9, 1],
                  rotate: [0, 5, -5, 0],
                }
              : {
                  borderRadius: "50%",
                  scale: 1,
                  rotate: 0,
                }
          }
          transition={{
            duration: 2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-inherit"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute top-4 left-4 w-8 h-8 bg-white/30 rounded-full"
            animate={
              isActive
                ? {
                    x: [0, 20, -10, 0],
                    y: [0, -15, 10, 0],
                    scale: [1, 1.5, 0.8, 1],
                    opacity: [0.5, 1, 0.3, 0.5],
                  }
                : {}
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute top-4 right-4 w-6 h-6 bg-white/40 rounded-full"
            animate={
              isActive
                ? {
                    x: [0, -15, 25, 0],
                    y: [0, 20, -5, 0],
                    scale: [1, 0.7, 1.3, 1],
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
            className="absolute bottom-4 left-4 w-7 h-7 bg-white/35 rounded-full"
            animate={
              isActive
                ? {
                    x: [0, 30, -20, 0],
                    y: [0, -25, 15, 0],
                    scale: [1, 1.2, 0.6, 1],
                    opacity: [0.3, 0.9, 0.1, 0.3],
                  }
                : {}
            }
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          <motion.div
            className="absolute bottom-4 right-4 w-5 h-5 bg-white/45 rounded-full"
            animate={
              isActive
                ? {
                    x: [0, -25, 15, 0],
                    y: [0, 30, -20, 0],
                    scale: [1, 0.8, 1.4, 1],
                    opacity: [0.5, 0.7, 0.3, 0.5],
                  }
                : {}
            }
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-3xl"
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
                  x: [0, 50, -30, 0],
                  y: [0, -40, 20, 0],
                  scale: [1, 1.5, 0.5, 1],
                  rotate: [0, 180, 360],
                }
              : {}
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-8 right-8 w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
          animate={
            isActive
              ? {
                  x: [0, -50, 30, 0],
                  y: [0, 40, -20, 0],
                  scale: [1, 0.5, 1.5, 1],
                  rotate: [0, -180, -360],
                }
              : {}
          }
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        />

        <motion.div
          className="absolute bottom-8 left-8 w-3 h-3 bg-gradient-to-r from-red-400 to-pink-500 rounded-full"
          animate={
            isActive
              ? {
                  x: [0, 40, -50, 0],
                  y: [0, -30, 40, 0],
                  scale: [1, 1.3, 0.7, 1],
                  rotate: [0, 90, 180, 270, 360],
                }
              : {}
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
        />

        <motion.div
          className="absolute bottom-8 right-8 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"
          animate={
            isActive
              ? {
                  x: [0, -40, 50, 0],
                  y: [0, 30, -40, 0],
                  scale: [1, 0.7, 1.3, 1],
                  rotate: [0, -90, -180, -270, -360],
                }
              : {}
          }
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
      </div>

      <motion.button
        className="mt-8 px-10 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold rounded-2xl shadow-2xl"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsActive(!isActive)}
        animate={isActive ? { scale: [1, 1.02, 1] } : {}}
        transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
      >
        {isActive ? "Stop" : "Start"} Morphing
      </motion.button>

      <motion.div
        className="mt-8 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-white/80 text-lg">
          Liquid-like morphing shapes with organic border radius animations
        </p>
      </motion.div>
    </div>
  );
};

export default LiquidMorph;
