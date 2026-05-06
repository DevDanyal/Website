"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VisitorCounterProps {
  initialCount?: number;
}

export default function VisitorCounter({ initialCount = 1247 }: VisitorCounterProps) {
  const [count, setCount] = useState(initialCount);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-4 right-4 z-50 hidden md:block"
      >
        <div className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 shadow-lg">
          <div className="flex items-center gap-2">
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-500 rounded-full"
              />
              <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping" />
            </div>
            <span className="text-sm text-[--text-secondary]">
              <span className="text-[--text-primary] font-semibold">{count.toLocaleString()}</span> views
            </span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}