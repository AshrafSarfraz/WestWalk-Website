
import items from "@/data/destination.json";
import DestinationCard from "@/components/DestinationCard";
import { images } from "@/data/site";
import Link from "next/link";

export const metadata = {
  title: "The destination | West Walk",
};

export default function Page() {
  return (
    <main id={"main"}>
      <section className={"page-hero with-image "}>
        <img
          src={images.boulevard_evening}
          alt={"THE DESTINATION at West Walk"}
          fetchPriority={"high"}
        />
        <div className={"inner-veil"}></div>
        <div className={"page-hero-copy"}>
          <p className={"eyebrow"}>{"THE DESTINATION"}</p>
          <h1>
            {"Find your"}
            <br />
            <em>{"kind of day."}</em>
          </h1>
          <p>
            {"Dining, discovery and everyday moments on the boulevard."}
          </p>
        </div>
      </section>

      <section className={"section"}>
        <p className={"eyebrow bronze"}>
          {"A WORLD WITHIN A WALK"}
        </p>
        <div className={"intro-grid"}>
          <h2>
            {"Come for one thing."}
            <br />
            <em>{"Stay for everything."}</em>
          </h2>
          <div className={"prose"}>
            <p>
              {
                "From a favourite coffee to a new fragrance, there is more to discover with every visit. Explore a selection of names at West Walk."
              }
            </p>
          </div>
        </div>
      </section>

      <section
        className={"section directory-section"}
        id={"directory"}
      >
        <div className={"section-heading"}>
          <h2>
            {"Explore the "}
            <em>{"directory."}</em>
          </h2>

          <label className={"search-label"}>
            {"Search brands"}
            <input
              type={"search"}
              id={"directory-search"}
              placeholder={"Search by name"}
            />
          </label>
        </div>

        <div
          className={"filter-bar"}
          aria-label={"Filter brands"}
        >
          {[
            "All",
            "Dining",
            "Cafés",
            "Shopping",
            "Services",
            "Fashion",
            "Beauty",
            "Fitness",
            "Health & Wellness",
            "Entertainment",
            "Education",
            "Automotive",
          ].map((category) => (
            <button
              key={category}
              type={"button"}
              data-filter={category}
              aria-pressed={
                category === "All" ? "true" : "false"
              }
            >
              {category}
            </button>
          ))}
        </div>

        <p className={"result-count"} role={"status"}>
          {`${items.length} brands`}
        </p>

        <div className={"directory-grid"}>
          {items.map((item) => (
            <DestinationCard
              key={item.slug}
              item={item}
            />
          ))}
        </div>

        <p className={"no-results"} hidden>
          {
            "No matching brands. Try another name or category."
          }
        </p>
      </section>

      <section className={"section pale"}>
        <p className={"eyebrow bronze"}>
          {"A MORE COMFORTABLE VISIT"}
        </p>
        <h2>
          {"Enjoy every "}
          <em>{"step."}</em>
        </h2>

        <div className={"amenity-grid"}>
          <div>
            <span className={"amenity-index"}>
              {"01"}
            </span>
            <h3>{"Dining & cafés"}</h3>
            <p>
              {"Meet over a meal or take time for coffee."}
            </p>
          </div>

          <div>
            <span className={"amenity-index"}>
              {"02"}
            </span>
            <h3>{"Underground parking"}</h3>
            <p>
              {"Arrive and explore the boulevard on foot."}
            </p>
          </div>

          <div>
            <span className={"amenity-index"}>
              {"03"}
            </span>
            <h3>{"Prayer facilities"}</h3>
            <p>
              {"A considered part of your visit."}
            </p>
          </div>

          <div>
            <span className={"amenity-index"}>
              {"04"}
            </span>
            <h3>{"Everyday convenience"}</h3>
            <p>
              {"Shopping and services in one destination."}
            </p>
          </div>
        </div>
      </section>

      <section className={"visit"}>
        <div>
          <p className={"eyebrow"}>
            {"WEST WALK · DOHA"}
          </p>
          <h2>
            {"Bring your brand to West Walk."}
          </h2>
        </div>

        <Link
          className={"button light"}
          href={"/leasing/"}
        >
          {"Explore leasing"}
          <span aria-hidden={"true"}>
            {"↗"}
          </span>
        </Link>
      </section>
    </main>
  );
}
