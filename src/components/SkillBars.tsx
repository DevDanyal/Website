"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const skills = {
  "AI & Machine Learning": [
    { name: "Python", level: 95 },
    { name: "Machine Learning", level: 90 },
    { name: "Deep Learning", level: 85 },
    { name: "NLP / LangChain", level: 88 },
    { name: "TensorFlow / PyTorch", level: 82 },
  ],
  "Backend & APIs": [
    { name: "FastAPI", level: 92 },
    { name: "Django", level: 85 },
    { name: "REST APIs", level: 95 },
    { name: "GraphQL", level: 78 },
    { name: "PostgreSQL", level: 88 },
  ],
  "Frontend": [
    { name: "React / Next.js", level: 88 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Three.js / R3F", level: 75 },
    { name: "Framer Motion", level: 80 },
  ],
  "DevOps & Cloud": [
    { name: "Docker", level: 85 },
    { name: "AWS / GCP", level: 80 },
    { name: "CI/CD Pipelines", level: 78 },
    { name: "Linux", level: 82 },
    { name: "Git", level: 95 },
  ],
};

export default function SkillBars() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof skills>("AI & Machine Learning");

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {(Object.keys(skills) as Array<keyof typeof skills>).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? "bg-[#2563EB] text-white shadow-lg shadow-[#2563EB]/25"
                : "bg-white/5 text-[var(--text-secondary)] hover:bg-white/10"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="space-y-5">
        {skills[activeCategory].map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex justify-between mb-2">
              <span className="text-[var(--text-primary)] font-medium">{skill.name}</span>
              <span className="text-[var(--text-secondary)]">{skill.level}%</span>
            </div>
            <div className="h-3 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 + 0.2, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] rounded-full relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}