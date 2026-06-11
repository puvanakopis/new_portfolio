"use client";

import { useRef } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getProject, projects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { useHandleNav } from "@/hooks/useHandleNav";

interface Props {
  params: { slug: string };
}

function ContentBlock({
  label,
  content,
}: {
  label: string;
  content: string;
}) {
  return (
    <Reveal>
      <div className="border-t border-[var(--border)] py-10 md:grid md:grid-cols-[220px_1fr] md:gap-16">
        <span className="mb-4 block text-sm uppercase tracking-[0.3em] text-[var(--primary)] md:mb-0">
          {label}
        </span>

        <p className="max-w-3xl text-lg leading-relaxed text-[var(--muted-foreground)]">
          {content}
        </p>
      </div>
    </Reveal>
  );
}

export default function ProjectPage({ params }: Props) {
  const project = getProject(params.slug);
  const overlayRef = useRef<HTMLDivElement>(null);

  const { handleNav } = useHandleNav({ overlayRef, fallbackUrl: "/#project" });

  if (!project) {
    notFound();
  }

  return (
    <SmoothScrollProvider>
      {/* Page-transition overlay */}
      <div
        ref={overlayRef}
        className="pointer-events-none fixed inset-0 z-[60] hidden origin-bottom scale-y-0 bg-[var(--primary)]"
      />

      <main className="relative min-h-screen bg-[var(--background)]">
        <CustomCursor />

        <section className="px-6 pt-28 pb-20 md:pt-36">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <a
                onClick={handleNav("#project")}
                data-cursor-hover
                className="group inline-flex cursor-pointer items-center gap-2 text-sm uppercase tracking-[0.15em] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
                Back to project
              </a>
            </Reveal>

            <Reveal>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--muted-foreground)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
                  >
                    {tag}
                  </span>
                ))}

                <span className="ml-2 text-sm text-[var(--muted-foreground)]">
                  {project.year}
                </span>
              </div>
            </Reveal>

            <Reveal>
              <h1 className="text-display mt-8 max-w-5xl text-5xl leading-none text-[var(--foreground)] md:text-7xl lg:text-8xl">
                {project.title}
              </h1>
            </Reveal>

            <Reveal>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--muted-foreground)]">
                {project.overview}
              </p>
            </Reveal>

            <Reveal>
              <div className="mt-14 grid gap-10 border-t border-[var(--border)] pt-10 md:grid-cols-3">
                <div>
                  <span className="block text-sm uppercase tracking-[0.15em] text-[var(--muted-foreground)]">
                    Role
                  </span>

                  <p className="mt-2 text-[var(--foreground)]">
                    {project.role}
                  </p>
                </div>

                <div>
                  <span className="block text-sm uppercase tracking-[0.15em] text-[var(--muted-foreground)]">
                    Client
                  </span>

                  <p className="mt-2 text-[var(--foreground)]">
                    {project.client}
                  </p>
                </div>

                {project.liveUrl && (
                  <div>
                    <span className="block text-sm uppercase tracking-[0.15em] text-[var(--muted-foreground)]">
                      Live Site
                    </span>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-hover
                      className="mt-2 inline-flex items-center gap-2 text-[var(--primary)] transition-all hover:gap-3"
                    >
                      Visit Website ↗
                    </a>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-6">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={1600}
                  height={900}
                  priority
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <ContentBlock
              label="Overview"
              content={project.overview}
            />

            <ContentBlock
              label="Challenge"
              content={project.challenge}
            />

            <ContentBlock
              label="Solution"
              content={project.solution}
            />

            <ContentBlock
              label="Outcome"
              content={project.outcome}
            />
          </div>
        </section>
      </main>
    </SmoothScrollProvider>
  );
}