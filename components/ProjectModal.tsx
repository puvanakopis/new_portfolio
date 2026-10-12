"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink, Github, Calendar, Layers, Sparkles } from "lucide-react";
import { type Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!project) return;

    const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
    lenis?.stop();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
      lenis?.start();
    };
  }, [project, handleKeyDown]);

  return (
    <AnimatePresence>
      {project && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          className="fixed inset-0 z-[95] flex items-center justify-center p-4 sm:p-6 lg:p-10"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#121212] shadow-2xl shadow-black/80"
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 bg-[#171717]/90 px-6 py-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-2.5 w-2.5 rounded-full bg-[var(--primary)]" />
                <span className="text-xs uppercase tracking-widest text-[var(--muted-foreground)] font-mono">
                  Project Deep Dive
                </span>
                <span className="text-xs text-white/30">•</span>
                <span className="text-xs font-medium text-[var(--foreground)]">
                  {project.category}
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="group flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 p-1.5 px-2.5 text-xs font-medium text-[var(--muted-foreground)] transition-all hover:bg-white/15 hover:text-white"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
                <span className="text-[10px] uppercase font-mono tracking-wider opacity-60 group-hover:opacity-100">
                  ESC
                </span>
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="overflow-y-auto p-6 md:p-8">
              {/* Media Preview Box */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#181818]">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-md border border-white/10">
                      {project.year}
                    </span>
                    {project.subtitle && (
                      <span className="hidden sm:inline-block rounded-full bg-[var(--primary)]/20 px-3 py-1 text-xs font-medium text-[var(--primary)] backdrop-blur-md border border-[var(--primary)]/30">
                        {project.subtitle}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <div className="mt-6">
                <h3 className="text-display text-2xl md:text-3xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[var(--muted-foreground)]">
                  {project.overview}
                </p>
              </div>

              {/* Technologies */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <h4 className="text-xs uppercase tracking-widest font-mono text-[var(--muted-foreground)] flex items-center gap-2 mb-3">
                  <Layers className="h-3.5 w-3.5 text-[var(--primary)]" />
                  Technologies & Architecture Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/90 hover:border-[var(--primary)]/40 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black transition-transform hover:scale-105 active:scale-95"
                  >
                    Launch Live Demo
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-white/10 hover:border-white/30"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
