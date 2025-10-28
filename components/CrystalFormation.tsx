"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const CrystalFormation = () => {
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

  const getCrystalPosition = (index: number, layer: number) => {
    const angle = (index * Math.PI * 2) / 6;
    const radius = 30 + layer * 25;
    const x = 200 + Math.cos(angle + time * 0.5) * radius;
    const y = 200 + Math.sin(angle + time * 0.5) * radius;
    return { x, y };
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 p-8">
      <motion.h2
        className="text-4xl font-bold text-white mb-16 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        Crystal Formation
      </motion.h2>

      <div className="relative w-96 h-96 bg-black/20 rounded-3xl border border-blue-400/20 backdrop-blur-sm overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-blue-400 via-cyan-500 to-indigo-600 shadow-2xl"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
          animate={
            isActive
              ? {
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0.7)",
                    "0 0 0 20px rgba(59, 130, 246, 0)",
                    "0 0 0 0 rgba(59, 130, 246, 0)",
                  ],
                }
              : {
                  scale: 1,
                  rotate: 0,
                  boxShadow: "0 0 0 0 rgba(59, 130, 246, 0)",
                }
          }
          transition={{
            duration: 3,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut",
          }}
        />

        {Array.from({ length: 3 }, (_, layer) => (
          <div key={layer}>
            {Array.from({ length: 6 }, (_, index) => {
              const position = getCrystalPosition(index, layer);
              const size = 4 + layer * 2;
              return (
                <motion.div
                  key={`${layer}-${index}`}
                  className="absolute bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-lg"
                  style={{
                    left: position.x - size,
                    top: position.y - size,
                    width: size * 2,
                    height: size * 2,
                    clipPath:
                      layer === 0
                        ? "polygon(50% 0%, 0% 100%, 100% 100%)"
                        : layer === 1
                        ? "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
                        : "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                  }}
                  animate={
                    isActive
                      ? {
                          scale: [1, 1.3, 1],
                          opacity: [0.7, 1, 0.7],
                          rotate: [0, 180, 360],
                        }
                      : {}
                  }
                  transition={{
                    duration: 2 + Math.random(),
                    repeat: isActive ? Infinity : 0,
                    ease: "easeInOut",
                    delay: (layer + index) * 0.1,
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
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
              );
            })}
          </div>
        ))}

        {Array.from({ length: 8 }, (_, i) => {
          const angle = (i * Math.PI * 2) / 8;
          const radius = 100 + Math.sin(time * 2 + i) * 20;
          const x = 200 + Math.cos(angle + time) * radius;
          const y = 200 + Math.sin(angle + time) * radius;
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"
              style={{
                left: x - 4,
                top: y - 4,
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
                duration: 2 + Math.random(),
                repeat: isActive ? Infinity : 0,
                ease: "easeInOut",
                delay: i * 0.1,
              }}
            />
          );
        })}

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl"
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
          className="absolute top-8 left-8 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"
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
          className="absolute top-8 right-8 w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full"
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
          className="absolute bottom-8 left-8 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
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
          className="absolute bottom-8 right-8 w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-blue-400/20 rounded-full"
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-cyan-400/30 rounded-full"
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
      </div>

      <motion.button
        className="mt-8 px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-2xl shadow-2xl"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsActive(!isActive)}
        animate={isActive ? { scale: [1, 1.02, 1] } : {}}
        transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
      >
        {isActive ? "Stop" : "Start"} Formation
      </motion.button>

      <motion.div
        className="mt-8 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-white/80 text-lg">
          Crystal growth patterns with geometric formations and energy particles
        </p>
      </motion.div>
    </div>
  );
};

export default CrystalFormation;
