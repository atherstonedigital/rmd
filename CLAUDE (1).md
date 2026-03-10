# RMD Flooring — Claude Code Project Brief

> Read this file fully before every task. It is the single source of truth for all
> decisions about stack, design, SEO, and content throughout this build.

---

## The Business

**RMD Flooring** is a family-run luxury flooring installer based in Tamworth, West Midlands.
Founded by Ryan and Kerry, they have 20+ years of experience fitting premium flooring
across the West Midlands — Karndean, Amtico, Invictus, Brampton Chase, Project Floors,
carpets and stair runners.

- **Address:** 37 Shirrall Drive, Drayton Bassett, Tamworth, B78 3EQ
- **Showroom phone:** 01827 936233
- **Mobile:** 07731 304083
- **Email:** info@rmdflooring.co.uk
- **Showroom hours:** Saturdays open to public; Mon–Fri 10am–4pm by appointment
- **Service area:** Tamworth, Birmingham, Sutton Coldfield, Lichfield, Solihull, Coventry, West Midlands
- **Key USP:** Approved installer of Karndean and Amtico. Fitted flooring for ex-England footballer Darren Bent.

---

## Stack — Do Not Deviate

| Layer | Tool | Purpose |
|---|---|---|
| Framework | Astro 4.x | Static output, SEO-first, zero JS by default |
| Styling | Tailwind CSS v3 | Utility classes only — no custom CSS files |
| Base components | shadcn/ui | Buttons, cards, forms, nav, modals, badges |
| Hero / feature sections | Aceternity UI (ui.aceternity.com) | Background Beams, Spotlight, Moving Border, 3D Card |
| Landing page effects | Magic UI (magicui.design) | Marquee, Number Ticker, Shimmer Text, Animated Gradient Text |
| Scroll animations | Motion Primitives (motion-primitives.com) | Scroll Reveal, Blur In, Text Reveal, Staggered entries |
| Icons | Lucide React | Ships with shadcn — use consistently |
| Forms | Netlify Forms | `netlify` attribute on `<form>` tag, no backend |
| Deployment | Netlify | Auto-deploy on push to GitHub main |

**Never use:** Bootstrap, jQuery, any CSS framework other than Tailwind, inline styles, lorem ipsum in final output, any backend or database.

---

## Component Hierarchy — Always Check in This Order

1. **shadcn/ui** → structural UI: buttons, inputs, selects, dialogs, nav, badges, cards
2. **Aceternity UI** → premium visual moments: hero backgrounds, spotlight effects, feature cards
3. **Magic UI** → landing page effects: animated counters, brand marquees, shimmer text
4. **Motion Primitives** → scroll-triggered animations: section reveals, text entrances, image fades
5. **Write custom** → only if nothing above covers it

Ordinary sections use clean shadcn. Key moments (hero, featured project, brand strip, trust stats) use the animated libraries. This keeps the site feeling premium without being overwhelming.

---

## Aceternity UI in Astro — Important Notes

Aceternity is built for Next.js. When copying components into this Astro project:

- **Remove** `"use client";` — not valid in Astro
- **Replace** `import Image from "next/image"` with `<img>` or `import { Image } from 'astro:assets'`
- **Remove** any `import React from "react"` (not needed with `jsxImportSource: react` in tsconfig)
- Save component source to `src/components/react/aceternity/ComponentName.tsx`
- Create an Astro wrapper in `src/components/sections/` that imports and renders with `client:visible`
- Add path alias in tsconfig: `"@aceternityui/*": ["src/components/react/aceternity/*"]`

---

## Design System

### Colour Palette

```
Navy dark:    #0F2035   Hero backgrounds, deepest dark sections
Navy:         #1A3C5E   Headings, nav, primary buttons, footer
Navy light:   #2A5278   Hover states on navy elements
Amber:        #E8A020   Accent — used sparingly: underlines, icon highlights, CTA hover glow
Amber light:  #F5B942   Amber hover states
Warm white:   #FAFAF8   Page/section background
Off white:    #F3F2EF   Alternating section background
Stone:        #E8E5DF   Borders, dividers, subtle backgrounds
Charcoal:     #1C1C1C   Body text
Mid grey:     #6B7280   Secondary text, captions, labels
```

### Typography

```
Display / hero h1:    Playfair Display — weights 400, 600, 700 — italic variant for pull quotes
Section headings h2:  Inter — weight 600
Sub-headings h3:      Inter — weight 500
Body:                 Inter — weight 400, line-height 1.75
Small / labels:       Inter — weight 500, uppercase tracking-widest for section labels
```

Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Spacing & Layout

- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section padding: `py-24 lg:py-32` — generous, premium feel
- Card corners: `rounded-2xl` — more contemporary than `rounded-lg`
- Primary CTA buttons: `rounded-full` pill shape
- Secondary buttons: `rounded-xl`

### Visual Direction

**Study these before building any section:**
- https://www.karndean.com — editorial, calm, expensive whitespace, dark hero
- https://www.amtico.com — material-led, warm, confident

**The goal:** premium interior design brand, not local trades directory listing.

What this means in practice:
- Dark hero (navy `#0F2035`) with Aceternity Background Beams — immediately premium
- Amber used like punctuation, not wallpaper — underlines, a border glow, an icon
- Section rhythm: dark hero → light services → dark trust/feature → light testimonials → dark CTA
- Photography does the selling — design frames it, doesn't compete with it
- Text sections have breathing room — `max-w-2xl` for body copy, not full-width walls of text

**Actively avoid:**
- Bright CTA colours that look like e-commerce
- Cramped grids with no margin
- Clip art or decorative icon packs
- Anything that looks like a generic WordPress theme or local business directory

---

## Which Component For Which Section

| Section | Library | Specific Component |
|---|---|---|
| Hero background effect | Aceternity UI | Background Beams With Collision |
| Hero heading entrance | Motion Primitives | Text Blur In or Word Reveal |
| Brand logo strip | Magic UI | Marquee (infinite horizontal scroll) |
| Services grid | Aceternity UI | Spotlight Card or 3D Card Effect |
| Trust stats (20 yrs, etc.) | Magic UI | Number Ticker inside shadcn Card |
| Darren Bent feature | Aceternity UI | Moving Border or Background Gradient Animation |
| Gallery section teaser | Motion Primitives | Staggered image reveal |
| Testimonials | Aceternity UI | Animated Testimonials or Card Stack |
| Section headings scroll in | Motion Primitives | Scroll Reveal (fade + translate) |
| Navigation | shadcn + custom | Sheet component for mobile drawer |
| All forms | shadcn | Input, Select, Textarea, Button |
| Badges ("Approved Installer") | shadcn | Badge component |
| Section label text ("OUR SERVICES") | Magic UI | Shimmer Text or Animated Gradient Text |

---

## SEO — Build Correctly From Day One

### Every Page Head

```astro
---
const { title, description, canonical, schemaData = [] } = Astro.props;
---
<title>{title}</title>
<meta name="description" content={description} />
<link rel="canonical" href={canonical} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content="/images/og/og-default.jpg" />
<meta property="og:type" content="website" />
<meta name="robots" content="index, follow" />
{schemaData.map((schema: object) => (
  <script type="application/ld+json" set:html={JSON.stringify(schema)} />
))}
```

### Schema Per Page Type

| Page | Required Schema |
|---|---|
| Homepage | LocalBusiness + Organization + WebSite |
| Service pages | Service (with provider ref to Organization) |
| Service pages with FAQ | FAQPage |
| Testimonials | Review items + AggregateRating |
| Contact | LocalBusiness (full address + hours) |
| Gallery | ImageGallery |

### Alt Text Formula

`[Brand] [material/style description] [floor type] [room type], [location]`

- `Karndean Da Vinci herringbone luxury vinyl flooring in open-plan kitchen, Birmingham`
- `Amtico Spacia pale oak LVT in entrance hallway, Sutton Coldfield`
- `Hand-tufted wool stair runner fitted in Victorian terraced house, Tamworth`

### URL Structure

```
/                           Home
/about/                     About RMD Flooring
/karndean-flooring/         Karndean service page
/amtico-flooring/           Amtico service page
/lvt-flooring/              LVT flooring overview
/carpets-and-stair-runners/ Carpets & stair runners
/gallery/                   Project gallery
/testimonials/              Testimonials & case studies
/contact/                   Contact & quote form
/thank-you/                 Post-form submission confirmation
```

---

## Pages to Build

### Homepage sections (in order):
1. Hero — dark navy, Aceternity Background Beams, Playfair Display h1, two CTAs
2. Brand marquee — Magic UI infinite scroll: Karndean / Amtico / Invictus / Brampton Chase / Project Floors
3. Services grid — Aceternity Spotlight Cards, 4 services
4. Trust stats — Magic UI Number Tickers: "20+ Years" / "5 Premium Brands" / "2 Year Guarantee"
5. Featured project — Darren Bent story, Aceternity Moving Border, editorial layout
6. Testimonials — Aceternity Card Stack or Animated Testimonials
7. Showroom banner — dark section, address + hours from siteConfig, CTA
8. Contact/quote — Netlify form

### Other pages:
- **About** — Ryan & Kerry story, values, Darren Bent expanded, 2-year guarantee, brands
- **Karndean** — explainer, approved installer benefits, gallery subset, 5-question FAQ, CTA
- **Amtico** — same structure as Karndean page
- **LVT** — broad LVT guide, subfloor prep, wet rooms, FAQ, CTA
- **Carpets & Runners** — carpet fitting, stair runner range, in-store finishing, CTA
- **Gallery** — CSS masonry grid, lazy loading, lightbox, ImageGallery schema
- **Testimonials** — Darren Bent case study hero, all reviews, Review schema
- **Contact** — Netlify form, map embed, hours, LocalBusiness schema
- **Thank You** — simple confirmation page, link back to home

---

## File Structure

```
src/
  components/
    layout/           Header.astro, Footer.astro
    sections/          HeroSection.astro, BrandMarquee.astro, ServicesGrid.astro ...
    ui/                Astro wrappers for shadcn components
    react/
      aceternity/      Aceternity component .tsx source (Next.js refs removed)
      magicui/         Magic UI component .tsx source
  pages/               One .astro file per route
  data/
    siteConfig.ts      ALL business info — single source of truth
    services.ts        Service objects array
    testimonials.ts    Review objects array
  lib/
    utils.ts           cn() helper
    schema.ts          JSON-LD builder functions
  styles/
    global.css         Tailwind base directives + font-face only
public/
  images/
    gallery/           Project photography
    brands/            Brand logos (Karndean, Amtico etc)
    hero/              Hero background images
    og/                Open Graph images
```

---

## Data File: siteConfig.ts

This is imported everywhere contact details or business info are needed. Never hardcode phone numbers, addresses, or opening hours in components.

```ts
export const siteConfig = {
  name: "RMD Flooring",
  tagline: "Bespoke Luxury Flooring, West Midlands",
  url: "https://rmdflooring.co.uk",
  address: {
    street: "37 Shirrall Drive",
    area: "Drayton Bassett",
    town: "Tamworth",
    postcode: "B78 3EQ",
    full: "37 Shirrall Drive, Drayton Bassett, Tamworth, B78 3EQ",
  },
  phone: {
    showroom: "01827 936233",
    mobile: "07731 304083",
    showroomTel: "tel:01827936233",
    mobileTel: "tel:07731304083",
  },
  email: "info@rmdflooring.co.uk",
  hours: {
    saturday: "Open to public",
    weekdays: "Mon–Fri 10am–4pm (appointment)",
  },
  serviceArea: ["Tamworth", "Birmingham", "Sutton Coldfield", "Lichfield", "Solihull", "Coventry"],
  socialLinks: {
    facebook: "",
    instagram: "",
  },
};
```

---

## Pre-Task Checklist

Before marking any task done:

- [ ] No `"use client"` or `next/image` in any file
- [ ] Tailwind classes only — no inline styles, no custom CSS
- [ ] Correct library used (check hierarchy: shadcn → Aceternity → Magic UI → Motion Primitives)
- [ ] Images: `loading="lazy"`, descriptive alt text per formula, explicit width + height
- [ ] Page has title, meta description, canonical URL
- [ ] Schema JSON-LD present and correct for this page type
- [ ] No hardcoded contact details — imported from siteConfig
- [ ] No lorem ipsum text
- [ ] Mobile layout considered and described
