"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const NeuralNetwork = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setTime(prev => prev + 0.02);
      }, 16);
      return () => clearInterval(interval);
    }
  }, [isActive]);

  const getNodePosition = (layer: number, node: number, totalNodes: number) => {
    const x = 80 + layer * 120;
    const y = 100 + (node * 200) / (totalNodes + 1);
    return { x, y };
  };

  const layers = [
    { nodes: 4, color: "from-blue-400 to-cyan-500" },
    { nodes: 6, color: "from-purple-400 to-pink-500" },
    { nodes: 4, color: "from-green-400 to-emerald-500" },
    { nodes: 2, color: "from-orange-400 to-red-500" }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 p-8">
      <motion.h2 
        className="text-4xl font-bold text-white mb-16 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        Neural Network
      </motion.h2>

      <div className="relative w-96 h-96 bg-black/20 rounded-3xl border border-purple-400/20 backdrop-blur-sm overflow-hidden">
        {layers.map((layer, layerIndex) => (
          <div key={layerIndex}>
            {Array.from({ length: layer.nodes }, (_, nodeIndex) => {
              const position = getNodePosition(layerIndex, nodeIndex, layer.nodes);
              return (
                <motion.div
                  key={`${layerIndex}-${nodeIndex}`}
                  className={`absolute w-6 h-6 bg-gradient-to-r ${layer.color} rounded-full shadow-lg`}
                  style={{
                    left: position.x - 12,
                    top: position.y - 12,
                  }}
                  animate={isActive ? {
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6],
                    boxShadow: [
                      "0 0 0 0 rgba(168, 85, 247, 0.7)",
                      "0 0 0 10px rgba(168, 85, 247, 0)",
                      "0 0 0 0 rgba(168, 85, 247, 0)"
                    ]
                  } : {}}
                  transition={{
                    duration: 2 + Math.random(),
                    repeat: isActive ? Infinity : 0,
                    ease: "easeInOut",
                    delay: (layerIndex + nodeIndex) * 0.1
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        ))}

        {layers.slice(0, -1).map((layer, layerIndex) => {
          const nextLayer = layers[layerIndex + 1];
          return layer.nodes * nextLayer.nodes > 0 && (
            <div key={`connections-${layerIndex}`}>
              {Array.from({ length: layer.nodes }, (_, nodeIndex) => {
                const fromPos = getNodePosition(layerIndex, nodeIndex, layer.nodes);
                return Array.from({ length: nextLayer.nodes }, (_, nextNodeIndex) => {
                  const toPos = getNodePosition(layerIndex + 1, nextNodeIndex, nextLayer.nodes);
                  const midX = (fromPos.x + toPos.x) / 2;
                  const midY = (fromPos.y + toPos.y) / 2;
                  return (
                    <motion.div
                      key={`${layerIndex}-${nodeIndex}-${nextNodeIndex}`}
                      className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                      style={{
                        left: midX - 2,
                        top: midY - 2,
                      }}
                      animate={isActive ? {
                        scale: [1, 2, 1],
                        opacity: [0.3, 1, 0.3],
                        x: [0, Math.sin(time * 2 + nodeIndex) * 5, 0],
                        y: [0, Math.cos(time * 1.5 + nextNodeIndex) * 3, 0]
                      } : {}}
                      transition={{
                        duration: 1.5 + Math.random(),
                        repeat: isActive ? Infinity : 0,
                        ease: "easeInOut",
                        delay: (layerIndex + nodeIndex + nextNodeIndex) * 0.05
                      }}
                    />
                  );
                });
              });
            </div>
          );
        })}

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl"
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-8 left-8 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"
          animate={isActive ? {
            x: [0, 25, -15, 0],
            y: [0, -20, 10, 0],
            scale: [1, 1.3, 0.7, 1],
            opacity: [0.5, 1, 0.3, 0.5]
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-8 right-8 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
          animate={isActive ? {
            x: [0, -25, 15, 0],
            y: [0, 20, -10, 0],
            scale: [1, 0.7, 1.3, 1],
            opacity: [0.4, 0.8, 0.2, 0.4]
          } : {}}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        <motion.div
          className="absolute bottom-8 left-8 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
          animate={isActive ? {
            x: [0, 20, -25, 0],
            y: [0, -15, 20, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.3, 0.9, 0.1, 0.3]
          } : {}}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div
          className="absolute bottom-8 right-8 w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
          animate={isActive ? {
            x: [0, -20, 25, 0],
            y: [0, 15, -20, 0],
            scale: [1, 0.8, 1.2, 1],
            opacity: [0.5, 0.7, 0.3, 0.5]
          } : {}}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-purple-400/20 rounded-full"
          animate={isActive ? {
            scale: [1, 1.1, 1],
            rotate: [0, 360],
            opacity: [0.2, 0.5, 0.2]
          } : {}}
          transition={{
            duration: 8,
            repeat: isActive ? Infinity : 0,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-pink-400/30 rounded-full"
          animate={isActive ? {
            scale: [1, 1.05, 1],
            rotate: [0, -360],
            opacity: [0.3, 0.6, 0.3]
          } : {}}
          transition={{
            duration: 12,
            repeat: isActive ? Infinity : 0,
            ease: "linear",
            delay: 2
          }}
        />
      </div>

      <motion.button
        className="mt-8 px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-2xl"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsActive(!isActive)}
        animate={isActive ? { scale: [1, 1.02, 1] } : {}}
        transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
      >
        {isActive ? "Stop" : "Start"} Network
      </motion.button>

      <motion.div
        className="mt-8 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-white/80 text-lg">
          Neural network visualization with animated connections and data flow
        </p>
      </motion.div>
    </div>
  );
};

export default NeuralNetwork;
