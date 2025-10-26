"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const QuantumField = () => {
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

  const getWavePosition = (
    x: number,
    y: number,
    frequency: number,
    amplitude: number,
    phase: number = 0
  ) => {
    const wave1 = Math.sin(x * 0.02 + time * frequency + phase) * amplitude;
    const wave2 =
      Math.cos(y * 0.02 + time * frequency * 0.7 + phase) * amplitude * 0.5;
    const interference =
      Math.sin((x + y) * 0.01 + time * frequency * 1.3 + phase) *
      amplitude *
      0.3;
    return {
      x: x + wave1 + interference,
      y: y + wave2 + interference,
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
        Quantum Field
      </motion.h2>

      <div className="relative w-96 h-96 bg-black/20 rounded-3xl border border-indigo-400/20 backdrop-blur-sm overflow-hidden">
        {Array.from({ length: 20 }, (_, i) => {
          const x = 50 + (i % 5) * 60;
          const y = 50 + Math.floor(i / 5) * 60;
          const position = getWavePosition(
            x,
            y,
            1 + i * 0.1,
            15,
            (i * Math.PI) / 10
          );
          return (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full shadow-lg"
              style={{
                left: position.x - 6,
                top: position.y - 6,
              }}
              animate={
                isActive
                  ? {
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6],
                      rotate: [0, 180, 360],
                    }
                  : {}
              }
              transition={{
                duration: 2 + Math.random(),
                repeat: isActive ? Infinity : 0,
                ease: "easeInOut",
                delay: i * 0.1,
              }}
            />
          );
        })}

        {Array.from({ length: 12 }, (_, i) => {
          const angle = (i * Math.PI * 2) / 12;
          const radius = 80 + Math.sin(time * 2 + i) * 20;
          const x = 200 + Math.cos(angle + time) * radius;
          const y = 200 + Math.sin(angle + time) * radius;
          return (
            <motion.div
              key={`orbit-${i}`}
              className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full"
              style={{
                left: x - 4,
                top: y - 4,
              }}
              animate={
                isActive
                  ? {
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 0.8, 0.4],
                    }
                  : {}
              }
              transition={{
                duration: 3 + Math.random(),
                repeat: isActive ? Infinity : 0,
                ease: "easeInOut",
                delay: i * 0.15,
              }}
            />
          );
        })}

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-600 rounded-full shadow-2xl"
          animate={
            isActive
              ? {
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                  boxShadow: [
                    "0 0 0 0 rgba(99, 102, 241, 0.7)",
                    "0 0 0 25px rgba(99, 102, 241, 0)",
                    "0 0 0 0 rgba(99, 102, 241, 0)",
                  ],
                }
              : {
                  scale: 1,
                  rotate: 0,
                  boxShadow: "0 0 0 0 rgba(99, 102, 241, 0)",
                }
          }
          transition={{
            duration: 2,
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
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl"
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
          className="absolute top-8 left-8 w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full"
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
          className="absolute top-8 right-8 w-3 h-3 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full"
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
          className="absolute bottom-8 left-8 w-3 h-3 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full"
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
          className="absolute bottom-8 right-8 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
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

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 border border-indigo-400/20 rounded-full"
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
            duration: 6,
            repeat: isActive ? Infinity : 0,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 border border-purple-400/30 rounded-full"
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
            duration: 8,
            repeat: isActive ? Infinity : 0,
            ease: "linear",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-transparent via-indigo-400/10 to-transparent rounded-3xl"
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
        {isActive ? "Stop" : "Start"} Field
      </motion.button>

      <motion.div
        className="mt-8 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-white/80 text-lg">
          Quantum field visualization with wave interference and particle
          interactions
        </p>
      </motion.div>
    </div>
  );
};

export default QuantumField;
