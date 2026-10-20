import { images } from "@/data/site";
import Link from "next/link";
export const metadata = { title: "Our story | West Walk" };
export default function Page() {
  return (
    <main id={"main"}>
      <section className={"page-hero with-image "}>
        <img
          src={images.west_walk_corner}
          alt={"OUR STORY at West Walk"}
          fetchPriority={"high"}
        />
        <div className={"inner-veil"}></div>
        <div className={"page-hero-copy"}>
          <p className={"eyebrow"}>{"OUR STORY"}</p>
          <h1>
            {"Designed around"}
            <br />
            <em>{"life."}</em>
          </h1>
          <p>
            {
              "A boulevard that brings people, places and possibilities together."
            }
          </p>
        </div>
      </section>
      <section className={"section"}>
        <p className={"eyebrow bronze"}>{"WEST WALK · AL WAAB, DOHA"}</p>
        <div className={"intro-grid"}>
          <h2>
            {"More than a place."}
            <br />
            <em>{"A sense of belonging."}</em>
          </h2>
          <div className={"prose"}>
            <p>
              {
                "West Walk brings homes, hospitality, workplaces, retail and dining together in a walkable urban destination. It is a setting for both the everyday and the unexpected: the familiar café, the new neighbour and the evening that becomes a memory."
              }
            </p>
          </div>
        </div>
      </section>
      <section className={"wide-photo"}>
        <img
          src={images.promenade}
          alt={"The palm-lined promenade at West Walk"}
          loading={"lazy"}
        />
        <p>{"SPACES TO MEET. MOMENTS TO SHARE."}</p>
      </section>
      <section className={"section"}>
        <div className={"two-grid"}>
          <div>
            <p className={"eyebrow bronze"}>{"OUR PURPOSE"}</p>
            <h2>
              {"Bring daily life "}
              <em>{"together."}</em>
            </h2>
            <p className={"body-copy"}>
              {
                "Create a welcoming urban destination where living, working and leisure sit comfortably side by side."
              }
            </p>
          </div>
          <div>
            <p className={"eyebrow bronze"}>{"OUR AMBITION"}</p>
            <h2>
              {"A new perspective "}
              <em>{"on community."}</em>
            </h2>
            <p className={"body-copy"}>
              {
                "Build a place shaped by thoughtful design, connected public spaces and experiences that make people want to return."
              }
            </p>
          </div>
        </div>
      </section>
      <section className={"section pale"}>
        <p className={"eyebrow bronze"}>{"ONE CONNECTED DESTINATION"}</p>
        <div className={"amenity-grid"}>
          <div>
            <span className={"amenity-index"}>{"01"}</span>
            <h3>{"Live"}</h3>
            <p>{"Furnished residences and homes above the boulevard."}</p>
          </div>
          <div>
            <span className={"amenity-index"}>{"02"}</span>
            <h3>{"Discover"}</h3>
            <p>{"Dining, cafés and retail with something for every day."}</p>
          </div>
          <div>
            <span className={"amenity-index"}>{"03"}</span>
            <h3>{"Stay"}</h3>
            <p>{"Hospitality in the heart of the community."}</p>
          </div>
          <div>
            <span className={"amenity-index"}>{"04"}</span>
            <h3>{"Connect"}</h3>
            <p>{"Workplaces, gatherings and shared experiences."}</p>
          </div>
        </div>
      </section>
      <section className={"visit"}>
        <div>
          <p className={"eyebrow"}>{"WEST WALK · DOHA"}</p>
          <h2>{"Discover your West Walk."}</h2>
        </div>
        <Link className={"button light"} href={"/destination/"}>
          {"Explore the destination"}
          <span aria-hidden={"true"}>{"↗"}</span>
        </Link>
      </section>
    </main>
  );
}
