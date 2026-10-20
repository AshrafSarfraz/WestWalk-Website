"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { homeImages, images } from "@/data/site";

const experiences = [
  {
    label: "DINE & DISCOVER",
    title: "Follow your curiosity.",
    description:
      "Find your next favourite café, restaurant or shop on the boulevard. Come for a coffee. Stay for the company.",
    image: homeImages.dining,
    alt: "NOIR café terrace on the West Walk boulevard",
    href: "/destination/",
  },
  {
    label: "WEST WALK RESIDENCES",
    title: "Make yourself at home.",
    description:
      "Furnished apartments and duplexes, with everyday life on your doorstep. Your own quiet space, connected to everything you love.",
    image: images.residence,
    alt: "A furnished West Walk apartment with a bright living room",
    href: "/residences/",
  },
  {
    label: "WEST WALK RETAJ HOTEL",
    title: "Stay a little longer.",
    description:
      "A welcoming base in Doha, with room to explore and time to unwind. Make the boulevard part of your stay.",
    image: images.retaj_entrance,
    alt: "West Walk Retaj Hotel lobby and reception",
    href: "/hotels/",
  },
];

export default function HomeExperiences() {
  const sliderRef = useRef(null);
  const positionsRef = useRef([0]);

  const [positions, setPositions] = useState([0]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    function updateActiveSlide() {
      const offsets = positionsRef.current;

      const nearest = offsets.reduce(
        (best, position, index) =>
          Math.abs(slider.scrollLeft - position) <
          Math.abs(slider.scrollLeft - offsets[best])
            ? index
            : best,
        0
      );

      setActiveSlide(nearest);
    }

    function measureSlider() {
      const cards = Array.from(slider.children);
      const maxScroll = Math.max(
        0,
        slider.scrollWidth - slider.clientWidth
      );

      const nextPositions = [0];
      const firstLeft = cards[0]?.getBoundingClientRect().left ?? 0;

      for (const card of cards.slice(1)) {
        const offset = card.getBoundingClientRect().left - firstLeft;
        const position = Math.min(offset, maxScroll);
        const previous = nextPositions[nextPositions.length - 1];

        if (position - previous > 1) {
          nextPositions.push(position);
        }
      }

      const lastPosition = nextPositions[nextPositions.length - 1];

      if (maxScroll - lastPosition > 1) {
        nextPositions.push(maxScroll);
      }

      positionsRef.current = nextPositions;
      setPositions(nextPositions);
      updateActiveSlide();
    }

    const observer = new ResizeObserver(measureSlider);

    observer.observe(slider);

    Array.from(slider.children).forEach((card) => {
      observer.observe(card);
    });

    slider.addEventListener("scroll", updateActiveSlide, {
      passive: true,
    });

    measureSlider();

    return () => {
      observer.disconnect();
      slider.removeEventListener("scroll", updateActiveSlide);
    };
  }, []);

  function goToSlide(index) {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    sliderRef.current?.scrollTo({
      left: positionsRef.current[index],
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <section
      id="discover"
      aria-labelledby="discover-title"
      className="overflow-hidden bg-[#F5F5F5] px-[5%] py-16 lg:py-24 "
    >
      <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[0.8fr_2fr] lg:items-center lg:gap-14">
        {/* Left content */}
        <div className="min-w-0 max-w-md">
          <p className="mb-4 text-[10px] font-bold tracking-[0.16em] text-black/50">
            ONE DESTINATION. MANY POSSIBILITIES.
          </p>

          <h2
            id="discover-title"
            className="font-sans text-[clamp(30px,2.8vw,42px)] leading-[1.12] tracking-[-0.035em] text-black"
          >
            Find your kind of everyday.
          </h2>

          <p className="mt-5 text-sm leading-7 text-black/60">
            From your morning coffee to your next chapter.
            <br />
            It all comes together here.
          </p>

          <a
            href="#experiences"
            className="mt-6 inline-flex items-center gap-7 rounded-full border border-black px-5 py-2.5 text-xs text-black transition-colors hover:bg-black hover:text-white"
          >
            Find your place
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        {/* Right horizontal carousel */}
        <div id="experiences" className="min-w-0 scroll-mt-24">
          <div className="[width:calc(100%+max(5vw,calc((100vw-1600px)/2)))]">
            <div
              id="experiences-slider"
              ref={sliderRef}
              role="region"
              aria-label="Explore West Walk experiences"
              tabIndex={0}
              className="
                relative flex items-stretch gap-5 overflow-x-auto
                overscroll-x-contain pb-2 lg:gap-6
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
                focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-[-2px]
                focus-visible:outline-black
              "
            >
              {experiences.map((item) => (
                <article
                  key={item.href}
                  className="
                    group flex min-w-0 shrink-0 flex-col bg-white
                    w-[calc((100%_-_20px)/1.15)]
                    sm:w-[calc((100%_-_20px)/1.6)]
                    lg:w-[560px]
                  "
                >
                  {/* Wide image: desktop approximately 470 × 264px */}
                  <Link
                    href={item.href}
                    aria-label={`Explore ${item.label}`}
                    className="block aspect-video w-full overflow-hidden bg-black/5"
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      width={768}
                      height={432}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      className="
                        h-full w-full object-cover
                        transition-transform duration-700
                        group-hover:scale-[1.03]
                        motion-reduce:transition-none
                      "
                    />
                  </Link>

                  {/* White card content */}
                  <div className="flex min-h-[250px] flex-1 flex-col items-start px-6 py-6">
                    <p className="text-[11px] font-bold tracking-[0.14em] text-black/50">
                      {item.label}
                    </p>

                    <h3 className="mt-3 font-sans text-xl leading-7 tracking-[-0.025em] text-black">
                      <Link href={item.href}>
                        {item.title}
                      </Link>
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-black/60">
                      {item.description}
                    </p>

                    <div className="mt-auto pt-6">
                      <Link
                        href={item.href}
                        aria-label={`More info: ${item.label}`}
                        className="
                          inline-flex items-center gap-5 rounded-full
                          bg-black px-5 py-3 text-xs text-white
                          transition-colors hover:bg-black/75
                          focus-visible:outline focus-visible:outline-2
                          focus-visible:outline-offset-4
                          focus-visible:outline-black
                        "
                      >
                        More info
                        <span aria-hidden="true">↗</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Pagination */}
          {positions.length > 1 && (
            <div
              aria-label="Experiences pagination"
              className="mt-3 flex items-center justify-center"
            >
              {positions.map((position, index) => (
                <button
                  key={position}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to carousel position ${index + 1}`}
                  aria-controls="experiences-slider"
                  aria-current={
                    activeSlide === index ? "true" : undefined
                  }
                  className="
                    flex h-8 w-5 items-center justify-center
                    rounded-full focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-black
                  "
                >
                  <span
                    className={`rounded-full transition-all duration-300 ${
                      activeSlide === index
                        ? "h-2 w-2 bg-black"
                        : "h-1 w-1 bg-black/40"
                    }`}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}