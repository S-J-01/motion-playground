"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const OrbitSystem = () => {
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

  const getOrbitPosition = (
    radius: number,
    speed: number,
    offset: number = 0
  ) => {
    const angle = time * speed + offset;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8">
      <motion.h2
        className="text-4xl font-bold text-white mb-16 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        Orbit System
      </motion.h2>

      <div className="relative w-96 h-96 bg-black/20 rounded-3xl border border-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 rounded-full shadow-2xl"
          animate={
            isActive
              ? {
                  scale: [1, 1.1, 1],
                  rotate: [0, 360],
                }
              : {
                  scale: 1,
                  rotate: 0,
                }
          }
          transition={{
            duration: 4,
            repeat: isActive ? Infinity : 0,
            ease: "linear",
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
          className="absolute w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full shadow-lg"
          style={{
            left: `calc(50% + ${getOrbitPosition(60, 2).x}px - 12px)`,
            top: `calc(50% + ${getOrbitPosition(60, 2).y}px - 12px)`,
          }}
          animate={
            isActive
              ? {
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
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
          className="absolute w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-lg"
          style={{
            left: `calc(50% + ${
              getOrbitPosition(90, 1.5, Math.PI / 3).x
            }px - 10px)`,
            top: `calc(50% + ${
              getOrbitPosition(90, 1.5, Math.PI / 3).y
            }px - 10px)`,
          }}
          animate={
            isActive
              ? {
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
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
          className="absolute w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full shadow-lg"
          style={{
            left: `calc(50% + ${getOrbitPosition(120, 1, Math.PI).x}px - 8px)`,
            top: `calc(50% + ${getOrbitPosition(120, 1, Math.PI).y}px - 8px)`,
          }}
          animate={
            isActive
              ? {
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 1, 0.5],
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
          className="absolute w-3 h-3 bg-gradient-to-r from-red-400 to-orange-500 rounded-full shadow-lg"
          style={{
            left: `calc(50% + ${
              getOrbitPosition(150, 0.8, Math.PI * 1.5).x
            }px - 6px)`,
            top: `calc(50% + ${
              getOrbitPosition(150, 0.8, Math.PI * 1.5).y
            }px - 6px)`,
          }}
          animate={
            isActive
              ? {
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4],
                }
              : {}
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.9,
          }}
        />

        <motion.div
          className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full shadow-lg"
          style={{
            left: `calc(50% + ${
              getOrbitPosition(180, 0.6, Math.PI * 0.5).x
            }px - 4px)`,
            top: `calc(50% + ${
              getOrbitPosition(180, 0.6, Math.PI * 0.5).y
            }px - 4px)`,
          }}
          animate={
            isActive
              ? {
                  scale: [1, 1.6, 1],
                  opacity: [0.3, 1, 0.3],
                }
              : {}
          }
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-3xl"
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-8 left-8 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
          animate={
            isActive
              ? {
                  x: [0, 20, -15, 0],
                  y: [0, -20, 15, 0],
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
          className="absolute top-8 right-8 w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
          animate={
            isActive
              ? {
                  x: [0, -20, 15, 0],
                  y: [0, 20, -15, 0],
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
          className="absolute bottom-8 left-8 w-2 h-2 bg-gradient-to-r from-green-400 to-teal-500 rounded-full"
          animate={
            isActive
              ? {
                  x: [0, 15, -20, 0],
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
          className="absolute bottom-8 right-8 w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
          animate={
            isActive
              ? {
                  x: [0, -15, 20, 0],
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
      </div>

      <motion.button
        className="mt-8 px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsActive(!isActive)}
        animate={isActive ? { scale: [1, 1.02, 1] } : {}}
        transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
      >
        {isActive ? "Stop" : "Start"} Orbits
      </motion.button>

      <motion.div
        className="mt-8 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-white/80 text-lg">
          Multiple planets orbiting at different speeds and distances
        </p>
      </motion.div>
    </div>
  );
};

export default OrbitSystem;
