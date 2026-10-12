"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink, FileText, Loader2 } from "lucide-react";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl?: string;
}

export function CvModal({
  isOpen,
  onClose,
  pdfUrl = "/Puvanakopis_CV.pdf",
}: CvModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;

    // Reset loading state on open
    setIsLoading(true);

    // Stop Lenis smooth scrolling and lock body scroll
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
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="CV Preview"
          className="fixed inset-0 z-[95] flex items-center justify-center p-4 sm:p-6 lg:p-8"
        >
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex h-[88vh] max-h-[920px] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#121212] shadow-2xl shadow-black/70"
          >
            {/* Header bar */}
            <div className="flex flex-wrap items-center justify-between border-b border-white/10 bg-[#181818]/90 px-5 py-3.5 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-white tracking-wide">
                      Puvanakopis — CV
                    </h3>
                    <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[var(--primary)]/10 px-2.5 py-0.5 text-[11px] font-medium text-[var(--primary)] border border-[var(--primary)]/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                      PDF Preview
                    </span>
                  </div>
                  <p className="text-xs text-[var(--muted-foreground)]">
                    AI Engineering & Software Systems
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/10 hover:border-white/20"
                  title="Open in new browser tab"
                >
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  <span className="hidden sm:inline">New Tab</span>
                </a>

                <a
                  href={pdfUrl}
                  download="Puvanakopis_CV.pdf"
                  className="group inline-flex items-center gap-1.5 rounded-lg border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-3 py-1.5 text-xs font-medium text-[var(--primary)] transition-colors hover:bg-[var(--primary)] hover:text-black"
                  title="Download PDF"
                >
                  <Download className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>

                <div className="mx-1 h-5 w-px bg-white/10" />

                <button
                  type="button"
                  onClick={onClose}
                  className="group flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 p-1.5 sm:px-2.5 sm:py-1.5 text-xs font-medium text-[var(--muted-foreground)] transition-all hover:bg-white/15 hover:text-white"
                  title="Close preview (Esc)"
                  aria-label="Close preview"
                >
                  <X className="h-4 w-4" />
                  <span className="hidden sm:inline text-[10px] uppercase font-mono tracking-wider opacity-60 group-hover:opacity-100">
                    ESC
                  </span>
                </button>
              </div>
            </div>

            {/* Document preview container */}
            <div className="relative flex-1 bg-[#1a1a1a]">
              {isLoading && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[#141414]">
                  <Loader2 className="h-8 w-8 animate-spin text-[var(--primary)]" />
                  <p className="text-xs text-[var(--muted-foreground)] tracking-wide uppercase">
                    Loading CV...
                  </p>
                </div>
              )}

              <iframe
                src={`${pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
                title="Puvanakopis CV"
                className="h-full w-full border-0"
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
