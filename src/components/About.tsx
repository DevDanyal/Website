"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "3+", label: "Years Experience", icon: "years" },
  { value: "20+", label: "Projects Completed", icon: "projects" },
  { value: "15+", label: "Happy Clients", icon: "clients" },
  { value: "10+", label: "AI Solutions", icon: "ai" },
];

const services = [
  {
    title: "AI & Machine Learning",
    description: "Building intelligent systems with Python, PyTorch, TensorFlow, and OpenAI integration for real-world applications.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Full-Stack Development",
    description: "Creating robust web applications with Next.js, FastAPI, Django, and modern databases for scalable solutions.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "API Development",
    description: "Designing and building RESTful APIs and GraphQL endpoints with proper authentication and documentation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Cloud & DevOps",
    description: "Deploying applications on AWS and Vercel with Docker containers, CI/CD pipelines, and monitoring.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-24 sm:py-32 px-6 overflow-hidden"
    >
      <div className="dark-only absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-500/10 to-transparent blur-[120px]" />
      <div className="light-mode-hidden absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-500/20 to-transparent blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-blue-500 tracking-widest uppercase">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] mt-4">
            Turning Ideas Into
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Reality
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-blue-500/30 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-[var(--text-secondary)] uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              I&apos;m <span className="text-[var(--text-primary)] font-semibold">Danyal Arshad</span>, a passionate AI & Python Developer 
              based in Pakistan. My journey in tech is driven by a fascination for how artificial 
              intelligence can solve complex problems and create meaningful impact.
            </p>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              With expertise in machine learning, natural language processing, and full-stack 
              development, I specialize in delivering projects that combine cutting-edge technology 
              with exceptional user experience.
            </p>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new AI frameworks, contributing 
              to open-source projects, or sharing knowledge with the developer community.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 text-sm rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500">
                Problem Solver
              </span>
              <span className="px-4 py-2 text-sm rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500">
                Detail Oriented
              </span>
              <span className="px-4 py-2 text-sm rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-500">
                Innovation Driven
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">
              What I Do Best
            </h3>
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:bg-[var(--surface-hover)] transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-500">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                        {service.title}
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
