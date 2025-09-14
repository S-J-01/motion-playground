"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const FloatingElements = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsActive(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const elements = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 20,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2,
    x: Math.random() * 300 - 150,
    y: Math.random() * 200 - 100,
    color: [
      "from-purple-400 to-pink-500",
      "from-blue-400 to-cyan-500",
      "from-green-400 to-emerald-500",
      "from-yellow-400 to-orange-500",
      "from-red-400 to-rose-500",
      "from-indigo-400 to-purple-500",
    ][Math.floor(Math.random() * 6)],
  }));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8 overflow-hidden">
      <motion.h2
        className="text-4xl font-bold text-white mb-16 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Floating Elements
      </motion.h2>

      <div className="relative w-96 h-96 border-2 border-white/20 rounded-3xl backdrop-blur-sm bg-white/5">
        {elements.map((element) => (
          <motion.div
            key={element.id}
            className={`absolute w-${Math.floor(
              element.size / 4
            )} h-${Math.floor(element.size / 4)} bg-gradient-to-br ${
              element.color
            } rounded-full shadow-lg`}
            style={{
              width: element.size,
              height: element.size,
              left: "50%",
              top: "50%",
            }}
            initial={{
              x: 0,
              y: 0,
              scale: 0,
              opacity: 0,
            }}
            animate={
              isActive
                ? {
                    x: element.x,
                    y: element.y,
                    scale: [0, 1, 0.8, 1],
                    opacity: [0, 1, 0.7, 1],
                    rotate: [0, 180, 360],
                  }
                : {}
            }
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.5,
              rotate: 360,
              transition: { duration: 0.5 },
            }}
          />
        ))}

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.button
        className="mt-12 px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-2xl"
        whileHover={{
          scale: 1.1,
          boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsActive(!isActive)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        {isActive ? "Pause" : "Start"} Animation
      </motion.button>

      <motion.div
        className="mt-8 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-white/80 text-lg">
          Interactive floating particles with smooth transitions and hover
          effects
        </p>
      </motion.div>
    </div>
  );
};

export default FloatingElements;
