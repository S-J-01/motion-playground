"use client";

import { motion } from "motion/react";
import { useState } from "react";

const RotatingLoader = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 to-red-100 p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">
        Rotation Animations
      </h2>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="flex flex-col items-center space-y-4">
          <motion.div
            className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            animate={isSpinning ? { rotate: 360 } : { rotate: 0 }}
            transition={{
              duration: 2,
              repeat: isSpinning ? Infinity : 0,
              ease: "linear",
            }}
          />
          <span className="text-sm text-gray-600">Continuous Spin</span>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <motion.div
            className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full"
            animate={isSpinning ? { rotate: [0, 180, 360] } : { rotate: 0 }}
            transition={{
              duration: 1.5,
              repeat: isSpinning ? Infinity : 0,
              ease: "easeInOut",
            }}
          />
          <span className="text-sm text-gray-600">Oscillating</span>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <motion.div
            className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full"
            animate={
              isSpinning ? { rotate: [0, -90, 0, 90, 0] } : { rotate: 0 }
            }
            transition={{
              duration: 2,
              repeat: isSpinning ? Infinity : 0,
              ease: "easeInOut",
            }}
          />
          <span className="text-sm text-gray-600">Back and Forth</span>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <motion.div
            className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full"
            animate={isSpinning ? { rotate: [0, 720] } : { rotate: 0 }}
            transition={{
              duration: 1,
              repeat: isSpinning ? Infinity : 0,
              ease: "easeOut",
            }}
          />
          <span className="text-sm text-gray-600">Double Spin</span>
        </div>
      </div>

      <motion.button
        className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsSpinning(!isSpinning)}
      >
        {isSpinning ? "Stop Rotation" : "Start Rotation"}
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center max-w-md"
      >
        <p className="text-gray-600 text-sm">
          Different rotation patterns demonstrate various easing functions and
          animation types for continuous motion effects.
        </p>
      </motion.div>
    </div>
  );
};

export default RotatingLoader;
