"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const BlobMorph = () => {
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

  const getBlobPath = (
    centerX: number,
    centerY: number,
    radius: number,
    points: number
  ) => {
    const path = [];
    for (let i = 0; i <= points; i++) {
      const angle = (i / points) * Math.PI * 2;
      const variation =
        Math.sin(time * 2 + angle * 2) * 15 +
        Math.cos(time * 1.5 + angle * 3) * 10;
      const r = radius + variation;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;
      path.push(`${i === 0 ? "M" : "L"} ${x} ${y}`);
    }
    return path.join(" ") + " Z";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-900 via-rose-900 to-purple-900 p-8">
      <motion.h2
        className="text-4xl font-bold text-white mb-16 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        Blob Morph
      </motion.h2>

      <div className="relative w-96 h-96 bg-black/20 rounded-3xl border border-pink-400/20 backdrop-blur-sm overflow-hidden">
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <motion.path
            d={getBlobPath(200, 200, 80, 12)}
            fill="rgba(236, 72, 153, 0.4)"
            stroke="rgba(236, 72, 153, 0.6)"
            strokeWidth="2"
            animate={
              isActive
                ? {
                    opacity: [0.6, 0.9, 0.6],
                  }
                : {}
            }
            transition={{
              duration: 3,
              repeat: isActive ? Infinity : 0,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d={getBlobPath(200, 200, 60, 10)}
            fill="rgba(219, 39, 119, 0.5)"
            stroke="rgba(219, 39, 119, 0.7)"
            strokeWidth="2"
            animate={
              isActive
                ? {
                    opacity: [0.5, 0.8, 0.5],
                  }
                : {}
            }
            transition={{
              duration: 2.5,
              repeat: isActive ? Infinity : 0,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />
          <motion.path
            d={getBlobPath(200, 200, 40, 8)}
            fill="rgba(192, 38, 211, 0.6)"
            stroke="rgba(192, 38, 211, 0.8)"
            strokeWidth="2"
            animate={
              isActive
                ? {
                    opacity: [0.6, 1, 0.6],
                  }
                : {}
            }
            transition={{
              duration: 2,
              repeat: isActive ? Infinity : 0,
              ease: "easeInOut",
              delay: 0.6,
            }}
          />
        </svg>

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-pink-400 via-rose-500 to-purple-600 rounded-full shadow-2xl"
          animate={
            isActive
              ? {
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                  boxShadow: [
                    "0 0 0 0 rgba(236, 72, 153, 0.7)",
                    "0 0 0 25px rgba(236, 72, 153, 0)",
                    "0 0 0 0 rgba(236, 72, 153, 0)",
                  ],
                }
              : {
                  scale: 1,
                  rotate: 0,
                  boxShadow: "0 0 0 0 rgba(236, 72, 153, 0)",
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

        {Array.from({ length: 10 }, (_, i) => {
          const angle = (i * Math.PI * 2) / 10;
          const radius = 100 + Math.sin(time * 2 + i) * 20;
          const x = 200 + Math.cos(angle + time) * radius;
          const y = 200 + Math.sin(angle + time) * radius;
          return (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
              style={{
                left: x - 6,
                top: y - 6,
              }}
              animate={
                isActive
                  ? {
                      scale: [1, 1.4, 1],
                      opacity: [0.4, 0.9, 0.4],
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
          className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-3xl"
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
          className="absolute top-8 left-8 w-3 h-3 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full"
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
          className="absolute bottom-8 left-8 w-3 h-3 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full"
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
      </div>

      <motion.button
        className="mt-8 px-10 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(236, 72, 153, 0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsActive(!isActive)}
        animate={isActive ? { scale: [1, 1.02, 1] } : {}}
        transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
      >
        {isActive ? "Stop" : "Start"} Morph
      </motion.button>

      <motion.div
        className="mt-8 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-white/80 text-lg">
          Organic blob morphing with fluid, organic shape transformations
        </p>
      </motion.div>
    </div>
  );
};

export default BlobMorph;
