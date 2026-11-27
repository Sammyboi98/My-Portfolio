# El_Shamzy portfolio

React + TypeScript + Vite, with Framer Motion for animation and React Router for pages. It's built from the "Portfolio (Shamzy)" Figma revamp.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in /dist
npm run preview  # serve the production build
```

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/projects` | All work |
| `/landing-pages` | Landing pages |
| `/case-studies` | Case studies |
| `/case-studies/:slug` | `certracker`, `paypetal`, `aib-express`, `clinician-refocus` |

## What clicking a project card does

What each card does is set in `src/data/projects.ts`:

- **`liveUrl`**: opens the live website in a new tab.
- **`stores`**: opens a chooser with App Store and Google Play buttons. PayPetal App and CerTracker use this.
- **Neither**: opens a preview overlay of the mockups listed in `gallery`. Arrow keys and Esc work in the overlay.
- **`caseStudy`**: adds a "Read case study" button inside the overlay.

## Things to fill in

Edit these in `src/data/site.ts`:

- **`linkedin`**: your LinkedIn URL. The footer link stays hidden while this is empty.
- **`resume`**: put your PDF at `public/resume.pdf`, or point this at a hosted PDF.

## Editing content

| What | File |
|---|---|
| Homepage copy, services, toolkit and testimonials | `src/data/home.ts` |
| Case studies | `src/data/caseStudies.ts` |
| Images (WebP, exported from Figma) | `public/images/` |
| Design tokens and all styles | `src/styles/global.css` |

## Deploying

Vercel, Netlify or Cloudflare Pages:

- Build command: `npm run build`
- Output folder: `dist`

Because routes like `/projects` need to load `index.html`, add a single-page-app rewrite:

- **Netlify:** `public/_redirects` is already included.
- **Vercel:** `vercel.json` is already included.

## Motion and accessibility

- **Easing:** one curve, `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Entrances:** content fades up once as it scrolls into view. Headlines rise in word by word.
- **Reduced motion:** honoured via `MotionConfig reducedMotion="user"` and CSS media queries.
- **Keyboard:** keyboard focus is clearly visible. There's a skip link, and the overlay keeps focus inside it and closes with Esc.
