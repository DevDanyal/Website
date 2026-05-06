"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navigationItems = [
  { name: "Home", href: "#", icon: "home", shortcut: "H" },
  { name: "About", href: "#about", icon: "user", shortcut: "A" },
  { name: "Projects", href: "#projects", icon: "folder", shortcut: "P" },
  { name: "Skills", href: "#skills", icon: "code", shortcut: "S" },
  { name: "GitHub Stats", href: "#github", icon: "github", shortcut: "G" },
  { name: "Certifications", href: "#certifications", icon: "award", shortcut: "C" },
  { name: "Testimonials", href: "#testimonials", icon: "message", shortcut: "T" },
  { name: "Contact", href: "#contact", icon: "mail", shortcut: "L" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/DevDanyal", shortcut: "1" },
  { name: "LinkedIn", href: "https://linkedin.com/in/dev-danyal-72b295405/", shortcut: "2" },
  { name: "Email", href: "mailto:aidevdanyal@gmail.com", shortcut: "3" },
  { name: "WhatsApp", href: "https://wa.me/923464141007", shortcut: "4" },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredNavItems = navigationItems.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const filteredSocial = socialLinks.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const allItems = [...filteredNavItems.map(i => ({ ...i, type: "nav" })), ...filteredSocial.map(i => ({ ...i, type: "social" }))];

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      setIsOpen(true);
    }
    if (e.key === "Escape") {
      setIsOpen(false);
    }
    if (isOpen) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % allItems.length);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + allItems.length) % allItems.length);
      }
      if (e.key === "Enter" && allItems[selectedIndex]) {
        window.location.href = allItems[selectedIndex].href;
        setIsOpen(false);
      }
    }
  }, [isOpen, selectedIndex, allItems]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-8 z-50 p-3 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-blue-500/50 transition-all shadow-lg"
        aria-label="Open command palette"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-xl z-[101]"
            >
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-2xl overflow-hidden">
                <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--border)]">
                  <svg className="w-5 h-5 text-[var(--text-tertiary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Type a command or search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-1 bg-transparent text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none"
                    autoFocus
                  />
                  <kbd className="px-2 py-1 text-xs bg-[var(--surface-hover)] rounded text-[var(--text-tertiary)]">ESC</kbd>
                </div>
                <div className="max-h-80 overflow-y-auto py-2">
                  {filteredNavItems.length > 0 && (
                    <div className="px-3 py-1 text-xs text-[var(--text-tertiary)] uppercase tracking-wider">Navigation</div>
                  )}
                  {filteredNavItems.map((item, index) => (
                    <button
                      key={item.name}
                      onClick={() => { window.location.href = item.href; setIsOpen(false); }}
                      className={`w-full flex items-center justify-between px-4 py-2 hover:bg-[var(--surface-hover)] transition-colors ${
                        selectedIndex === index ? "bg-blue-500/10 text-blue-500" : "text-[var(--text-primary)]"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-[var(--text-tertiary)]">{item.name}</span>
                      </span>
                      <kbd className="px-2 py-0.5 text-xs bg-[var(--surface-hover)] rounded text-[var(--text-tertiary)]">{item.shortcut}</kbd>
                    </button>
                  ))}
                  {filteredSocial.length > 0 && (
                    <div className="px-3 py-1 mt-2 text-xs text-[var(--text-tertiary)] uppercase tracking-wider">Social Links</div>
                  )}
                  {filteredSocial.map((item, index) => (
                    <button
                      key={item.name}
                      onClick={() => { window.open(item.href, "_blank"); setIsOpen(false); }}
                      className={`w-full flex items-center justify-between px-4 py-2 hover:bg-[var(--surface-hover)] transition-colors ${
                        selectedIndex === filteredNavItems.length + index ? "bg-blue-500/10 text-blue-500" : "text-[var(--text-primary)]"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-[var(--text-tertiary)]">{item.name}</span>
                      </span>
                      <kbd className="px-2 py-0.5 text-xs bg-[var(--surface-hover)] rounded text-[var(--text-tertiary)]">{item.shortcut}</kbd>
                    </button>
                  ))}
                </div>
                <div className="px-4 py-2 border-t border-[var(--border)] text-xs text-[var(--text-tertiary)]">
                  Press <kbd className="px-1.5 py-0.5 bg-[var(--surface-hover)] rounded">Enter</kbd> to select,{" "}
                  <kbd className="px-1.5 py-0.5 bg-[var(--surface-hover)] rounded">Arrow keys</kbd> to navigate
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
