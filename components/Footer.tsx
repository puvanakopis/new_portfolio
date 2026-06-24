"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/Reveal";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Divider line reveal
      gsap.fromTo(
        ".footer-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left",
          ease: "power3.out",
          duration: 1.2,
          scrollTrigger: {
            trigger: root.current,
            start: "top 88%",
          },
        }
      );

      // Left content – slide in from bottom
      gsap.from(".footer-left", {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer-left",
          start: "top 90%",
        },
      });

      // Right column – slide in from right, stagger items
      gsap.from(".footer-right", {
        opacity: 0,
        x: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer-right",
          start: "top 90%",
        },
      });

      // Social icons bounce in
      gsap.utils.toArray<HTMLElement>(".footer-icon").forEach((icon, i) => {
        gsap.from(icon, {
          opacity: 0,
          scale: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: icon,
            start: "top 92%",
          },
        });
      });

      // Copyright text shimmer
      gsap.from(".footer-copy", {
        opacity: 0,
        y: 16,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer-copy",
          start: "top 95%",
        },
      });

      // Subtle parallax lift on entire footer
      gsap.to(root.current, {
        yPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={root} className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Divider */}
        <span className="footer-line block h-px w-full bg-[var(--border)]" />

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:items-center">
          {/* Left */}
          <div className="footer-left">
            <Reveal as="p" className="text-sm uppercase tracking-[0.3em] text-[var(--primary)]" direction="left">
              Let&apos;s Build Together
            </Reveal>

            <Reveal direction="up">
              <h3 className="mt-4 text-display text-3xl text-[var(--foreground)] md:text-4xl">
                Turning ideas into{" "}
                <span className="text-[var(--primary)]">intelligent systems</span>
              </h3>
            </Reveal>

            <Reveal delay={1} direction="up">
              <p className="mt-5 max-w-md mx-auto md:mx-0 text-sm leading-relaxed text-[var(--muted-foreground)]">
                Open to AI internships, freelance projects, and collaboration on
                LLM-based systems, RAG pipelines, and agentic architectures.
              </p>
            </Reveal>
          </div>

          {/* Right */}
          <div className="footer-right flex flex-col items-center md:items-end">
            <div className="flex gap-4">
              <a
                href="https://github.com/puvanakopis"
                target="_blank"
                className="footer-icon flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)] hover:scale-110"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/puvanakopis/"
                target="_blank"
                className="footer-icon flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)] hover:scale-110"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="mailto:puvanakopis@gmail.com"
                className="footer-icon flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)] hover:scale-110"
              >
                <MdEmail />
              </a>
            </div>

            <div className="footer-copy mt-8 text-center md:text-right">
              <p className="text-sm text-[var(--muted-foreground)]">
                Based in Sri Lanka
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[var(--muted-foreground)]">
                © {new Date().getFullYear()} Puvanakopis
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}