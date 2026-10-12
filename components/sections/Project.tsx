"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Github, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { projects, type ProjectCategory } from "@/data/projects";

const categories: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "All" },
  { label: "AI Agents & RAG", value: "AI Agents & RAG" },
  { label: "Full Stack", value: "Full Stack" },
  { label: "Data & ML", value: "Data & ML" },
];

export function Project() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const displayedProjects = useMemo(() => {
    if (showAll) return filteredProjects;
    return filteredProjects.slice(0, 4);
  }, [filteredProjects, showAll]);

  return (
    <section
      id="project"
      className="relative overflow-hidden px-6 pb-20 pt-12 md:pb-32 md:pt-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Label */}
        <Reveal
          as="span"
          className="mb-6 block text-sm uppercase tracking-[0.3em] text-[var(--primary)]"
          direction="left"
        >
          Project
        </Reveal>

        {/* Heading */}
        <Reveal direction="up">
          <h2 className="text-display text-4xl text-[var(--foreground)] md:text-5xl md:whitespace-nowrap">
            What I’ve built and <span className="text-[var(--primary)]">shipped?</span>
          </h2>
        </Reveal>

        {/* Minimalist Border-Only Filter in ONE line */}
        <Reveal direction="up" delay={1}>
          <div className="mt-8 flex items-center gap-2 sm:gap-3 overflow-x-auto whitespace-nowrap pb-2 scrollbar-none">
            {categories.map((cat) => {
              const count =
                cat.value === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === cat.value).length;
              const isActive = activeCategory === cat.value;

              return (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.value);
                    setShowAll(false);
                  }}
                  className={`group shrink-0 flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-mono transition-all duration-300 ${
                    isActive
                      ? "border-[var(--primary)] text-[var(--primary)]"
                      : "border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="opacity-60 text-[10px]">[{count}]</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Border-Only Project List with Visible Images (No background color, No popups) */}
        <div className="mt-14 border-t border-[var(--border)]">
          {displayedProjects.map((p, index) => (
            <div
              key={p.slug}
              className="group border-b border-[var(--border)] py-10 md:py-14 transition-colors duration-300 hover:border-[var(--primary)]/50"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-center">
                {/* Left Info Column */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  {/* Meta row */}
                  <div className="flex items-center gap-3 font-mono text-xs text-[var(--muted-foreground)]">
                    <span className="text-base font-bold text-[var(--primary)]">
                      0{index + 1}
                    </span>
                    <span>•</span>
                    <span className="rounded-full border border-[var(--border)] px-2.5 py-0.5 uppercase text-[11px]">
                      {p.category}
                    </span>
                    <span>•</span>
                    <span>{p.year}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-display mt-3 text-2xl font-medium text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--primary)] md:text-3xl lg:text-4xl">
                    {p.title}
                  </h3>

                  {/* Subtitle / Overview */}
                  <p className="mt-3 text-sm md:text-base leading-relaxed text-[var(--muted-foreground)] line-clamp-3">
                    {p.overview}
                  </p>

                  {/* Tech stack tags with border only */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted-foreground)] transition-colors group-hover:border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action links */}
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-2 rounded-full border border-[var(--primary)] px-5 py-2.5 text-xs font-mono font-medium text-[var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-black"
                        data-cursor-hover
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    )}

                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2.5 text-xs font-mono font-medium text-[var(--foreground)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                        data-cursor-hover
                      >
                        <Github className="h-4 w-4" />
                        <span>Source Code</span>
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Image Column (Cleanly framed with border only, no background fill) */}
                <div className="lg:col-span-5">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[var(--border)] transition-all duration-500 group-hover:border-[var(--primary)]/40">
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show All / Show Less Toggle Button */}
        {filteredProjects.length > 4 && (
          <div className="mt-14 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="group inline-flex items-center gap-3 rounded-full border border-[var(--primary)] px-8 py-3.5 text-xs font-mono uppercase tracking-widest text-[var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-black"
              data-cursor-hover
            >
              <span>
                {showAll ? "Show Less" : `Show All (${filteredProjects.length})`}
              </span>
              <ArrowUpRight
                className={`h-4 w-4 transition-transform duration-300 ${
                  showAll
                    ? "-rotate-45"
                    : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}