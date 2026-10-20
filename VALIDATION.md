# Validation — scrolling header and matching footer

- Production build passed.
- Home header starts transparent over the hero.
- Chromium scroll-down check hides the header.
- Scrolling up by 60px reveals it with a white background.
- Returning to page top restores transparency.
- Header/footer computed background is white and text colour matches.
- Mobile menu opens with white background and closes after navigation.
- Home, hotels, residences, events and contact routes returned HTTP 200 at 390px with no horizontal overflow or broken images.
- No browser page errors in checked flows.
- Homepage remains image-only, without an image shadow.
- Updated desktop/mobile screenshots are in docs/.

Header and footer use Tailwind utilities. White/light-grey content backgrounds and the footer ribbon are retained.
