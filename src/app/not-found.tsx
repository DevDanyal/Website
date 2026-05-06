"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/10 via-transparent to-purple-500/10" />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse delay-1000" />
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <span className="text-[200px] md:text-[280px] font-bold bg-gradient-to-br from-[#2563EB] to-purple-500 bg-clip-text text-transparent leading-none">
              404
            </span>
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-4 -right-8 text-6xl"
            >
              🔍
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-[--text-primary] mb-4"
        >
          Page Not Found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-[--text-secondary] text-lg mb-8 max-w-md mx-auto"
        >
          The page <code className="bg-white/10 px-2 py-1 rounded text-[#2563EB]">{pathname}</code> doesn&apos;t exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="group px-8 py-3 bg-[#2563EB] text-white rounded-xl font-medium hover:bg-[#1d4ed8] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#2563EB]/25"
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </span>
          </Link>
          
          <Link
            href="/#contact"
            className="px-8 py-3 border border-white/10 text-[--text-primary] rounded-xl font-medium hover:bg-white/5 transition-all"
          >
            Contact Me
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-[--text-secondary] text-sm"
        >
          <p>Or try searching:</p>
          <div className="flex gap-2 justify-center mt-3">
            {["Projects", "About", "Skills", "Contact"].map((page) => (
              <Link
                key={page}
                href={`/#${page.toLowerCase()}`}
                className="px-3 py-1 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-sm"
              >
                {page}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}