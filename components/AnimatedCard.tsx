"use client";

import { motion } from "motion/react";

const AnimatedCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
          rotateX: -15,
          y: 50,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotateX: 0,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          staggerChildren: 0.1,
        }}
        whileHover={{
          scale: 1.05,
          rotateY: 5,
          rotateX: 5,
          transition: { duration: 0.3 },
        }}
        whileTap={{
          scale: 0.95,
          transition: { duration: 0.1 },
        }}
        className="relative max-w-sm w-full bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 cursor-pointer overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-3xl"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2))",
              "linear-gradient(45deg, rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))",
              "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6"
          >
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mb-4"
              whileHover={{
                rotate: [0, -10, 10, -10, 0],
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
            >
              <motion.span
                className="text-2xl"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                ✨
              </motion.span>
            </motion.div>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl font-bold text-white mb-3"
          >
            Motion Magic
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-white/80 mb-6 leading-relaxed"
          >
            Experience smooth animations and delightful interactions with this
            animated card component.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg"
            onClick={() => alert("Card clicked! ✨")}
          >
            Explore More
          </motion.button>
        </div>

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}

        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0"
          whileHover={{
            opacity: 1,
            boxShadow: "0 0 50px rgba(168, 85, 247, 0.5)",
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
};

export default AnimatedCard;
