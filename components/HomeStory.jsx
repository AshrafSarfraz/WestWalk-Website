"use client";

import { useEffect, useRef, useState } from "react";
import { homeImages, images } from "@/data/site";

const moments = [
  {
    image: homeImages.introduction,
    alt: "Palm-lined West Walk boulevard",
    title: "CONNECTED",
    caption:
      "A walk. A conversation. A familiar face. Everyday moments that bring us together.",
  },
  {
    image: "/assets/retaj-pool-wide.jpg",
    alt: "West Walk Retaj swimming pool",
    title: "RELAXED",
    caption:
      "Welcoming spaces to slow down, unwind and enjoy a little time just for you.",
  },
  {
    image: images.residence,
    alt: "West Walk furnished apartment",
    title: "WELCOMING",
    caption:
      "A home you love coming back to, in a neighbourhood where you belong.",
  },
  {
    image: homeImages.dining,
    alt: "Dining on the West Walk boulevard",
    title: "VIBRANT",
    caption:
      "Fresh flavours, favourite places and something new to discover every day.",
  },
];

export default function HomeStory() {
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
      id="story"
      aria-labelledby="story-title"
      className="overflow-hidden bg-white px-[5%] py-16 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[0.8fr_2fr] lg:items-center lg:gap-14">
        {/* Left content */}
        <div className="min-w-0 max-w-md">
          <p className="mb-4 text-[10px] font-bold tracking-[0.16em] text-black/60">
            INTRODUCTION TO WEST WALK
          </p>

          <h2
            id="story-title"
            className="font-sans text-[clamp(30px,2.8vw,42px)] font-normal leading-[1.12] tracking-[-0.035em] text-black"
          >
            Created for everyday life.
          </h2>

          <p className="mt-5 text-sm leading-7 text-black/60">
            Morning coffee. A walk with friends. A home you love
            coming back to. West Walk brings together places to
            live, dine, discover and unwind in one welcoming
            neighbourhood.
          </p>
        </div>

        {/* Right image carousel */}
        <div className="min-w-0">
          <div className="[width:calc(100%+max(5vw,calc((100vw-1600px)/2)))]">
            <div
              id="story-slider"
              ref={sliderRef}
              role="region"
              aria-label="Life at West Walk"
              tabIndex={0}
              className="
                relative flex items-stretch gap-5 overflow-x-auto
                overscroll-x-contain lg:gap-6
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
                focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-[-2px]
                focus-visible:outline-black
              "
            >
              {moments.map((item) => (
                <article
                  key={item.title}
                  className="
                    relative isolate shrink-0 overflow-hidden
                    bg-[#F5F5F5]
                    w-[82%] sm:w-[360px] lg:w-[425px]
                    h-[420px] sm:h-[490px] lg:h-[580px]
                  "
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    width={790}
                    height={1080}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  {/* Gradient keeps white text readable */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"
                  />

                  <div className="absolute inset-x-0 bottom-0 px-6 pb-9 lg:pb-14">
                    <h3 className="font-sans text-[clamp(26px,2.2vw,34px)] font-normal leading-tight tracking-[-0.025em] text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-xs text-xs leading-5 text-white/90">
                      {item.caption}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Scroll controls only; no page links */}
          {positions.length > 1 && (
            <div
              aria-label="Image carousel pagination"
              className="mt-6 flex items-center justify-center"
            >
              {positions.map((position, index) => (
                <button
                  key={position}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Show image group ${index + 1}`}
                  aria-controls="story-slider"
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
                    className={`rounded-full ${
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