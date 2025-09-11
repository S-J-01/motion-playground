"use client";

import { motion } from "motion/react";
import { useState } from "react";

const MorphingShape = () => {
  const [currentShape, setCurrentShape] = useState(0);

  const shapes = [
    { name: "Circle", borderRadius: "50%" },
    { name: "Square", borderRadius: "0%" },
    { name: "Diamond", borderRadius: "0%", rotate: 45 },
    { name: "Rounded", borderRadius: "25%" },
    { name: "Pill", borderRadius: "50px" },
  ];

  const nextShape = () => {
    setCurrentShape((prev) => (prev + 1) % shapes.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-emerald-100 to-teal-200 p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">Shape Morphing</h2>

      <div className="relative w-80 h-80 bg-white rounded-2xl shadow-xl border-2 border-gray-200 flex items-center justify-center">
        <motion.div
          className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-600 shadow-lg"
          animate={{
            borderRadius: shapes[currentShape].borderRadius,
            rotate: shapes[currentShape].rotate || 0,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          whileHover={{
            scale: 1.2,
            rotate: (shapes[currentShape].rotate || 0) + 10,
            transition: { duration: 0.3 },
          }}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-600/20 rounded-2xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="mt-8 text-center"
        key={currentShape}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">
          {shapes[currentShape].name}
        </h3>
        <p className="text-gray-600 text-sm">
          Shape {currentShape + 1} of {shapes.length}
        </p>
      </motion.div>

      <motion.button
        className="mt-6 px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={nextShape}
      >
        Morph Shape
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center max-w-md"
      >
        <p className="text-gray-600 text-sm">
          Experience smooth shape transitions with dynamic border radius and
          rotation animations.
        </p>
      </motion.div>
    </div>
  );
};

export default MorphingShape;
