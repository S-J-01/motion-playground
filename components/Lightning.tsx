"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const Lightning = () => {
  const [isActive, setIsActive] = useState(false);
  const [bolts, setBolts] = useState<Array<{ id: number; path: Array<{ x: number; y: number }>; life: number }>>([]);

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        const startY = 50;
        const endY = 350;
        const path: Array<{ x: number; y: number }> = [];
        let currentX = 200;
        let currentY = startY;
        
        path.push({ x: currentX, y: currentY });
        
        while (currentY < endY) {
          currentY += 20 + Math.random() * 30;
          currentX += (Math.random() - 0.5) * 40;
          path.push({ x: currentX, y: currentY });
        }
        
        const newBolt = {
          id: Date.now(),
          path,
          life: 1
        };
        
        setBolts(prev => [...prev.slice(-2), newBolt]);
      }, 800);
      return () => clearInterval(interval);
    }
  }, [isActive]);

  useEffect(() => {
    if (bolts.length > 0) {
      const interval = setInterval(() => {
        setBolts(prev => prev.map(bolt => ({
          ...bolt,
          life: bolt.life - 0.1
        })).filter(bolt => bolt.life > 0));
      }, 50);
      return () => clearInterval(interval);
    }
  }, [bolts.length]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black p-8">
      <motion.h2 
        className="text-4xl font-bold text-white mb-16 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        Lightning
      </motion.h2>

      <div className="relative w-96 h-96 bg-black/30 rounded-3xl border border-yellow-400/20 backdrop-blur-sm overflow-hidden">
        {bolts.map((bolt) => (
          <motion.svg
            key={bolt.id}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: bolt.life }}
          >
            <motion.path
              d={`M ${bolt.path.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')}`}
              fill="none"
              stroke="url(#lightning-gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 1 }}
              animate={{ pathLength: 1, opacity: bolt.life }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="lightning-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FCD34D" stopOpacity="1" />
                <stop offset="50%" stopColor="#FBBF24" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.7" />
              </linearGradient>
            </defs>
          </motion.svg>
        ))}

        {bolts.map((bolt) => (
          <motion.div
            key={`glow-${bolt.id}`}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full"
            style={{
              left: bolt.path[bolt.path.length - 1].x - 4,
              top: bolt.path[bolt.path.length - 1].y - 4,
              boxShadow: `0 0 20px rgba(251, 191, 36, ${bolt.life}), 0 0 40px rgba(251, 191, 36, ${bolt.life * 0.5})`
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [bolt.life, bolt.life * 0.5, 0]
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        <motion.div
          className="absolute top-12 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-500 rounded-full shadow-2xl"
          animate={isActive ? {
            scale: [1, 1.2, 1],
            boxShadow: [
              "0 0 0 0 rgba(251, 191, 36, 0.7)",
              "0 0 0 25px rgba(251, 191, 36, 0)",
              "0 0 0 0 rgba(251, 191, 36, 0)"
            ]
          } : {
            scale: 1,
            boxShadow: "0 0 0 0 rgba(251, 191, 36, 0)"
          }}
          transition={{
            duration: 1.5,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full"
            animate={{
              opacity: [0.3, 0.9, 0.3],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {Array.from({ length: 8 }, (_, i) => {
          const angle = (i * Math.PI * 2) / 8;
          const radius = 60 + Math.sin(Date.now() * 0.01 + i) * 10;
          const x = 200 + Math.cos(angle) * radius;
          const y = 200 + Math.sin(angle) * radius;
          return (
            <motion.div
              key={`spark-${i}`}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full"
              style={{
                left: x - 2,
                top: y - 2,
                boxShadow: "0 0 4px rgba(251, 191, 36, 0.8)"
              }}
              animate={isActive ? {
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              } : {}}
              transition={{
                duration: 1 + Math.random(),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1
              }}
            />
          );
        })}

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-3xl"
          animate={{
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-8 left-8 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
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
          className="absolute top-8 right-8 w-3 h-3 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full"
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
          className="absolute bottom-8 left-8 w-3 h-3 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full"
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
          className="absolute bottom-8 right-8 w-3 h-3 bg-gradient-to-r from-orange-300 to-yellow-400 rounded-full"
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
      </div>

      <motion.button
        className="mt-8 px-10 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-bold rounded-2xl shadow-2xl"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(251, 191, 36, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsActive(!isActive)}
        animate={isActive ? { scale: [1, 1.02, 1] } : {}}
        transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
      >
        {isActive ? "Stop" : "Start"} Lightning
      </motion.button>

      <motion.div
        className="mt-8 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-white/80 text-lg">
          Electrical lightning bolts with jagged paths and glowing effects
        </p>
      </motion.div>
    </div>
  );
};

export default Lightning;
