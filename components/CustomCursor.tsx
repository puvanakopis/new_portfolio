"use client";

import { useEffect, useRef, useState } from "react";


export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const isTouchDevice =
      typeof window !== "undefined" &&
      (!window.matchMedia("(pointer: fine)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0);

    if (isTouchDevice) return;
    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: mouse.x, y: mouse.y };
    let frame = 0;

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      }
    };

    const tick = () => {
      ring.x += (mouse.x - ring.x) * 0.15;
      ring.y += (mouse.y - ring.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
      frame = requestAnimationFrame(tick);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, [data-cursor-hover]"));
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] -ml-1 -mt-1 h-2 w-2 rounded-full bg-[var(--primary)] mix-blend-difference"
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-[var(--primary)] mix-blend-difference transition-[width,height,margin] duration-300 ease-out ${
          hovering ? "-ml-8 -mt-8 h-16 w-16 bg-[var(--primary)]/20" : "-ml-4 -mt-4 h-8 w-8"
        }`}
      />
    </>
  );
}
