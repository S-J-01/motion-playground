"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const HologramEffect = () => {
  const [isActive, setIsActive] = useState(false);
  const [glitchOffset, setGlitchOffset] = useState(0);

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setGlitchOffset(Math.random() * 4 - 2);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isActive]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-8">
      <motion.h2
        className="text-4xl font-bold text-white mb-16 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        Hologram Effect
      </motion.h2>

      <div className="relative w-96 h-96 bg-black/30 rounded-3xl border border-cyan-400/20 backdrop-blur-sm overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-cyan-400/20 via-blue-500/30 to-purple-600/20 rounded-2xl border border-cyan-400/40"
          animate={
            isActive
              ? {
                  scale: [1, 1.05, 0.95, 1],
                  rotate: [0, 1, -1, 0],
                  x: glitchOffset,
                  y: glitchOffset * 0.5,
                }
              : {
                  scale: 1,
                  rotate: 0,
                  x: 0,
                  y: 0,
                }
          }
          transition={{
            duration: 0.1,
            ease: "linear",
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-2xl"
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

          <motion.div
            className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
            animate={
              isActive
                ? {
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5],
                    x: [0, 2, -2, 0],
                    y: [0, -2, 2, 0],
                  }
                : {}
            }
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
            animate={
              isActive
                ? {
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.9, 0.4],
                    x: [0, -2, 2, 0],
                    y: [0, 2, -2, 0],
                  }
                : {}
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />

          <motion.div
            className="absolute bottom-4 left-4 w-7 h-7 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"
            animate={
              isActive
                ? {
                    scale: [1, 1.4, 1],
                    opacity: [0.3, 0.8, 0.3],
                    x: [0, 3, -3, 0],
                    y: [0, -3, 3, 0],
                  }
                : {}
            }
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
          />

          <motion.div
            className="absolute bottom-4 right-4 w-5 h-5 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
            animate={
              isActive
                ? {
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.7, 0.5],
                    x: [0, -3, 3, 0],
                    y: [0, 3, -3, 0],
                  }
                : {}
            }
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.9,
            }}
          />

          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-cyan-400/50 rounded-full"
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
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-cyan-400/30 rounded-full"
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
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-3xl"
          animate={{
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-8 left-8 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
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
          className="absolute top-8 right-8 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
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
          className="absolute bottom-8 left-8 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"
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
          className="absolute bottom-8 right-8 w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
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
          className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-400/10 to-transparent rounded-3xl"
          animate={
            isActive
              ? {
                  opacity: [0, 0.3, 0],
                  y: [0, -20, 0],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.button
        className="mt-8 px-10 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsActive(!isActive)}
        animate={isActive ? { scale: [1, 1.02, 1] } : {}}
        transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
      >
        {isActive ? "Stop" : "Start"} Hologram
      </motion.button>

      <motion.div
        className="mt-8 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-white/80 text-lg">
          Futuristic holographic effects with glitch and shimmer animations
        </p>
      </motion.div>
    </div>
  );
};

export default HologramEffect;
