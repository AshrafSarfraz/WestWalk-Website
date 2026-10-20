import Link from "next/link";
export const metadata = { title: "Contact &amp; visit | West Walk" };
export default function Page() {
  return (
    <main id={"main"}>
      <section className={"page-hero type-hero compact"}>
        <div className={"page-hero-copy"}>
          <p className={"eyebrow"}>{"CONTACT & VISIT"}</p>
          <h1>
            {"Let’s start"}
            <br />
            <em>{"a conversation."}</em>
          </h1>
          <p>
            {"Your home, your business or your next visit. We’re here to help."}
          </p>
        </div>
      </section>
      <section className={"section contact-layout"}>
        <aside>
          <p className={"eyebrow bronze"}>{"FIND US IN AL WAAB"}</p>
          <h2>
            {"See you at"}
            <br />
            <em>{"West Walk."}</em>
          </h2>
          <div className={"contact-item"}>
            <span>{"VISIT"}</span>
            <p>
              {"West Walk, Al Sidr Street"}
              <br />
              {"Al Waab, Doha, Qatar"}
            </p>
          </div>
          <div className={"contact-item"}>
            <span>{"CALL"}</span>
            <a href={"tel:8002010"}>{"800 2010"}</a>
          </div>
          <div className={"contact-item"}>
            <span>{"EMAIL"}</span>
            <a href={"mailto:info@westwalk.qa"}>{"info@westwalk.qa"}</a>
          </div>
          <a
            className={"text-link"}
            href={
              "https://www.google.com/maps/search/?api=1&query=West+Walk+Al+Sidr+Street+Doha"
            }
            target={"_blank"}
            rel={"noopener"}
          >
            {"Get directions ↗"}
          </a>
        </aside>
        <div>
          <p className={"eyebrow bronze"}>{"HOW CAN WE HELP?"}</p>
          <h2>
            {"Make an "}
            <em>{"enquiry."}</em>
          </h2>
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
                <select name={"subject"} defaultValue={"General enquiry"}>
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
              <button
                type={"button"}
                id={"copy-enquiry"}
                className={"text-link"}
              >
                {"Copy enquiry"}
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className={"section pale"}>
        <div className={"section-heading"}>
          <h2>
            {"A little help "}
            <em>{"before you visit."}</em>
          </h2>
        </div>
        <div className={"faq"}>
          <details>
            <summary>{"Where can I park?"}</summary>
            <p>
              {
                "West Walk includes underground parking. Follow the parking and entrance signs when you arrive."
              }
            </p>
          </details>
          <details>
            <summary>{"How can I arrange a residence viewing?"}</summary>
            <p>
              {
                "Select Residential leasing in the enquiry form and tell us which apartment or duplex you would like to see."
              }
            </p>
          </details>
          <details>
            <summary>{"How can I contact the hotel?"}</summary>
            <p>
              {"Call West Walk Retaj Hotel directly on "}
              <a href={"tel:+97440008444"}>{"+974 4000 8444"}</a>
              {", or visit our Hotels page for the reservation link."}
            </p>
          </details>
          <details>
            <summary>
              {"How do I enquire about an event or retail space?"}
            </summary>
            <p>
              {
                "Select Events & partnerships or Commercial leasing when preparing your enquiry, and include a brief description of your requirements."
              }
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}
