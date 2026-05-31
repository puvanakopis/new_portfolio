"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Booting intelligence core...");

  useEffect(() => {
    if (progress < 15) {
      setStatus("Booting intelligence core...");
    } else if (progress >= 15 && progress < 30) {
      setStatus("Loading neural pathways & memory modules...");
    } else if (progress >= 30 && progress < 45) {
      setStatus("Initializing RAG pipeline & vector database...");
    } else if (progress >= 45 && progress < 60) {
      setStatus("Spawning autonomous agent loops...");
    } else if (progress >= 60 && progress < 75) {
      setStatus("Establishing knowledge graph connection...");
    } else if (progress >= 75 && progress < 90) {
      setStatus("Optimizing UI canvas & interaction layers...");
    } else if (progress >= 90 && progress < 99) {
      setStatus("Synthesizing experience modules...");
    } else if (progress >= 99) {
      setStatus("Ready. Launching workspace...");
    }
  }, [progress]);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        onComplete();
      }, 600);
      return () => clearTimeout(timer);
    }

    let delay = 30;
    let increment = 1;

    if (progress < 15) {
      delay = 20 + Math.random() * 30;
      increment = Math.floor(Math.random() * 3) + 1;
    } else if (progress >= 15 && progress < 45) {
      delay = 35 + Math.random() * 45;
      increment = Math.floor(Math.random() * 2) + 1;
    } else if (progress >= 45 && progress < 65) {
      delay = 40 + Math.random() * 50;
      increment = Math.floor(Math.random() * 2) + 1;
    } else if (progress >= 65 && progress < 85) {
      delay = 25 + Math.random() * 35;
      increment = Math.floor(Math.random() * 3) + 1;
    } else if (progress >= 85 && progress < 95) {
      delay = 50 + Math.random() * 60;
      increment = Math.floor(Math.random() * 2) + 1;
    } else if (progress >= 95 && progress < 99) {
      delay = 70 + Math.random() * 80;
      increment = 1;
    } else {
      delay = 90;
      increment = 1;
    }

    const timer = setTimeout(() => {
      setProgress((prev) => Math.min(prev + increment, 100));
    }, delay);

    return () => clearTimeout(timer);
  }, [progress, onComplete]);

  const nameLetters = "Puvanakopis".split("");

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -80,
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Background orbs - matching Hero component */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, #2563eb 0%, transparent 70%)" }}
        />
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(var(--text-primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6 text-center">
        {/* Animated AI Core / Neural Network Visual */}
        <div className="relative flex items-center justify-center w-36 h-36 mb-8">
          {/* Pulsing center core */}
          <motion.div
            className="absolute w-8 h-8 rounded-full blur-sm"
            animate={{
              scale: [0.85, 1.25, 0.85],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              backgroundColor: "var(--accent)",
              boxShadow: "0 0 30px var(--accent)",
            }}
          />

          <svg className="absolute w-full h-full" viewBox="0 0 100 100">
            {/* Outer rotating dotted ring */}
            <motion.circle
              cx="50"
              cy="50"
              r="44"
              stroke="var(--accent)"
              strokeWidth="1"
              strokeDasharray="6 8 4 8"
              fill="transparent"
              opacity="0.5"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            {/* Middle counter-rotating dashed ring */}
            <motion.circle
              cx="50"
              cy="50"
              r="36"
              stroke="var(--text-secondary)"
              strokeWidth="1.2"
              strokeDasharray="2 6"
              fill="transparent"
              opacity="0.35"
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
            {/* Inner ticking ring */}
            <motion.circle
              cx="50"
              cy="50"
              r="28"
              stroke="var(--accent)"
              strokeWidth="2"
              strokeDasharray="1 12"
              fill="transparent"
              opacity="0.7"
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            {/* Static concentric guide */}
            <circle
              cx="50"
              cy="50"
              r="20"
              stroke="var(--border)"
              strokeWidth="0.5"
              fill="transparent"
              opacity="0.25"
            />
            {/* Orbiting dot */}
            <motion.circle
              cx="50"
              cy="6"
              r="2.5"
              fill="var(--accent)"
              opacity="0.8"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "center" }}
            />
            <motion.circle
              cx="50"
              cy="94"
              r="2"
              fill="var(--text-secondary)"
              opacity="0.5"
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "center" }}
            />
          </svg>
        </div>

        {/* Brand Name - Staggered reveal */}
        <div className="mb-2 overflow-hidden flex justify-center">
          {nameLetters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: i * 0.05 + 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-2xl sm:text-3xl font-bold tracking-widest"
              style={{ color: "var(--text-primary)" }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Badge / Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[10px] tracking-wider uppercase mb-10"
          style={{
            borderColor: "var(--accent)",
            color: "var(--accent)",
            backgroundColor: "var(--accent-subtle)",
          }}
        >
          AI &amp; Full‑Stack Engineer
        </motion.div>

        {/* Progress Section */}
        <div className="w-full flex flex-col gap-3 mb-8">
          <div className="flex items-center justify-between font-mono text-[11px] tracking-wider">
            <span style={{ color: "var(--text-muted)" }}>INITIALIZING SYSTEM</span>
            <span className="font-semibold" style={{ color: "var(--accent)" }}>
              {String(progress).padStart(3, "0")}%
            </span>
          </div>
          {/* Progress bar */}
          <div
            className="w-full h-[2px] rounded-full overflow-hidden"
            style={{ backgroundColor: "var(--border)", opacity: 0.5 }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: "var(--accent)" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut", duration: 0.1 }}
            />
          </div>
        </div>

        {/* Terminal / Console Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full rounded-2xl border p-4 shadow-2xl transition-all duration-300 hover:border-accent/50"
          style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--card-border)",
          }}
        >
          {/* Terminal header */}
          <div className="flex items-center gap-1.5 border-b pb-2 mb-3" style={{ borderColor: "var(--border)" }}>
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            <span className="text-[9px] ml-2 font-mono tracking-wide" style={{ color: "var(--text-muted)" }}>
              boot_sequence.sh
            </span>
          </div>

          {/* Terminal logs */}
          <div className="space-y-1.5 min-h-[110px] flex flex-col justify-start">
            <p className="font-mono text-xs" style={{ color: "var(--accent)" }}>
              $ run portfolio_boot --env=production
            </p>
            {progress >= 15 && (
              <motion.p
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-mono text-xs"
                style={{ color: "var(--accent)" }}
              >
                ✓ Neural core &amp; memory modules loaded.
              </motion.p>
            )}
            {progress >= 30 && (
              <motion.p
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-mono text-xs"
                style={{ color: "var(--accent)" }}
              >
                ✓ RAG pipeline / vector store ready.
              </motion.p>
            )}
            {progress >= 60 && (
              <motion.p
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-mono text-xs"
                style={{ color: "var(--accent)" }}
              >
                ✓ Autonomous agent loops initialized.
              </motion.p>
            )}
            {progress >= 75 && (
              <motion.p
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-mono text-xs"
                style={{ color: "var(--accent)" }}
              >
                ✓ Knowledge graph &amp; context layer connected.
              </motion.p>
            )}
            {progress >= 90 && (
              <motion.p
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-mono text-xs"
                style={{ color: "var(--accent)" }}
              >
                ✓ UI canvas &amp; interaction handlers ready.
              </motion.p>
            )}

            {/* Current status with blinking cursor */}
            <p className="flex items-center gap-1 mt-1 font-mono text-xs" style={{ color: "var(--text-primary)" }}>
              <span className="leading-tight">{status}</span>
              <span
                className="inline-block w-1.5 h-3 animate-pulse"
                style={{ backgroundColor: "var(--accent)" }}
              />
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}