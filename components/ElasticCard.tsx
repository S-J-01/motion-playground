"use client";

import { motion } from "motion/react";
import { useState } from "react";

const ElasticCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    { id: 1, title: "Creative", color: "from-pink-500 to-rose-500" },
    { id: 2, title: "Innovative", color: "from-blue-500 to-cyan-500" },
    { id: 3, title: "Dynamic", color: "from-green-500 to-emerald-500" },
    { id: 4, title: "Elegant", color: "from-purple-500 to-violet-500" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <motion.h2
        className="text-4xl font-bold text-gray-800 mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        Elastic Cards
      </motion.h2>

      <div className="grid grid-cols-2 gap-8 max-w-4xl">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className={`relative w-64 h-48 bg-gradient-to-br ${card.color} rounded-2xl shadow-xl cursor-pointer overflow-hidden`}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{
              opacity: 1,
              scale: isExpanded ? 1.1 : 1,
              y: 0,
              rotate: isExpanded ? [0, 2, -2, 0] : 0,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              y: -10,
              transition: { duration: 0.3, type: "spring", stiffness: 300 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.1 },
            }}
            onHoverStart={() => setHoveredCard(card.id)}
            onHoverEnd={() => setHoveredCard(null)}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              animate={{
                opacity: hoveredCard === card.id ? 0.3 : 0.1,
                scale: hoveredCard === card.id ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            />

            <motion.h3
              className="absolute top-6 left-6 text-2xl font-bold text-white z-10"
              animate={{
                scale: hoveredCard === card.id ? 1.1 : 1,
                x: hoveredCard === card.id ? 5 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {card.title}
            </motion.h3>

            <motion.div
              className="absolute bottom-6 right-6 w-12 h-12 bg-white/30 rounded-full flex items-center justify-center"
              animate={{
                scale: hoveredCard === card.id ? 1.2 : 1,
                rotate: hoveredCard === card.id ? 45 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-6 h-6 bg-white rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            <motion.div
              className="absolute inset-0 border-2 border-white/50 rounded-2xl"
              animate={{
                scale: hoveredCard === card.id ? 1.05 : 1,
                opacity: hoveredCard === card.id ? 1 : 0.5,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>

      <motion.button
        className="mt-12 px-10 py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold rounded-2xl shadow-2xl"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        animate={{
          scale: isExpanded ? [1, 1.02, 1] : 1,
        }}
        transition={{ duration: 0.5 }}
      >
        {isExpanded ? "Collapse All" : "Expand All"}
      </motion.button>

      <motion.div
        className="mt-8 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <p className="text-gray-600 text-lg">
          Interactive cards with elastic animations and smooth hover effects
        </p>
      </motion.div>
    </div>
  );
};

export default ElasticCard;
