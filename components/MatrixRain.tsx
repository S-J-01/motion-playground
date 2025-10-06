"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const MatrixRain = () => {
  const [isActive, setIsActive] = useState(false);
  const [drops, setDrops] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      speed: number;
      opacity: number;
      char: string;
    }>
  >([]);

  const characters =
    "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        const newDrops = Array.from({ length: 8 }, (_, i) => ({
          id: Date.now() + i,
          x: Math.random() * 350 + 25,
          y: -20,
          speed: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          char: characters[Math.floor(Math.random() * characters.length)],
        }));
        setDrops((prev) => [...prev, ...newDrops].slice(-200));
      }, 200);
      return () => clearInterval(interval);
    }
  }, [isActive, characters]);

  useEffect(() => {
    if (drops.length > 0) {
      const interval = setInterval(() => {
        setDrops((prev) =>
          prev
            .map((drop) => ({
              ...drop,
              y: drop.y + drop.speed,
              char:
                Math.random() < 0.1
                  ? characters[Math.floor(Math.random() * characters.length)]
                  : drop.char,
            }))
            .filter((drop) => drop.y < 400)
        );
      }, 50);
      return () => clearInterval(interval);
    }
  }, [drops.length, characters]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 p-8">
      <motion.h2
        className="text-4xl font-bold text-white mb-16 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        Matrix Rain
      </motion.h2>

      <div className="relative w-96 h-96 bg-black/40 rounded-3xl border border-green-500/20 backdrop-blur-sm overflow-hidden">
        {drops.map((drop) => (
          <motion.div
            key={drop.id}
            className="absolute text-green-400 font-mono text-sm font-bold"
            style={{
              left: drop.x,
              top: drop.y,
              opacity: drop.opacity,
            }}
            animate={{
              opacity: [drop.opacity, drop.opacity * 0.3, drop.opacity],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {drop.char}
          </motion.div>
        ))}

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent rounded-3xl"
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-green-400/30 rounded-full"
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full"
          animate={
            isActive
              ? {
                  scale: [1, 1.1, 1],
                  rotate: [0, -360],
                  opacity: [0.5, 1, 0.5],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-8 left-8 w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
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
          className="absolute top-8 right-8 w-2 h-2 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full"
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
          className="absolute bottom-8 left-8 w-2 h-2 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"
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
          className="absolute bottom-8 right-8 w-2 h-2 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full"
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
        {isActive ? "Stop" : "Start"} Rain
      </motion.button>

      <motion.div
        className="mt-8 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-white/80 text-lg">
          Digital rain effect with Japanese characters and binary code
        </p>
      </motion.div>
    </div>
  );
};

export default MatrixRain;
