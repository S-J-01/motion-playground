"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const Kaleidoscope = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setTime(prev => prev + 0.02);
      }, 16);
      return () => clearInterval(interval);
    }
  }, [isActive]);

  const getSegmentPosition = (segment: number, totalSegments: number, radius: number, angleOffset: number = 0) => {
    const baseAngle = (segment * Math.PI * 2) / totalSegments;
    const angle = baseAngle + time * 0.5 + angleOffset;
    const x = 200 + Math.cos(angle) * radius;
    const y = 200 + Math.sin(angle) * radius;
    return { x, y, angle };
  };

  const segments = 8;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 p-8">
      <motion.h2 
        className="text-4xl font-bold text-white mb-16 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        Kaleidoscope
      </motion.h2>

      <div className="relative w-96 h-96 bg-black/20 rounded-3xl border border-purple-400/20 backdrop-blur-sm overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-violet-400 via-purple-500 to-fuchsia-600 rounded-full shadow-2xl"
          animate={isActive ? {
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            boxShadow: [
              "0 0 0 0 rgba(139, 92, 246, 0.7)",
              "0 0 0 25px rgba(139, 92, 246, 0)",
              "0 0 0 0 rgba(139, 92, 246, 0)"
            ]
          } : {
            scale: 1,
            rotate: 0,
            boxShadow: "0 0 0 0 rgba(139, 92, 246, 0)"
          }}
          transition={{
            duration: 2,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"
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

        {Array.from({ length: segments }, (_, i) => {
          const pos1 = getSegmentPosition(i, segments, 60, 0);
          const pos2 = getSegmentPosition(i, segments, 100, Math.PI / segments);
          const pos3 = getSegmentPosition(i, segments, 140, Math.PI / segments * 2);
          
          return (
            <div key={i}>
              <motion.div
                className="absolute w-6 h-6 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full shadow-lg"
                style={{
                  left: pos1.x - 12,
                  top: pos1.y - 12,
                }}
                animate={isActive ? {
                  scale: [1, 1.4, 1],
                  opacity: [0.7, 1, 0.7],
                  rotate: [0, 180, 360]
                } : {}}
                transition={{
                  duration: 2 + Math.random(),
                  repeat: isActive ? Infinity : 0,
                  ease: "easeInOut",
                  delay: i * 0.1
                }}
              />
              <motion.div
                className="absolute w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full shadow-lg"
                style={{
                  left: pos2.x - 10,
                  top: pos2.y - 10,
                }}
                animate={isActive ? {
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                  rotate: [0, -180, -360]
                } : {}}
                transition={{
                  duration: 2.5 + Math.random(),
                  repeat: isActive ? Infinity : 0,
                  ease: "easeInOut",
                  delay: i * 0.1 + 0.3
                }}
              />
              <motion.div
                className="absolute w-4 h-4 bg-gradient-to-r from-pink-400 to-fuchsia-500 rounded-full shadow-lg"
                style={{
                  left: pos3.x - 8,
                  top: pos3.y - 8,
                }}
                animate={isActive ? {
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                  rotate: [0, 90, 180, 270, 360]
                } : {}}
                transition={{
                  duration: 3 + Math.random(),
                  repeat: isActive ? Infinity : 0,
                  ease: "easeInOut",
                  delay: i * 0.1 + 0.6
                }}
              />
            </div>
          );
        })}

        {Array.from({ length: 6 }, (_, i) => {
          const angle = (i * Math.PI * 2) / 6;
          const radius = 80 + Math.sin(time * 2 + i) * 15;
          const x = 200 + Math.cos(angle + time) * radius;
          const y = 200 + Math.sin(angle + time) * radius;
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              style={{
                left: x - 6,
                top: y - 6,
              }}
              animate={isActive ? {
                scale: [1, 1.4, 1],
                opacity: [0.4, 0.9, 0.4]
              } : {}}
              transition={{
                duration: 2 + Math.random(),
                repeat: isActive ? Infinity : 0,
                ease: "easeInOut",
                delay: i * 0.15
              }}
            />
          );
        })}

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-3xl"
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
          className="absolute top-8 left-8 w-3 h-3 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full"
          animate={isActive ? {
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
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
          className="absolute top-8 right-8 w-3 h-3 bg-gradient-to-r from-pink-400 to-fuchsia-500 rounded-full"
          animate={isActive ? {
            x: [0, -30, 20, 0],
            y: [0, 25, -15, 0],
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
          className="absolute bottom-8 left-8 w-3 h-3 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full"
          animate={isActive ? {
            x: [0, 25, -30, 0],
            y: [0, -20, 25, 0],
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
          className="absolute bottom-8 right-8 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
          animate={isActive ? {
            x: [0, -25, 30, 0],
            y: [0, 20, -25, 0],
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-violet-400/20 rounded-full"
          animate={isActive ? {
            scale: [1, 1.1, 1],
            rotate: [0, 360],
            opacity: [0.2, 0.5, 0.2]
          } : {}}
          transition={{
            duration: 6,
            repeat: isActive ? Infinity : 0,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-purple-400/30 rounded-full"
          animate={isActive ? {
            scale: [1, 1.05, 1],
            rotate: [0, -360],
            opacity: [0.3, 0.6, 0.3]
          } : {}}
          transition={{
            duration: 8,
            repeat: isActive ? Infinity : 0,
            ease: "linear",
            delay: 1
          }}
        />
      </div>

      <motion.button
        className="mt-8 px-10 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-2xl shadow-2xl"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsActive(!isActive)}
        animate={isActive ? { scale: [1, 1.02, 1] } : {}}
        transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
      >
        {isActive ? "Stop" : "Start"} Kaleidoscope
      </motion.button>

      <motion.div
        className="mt-8 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-white/80 text-lg">
          Rotating mirrored patterns creating mesmerizing kaleidoscopic effects
        </p>
      </motion.div>
    </div>
  );
};

export default Kaleidoscope;
