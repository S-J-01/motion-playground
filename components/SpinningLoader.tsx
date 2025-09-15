"use client";

import { motion } from "motion/react";
import { useState } from "react";

const SpinningLoader = () => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <motion.h2
        className="text-3xl font-bold text-gray-800 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Spinning Loader
      </motion.h2>

      <div className="relative w-80 h-80 bg-white rounded-3xl shadow-2xl border border-gray-200 flex items-center justify-center">
        <motion.div
          className="relative w-32 h-32"
          animate={isLoading ? { rotate: 360 } : { rotate: 0 }}
          transition={{
            duration: 1,
            repeat: isLoading ? Infinity : 0,
            ease: "linear",
          }}
        >
          <motion.div
            className="absolute w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            style={{ top: 0, left: "50%", transform: "translateX(-50%)" }}
            animate={
              isLoading
                ? {
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }
                : {}
            }
            transition={{
              duration: 0.5,
              repeat: isLoading ? Infinity : 0,
              delay: 0,
            }}
          />
          <motion.div
            className="absolute w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-full"
            style={{ top: "50%", right: 0, transform: "translateY(-50%)" }}
            animate={
              isLoading
                ? {
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }
                : {}
            }
            transition={{
              duration: 0.5,
              repeat: isLoading ? Infinity : 0,
              delay: 0.125,
            }}
          />
          <motion.div
            className="absolute w-8 h-8 bg-gradient-to-r from-red-500 to-pink-600 rounded-full"
            style={{ bottom: 0, left: "50%", transform: "translateX(-50%)" }}
            animate={
              isLoading
                ? {
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }
                : {}
            }
            transition={{
              duration: 0.5,
              repeat: isLoading ? Infinity : 0,
              delay: 0.25,
            }}
          />
          <motion.div
            className="absolute w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full"
            style={{ top: "50%", left: 0, transform: "translateY(-50%)" }}
            animate={
              isLoading
                ? {
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }
                : {}
            }
            transition={{
              duration: 0.5,
              repeat: isLoading ? Infinity : 0,
              delay: 0.375,
            }}
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl"
          animate={
            isLoading
              ? {
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.05, 1],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: isLoading ? Infinity : 0,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.button
        className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={startLoading}
        disabled={isLoading}
        animate={isLoading ? { scale: [1, 1.02, 1] } : {}}
        transition={{ duration: 0.5, repeat: isLoading ? Infinity : 0 }}
      >
        {isLoading ? "Loading..." : "Start Loading"}
      </motion.button>

      <motion.div
        className="mt-6 text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-gray-600">
          Watch the colorful dots spin and pulse in a mesmerizing pattern
        </p>
      </motion.div>
    </div>
  );
};

export default SpinningLoader;
