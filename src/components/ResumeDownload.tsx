"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ResumeDownload() {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Danyal_Arshad_Resume.pdf";
    link.click();
  };

  return (
    <motion.button
      onClick={handleDownload}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white rounded-xl font-medium overflow-hidden group"
    >
      <span className="relative z-10 flex items-center gap-3">
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        Download Resume
      </span>
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#06B6D4] to-[#2563EB]"
        initial={{ x: "100%" }}
        animate={{ x: isHovered ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute top-0 left-0 w-full h-full bg-white/10 animate-pulse" />
      </div>
    </motion.button>
  );
}