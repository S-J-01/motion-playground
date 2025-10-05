"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const FluidFlow = () => {
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

  const getFlowPosition = (
    baseX: number,
    baseY: number,
    amplitude: number,
    frequency: number,
    phase: number = 0
  ) => {
    return {
      x: baseX + Math.sin(time * frequency + phase) * amplitude,
      y: baseY + Math.cos(time * frequency * 0.7 + phase) * amplitude * 0.5,
    };
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900 p-8">
      <motion.h2
        className="text-4xl font-bold text-white mb-16 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        Fluid Flow
      </motion.h2>

      <div className="relative w-96 h-96 bg-black/20 rounded-3xl border border-white/10 backdrop-blur-sm overflow-hidden">
        <motion.div
          className="absolute w-32 h-32 bg-gradient-to-br from-cyan-400 via-blue-500 to-teal-600 rounded-full shadow-2xl"
          style={{
            left: getFlowPosition(150, 100, 30, 1).x,
            top: getFlowPosition(150, 100, 30, 1).y,
          }}
          animate={
            isActive
              ? {
                  scale: [1, 1.2, 0.8, 1],
                  rotate: [0, 180, 360],
                }
              : {}
          }
          transition={{
            duration: 4,
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
          className="absolute w-24 h-24 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-600 rounded-full shadow-xl"
          style={{
            left: getFlowPosition(200, 150, 25, 1.5, Math.PI / 3).x,
            top: getFlowPosition(200, 150, 25, 1.5, Math.PI / 3).y,
          }}
          animate={
            isActive
              ? {
                  scale: [1, 1.3, 0.7, 1],
                  rotate: [0, -180, -360],
                }
              : {}
          }
          transition={{
            duration: 3,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        <motion.div
          className="absolute w-20 h-20 bg-gradient-to-br from-green-400 via-teal-500 to-cyan-600 rounded-full shadow-lg"
          style={{
            left: getFlowPosition(100, 200, 20, 2, Math.PI).x,
            top: getFlowPosition(100, 200, 20, 2, Math.PI).y,
          }}
          animate={
            isActive
              ? {
                  scale: [1, 1.4, 0.6, 1],
                  rotate: [0, 90, 180, 270, 360],
                }
              : {}
          }
          transition={{
            duration: 2.5,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute w-16 h-16 bg-gradient-to-br from-pink-400 via-rose-500 to-red-600 rounded-full shadow-lg"
          style={{
            left: getFlowPosition(250, 120, 35, 0.8, Math.PI * 1.5).x,
            top: getFlowPosition(250, 120, 35, 0.8, Math.PI * 1.5).y,
          }}
          animate={
            isActive
              ? {
                  scale: [1, 1.1, 0.9, 1],
                  rotate: [0, -90, -180, -270, -360],
                }
              : {}
          }
          transition={{
            duration: 5,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        <motion.div
          className="absolute w-12 h-12 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 rounded-full shadow-lg"
          style={{
            left: getFlowPosition(120, 250, 15, 2.5, Math.PI / 2).x,
            top: getFlowPosition(120, 250, 15, 2.5, Math.PI / 2).y,
          }}
          animate={
            isActive
              ? {
                  scale: [1, 1.5, 0.5, 1],
                  rotate: [0, 360],
                }
              : {}
          }
          transition={{
            duration: 1.5,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl"
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
          className="absolute top-8 left-8 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
          animate={
            isActive
              ? {
                  x: [0, 30, -20, 0],
                  y: [0, -25, 15, 0],
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
          className="absolute top-8 right-8 w-3 h-3 bg-gradient-to-r from-teal-400 to-green-500 rounded-full"
          animate={
            isActive
              ? {
                  x: [0, -30, 20, 0],
                  y: [0, 25, -15, 0],
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
          className="absolute bottom-8 left-8 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
          animate={
            isActive
              ? {
                  x: [0, 25, -30, 0],
                  y: [0, -20, 25, 0],
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
          className="absolute bottom-8 right-8 w-3 h-3 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full"
          animate={
            isActive
              ? {
                  x: [0, -25, 30, 0],
                  y: [0, 20, -25, 0],
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
        className="mt-8 px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-2xl shadow-2xl"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsActive(!isActive)}
        animate={isActive ? { scale: [1, 1.02, 1] } : {}}
        transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
      >
        {isActive ? "Stop" : "Start"} Flow
      </motion.button>

      <motion.div
        className="mt-8 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-white/80 text-lg">
          Fluid-like flowing motion with organic wave patterns
        </p>
      </motion.div>
    </div>
  );
};

export default FluidFlow;
