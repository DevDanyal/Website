"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          
          <p className="text-[--text-secondary] mb-8">
            Last updated: May 6, 2026
          </p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="bg-white/[0.02] rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-semibold text-[--text-primary] mb-4">1. Acceptance of Terms</h2>
              <p className="text-[--text-secondary] leading-relaxed">
                By accessing and using this portfolio website, you accept and agree to be bound by the terms and 
                conditions of this agreement. If you do not agree to abide by these terms, please do not use this website.
              </p>
            </section>

            <section className="bg-white/[0.02] rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-semibold text-[--text-primary] mb-4">2. Description of Service</h2>
              <p className="text-[--text-secondary] leading-relaxed">
                This portfolio website is maintained by Danyal Arshad to showcase professional work, skills, and services. 
                The website provides information about our background, projects, and allows visitors to contact us through 
                provided contact forms and social media links.
              </p>
            </section>

            <section className="bg-white/[0.02] rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-semibold text-[--text-primary] mb-4">3. Intellectual Property</h2>
              <p className="text-[--text-secondary] leading-relaxed mb-4">
                All content on this website, including but not limited to text, graphics, logos, images, and software, 
                is the property of Danyal Arshad and is protected by copyright and other intellectual property laws.
              </p>
              <p className="text-[--text-secondary] leading-relaxed">
                You may not reproduce, distribute, modify, or create derivative works from any content without our 
                prior written consent. However, you may share links to this website through social media or other 
                means, as long as proper attribution is given.
              </p>
            </section>

            <section className="bg-white/[0.02] rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-semibold text-[--text-primary] mb-4">4. User Conduct</h2>
              <p className="text-[--text-secondary] leading-relaxed mb-4">
                When using this website, you agree to:
              </p>
              <ul className="list-disc list-inside text-[--text-secondary] space-y-2">
                <li>Not use the website for any unlawful purpose</li>
                <li>Not attempt to gain unauthorized access to any part of the website</li>
                <li>Not interfere with the website&apos;s operation or security</li>
                <li>Not transmit any harmful code or content</li>
                <li>Respect the intellectual property of others</li>
              </ul>
            </section>

            <section className="bg-white/[0.02] rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-semibold text-[--text-primary] mb-4">5. Third-Party Links</h2>
              <p className="text-[--text-secondary] leading-relaxed">
                This website may contain links to third-party websites or services that are not owned or controlled 
                by us. We have no control over and assume no responsibility for the content, privacy policies, or 
                practices of any third-party websites or services. You acknowledge and agree that we shall not be 
                responsible or liable for any damage or loss caused by your use of any such content or services.
              </p>
            </section>

            <section className="bg-white/[0.02] rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-semibold text-[--text-primary] mb-4">6. Disclaimer</h2>
              <p className="text-[--text-secondary] leading-relaxed mb-4">
                The website and its content are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We make no 
                representations or warranties of any kind, express or implied, as to the operation of the website 
                or the information, content, or materials included on the website.
              </p>
              <p className="text-[--text-secondary] leading-relaxed">
                We do not warrant that the website will be uninterrupted, secure, or error-free. We reserve the 
                right to modify, suspend, or discontinue the website at any time without notice.
              </p>
            </section>

            <section className="bg-white/[0.02] rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-semibold text-[--text-primary] mb-4">7. Limitation of Liability</h2>
              <p className="text-[--text-secondary] leading-relaxed">
                To the fullest extent permitted by applicable law, in no event shall Danyal Arshad be liable for any 
                indirect, incidental, special, consequential, or punitive damages, including without limitation, loss 
                of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of 
                or inability to access or use the website.
              </p>
            </section>

            <section className="bg-white/[0.02] rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-semibold text-[--text-primary] mb-4">8. Contact</h2>
              <p className="text-[--text-secondary] leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at{' '}
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