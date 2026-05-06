"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "Danyal delivered an exceptional AI solution that exceeded our expectations. His expertise in machine learning and professional approach made the entire project seamless.",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "CTO, DataFlow Systems",
    content: "Working with Danyal was a pleasure. He understood our requirements perfectly and delivered a scalable backend that handles millions of requests daily.",
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, Innovate Labs",
    content: "Danyal's attention to detail and problem-solving skills are outstanding. He transformed our complex requirements into an elegant, efficient solution.",
    avatar: "ER",
  },
  {
    name: "David Kim",
    role: "Founder, AI Solutions Co.",
    content: "The AI integration Danyal built for us has been game-changing. His knowledge of LangChain and OpenAI APIs is top-notch.",
    avatar: "DK",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative py-24 sm:py-32 px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-purple-500/10 to-transparent blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-purple-400 tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4">
            What Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all duration-500 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-sm font-bold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-white/40">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex items-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
