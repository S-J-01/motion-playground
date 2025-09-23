"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const GravityWell = () => {
  const [isActive, setIsActive] = useState(false);
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      mass: number;
    }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 300 + 50,
      y: Math.random() * 300 + 50,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      mass: Math.random() * 3 + 1,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setParticles((prev) =>
          prev.map((particle) => {
            const centerX = 200;
            const centerY = 200;
            const dx = centerX - particle.x;
            const dy = centerY - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const force = 0.1 / (distance * distance + 1);

            const newVx = particle.vx + (dx / distance) * force;
            const newVy = particle.vy + (dy / distance) * force;

            return {
              ...particle,
              x: particle.x + newVx,
              y: particle.y + newVy,
              vx: newVx * 0.99,
              vy: newVy * 0.99,
            };
          })
        );
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isActive]);

  const resetParticles = () => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 300 + 50,
      y: Math.random() * 300 + 50,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      mass: Math.random() * 3 + 1,
    }));
    setParticles(newParticles);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black p-8">
      <motion.h2
        className="text-4xl font-bold text-white mb-16 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        Gravity Well
      </motion.h2>

      <div className="relative w-96 h-96 bg-black/30 rounded-3xl border border-white/10 backdrop-blur-sm overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 rounded-full shadow-2xl"
          animate={
            isActive
              ? {
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(251, 191, 36, 0.7)",
                    "0 0 0 30px rgba(251, 191, 36, 0)",
                    "0 0 0 0 rgba(251, 191, 36, 0)",
                  ],
                }
              : {
                  scale: 1,
                  boxShadow: "0 0 0 0 rgba(251, 191, 36, 0)",
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

        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg"
            style={{
              left: particle.x,
              top: particle.y,
            }}
            animate={{
              scale: [1, particle.mass, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-3xl"
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-8 left-8 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
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
          className="absolute top-8 right-8 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
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
          className="absolute bottom-8 left-8 w-3 h-3 bg-gradient-to-r from-red-400 to-orange-500 rounded-full"
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
          className="absolute bottom-8 right-8 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"
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

      <div className="flex gap-4 mt-8">
        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold rounded-xl shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? "Stop" : "Start"} Gravity
        </motion.button>

        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-gray-600 to-slate-600 text-white font-semibold rounded-xl shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={resetParticles}
        >
          Reset Particles
        </motion.button>
      </div>

      <motion.div
        className="mt-8 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-white/80 text-lg">
          Watch particles get pulled toward the gravitational center
        </p>
      </motion.div>
    </div>
  );
};

export default GravityWell;
