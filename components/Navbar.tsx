"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useHandleNav } from "@/hooks/useHandleNav";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Project", href: "#project" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  const overlayRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const { handleNav } = useHandleNav({
    overlayRef,
    closeMenu: () => setOpen(false),
  });

  // Entrance animation: nav slides down on load
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(navRef.current,
        { y: -80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.3,
        }
      );

      // Stagger nav links
      gsap.fromTo(".nav-link",
        { opacity: 0, y: -16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.6,
        }
      );

      // CTA button fade in
      gsap.fromTo(".nav-cta",
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.5)",
          delay: 1.1,
        }
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const sectionIds = ["about", "services", "project", "experience", "contact"];

    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollY > 40);
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);

      // Use getBoundingClientRect for accurate position relative to viewport
      const threshold = window.innerHeight * 0.4;
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= threshold) {
          current = `#${id}`;
        }
      }
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Page Transition Overlay */}
      <div
        ref={overlayRef}
        className="pointer-events-none fixed inset-0 z-[60] hidden origin-bottom scale-y-0 bg-[var(--primary)]"
      />

      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 z-[100] h-[2px] bg-[var(--primary)] transition-all duration-75 ease-linear"
        style={{ width: `${scrollProgress}%`, boxShadow: "0 0 10px var(--primary)" }}
      />

      <header
        ref={navRef}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open
          ? "border-b border-[var(--border)] bg-[var(--background)]/70 backdrop-blur-xl"
          : "border-b border-transparent"
          }`}
      >
        <div className="mx-auto max-w-7xl px-6">
          <nav
            className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "h-20" : "h-24"
              }`}
          >
            {/* Logo */}
            <a
              onClick={handleNav("#top")}
              className="cursor-pointer text-display text-xl uppercase tracking-tight text-[var(--foreground)] transition-opacity duration-300 hover:opacity-70"
            >
              Puvanakopis
              <span className="text-[var(--primary)]">.</span>
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden items-center gap-10 md:flex">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    onClick={handleNav(link.href)}
                    className={`nav-link relative inline-block cursor-pointer text-base transition-colors duration-300 hover:text-[var(--foreground)] ${activeSection === link.href
                      ? "text-[var(--foreground)]"
                      : "text-[var(--muted-foreground)]"
                      }`}
                  >
                    {link.label}
                    {/* Active underline dot */}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-[var(--primary)] transition-all duration-300 ${activeSection === link.href ? "w-full" : "w-0"
                        }`}
                    />
                  </a>
                </li>
              ))}
            </ul>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <a
                onClick={handleNav("#contact")}
                className="nav-cta hidden cursor-pointer rounded-full border border-[var(--primary)] px-5 py-2 text-sm font-medium text-[var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] hover:shadow-[0_0_20px_rgba(200,255,0,0.3)] md:inline-flex"
              >
                Let&apos;s Talk
              </a>

              {/* Mobile Toggle */}
              <button
                onClick={() => setOpen(!open)}
                className="text-2xl text-[var(--foreground)] md:hidden transition-transform duration-200 hover:scale-110"
                aria-label="Toggle Menu"
              >
                {open ? <HiX /> : <HiOutlineMenuAlt3 />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-500 md:hidden ${open
            ? "max-h-[400px] border-t border-[var(--border)]"
            : "max-h-0"
            }`}
        >
          <div className="mx-auto max-w-7xl px-6 py-6">
            <ul className="flex flex-col gap-5">
              {links.map((link, i) => (
                <li
                  key={link.href}
                  style={{
                    transitionDelay: open ? `${i * 60}ms` : "0ms",
                    opacity: open ? 1 : 0,
                    transform: open ? "translateX(0)" : "translateX(-16px)",
                    transition: "opacity 0.4s ease, transform 0.4s ease",
                  }}
                >
                  <a
                    onClick={handleNav(link.href)}
                    className={`block cursor-pointer text-lg transition-colors hover:text-[var(--foreground)] ${activeSection === link.href
                      ? "text-[var(--primary)]"
                      : "text-[var(--muted-foreground)]"
                      }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              onClick={handleNav("#contact")}
              className="mt-6 inline-flex cursor-pointer rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-medium text-[var(--primary-foreground)]"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </header>
    </>
  );
}