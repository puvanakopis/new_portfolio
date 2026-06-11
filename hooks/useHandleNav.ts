"use client";

import { RefObject } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";
import type Lenis from "lenis";

interface UseHandleNavProps {
    overlayRef: RefObject<HTMLDivElement | null>;
    closeMenu?: () => void;
    /** URL to navigate to when the target hash isn't found on this page (cross-page links) */
    fallbackUrl?: string;
}

export function useHandleNav({
    overlayRef,
    closeMenu,
    fallbackUrl,
}: UseHandleNavProps) {
    const router = useRouter();

    const handleNav =
        (href: string) => (e: React.MouseEvent<HTMLElement>) => {
            e.preventDefault();

            const target = document.querySelector(href);

            closeMenu?.();

            // ── Cross-page navigation ──────────────────────────────────────
            // Target section doesn't exist on this page; navigate to fallbackUrl
            // with the same GSAP overlay transition.
            if (!target) {
                const url = fallbackUrl ?? href;
                const overlay = overlayRef.current;

                if (!overlay) {
                    router.push(url);
                    return;
                }

                gsap
                    .timeline()
                    .set(overlay, { display: "block", transformOrigin: "bottom" })
                    .fromTo(
                        overlay,
                        { scaleY: 0 },
                        { scaleY: 1, duration: 0.45, ease: "power3.inOut" }
                    )
                    .add(() => router.push(url))
                    .to(overlay, {
                        scaleY: 0,
                        transformOrigin: "top",
                        duration: 0.5,
                        ease: "power3.inOut",
                        delay: 0.05,
                    })
                    .set(overlay, { display: "none" });

                return;
            }

            // ── Same-page smooth scroll ────────────────────────────────────
            const lenis = (window as unknown as { lenis?: Lenis }).lenis;
            const overlay = overlayRef.current;

            const scrollToSection = () => {
                if (lenis) {
                    lenis.scrollTo(target as HTMLElement, {
                        offset: -80,
                        duration: 1.2,
                    });
                } else {
                    (target as HTMLElement).scrollIntoView({
                        behavior: "smooth",
                    });
                }
            };

            if (!overlay) {
                scrollToSection();
                return;
            }

            gsap
                .timeline()
                .set(overlay, {
                    display: "block",
                    transformOrigin: "bottom",
                })
                .fromTo(
                    overlay,
                    { scaleY: 0 },
                    {
                        scaleY: 1,
                        duration: 0.45,
                        ease: "power3.inOut",
                    }
                )
                .add(scrollToSection)
                .to(overlay, {
                    scaleY: 0,
                    transformOrigin: "top",
                    duration: 0.5,
                    ease: "power3.inOut",
                    delay: 0.05,
                })
                .set(overlay, {
                    display: "none",
                });
        };

    return { handleNav };
}