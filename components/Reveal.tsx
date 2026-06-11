"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "clip";

const buildVariants = (direction: Direction, distance: number): Variants => {
  const base = { opacity: 0 };

  const from =
    direction === "up"
      ? { ...base, y: distance }
      : direction === "down"
        ? { ...base, y: -distance }
        : direction === "left"
          ? { ...base, x: -distance }
          : direction === "right"
            ? { ...base, x: distance }
            : direction === "scale"
              ? { ...base, scale: 0.85 }
              : { ...base, clipPath: "inset(0 0 100% 0)" }; // clip

  const to =
    direction === "up" || direction === "down"
      ? { opacity: 1, y: 0 }
      : direction === "left" || direction === "right"
        ? { opacity: 1, x: 0 }
        : direction === "scale"
          ? { opacity: 1, scale: 1 }
          : { opacity: 1, clipPath: "inset(0 0 0% 0)" };

  return {
    hidden: from,
    visible: (i: number = 0) => ({
      ...to,
      transition: {
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
        delay: i * 0.1,
      },
    }),
  };
};

/**
 * Scroll-triggered reveal wrapper using Framer Motion.
 * Supports: up | down | left | right | scale | clip directions
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  direction = "up",
  distance = 48,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "span" | "p" | "h2" | "h3" | "footer" | "article";
  direction?: Direction;
  distance?: number;
  once?: boolean;
}) {
  const MotionTag = motion[as] as typeof motion.div;
  const variants = buildVariants(direction, distance);

  return (
    <MotionTag
      className={className}
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
    >
      {children}
    </MotionTag>
  );
}
