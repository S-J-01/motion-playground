"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const AuroraBorealis = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setTime(prev => prev + 0.015);
      }, 16);
      return () => clearInterval(interval);
    }
  }, [isActive]);

  const getAuroraWave = (y: number, frequency: number, amplitude: number, phase: number = 0) => {
    return Math.sin(y * 0.01 + time * frequency + phase) * amplitude;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 p-8">
      <motion.h2 
        className="text-4xl font-bold text-white mb-16 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        Aurora Borealis
      </motion.h2>

      <div className="relative w-96 h-96 bg-black/30 rounded-3xl border border-cyan-400/20 backdrop-blur-sm overflow-hidden">
        {Array.from({ length: 5 }, (_, i) => {
          const wave1 = getAuroraWave(0, 0.5 + i * 0.2, 30 + i * 10, i * Math.PI / 3);
          const wave2 = getAuroraWave(100, 0.5 + i * 0.2, 30 + i * 10, i * Math.PI / 3);
          const wave3 = getAuroraWave(200, 0.5 + i * 0.2, 30 + i * 10, i * Math.PI / 3);
          const wave4 = getAuroraWave(300, 0.5 + i * 0.2, 30 + i * 10, i * Math.PI / 3);
          
          return (
            <motion.div
              key={i}
              className="absolute w-full h-24 opacity-60"
              style={{
                top: i * 70,
                background: `linear-gradient(to right, 
                  transparent 0%,
                  ${i % 2 === 0 ? 'rgba(6, 182, 212, 0.4)' : 'rgba(139, 92, 246, 0.4)'} ${wave1 + 150}px,
                  ${i % 2 === 0 ? 'rgba(34, 211, 238, 0.6)' : 'rgba(168, 85, 247, 0.6)'} ${wave2 + 200}px,
                  ${i % 2 === 0 ? 'rgba(6, 182, 212, 0.4)' : 'rgba(139, 92, 246, 0.4)'} ${wave3 + 200}px,
                  transparent 100%
                )`,
                clipPath: `polygon(
                  ${wave1 + 150}px 0%,
                  ${wave2 + 200}px 25%,
                  ${wave3 + 200}px 50%,
                  ${wave4 + 200}px 75%,
                  ${wave3 + 150}px 100%,
                  ${wave1 + 100}px 100%
                )`,
                filter: "blur(8px)"
              }}
              animate={isActive ? {
                opacity: [0.4, 0.8, 0.4],
                y: [0, -5, 0]
              } : {}}
              transition={{
                duration: 3 + i * 0.5,
                repeat: isActive ? Infinity : 0,
                ease: "easeInOut",
                delay: i * 0.2
              }}
            />
          );
        })}

        {Array.from({ length: 15 }, (_, i) => {
          const x = Math.random() * 350 + 25;
          const y = Math.random() * 350 + 25;
          const twinkle = Math.sin(time * 2 + i) * 0.5 + 0.5;
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: x,
                top: y,
                opacity: twinkle * 0.8,
                boxShadow: `0 0 ${2 + twinkle * 3}px rgba(6, 182, 212, ${twinkle})`
              }}
              animate={isActive ? {
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3]
              } : {}}
              transition={{
                duration: 2 + Math.random(),
                repeat: isActive ? Infinity : 0,
                ease: "easeInOut",
                delay: i * 0.1
              }}
            />
          );
        })}

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl"
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-8 left-8 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
          animate={isActive ? {
            x: [0, 25, -15, 0],
            y: [0, -20, 10, 0],
            scale: [1, 1.3, 0.7, 1],
            opacity: [0.5, 1, 0.3, 0.5]
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-8 right-8 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
          animate={isActive ? {
            x: [0, -25, 15, 0],
            y: [0, 20, -10, 0],
            scale: [1, 0.7, 1.3, 1],
            opacity: [0.4, 0.8, 0.2, 0.4]
          } : {}}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        <motion.div
          className="absolute bottom-8 left-8 w-3 h-3 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"
          animate={isActive ? {
            x: [0, 20, -25, 0],
            y: [0, -15, 20, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.3, 0.9, 0.1, 0.3]
          } : {}}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div
          className="absolute bottom-8 right-8 w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full"
          animate={isActive ? {
            x: [0, -20, 25, 0],
            y: [0, 15, -20, 0],
            scale: [1, 0.8, 1.2, 1],
            opacity: [0.5, 0.7, 0.3, 0.5]
          } : {}}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      </div>

      <motion.button
        className="mt-8 px-10 py-4 bg-gradient-to-r from-cyan-600 to-indigo-600 text-white font-bold rounded-2xl shadow-2xl"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsActive(!isActive)}
        animate={isActive ? { scale: [1, 1.02, 1] } : {}}
        transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
      >
        {isActive ? "Stop" : "Start"} Aurora
      </motion.button>

      <motion.div
        className="mt-8 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-white/80 text-lg">
          Flowing aurora borealis with wavy light patterns and twinkling stars
        </p>
      </motion.div>
    </div>
  );
};

export default AuroraBorealis;
