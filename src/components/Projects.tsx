"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "AI Dev Danyal",
    category: "AI-Powered SaaS",
    description: "AI-powered e-commerce & portfolio with modern dark theme, intelligent features, and seamless user experience.",
    tags: ["Next.js", "AI", "Stripe", "FastAPI"],
    link: "https://aidevdanyal.vercel.app/",
    gradient: "from-blue-500 to-cyan-400",
    featured: true,
  },
  {
    title: "Danyal Portfolio",
    category: "Full-Stack Portfolio",
    description: "Full-stack developer portfolio showcasing services, skills, and clean modern design with interactive elements.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB"],
    link: "https://danyalportfolio-ten.vercel.app/",
    gradient: "from-purple-500 to-pink-400",
    featured: false,
  },
  {
    title: "Homework Manager",
    category: "Educational SaaS",
    description: "Assignment tracking & management app with deadline reminders, progress monitoring, and organization features.",
    tags: ["React", "TypeScript", "Vercel"],
    link: "https://homework-manager-app.vercel.app/",
    gradient: "from-emerald-500 to-teal-400",
    featured: false,
  },
  {
    title: "FinFlow",
    category: "Financial Dashboard",
    description: "Financial management dashboard with expense tracking, budget analytics, and real-time insights.",
    tags: ["React", "TypeScript", "Charts"],
    link: "https://financial-manager-app-9xk1.vercel.app/",
    gradient: "from-orange-500 to-amber-400",
    featured: false,
  },
  {
    title: "Danyal Arshad",
    category: "Premium Portfolio",
    description: "Premium web developer portfolio with animated progress bars, dark theme, and professional aesthetics.",
    tags: ["Python", "Django", "PostgreSQL"],
    link: "https://danyalarshadportfolio.vercel.app/",
    gradient: "from-rose-500 to-red-400",
    featured: false,
  },
  {
    title: "Dev Danyal Website",
    category: "Blog Portfolio",
    description: "Dark theme portfolio featuring blog section, project showcase, and engaging scroll animations.",
    tags: ["React", "MongoDB", "API"],
    link: "https://dev-danyal-website.vercel.app/",
    gradient: "from-indigo-500 to-violet-400",
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      ref={ref}
      id="projects"
      className="relative py-24 sm:py-32 px-6 overflow-hidden"
    >
      <div className="dark-only absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-l from-blue-500/10 to-transparent blur-[150px]" />
      <div className="light-mode-hidden absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-l from-blue-500/20 to-transparent blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-16"
        >
          <div>
            <span className="text-sm font-medium text-blue-500 tracking-widest uppercase">
              Portfolio
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] mt-4">
              Featured Projects
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] max-w-md mt-4 sm:mt-0">
            A selection of recent work showcasing AI integration, full-stack development, 
            and modern web applications.
          </p>
        </motion.div>

        {featuredProject && (
          <motion.a
            href={featuredProject.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group block mb-8"
          >
            <div className="relative p-8 sm:p-10 rounded-3xl bg-[var(--surface)] border border-[var(--border)] hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${featuredProject.gradient} opacity-20 blur-[100px] rounded-full`} />
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                  <div>
                    <span className="text-xs font-medium text-blue-500 tracking-wider uppercase">
                      {featuredProject.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mt-2 group-hover:text-blue-500 transition-colors">
                      {featuredProject.title}
                    </h3>
                  </div>
                  <div className={`mt-4 sm:mt-0 px-4 py-2 rounded-full bg-gradient-to-r ${featuredProject.gradient} text-white text-sm font-medium`}>
                    Featured
                  </div>
                </div>

                <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6 max-w-3xl">
                  {featuredProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-sm rounded-full bg-[var(--surface-hover)] text-[var(--text-secondary)] border border-[var(--border)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-blue-500">
                  <span className="text-sm font-medium">View Project</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.a>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="relative p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-hover)] transition-all duration-500 h-full overflow-hidden">
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.gradient} opacity-10 blur-[60px] rounded-full`} />
                
                <div className="relative z-10">
                  <span className="text-xs font-medium text-[var(--text-tertiary)] tracking-wider uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mt-2 mb-3 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-full bg-[var(--surface-hover)] text-[var(--text-tertiary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-[var(--text-tertiary)] group-hover:text-blue-500 transition-colors">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="text-xs">Visit</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
