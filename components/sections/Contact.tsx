"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/Reveal";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animated border-top line reveal
      gsap.fromTo(
        ".contact-divider",
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".contact-divider", start: "top 88%" },
        }
      );

      // Left content slide from left
      gsap.from(".contact-left", {
        opacity: 0,
        x: -70,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".contact-left", start: "top 80%" },
      });

      // Right links stagger slide in from right
      gsap.utils.toArray<HTMLElement>(".contact-link").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          x: 50,
          duration: 0.8,
          delay: i * 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      // CTA button scale + fade
      gsap.from(".contact-cta", {
        opacity: 0,
        scale: 0.88,
        duration: 0.9,
        ease: "back.out(1.6)",
        scrollTrigger: { trigger: ".contact-cta", start: "top 85%" },
      });

      // Big heading char-by-char shimmer on scroll
      gsap.to(".contact-heading", {
        backgroundPositionX: "0%",
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
          end: "bottom 50%",
          scrub: 1,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="contact"
      className="overflow-hidden px-6 pb-14 pt-10 md:pb-28 md:pt-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Label */}
        <Reveal
          as="span"
          className="mb-6 block text-sm uppercase tracking-[0.3em] text-[var(--primary)]"
          direction="left"
        >
          Contact
        </Reveal>

        {/* Heading */}
        <Reveal direction="up">
          <h2 className="contact-heading text-display mb-16 max-w-4xl text-4xl text-[var(--foreground)] md:text-6xl">
            Let’s connect and build <span className="text-[var(--primary)]">intelligent solutions</span>
          </h2>
        </Reveal>

        {/* Ambient background glows */}
        <div className="absolute right-0 bottom-0 -z-10 h-80 w-80 rounded-full bg-[var(--primary)]/10 blur-[130px] pointer-events-none" />
        <div className="absolute left-1/4 top-1/3 -z-10 h-64 w-64 rounded-full bg-[var(--primary)]/5 blur-[100px] pointer-events-none animate-blob" />

        {/* Content */}
        <div className="grid gap-14 md:grid-cols-[1.2fr_0.8fr] md:gap-20">
          {/* Divider */}
          <div className="col-span-full contact-divider h-px w-full bg-[var(--border)]" />

          {/* Left Side */}
          <div className="contact-left pt-6">
            <span className="mb-5 block text-sm uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
              Get in touch
            </span>

            <p className="mt-8 max-w-xl leading-relaxed text-[var(--muted-foreground)]">
              Exploring opportunities to collaborate, learn, and build impactful
              AI-driven solutions. Currently open to internships and exciting
              project opportunities in AI Engineering and software development.
            </p>

            {/* Hero Style CTA */}
            <div className="contact-cta mt-10 inline-block">
              <a
                href="mailto:puvanakopis@gmail.com"
                data-cursor-hover
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[var(--primary)] px-8 py-4 text-sm font-medium uppercase tracking-wider text-[var(--primary-foreground)]"
              >
                <span className="absolute inset-0 -z-0 origin-left scale-x-0 bg-[var(--foreground)] transition-transform duration-500 ease-out group-hover:scale-x-100" />

                <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--background)]">
                  Start a conversation
                </span>

                <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--background)]">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="pt-6">
            <span className="mb-5 block text-sm uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
              Connect
            </span>

            <div className="space-y-4">
              <a
                href="https://github.com/puvanakopis"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link group flex items-center justify-between border-b border-[var(--border)] py-5 text-lg text-[var(--foreground)] transition-colors hover:text-[var(--primary)]"
              >
                <div className="flex items-center gap-4">
                  <svg className="h-5 w-5 fill-current text-[var(--muted-foreground)] group-hover:text-[var(--primary)] transition-colors" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <div className="flex flex-col">
                    <span>GitHub</span>
                    <span className="text-sm text-[var(--muted-foreground)] font-mono">
                      Check out my code
                    </span>
                  </div>
                </div>
                <span className="translate-x-0 text-[var(--muted-foreground)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--primary)] group-hover:rotate-45">
                  ↗
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/puvanakopis/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link group flex items-center justify-between border-b border-[var(--border)] py-5 text-lg text-[var(--foreground)] transition-colors hover:text-[var(--primary)]"
              >
                <div className="flex items-center gap-4">
                  <svg className="h-5 w-5 fill-current text-[var(--muted-foreground)] group-hover:text-[var(--primary)] transition-colors" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <div className="flex flex-col">
                    <span>LinkedIn</span>
                    <span className="text-sm text-[var(--muted-foreground)] font-mono">
                      Connect professionally
                    </span>
                  </div>
                </div>
                <span className="translate-x-0 text-[var(--muted-foreground)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--primary)] group-hover:rotate-45">
                  ↗
                </span>
              </a>

              <a
                href="https://x.com/puvanakopis"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link group flex items-center justify-between border-b border-[var(--border)] py-5 text-lg text-[var(--foreground)] transition-colors hover:text-[var(--primary)]"
              >
                <div className="flex items-center gap-4">
                  <svg className="h-4 w-4 fill-current text-[var(--muted-foreground)] group-hover:text-[var(--primary)] transition-colors mx-[2px]" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <div className="flex flex-col">
                    <span>Twitter / X</span>
                    <span className="text-sm text-[var(--muted-foreground)] font-mono">
                      Follow my updates
                    </span>
                  </div>
                </div>
                <span className="translate-x-0 text-[var(--muted-foreground)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--primary)] group-hover:rotate-45">
                  ↗
                </span>
              </a>

              <a
                href="mailto:puvanakopis@gmail.com"
                className="contact-link group flex items-center justify-between border-b border-[var(--border)] py-5 text-lg text-[var(--foreground)] transition-colors hover:text-[var(--primary)]"
              >
                <div className="flex items-center gap-4">
                  <svg className="h-5 w-5 fill-none stroke-current text-[var(--muted-foreground)] group-hover:text-[var(--primary)] transition-colors" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <div className="flex flex-col">
                    <span>Email</span>
                    <span className="text-sm text-[var(--muted-foreground)] font-mono">
                      Drop me a message
                    </span>
                  </div>
                </div>
                <span className="translate-x-0 text-[var(--muted-foreground)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--primary)] group-hover:rotate-45">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}