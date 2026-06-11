"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = performance.now();
    const duration = 2000;

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));
      if (p < 1) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 350);
      }
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (done) {
      document.body.style.overflow = "";
      window.dispatchEvent(new Event("preloader:done"));
    }
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--background)]"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Centered label */}
          <motion.div
            className="text-display flex items-baseline gap-3 text-[var(--foreground)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-sm uppercase tracking-[0.4em] text-[var(--muted-foreground)]">
              Loading
            </span>
          </motion.div>

          {/* Big counter */}
          <div className="mt-4 overflow-hidden">
            <span className="text-display text-[18vw] leading-none text-[var(--foreground)] md:text-[10vw]">
              {progress}
              <span className="text-[var(--primary)]">%</span>
            </span>
          </div>

          {/* Progress bar */}
          <div className="mt-8 h-px w-[60vw] max-w-md overflow-hidden bg-[var(--border)]">
            <motion.div
              className="h-full bg-[var(--primary)]"
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
