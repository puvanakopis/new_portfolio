"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { projects, type Project } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

function Card({ p, index }: { p: Project; index: number }) {
  return (
    <div
      className="group relative block w-full shrink-0 overflow-hidden rounded-2xl border border-[var(--border)] md:w-[33vw] bg-[var(--background)]/50 backdrop-blur-sm"
      style={{ opacity: 0 }}
      data-project-card
    >
      <div className="aspect-[2/1] overflow-hidden relative">
        <Image
          src={p.img}
          alt={p.title}
          width={800}
          height={600}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[var(--background)]/0 transition-colors duration-500 group-hover:bg-[var(--background)]/40" />
        <span className="absolute right-4 top-4 text-[10px] font-semibold bg-[var(--background)]/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[var(--muted-foreground)] border border-[var(--border)]">
          {p.year}
        </span>
      </div>
      <div className="flex flex-col justify-between p-5 min-h-[250px]">
        <div>
          <h3 className="text-display text-xl text-[var(--foreground)] md:text-2xl font-medium">
            {p.title}
          </h3>
          <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed line-clamp-4">
            {p.overview}
          </p>
          <div className="mt-3.5 flex flex-wrap gap-1.5 line-clamp-1">
            {p.tags.slice(0, 4).map((t) => (
              <span
                key={t}
                className="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-[10px] text-[var(--muted-foreground)]"
              >
                {t}
              </span>
            ))}
            {p.tags.length > 4 && (
              <span className="rounded-full border border-transparent px-1 py-0.5 text-[10px] text-[var(--muted-foreground)]">
                +{p.tags.length - 4}
              </span>
            )}
          </div>
        </div>
        {(p.githubUrl || p.liveUrl) && (
          <div className="mt-4 flex gap-2">
            {p.githubUrl && (
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full border border-[var(--border)] px-3 py-1.5 text-[10px] font-medium text-[var(--foreground)] transition-all duration-300 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)]"
                data-cursor-hover
              >
                <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            )}
            {p.liveUrl && (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full border border-[var(--border)] px-3 py-1.5 text-[10px] font-medium text-[var(--foreground)] transition-all duration-300 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)]"
                data-cursor-hover
              >
                <svg className="h-3 w-3 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function Project() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const trackEl = track.current!;
      const scrollDist = trackEl.scrollWidth - window.innerWidth;

      gsap.utils.toArray<HTMLElement>("[data-project-card]").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            delay: i * 0.12,
            scrollTrigger: { trigger: section.current, start: "top 80%" },
          }
        );
      });

      gsap.to(trackEl, {
        x: -scrollDist,
        ease: "none",
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: () => `+=${scrollDist}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    mm.add("(max-width: 767px)", () => {
      gsap.utils.toArray<HTMLElement>("[data-project-card]").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 85%" },
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={section}
      id="project"
      className="overflow-hidden px-6 pb-20 pt-10 md:pb-36 md:pt-16"
    >
      {/* Container */}
      <div className="mx-auto max-w-7xl">
        {/* Section Label */}
        <Reveal
          as="span"
          className="mb-6 block text-sm uppercase tracking-[0.3em] text-[var(--primary)]"
          direction="left"
        >
          Selected Project
        </Reveal>

        {/* Heading */}
        <Reveal direction="up">
          <h2 className="text-display mb-16 max-w-4xl text-4xl text-[var(--foreground)] md:text-6xl">
            Featured <span className="text-[var(--primary)]">Projects</span>
          </h2>
        </Reveal>
      </div>

      <div
        ref={track}
        className="flex w-full flex-col gap-6 px-0 md:w-max md:flex-row md:items-center md:px-12 md:pt-10 pb-16 md:pb-24"
      >
        {projects.map((p, i) => (
          <Card key={p.slug} p={p} index={i} />
        ))}
      </div>
    </section>
  );
}