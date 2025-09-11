"use client";

import { motion } from "motion/react";
import { useState } from "react";

const ParticleSystem = () => {
  const [isActive, setIsActive] = useState(false);

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8">
      <h2 className="text-3xl font-bold text-white mb-12">Particle System</h2>

      <div className="relative w-96 h-96 bg-black/20 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={
              isActive
                ? {
                    y: [0, -200, 0],
                    x: [0, Math.random() * 100 - 50, 0],
                    scale: [1, 1.5, 0.5, 1],
                    opacity: [0.8, 1, 0.3, 0.8],
                    rotate: [0, 360],
                  }
                : {
                    y: 0,
                    x: 0,
                    scale: 1,
                    opacity: 0.8,
                    rotate: 0,
                  }
            }
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: isActive ? Infinity : 0,
              ease: "easeInOut",
            }}
          />
        ))}

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5"
          animate={
            isActive
              ? {
                  opacity: [0.1, 0.3, 0.1],
                }
              : { opacity: 0.1 }
          }
          transition={{
            duration: 2,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
          animate={
            isActive
              ? {
                  scaleX: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }
              : {
                  scaleX: 1,
                  opacity: 0.6,
                }
          }
          transition={{
            duration: 1.5,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.button
        className="mt-8 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? "Stop Particles" : "Start Particles"}
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center max-w-md"
      >
        <p className="text-white/80 text-sm">
          Watch as particles float and dance through space with organic movement
          patterns and dynamic scaling effects.
        </p>
      </motion.div>
    </div>
  );
};

export default ParticleSystem;
