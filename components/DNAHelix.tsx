"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const DNAHelix = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setTime((prev) => prev + 0.02);
      }, 16);
      return () => clearInterval(interval);
    }
  }, [isActive]);

  const getHelixPosition = (index: number, isRight: boolean) => {
    const height = index * 20;
    const radius = 60;
    const angle = time * 2 + (isRight ? Math.PI : 0);
    const x = 200 + Math.cos(angle) * radius;
    const y = 50 + height;
    return { x, y };
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 p-8">
      <motion.h2
        className="text-4xl font-bold text-white mb-16 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        DNA Helix
      </motion.h2>

      <div className="relative w-96 h-96 bg-black/20 rounded-3xl border border-green-400/20 backdrop-blur-sm overflow-hidden">
        {Array.from({ length: 15 }, (_, i) => {
          const leftPos = getHelixPosition(i, false);
          const rightPos = getHelixPosition(i, true);
          return (
            <div key={i}>
              <motion.div
                className="absolute w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-lg"
                style={{
                  left: leftPos.x - 8,
                  top: leftPos.y - 8,
                }}
                animate={
                  isActive
                    ? {
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  repeat: isActive ? Infinity : 0,
                  ease: "easeInOut",
                  delay: i * 0.1,
                }}
              />
              <motion.div
                className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg"
                style={{
                  left: rightPos.x - 8,
                  top: rightPos.y - 8,
                }}
                animate={
                  isActive
                    ? {
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  repeat: isActive ? Infinity : 0,
                  ease: "easeInOut",
                  delay: i * 0.1 + 0.5,
                }}
              />
              <motion.div
                className="absolute w-1 h-1 bg-gradient-to-r from-white to-gray-300 rounded-full"
                style={{
                  left: (leftPos.x + rightPos.x) / 2 - 2,
                  top: (leftPos.y + rightPos.y) / 2 - 2,
                }}
                animate={
                  isActive
                    ? {
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }
                    : {}
                }
                transition={{
                  duration: 1.5,
                  repeat: isActive ? Infinity : 0,
                  ease: "easeInOut",
                  delay: i * 0.1 + 0.25,
                }}
              />
            </div>
          );
        })}

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-600 rounded-full shadow-2xl"
          animate={
            isActive
              ? {
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                  boxShadow: [
                    "0 0 0 0 rgba(16, 185, 129, 0.7)",
                    "0 0 0 20px rgba(16, 185, 129, 0)",
                    "0 0 0 0 rgba(16, 185, 129, 0)",
                  ],
                }
              : {
                  scale: 1,
                  rotate: 0,
                  boxShadow: "0 0 0 0 rgba(16, 185, 129, 0)",
                }
          }
          transition={{
            duration: 3,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-3xl"
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
          className="absolute top-8 left-8 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
          animate={
            isActive
              ? {
                  x: [0, 25, -15, 0],
                  y: [0, -20, 10, 0],
                  scale: [1, 1.3, 0.7, 1],
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
                  x: [0, -25, 15, 0],
                  y: [0, 20, -10, 0],
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
          className="absolute bottom-8 left-8 w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
          animate={
            isActive
              ? {
                  x: [0, 20, -25, 0],
                  y: [0, -15, 20, 0],
                  scale: [1, 1.2, 0.8, 1],
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
          className="absolute bottom-8 right-8 w-3 h-3 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full"
          animate={
            isActive
              ? {
                  x: [0, -20, 25, 0],
                  y: [0, 15, -20, 0],
                  scale: [1, 0.8, 1.2, 1],
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-green-400/20 rounded-full"
          animate={
            isActive
              ? {
                  scale: [1, 1.1, 1],
                  rotate: [0, 360],
                  opacity: [0.2, 0.5, 0.2],
                }
              : {}
          }
          transition={{
            duration: 8,
            repeat: isActive ? Infinity : 0,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-emerald-400/30 rounded-full"
          animate={
            isActive
              ? {
                  scale: [1, 1.05, 1],
                  rotate: [0, -360],
                  opacity: [0.3, 0.6, 0.3],
                }
              : {}
          }
          transition={{
            duration: 12,
            repeat: isActive ? Infinity : 0,
            ease: "linear",
            delay: 2,
          }}
        />
      </div>

      <motion.button
        className="mt-8 px-10 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-2xl shadow-2xl"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsActive(!isActive)}
        animate={isActive ? { scale: [1, 1.02, 1] } : {}}
        transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
      >
        {isActive ? "Stop" : "Start"} Helix
      </motion.button>

      <motion.div
        className="mt-8 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-white/80 text-lg">
          DNA double helix with rotating base pairs and connecting bonds
        </p>
      </motion.div>
    </div>
  );
};

export default DNAHelix;
