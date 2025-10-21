"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const SolarSystem = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setTime((prev) => prev + 0.01);
      }, 16);
      return () => clearInterval(interval);
    }
  }, [isActive]);

  const getPlanetPosition = (
    radius: number,
    speed: number,
    offset: number = 0
  ) => {
    const angle = time * speed + offset;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  const planets = [
    {
      name: "Mercury",
      radius: 40,
      speed: 3,
      size: 4,
      color: "from-orange-400 to-yellow-500",
    },
    {
      name: "Venus",
      radius: 60,
      speed: 2.5,
      size: 6,
      color: "from-yellow-300 to-orange-400",
    },
    {
      name: "Earth",
      radius: 80,
      speed: 2,
      size: 6,
      color: "from-blue-400 to-green-500",
    },
    {
      name: "Mars",
      radius: 100,
      speed: 1.5,
      size: 5,
      color: "from-red-400 to-orange-500",
    },
    {
      name: "Jupiter",
      radius: 130,
      speed: 1,
      size: 12,
      color: "from-yellow-500 to-orange-600",
    },
    {
      name: "Saturn",
      radius: 160,
      speed: 0.8,
      size: 10,
      color: "from-yellow-400 to-amber-500",
    },
    {
      name: "Uranus",
      radius: 190,
      speed: 0.6,
      size: 8,
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "Neptune",
      radius: 220,
      speed: 0.4,
      size: 8,
      color: "from-blue-500 to-indigo-600",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black p-8">
      <motion.h2
        className="text-4xl font-bold text-white mb-16 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        Solar System
      </motion.h2>

      <div className="relative w-96 h-96 bg-black/30 rounded-3xl border border-white/10 backdrop-blur-sm overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 rounded-full shadow-2xl"
          animate={
            isActive
              ? {
                  scale: [1, 1.1, 1],
                  rotate: [0, 360],
                  boxShadow: [
                    "0 0 0 0 rgba(251, 191, 36, 0.7)",
                    "0 0 0 30px rgba(251, 191, 36, 0)",
                    "0 0 0 0 rgba(251, 191, 36, 0)",
                  ],
                }
              : {
                  scale: 1,
                  rotate: 0,
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

        {planets.map((planet, index) => {
          const position = getPlanetPosition(
            planet.radius,
            planet.speed,
            (index * Math.PI) / 4
          );
          return (
            <motion.div
              key={planet.name}
              className={`absolute w-${planet.size} h-${planet.size} bg-gradient-to-r ${planet.color} rounded-full shadow-lg`}
              style={{
                left: `calc(50% + ${position.x}px - ${planet.size * 2}px)`,
                top: `calc(50% + ${position.y}px - ${planet.size * 2}px)`,
                width: planet.size * 4,
                height: planet.size * 4,
              }}
              animate={
                isActive
                  ? {
                      scale: [1, 1.1, 1],
                      rotate: [0, 360],
                    }
                  : {}
              }
              transition={{
                duration: 2 + Math.random(),
                repeat: isActive ? Infinity : 0,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full"
                animate={{
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          );
        })}

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
          className="absolute top-8 left-8 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
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
          className="absolute top-8 right-8 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"
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
          className="absolute bottom-8 left-8 w-2 h-2 bg-gradient-to-r from-red-400 to-pink-500 rounded-full"
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
          className="absolute bottom-8 right-8 w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
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

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-yellow-400/10 rounded-full"
          animate={
            isActive
              ? {
                  scale: [1, 1.1, 1],
                  rotate: [0, 360],
                  opacity: [0.1, 0.3, 0.1],
                }
              : {}
          }
          transition={{
            duration: 20,
            repeat: isActive ? Infinity : 0,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-orange-400/15 rounded-full"
          animate={
            isActive
              ? {
                  scale: [1, 1.05, 1],
                  rotate: [0, -360],
                  opacity: [0.2, 0.4, 0.2],
                }
              : {}
          }
          transition={{
            duration: 30,
            repeat: isActive ? Infinity : 0,
            ease: "linear",
            delay: 5,
          }}
        />
      </div>

      <motion.button
        className="mt-8 px-10 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-bold rounded-2xl shadow-2xl"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(251, 191, 36, 0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsActive(!isActive)}
        animate={isActive ? { scale: [1, 1.02, 1] } : {}}
        transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
      >
        {isActive ? "Stop" : "Start"} System
      </motion.button>

      <motion.div
        className="mt-8 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-white/80 text-lg">
          Complete solar system with all eight planets orbiting the sun
        </p>
      </motion.div>
    </div>
  );
};

export default SolarSystem;

