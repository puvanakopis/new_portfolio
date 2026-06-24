"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { projects, type Project } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

function Card({ p, index }: { p: Project; index: number }) {
  const content = (
    <>
      <div className="aspect-[3/2] overflow-hidden">
        <Image
          src={p.img}
          alt={p.title}
          width={800}
          height={600}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[var(--background)]/0 transition-colors duration-500 group-hover:bg-[var(--background)]/40" />
      </div>
      <div className="flex items-end justify-between gap-4 p-6">
        <div>
          <h3 className="text-display text-2xl text-[var(--foreground)] md:text-3xl">
            {p.title}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted-foreground)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        {p.liveUrl && (
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-lg transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-[var(--primary-foreground)]">
            ↗
          </span>
        )}
      </div>
      <span className="absolute right-6 top-6 text-xs text-[var(--muted-foreground)]">
        {p.year}
      </span>
    </>
  );

  if (p.liveUrl) {
    return (
      <a
        href={p.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor-hover
        className="group relative block w-full shrink-0 overflow-hidden rounded-2xl border border-[var(--border)] md:w-[34vw]"
        style={{ opacity: 0 }}
        data-project-card
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className="group relative block w-full shrink-0 overflow-hidden rounded-2xl border border-[var(--border)] md:w-[34vw]"
      style={{ opacity: 0 }}
      data-project-card
    >
      {content}
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
      className="overflow-hidden px-6 pb-14 pt-10 md:pb-28 md:pt-16"
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
        className="flex w-full flex-col gap-6 px-6 md:w-max md:flex-row md:items-center md:px-12 md:pt-10"
      >
        {projects.map((p, i) => (
          <Card key={p.slug} p={p} index={i} />
        ))}
      </div>
    </section>
  );
}