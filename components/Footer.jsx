import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-white px-[8%] pt-16 pb-6 text-ink">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] bg-[image:var(--ribbon)]" />
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <Link href="/" className="flex w-fit flex-col gap-2 text-center"><span className="text-2xl tracking-[0.2em]">{site.name}</span><small className="text-[9px] tracking-[0.3em] opacity-65">A LIFE CONNECTED</small></Link>
        <div className="flex flex-col items-start gap-4 text-sm"><p className="mb-2 text-[10px] tracking-[0.2em] opacity-60">EXPLORE</p><Link href="/destination/">Destination</Link><Link href="/residences/">Residences</Link><Link href="/hotels/">Hotels</Link><Link href="/events/">What’s on</Link></div>
        <div className="flex flex-col items-start gap-4 text-sm"><p className="mb-2 text-[10px] tracking-[0.2em] opacity-60">CONNECT</p><Link href="/about/">Our story</Link><Link href="/leasing/">Commercial leasing</Link><Link href="/contact/">Contact & visit</Link><a href={`mailto:${site.email}`}>{site.email}</a></div>
        <div className="text-2xl leading-relaxed">A place to belong.<br/><em className="!font-display !italic text-ink/65">A life connected.</em><a href={`tel:${site.phone}`} className="mt-4 block text-base">800 2010</a></div>
      </div>
      <div className="mt-14 flex flex-wrap justify-between gap-5 border-t border-line pt-6 text-[10px] tracking-[0.08em] text-ink/60"><span>© {new Date().getFullYear()} West Walk</span><span>AL WAAB · DOHA · QATAR</span><a href="#top">Back to top ↑</a></div>
    </footer>
  );
}
