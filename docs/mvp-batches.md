# MVP Batch Implementation Plan

This document outlines the phased implementation approach for the Zigron website. Each batch is designed to be small, focused, and deliverable independently.

---

## Batch Overview

| Batch | Focus | Pages/Components | Dependencies |
|-------|-------|------------------|--------------|
| 1 | Foundation | Project setup, Layout shell, Tailwind config | None |
| 2 | Home Page | Homepage (all sections) | Batch 1 |
| 3 | Services Hub | Services hub + IoT hub page | Batch 1, 2 |
| 4 | Service Details | 2-3 service detail pages | Batch 3 |
| 5 | Solutions | Solutions hub + 2 solution detail pages | Batch 1, 2 |
| 6 | Industries | Industries hub + 2 industry detail pages | Batch 1, 2 |
| 7 | Work/Case Studies | Work hub + 2 case study pages | Batch 1, 2 |
| 8 | Company Pages | About, Careers, Contact | Batch 1, 2 |
| 9 | Remaining Pages | All remaining service/solution/industry pages | Batch 3-6 |

---

## Batch 1: Foundation

**Goal:** Set up project structure, design system, and layout components.

### Tasks

1. **Initialize Next.js Project**
   - Next.js 14+ with App Router
   - TypeScript configuration
   - Tailwind CSS setup with custom config

2. **Create Tailwind Config**
   - Color tokens from design-system.md
   - Typography (Poppins font)
   - Border radius tokens
   - Dark mode configuration

3. **Build Layout Components**
   - `RootLayout` (html/body with font, dark mode)
   - `Header` (announcement bar + nav)
   - `Footer` (multi-column with links)
   - `PageContainer` (max-w-7xl wrapper)

4. **Create Atomic Components**
   - `Button` (primary, secondary, ghost variants)
   - `Badge` (tag/label component)
   - `Card` (base card wrapper)
   - `SectionHeader` (label + h2 + description)

### Deliverables
- [ ] Next.js project scaffolded
- [ ] Tailwind config with design tokens
- [ ] Working header/footer layout
- [ ] Atomic component library started

---

## Batch 2: Home Page

**Goal:** Build the complete homepage with all sections.

### Sections to Build

1. **HeroHome** - Main hero with 2 CTAs, trust badges
2. **TrustStrip** - Client logos + metrics
3. **ChooseYourPath** - Navigation tiles (Solutions/Industries/Services)
4. **SolutionsSpotlight** - 5 solution preview cards
5. **ThreePillars** - IoT/AI/Engineering capability cards
6. **FeaturedWork** - 3 case study preview cards
7. **HowWeWork** - 5-step process visualization
8. **SecurityQuality** - Compact reassurance section
9. **CTABand** - Final CTA with form or buttons

### Data Requirements
- Company tagline and hero content
- Client logos (placeholder images OK)
- Key metrics (devices, uptime, etc.)
- Solution summaries (5)
- Case study summaries (3)
- Process steps content

### Deliverables
- [ ] `/` route with all sections
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Dark mode support
- [ ] All content from data.ts file

---

## Batch 3: Services Hub

**Goal:** Build services hub and IoT vertical hub.

### Pages

1. **Services Hub** (`/services`)
   - Hero with "Services" positioning
   - 3 vertical cards (IoT, AI, Engineering)
   - Engagement models section
   - Featured case studies
   - CTA section

2. **IoT Services Hub** (`/services/iot`)
   - Hero with IoT positioning
   - Trust strip with IoT metrics
   - Service selector grid (filterable)
   - IoT lifecycle visualization
   - Solutions powered by IoT
   - Case studies
   - Architecture/tech stack
   - FAQ section
   - CTA

### Components to Build
- `ServiceCard` (for hub grids)
- `VerticalCard` (large cards for 3 pillars)
- `FilterTabs` (category filter buttons)
- `LifecycleSteps` (horizontal timeline)
- `TechStackGrid` (technology logos/names)

### Deliverables
- [ ] `/services` page complete
- [ ] `/services/iot` page complete
- [ ] Shared service components

---

## Batch 4: Service Details

**Goal:** Build 2-3 service detail pages to establish the template.

### Pages (Pick 2-3)

1. IoT Strategy & Consulting (`/services/iot/strategy-consulting`)
2. Firmware Development (`/services/iot/firmware-development`)
3. Cloud Platform Development (`/services/iot/cloud-platforms`)

### Sections per Page
- Hero with breadcrumbs + proof bullets
- Quick summary box
- Deliverables list
- Use cases
- How we deliver (5-step process)
- Technical approach
- Tools & stack
- Related case studies
- Related links
- FAQ
- CTA footer

### Components to Build
- `Breadcrumbs`
- `QuickSummaryBox`
- `DeliverablesList`
- `UseCaseCard`
- `ProcessSteps` (reuse from batch 2)
- `RelatedLinks`

### Deliverables
- [ ] Service detail page template working
- [ ] 2-3 service pages populated with content

---

## Batch 5: Solutions

**Goal:** Build solutions hub and 2 solution detail pages.

### Pages

1. **Solutions Hub** (`/solutions`)
   - Hero with outcome-led headline
   - Solution grid (5 cards)
   - Architecture framework diagram
   - Case studies preview
   - Integration/deployment info
   - FAQ
   - CTA

2. **Solution Detail Pages** (pick 2)
   - Smart Energy & Solar (`/solutions/smart-energy`)
   - Predictive Maintenance (`/solutions/predictive-maintenance`)

### Solution Detail Sections
- Hero with outcome headline
- The Problem section
- Solution Overview + architecture
- Outcomes/ROI tiles
- Modules included
- Integrations & compatibility
- Implementation phases
- Case studies
- Built with (services links)
- Who it's for (industries links)
- FAQ
- CTA

### Components to Build
- `SolutionCard` (for hub grid)
- `ProblemSection`
- `OutcomeTile`
- `ModuleCard`
- `IntegrationBadges`
- `ImplementationPhases`

### Deliverables
- [ ] `/solutions` page complete
- [ ] 2 solution detail pages complete

---

## Batch 6: Industries

**Goal:** Build industries hub and 2 industry detail pages.

### Pages

1. **Industries Hub** (`/industries`)
   - Hero with trust headline
   - Industry grid (5 cards)
   - Common outcomes section
   - Case studies preview
   - Solutions cross-links
   - FAQ
   - CTA

2. **Industry Detail Pages** (pick 2)
   - Smart Energy (`/industries/smart-energy`)
   - Manufacturing (`/industries/manufacturing`)

### Industry Detail Sections
- Hero with credibility headline
- Industry challenges
- What we build
- Recommended solutions
- Key services used
- Security/compliance (if applicable)
- Case studies
- Implementation patterns
- FAQ
- CTA

### Components to Build
- `IndustryCard` (for hub grid)
- `ChallengesList`
- `RecommendedSolutions`
- `ServicesUsed`
- `ComplianceBadges`

### Deliverables
- [ ] `/industries` page complete
- [ ] 2 industry detail pages complete

---

## Batch 7: Work / Case Studies

**Goal:** Build work hub and 2 case study pages.

### Pages

1. **Work Hub** (`/work`)
   - Hero with proof headline
   - Filterable gallery
   - Featured results strip
   - Case study cards (6)
   - Testimonials (optional)
   - CTA

2. **Case Study Detail Pages** (pick 2)
   - TerraSmart Solar (`/work/terrasmart-solar`)
   - Abode Smart Home (`/work/abode-smart-home`)

### Case Study Detail Sections
- Hero with project name + tags
- Overview (challenge/solution/results)
- Context & constraints
- Solution delivered + architecture
- Implementation detail
- Results with metrics
- What's next
- Related links
- CTA

### Components to Build
- `CaseStudyCard` (for gallery)
- `CaseStudyFilter`
- `ResultsMetrics`
- `ProjectOverview`
- `ImplementationTimeline`

### Deliverables
- [ ] `/work` page complete
- [ ] 2 case study pages complete

---

## Batch 8: Company Pages

**Goal:** Build About, Careers, and Contact pages.

### Pages

1. **About Us** (`/about-us`)
2. **Careers** (`/careers`)
3. **Contact** (`/contact`)

### Deliverables
- [ ] All 3 company pages complete
- [ ] Contact form functional (or ready for integration)

---

## Batch 9: Remaining Pages

**Goal:** Complete all remaining pages using established templates.

### Remaining Services (~30 pages)
- AI Services Hub + 10 AI service details
- Engineering Services Hub + 10 Engineering service details
- Remaining IoT service details

### Remaining Solutions (~3 pages)
- Fleet & Logistics
- Smart Home
- Medical IoT

### Remaining Industries (~3 pages)
- Oil & Gas
- Consumer Electronics
- Healthcare

### Remaining Case Studies (~4+ pages)
- Additional case studies as content becomes available

---

## Implementation Notes

### Per-Page File Structure

```
/app/services/iot/strategy-consulting/
├── page.tsx          # Server Component (SSR)
├── components.tsx    # Client Components (interactive)
└── data.ts           # Page content
```

### Content Data Pattern

```typescript
// data.ts
export const pageData = {
  meta: {
    title: "IoT Strategy & Consulting | Zigron",
    description: "...",
  },
  hero: {
    badge: "IoT Service",
    title: "IoT Strategy & Consulting",
    description: "...",
    ctas: [...],
    proofPoints: [...],
  },
  sections: {
    deliverables: [...],
    useCases: [...],
    process: [...],
    faq: [...],
  },
};
```

### SSR vs CSR Rules

**Server Components (SSR):**
- Page layout and structure
- Static content rendering
- SEO-critical content
- Data fetching

**Client Components (CSR):**
- Dark mode toggle
- Mobile menu
- Filter interactions
- FAQ accordions
- Form inputs
- Carousels/animations

---

## Getting Started

When ready to begin implementation:

1. User provides content data for the batch
2. Build components and pages
3. Review in browser (desktop + mobile + dark mode)
4. User approves or requests changes
5. Commit and move to next batch
