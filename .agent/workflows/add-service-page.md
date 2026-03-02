---
description: How to add a new Service Page (IoT, AI, etc.) following the strict project structure.
---

# Adding a New Service Page

This workflow describes the mandatory process for adding new deep-dive service pages.

> [!IMPORTANT]
> **Zigron is a 100% custom development shop.** All page content must reflect this positioning:
>
> - NO "pre-built", "ready to deploy", or "off-the-shelf" language.
> - Emphasize **"You own the IP"**, **"Tailored to your requirements"**, **"No vendor lock-in"**.

---

## 1. Verify Parent Slug & URL Standards

Before creating files, you MUST verify the URL slug against the exact standards defined in the project.

- **MANDATORY**: Read `docs/sitemap-url-standards.md` to ensure your proposed slug matches the agreed-upon standards.
- Check `src/app/services/iot/page.tsx` (or equivalent category page).
- Ensure the `href` matches your planned folder structure exactly.

## 2. Directory Structure

Create a new directory matching the slug.
**Example:** `src/app/services/iot/device-firmware/`

---

## 3. The "3-File Structure" (Mandatory)

Every service page MUST consist of exactly these three files:

### A. `data.ts` (Content & Metadata)

- **Strict Interfaces:** Must implement standard interfaces found in `src/app/services/iot/oem-product-development/data.ts`:
  - `Deliverable`
  - `UseCase`
  - `ProcessStep`
  - `ArchitectureLayer`
  - `TechnicalPillar`
  - `TechCategory`
  - `CaseStudy`
  - `FAQ`
- **Content:** All text, badges, and lists go here. No hardcoded text in `page.tsx`.

### B. `components.tsx` (Client Interactivity)

- **Exports:**
  - `FAQAccordion` (Client Component)
  - `ContactForm` (Client Component)
  - Any page-specific interactive elements (e.g., `TechStackTabs`).
- **Imports:** `Lucide` icons if needed for client rendering.

### C. `page.tsx` (Server Layout)

- **Strict Layout Pattern:** Must follow the 9-section flow:
    1. **Hero:** (Badge, H1, Subhead, Abstract Visual)
    2. **Deliverables:** (Grid of 4-6 items)
    3. **Use Cases:** (Grid of 3 cards with Problem/Solution/Outcome)
    4. **Process:** (Must use `<ServiceProcessTimeline>` from `@/app/services/components`)
    5. **Architecture:** (Must use `<SystemArchitecturePipeline>` from `@/app/services/components` with `layers` and `pillars`)
    6. **Tech Stack:** (Tools & Frameworks grid)
    7. **Success Stories:** (Case Study cards)
    8. **FAQ:** (Accordion)
    9. **CTA:** (NO embedded contact form. Use `<Button>` components linking to `/contact` and `/work`. See existing pages for the exact pattern.)
- **Server-Side Icon Resolution:** define `getIconServer` inside `page.tsx` to map strings from `data.ts` to Lucide components.

---

## 4. Responsive Rules

- **Process Steps:** Handled automatically by `<ServiceProcessTimeline>`. Provide `processSteps` data and verify `iconNode` mapping.
- **Architecture Pipeline:** Handled automatically by `<SystemArchitecturePipeline>`. Provide `architectureLayers` and `technicalPillars` data.
- **Tables:** If used, ensure `overflow-x-auto`.

---

## 5. React Key Prop

When using `<>` shorthand fragments with `.map()`, if you need a key, use `import { Fragment } from "react"` and `<Fragment key={...}>`.

---

## 6. Build Verification

// turbo
Always run `npx next build` to verify type safety and broken links before finishing.
