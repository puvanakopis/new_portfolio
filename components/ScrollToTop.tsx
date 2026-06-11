"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    gsap.to(window, {
      scrollTo: { y: 0, autoKill: false },
      duration: 1.4,
      ease: "power4.inOut",
    });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className={`fixed bottom-8 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)]/80 text-lg text-[var(--foreground)] backdrop-blur-sm transition-all duration-500 hover:border-[var(--primary)] hover:text-[var(--primary)] hover:shadow-[0_0_20px_rgba(200,255,0,0.25)] xl:right-16 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      ↑
    </button>
  );
}
