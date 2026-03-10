# RMD Flooring — Claude Code Project Brief

> Read this file fully before every task. It is the single source of truth for all
> decisions about stack, design, SEO, and content throughout this build.

---

## The Business

**RMD Flooring** is a family-run luxury flooring installer based in Tamworth, West Midlands.
Founded by Ryan and Kerry, they have 20+ years of experience fitting premium flooring
across the West Midlands, including Karndean, Amtico, Invictus, Brampton Chase, and
Project Floors, as well as carpets and stair runners.

- **Address:** 37 Shirrall Drive, Drayton Bassett, Tamworth, B78 3EQ
- **Phone (Showroom):** 01827 936233
- **Phone (Mobile):** 07731 304083
- **Email:** info@rmdflooring.co.uk
- **Showroom:** Open Saturdays to public; Mon–Fri 10am–4pm by appointment
- **Service area:** Tamworth, Birmingham, Sutton Coldfield, Lichfield, Solihull, Coventry, West Midlands
- **USP:** Premium approved installer. Worked with ex-England footballer Darren Bent.

---

## Stack — Do Not Deviate From This

| Layer | Choice | Notes |
|---|---|---|
| Framework | Astro 4.x | Static output, SEO-first |
| Styling | Tailwind CSS v3 | Utility classes only, no custom CSS files |
| Components | shadcn/ui | Always check here first before writing custom components |
| Icons | Lucide React | Consistent icon set, already in shadcn |
| Animation | Tailwind transitions + Framer Motion (sparingly) | Hero and scroll reveals only |
| Forms | Netlify Forms | `netlify` attribute on form tag, no backend needed |
| Deployment | Netlify | Auto-deploy from GitHub main branch |
| Font loading | Astro @font-face or Google Fonts via `<link>` | See typography below |

**Never use:** Bootstrap, jQuery, custom CSS frameworks, any backend/server, lorem ipsum in final output.

---

## Design System

### Colour Palette

```css
--navy:        #1A3C5E;   /* Primary — headings, nav, CTA buttons */
--navy-light:  #2A5278;   /* Hover states */
--amber:       #E8A020;   /* Accent — underlines, highlights, icons */
--amber-light: #F5B942;   /* Amber hover */
--warm-white:  #FAFAF8;   /* Page background */
--off-white:   #F3F2EF;   /* Section alternates */
--stone:       #E8E5DF;   /* Borders, dividers */
--charcoal:    #2D2D2D;   /* Body text */
--mid-grey:    #6B7280;   /* Secondary text, captions */
```

### Typography

- **Display / Hero headings:** Playfair Display (Google Fonts) — `font-display`
- **All other headings (h2–h4):** Inter — `font-heading`
- **Body text:** Inter — `font-sans`
- **Base size:** 16px, line-height 1.6
- **Heading scale:** Use Tailwind's text-4xl / text-5xl / text-6xl for hero, text-3xl for section headings

### Spacing & Layout

- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section padding: `py-16 lg:py-24`
- Cards: `rounded-xl shadow-md` with subtle border `border border-stone-200`
- Buttons: Rounded, not pill-shaped. Primary = navy bg, amber hover ring. Secondary = outlined navy.

### Design Reference Sites

Before building any section, reference these for visual direction:
- https://www.karndean.com
- https://www.amtico.com

The feel should be: **premium trade, not DIY retail.** Think calm, confident, minimal — expensive-looking whitespace, beautiful photography, tasteful amber accents. Never busy, never loud.

---

## Component Rules

1. **Always check shadcn/ui first** (https://ui.shadcn.com/docs/components) before writing a custom component
2. Use `cn()` helper from `lib/utils.ts` for conditional class merging
3. All interactive elements must have visible focus rings (accessibility)
4. Hover transitions should use `transition-all duration-200`
5. No inline styles — Tailwind classes only
6. Every image: `loading="lazy"`, descriptive `alt` text, explicit `width` and `height`
7. Mobile-first breakpoints: default = mobile, `md:` = tablet, `lg:` = desktop

---

## SEO Rules — Bake In From Day One

These are non-negotiable and must be applied to every page and component as you build, not retrofitted later.

### Every Page Must Have

```astro
---
// In frontmatter of every .astro page
const { title, description, canonical } = Astro.props;
---
<meta name="title" content={title} />
<meta name="description" content={description} />
<link rel="canonical" href={canonical} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content="/images/og/og-default.jpg" />
```

### Schema Markup Required

| Page | Schema Type |
|---|---|
| Homepage | `LocalBusiness` + `Organization` + `WebSite` |
| All service pages | `Service` with `provider` referencing the Organization |
| Testimonials page | `Review` + `AggregateRating` |
| Contact page | `LocalBusiness` (repeated, with full address) |
| Gallery page | `ImageGallery` |

All schema must be JSON-LD in a `<script type="application/ld+json">` tag in the page `<head>`.

### Image Alt Text Formula

Format: `[Brand/Material] [floor type] [room type] [location]`

Examples:
- `Karndean herringbone luxury vinyl flooring in open-plan kitchen, Birmingham`
- `Amtico Spacia wood-effect LVT in hallway, Tamworth`
- `Stair runner fitted in period home, Sutton Coldfield`

### URL Structure

| Page | URL |
|---|---|
| Home | `/` |
| About | `/about/` |
| Karndean Flooring | `/karndean-flooring/` |
| Amtico Flooring | `/amtico-flooring/` |
| LVT Flooring | `/lvt-flooring/` |
| Carpets | `/carpets-and-stair-runners/` |
| Gallery | `/gallery/` |
| Testimonials | `/testimonials/` |
| Contact | `/contact/` |

---

## Page Structure & Content Brief

### Layout Shell (`src/layouts/BaseLayout.astro`)
- `<Header>` — sticky, transparent on scroll for homepage hero, solid navy on inner pages
- `<main>` — semantic wrapper
- `<Footer>` — dark navy background, full contact details, nav links, accreditation logos
- Must include: skip-to-content link, proper lang="en" on html tag

### Pages to Build (in this order)

**1. Homepage (`/`)**
Sections in order:
- Hero: Full-width image, headline "Bespoke Luxury Flooring, West Midlands", subheadline with 20-year experience line, two CTAs ("Get a Quote" primary, "View Our Work" secondary)
- Brand logos strip: Karndean, Amtico, Invictus, Brampton Chase, Project Floors
- Services overview: 4-card grid — LVT, Karndean, Amtico, Carpets & Runners
- Why RMD: 3-column trust stats — "20+ Years Experience", "Premium Brands Only", "2-Year Fitting Guarantee"
- Featured project (Darren Bent): Dark section, quote/story, CTA to testimonials
- Google reviews embed: 5.0 rating, show 2 existing reviews
- Showroom CTA banner: Image background, address, opening hours, directions link
- Contact section: Phone, email, quote form

**2. About (`/about/`)**
- Hero with team photo placeholder
- The RMD story (Ryan & Kerry, self-employed to Ltd)
- Values: Quality, Honesty, 20 years of expertise
- The Darren Bent story (expanded from homepage)
- 2-year fitting guarantee callout
- Brands we work with

**3. Karndean Flooring (`/karndean-flooring/`)**
- What is Karndean (explain luxury vinyl, wood/stone replication)
- Why choose an approved installer vs DIY
- Our Karndean work (gallery subset)
- FAQ section (5–6 questions) — triggers FAQPage schema
- CTA to quote

**4. Amtico Flooring (`/amtico-flooring/`)**
- Same structure as Karndean page
- Emphasise Amtico-specific qualities

**5. LVT Flooring (`/lvt-flooring/`)**
- Broader LVT explainer (Karndean and Amtico are premium LVT brands)
- Subfloor preparation and levelling services
- Wet room LVT section
- FAQ + CTA

**6. Carpets & Stair Runners (`/carpets-and-stair-runners/`)**
- Carpet fitting services
- Stair runner range introduction
- In-store finishing: tape binding and whipping
- Gallery subset + CTA

**7. Gallery (`/gallery/`)**
- Masonry or grid layout
- Images from `/public/images/gallery/`
- Every image: descriptive alt text per formula above
- Filter by type (optional enhancement): LVT, Carpet, Stair Runners

**8. Testimonials (`/testimonials/`)**
- Darren Bent case study (hero feature)
- Google reviews (all available)
- Written testimonials
- Review schema markup

**9. Contact (`/contact/`)**
- Netlify form: Name, Phone, Email, Service type (dropdown), Message
- Address + embedded Google Map
- Phone numbers
- Showroom opening hours
- LocalBusiness schema

---

## File & Folder Conventions

```
src/
  components/
    layout/       # Header.astro, Footer.astro, BaseLayout.astro
    sections/     # HeroSection.astro, ServicesGrid.astro etc
    ui/           # Button.astro, Card.astro, Badge.astro (shadcn wrappers)
  pages/          # One .astro file per route
  data/           # siteConfig.ts, services.ts, testimonials.ts
  lib/            # utils.ts (cn helper), schema.ts (JSON-LD builders)
  styles/         # global.css (Tailwind base only)
public/
  images/
    gallery/      # All project photography
    brands/       # Karndean, Amtico etc logos
    og/           # Open Graph images
```

---

## Data Files to Create Early

**`src/data/siteConfig.ts`** — single source of truth for all business info (name, address, phone, email, hours). Import into schema builders and footer — never hardcode contact details in components.

**`src/data/services.ts`** — array of service objects (name, slug, description, icon, heroImage) to drive the services grid and nav dynamically.

**`src/data/testimonials.ts`** — array of review objects to drive the testimonials page and homepage widget.

---

## Content Source

The existing site at **https://rmdflooring.co.uk** is the content reference. Use it for:
- Business facts, names, addresses, phone numbers
- Service descriptions (rewrite for SEO, don't copy verbatim)
- The family business story
- Existing testimonials

Do not copy content word-for-word — rewrite with better keyword targeting and clarity.

---

## Things to Check Before Marking Any Task Done

- [ ] Tailwind classes only (no inline styles, no custom CSS)
- [ ] shadcn/ui component used where one exists
- [ ] Image has lazy loading + descriptive alt text
- [ ] Page has title, meta description, canonical tag
- [ ] Schema JSON-LD present if required for this page type
- [ ] Mobile layout tested (describe how it should look at 375px)
- [ ] No lorem ipsum text
- [ ] No hardcoded contact details (use siteConfig import)
