"use client";

import { motion } from "framer-motion";

const clients = [
  "TechCorp", "InnovateAI", "DataFlow", "CloudScale", 
  "NextGen", "SmartAI", "ByteForge", "DevStack",
  "ApexTech", "QuantumLab", "CodeCraft", "FutureSoft"
];

export default function ClientLogos() {
  return (
    <div className="relative overflow-hidden py-8">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-transparent to-[var(--background)] z-10 pointer-events-none" />
      
      <motion.div
        className="flex gap-12"
        animate={{ x: [0, -50 + "%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...clients, ...clients].map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-8 py-4 bg-white/[0.02] border border-white/5 rounded-xl"
          >
            <span className="text-xl font-bold text-[var(--text-secondary)]/50 whitespace-nowrap">
              {client}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}