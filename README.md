# West Walk — Next.js + Tailwind

Node.js 20.9+ required. Run `npm ci`, then `npm run dev`. Production: `npm run build`, then `npm start`.

## Edit once, update everywhere

- `components/Navbar.jsx` and `components/Footer.jsx`: the shared header/footer, rendered once by `app/layout.jsx` through `SiteShell`.
- `components/Footer.jsx`: Tailwind footer with white background, dark text and the retained multicolour ribbon.
- `data/site.js`: navigation, shared image paths and hotel gallery. The static homepage hero image is configured in `homeHero`.
- `app/page.jsx`: the redesigned homepage. It composes `HomeHero`, `HomeStory` and `HomeExperiences`, followed by amenities and visit sections.
- `components/HomeExperiences.jsx`: a three-column photograph directory; edit the `experiences` array here.
- `components/HomeExperienceCard.jsx`: reusable photo card with aligned action buttons, styled with Tailwind.
- `components/HomeHero.jsx`: a wide static hero image and left-side solid white text panel.
- `components/HomeStory.jsx`: the “More than a place” section.
- `components/HeroMedia.jsx`: image-only hero, without a video player, overlay or shadow.
- `data/destination.json`, `data/events.json`, `data/residences.json`: directory records, detail pages, images, text and existing rent information.
- `app/globals.css`: Tailwind v4 theme tokens and compatibility styles in the components layer.

## Styling and adding pages

Tailwind runs through `@tailwindcss/postcss`. Edit the `@theme` block in `app/globals.css` to change the shared brand tokens. Home sections and the shared header use Tailwind utilities; inner-page styles remain in `@layer components`.

Add pages under `app/`; the root layout supplies the shared header and footer automatically. Add menu links in `data/site.js`. Local media lives in `public/assets/`.

## Homepage

The homepage starts with a full-width photograph and a white text panel on the left. “More than a place” comes next, followed by “Find your kind of everyday”. Dining, residences and the hotel appear in a three-column photo directory. Intro copy sits alongside the image collections, with white/grey section backgrounds and simple sans-serif headings. The shared header is transparent over the home hero, hides while scrolling down, and returns with a white background when scrolling up. Inner pages start with a white header. Header and footer share the same white/dark colour scheme. Further sections show the boulevard, pool and fitness studio using still images. No video is rendered on the homepage. The footer matches the white header palette and retains the gradient ribbon.

The enquiry form prepares an email for the visitor to send; there is no submission backend. Existing rates and event records have been retained. Event entries use boulevard photography until event photos are supplied.

Updated homepage screenshots and check results are in `docs/` and `VALIDATION.md`.

## Header behaviour

`Navbar.jsx` owns scroll direction and mobile menu state. It ignores small scroll movements, remains visible near the top or while its controls have keyboard focus, and keeps the menu visible while open. Scroll listeners and pending animation frames are cleaned up. All appearance and transitions use Tailwind utilities.
