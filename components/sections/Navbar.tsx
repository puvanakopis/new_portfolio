"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ui/ThemeProvider";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Qualifications", href: "#qualifications" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#hero");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 20);

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(link.href);
        }
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setActive(href);

    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3 backdrop-blur-xl border-b" : "py-5"
          }`}
        style={{
          backgroundColor: scrolled
            ? "color-mix(in srgb, var(--bg) 85%, transparent)"
            : "transparent",
          borderColor: scrolled ? "var(--border)" : "transparent",
        }}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="font-display font-bold text-xl tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            PM<span style={{ color: "var(--accent)" }}>.</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`font-body text-sm transition-colors duration-300 hover:text-accent ${active === link.href ? "text-accent" : ""
                  }`}
                style={{
                  color:
                    active === link.href
                      ? "var(--accent)"
                      : "var(--text-muted)",
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-accent-subtle"
              style={{ color: "var(--text-muted)" }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-accent-subtle"
              style={{ color: "var(--text-muted)" }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[60px] left-4 right-4 z-40 rounded-2xl p-6 border md:hidden"
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--border)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left px-4 py-3 rounded-xl font-display font-medium text-sm transition-all duration-300 hover:bg-accent-subtle hover:text-accent ${active === link.href
                      ? "text-accent bg-accent-subtle"
                      : ""
                    }`}
                  style={{
                    color:
                      active === link.href
                        ? "var(--accent)"
                        : "var(--text-secondary)",
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}