"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const PulseRipple = () => {
  const [isActive, setIsActive] = useState(false);
  const [ripples, setRipples] = useState<
    Array<{ id: number; x: number; y: number; timestamp: number }>
  >([]);

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        const newRipple = {
          id: Date.now(),
          x: Math.random() * 300 + 50,
          y: Math.random() * 300 + 50,
          timestamp: Date.now(),
        };
        setRipples((prev) => [...prev.slice(-4), newRipple]);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isActive]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      id: Date.now(),
      x,
      y,
      timestamp: Date.now(),
    };
    setRipples((prev) => [...prev.slice(-3), newRipple]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 p-8">
      <motion.h2
        className="text-4xl font-bold text-white mb-16 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        Pulse Ripple
      </motion.h2>

      <div
        className="relative w-96 h-96 bg-black/20 rounded-3xl border border-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden cursor-pointer"
        onClick={handleClick}
      >
        <motion.div
          className="relative w-32 h-32 bg-gradient-to-br from-violet-400 via-purple-500 to-fuchsia-600 rounded-full shadow-2xl"
          animate={
            isActive
              ? {
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                  boxShadow: [
                    "0 0 0 0 rgba(139, 92, 246, 0.7)",
                    "0 0 0 20px rgba(139, 92, 246, 0)",
                    "0 0 0 0 rgba(139, 92, 246, 0)",
                  ],
                }
              : {
                  scale: 1,
                  rotate: 0,
                  boxShadow: "0 0 0 0 rgba(139, 92, 246, 0)",
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

          <motion.div
            className="absolute top-2 left-2 w-4 h-4 bg-white/40 rounded-full"
            animate={
              isActive
                ? {
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                    x: [0, 10, 0],
                    y: [0, -10, 0],
                  }
                : {}
            }
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute top-2 right-2 w-3 h-3 bg-white/50 rounded-full"
            animate={
              isActive
                ? {
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.9, 0.4],
                    x: [0, -8, 0],
                    y: [0, 8, 0],
                  }
                : {}
            }
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />

          <motion.div
            className="absolute bottom-2 left-2 w-3 h-3 bg-white/45 rounded-full"
            animate={
              isActive
                ? {
                    scale: [1, 1.4, 1],
                    opacity: [0.3, 0.8, 0.3],
                    x: [0, 12, 0],
                    y: [0, 12, 0],
                  }
                : {}
            }
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
          />

          <motion.div
            className="absolute bottom-2 right-2 w-4 h-4 bg-white/35 rounded-full"
            animate={
              isActive
                ? {
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.7, 0.4],
                    x: [0, -10, 0],
                    y: [0, -8, 0],
                  }
                : {}
            }
            transition={{
              duration: 2.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.9,
            }}
          />
        </motion.div>

        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="absolute w-4 h-4 bg-gradient-to-r from-violet-400 to-fuchsia-500 rounded-full pointer-events-none"
            style={{
              left: ripple.x - 8,
              top: ripple.y - 8,
            }}
            initial={{
              scale: 0,
              opacity: 1,
            }}
            animate={{
              scale: [0, 3, 6],
              opacity: [1, 0.5, 0],
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
            onAnimationComplete={() => {
              setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
            }}
          />
        ))}

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-3xl"
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
          className="absolute top-8 left-8 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
          animate={
            isActive
              ? {
                  x: [0, 30, -20, 0],
                  y: [0, -25, 15, 0],
                  scale: [1, 1.5, 0.5, 1],
                  opacity: [0.5, 1, 0.3, 0.5],
                }
              : {}
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-8 right-8 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
          animate={
            isActive
              ? {
                  x: [0, -30, 20, 0],
                  y: [0, 25, -15, 0],
                  scale: [1, 0.5, 1.5, 1],
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
          className="absolute bottom-8 left-8 w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
          animate={
            isActive
              ? {
                  x: [0, 25, -30, 0],
                  y: [0, -20, 25, 0],
                  scale: [1, 1.3, 0.7, 1],
                  opacity: [0.3, 0.9, 0.1, 0.3],
                }
              : {}
          }
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute bottom-8 right-8 w-2 h-2 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full"
          animate={
            isActive
              ? {
                  x: [0, -25, 30, 0],
                  y: [0, 20, -25, 0],
                  scale: [1, 0.7, 1.3, 1],
                  opacity: [0.5, 0.7, 0.3, 0.5],
                }
              : {}
          }
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </div>

      <motion.button
        className="mt-8 px-10 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-2xl shadow-2xl"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsActive(!isActive)}
        animate={isActive ? { scale: [1, 1.02, 1] } : {}}
        transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
      >
        {isActive ? "Stop" : "Start"} Pulse
      </motion.button>

      <motion.div
        className="mt-8 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-white/80 text-lg">
          Click anywhere to create ripples, or start the pulse animation
        </p>
      </motion.div>
    </div>
  );
};

export default PulseRipple;
