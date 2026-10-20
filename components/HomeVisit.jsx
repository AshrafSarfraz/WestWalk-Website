import Link from "next/link";
import { homeImages, images } from "@/data/site";

export default function HomeVisit() {
  return (
    <section
      aria-labelledby="visit-title"
      className="bg-white px-[5%] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid overflow-hidden bg-[#FFF] md:grid-cols-[0.8fr_1fr]">
          {/* Left image */}
          <div className="relative min-h-[380px] md:min-h-[550px] lg:min-h-[600px]">
            <img
              src={images.west_boulevard_gate}
              alt="West Walk exterior and boulevard"
              width={1200}
              height={1000}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute bottom-6 left-6 bg-white px-4 py-3">
              <p className="text-[10px] font-medium tracking-[0.14em]">
                AL WAAB · DOHA
              </p>
            </div>
          </div>

          {/* Right content */}
          <div className="flex flex-col items-start justify-center px-7 py-12 sm:px-10 lg:px-16 lg:py-16">
            <p className="mb-4 text-[10px] font-bold leading-5 tracking-[0.16em] text-black/50">
              COME FOR A WALK. STAY FOR THE FEELING.
            </p>

            <h2
              id="visit-title"
              className="text-[clamp(30px,2.8vw,42px)] font-normal leading-[1.12] tracking-[-0.035em]"
            >
              Make time
              <br />
              for West Walk.
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-black/60">
              Your morning coffee, an evening with friends or
              a new favourite place. Your next discovery is
              closer than you think.
            </p>

            <div className="mt-7 w-full max-w-sm border-t border-black/10 pt-5">
              <p className="text-[10px] font-bold tracking-[0.16em] text-black/50">
                FIND US
              </p>

              <p className="mt-2 text-sm text-black/70">
                Al Waab, Doha, Qatar
              </p>
            </div>

            <Link
              href="/contact/"
              className="mt-7 inline-flex items-center gap-7 rounded-full bg-black px-6 py-3 text-xs text-white transition-colors hover:bg-black/75"
            >
              Plan your visit
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}