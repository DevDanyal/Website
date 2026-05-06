"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const plans = [
  {
    name: "Starter",
    price: "499",
    period: "project",
    description: "Perfect for small projects and landing pages",
    features: [
      "Single page website",
      "Responsive design",
      "Basic SEO",
      "Contact form",
      "2 weeks delivery",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "1,499",
    period: "project",
    description: "Ideal for startups and growing businesses",
    features: [
      "Full website (5-10 pages)",
      "Custom animations",
      "Advanced SEO",
      "API integration",
      "4 weeks delivery",
      "Priority support",
      "Source code included",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "3,999+",
    period: "project",
    description: "For complex AI and full-stack solutions",
    features: [
      "Custom web application",
      "AI/ML integration",
      "Database & backend",
      "Cloud deployment",
      "8+ weeks delivery",
      "24/7 dedicated support",
      "3 months maintenance",
      "Team training",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`relative p-8 rounded-2xl border ${
            plan.popular
              ? "bg-gradient-to-b from-[#2563EB]/10 to-transparent border-[#2563EB]/30"
              : "bg-white/[0.02] border-white/5"
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#2563EB] text-white text-sm font-medium rounded-full">
              Most Popular
            </div>
          )}

          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
              {plan.name}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-4">
              {plan.description}
            </p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-sm text-[var(--text-secondary)]">$</span>
              <span className="text-4xl font-bold text-[var(--text-primary)]">
                {plan.price}
              </span>
              <span className="text-sm text-[var(--text-secondary)]">
                /{plan.period}
              </span>
            </div>
          </div>

          <ul className="space-y-3 mb-8">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <svg
                  className="w-5 h-5 text-[#2563EB] flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-[var(--text-secondary)]">{feature}</span>
              </li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 rounded-xl font-medium transition-all ${
              plan.popular
                ? "bg-[#2563EB] text-white hover:bg-[#1d4ed8]"
                : "bg-white/5 hover:bg-white/10 text-[var(--text-primary)] border border-white/10"
            }`}
          >
            Get Started
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
}