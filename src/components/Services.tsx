"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "🤖",
    title: "AI Development",
    description: "Custom AI solutions, chatbots, and ML models tailored to your business needs. From concept to deployment.",
    features: ["Chatbots & Virtual Assistants", "Machine Learning Models", "NLP & Text Analysis", "Computer Vision", "AI Integration"],
    price: "Starting $2,500",
  },
  {
    icon: "💻",
    title: "Web Development",
    description: "Modern, responsive web applications built with cutting-edge technologies. Full-stack solutions from concept to launch.",
    features: ["Custom Web Applications", "E-commerce Platforms", "Landing Pages", "Web Portals", "API Development"],
    price: "Starting $1,500",
  },
  {
    icon: "🔧",
    title: "API Development",
    description: "Robust, scalable APIs that power your applications. Clean architecture with comprehensive documentation.",
    features: ["REST APIs", "GraphQL APIs", "Real-time APIs", "API Integration", "Documentation"],
    price: "Starting $1,000",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    description: "Cloud infrastructure setup, CI/CD pipelines, and containerization for seamless deployment.",
    features: ["AWS & GCP Setup", "Docker & Kubernetes", "CI/CD Pipelines", "Monitoring & Logging", "Infrastructure as Code"],
    price: "Starting $1,500",
  },
];

export default function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="group p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-[#2563EB]/30 transition-all duration-300"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563EB]/20 to-[#06B6D4]/20 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] text-sm rounded-full">
              {service.price}
            </span>
          </div>

          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[#2563EB] transition-colors">
            {service.title}
          </h3>
          <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
            {service.description}
          </p>

          <ul className="space-y-3">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                {feature}
              </li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-6 py-3 bg-white/5 hover:bg-[#2563EB]/20 border border-white/10 hover:border-[#2563EB]/30 rounded-xl text-[var(--text-primary)] font-medium transition-all"
          >
            Get Started
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
}