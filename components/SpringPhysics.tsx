"use client";

import { motion } from "motion/react";
import { useState } from "react";

const SpringPhysics = () => {
  const [isActive, setIsActive] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 p-8">
      <motion.h2
        className="text-4xl font-bold text-white mb-16 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        Spring Physics
      </motion.h2>

      <div className="relative w-96 h-96 bg-black/20 rounded-3xl border border-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-orange-400 via-red-500 to-pink-600 rounded-full cursor-pointer shadow-2xl"
          animate={
            isActive
              ? {
                  scale: [1, 1.2, 0.8, 1.1, 0.9, 1],
                  rotate: [0, 10, -10, 5, -5, 0],
                }
              : clicked
              ? {
                  scale: [1, 1.5, 0.7, 1.2, 0.9, 1],
                  rotate: [0, 180, 360],
                }
              : {
                  scale: 1,
                  rotate: 0,
                }
          }
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 10,
            mass: 1,
            duration: isActive ? 2 : 1,
          }}
          whileHover={{
            scale: 1.2,
            rotate: 15,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 10,
            },
          }}
          whileTap={{
            scale: 0.8,
            rotate: -15,
            transition: {
              type: "spring",
              stiffness: 500,
              damping: 15,
            },
          }}
          onClick={handleClick}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute top-20 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
          animate={
            isActive
              ? {
                  y: [0, -30, 0],
                  scale: [1, 1.3, 1],
                }
              : {}
          }
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 8,
            repeat: isActive ? Infinity : 0,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
          animate={
            isActive
              ? {
                  y: [0, 30, 0],
                  scale: [1, 1.4, 1],
                }
              : {}
          }
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 10,
            repeat: isActive ? Infinity : 0,
            repeatType: "reverse",
            delay: 0.2,
          }}
        />

        <motion.div
          className="absolute top-1/2 left-20 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
          animate={
            isActive
              ? {
                  x: [0, -30, 0],
                  scale: [1, 1.3, 1],
                }
              : {}
          }
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 9,
            repeat: isActive ? Infinity : 0,
            repeatType: "reverse",
            delay: 0.4,
          }}
        />

        <motion.div
          className="absolute top-1/2 right-20 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
          animate={
            isActive
              ? {
                  x: [0, 30, 0],
                  scale: [1, 1.4, 1],
                }
              : {}
          }
          transition={{
            type: "spring",
            stiffness: 240,
            damping: 11,
            repeat: isActive ? Infinity : 0,
            repeatType: "reverse",
            delay: 0.6,
          }}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-3xl"
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
          className="absolute top-8 left-8 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
          animate={
            isActive
              ? {
                  x: [0, 30, -20, 0],
                  y: [0, -25, 15, 0],
                }
              : {}
          }
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 12,
            repeat: isActive ? Infinity : 0,
          }}
        />

        <motion.div
          className="absolute top-8 right-8 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
          animate={
            isActive
              ? {
                  x: [0, -30, 20, 0],
                  y: [0, 25, -15, 0],
                }
              : {}
          }
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
            repeat: isActive ? Infinity : 0,
            delay: 0.3,
          }}
        />

        <motion.div
          className="absolute bottom-8 left-8 w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
          animate={
            isActive
              ? {
                  x: [0, 25, -30, 0],
                  y: [0, -20, 25, 0],
                }
              : {}
          }
          transition={{
            type: "spring",
            stiffness: 190,
            damping: 11,
            repeat: isActive ? Infinity : 0,
            delay: 0.6,
          }}
        />

        <motion.div
          className="absolute bottom-8 right-8 w-3 h-3 bg-gradient-to-r from-green-400 to-teal-500 rounded-full"
          animate={
            isActive
              ? {
                  x: [0, -25, 30, 0],
                  y: [0, 20, -25, 0],
                }
              : {}
          }
          transition={{
            type: "spring",
            stiffness: 210,
            damping: 9,
            repeat: isActive ? Infinity : 0,
            delay: 0.9,
          }}
        />
      </div>

      <div className="flex gap-4 mt-8">
        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl shadow-lg"
          whileHover={{
            scale: 1.05,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
          whileTap={{
            scale: 0.95,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? "Stop" : "Start"} Springs
        </motion.button>

        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg"
          whileHover={{
            scale: 1.05,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
          whileTap={{
            scale: 0.95,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
          onClick={handleClick}
        >
          Bounce Center
        </motion.button>
      </div>

      <motion.div
        className="mt-8 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
      >
        <p className="text-white/80 text-lg">
          Natural spring physics with bouncy, elastic animations
        </p>
      </motion.div>
    </div>
  );
};

export default SpringPhysics;
