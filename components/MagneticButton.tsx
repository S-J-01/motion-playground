"use client";

import { motion } from "motion/react";
import { useState, useRef } from "react";

const MagneticButton = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      setMousePosition({
        x: deltaX * 0.3,
        y: deltaY * 0.3,
      });
    }
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-8">
      <motion.h2
        className="text-4xl font-bold text-white mb-16 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        Magnetic Button
      </motion.h2>

      <div className="relative w-96 h-96 bg-black/20 rounded-3xl border border-white/10 backdrop-blur-sm flex items-center justify-center">
        <motion.div
          ref={buttonRef}
          className="relative w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl shadow-2xl cursor-pointer flex items-center justify-center"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? [0, 2, -2, 0] : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          whileTap={{
            scale: 0.95,
            transition: { duration: 0.1 },
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl"
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          />

          <motion.span
            className="text-white font-bold text-lg z-10"
            animate={{
              scale: isHovered ? 1.1 : 1,
              y: isHovered ? -2 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            Hover Me
          </motion.span>

          <motion.div
            className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-0"
            animate={{
              opacity: isHovered ? 0.3 : 0,
              scale: isHovered ? 1.2 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl"
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
          className="absolute top-8 left-8 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-8 right-8 w-4 h-4 bg-gradient-to-r from-green-400 to-teal-500 rounded-full"
          animate={{
            x: [0, -20, 0],
            y: [0, 10, 0],
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute bottom-8 left-8 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
          animate={{
            x: [0, 15, 0],
            y: [0, 15, 0],
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute bottom-8 right-8 w-4 h-4 bg-gradient-to-r from-red-400 to-pink-500 rounded-full"
          animate={{
            x: [0, -15, 0],
            y: [0, -15, 0],
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      <motion.div
        className="mt-8 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-white/80 text-lg">
          Move your mouse around the button to see the magnetic attraction
          effect
        </p>
      </motion.div>
    </div>
  );
};

export default MagneticButton;
