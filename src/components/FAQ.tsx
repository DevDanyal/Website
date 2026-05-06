"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "I specialize in AI development, Python programming, full-stack web development, API design, and machine learning solutions. From chatbots to data pipelines, I build intelligent systems that drive business value.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A simple landing page takes 1-2 weeks, while a full AI solution can take 4-8 weeks. I provide detailed timelines during our initial consultation.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes! I provide post-launch support and maintenance packages. This includes bug fixes, security updates, performance optimization, and feature additions.",
  },
  {
    question: "What industries have you worked with?",
    answer: "I've worked across healthcare, finance, e-commerce, education, and technology sectors. My AI solutions have helped startups and enterprises alike streamline operations and boost efficiency.",
  },
  {
    question: "Can you integrate AI into existing systems?",
    answer: "Absolutely! I have extensive experience integrating AI capabilities into legacy systems. Whether it's adding chatbots, recommendation engines, or automation, I ensure seamless integration with your existing infrastructure.",
  },
  {
    question: "What's your pricing model?",
    answer: "I offer both fixed-price and hourly models depending on project scope. Fixed-price works well for defined projects, while hourly is ideal for ongoing work. I provide transparent quotes with no hidden fees.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left"
          >
            <span className="text-lg font-medium text-[var(--text-primary)] pr-4">
              {faq.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center"
            >
              <svg
                className="w-4 h-4 text-[var(--text-secondary)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}