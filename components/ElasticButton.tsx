"use client";

import { motion } from "motion/react";
import { useState } from "react";

const ElasticButton = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-rose-100 to-pink-200 p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">
        Elastic Interactions
      </h2>

      <div className="flex flex-col items-center space-y-12">
        <motion.button
          className="relative px-12 py-6 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold text-xl rounded-2xl shadow-xl overflow-hidden"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 20px 40px rgba(244, 63, 94, 0.3)",
          }}
          whileTap={{
            scale: 0.9,
            transition: { type: "spring", stiffness: 400, damping: 17 },
          }}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onMouseLeave={() => setIsPressed(false)}
          onClick={handleClick}
          animate={{
            scale: isPressed ? 0.9 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
            animate={{
              x: isPressed ? "100%" : "-100%",
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
          />

          <motion.span
            className="relative z-10"
            animate={{
              y: isPressed ? 2 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
          >
            Click Me!
          </motion.span>

          <motion.div
            className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center"
            animate={{
              scale: clickCount > 0 ? [1, 1.3, 1] : 0,
              rotate: clickCount > 0 ? [0, 360] : 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <span className="text-xs font-bold text-gray-800">
              {clickCount}
            </span>
          </motion.div>
        </motion.button>

        <div className="grid grid-cols-3 gap-6">
          <motion.button
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl"
            whileHover={{
              scale: 1.05,
              rotate: [0, -5, 5, 0],
            }}
            whileTap={{
              scale: 0.95,
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
          >
            Bounce
          </motion.button>

          <motion.button
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl"
            whileHover={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            whileTap={{
              scale: 0.8,
              rotate: [0, -180, -360],
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
          >
            Spin
          </motion.button>

          <motion.button
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-violet-500 text-white font-semibold rounded-xl"
            whileHover={{
              scaleX: 1.2,
              scaleY: 0.8,
            }}
            whileTap={{
              scaleX: 0.8,
              scaleY: 1.2,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
          >
            Squash
          </motion.button>
        </div>

        <motion.div
          className="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center"
          whileHover={{
            scale: 1.2,
            rotate: 360,
            borderRadius: ["50%", "20%", "50%"],
          }}
          whileTap={{
            scale: 0.8,
            rotate: -180,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
        >
          <motion.span
            className="text-white text-2xl"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            🎯
          </motion.span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center max-w-md"
      >
        <p className="text-gray-600 text-sm">
          Experience elastic spring physics with bouncy interactions and
          satisfying feedback animations.
        </p>
      </motion.div>
    </div>
  );
};

export default ElasticButton;
