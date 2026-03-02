# Zigron Website - Page Creation Guide

This guide explains how to create new pages for the Zigron website following our established **Pattern A (Inline JSX)**.

---

## Table of Contents

1. [File Structure Overview](#file-structure-overview)
2. [The Inline JSX Pattern (Pattern A)](#the-inline-jsx-pattern-pattern-a)
3. [Page Types](#page-types)
4. [Step-by-Step: Creating a New Page](#step-by-step-creating-a-new-page)
5. [Component Reference](#component-reference)
6. [Naming Conventions](#naming-conventions)

---

## File Structure Overview

```
src/app/services/iot/
└── oem-product-development/  # Service detail (Pattern A)
    ├── page.tsx              # Main SSR page (layout + content)
    ├── components.tsx        # Client components (interactivity only)
    └── data.ts               # Content data (strings, arrays)
```

---

## The Inline JSX Pattern (Pattern A)

We prioritize **Server-Side Rendering (SSR)** and **simplicity**.

### 1. `data.ts` - Content Source

Contains all text, links, and configuration. No JSX.

```typescript
export const heroData = {
  title: "Service Name",
  description: "Description...",
  cta: { label: "Contact Us", href: "/contact" }
};
```

### 2. `components.tsx` - Interactivity Only

Only functionality that *requires* `use client` goes here.

- ✅ FAQ Accordions
- ✅ Contact Forms
- ✅ Interactive Tabs/Sliders
- ❌ Static Hero Sections (Put these in `page.tsx`)
- ❌ Static Grids (Put these in `page.tsx`)

```typescript
"use client";
// Only client-side interactive elements
export function FAQAccordion({ items }) { ... }
```

### 3. `page.tsx` - The Assembler

This file renders the page structure using standard UI components. **Most JSX lives here.**

```typescript
import { heroData } from "./data";
import { FAQAccordion } from "./components"; // Interactive island
import { Section, Container, Button } from "@/components/ui";

export default function Page() {
  return (
    <main>
      {/* Inline Hero */}
      <Section padding="hero" background="gradient">
        <Container>
          <h1>{heroData.title}</h1>
          <Button href={heroData.cta.href}>{heroData.cta.label}</Button>
        </Container>
      </Section>

      {/* Interactive Section */}
      <Section>
        <Container>
          <FAQAccordion items={heroData.faqs} />
        </Container>
      </Section>
    </main>
  );
}
```

---

## Page Types

### Hub Pages

Overview pages that link to detail pages.

- `src/app/services/page.tsx`
- `src/app/industries/page.tsx`

### Detail Pages

Deep-dive pages with comprehensive content.

- `src/app/services/iot/device-firmware/`
- `src/app/solutions/smart-energy-solar/`

---

## Step-by-Step: Creating a New Page

### Example: Creating `/solutions/predictive-maintenance`

#### Step 1: Create the folder

```bash
mkdir -p src/app/solutions/predictive-maintenance
```

#### Step 2: Create `data.ts`

Define your content first.

```typescript
// src/app/solutions/predictive-maintenance/data.ts
import { CheckCircle, Zap } from "lucide-react";

export const pageMetadata = {
  title: "Predictive Maintenance | Zigron",
  description: "AI-driven predictive maintenance...",
};

export const heroData = {
  badge: "Industrial AI",
  title: "Zero Downtime",
  description: "Predict failures before they happen.",
};
```

#### Step 3: Create `components.tsx`

Only if you need interactivity (e.g., FAQs).

```typescript
// src/app/solutions/predictive-maintenance/components.tsx
"use client";

import { Accordion } from "@/components/ui/Accordion";

export function FAQSection({ items }: { items: any[] }) {
  return <Accordion items={items} />;
}
```

#### Step 4: Create `page.tsx`

Build the layout using `data.ts` and standard UI components.

```typescript
// src/app/solutions/predictive-maintenance/page.tsx
import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Section, Container, Badge, Button } from "@/components/ui";
import { pageMetadata, heroData } from "./data";

export const metadata: Metadata = {
  title: pageMetadata.title,
  description: pageMetadata.description,
};

export default function PredictiveMaintenancePage() {
  return (
    <>
      <Header />
      <main>
        {/* Render Sections Inline */}
        <Section background="gradient" padding="hero">
          <Container>
            <Badge>{heroData.badge}</Badge>
            <h1>{heroData.title}</h1>
            <p>{heroData.description}</p>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
```

---

## Component Reference

### UI Components

```typescript
import {
  Button,      // variants: default, outline, ghost
  Badge,       // pill tags
  Container,   // central wrapper
  Section,     // structural block with padding/bg
  SectionHeader, // clear standard headers
} from "@/components/ui";
```

### Icons

Use `lucide-react` directly in `page.tsx`.

```typescript
import { Cpu, Activity } from "lucide-react";
```

---

## Naming Conventions

- **Folders:** kebab-case (`smart-energy`)
- **Components:** PascalCase (`HeroSection`)
- **Data:** camelCase (`heroData`)
