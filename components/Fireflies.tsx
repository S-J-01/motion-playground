"use client";

import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

const Fireflies = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    const id = setInterval(() => setTime((t) => t + 0.02), 16);
    return () => clearInterval(id);
  }, [isActive]);

  const seeds = useMemo(
    () =>
      Array.from({ length: 30 }, () => ({
        x: Math.random() * 320 + 20,
        y: Math.random() * 320 + 20,
        ampX: Math.random() * 25 + 10,
        ampY: Math.random() * 18 + 8,
        freqX: Math.random() * 1.2 + 0.4,
        freqY: Math.random() * 1.2 + 0.4,
        phase: Math.random() * Math.PI * 2,
        size: Math.random() * 6 + 4,
        hue: Math.floor(Math.random() * 60) + 40,
      })),
    []
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 p-8">
      <motion.h2
        className="text-4xl font-bold text-white mb-16 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        Fireflies
      </motion.h2>

      <div className="relative w-96 h-96 rounded-3xl border border-emerald-300/20 bg-emerald-900/20 backdrop-blur-sm overflow-hidden">
        {seeds.map((s, i) => {
          const x = s.x + Math.sin(time * s.freqX + s.phase) * s.ampX;
          const y = s.y + Math.cos(time * s.freqY + s.phase) * s.ampY;
          const glow = `0 0 12px hsla(${s.hue}, 90%, 70%, 0.9), 0 0 24px hsla(${s.hue}, 100%, 60%, 0.6)`;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: x,
                top: y,
                width: s.size,
                height: s.size,
                background: `radial-gradient(circle at 30% 30%, hsla(${s.hue}, 100%, 80%, 1) 0%, hsla(${s.hue}, 100%, 60%, 0.9) 40%, transparent 70%)`,
                boxShadow: glow,
                filter: "blur(0.3px)",
                borderRadius: 9999,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={
                isActive
                  ? {
                      scale: [0.9, 1.2, 0.95, 1.1, 1],
                      opacity: [0.2, 1, 0.6, 1, 0.8],
                    }
                  : { scale: 1, opacity: 0.7 }
              }
              transition={{
                duration: 2.4 + (i % 5) * 0.1,
                repeat: isActive ? Infinity : 0,
                ease: "easeInOut",
                delay: (i % 8) * 0.05,
              }}
              whileHover={{ scale: 1.6, opacity: 1 }}
            />
          );
        })}

        <motion.div
          className="pointer-events-none absolute inset-0"
          animate={{ opacity: isActive ? [0.1, 0.35, 0.1] : 0.1 }}
          transition={{ duration: 3, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(100px 100px at 20% 30%, rgba(16,185,129,0.15), transparent 60%), radial-gradient(120px 120px at 80% 70%, rgba(16,185,129,0.12), transparent 60%)",
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={isActive ? { scale: [1, 1.05, 1], opacity: [0.15, 0.3, 0.15] } : { opacity: 0.15 }}
          transition={{ duration: 4, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
          style={{
            width: 160,
            height: 160,
            borderRadius: 9999,
            boxShadow: "0 0 80px 20px rgba(16,185,129,0.15)",
          }}
        />
      </div>

      <motion.button
        className="mt-8 px-10 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-2xl shadow-2xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsActive((v) => !v)}
        animate={isActive ? { scale: [1, 1.02, 1] } : {}}
        transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
      >
        {isActive ? "Pause" : "Start"} Fireflies
      </motion.button>

      <motion.div
        className="mt-8 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-white/80 text-lg">Glowing fireflies wandering with smooth, organic motion</p>
      </motion.div>
    </div>
  );
};

export default Fireflies;
