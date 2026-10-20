"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import HeroMedia from "./HeroMedia";

export default function HomeHero() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let frameId = null;

    const update = () => {
      frameId = null;

      const section = sectionRef.current;
      if (!section || !contentRef.current) return;

      const rect = section.getBoundingClientRect();
      const distance = Math.max(0, -rect.top);
      const progress = Math.min(
        distance / Math.max(rect.height * 0.65, 1),
        1
      );

      contentRef.current.style.transform = reducedMotion.matches
        ? "none"
        : `translate3d(0, ${-distance * 0.3}px, 0)`;

      contentRef.current.style.opacity = String(1 - progress);

      if (scrollRef.current) {
        scrollRef.current.style.opacity = String(
          Math.max(0, 1 - progress * 3)
        );
      }
    };

    const scheduleUpdate = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(update);
      }
    };

    update();

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    reducedMotion.addEventListener("change", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      reducedMotion.removeEventListener("change", scheduleUpdate);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="home-title"
      className="relative isolate flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#F5F5F5]"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <HeroMedia />
      </div>

      {/* Text moves upwards and fades on scroll */}
      <div
        ref={contentRef}
        className="mx-auto w-full max-w-[1600px] px-[5%] py-32 text-center text-white will-change-[transform,opacity]"
      >
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.16em] md:mb-8 md:text-base">
          A LIFE CONNECTED
        </p>

        <h1
          id="home-title"
          className="font-sans text-[clamp(42px,6vw,96px)] font-light leading-[1.1] tracking-[-0.035em]"
        >
          Where life comes together.
        </h1>

        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[56px] items-center justify-center rounded-full border border-white px-8 text-sm font-normal transition-colors duration-300 hover:bg-white hover:text-[#303437] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:mt-10 md:text-base"
        >
          Discover West Walk
        </Link>
      </div>

      <a
        ref={scrollRef}
        href="#home-content"
        aria-label="Scroll to the next section"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white md:bottom-12"
      >
        <span
          aria-hidden="true"
          className="flex h-[50px] w-[30px] justify-center rounded-full border border-white pt-2"
        >
          <span className="h-2 w-[2px] rounded-full bg-white motion-safe:animate-bounce" />
        </span>

        <span className="text-[11px] font-light">
          Scroll Down
        </span>
      </a>
    </section>
  );
}