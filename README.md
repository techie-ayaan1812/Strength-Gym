# STRENGTH GYM Website

A React + Vite site for STRENGTH GYM: hero, about, programs, why-us, trainers, membership, gallery, testimonials, CTA, enquiry form and footer. The official logo is included and used unaltered (circular display crop only).

## Prerequisites
- Node.js 18 or newer (https://nodejs.org)
- VS Code (optional)

## Run in VS Code
1. Extract the ZIP and open the `strength-gym` folder in VS Code (File > Open Folder).
2. Open the terminal (Ctrl+` ) and run:

```
npm install
npm run dev
```
3. Open the local address shown (usually http://localhost:5173).

## Production build
```
npm run build
npm run preview
```
The finished site is in `dist/`.

## Where to edit things
All content lives in **`src/data/siteConfig.js`**: gym name, contact details, hours, social links, prices, programs, trainers, stats, testimonials, gallery and image paths.
Everything marked PLACEHOLDER, "sample" or "demo" is NOT real business information and must be replaced before launch.

- **Logo:** replace `public/logo/strength-gym-logo.jpg` (and `public/favicon.jpg`) keeping the same file names.
- **Contact details / prices:** `site.contact` and `plans` in `siteConfig.js`.
- **Social links:** fill in `site.social[].url`. Empty links are hidden automatically.
- **Statistics:** `stats` (currently 0 sample values; set real numbers or delete items).

## Images
No stock photography is bundled (none could be downloaded in the build environment, and licences must be checked). Each photo slot shows a navy fallback graphic until you add a file. Put your own photos in `public/images/` using the names listed in `public/images/README.txt`. Only use photos you own or are licensed to use, and only show member progress photos with written consent.

## How the enquiry form works
The form validates every field. While `site.formEndpoint` is empty it runs in **demo mode**: it shows a clear message that nothing was sent.

### Connect a real backend
1. Create an endpoint that accepts JSON (Formspree, Getform, Netlify Forms function, or your own API).
2. Paste its URL into `formEndpoint` in `src/data/siteConfig.js`.
3. The form POSTs `{ name, phone, email, program, plan, message }` as JSON and shows success or error feedback based on the response.

## Deploy
**Vercel:** push the project to GitHub, import it at vercel.com, framework "Vite", build `npm run build`, output `dist`.
**Netlify:** import the repo, build command `npm run build`, publish directory `dist`. (Or drag the `dist` folder onto app.netlify.com/drop.)

## Checks performed during creation
- `npm install` completed.
- `npm run build` completed with no errors.
- Not run: browser testing, Lighthouse, automated tests. Please open the site and click through it yourself.

## v2 notes
- Redesigned black/navy/electric-blue glass theme (`src/styles/global.css`, v2 overrides at the end).
- New Google Maps section (`src/sections/Location.jsx`). It searches `site.mapQuery` ("Strength Gym, Mumbra, Thane, Maharashtra") in `src/data/siteConfig.js`. Replace it with the full street address to pin the exact location.
- hero/about/cta images are crops of the logo artwork; replace them with real gym photos in `public/images/`.
- Contact details, prices, trainers and testimonials remain placeholders.
- Gymo chatbot (`src/components/Gymo.jsx`): edit questions and answers in `gymo` inside `src/data/siteConfig.js`. Timing and fee answers are placeholders until you add real details.
