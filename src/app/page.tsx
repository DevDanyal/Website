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
    <main className="relative">
      <ScrollProgress />
      <AnimatedBackground mouse={mouse} />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <GitHubStats />
      <Certifications />
      <Testimonials />
      <Contact />
      <Footer />
      <CommandPalette />
    </main>
  );
}
