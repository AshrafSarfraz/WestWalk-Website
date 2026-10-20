import Link from "next/link";
export default function ResidenceCard({ item }) {
  return (
    <article
      className="property-card filter-card"
      data-category={item.type}
      data-beds={item.bedrooms}
    >
      <Link href={`/residences/${item.slug}/`}>
        <div className="property-image">
          <img
            className="h-full w-full object-cover"
            src={item.image}
            alt="Representative West Walk residence interior"
            loading="lazy"
          />
          <span>{item.type}</span>
        </div>
        <div className="card-body">
          <p className="eyebrow bronze">WEST WALK RESIDENCES</p>
          <h3>{item.title}</h3>
          <p>
            {item.bedrooms} {item.bedrooms === "1" ? "bedroom" : "bedrooms"} ·
            Furnished
            {item.features.includes("Additional maid’s room")
              ? " · Maid’s room"
              : ""}
          </p>
          <div className="price-row">
            <span>
              From <strong>{item.price}</strong> / month
            </span>
            <b>↗</b>
          </div>
        </div>
      </Link>
    </article>
  );
}
