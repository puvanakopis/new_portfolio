"use client";

import { ReactNode } from "react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

/**
 * Client component wrapper that initializes Lenis smooth scrolling.
 * Wrap page-level layouts with this to enable smooth scroll + GSAP sync.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useSmoothScroll();
  return <>{children}</>;
}
