# Demo Gym — Ghaziabad

Premium React + Vite gym website demo.

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Demo configuration
Edit `src/config/business.js` to change:
- Business name and location
- WhatsApp number (international format, digits only)
- Membership plans and sample pricing
- Services and gallery images

WhatsApp enquiries use `https://wa.me/919528876007`. The contact form validates the visitor's name and Indian mobile number, then opens WhatsApp with a pre-filled message. It does not store data or claim a booking is confirmed.

## Before publishing for a real gym
1. Replace the demo name with the gym's actual registered/trading name.
2. Confirm exact address, phone, opening hours, prices and plan inclusions.
3. Replace sample photography with images the business has permission to use.
4. Replace sample testimonials (none are fabricated in this demo) with genuine, approved reviews if desired.
5. Update social links and Google Maps query.
6. Add a real form backend only if email/database lead capture is required.

## GitHub Pages
The Vite config uses `base: './'` for relative asset paths. Build with `npm run build`; deploy the `dist` folder using your preferred GitHub Pages workflow. For a custom domain, configure the domain in GitHub Pages and update DNS at your domain provider.


## V3 visual and assistant updates
- Reduced glare: both theme modes now use dark graphite/olive surfaces rather than a white page.
- Fixed theme contrast by using a consistent light-on-dark text palette across the alternate theme.
- Added rounded cards, panels, gallery frames, form surfaces and buttons with consistent spacing.
- Added a dedicated CNI competition spotlight. Gold/silver/bronze/total values intentionally show as unconfirmed until the owner provides verified medal counts.
- Replaced the persistent WhatsApp floater with a compact gym assistant. It answers common questions from configured demo information and offers a direct WhatsApp handoff for unknown or owner-specific questions.

### Chat assistant note
The included assistant is a local FAQ/keyword assistant, not a connected generative AI service. For open-ended AI answers, connect a backend endpoint to a model API; keep the API key on the server, not in frontend code.


## V4 visual updates
- Hero photography rotates automatically every 6.5 seconds, with manual slide indicators.
- Achievement page includes a visual story gallery for competition, medal, training and team moments.
- Achievement gallery photos are illustrative placeholders, not proof of actual gym competition results. Replace them with approved original photos and verified medal/award information before launch.

## V5 updates
- Changed the enquiry form panel from bright ivory to a softer low-glare charcoal/olive surface with readable inputs.
- Added a compact EN / हिन्दी control that uses the Google Website Translator widget to translate rendered page content between English and Hindi. It requires an internet connection and Google's translation script to load.

## V6 fixes and additions
- Google Translate button now waits/retries for the Google widget to initialize and shows a small inline notice instead of a blocking browser alert.
- Added a cinematic YouTube training-video section on the homepage, with a separate Watch on YouTube link and a scroll-to-memberships cue.
- Replace the sample YouTube video ID `LE9xIMKsclU` in `src/App.jsx` with the gym's approved video ID before client launch. Google Translate requires an internet connection and may be blocked by privacy extensions or network policy.

## V7 — Advanced fitness experience
- Added interactive BMI screening calculator with a plain-language limitation note.
- Added goal/experience/day-based sample weekly workout routine generator.
- Added trainer profile showcase with clear placeholder/verification notice.
- Added filterable exercise movement library with WhatsApp coaching handoff.
- Added free-trial request form that opens a prefilled WhatsApp message; it does not confirm availability or store bookings.
- Added a browser-local member progress preview using localStorage (not a secure account or cloud sync).
- Added an admin dashboard concept preview; no real admin login or database is connected.
- Added PWA manifest, app icon and a basic offline app-shell service worker.

### Important launch notes
The BMI and workout tools are general educational aids, not medical advice. Trainer photos/profiles, prices, gym address, business hours, statistics and awards must be replaced or verified by the gym owner. The admin and member panels are front-end previews only. Real member accounts, secure progress data, admin permissions, dynamic plan management, and database-backed trial bookings require a backend (for example Supabase/PostgreSQL), authentication, authorization policies and server-side validation. A browser-only dashboard must never be used to manage real customer data.


## V9 — Video removal, language control and separated pages
- Removed the embedded YouTube video section and its related styles from the homepage.
- Kept dedicated Trainers and Membership routes; trainer profiles are no longer duplicated on the homepage.
- Membership page presents the plan/pricing cards independently from the homepage.
- Switched to HashRouter so dedicated routes work on GitHub Pages without server-side rewrite configuration. URLs use `#/trainers`, `#/membership`, etc.
- Updated the EN / हिन्दी control to change the Google Translate widget selection when available, remember the selected language, and retry while the widget initializes. Google translation requires an internet connection and may be blocked by browser privacy tools or network policy.
- Bumped the service-worker cache version so deployed visitors can receive the updated app shell.


## V11 — Language controls and Google Translate removed
- Removed the first-visit English/Hindi selection popup.
- Removed the header language switch button and hidden Google Translate element.
- Removed Google Translate initialization code, external script, and related styling.
- Website now opens directly in its default English content; theme toggle and all page navigation remain unchanged.


## V12 — Prevent browser auto-translation and refresh stale cache
- Added `translate="no"` and Google `notranslate` metadata so the page is marked as English and requests that automated Google page translation not be applied.
- Bumped the service-worker cache version so clients fetch the current app shell instead of an older cached header.
- Note: an already translated Chrome tab must be reset with **Show original**; a website cannot dismiss Chrome's own translation toolbar.
