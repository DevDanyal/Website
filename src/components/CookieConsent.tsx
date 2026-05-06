"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setShow(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem("cookie-consent", "necessary");
    setShow(false);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-6xl mx-auto bg-[var(--surface)] backdrop-blur-xl border border-[var(--border)] rounded-t-2xl md:rounded-2xl p-4 md:p-6 shadow-2xl">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">🍪</span>
                  <h3 className="text-base font-semibold text-[var(--text-primary)]">
                    We value your privacy
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] text-xs md:text-sm leading-relaxed">
                  We use cookies to enhance your experience.
                  <Link href="/privacy" className="text-[#2563EB] hover:underline ml-1">
                    Learn more
                  </Link>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <button
                  onClick={acceptNecessary}
                  className="px-3 md:px-5 py-2 text-xs md:text-sm font-medium text-[var(--text-secondary)] bg-transparent border border-[var(--border)] rounded-lg hover:bg-[var(--surface-hover)] transition-colors"
                >
                  Necessary
                </button>
                <button
                  onClick={acceptAll}
                  className="px-3 md:px-5 py-2 text-xs md:text-sm font-medium text-white bg-[#2563EB] rounded-lg hover:bg-[#1d4ed8] transition-colors"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}