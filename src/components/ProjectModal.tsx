"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink, Calendar, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  demo?: string;
  duration?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI Dev Danyal",
    category: "AI & E-Commerce",
    image: "/projects/ai-dev-danyal.png",
    description: "AI-powered e-commerce & SaaS portfolio with modern dark theme",
    fullDescription: "A cutting-edge AI-powered portfolio showcasing advanced e-commerce features and SaaS capabilities. Features include intelligent product recommendations, automated customer support, real-time analytics dashboard, and seamless payment integration. Built with modern web technologies and optimized for performance.",
    technologies: ["Next.js", "TypeScript", "OpenAI", "LangChain", "Stripe", "PostgreSQL"],
    features: ["AI Chatbot", "Product Recommendations", "Analytics Dashboard", "Payment Integration", "Dark Theme UI", "Responsive Design"],
    demo: "https://aidevdanyal.vercel.app/",
    duration: "3 months",
  },
  {
    id: 2,
    title: "Danyal Portfolio",
    category: "Web Development",
    image: "/projects/Danyal_portfolio.png",
    description: "Full-stack developer portfolio with services and skills showcase",
    fullDescription: "A comprehensive developer portfolio featuring services showcase, interactive skills demonstration, and professional testimonials. The design emphasizes clean aesthetics with smooth animations and intuitive navigation. Includes contact form with email integration and social media links.",
    technologies: ["Next.js", "React", "TailwindCSS", "Framer Motion", "Node.js", "MongoDB"],
    features: ["Services Showcase", "Interactive Skills", "Testimonials", "Contact Form", "Smooth Animations", "SEO Optimized"],
    demo: "https://danyalportfolio-ten.vercel.app/",
    duration: "2 months",
  },
  {
    id: 3,
    title: "Danyal Arshad",
    category: "Web Development",
    image: "/projects/portfolio.png",
    description: "Premium web developer portfolio with progress bars and dark theme",
    fullDescription: "A premium portfolio website featuring animated progress bars showcasing technical skills, timeline-based experience section, and project showcases. The dark theme creates a professional atmosphere while maintaining excellent readability and accessibility.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "GSAP", "Three.js", "Vercel"],
    features: ["Animated Progress Bars", "Experience Timeline", "Project Showcase", "Dark Theme", "3D Elements", "Performance Optimized"],
    demo: "https://danyalarshadportfolio.vercel.app/",
    duration: "2 months",
  },
  {
    id: 4,
    title: "Dev Danyal Website",
    category: "Blog & Portfolio",
    image: "/projects/dev-danyal.png",
    description: "Dark theme portfolio with integrated blog section",
    fullDescription: "A modern portfolio website featuring an integrated blog section for sharing technical insights and tutorials. Includes markdown support, categories, search functionality, and comment system. Perfect for establishing thought leadership in the developer community.",
    technologies: ["Next.js", "MDX", "TailwindCSS", "Prisma", "PostgreSQL", "Disqus"],
    features: ["Blog Integration", "Markdown Support", "Categories & Tags", "Search Function", "Comments System", "SEO Friendly"],
    demo: "https://dev-danyal-website.vercel.app/",
    duration: "3 months",
  },
  {
    id: 5,
    title: "Homework Manager",
    category: "Web Application",
    image: "/projects/homework-manager.png",
    description: "Assignment tracking and management application",
    fullDescription: "A practical web application designed for students to track assignments, deadlines, and academic progress. Features include assignment categorization, due date reminders, progress tracking, grade calculation, and calendar integration. Built with focus on usability and mobile responsiveness.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "JWT Auth"],
    features: ["Assignment Tracking", "Deadline Reminders", "Progress Analytics", "Grade Calculator", "Calendar View", "Mobile Responsive"],
    demo: "https://homework-manager-app.vercel.app/",
    duration: "2 months",
  },
  {
    id: 6,
    title: "FinFlow",
    category: "Finance App",
    image: "/projects/financial-manager.png",
    description: "Financial management app with dashboard and analytics",
    fullDescription: "A comprehensive financial management application featuring expense tracking, budget planning, investment portfolio monitoring, and financial analytics. Includes visual reports, spending insights, savings goals, and multi-currency support for personal finance management.",
    technologies: ["React", "Next.js", "TypeScript", "D3.js", "PostgreSQL", "Plaid API"],
    features: ["Expense Tracking", "Budget Planning", "Investment Portfolio", "Financial Reports", "Multi-currency", "Data Visualization"],
    demo: "https://financial-manager-app-9xk1.vercel.app/",
    duration: "4 months",
  },
];

export default function ProjectModal() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:border-[#2563EB]/30 transition-all duration-300"
          >
            <div className="relative h-48 bg-gradient-to-br from-[#2563EB]/10 to-[#06B6D4]/10 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium flex items-center gap-2">
                  View Details <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
            
            <div className="p-5">
              <span className="text-xs text-[#2563EB] font-medium">{project.category}</span>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mt-1 mb-2 group-hover:text-[#2563EB] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-white/5 text-[var(--text-secondary)] text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 text-[var(--text-secondary)] text-xs">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[var(--surface)] border border-white/10 rounded-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-80 bg-gradient-to-br from-[#2563EB]/20 to-[#06B6D4]/20 overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#2563EB]/20 text-[#2563EB] text-sm rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
                  {selectedProject.title}
                </h2>
                
                <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                  {selectedProject.fullDescription}
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-[#2563EB]" />
                    <div>
                      <p className="text-xs text-[var(--text-secondary)]">Duration</p>
                      <p className="text-[var(--text-primary)] font-medium">{selectedProject.duration}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[var(--text-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#2563EB]/20 flex items-center justify-center">
                          <svg className="w-3 h-3 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[var(--text-secondary)]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-[#2563EB] hover:bg-[#1d4ed8] rounded-lg text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
