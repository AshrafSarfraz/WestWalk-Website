import Link from "next/link";
import ResidenceGallery from "./ResidenceGallery";
export default function ResidencesDetail({ item }) {
  return (
    <main id={"main"}>
      <section className={"page-hero with-image compact"}>
        <img
          src={item.image}
          alt={"WEST WALK RESIDENCES at West Walk"}
          fetchPriority={"high"}
        />
        <div className={"inner-veil"}></div>
        <div className={"page-hero-copy"}>
          <p className={"eyebrow"}>{item.category}</p>
          <h1>{item.title}</h1>
          <p>{item.tagline}</p>
        </div>
      </section>
      <ResidenceGallery images={item.gallery || [item.image]} title={item.title} />
      <section className={"section detail-split"}>
        <div>
          <Link className={"breadcrumb"} href={"/residences/"}>
            {"← All residences"}
          </Link>
          <p className={"eyebrow bronze"}>{"YOUR SPACE, YOUR PACE"}</p>
          <h2>
            {"Make yourself "}
            <em>{"at home."}</em>
          </h2>
          <p className={"body-copy"}>{item.description}</p>
          <div className={"spec-grid"}>
            <div>
              <strong>{item.bedrooms}</strong>
              <span>{"Bedrooms"}</span>
            </div>
            <div>
              <strong>{"Furnished"}</strong>
              <span>{"Move-in style"}</span>
            </div>
            <div>
              <strong>{item.type}</strong>
              <span>{"Residence type"}</span>
            </div>
          </div>
          <h3>{"Part of the West Walk lifestyle"}</h3>
          <ul className="feature-list">
            {item.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <p className={"form-note"}>
            {
              "Photographs show a representative West Walk interior. Layout, inclusions, availability and current rent are confirmed by the leasing team."
            }
          </p>
        </div>
        <aside className={"info-panel"}>
          <p className={"eyebrow"}>{"MONTHLY RENT FROM"}</p>
          <p className={"large-price"}>{item.price}</p>
          <p>{"Based on the published residence listing."}</p>
          <Link
            className={"button dark"}
            href={`/contact/?subject=Residential+leasing&property=${item.slug}`}
          >
            {"Arrange a viewing"}
            <span aria-hidden={"true"}>{"↗"}</span>
          </Link>
          <a className={"text-link"} href={"tel:8002010"}>
            {"Call 800 2010 ↗"}
          </a>
        </aside>
      </section>
      <section className={"section pale"}>
        <p className={"eyebrow bronze"}>{"BEYOND YOUR FRONT DOOR"}</p>
        <h2>
          {"The boulevard is "}
          <em>{"yours."}</em>
        </h2>
        <div className={"inline-links"}>
          <Link className={"text-link"} href={"/destination/"}>
            {"Dining & shopping"}
            <span aria-hidden={"true"}>{"↗"}</span>
          </Link>
          <Link className={"text-link"} href={"/events/"}>
            {"Community moments"}
            <span aria-hidden={"true"}>{"↗"}</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
