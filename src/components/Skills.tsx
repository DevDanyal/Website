"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "AI & Machine Learning",
    skills: ["Python", "PyTorch", "TensorFlow", "LangChain", "OpenAI API", "NLP", "Computer Vision"],
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    category: "Backend Development",
    skills: ["FastAPI", "Django", "Node.js", "REST APIs", "GraphQL", "WebSocket", "Redis"],
    gradient: "from-purple-500 to-pink-400",
  },
  {
    category: "Frontend Development",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
    gradient: "from-orange-500 to-amber-400",
  },
  {
    category: "Database & DevOps",
    skills: ["PostgreSQL", "MongoDB", "Docker", "AWS", "Vercel", "CI/CD", "Linux"],
    gradient: "from-emerald-500 to-teal-400",
  },
];

const tools = [
  { name: "Git", level: 95 },
  { name: "VS Code", level: 92 },
  { name: "Docker", level: 85 },
  { name: "AWS", level: 78 },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="skills"
      className="relative py-24 sm:py-32 px-6 overflow-hidden"
    >
      <div className="dark-only absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/10 to-transparent blur-[150px]" />
      <div className="light-mode-hidden absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 to-transparent blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-purple-500 tracking-widest uppercase">
            Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] mt-4">
            Tech Stack
          </h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-hover)] transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${cat.gradient} bg-opacity-20`}>
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${cat.gradient}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + skillIndex * 0.05,
                      }}
                      className="px-4 py-2 text-sm rounded-xl bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)]"
        >
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-8">
            Development Tools
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <div key={tool.name} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--text-secondary)]">{tool.name}</span>
                  <span className="text-xs text-[var(--text-tertiary)]">{tool.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-[var(--surface-hover)] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${tool.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
