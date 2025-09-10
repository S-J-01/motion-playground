"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const FadeTransition = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Welcome",
      content: "This is the first slide with a fade transition effect.",
      color: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      title: "Features",
      content: "Discover amazing features with smooth fade animations.",
      color: "from-green-500 to-teal-600",
    },
    {
      id: 3,
      title: "Contact",
      content: "Get in touch with us for more information.",
      color: "from-pink-500 to-rose-600",
    },
    {
      id: 4,
      title: "About",
      content: "Learn more about our company and mission.",
      color: "from-yellow-500 to-orange-600",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 p-8">
      <h2 className="text-3xl font-bold text-white mb-8">Fade Transitions</h2>

      <div className="w-full max-w-lg">
        <div className="relative h-64 bg-white rounded-2xl shadow-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].color} flex flex-col items-center justify-center text-white p-8`}
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-2xl font-bold mb-4"
              >
                {slides[currentSlide].title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="text-center text-lg"
              >
                {slides[currentSlide].content}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-between items-center mt-6">
          <motion.button
            className="px-6 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
          >
            Previous
          </motion.button>

          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-white" : "bg-white/30"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          <motion.button
            className="px-6 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
          >
            Next
          </motion.button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center max-w-md"
      >
        <p className="text-gray-300 text-sm">
          Smooth fade transitions with scale effects create engaging content
          switching animations.
        </p>
      </motion.div>
    </div>
  );
};

export default FadeTransition;
