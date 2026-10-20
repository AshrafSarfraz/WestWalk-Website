import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="section">
      <p className="eyebrow">WEST WALK</p>
      <h1>Page not found.</h1>
      <p>Explore more of West Walk from the homepage.</p>
      <Link className="button dark" href="/">
        Back to home ↗
      </Link>
    </main>
  );
}
