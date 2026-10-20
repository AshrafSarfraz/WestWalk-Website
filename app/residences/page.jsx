import items from "@/data/residences.json";
import ResidenceCard from "@/components/ResidenceCard";
import { images } from "@/data/site";
import Link from "next/link";
export const metadata = { title: "Residences | West Walk" };
export default function Page() {
  return (
    <main id={"main"}>
      <section className={"page-hero with-image "}>
        <img
          src={images.residence}
          alt={"WEST WALK RESIDENCES at West Walk"}
          fetchPriority={"high"}
        />
        <div className={"inner-veil"}></div>
        <div className={"page-hero-copy"}>
          <p className={"eyebrow"}>{"WEST WALK RESIDENCES"}</p>
          <h1>
            {"A home with"}
            <br />
            <em>{"more around it."}</em>
          </h1>
          <p>
            {"Furnished apartments and duplex homes in the heart of Al Waab."}
          </p>
        </div>
      </section>
      <section className={"section"}>
        <div className={"section-heading"}>
          <div>
            <p className={"eyebrow bronze"}>{"FIND YOUR PLACE"}</p>
            <h2>
              {"Spaces for "}
              <em>{"living."}</em>
            </h2>
          </div>
          <Link
            className={"text-link"}
            href={"/contact/?subject=Residential+leasing"}
          >
            {"Talk to our leasing team ↗"}
          </Link>
        </div>
        <div className={"residence-filters"}>
          <label>
            {"Residence type"}
            <select id={"type-filter"} defaultValue={"All"}>
              <option value={"All"}>{"All residences"}</option>
              <option>{"Apartment"}</option>
              <option>{"Duplex"}</option>
            </select>
          </label>
          <label>
            {"Bedrooms"}
            <select id={"bed-filter"} defaultValue={"All"}>
              <option value={"All"}>{"All bedrooms"}</option>
              <option value={"1"}>{"1 bedroom"}</option>
              <option value={"2"}>{"2 bedrooms"}</option>
              <option value={"3"}>{"3 bedrooms"}</option>
              <option value={"4"}>{"4 bedrooms"}</option>
            </select>
          </label>
          <button className={"text-link"} id={"reset-filters"}>
            {"Reset filters"}
          </button>
        </div>
        <p className={"result-count"} role={"status"}>
          {"5 residences"}
        </p>
        <div className={"property-grid"}>
          {items.map((item) => (
            <ResidenceCard key={item.slug} item={item} />
          ))}
        </div>
        <p className={"no-results"} hidden>
          {"No residences match these filters. Select another combination."}
        </p>
        <p className={"form-note"}>
          {
            "Published starting rents are indicative and subject to confirmation. Images show a representative residence, not every available layout."
          }
        </p>
      </section>
      <section className={"section pale"}>
        <h2>
          {"A simpler way "}
          <em>{"to move."}</em>
        </h2>
        <div className={"amenity-grid"}>
          <div>
            <span className={"amenity-index"}>{"01"}</span>
            <h3>{"Explore"}</h3>
            <p>{"Choose the residence type that feels right."}</p>
          </div>
          <div>
            <span className={"amenity-index"}>{"02"}</span>
            <h3>{"Visit"}</h3>
            <p>{"Arrange a viewing with our leasing team."}</p>
          </div>
          <div>
            <span className={"amenity-index"}>{"03"}</span>
            <h3>{"Make it yours"}</h3>
            <p>{"Confirm the available unit, rent and tenancy details."}</p>
          </div>
        </div>
      </section>
      <section className={"visit"}>
        <div>
          <p className={"eyebrow"}>{"WEST WALK · DOHA"}</p>
          <h2>{"Your home. Your West Walk."}</h2>
        </div>
        <Link
          className={"button light"}
          href={"/contact/?subject=Residential+leasing"}
        >
          {"Arrange a viewing"}
          <span aria-hidden={"true"}>{"↗"}</span>
        </Link>
      </section>
    </main>
  );
}
