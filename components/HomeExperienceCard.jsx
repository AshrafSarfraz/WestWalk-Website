import Link from "next/link";

export default function HomeExperienceCard({ image, alt, label, title, description, href, index = 0 }) {
  return (
    <article className="flex min-w-0 flex-col bg-white">
      <Link href={href} aria-label={title} className="group block shrink-0 aspect-[4/3] overflow-hidden bg-line lg:aspect-[4/5]">
        <img src={image} alt={alt} width="1200" height="1500" loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 motion-reduce:transition-none group-hover:scale-[1.03]" />
      </Link>
      <div className="flex flex-1 flex-col items-start p-6 lg:p-7">
        <p className="text-[9px] font-bold tracking-[0.16em] text-black/50">{label}</p>
        <h3 className="mt-3 font-sans text-[25px] leading-[1.18] tracking-[-0.035em] text-black">{title}</h3>
        <p className="mt-4 mb-6 text-sm leading-6 text-black/60">{description}</p>
        <Link href={href} className="mt-auto inline-flex items-center gap-7 rounded-full bg-black px-5 py-2.5 text-xs text-white transition-colors hover:bg-brand">{index === 0 ? "Explore" : index === 1 ? "View residences" : "Discover the hotel"}<span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
