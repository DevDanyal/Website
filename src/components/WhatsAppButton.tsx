"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="https://wa.me/923464141007"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="fixed bottom-28 left-6 md:left-8 z-50 group"
          aria-label="Chat on WhatsApp"
        >
          <div className="relative">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 4px 20px rgba(37, 211, 102, 0.4)",
                  "0 4px 30px rgba(37, 211, 102, 0.6)",
                  "0 4px 20px rgba(37, 211, 102, 0.4)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg"
            >
              <svg
                className="w-7 h-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.023L.789 22.172l4.35-1.667c1.564.431 3.281.684 5.086.684 6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.974c-1.394 0-2.763-.23-4.074-.654l-.293-.083-2.62.97.79-2.525-.16-.293c-.443-.81-.685-1.745-.685-2.743C4.958 9.961 8.04 6.88 12 6.88c3.96 0 7.042 3.081 7.042 6.88 0 3.795-3.082 6.963-7.042 6.963z"/>
              </svg>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
              className="absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap"
            >
              <div className="bg-white text-gray-900 px-4 py-2 rounded-lg shadow-lg text-sm font-medium relative">
                Chat on WhatsApp
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-white" />
              </div>
            </motion.div>
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
