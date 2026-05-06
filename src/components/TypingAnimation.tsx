"use client";

import { useState, useEffect } from "react";

export default function TypingAnimation() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "AI & Python Developer",
    "Machine Learning Engineer",
    "Full-Stack Developer",
    "API Architect",
    "Problem Solver"
  ];
  
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const deletingSpeed = 50;
    const pauseBeforeDelete = 2000;
    const pauseBeforeType = 500;

    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentIndex < currentPhrase.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);
    } else if (!isDeleting && currentIndex === currentPhrase.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseBeforeDelete);
    } else if (isDeleting && currentIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      }, deletingSpeed);
    } else if (isDeleting && currentIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((phraseIndex + 1) % phrases.length);
      timeout = setTimeout(() => {}, pauseBeforeType);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, phraseIndex]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
