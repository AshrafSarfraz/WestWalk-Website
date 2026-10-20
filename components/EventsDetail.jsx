import Link from "next/link";
export default function EventsDetail({ item }) {
  return (
    <main id={"main"}>
      <section className={"page-hero with-image compact"}>
        <div
          className={"page-hero-media"}
          role={"img"}
          aria-label={item.title}
          style={{
            backgroundImage: `url(${item.image}), url(/assets/west-walk-exterior.jpg)`,
          }}
        ></div>
        <div className={"inner-veil"}></div>
        <div className={"page-hero-copy"}>
          <p className={"eyebrow"}>{item.category}</p>
          <h1>{item.title}</h1>
          <p>{item.tagline}</p>
        </div>
      </section>
      <article className={"section story"}>
        <Link className={"breadcrumb"} href={"/events/"}>
          {"← All stories"}
        </Link>
        <p className={"eyebrow bronze"}>{"FROM THE WEST WALK EVENT ARCHIVE"}</p>
        <h2>
          {"A moment on "}
          <em>{"the boulevard."}</em>
        </h2>
        <p className={"story-lead"}>{item.description}</p>
        <p>
          {
            "Discover more of the gatherings and experiences that make West Walk a place to meet, explore and connect."
          }
        </p>
        <div className={"story-note"}>
          {
            "Event highlight · This is an archive story, not an upcoming event announcement. Contact the team for the current programme."
          }
        </div>
        <Link
          className={"text-link"}
          href={"/contact/?subject=Events+%26+partnerships"}
        >
          {"Ask about upcoming events"}
          <span aria-hidden={"true"}>{"↗"}</span>
        </Link>
      </article>
      <section className={"visit"}>
        <div>
          <p className={"eyebrow"}>{"WEST WALK · DOHA"}</p>
          <h2>{"Create your next moment here."}</h2>
        </div>
        <Link
          className={"button light"}
          href={"/contact/?subject=Events+%26+partnerships"}
        >
          {"Event partnerships"}
          <span aria-hidden={"true"}>{"↗"}</span>
        </Link>
      </section>
    </main>
  );
}
