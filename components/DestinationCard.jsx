import Link from "next/link";
export default function DestinationCard({ item }) {
  return (
    <article
      className="directory-card filter-card"
      data-category={item.category}
      data-search={(item.title + " " + item.category).toLowerCase()}
    >
      <Link href={`/destination/${item.slug}/`}>
        <div className="directory-visual">
          {item.brandImage ? (
            <img src={item.image} alt={item.title} loading="lazy" />
          ) : (
            <div className="brand-wordmark">{item.title}</div>
          )}
        </div>
        <div className="card-body">
          <p className="eyebrow bronze">{item.category}</p>
          <h3>{item.title}</h3>
          <p>{item.tagline}</p>
          <span className="text-link">Discover more ↗</span>
        </div>
      </Link>
    </article>
  );
}
