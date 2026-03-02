# Zigron Website Architecture

## Project Priorities

| Priority | Why |
|----------|-----|
| **1. SEO** | Discoverability drives traffic. Every page must be crawlable, indexable, and optimized. |
| **2. UX** | Fast, smooth experience converts visitors. No loading spinners, no layout shifts. |

All architectural decisions serve these two priorities.

---

## Rendering Strategy: SSR-First

**The entire website is Server-Side Rendered (SSR) by default.**

### Why SSR?

| Benefit | SEO Impact | UX Impact |
|---------|------------|-----------|
| Full HTML on first request | Crawlers see complete content | Instant content display |
| Meta tags in initial response | Proper indexing of titles/descriptions | Correct social previews |
| JSON-LD schema in source | Rich snippets in search results | - |
| No JavaScript required for content | Works for all crawlers | Works with JS disabled |
| Faster Time to First Byte (TTFB) | Core Web Vitals boost | Perceived speed |
| No Cumulative Layout Shift (CLS) | Core Web Vitals boost | No content jumping |

### When to Use Client Components (CSR)

Only use `"use client"` for:
- **Forms** - User input, validation, submission state
- **Interactive UI** - Accordions, carousels, modals, dropdowns
- **Animations** - Scroll-triggered, hover effects with state
- **Real-time features** - If any (none planned)

**Rule:** If it doesn't need `useState`, `useEffect`, or event handlers, keep it as a Server Component.

### Rendering Flow

```
User Request
     ↓
┌─────────────────────────────────────────┐
│  Server (Next.js)                       │
│  ├── page.tsx renders with data.ts      │
│  ├── Meta tags generated                │
│  ├── JSON-LD schema injected            │
│  └── Full HTML returned                 │
└─────────────────────────────────────────┘
     ↓
┌─────────────────────────────────────────┐
│  Browser                                │
│  ├── HTML displays immediately          │
│  ├── CSS applies (Tailwind)             │
│  └── JS hydrates client components only │
└─────────────────────────────────────────┘
```

---

## Core Philosophy

**Separate files per page** - Each page is self-contained with its own data, components, and layout.

- **No single registry file** - Content is colocated with each page
- **Flexibility** - Each page can have custom sections and layouts
- **Scalable** - Easy to work on individual pages without conflicts
- **Clear ownership** - Find everything for a page in one folder

---

## Directory Tree

```
/src
├── app/
│   ├── layout.tsx                    # Root layout (header, footer)
│   ├── page.tsx                      # Home page
│   ├── globals.css                   # Global styles
│   │
│   ├── (static)/                     # Static core pages
│   │   ├── about-us/
│   │   │   ├── page.tsx              # SSR
│   │   │   ├── components.tsx        # CSR
│   │   │   └── data.ts               # Content
│   │   │
│   │   ├── contact/
│   │   │   ├── page.tsx
│   │   │   ├── components.tsx
│   │   │   └── data.ts
│   │   │
│   │   └── careers/
│   │       ├── page.tsx
│   │       ├── components.tsx
│   │       └── data.ts
│   │
│   ├── services/
│   │   ├── page.tsx                  # Services Hub
│   │   ├── components.tsx
│   │   ├── data.ts
│   │   │
│   │   ├── iot/
│   │   │   ├── page.tsx              # IoT Hub
│   │   │   ├── components.tsx
│   │   │   ├── data.ts
│   │   │   │
│   │   │   ├── strategy-consulting/
│   │   │   │   ├── page.tsx          # SSR - Server Component
│   │   │   │   ├── components.tsx    # CSR - Client Components
│   │   │   │   └── data.ts           # Page content
│   │   │   │
│   │   │   ├── oem-product-development/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── components.tsx
│   │   │   │   └── data.ts
│   │   │   │
│   │   │   ├── custom-device-development/
│   │   │   ├── platform-development/
│   │   │   ├── application-development/
│   │   │   ├── connectivity-solutions/
│   │   │   ├── system-integration/
│   │   │   ├── data-analytics/
│   │   │   ├── edge-computing/
│   │   │   ├── security/
│   │   │   ├── testing-quality-assurance/
│   │   │   ├── deployment-installation/
│   │   │   └── managed-services/
│   │   │
│   │   ├── ai/
│   │   │   ├── page.tsx              # AI Hub
│   │   │   ├── components.tsx
│   │   │   ├── data.ts
│   │   │   │
│   │   │   ├── strategy-consulting/
│   │   │   ├── data-engineering/
│   │   │   ├── data-labeling-annotation/
│   │   │   ├── machine-learning/
│   │   │   ├── deep-learning/
│   │   │   ├── computer-vision/
│   │   │   ├── natural-language-processing/
│   │   │   ├── generative-ai/
│   │   │   ├── predictive-analytics/
│   │   │   ├── mlops-deployment/
│   │   │   ├── integration-services/
│   │   │   └── model-optimization/
│   │   │
│   │   └── engineering/
│   │       ├── page.tsx              # Engineering Hub
│   │       ├── components.tsx
│   │       ├── data.ts
│   │       │
│   │       ├── engineering-consulting/
│   │       ├── cad-design-drafting/
│   │       ├── electrical-engineering/
│   │       ├── civil-engineering/
│   │       ├── structural-engineering/
│   │       └── geotechnical-engineering/
│   │
│   ├── solutions/
│   │   ├── page.tsx                  # Solutions Hub
│   │   ├── components.tsx
│   │   ├── data.ts
│   │   │
│   │   ├── smart-energy-solar/
│   │   │   ├── page.tsx
│   │   │   ├── components.tsx
│   │   │   └── data.ts
│   │   │
│   │   ├── predictive-maintenance/
│   │   ├── fleet-logistics/
│   │   ├── smart-home-automation/
│   │   └── medical-iot-platform/
│   │
│   ├── industries/
│   │   ├── page.tsx                  # Industries Hub
│   │   ├── components.tsx
│   │   ├── data.ts
│   │   │
│   │   ├── manufacturing/
│   │   │   ├── page.tsx
│   │   │   ├── components.tsx
│   │   │   └── data.ts
│   │   │
│   │   ├── energy/
│   │   ├── healthcare/
│   │   ├── smart-home/
│   │   └── transportation/
│   │
│   └── work/
│       ├── page.tsx                  # Work Hub
│       ├── components.tsx
│       ├── data.ts
│       │
│       ├── abode-smart-home-security/
│       │   ├── page.tsx
│       │   ├── components.tsx
│       │   └── data.ts
│       │
│       ├── terrasmart-solar-oem/
│       └── terratrak-ai-solar-tracking/
│
├── components/
│   ├── ui/                           # Shadcn primitives
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── form.tsx
│   │   └── ...
│   │
│   ├── sections/                     # Reusable page blocks
│   │   ├── hero-split.tsx            # H1 + subtitle + CTA + image
│   │   ├── hero-centered.tsx         # Centered hero variant
│   │   ├── feature-grid.tsx          # 3-column benefit cards
│   │   ├── tech-stack.tsx            # Logo ticker (infinite scroll)
│   │   ├── trust-bar.tsx             # "Trusted by" logo strip
│   │   ├── cta-box.tsx               # Bottom conversion block
│   │   ├── process-steps.tsx         # Numbered step visualization
│   │   ├── faq-accordion.tsx         # Expandable Q&A
│   │   ├── case-study-card.tsx       # Work preview card
│   │   ├── service-card.tsx          # Service preview card
│   │   └── breadcrumbs.tsx           # Navigation breadcrumbs
│   │
│   └── layout/                       # Site-wide layout
│       ├── header.tsx                # Navigation
│       ├── footer.tsx                # Footer with links
│       ├── mobile-nav.tsx            # Mobile menu
│       └── container.tsx             # Max-width wrapper
│
├── lib/
│   ├── seo/
│   │   ├── metadata.ts               # constructMetadata() helper
│   │   └── json-ld.ts                # Schema.org generators
│   │
│   ├── schemas/
│   │   └── contact.ts                # Zod validation for forms
│   │
│   └── utils.ts                      # cn(), formatters, helpers
│
├── types/
│   ├── service.ts                    # Service page interfaces
│   ├── solution.ts                   # Solution page interfaces
│   ├── industry.ts                   # Industry page interfaces
│   ├── case-study.ts                 # Case study interfaces
│   └── common.ts                     # Shared types (CTA, Feature, etc.)
│
└── public/
    ├── images/
    │   ├── services/
    │   │   ├── iot/
    │   │   ├── ai/
    │   │   └── engineering/
    │   ├── solutions/
    │   ├── industries/
    │   ├── work/
    │   └── logos/
    └── fonts/
```

---

## Per-Page File Structure

Each page folder contains 3 files:

### `page.tsx` (SSR - Server Component)
- Fetches/imports data
- Renders layout with section components
- Generates metadata for SEO
- Handles 404 if needed

### `components.tsx` (CSR - Client Components)
- Interactive elements (`"use client"`)
- Forms, accordions, carousels
- Animations and state

### `data.ts` (Content)
- Page title, description
- Section content
- Features, benefits, FAQs
- Related links

---

## Example: Service Page

### `/services/iot/strategy-consulting/data.ts`
```typescript
import { ServicePageData } from '@/types/service';

export const data: ServicePageData = {
  title: "IoT Strategy & Consulting",
  description: "Define your IoT roadmap with expert guidance.",

  hero: {
    headline: "IoT Strategy & Consulting",
    subheadline: "We help you define the roadmap for connected products.",
    cta: { label: "Get Started", href: "/contact" }
  },

  features: [
    { title: "Market Analysis", description: "..." },
    { title: "Tech Assessment", description: "..." },
    { title: "ROI Modeling", description: "..." }
  ],

  process: [
    { step: 1, title: "Discovery", description: "..." },
    { step: 2, title: "Analysis", description: "..." },
    // ...
  ],

  faqs: [
    { question: "...", answer: "..." }
  ],

  relatedServices: ["oem-product-development", "platform-development"],
  relatedCaseStudy: "abode-smart-home-security"
};
```

### `/services/iot/strategy-consulting/page.tsx`
```typescript
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { HeroSplit } from '@/components/sections/hero-split';
import { FeatureGrid } from '@/components/sections/feature-grid';
import { ProcessSteps } from '@/components/sections/process-steps';
import { FaqAccordion } from '@/components/sections/faq-accordion';
import { CtaBox } from '@/components/sections/cta-box';
import { data } from './data';

export const metadata: Metadata = constructMetadata({
  title: data.title,
  description: data.description,
  canonical: '/services/iot/strategy-consulting'
});

export default function StrategyConsultingPage() {
  return (
    <main>
      <HeroSplit {...data.hero} />
      <FeatureGrid items={data.features} />
      <ProcessSteps steps={data.process} />
      <FaqAccordion items={data.faqs} />
      <CtaBox />
    </main>
  );
}
```

### `/services/iot/strategy-consulting/components.tsx`
```typescript
"use client";

import { useState } from 'react';

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  // Interactive form logic
}

export function FeatureCarousel() {
  // Client-side carousel with state
}
```

---

## Shared Components (`/components/sections/`)

Reusable blocks used across pages:

| Component | Description | Used In |
|-----------|-------------|---------|
| `hero-split.tsx` | H1 + subtitle + CTA + image | All pages |
| `hero-centered.tsx` | Centered hero variant | Hubs |
| `feature-grid.tsx` | 3-column benefit cards | Services, Solutions |
| `process-steps.tsx` | Numbered steps | Services |
| `tech-stack.tsx` | Infinite scroll logos | Home, Hubs |
| `trust-bar.tsx` | Static logo strip | Home, About |
| `cta-box.tsx` | Bottom conversion block | All pages |
| `faq-accordion.tsx` | Expandable Q&A | All detail pages |
| `case-study-card.tsx` | Work preview | Hubs, Related |
| `breadcrumbs.tsx` | Navigation path | All except Home |

---

## SEO Automation

### Metadata Helper (`/lib/seo/metadata.ts`)
```typescript
export function constructMetadata({
  title,
  description,
  canonical,
  image
}: MetadataParams): Metadata {
  return {
    title: `${title} | Zigron`,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [image || '/images/og-default.jpg']
    }
  };
}
```

### JSON-LD (`/lib/seo/json-ld.ts`)
- `generateServiceSchema()`
- `generateOrganizationSchema()`
- `generateBreadcrumbSchema()`

---

## File Count Summary

| Directory | Files per page | Total pages | Total files |
|-----------|---------------|-------------|-------------|
| Core pages | 3 | 8 | 24 |
| Service pages | 3 | 34 | 102 |
| Solution pages | 3 | 5 | 15 |
| Industry pages | 3 | 5 | 15 |
| Case studies | 3 | 3 | 9 |
| **Total** | | **55** | **165** |

Plus shared components, lib, types (~30 files).

---

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Validation**: Zod
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)
