"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageBehavior from "./PageBehavior";
export default function SiteShell({ children }) {
  const pathname = usePathname();
  return (
    <div className={pathname === "/" ? "homepage" : "inner-page"}>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Navbar />
      {children}
      <Footer />
      <PageBehavior />
    </div>
  );
}
