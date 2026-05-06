"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#2563EB] hover:text-[#1d4ed8] mb-8 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-[--text-primary] mb-6">
            Privacy Policy
          </h1>
          
          <p className="text-[--text-secondary] mb-8">
            Last updated: May 6, 2026
          </p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="bg-white/[0.02] rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-semibold text-[--text-primary] mb-4">1. Information We Collect</h2>
              <p className="text-[--text-secondary] leading-relaxed">
                We collect information you provide directly to us, such as when you fill out a contact form, 
                subscribe to our newsletter, or otherwise communicate with us. This includes your name, email address, 
                and any other information you choose to provide.
              </p>
            </section>

            <section className="bg-white/[0.02] rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-semibold text-[--text-primary] mb-4">2. How We Use Your Information</h2>
              <p className="text-[--text-secondary] leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-[--text-secondary] space-y-2">
                <li>Respond to your inquiries and fulfill your requests</li>
                <li>Send you information about our services (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="bg-white/[0.02] rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-semibold text-[--text-primary] mb-4">3. Cookies and Tracking</h2>
              <p className="text-[--text-secondary] leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
              <div className="bg-[#2563EB]/10 rounded-lg p-4 border border-[#2563EB]/20">
                <p className="text-[--text-secondary] text-sm">
                  <strong className="text-[#2563EB]">Cookie Consent:</strong> By clicking &quot;Accept All&quot;, you consent to our use of cookies. 
                  You can manage your preferences at any time.
                </p>
              </div>
            </section>

            <section className="bg-white/[0.02] rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-semibold text-[--text-primary] mb-4">4. Third-Party Services</h2>
              <p className="text-[--text-secondary] leading-relaxed">
                We may employ third-party companies and services to facilitate our website, provide services on our behalf, 
                or assist us in analyzing how our website is used. These third parties have access to your Personal Information 
                only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>
            </section>

            <section className="bg-white/[0.02] rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-semibold text-[--text-primary] mb-4">5. Data Security</h2>
              <p className="text-[--text-secondary] leading-relaxed">
                The security of your data is important to us. We strive to use commercially acceptable means to protect your 
                Personal Information, but remember that no method of internet transmission is 100% secure.
              </p>
            </section>

            <section className="bg-white/[0.02] rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-semibold text-[--text-primary] mb-4">6. Your Rights</h2>
              <p className="text-[--text-secondary] leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside text-[--text-secondary] space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to correct inaccurate data</li>
                <li>Right to delete your data</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
              </ul>
            </section>

            <section className="bg-white/[0.02] rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-semibold text-[--text-primary] mb-4">7. Contact Us</h2>
              <p className="text-[--text-secondary] leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:aidevdanyal@gmail.com" className="text-[#2563EB] hover:underline">
                  aidevdanyal@gmail.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}