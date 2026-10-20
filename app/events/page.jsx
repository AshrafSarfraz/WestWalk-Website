import items from "@/data/events.json";
import EventCard from "@/components/EventCard";
import { images } from "@/data/site";
import Link from "next/link";
export const metadata = { title: "Events & stories | West Walk" };
export default function Page() {
  return (
    <main id={"main"}>
      <section className={"page-hero with-image "}>
        <img
          src={images.boulevard_aerial}
          alt={"WHAT’S ON AT WEST WALK at West Walk"}
          fetchPriority={"high"}
        />
        <div className={"inner-veil"}></div>
        <div className={"page-hero-copy"}>
          <p className={"eyebrow"}>{"WHAT’S ON AT WEST WALK"}</p>
          <h1>
            {"A place for"}
            <br />
            <em>{"shared moments."}</em>
          </h1>
          <p>
            {
              "Discover the stories, gatherings and experiences of the boulevard."
            }
          </p>
        </div>
      </section>
      <section className={"section"}>
        <div className={"section-heading"}>
          <div>
            <p className={"eyebrow bronze"}>{"FROM THE BOULEVARD"}</p>
            <h2>
              {"Event "}
              <em>{"highlights."}</em>
            </h2>
          </div>
          <p className={"muted"}>{"A look back at West Walk."}</p>
        </div>
        <div className={"event-grid"}>
          {items.map((item) => (
            <EventCard key={item.slug} item={item} />
          ))}
        </div>
        <p className={"form-note"}>
          {
            "These highlights are from the published event archive. Upcoming dates are confirmed by the West Walk team."
          }
        </p>
      </section>
      <section className={"visit"}>
        <div>
          <p className={"eyebrow"}>{"WEST WALK · DOHA"}</p>
          <h2 className="max-w-full break-words text-[clamp(30px,8vw,64px)]">{"Have something extraordinary in mind?"}</h2>
        </div>
        <Link
          className={"button light"}
          href={"/contact/?subject=Events+%26+partnerships"}
        >
          {"Explore event partnerships"}
          <span aria-hidden={"true"}>{"↗"}</span>
        </Link>
      </section>
    </main>
  );
}
