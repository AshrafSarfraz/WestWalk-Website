import Link from "next/link";
import { homeImages } from "@/data/site";

export default function HomeBelonging() {
  return (
    <section
      aria-labelledby="belonging-title"
      className="bg-white px-[5%] py-16 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1600px] items-center gap-10 md:grid-cols-2 lg:gap-20">
        <div className="relative w-full overflow-hidden bg-[#F5F5F5]">
          <img
            src={homeImages.introduction}
            alt="Palm-lined boulevard at West Walk"
            width={1000}
            height={1100}
            loading="lazy"
            decoding="async"
            className="aspect-[10/11] w-full object-cover"
          />

          <div className="absolute bottom-6 left-6 bg-white px-4 py-3">
            <p className="text-[10px] font-medium tracking-[0.14em] text-black/70">
              A LIFE CONNECTED.
            </p>
          </div>
        </div>

        <div className="max-w-[560px]">
          <p className="mb-4 text-[10px] font-bold tracking-[0.16em] text-black/50">
            ONE ADDRESS. YOUR WHOLE WORLD.
          </p>

          <h2
            id="belonging-title"
            className="font-sans text-[clamp(34px,3.5vw,54px)] font-normal leading-[1.12] tracking-[-0.035em] text-black"
          >
            Some places have everything.
            <br />
            This one has you.
          </h2>

          <p className="mt-5 max-w-[440px] text-sm leading-7 text-black/60">
            Morning coffee. Familiar faces. A home you love coming
            back to. Find your own rhythm in a neighbourhood that
            brings everyday life together.
          </p>

          <Link
            href="/about/"
            className="mt-7 inline-flex items-center gap-7 rounded-full border border-black px-5 py-2.5 text-xs text-black transition-colors hover:bg-black hover:text-white"
          >
            The West Walk way
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}