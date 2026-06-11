"use client";

import { useRef, type ReactNode } from "react";

/**
 * Wraps a child element and gives it a "magnetic" pull toward the cursor on
 * hover. Disabled on touch / coarse-pointer devices.
 */
export function Magnetic({
  children,
  className,
  strength = 0.4,
}: {
  children: ReactNode;
  className?: string;
  /** 0–1 multiplier for how strongly the element follows the cursor. */
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate3d(0, 0, 0)";
  };

  return (
    <span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`inline-block transition-transform duration-300 ease-out will-change-transform ${className ?? ""}`}
    >
      {children}
    </span>
  );
}
