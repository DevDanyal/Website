"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const timeline = [
  {
    year: "2024 - Present",
    role: "AI & Python Developer",
    company: "Freelance",
    description: "Building cutting-edge AI solutions, ML models, and intelligent automation systems for clients worldwide. Specializing in LangChain, OpenAI integration, and custom ML pipelines.",
    skills: ["Python", "LangChain", "OpenAI", "FastAPI", "MLOps"],
  },
  {
    year: "2023 - 2024",
    role: "Full-Stack Developer",
    company: "Tech Innovations",
    description: "Developed scalable web applications using React and Next.js. Implemented CI/CD pipelines and microservices architecture. Led the frontend team on 5+ major projects.",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "AWS"],
  },
  {
    year: "2022 - 2023",
    role: "Python Developer",
    company: "DataFlow Solutions",
    description: "Built data processing pipelines and automation scripts. Created RESTful APIs for data access. Improved system efficiency by 40% through optimized algorithms.",
    skills: ["Python", "Django", "PostgreSQL", "Docker", "Linux"],
  },
  {
    year: "2021 - 2022",
    role: "Junior Developer",
    company: "StartupHub",
    description: "Started professional journey building web applications and learning industry best practices. Contributed to 10+ projects and grew rapidly in a fast-paced environment.",
    skills: ["JavaScript", "React", "MongoDB", "Git", "Agile"],
  },
];

export default function ExperienceTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#2563EB] via-[#06B6D4] to-transparent" />
      
      <div className="space-y-12">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.2 }}
            className={`relative flex flex-col md:flex-row gap-8 items-start ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-gradient-to-br from-[#2563EB]/20 to-[#06B6D4]/10 border-[#2563EB]/30"
                    : "bg-white/[0.02] border-white/5 hover:border-white/10"
                }`}
              >
                <span className="inline-block px-3 py-1 bg-[#2563EB]/20 text-[#2563EB] text-sm rounded-full mb-3">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                  {item.role}
                </h3>
                <p className="text-[#2563EB] font-medium mb-3">{item.company}</p>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-white/5 text-[var(--text-secondary)] text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="relative z-10 w-8 h-8 flex-shrink-0 mx-auto md:mx-0">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`w-full h-full rounded-full border-2 flex items-center justify-center ${
                  activeIndex === index
                    ? "border-[#2563EB] bg-[#2563EB]"
                    : "border-[#2563EB]/50 bg-[#0a0a0a]"
                }`}
              >
                <div className="w-2 h-2 bg-white rounded-full" />
              </motion.div>
            </div>
            
            <div className="flex-1 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}