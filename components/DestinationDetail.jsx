
import Link from "next/link";

export default function DestinationDetail({ item }) {
  return (
    <main id={"main"}>
      <section className={"page-hero with-image compact"}>
        <img
          src={item.image}
          alt={item.title + " at West Walk"}
          fetchPriority={"high"}
        />
        <div className={"inner-veil"}></div>
        <div className={"page-hero-copy"}>
          <p className={"eyebrow"}>{item.category}</p>
          <h1>{item.title}</h1>
          <p>{item.tagline}</p>
        </div>
      </section>

      <section className={"section detail-split"}>
        <div>
          <p className={"eyebrow bronze"}>
            {"ON THE BOULEVARD"}
          </p>

          <h2>
            {"Meet at "}
            <em>{item.title + "."}</em>
          </h2>

          <p className={"body-copy"}>{item.description}</p>

          <p className={"body-copy"}>
            {
              "For current opening hours and directions to the outlet, please contact the brand directly."
            }
          </p>

          <Link
            className={"button dark"}
            href={"/contact/?subject=General+enquiry"}
          >
            {"Plan your visit"}
            <span aria-hidden={"true"}>{"↗"}</span>
          </Link>
        </div>

        <aside className={"info-panel"}>
          <p className={"eyebrow"}>{"AT A GLANCE"}</p>

          <dl>
            <dt>{"Category"}</dt>
            <dd>{item.category}</dd>

            <dt>{"Destination"}</dt>
            <dd>{"West Walk, Al Waab"}</dd>

            {item.phone && (
              <>
                <dt>{"Contact Number"}</dt>
                <dd>
                  <a
                    href={`tel:${String(item.phone).replace(/[^\d+]/g, "")}`}
                  >
                    {item.phone}
                  </a>
                </dd>
              </>
            )}

            {item.email && (
              <>
                <dt>{"Email Address"}</dt>
                <dd>
                  <a href={`mailto:${item.email}`}>
                    {item.email}
                  </a>
                </dd>
              </>
            )}
          </dl>

          <Link
            className={"text-link"}
            href={"/destination/"}
          >
            {"Back to directory"}
            <span aria-hidden={"true"}>{"↗"}</span>
          </Link>
        </aside>
      </section>

      <section className={"visit"}>
        <div>
          <p className={"eyebrow"}>
            {"WEST WALK · DOHA"}
          </p>
          <h2>{"Make a day of it."}</h2>
        </div>

        <Link
          className={"button light"}
          href={"/destination/"}
        >
          {"Explore the boulevard"}
          <span aria-hidden={"true"}>{"↗"}</span>
        </Link>
      </section>
    </main>
  );
}
