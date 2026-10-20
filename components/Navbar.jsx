"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, site } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const headerRef = useRef(null);
  const solid = !isHome || scrolled || open;

  useEffect(() => { setOpen(false); setHidden(false); }, [pathname]);
  useEffect(() => {
    let lastY = Math.max(0, window.scrollY);
    let frame;
    setScrolled(lastY > 24);
    setHidden(false);
    const update = () => {
      const y = Math.max(0, window.scrollY);
      setScrolled(y > 24);
      const focused = headerRef.current?.contains(document.activeElement);
      if (open || focused || y <= 80) { setHidden(false); lastY = y; }
      else if (Math.abs(y - lastY) >= 4) { setHidden(y > lastY); lastY = y; }
      frame = undefined;
    };
    const onScroll = () => { if (frame === undefined) frame = requestAnimationFrame(update); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (frame !== undefined) cancelAnimationFrame(frame); };
  }, [pathname, open]);
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape" && open) { setOpen(false); document.getElementById("navigation-toggle")?.focus(); }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);

  return (
    <>
      {!isHome && <div aria-hidden="true" className="h-20" />}
      <header ref={headerRef} data-state={hidden && !open ? "hidden" : solid ? "solid" : "transparent"} onFocusCapture={() => setHidden(false)} className={`fixed inset-x-0 top-0 z-50 flex min-h-20 items-center justify-between gap-6 px-[5%] py-4 shadow-none transition-[transform,background-color,color] duration-300 motion-reduce:transition-none ${hidden && !open ? "-translate-y-full" : "translate-y-0"} ${solid ? "border-b border-line bg-white text-ink" : "border-b border-transparent bg-transparent text-white"}`}>
        <Link href="/" aria-label="West Walk home" className="flex shrink-0 flex-col gap-1 text-center"><span className="text-xl font-medium tracking-[0.2em] sm:text-2xl">{site.name}</span><small className="text-[9px] tracking-[0.32em] opacity-65">DOHA · QATAR</small></Link>
        <nav id="site-navigation" aria-label="Main navigation" className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col gap-0 border-b border-line bg-white px-[5%] py-4 text-ink lg:static lg:flex lg:flex-row lg:gap-7 lg:border-0 lg:bg-transparent lg:p-0 lg:text-inherit`}>
          {navigation.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={pathname.replace(/\/$/, "").startsWith(item.href.replace(/\/$/, "")) ? "page" : undefined} className="py-3 text-sm transition-opacity hover:opacity-60 aria-[current=page]:font-bold">{item.label}</Link>)}
          <Link href="/contact/" onClick={() => setOpen(false)} className="py-3 text-sm lg:hidden">Contact & visit</Link>
        </nav>
        <Link href="/contact/" className={`hidden items-center gap-6 rounded-full border border-current px-6 py-3 text-sm transition-colors lg:flex ${solid ? "hover:bg-ink hover:text-white" : "hover:bg-white hover:text-ink"}`}>Get in touch <span aria-hidden="true">↗</span></Link>
        <button id="navigation-toggle" type="button" onClick={() => {setOpen(!open); setHidden(false);}} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="site-navigation" className="border-0 bg-transparent p-3 text-sm lg:hidden">{open ? "Close ×" : "Menu ☰"}</button>
      </header>
    </>
  );
}
