"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const Vortex = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setTime(prev => prev + 0.03);
      }, 16);
      return () => clearInterval(interval);
    }
  }, [isActive]);

  const getVortexPosition = (index: number, total: number, radius: number) => {
    const angle = time * 2 + (index / total) * Math.PI * 4;
    const spiralRadius = radius * (1 - (index / total) * 0.7);
    const x = 200 + Math.cos(angle) * spiralRadius;
    const y = 200 + Math.sin(angle) * spiralRadius;
    return { x, y, z: index / total };
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black p-8">
      <motion.h2 
        className="text-4xl font-bold text-white mb-16 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        Vortex
      </motion.h2>

      <div className="relative w-96 h-96 bg-black/30 rounded-3xl border border-gray-400/20 backdrop-blur-sm overflow-hidden">
        {Array.from({ length: 40 }, (_, i) => {
          const pos = getVortexPosition(i, 40, 120);
          const size = 2 + (1 - pos.z) * 4;
          return (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-r from-gray-300 via-white to-gray-400 rounded-full"
              style={{
                left: pos.x - size,
                top: pos.y - size,
                width: size * 2,
                height: size * 2,
                opacity: 0.3 + pos.z * 0.7,
                boxShadow: `0 0 ${size * 2}px rgba(255, 255, 255, ${0.3 + pos.z * 0.4})`
              }}
              animate={isActive ? {
                scale: [1, 1.2, 1],
                opacity: [0.3 + pos.z * 0.5, 0.8 + pos.z * 0.2, 0.3 + pos.z * 0.5]
              } : {}}
              transition={{
                duration: 1.5 + Math.random(),
                repeat: isActive ? Infinity : 0,
                ease: "easeInOut",
                delay: i * 0.02
              }}
            />
          );
        })}

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-gray-200 via-white to-gray-300 rounded-full shadow-2xl"
          animate={isActive ? {
            scale: [1, 1.3, 1],
            rotate: [0, 360],
            boxShadow: [
              "0 0 0 0 rgba(255, 255, 255, 0.7)",
              "0 0 0 30px rgba(255, 255, 255, 0)",
              "0 0 0 0 rgba(255, 255, 255, 0)"
            ]
          } : {
            scale: 1,
            rotate: 0,
            boxShadow: "0 0 0 0 rgba(255, 255, 255, 0)"
          }}
          transition={{
            duration: 2,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {Array.from({ length: 12 }, (_, i) => {
          const angle = (i * Math.PI * 2) / 12;
          const radius = 60 + Math.sin(time * 3 + i) * 15;
          const x = 200 + Math.cos(angle + time * 2) * radius;
          const y = 200 + Math.sin(angle + time * 2) * radius;
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-gradient-to-r from-gray-400 to-white rounded-full"
              style={{
                left: x - 4,
                top: y - 4,
              }}
              animate={isActive ? {
                scale: [1, 1.4, 1],
                opacity: [0.4, 0.9, 0.4]
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
          className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-white/10 rounded-3xl"
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
          className="absolute top-8 left-8 w-3 h-3 bg-gradient-to-r from-gray-300 to-white rounded-full"
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
          className="absolute top-8 right-8 w-3 h-3 bg-gradient-to-r from-gray-400 to-gray-200 rounded-full"
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
          className="absolute bottom-8 left-8 w-3 h-3 bg-gradient-to-r from-white to-gray-300 rounded-full"
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
          className="absolute bottom-8 right-8 w-3 h-3 bg-gradient-to-r from-gray-300 to-white rounded-full"
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

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 border border-gray-400/20 rounded-full"
          animate={isActive ? {
            scale: [1, 1.1, 1],
            rotate: [0, 360],
            opacity: [0.2, 0.5, 0.2]
          } : {}}
          transition={{
            duration: 5,
            repeat: isActive ? Infinity : 0,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 border border-white/30 rounded-full"
          animate={isActive ? {
            scale: [1, 1.05, 1],
            rotate: [0, -360],
            opacity: [0.3, 0.6, 0.3]
          } : {}}
          transition={{
            duration: 7,
            repeat: isActive ? Infinity : 0,
            ease: "linear",
            delay: 1
          }}
        />
      </div>

      <motion.button
        className="mt-8 px-10 py-4 bg-gradient-to-r from-gray-600 to-slate-600 text-white font-bold rounded-2xl shadow-2xl"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(107, 114, 128, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsActive(!isActive)}
        animate={isActive ? { scale: [1, 1.02, 1] } : {}}
        transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
      >
        {isActive ? "Stop" : "Start"} Vortex
      </motion.button>

      <motion.div
        className="mt-8 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-white/80 text-lg">
          Spinning vortex with particles spiraling into the center
        </p>
      </motion.div>
    </div>
  );
};

export default Vortex;
