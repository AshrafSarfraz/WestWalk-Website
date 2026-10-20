import { images, hotelGallery } from "@/data/site";
import Link from "next/link";
export const metadata = { title: "Hotels | West Walk" };
export default function Page() {
  return (
    <main id={"main"}>
      <section className={"page-hero with-image "}>
        <img
          src={images.retaj_entrance}
          alt={"STAY AT WEST WALK at West Walk"}
          fetchPriority={"high"}
        />
        <div className={"inner-veil"}></div>
        <div className={"page-hero-copy"}>
          <p className={"eyebrow"}>{"STAY AT WEST WALK"}</p>
          <h1>
            {"Check in."}
            <br />
            <em>{"Step into Doha."}</em>
          </h1>
          <p>{"A city stay with the boulevard on your doorstep."}</p>
        </div>
      </section>
      <section className={"section hotel-feature"}>
        <div className={"hotel-photograph"}>
          <img
            className="h-full w-full object-cover"
            src={images.retaj_room}
            alt={"A guest room at West Walk Retaj Hotel"}
            loading={"lazy"}
          />
        </div>
        <div>
          <p className={"eyebrow bronze"}>{"WEST WALK RETAJ HOTEL"}</p>
          <h2>
            {"Your stay."}
            <br />
            <em>{"Your own pace."}</em>
          </h2>
          <p className={"body-copy"}>
            {
              "Make West Walk your base for a visit to Doha. Spend your day exploring, then return to the restaurants, cafés and atmosphere of the boulevard."
            }
          </p>
          <p className={"body-copy"}>
            {
              "Check available rooms, current rates and stay details directly with the hotel."
            }
          </p>
          <a
            className={"button dark"}
            href={
              "https://reservations.westwalk-retajhotel.com/9882115?languageid=1"
            }
          >
            {"Check rooms & availability"}
            <span aria-hidden={"true"}>{"↗"}</span>
          </a>
          <p className={"form-note"}>
            {"Opens the hotel’s official reservation service."}
          </p>
          <a className={"text-link"} href={"tel:+97440008444"}>
            {"Hotel enquiries · +974 4000 8444 ↗"}
          </a>
        </div>
      </section>
      <section className="section hotel-gallery-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow bronze">A CLOSER LOOK</p>
            <h2>
              Stay a little.
              <br />
              <em>Discover a little more.</em>
            </h2>
          </div>
          <p className="body-copy">
            From sunlit shared spaces to a quiet afternoon by the pool, find
            your own pace at West Walk.
          </p>
        </div>
        <div className="hotel-gallery">
          {hotelGallery.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className={"section pale"}>
        <p className={"eyebrow bronze"}>{"MAKE MORE OF YOUR STAY"}</p>
        <h2>
          {"Outside your room."}
          <br />
          <em>{"A world of possibility."}</em>
        </h2>
        <div className={"amenity-grid"}>
          <div>
            <span className={"amenity-index"}>{"01"}</span>
            <h3>{"Dine"}</h3>
            <p>{"Discover the restaurants and cafés of West Walk."}</p>
          </div>
          <div>
            <span className={"amenity-index"}>{"02"}</span>
            <h3>{"Explore"}</h3>
            <p>{"Wander the boulevard and browse its shops."}</p>
          </div>
          <div>
            <span className={"amenity-index"}>{"03"}</span>
            <h3>{"Connect"}</h3>
            <p>{"Meet friends, colleagues and family in Al Waab."}</p>
          </div>
        </div>
      </section>
      <section className={"section faq"}>
        <p className={"eyebrow bronze"}>{"BEFORE YOU ARRIVE"}</p>
        <h2>
          {"A few helpful "}
          <em>{"details."}</em>
        </h2>
        <details>
          <summary>{"How do I reserve a room?"}</summary>
          <p>
            {
              "Use “Check rooms & availability” to choose dates and view available rooms through the hotel’s reservation service."
            }
          </p>
        </details>
        <details>
          <summary>{"Where can I confirm check-in and facilities?"}</summary>
          <p>
            {
              "Contact West Walk Retaj Hotel on +974 4000 8444 for current hotel information and special requests."
            }
          </p>
        </details>
        <details>
          <summary>{"What can I explore nearby?"}</summary>
          <p>
            {
              "The West Walk boulevard brings dining, cafés and shopping into one destination. Explore the directory to plan your visit."
            }
          </p>
        </details>
      </section>
      <section className={"visit"}>
        <div>
          <p className={"eyebrow"}>{"WEST WALK · DOHA"}</p>
          <h2>{"Make time for a little more."}</h2>
        </div>
        <Link className={"button light"} href={"/destination/"}>
          {"Explore the destination"}
          <span aria-hidden={"true"}>{"↗"}</span>
        </Link>
      </section>
    </main>
  );
}
