import { homeHero, homeImages } from "@/data/site";

export default function HeroMedia() {
  return (
    <img
      src={homeImages.visit}
      alt={homeHero.alt}
      width={1920}
      height={1080}
      fetchPriority="high"
      decoding="async"
      className="absolute inset-0 h-full w-full object-cover object-center shadow-none"
    />
  );
}