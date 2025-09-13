"use client";

import { motion } from "motion/react";
import { useState } from "react";

const WaveAnimation = () => {
  const [isWaving, setIsWaving] = useState(false);

  const wavePoints = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 0.1,
  }));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 p-8">
      <h2 className="text-3xl font-bold text-white mb-12">Wave Motion</h2>

      <div className="relative w-96 h-64 bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 400 200"
          preserveAspectRatio="none"
        >
          {wavePoints.map((point) => (
            <motion.path
              key={point.id}
              d={`M 0,100 Q 50,${
                100 + (point.id % 2 === 0 ? -30 : 30)
              } 100,100 T 200,100 T 300,100 T 400,100`}
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                isWaving
                  ? {
                      pathLength: 1,
                      opacity: 1,
                      d: [
                        `M 0,100 Q 50,${
                          100 + (point.id % 2 === 0 ? -30 : 30)
                        } 100,100 T 200,100 T 300,100 T 400,100`,
                        `M 0,100 Q 50,${
                          100 + (point.id % 2 === 0 ? 30 : -30)
                        } 100,100 T 200,100 T 300,100 T 400,100`,
                        `M 0,100 Q 50,${
                          100 + (point.id % 2 === 0 ? -30 : 30)
                        } 100,100 T 200,100 T 300,100 T 400,100`,
                      ],
                    }
                  : {
                      pathLength: 0,
                      opacity: 0,
                    }
              }
              transition={{
                duration: 2,
                delay: point.delay,
                repeat: isWaving ? Infinity : 0,
                ease: "easeInOut",
              }}
            />
          ))}

          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-500/30 to-transparent"
          animate={
            isWaving
              ? {
                  opacity: [0.3, 0.6, 0.3],
                  scaleY: [1, 1.1, 1],
                }
              : {
                  opacity: 0.3,
                  scaleY: 1,
                }
          }
          transition={{
            duration: 1.5,
            repeat: isWaving ? Infinity : 0,
            ease: "easeInOut",
          }}
        />

        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${i * 8}%`,
              top: `${60 + Math.sin(i * 0.5) * 20}%`,
            }}
            animate={
              isWaving
                ? {
                    y: [0, -20, 0],
                    opacity: [0.4, 1, 0.4],
                    scale: [0.8, 1.2, 0.8],
                  }
                : {
                    y: 0,
                    opacity: 0.4,
                    scale: 0.8,
                  }
            }
            transition={{
              duration: 1.5,
              delay: i * 0.1,
              repeat: isWaving ? Infinity : 0,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.button
        className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsWaving(!isWaving)}
      >
        {isWaving ? "Stop Waves" : "Start Waves"}
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center max-w-md"
      >
        <p className="text-white/80 text-sm">
          Watch as multiple wave patterns flow and dance together, creating
          mesmerizing liquid motion effects.
        </p>
      </motion.div>
    </div>
  );
};

export default WaveAnimation;
