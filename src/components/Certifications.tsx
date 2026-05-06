"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const certifications = [
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    year: "2024",
    icon: "TF",
    color: "#FF6F00",
  },
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    year: "2024",
    icon: "AWS",
    color: "#FF9900",
  },
  {
    name: "Deep Learning Specialization",
    issuer: "Coursera",
    year: "2023",
    icon: "DL",
    color: "#0056D2",
  },
  {
    name: "Python for Data Science",
    issuer: "IBM",
    year: "2023",
    icon: "PY",
    color: "#3776AB",
  },
];

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="certifications"
      className="relative py-24 sm:py-32 px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-emerald-500/10 to-transparent blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-emerald-400 tracking-widest uppercase">
            Credentials
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold text-white mb-4" style={{ backgroundColor: `${cert.color}20`, color: cert.color }}>
                {cert.icon}
              </div>
              <h3 className="text-base font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2">
                {cert.name}
              </h3>
              <div className="flex items-center justify-between text-xs text-white/40">
                <span>{cert.issuer}</span>
                <span>{cert.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
