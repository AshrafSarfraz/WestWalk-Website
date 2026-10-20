import { images } from "@/data/site";
import Link from "next/link";
export const metadata = { title: "Commercial leasing | West Walk" };
export default function Page() {
  return (
    <main id={"main"}>
      <section className={"page-hero with-image "}>
        <img
          src={images.west_walk_exterior}
          alt={"COMMERCIAL LEASING at West Walk"}
          fetchPriority={"high"}
        />
        <div className={"inner-veil"}></div>
        <div className={"page-hero-copy"}>
          <p className={"eyebrow"}>{"COMMERCIAL LEASING"}</p>
          <h1>
            {"A new home"}
            <br />
            <em>{"for your business."}</em>
          </h1>
          <p>
            {
              "Retail, dining and workspace opportunities within a connected destination."
            }
          </p>
        </div>
      </section>
      <section className={"section"}>
        <p className={"eyebrow bronze"}>{"GROW WITH WEST WALK"}</p>
        <div className={"intro-grid"}>
          <h2>
            {"Your ambition."}
            <br />
            <em>{"The right setting."}</em>
          </h2>
          <div className={"prose"}>
            <p>
              {
                "Bring your business into a destination where people live, meet, shop and spend time. Speak to the leasing team about the space, location and requirements that suit your next chapter."
              }
            </p>
          </div>
        </div>
      </section>
      <section className={"section pale"}>
        <div className={"three-grid"}>
          <article className={"path-card"}>
            <span>{"01"}</span>
            <h3>{"Retail & kiosks"}</h3>
            <p>{"A presence along the West Walk shopping journey."}</p>
            <Link
              className={"text-link"}
              href={"/contact/?subject=Commercial+leasing"}
            >
              {"Enquire"}
              <span aria-hidden={"true"}>{"↗"}</span>
            </Link>
          </article>
          <article className={"path-card"}>
            <span>{"02"}</span>
            <h3>{"Restaurants & cafés"}</h3>
            <p>{"A place within the destination’s dining community."}</p>
            <Link
              className={"text-link"}
              href={"/contact/?subject=Commercial+leasing"}
            >
              {"Enquire"}
              <span aria-hidden={"true"}>{"↗"}</span>
            </Link>
          </article>
          <article className={"path-card"}>
            <span>{"03"}</span>
            <h3>{"Offices"}</h3>
            <p>{"Workspace connected to everyday convenience."}</p>
            <Link
              className={"text-link"}
              href={"/contact/?subject=Commercial+leasing"}
            >
              {"Enquire"}
              <span aria-hidden={"true"}>{"↗"}</span>
            </Link>
          </article>
        </div>
      </section>
      <section className={"section detail-split"}>
        <div>
          <p className={"eyebrow bronze"}>{"START THE CONVERSATION"}</p>
          <h2>
            {"Let’s find "}
            <em>{"your space."}</em>
          </h2>
          <p className={"body-copy"}>
            {
              "Share your business activity, preferred space and intended opening timeline. Our team can discuss current opportunities and arrange a visit."
            }
          </p>
          <p className={"form-note"}>
            {
              "Availability, unit sizes, commercial terms and permitted uses are confirmed directly by the leasing team."
            }
          </p>
        </div>
        <form id={"enquiry-form"} className={"enquiry-form"}>
          <div className={"form-row"}>
            <label>
              {"Full name"}
              <input
                name={"name"}
                autoComplete={"name"}
                required
                placeholder={"Your name"}
              />
            </label>
            <label>
              {"Email address"}
              <input
                name={"email"}
                type={"email"}
                autoComplete={"email"}
                required
                placeholder={"you@example.com"}
              />
            </label>
          </div>
          <div className={"form-row"}>
            <label>
              {"Phone number "}
              <span>{"(optional)"}</span>
              <input
                name={"phone"}
                type={"tel"}
                autoComplete={"tel"}
                placeholder={"+974"}
              />
            </label>
            <label>
              {"I’m interested in"}
              <select name={"subject"} defaultValue={"Commercial leasing"}>
                <option>{"General enquiry"}</option>
                <option>{"Residential leasing"}</option>
                <option>{"Commercial leasing"}</option>
                <option>{"Hotel stay"}</option>
                <option>{"Events & partnerships"}</option>
              </select>
            </label>
          </div>
          <label>
            {"Your message"}
            <textarea
              name={"message"}
              rows={"5"}
              required
              placeholder={"Tell us how we can help."}
            ></textarea>
          </label>
          <p className={"form-note"}>
            {
              "This preview prepares an email to info@westwalk.qa. Review and send it from your email app."
            }
          </p>
          <button className={"button dark"} type={"submit"}>
            {"Prepare enquiry "}
            <span>{"↗"}</span>
          </button>
          <p id={"form-status"} role={"status"}></p>
          <div id={"enquiry-result"} hidden>
            <label>
              {"Your enquiry"}
              <textarea id={"email-copy"} rows={"7"} readOnly></textarea>
            </label>
            <a id={"email-open"} className={"text-link"}>
              {"Open email app ↗"}
            </a>
            <button type={"button"} id={"copy-enquiry"} className={"text-link"}>
              {"Copy enquiry"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
