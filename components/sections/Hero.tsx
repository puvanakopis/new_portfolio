"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useHandleNav } from "@/hooks/useHandleNav";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const blobs = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const { handleNav } = useHandleNav({
    overlayRef,
  });

  useEffect(() => {
    let played = false;

    const playIntro = () => {
      if (played) return;
      played = true;
      introTl?.play(0);
    };

    let introTl: gsap.core.Timeline | undefined;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power4.out" },
      });

      introTl = tl;

      tl.from(".hero-eyebrow", {
        opacity: 0,
        y: 16,
        duration: 0.8,
      })
        .from(
          ".hero-word > span",
          {
            yPercent: 110,
            duration: 1.1,
            stagger: 0.12,
          },
          "-=0.4"
        )
        .from(
          ".hero-fade",
          {
            opacity: 0,
            y: 24,
            duration: 1,
            ease: "power3.out",
            stagger: 0.12,
          },
          "-=0.5"
        );

      tl.fromTo(
        ".hero-image",
        {
          clipPath: "inset(100% 0% 0% 0%)",
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.3,
        },
        "-=1.1"
      ).fromTo(
        ".hero-image-inner",
        {
          scale: 1.3,
        },
        {
          scale: 1,
          duration: 1.3,
        },
        "<"
      );

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.to(".hero-text-col", {
          yPercent: -18,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.to(".hero-image", {
          yPercent: 22,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.to(".hero-blobs", {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    }, root);

    window.addEventListener("preloader:done", playIntro);

    const fallback = window.setTimeout(playIntro, 2800);

    let onMove: ((e: MouseEvent) => void) | undefined;

    if (window.matchMedia("(pointer: fine)").matches) {
      onMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 60;
        const y = (e.clientY / window.innerHeight - 0.5) * 60;

        gsap.to(blobs.current, {
          x,
          y,
          duration: 1.2,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", onMove);
    }

    return () => {
      window.removeEventListener("preloader:done", playIntro);
      window.clearTimeout(fallback);

      if (onMove) {
        window.removeEventListener("mousemove", onMove);
      }

      ctx.revert();
    };
  }, []);

  return (
    <>
      {/* Page Transition Overlay */}
      <div
        ref={overlayRef}
        className="pointer-events-none fixed inset-0 z-[60] hidden origin-bottom scale-y-0 bg-[var(--primary)]"
      />

      <section
        ref={root}
        id="top"
        className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-20 pt-28"
      >
        {/* Animated Gradient Blobs */}
        <div
          ref={blobs}
          className="hero-blobs pointer-events-none absolute inset-0 -z-10"
        >
          <div
            className="animate-blob absolute left-[10%] top-[20%] h-[420px] w-[420px] rounded-full blur-[120px]"
            style={{
              backgroundColor: "var(--primary)",
              opacity: 0.2,
            }}
          />

          <div
            className="animate-blob absolute right-[8%] top-[40%] h-[360px] w-[360px] rounded-full blur-[140px] [animation-delay:-6s]"
            style={{
              backgroundColor: "var(--primary)",
              opacity: 0.1,
            }}
          />

          <div
            className="animate-blob absolute bottom-[10%] left-[40%] h-[300px] w-[300px] rounded-full blur-[120px] [animation-delay:-12s]"
            style={{
              backgroundColor: "var(--foreground)",
              opacity: 0.05,
            }}
          />
        </div>

        {/* Dot Grid */}
        <div className="dot-grid pointer-events-none absolute inset-0 -z-10 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.35fr_0.9fr] lg:gap-14">
          {/* Text Column */}
          <div className="hero-text-col min-w-0">
            <p className="hero-eyebrow mb-8 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[var(--muted-foreground)]">
              <span className="h-px w-10 bg-[var(--primary)]" />
              Available for AI Internships
            </p>

            <h1
              className="text-display flex flex-col text-[var(--foreground)]"
              style={{ fontSize: "clamp(2.25rem, 5.2vw, 5rem)" }}
            >
              <span className="reveal-mask hero-word">
                <span className="inline-block">Hi, I'm</span>
              </span>

              <span className="reveal-mask hero-word mt-2">
                <span className="inline-block uppercase text-[var(--primary)]">
                  Puvanakopis
                </span>
              </span>
            </h1>

            <p className="hero-fade mt-10 max-w-2xl text-lg leading-relaxed text-[var(--muted-foreground)]">
              Software Engineering undergraduate specializing in AI
              Engineering, Agentic AI Systems, Large Language Models (LLMs),
              Retrieval-Augmented Generation (RAG), and Full-Stack AI
              Applications.
            </p>

            {/* CTA Buttons */}
            <div className="hero-fade mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={handleNav("#project")}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[var(--primary)] px-8 py-4 text-sm font-medium uppercase tracking-wider text-[var(--primary-foreground)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 -z-0 origin-left scale-x-0 bg-[var(--foreground)] transition-transform duration-500 ease-out group-hover:scale-x-100" />

                <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--background)]">
                  View Projects
                </span>

                <span className="relative z-10 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-[var(--background)]">
                  ↓
                </span>
              </button>

              <button
                onClick={handleNav("#contact")}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-[var(--border)] px-8 py-4 text-sm font-medium uppercase tracking-wider transition-colors hover:border-[var(--primary)]"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--primary)]">
                  Let's Talk
                </span>

                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-[var(--primary)]">
                  →
                </span>
              </button>
            </div>

            {/* Social Links */}
            <div className="hero-fade mt-14">
              <div className="flex flex-wrap items-center gap-5 pt-8">
                <a
                  href="https://github.com/puvanakopis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)]/50 transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="https://www.linkedin.com/in/puvanakopis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)]/50 transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  <FaLinkedinIn size={22} />
                </a>

                <a
                  href="mailto:puvanakopis@gmail.com"
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)]/50 transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  <MdEmail size={22} />
                </a>

                <div className="mx-2 hidden h-px w-20 bg-[var(--border)] md:block" />

                <p className="text-sm tracking-[0.15em] text-[var(--muted-foreground)]">
                  Batticaloa, Sri Lanka
                </p>
              </div>
            </div>
          </div>

          {/* Portrait */}
          <div className="hero-image relative mx-auto hidden w-full max-w-sm lg:block lg:max-w-none">
            <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
              <Image
                src="/portrait.png"
                alt="Portrait of Puvanakopis"
                width={800}
                height={1000}
                className="hero-image-inner aspect-[4/5] w-full object-cover"
                priority
              />
            </div>

            <div className="hero-fade absolute bottom-5 right-5 rounded-2xl border border-[var(--border)] bg-[var(--background)]/80 px-6 py-4 backdrop-blur-xl shadow-lg">
              <div className="text-display text-2xl text-[var(--primary)]">
                Open
              </div>

              <p className="text-xs uppercase tracking-wider text-[var(--muted-foreground)]">
                for projects & internships
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}