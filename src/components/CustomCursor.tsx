"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const position = useRef({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      position.current = { x: e.clientX, y: e.clientY };
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const animate = () => {
      cursorPosition.current.x += (position.current.x - cursorPosition.current.x) * 0.12;
      cursorPosition.current.y += (position.current.y - cursorPosition.current.y) * 0.12;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorPosition.current.x}px, ${cursorPosition.current.y}px)`;
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <>
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[9999] hidden md:block shadow-lg shadow-blue-500/50"
        style={{
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 border border-blue-500/50 rounded-full pointer-events-none z-[9998] hidden md:block"
        style={{
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
    </>
  );
}
