import Link from "next/link";
export default function EventCard({ item }) {
  return (
    <Link className="event-card" href={`/events/${item.slug}/`}>
      <div
        className="event-media"
        role="img"
        aria-label={item.title}
        style={{
          backgroundImage: `url(${item.image}),url(/assets/westwalk-building.jpg)`,
        }}
      />
      <div className="event-card-body">
        <p className="eyebrow bronze">{item.category}</p>
        <h3>{item.title}</h3>
        <p>{item.tagline}</p>
        <span className="event-card-link">Read the story ↗</span>
      </div>
    </Link>
  );
}
