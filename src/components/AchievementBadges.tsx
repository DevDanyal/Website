"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Achievement {
  id: number;
  icon: string;
  title: string;
  description: string;
  count?: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    icon: "🚀",
    title: "Projects Delivered",
    description: "Successfully completed projects for clients worldwide",
    count: "50+",
  },
  {
    id: 2,
    icon: "😊",
    title: "Happy Clients",
    description: "Satisfied clients who continue to work with me",
    count: "40+",
  },
  {
    id: 3,
    icon: "☕",
    title: "Cups of Coffee",
    description: "And counting...",
    count: "∞",
  },
  {
    id: 4,
    icon: "💻",
    title: "Lines of Code",
    description: "Written across all projects",
    count: "100K+",
  },
];

export default function AchievementBadges() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {achievements.map((achievement, index) => (
        <motion.div
          key={achievement.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="text-center p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-[#2563EB]/30 transition-all"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 5,
              delay: index * 0.5
            }}
            className="text-4xl mb-3"
          >
            {achievement.icon}
          </motion.div>
          <p className="text-2xl font-bold text-[#2563EB] mb-1">
            {achievement.count}
          </p>
          <p className="text-sm font-medium text-[var(--text-primary)]">
            {achievement.title}
          </p>
        </motion.div>
      ))}
    </div>
  );
}