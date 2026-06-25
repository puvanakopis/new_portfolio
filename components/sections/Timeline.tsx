"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/Reveal";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    startYear: 2023,
    endYear: 2024,
    role: "Full Stack Developer",
    company: "Fiverr (Freelance)",
    desc: "Developed responsive full-stack web applications using React.js, Next.js, Node.js, and Express.js. Built REST APIs, authentication systems, and scalable digital solutions while delivering client-focused projects across multiple domains.",
    tags: ["React.js", "Next.js", "Node.js", "Express.js"],
  },
];

export function Timeline() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Vertical progress bar draw animation
      gsap.fromTo(
        ".timeline-progress",
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 1,
          },
        }
      );

      // Horizontal divider lines
      gsap.utils.toArray<HTMLElement>(".timeline-line").forEach((line) => {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "left",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: line,
              start: "top 90%",
            },
          }
        );
      });

      // Year counter animate in
      gsap.utils.toArray<HTMLElement>(".timeline-year").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          x: -50,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // Role title slide up
      gsap.utils.toArray<HTMLElement>(".timeline-role").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // Description + tags fade in from right
      gsap.utils.toArray<HTMLElement>(".timeline-body").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          x: 60,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 87%" },
        });
      });

      // Tags stagger
      gsap.utils.toArray<HTMLElement>(".timeline-tag").forEach((tag, i) => {
        gsap.from(tag, {
          opacity: 0,
          y: 20,
          scale: 0.85,
          duration: 0.6,
          delay: i * 0.08,
          ease: "back.out(1.5)",
          scrollTrigger: { trigger: tag, start: "top 90%" },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="experience"
      className="overflow-hidden px-6 pb-14 pt-10 md:pb-28 md:pt-16"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal
          as="span"
          className="mb-6 block text-sm uppercase tracking-[0.3em] text-[var(--primary)]"
          direction="left"
        >
          Experience
        </Reveal>

        <Reveal direction="up">
          <h2 className="text-display mb-16 max-w-3xl text-4xl text-[var(--foreground)] md:text-6xl">
            Where I’ve worked and <span className="text-[var(--primary)]">what I’ve built?</span>
          </h2>
        </Reveal>

        <div className="relative">
          {/* Vertical progress line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-[var(--border)] md:block">
            <div
              className="timeline-progress absolute inset-0 origin-top bg-[var(--primary)]"
              style={{ opacity: 0.6 }}
            />
          </div>

          {items.map((item) => (
            <div key={`${item.startYear}-${item.role}`} className="group md:pl-8">
              <span className="timeline-line block h-px w-full bg-[var(--border)]" />

              <div className="timeline-item grid grid-cols-1 gap-6 py-8 md:grid-cols-[180px_1.2fr_1fr] md:items-center md:gap-10 md:py-10">
                {/* Year */}
                <span className="timeline-year text-display text-2xl text-[var(--muted-foreground)] transition-colors duration-300 group-hover:text-[var(--primary)] md:text-4xl whitespace-nowrap">
                  {item.startYear} - {item.endYear ?? "Present"}
                </span>

                {/* Role */}
                <div>
                  <h3 className="timeline-role text-display text-2xl text-[var(--foreground)] transition-all duration-300 group-hover:translate-x-2 group-hover:text-[var(--primary)] md:text-4xl">
                    {item.role}
                  </h3>

                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--primary)]">
                    {item.company}
                  </p>
                </div>

                {/* Description */}
                <div className="timeline-body">
                  <p className="leading-relaxed text-[var(--muted-foreground)]">
                    {item.desc}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="timeline-tag rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--muted-foreground)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <span className="timeline-line block h-px w-full bg-[var(--border)]" />
        </div>
      </div>
    </section>
  );
}