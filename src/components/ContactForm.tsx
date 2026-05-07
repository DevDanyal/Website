"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formState.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const subject = formState.subject ? `[Portfolio] ${formState.subject}` : '[Portfolio] New Message';
    const body = `Name: ${formState.name}%0D%0AEmail: ${formState.email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(formState.message)}`;
    window.location.href = `mailto:aidevdanyal@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="p-8 rounded-2xl bg-white/[0.03] border border-white/5"
    >
      <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
      
      {status === "success" && (
        <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
          Message sent successfully! I&apos;ll get back to you soon.
        </div>
      )}
      
      {status === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          Something went wrong. Please try again or use email directly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm text-white/50 mb-2">Name *</label>
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                errors.name ? "border-red-500/50" : "border-white/10"
              } text-white placeholder-white/30 focus:border-blue-500/50 focus:outline-none transition-colors`}
              placeholder="Your name"
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm text-white/50 mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                errors.email ? "border-red-500/50" : "border-white/10"
              } text-white placeholder-white/30 focus:border-blue-500/50 focus:outline-none transition-colors`}
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>
        </div>
        
        <div>
          <label className="block text-sm text-white/50 mb-2">Subject</label>
          <select
            name="subject"
            value={formState.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue-500/50 focus:outline-none transition-colors"
          >
            <option value="">Select a topic</option>
            <option value="project">New Project</option>
            <option value="collaboration">Collaboration</option>
            <option value="consulting">Consulting</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm text-white/50 mb-2">Message *</label>
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
              errors.message ? "border-red-500/50" : "border-white/10"
            } text-white placeholder-white/30 focus:border-blue-500/50 focus:outline-none transition-colors resize-none`}
            placeholder="Tell me about your project or idea..."
          />
          {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
        </div>
        
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </motion.div>
  );
}
