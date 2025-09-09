"use client";

import { motion } from "motion/react";
import { useState } from "react";

const BouncingBall = () => {
  const [isBouncing, setIsBouncing] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Spring Physics Demo
      </h2>

      <div className="relative w-80 h-96 bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden">
        {/* Ground line */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-green-400 to-green-600"></div>

        <motion.div
          className="absolute left-1/2 w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full shadow-lg"
          style={{ x: "-50%" }}
          animate={
            isBouncing
              ? {
                  y: [0, 300, 0],
                  scaleY: [1, 0.8, 1],
                  scaleX: [1, 1.2, 1],
                }
              : {
                  y: 0,
                  scaleY: 1,
                  scaleX: 1,
                }
          }
          transition={{
            duration: 1.2,
            ease: "easeOut",
            times: [0, 0.5, 1],
            repeat: isBouncing ? Infinity : 0,
            repeatType: "loop",
          }}
        />

        <motion.div
          className="absolute bottom-2 left-1/2 w-8 h-2 bg-black/20 rounded-full blur-sm"
          style={{ x: "-50%" }}
          animate={
            isBouncing
              ? {
                  scaleX: [1, 1.5, 1],
                  opacity: [0.2, 0.4, 0.2],
                }
              : {
                  scaleX: 1,
                  opacity: 0.2,
                }
          }
          transition={{
            duration: 1.2,
            ease: "easeOut",
            times: [0, 0.5, 1],
            repeat: isBouncing ? Infinity : 0,
            repeatType: "loop",
          }}
        />
      </div>

      <motion.button
        className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsBouncing(!isBouncing)}
      >
        {isBouncing ? "Stop Bouncing" : "Start Bouncing"}
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-center max-w-md"
      >
        <p className="text-gray-600 text-sm">
          This demonstrates spring physics with squash and stretch effects.
          Notice how the ball compresses when hitting the ground and stretches
          during acceleration.
        </p>
      </motion.div>
    </div>
  );
};

export default BouncingBall;
