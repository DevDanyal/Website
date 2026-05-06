"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");
    
    setTimeout(() => {
      setStatus("success");
      setMessage("Thanks for subscribing! You'll receive updates soon.");
      setEmail("");
    }, 1500);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/10 to-[#06B6D4]/10 rounded-3xl" />
      
      <div className="relative p-8 md:p-12 rounded-3xl border border-white/5 bg-white/[0.02]">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center"
          >
            <Mail className="w-8 h-8 text-white" />
          </motion.div>

          <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
            Stay Updated
          </h3>
          <p className="text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
            Get the latest insights on AI, Python, and web development. No spam, unsubscribe anytime.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[#2563EB] transition-colors"
              />
            </div>
            <motion.button
              type="submit"
              disabled={status === "loading" || status === "success"}
              whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
              whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
              className={`px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${
                status === "success"
                  ? "bg-green-500 text-white"
                  : "bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white hover:shadow-lg hover:shadow-[#2563EB]/25"
              } disabled:opacity-50`}
            >
              {status === "loading" ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : status === "success" ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Subscribed
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Subscribe
                </>
              )}
            </motion.button>
          </form>

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center justify-center gap-2 text-red-400"
            >
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm">{message}</span>
            </motion.div>
          )}

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-sm text-green-400"
            >
              {message}
            </motion.p>
          )}

          <p className="mt-6 text-xs text-[var(--text-secondary)]">
            Join 500+ developers staying ahead of the curve
          </p>
        </div>
      </div>
    </div>
  );
}