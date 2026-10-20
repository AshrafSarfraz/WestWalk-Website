"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Retains the original site's interactions; every listener is removed on unmount.
export default function PageBehavior() {
  const pathname = usePathname();
  useEffect(() => {
    const controller = new AbortController();
    const cleanups = [];
    const on = (target, event, handler) =>
      target?.addEventListener(event, handler, { signal: controller.signal });
    const video = document.getElementById("heroVideo"),
      motion = document.getElementById("motion");
    if (video && motion) {
      if (!video.paused) {
        video.classList.add("ready");
      }
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
        video.pause();
        motion.hidden = true;
      } else {
        on(video, "playing", () => {
          video.classList.add("ready");
          motion.textContent = "Pause Ⅱ";
          motion.setAttribute("aria-label", "Pause background video");
        });
        on(video, "pause", () => {
          motion.textContent = "Play ▷";
          motion.setAttribute("aria-label", "Play background video");
        });
        const fail = () => {
          motion.hidden = true;
          video.classList.remove("ready");
        };
        on(video, "error", fail);
        on(video.querySelector("source"), "error", fail);
        on(motion, "click", () =>
          video.paused ? video.play().catch(fail) : video.pause(),
        );
      }
    }
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll("video.film-loop").forEach((v) => {
        v.removeAttribute("autoplay");
        v.pause();
        v.controls = true;
      });
    }
    const cards = [...document.querySelectorAll(".filter-card")],
      search = document.getElementById("directory-search"),
      type = document.getElementById("type-filter"),
      beds = document.getElementById("bed-filter");
    let category = "All";
    function filterCards() {
      let count = 0;
      cards.forEach((card) => {
        const matchCategory =
          category === "All" || card.dataset.category === category;
        const matchSearch =
          !search ||
          card.dataset.search.includes(search.value.trim().toLowerCase());
        const matchType =
          !type || type.value === "All" || card.dataset.category === type.value;
        const matchBeds =
          !beds || beds.value === "All" || card.dataset.beds === beds.value;
        const show = matchCategory && matchSearch && matchType && matchBeds;
        card.hidden = !show;
        if (show) count++;
      });
      const result = document.querySelector(".result-count");
      if (result)
        result.textContent =
          count +
          " " +
          (type ? "residence" : "brand") +
          (count === 1 ? "" : "s");
      const empty = document.querySelector(".no-results");
      if (empty) empty.hidden = count !== 0;
    }
    document.querySelectorAll("[data-filter]").forEach((b) =>
      on(b, "click", () => {
        category = b.dataset.filter;
        document
          .querySelectorAll("[data-filter]")
          .forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
        filterCards();
      }),
    );
    on(search, "input", filterCards);
    on(type, "change", filterCards);
    on(beds, "change", filterCards);
    on(document.getElementById("reset-filters"), "click", () => {
      type.value = "All";
      beds.value = "All";
      filterCards();
    });
    const form = document.getElementById("enquiry-form");
    if (form) {
      const params = new URLSearchParams(location.search);
      const topic = params.get("subject");
      if (
        topic &&
        [...form.elements.subject.options].some((o) => o.value === topic)
      )
        form.elements.subject.value = topic;
      const property = params.get("property");
      const propertyNames = {
        "one-bedroom": "one-bedroom apartment",
        "two-bedroom": "two-bedroom apartment",
        "three-bedroom": "three-bedroom apartment",
        "two-bedroom-duplex": "two-bedroom duplex",
        "four-bedroom-duplex": "four-bedroom duplex",
      };
      if (propertyNames[property])
        form.elements.message.value =
          "I would like to arrange a viewing for the " +
          propertyNames[property] +
          ". Please share the available units and current rental details.";
      on(form, "submit", (e) => {
        e.preventDefault();
        if (!form.reportValidity()) return;
        const values = new FormData(form);
        const message =
          "Dear West Walk team,\n\n" +
          values.get("message") +
          "\n\nName: " +
          values.get("name") +
          "\nEmail: " +
          values.get("email") +
          "\nPhone: " +
          (values.get("phone") || "Not provided");
        document.getElementById("email-copy").value = message;
        document.getElementById("email-open").href =
          "mailto:info@westwalk.qa?subject=" +
          encodeURIComponent(values.get("subject")) +
          "&body=" +
          encodeURIComponent(message);
        document.getElementById("enquiry-result").hidden = false;
        document.getElementById("form-status").textContent =
          "Your enquiry is ready. Open your email app to review and send it. Nothing has been sent yet.";
        document.getElementById("email-open").focus();
      });
      on(document.getElementById("copy-enquiry"), "click", async () => {
        const text = document.getElementById("email-copy");
        try {
          await navigator.clipboard.writeText(text.value);
          document.getElementById("form-status").textContent =
            "Enquiry copied. Paste it into an email to info@westwalk.qa.";
        } catch {
          text.focus();
          text.select();
          document.getElementById("form-status").textContent =
            "Select and copy the enquiry text, then paste it into your email app.";
        }
      });
    }
    if (
      "IntersectionObserver" in window &&
      !matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const revealObserver = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              revealObserver.unobserve(entry.target);
            }
          }),
        { threshold: 0.08 },
      );
      document
        .querySelectorAll(
          ".editorial-photo,.editorial-copy,.discovery-card,.living-copy,.journal-feature,.journal-links",
        )
        .forEach((el) => {
          el.classList.add("reveal-ready");
          revealObserver.observe(el);
        });
      cleanups.push(() => revealObserver.disconnect());
    }

    return () => {
      controller.abort();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [pathname]);
  return null;
}
