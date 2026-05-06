"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code, Users, Calendar, ChevronRight, Terminal } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
  client?: string;
  duration?: string;
  role?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Chatbot",
    category: "AI & NLP",
    image: "🤖",
    description: "Intelligent chatbot with natural language understanding",
    fullDescription: "A sophisticated AI chatbot built with LangChain and OpenAI's GPT models. Features include contextual memory, multi-turn conversations, document analysis, and custom knowledge base integration. The system handles 10,000+ daily conversations with 95% accuracy.",
    technologies: ["Python", "LangChain", "OpenAI", "FastAPI", "PostgreSQL", "Redis"],
    features: ["Natural Language Processing", "Contextual Memory", "Multi-language Support", "Custom Training", "Analytics Dashboard", "Webhook Integration"],
    github: "https://github.com/DevDanyal",
    demo: "https://demo.com",
    client: "TechCorp Inc.",
    duration: "3 months",
    role: "Lead Developer",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Full-Stack",
    image: "🛒",
    description: "Modern e-commerce solution with AI recommendations",
    fullDescription: "A complete e-commerce platform featuring AI-powered product recommendations, real-time inventory management, automated customer support, and advanced analytics. Integrated with Stripe and multiple payment gateways.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "TailwindCSS", "Stripe"],
    features: ["AI Recommendations", "Real-time Analytics", "Inventory Management", "Multi-vendor Support", "Mobile Optimized", "SEO Built-in"],
    github: "https://github.com/DevDanyal",
    demo: "https://demo.com",
    client: "ShopSmart",
    duration: "4 months",
    role: "Full-Stack Developer",
  },
  {
    id: 3,
    title: "ML Pipeline System",
    category: "Machine Learning",
    image: "⚡",
    description: "Automated machine learning workflow platform",
    fullDescription: "An end-to-end ML pipeline system that automates data preprocessing, model training, hyperparameter tuning, and deployment. Features include experiment tracking, model versioning, and A/B testing capabilities.",
    technologies: ["Python", "TensorFlow", "MLflow", "Docker", "Kubernetes", "AWS"],
    features: ["AutoML", "Experiment Tracking", "Model Registry", "CI/CD for ML", "Monitoring", "Alerting"],
    github: "https://github.com/DevDanyal",
    client: "DataFlow AI",
    duration: "5 months",
    role: "ML Engineer",
  },
  {
    id: 4,
    title: "Real-Time Dashboard",
    category: "Data Visualization",
    image: "📊",
    description: "Interactive analytics dashboard with live data",
    fullDescription: "A real-time analytics dashboard built for monitoring business metrics. Features live data streaming, customizable widgets, automated reports, and anomaly detection with instant alerts.",
    technologies: ["React", "D3.js", "WebSocket", "PostgreSQL", "Node.js", "Chart.js"],
    features: ["Live Updates", "Custom Widgets", "Export Reports", "Role-based Access", "API Integration", "Mobile App"],
    github: "https://github.com/DevDanyal",
    demo: "https://demo.com",
    client: "AnalyticsPro",
    duration: "2 months",
    role: "Frontend Lead",
  },
  {
    id: 5,
    title: "Automation Scripts",
    category: "DevOps",
    image: "🔧",
    description: "Enterprise automation solutions for workflows",
    fullDescription: "Comprehensive automation suite for enterprise workflows including scheduled tasks, triggered jobs, and event-driven processing. Reduces manual work by 80% with reliable error handling and logging.",
    technologies: ["Python", "Redis", "RabbitMQ", "Docker", "Ansible", "Terraform"],
    features: ["Task Scheduling", "Event Processing", "Error Handling", "Detailed Logging", "Auto-recovery", "Multi-environment"],
    github: "https://github.com/DevDanyal",
    client: "Enterprise Co.",
    duration: "3 months",
    role: "DevOps Engineer",
  },
  {
    id: 6,
    title: "Content Management",
    category: "Web App",
    image: "📝",
    description: "Headless CMS with API-first architecture",
    fullDescription: "A modern headless CMS designed for content-heavy applications. Features a visual editor, version control, multi-language support, and a powerful GraphQL API for seamless integrations.",
    technologies: ["Next.js", "GraphQL", "PostgreSQL", "AWS S3", "TailwindCSS", "Framer Motion"],
    features: ["Visual Editor", "Version Control", "Multi-language", "Media Library", "Custom Fields", "API Access"],
    github: "https://github.com/DevDanyal",
    demo: "https://demo.com",
    client: "MediaHub",
    duration: "4 months",
    role: "Full-Stack Developer",
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
            <div className="relative h-48 bg-gradient-to-br from-[#2563EB]/10 to-[#06B6D4]/10 flex items-center justify-center">
              <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </span>
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

              <div className="h-64 bg-gradient-to-br from-[#2563EB]/20 to-[#06B6D4]/20 flex items-center justify-center">
                <span className="text-8xl">{selectedProject.image}</span>
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

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-[#2563EB]" />
                    <div>
                      <p className="text-xs text-[var(--text-secondary)]">Client</p>
                      <p className="text-[var(--text-primary)] font-medium">{selectedProject.client}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-[#2563EB]" />
                    <div>
                      <p className="text-xs text-[var(--text-secondary)]">Duration</p>
                      <p className="text-[var(--text-primary)] font-medium">{selectedProject.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Terminal className="w-5 h-5 text-[#2563EB]" />
                    <div>
                      <p className="text-xs text-[var(--text-secondary)]">Role</p>
                      <p className="text-[var(--text-primary)] font-medium">{selectedProject.role}</p>
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
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-[var(--text-primary)] transition-colors"
                    >
                      <Code className="w-5 h-5" />
                      View Code
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-[#2563EB] hover:bg-[#1d4ed8] rounded-lg text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
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