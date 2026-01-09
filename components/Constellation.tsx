"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const Constellation = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setTime(prev => prev + 0.01);
      }, 16);
      return () => clearInterval(interval);
    }
  }, [isActive]);

  const stars = [
    { x: 100, y: 80, connections: [1, 2, 3] },
    { x: 200, y: 60, connections: [0, 2, 4] },
    { x: 300, y: 100, connections: [0, 1, 3, 5] },
    { x: 150, y: 180, connections: [0, 2, 4, 6] },
    { x: 250, y: 200, connections: [1, 3, 5, 7] },
    { x: 350, y: 160, connections: [2, 4, 6] },
    { x: 120, y: 280, connections: [3, 5, 7] },
    { x: 280, y: 300, connections: [4, 6] }
  ];

  const getStarPosition = (star: typeof stars[0]) => {
    return {
      x: star.x + Math.sin(time * 0.5 + star.x * 0.01) * 5,
      y: star.y + Math.cos(time * 0.5 + star.y * 0.01) * 5
    };
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 p-8">
      <motion.h2 
        className="text-4xl font-bold text-white mb-16 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        Constellation
      </motion.h2>

      <div className="relative w-96 h-96 bg-black/20 rounded-3xl border border-blue-400/20 backdrop-blur-sm overflow-hidden">
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {stars.map((star, index) => {
            const pos = getStarPosition(star);
            return star.connections.map((connIndex) => {
              const connStar = stars[connIndex];
              const connPos = getStarPosition(connStar);
              const distance = Math.sqrt(
                Math.pow(connPos.x - pos.x, 2) + Math.pow(connPos.y - pos.y, 2)
              );
              
              return (
                <motion.line
                  key={`${index}-${connIndex}`}
                  x1={pos.x}
                  y1={pos.y}
                  x2={connPos.x}
                  y2={connPos.y}
                  stroke="rgba(59, 130, 246, 0.4)"
                  strokeWidth="1"
                  animate={isActive ? {
                    opacity: [0.2, 0.6, 0.2]
                  } : {}}
                  transition={{
                    duration: 2 + Math.random(),
                    repeat: isActive ? Infinity : 0,
                    ease: "easeInOut",
                    delay: (index + connIndex) * 0.1
                  }}
                />
              );
            });
          })}
        </svg>

        {stars.map((star, index) => {
          const pos = getStarPosition(star);
          return (
            <motion.div
              key={index}
              className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full shadow-lg"
              style={{
                left: pos.x - 8,
                top: pos.y - 8,
                boxShadow: `0 0 12px rgba(59, 130, 246, 0.8), 0 0 24px rgba(59, 130, 246, 0.4)`
              }}
              animate={isActive ? {
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
                rotate: [0, 360]
              } : {}}
              transition={{
                duration: 2 + Math.random(),
                repeat: isActive ? Infinity : 0,
                ease: "easeInOut",
                delay: index * 0.1
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
          );
        })}

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl"
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-8 left-8 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"
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
          className="absolute top-8 right-8 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
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
          className="absolute bottom-8 left-8 w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full"
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
          className="absolute bottom-8 right-8 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
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
        className="mt-8 px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-2xl shadow-2xl"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsActive(!isActive)}
        animate={isActive ? { scale: [1, 1.02, 1] } : {}}
        transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
      >
        {isActive ? "Stop" : "Start"} Constellation
      </motion.button>

      <motion.div
        className="mt-8 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-white/80 text-lg">
          Animated constellation with connecting lines between twinkling stars
        </p>
      </motion.div>
    </div>
  );
};

export default Constellation;
