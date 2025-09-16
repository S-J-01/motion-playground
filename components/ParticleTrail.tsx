"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const ParticleTrail = () => {
  const [isActive, setIsActive] = useState(false);
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 400,
      y: Math.random() * 300,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  const resetParticles = () => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 400,
      y: Math.random() * 300,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8">
      <motion.h2
        className="text-4xl font-bold text-white mb-16 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        Particle Trail
      </motion.h2>

      <div className="relative w-96 h-96 bg-black/30 rounded-3xl border border-white/20 backdrop-blur-sm overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg"
            style={{
              left: particle.x,
              top: particle.y,
            }}
            initial={{
              scale: 0,
              opacity: 0,
              x: 0,
              y: 0,
            }}
            animate={
              isActive
                ? {
                    scale: [0, 1, 0.8, 1],
                    opacity: [0, 1, 0.6, 1],
                    x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
                    y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
                    rotate: [0, 180, 360],
                  }
                : {}
            }
            transition={{
              duration: 3 + Math.random() * 2,
              delay: particle.delay,
              repeat: isActive ? Infinity : 0,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 2,
              rotate: 360,
              transition: { duration: 0.3 },
            }}
          />
        ))}

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl"
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-white/40 rounded-full"
          animate={
            isActive
              ? {
                  scale: [1, 1.3, 1],
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
          animate={
            isActive
              ? {
                  scale: [1, 1.2, 1],
                  rotate: [0, -360],
                  y: [0, -15, 0],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="flex gap-4 mt-8">
        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? "Pause" : "Start"} Trail
        </motion.button>

        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg"
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
          Interactive particle system with dynamic movement and trail effects
        </p>
      </motion.div>
    </div>
  );
};

export default ParticleTrail;
