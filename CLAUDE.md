# AZ Concrete King — Project Guide

## Project Overview

**Company**: AZ Concrete King
**Industry**: Concrete power washing
**Location**: Arizona
**Target Market**: Residential homeowners
**Job Tiers**: Small, Medium, Large

AZ Concrete King is a concrete power washing company serving residential customers in Arizona. They handle jobs of all sizes — from small walkways and driveways to full-property cleanings. The website should make it easy for homeowners to understand services, see pricing, read reviews, and request a quote.

---

## Tech Stack

- **HTML5** — Semantic markup, no frameworks
- **CSS3** — Custom properties for theming, mobile-first responsive design
- **JavaScript** — Vanilla JS, no libraries or frameworks
- **Git** — Version control
- **GitHub** — Code repository
- **Vercel** — Deployment and hosting
- **Google Fonts** — Typography (Montserrat + Open Sans)

No build tools or bundlers required. The site runs as static files.

---

## File Structure

```
/
├── index.html            # Home page (hero, highlights, CTA)
├── services.html         # Services & pricing page
├── reviews.html          # Customer reviews/testimonials
├── about.html            # About the company
├── contact.html          # Contact form / info
├── css/
│   ├── styles.css        # Main stylesheet
│   └── variables.css     # CSS custom properties (colors, fonts, spacing)
├── js/
│   ├── main.js           # Shared JS (nav toggle, scroll animations)
│   ├── pricing.js        # Loads and renders pricing from JSON
│   └── reviews.js        # Loads and renders reviews from JSON
├── assets/
│   ├── images/           # Photos, icons, hero backgrounds
│   └── fonts/            # Local font files (if not using Google Fonts CDN)
├── data/
│   ├── pricing.json      # Pricing data by job size
│   └── reviews.json      # Customer review data
├── tools/                # Dev utilities built for this project
│   ├── pricing-manager.js    # Add/update pricing entries
│   ├── review-collector.js   # Add/manage customer reviews
│   ├── image-optimizer.js    # Compress images for web
│   └── deploy.sh             # Push to Vercel
├── .claude/
│   └── skills/               # Installed Claude Code skills
│       ├── web-design-reviewer.md
│       ├── interactive-portfolio.md
│       ├── ui-ux-pro-max.md
│       └── ui-designer.md
├── CLAUDE.md
└── README.md
```

---

## Skills (Claude Code)

Four skills are installed in `.claude/skills/` to assist during development. Reference these skills when working on the tasks they specialize in.

### 1. Web Design Reviewer
**File**: `.claude/skills/web-design-reviewer.md`
**Source**: [github/awesome-copilot](https://github.com/github/awesome-copilot/tree/main/skills/web-design-reviewer)

**What it does**: Visual inspection and validation of website design quality. Identifies layout issues, responsive breakage, accessibility problems, and visual inconsistencies — then fixes them at the source code level.

**Use this skill when**:
- Reviewing any page for design quality after building it
- Checking responsive behavior across mobile/tablet/desktop
- Auditing accessibility (contrast, focus states, alt text, ARIA)
- Fixing layout overflow, alignment, or spacing issues
- Running a final design QA pass before deployment

### 2. Interactive Portfolio
**File**: `.claude/skills/interactive-portfolio.md`
**Source**: [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates)

**What it does**: Expert guidance for building portfolio-style showcase sections. Covers architecture, project presentation, case studies, and conversion-optimized layouts.

**Use this skill when**:
- Building the project showcase / before-and-after gallery sections
- Designing the hero section for maximum impact (30-second test)
- Structuring case study content (challenge → process → results)
- Creating visual project cards with impact metrics
- Optimizing the site for visitor-to-lead conversion

### 3. UI/UX Pro Max
**File**: `.claude/skills/ui-ux-pro-max.md`
**Source**: [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)

**What it does**: Design intelligence toolkit with searchable databases of UI styles, color palettes, font pairings, chart types, and UX guidelines. Provides priority-based design rules and best practices.

**Use this skill when**:
- Making decisions about color palettes, typography, or spacing
- Choosing UI styles for components (cards, buttons, forms, nav)
- Checking UX best practices (touch targets, loading states, error feedback)
- Reviewing accessibility compliance (contrast ratios, focus states, ARIA)
- Building any new component or page layout from scratch
- Selecting animation timing and performance-safe transitions

### 4. UI Designer
**File**: `.claude/skills/ui-designer.md`
**Source**: [openclaw/skills (wing8169)](https://github.com/openclaw/skills/tree/main/skills/wing8169/ui-ux-dev)

**What it does**: Generates production-quality UI designs from natural language prompts. Enforces strict design principles for layout, typography, color, responsive design, and code quality.

**Use this skill when**:
- Generating new page layouts or sections from a description
- Prototyping new components or page designs
- Enforcing mobile-first responsive design rules
- Applying design principles: spacing scale, max content width, vertical rhythm
- Validating that generated HTML follows semantic structure and accessibility standards

### Skill Usage Matrix

| Build Task                        | Primary Skill       | Supporting Skill     |
|-----------------------------------|----------------------|----------------------|
| Building new pages/sections       | UI Designer          | UI/UX Pro Max        |
| Designing component styles        | UI/UX Pro Max        | UI Designer          |
| Before/after gallery              | Interactive Portfolio| UI Designer          |
| Hero section design               | Interactive Portfolio| UI/UX Pro Max        |
| Responsive testing & fixes        | Web Design Reviewer  | UI Designer          |
| Accessibility audit               | Web Design Reviewer  | UI/UX Pro Max        |
| Final design QA before deploy     | Web Design Reviewer  | —                    |
| Color/typography decisions        | UI/UX Pro Max        | —                    |
| CTA & conversion optimization     | Interactive Portfolio| UI/UX Pro Max        |
| Layout debugging                  | Web Design Reviewer  | UI Designer          |

---

## Design Theme & Branding

### Theme
Power washing — clean, fresh, professional. The design should evoke the transformation of dirty concrete into spotless surfaces. Think water spray, pressure, before/after contrast.

### Color Palette
| Role        | Color          | Hex       | Usage                            |
|-------------|----------------|-----------|----------------------------------|
| Primary     | Deep Blue      | `#1B4F72` | Headers, nav, trust elements     |
| Secondary   | Bright Orange  | `#E67E22` | CTAs, buttons, accents           |
| Background  | White          | `#FFFFFF` | Page backgrounds                 |
| Light Gray  | Soft Gray      | `#F4F6F7` | Section backgrounds, cards       |
| Text        | Dark Charcoal  | `#2C3E50` | Body text                        |
| Accent      | Light Blue     | `#3498DB` | Links, hover states              |

### Typography
- **Headings**: Montserrat (Bold, 700) — strong, modern, professional
- **Body text**: Open Sans (Regular, 400) — clean and readable
- **Loaded via**: Google Fonts CDN

### Imagery Guidelines
- Before/after concrete cleaning shots
- Water spray / pressure washer in action
- Clean concrete surfaces (driveways, patios, pool decks)
- Arizona residential homes and landscapes
- Use placeholder images during development, replace with real photos later

### Brand Tone
- Professional but approachable
- Trustworthy and local
- Results-focused — emphasize the transformation
- Friendly, not corporate

---

## Pages & Components

### Pages

1. **index.html (Home)**
   - Hero section with background image, tagline, and CTA button
   - Services overview (3 cards linking to services page)
   - Featured reviews snippet
   - Before/after preview
   - Footer with contact info

2. **services.html (Services & Pricing)**
   - Service descriptions for each job size
   - Pricing cards (small / medium / large) loaded from `data/pricing.json`
   - What's included in each tier
   - CTA to request a quote

3. **reviews.html (Reviews)**
   - Customer testimonial cards loaded from `data/reviews.json`
   - Star ratings
   - Customer name and location
   - Option to filter or sort

4. **about.html (About)**
   - Company story and mission
   - Why choose AZ Concrete King
   - Service area coverage
   - Team info (if applicable)

5. **contact.html (Contact)**
   - Contact form: name, email, phone, job size dropdown, message
   - Phone number and email displayed
   - Service area map (optional)
   - Business hours

### Reusable Components
> **Skills**: Use `ui-designer` and `ui-ux-pro-max` when building or refining any component below. Use `interactive-portfolio` for the hero and before/after sections.

- **Navigation Bar**: Responsive, sticky, hamburger menu on mobile
- **Hero Section**: Full-width background, overlay text, CTA
- **Pricing Card**: Title, price range, feature list, CTA button
- **Review Card**: Star rating, quote text, customer name
- **Before/After Slider**: Side-by-side image comparison with draggable divider
- **Footer**: Contact info, nav links, social media icons
- **CTA Button**: Consistent styled button used site-wide

---

## Data Files

### data/pricing.json
```json
{
  "tiers": [
    {
      "name": "Small",
      "description": "Walkways, small driveways, steps",
      "sqft_range": "Up to 200 sq ft",
      "price_range": "$75 - $150",
      "features": [
        "Surface cleaning",
        "Edge detailing",
        "Basic stain treatment"
      ]
    },
    {
      "name": "Medium",
      "description": "Full driveways, patios, pool decks",
      "sqft_range": "200 - 600 sq ft",
      "price_range": "$150 - $350",
      "features": [
        "Full surface cleaning",
        "Edge detailing",
        "Stain treatment",
        "Sealer application"
      ]
    },
    {
      "name": "Large",
      "description": "Full property, multiple surfaces, commercial-scale",
      "sqft_range": "600+ sq ft",
      "price_range": "$350 - $800+",
      "features": [
        "Full property cleaning",
        "All surfaces included",
        "Deep stain removal",
        "Sealer application",
        "Follow-up inspection"
      ]
    }
  ]
}
```

> **Note**: Pricing is placeholder. Before launch, Claude should research competitive concrete power washing pricing in the Arizona market and update these values accordingly.

### data/reviews.json
```json
{
  "reviews": [
    {
      "name": "Customer Name",
      "location": "Phoenix, AZ",
      "rating": 5,
      "text": "Placeholder review text.",
      "date": "2025-01-15"
    }
  ]
}
```

---

## Tools Directory

Tools are utility scripts built alongside the project. Reference these when performing common tasks:

| Tool                    | File                          | Purpose                                      |
|-------------------------|-------------------------------|----------------------------------------------|
| Pricing Manager         | `tools/pricing-manager.js`    | Add, update, or remove pricing tiers         |
| Review Collector        | `tools/review-collector.js`   | Add new customer reviews to reviews.json     |
| Image Optimizer         | `tools/image-optimizer.js`    | Compress and resize images for web           |
| Deploy Script           | `tools/deploy.sh`             | Build checks and deploy to Vercel            |

When building new features or making updates, check if a tool exists first. Build new tools as needed and document them here.

---

## Development Guidelines

### Code Style
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- CSS custom properties defined in `css/variables.css` — never hardcode colors or fonts
- Mobile-first: write mobile styles first, use `min-width` media queries for larger screens
- No inline styles or inline scripts
- Use `const` and `let` — never `var`
- Use template literals for HTML string building in JS

### Responsive Breakpoints
> **Skills**: After building pages, run `web-design-reviewer` to test responsive behavior across all viewports.

```css
/* Mobile: default styles (no media query) */
/* Tablet: */  @media (min-width: 768px) { }
/* Desktop: */ @media (min-width: 1024px) { }
/* Wide: */    @media (min-width: 1280px) { }
```

### Accessibility
> **Skills**: Reference `web-design-reviewer` and `ui-ux-pro-max` for comprehensive accessibility checks.

- All images must have descriptive `alt` text
- Use ARIA labels on interactive elements
- Ensure keyboard navigation works for all interactive components
- Maintain color contrast ratio of at least 4.5:1
- Form fields must have associated `<label>` elements

### SEO
- Each page gets a unique `<title>` and `<meta name="description">`
- Use proper heading hierarchy (one `<h1>` per page)
- Add structured data (LocalBusiness schema) to index.html
- Include Open Graph meta tags for social sharing

### Performance
- Compress all images before committing
- Lazy load images below the fold
- Minimize CSS/JS file sizes
- Use system font stack as fallback

### Data-Driven Content
- Pricing and reviews are loaded from JSON files, not hardcoded in HTML
- This makes updates easy — edit the JSON, the site reflects changes automatically
- JS files in `/js/` handle fetching and rendering this data

---

## Pricing Research Directive

Before the site launches, research competitive pricing for concrete power washing services in Arizona:

- **Small jobs** (walkways, steps, small driveways — up to 200 sq ft)
- **Medium jobs** (full driveways, patios, pool decks — 200-600 sq ft)
- **Large jobs** (full property, multiple areas — 600+ sq ft)

Research should include:
- Average market rates in the Phoenix/Arizona metro area
- Price-per-square-foot ranges
- What services are typically included at each tier
- Any seasonal pricing variations

Update `data/pricing.json` with researched values.

---

## Pre-Launch Checklist

Before deploying, run through these skill-powered checks:

1. **Design QA** — Use `web-design-reviewer` to inspect every page for layout issues, responsive breakage, and accessibility problems
2. **UX Audit** — Reference `ui-ux-pro-max` guidelines to verify touch targets, contrast ratios, focus states, and loading behavior
3. **Content Review** — Use `interactive-portfolio` principles to verify hero impact, CTA placement, and conversion flow
4. **Pricing Research** — Complete the pricing research directive and update `data/pricing.json`
5. **Pre-deploy Script** — Run `bash tools/deploy.sh` to validate files and JSON data

---

## Deployment

1. Push code to GitHub repository
2. Connect the repo to Vercel
3. Vercel auto-deploys on push to `main` branch
4. Use `tools/deploy.sh` for pre-deploy checks

### Vercel Configuration
- Framework preset: Other (static site)
- Build command: none
- Output directory: `.` (root)
- Install command: none
