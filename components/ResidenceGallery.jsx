"use client";
import { useState } from "react";
export default function ResidenceGallery({ images = [], title }) {
 const [active, setActive] = useState(0);
 if (!images.length) return null;
 return <section className="section bg-white" aria-label={`${title} photo gallery`}>
  <div className="mb-6 flex items-end justify-between gap-3"><div><p className="eyebrow bronze">EXPLORE YOUR HOME</p><h2>Inside your residence.</h2></div><p className="text-sm opacity-60">{active + 1} / {images.length}</p></div>
  <div className="relative aspect-[16/10] max-h-[700px] overflow-hidden bg-neutral-100">
   <img src={images[active]} alt={`${title} interior photo ${active + 1}`} className="h-full w-full object-cover" />
   {images.length > 1 && <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between">
    <button type="button" onClick={() => setActive((active - 1 + images.length) % images.length)} aria-label="Previous photo" className="rounded-full bg-white px-4 py-3 text-black shadow">←</button>
    <button type="button" onClick={() => setActive((active + 1) % images.length)} aria-label="Next photo" className="rounded-full bg-white px-4 py-3 text-black shadow">→</button>
   </div>}
  </div>
  <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-6">{images.map((src,i) => <button type="button" key={src} onClick={() => setActive(i)} aria-label={`Show photo ${i + 1}`} aria-pressed={active === i} className={`aspect-[4/3] overflow-hidden border-2 ${active === i ? "border-black" : "border-transparent"}`}><img src={src} alt="" loading="lazy" className="h-full w-full object-cover" /></button>)}</div>
  <p className="mt-4 text-sm opacity-60">Representative images; layouts and finishes may vary by unit.</p>
 </section>;
}
