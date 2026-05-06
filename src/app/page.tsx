"use client";

import { useRef, useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import GitHubStats from "@/components/GitHubStats";
import Testimonials from "@/components/Testimonials";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollProgress from "@/components/ScrollProgress";
import CommandPalette from "@/components/CommandPalette";
import PageLoader from "@/components/PageLoader";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";
import VisitorCounter from "@/components/VisitorCounter";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import SkillBars from "@/components/SkillBars";
import FAQ from "@/components/FAQ";
import ResumeDownload from "@/components/ResumeDownload";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectModal from "@/components/ProjectModal";
import Newsletter from "@/components/Newsletter";
import Services from "@/components/Services";
import ClientLogos from "@/components/ClientLogos";
import AchievementBadges from "@/components/AchievementBadges";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <PageTransition>
      <main className="relative">
        <ScrollProgress />
        <AnimatedBackground mouse={mouse} />
        <Navigation />
        <Hero />
        
        {/* Achievement Badges */}
        <section id="achievements" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <AchievementBadges />
          </div>
        </section>
        
        <About />
        
        {/* Experience Timeline */}
        <section id="experience" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
                Work <span className="text-[#2563EB]">Experience</span>
              </h2>
              <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                A journey through my professional career and the amazing projects I&apos;ve worked on.
              </p>
            </div>
            <ExperienceTimeline />
          </div>
        </section>
        
        <Services />
        
        {/* Projects with Modal */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
                Featured <span className="text-[#2563EB]">Projects</span>
              </h2>
              <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                Click on any project to see detailed information, technologies used, and key features.
              </p>
            </div>
            <ProjectModal />
          </div>
        </section>
        
        {/* Skill Bars */}
        <section id="skills-detail" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
                Technical <span className="text-[#2563EB]">Skills</span>
              </h2>
              <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                My expertise across different technology domains.
              </p>
            </div>
            <SkillBars />
          </div>
        </section>
        
        <Skills />
        <GitHubStats />
        <Certifications />
        
        {/* Client Logos */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <ClientLogos />
          </div>
        </section>
        
<Testimonials />
        
        {/* Newsletter */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <Newsletter />
          </div>
        </section>
        
        {/* Resume Download CTA */}
        <section className="py-20 px-6 bg-gradient-to-r from-[#2563EB]/10 to-[#06B6D4]/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Interested in working together?
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              Download my resume to learn more about my experience, skills, and achievements.
            </p>
            <ResumeDownload />
          </div>
        </section>
        
        <Contact />
        <Footer />
        <CommandPalette />
        <WhatsAppButton />
        <CookieConsent />
        <VisitorCounter />
        <ServiceWorkerRegister />
      </main>
    </PageTransition>
  );
}