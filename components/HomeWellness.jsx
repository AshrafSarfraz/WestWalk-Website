import Link from "next/link";
import { images } from "@/data/site";

const wellness = [
  {
    label: "PAUSE & UNWIND",
    title: "Find your slower moment.",
    description:
      "A little sunshine. A refreshing swim. Make time to slow down.",
    video: "/assets/pool.mp4",
    poster: "/assets/retaj-pool-wide.jpg",
    ariaLabel: "West Walk Retaj swimming pool",
  },
  {
    label: "MOVE & RECHARGE",
    title: "Make room for a fresh start.",
    description:
      "Find your energy and bring a little more movement into your day.",
    video: "/assets/fitness.mp4",
    poster: images.fitness_poster,
    ariaLabel: "Fitness at West Walk",
  },
];

export default function HomeWellness() {
  return (
    <section
      aria-labelledby="wellness-title"
      className="bg-[#F5F5F5] px-[5%] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-[10px] font-bold tracking-[0.16em] text-black/50">
              MAKE TIME FOR YOURSELF
            </p>

            <h2
              id="wellness-title"
              className="text-[clamp(30px,2.8vw,42px)] font-normal leading-[1.12] tracking-[-0.035em]"
            >
              A little more living.
            </h2>
          </div>

          <Link
            href="/hotels/"
            className="inline-flex w-fit items-center gap-7 rounded-full border border-black px-5 py-2.5 text-xs transition-colors hover:bg-black hover:text-white"
          >
            Discover the hotel
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.35fr_1fr]">
          {wellness.map((item) => (
            <article key={item.label} className="min-w-0">
              <div className="relative h-[300px] overflow-hidden bg-black/5 sm:h-[380px] lg:h-[460px]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  poster={item.poster}
                  aria-label={item.ariaLabel}
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              </div>

              <div className="border-b border-black/10 py-6">
                <p className="text-[10px] font-bold tracking-[0.16em] text-black/50">
                  {item.label}
                </p>

                <h3 className="mt-3 text-[clamp(22px,2vw,28px)] font-normal leading-tight tracking-[-0.025em]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-black/60">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}