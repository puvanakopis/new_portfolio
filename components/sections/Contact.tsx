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
            Let&apos;s build something{" "}
            <span className="text-[var(--primary)]">intelligent</span>
          </h2>
        </Reveal>

        {/* Content */}
        <div className="grid gap-14 md:grid-cols-[1.3fr_0.8fr] md:gap-20">
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
                  <span>GitHub</span>
                </div>
                <span className="translate-x-0 text-[var(--muted-foreground)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--primary)]">
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
                  <span>LinkedIn</span>
                </div>
                <span className="translate-x-0 text-[var(--muted-foreground)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--primary)]">
                  ↗
                </span>
              </a>

              <a
                href="mailto:puvanakopis@gmail.com"
                className="contact-link group flex items-center justify-between border-b border-[var(--border)] py-5 text-lg text-[var(--foreground)] transition-colors hover:text-[var(--primary)]"
              >
                <div className="flex items-center gap-4">
                  <span>Email</span>
                </div>
                <span className="translate-x-0 text-[var(--muted-foreground)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--primary)]">
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