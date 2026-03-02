---
description: How to add a new Solution Page following the strict project structure.
---

# Adding a New Solution Page

This workflow describes the mandatory process for adding new deep-dive solution pages.

> [!IMPORTANT]
> **Zigron is a 100% custom development shop.** All page content must reflect this positioning:
>
> - NO "pre-built", "ready to deploy", or "off-the-shelf" language.
> - Emphasize **"You own the IP"**, **"Tailored to your requirements"**, **"No vendor lock-in"**.

---

## 1. Verify Parent Slug & URL Standards

Before creating files, you MUST verify the URL slug against the exact standards defined in the project.

- **MANDATORY**: Read `docs/sitemap-url-standards.md` to ensure your proposed slug matches the agreed-upon standards.
- Check `src/app/solutions/page.tsx` (or equivalent category page).
- Ensure the `href` matches your planned folder structure exactly.

## 2. Directory Structure

Create a new directory matching the slug.
**Example:** `src/app/solutions/smart-energy-solar/`

---

## 3. The "3-File Structure" (Mandatory)

Every solution page MUST consist of exactly these three files:

### A. `data.ts` (Content & Metadata)

- **Strict Interfaces:** Must implement standard interfaces found in existing solution pages (e.g., `src/app/solutions/smart-energy-solar/data.ts`):
  - `HeroData`
  - `Module` (for Platform Capabilities)
  - `UseCase`
  - `DeliveryPhase`
  - `ArchitectureLayer` and `SecurityControl`
  - `InputRequired`
  - `KPI`
  - `TechStackModule`
  - `CaseStudy`
  - `FAQ`
- **Content:** All text, badges, and lists go here. No hardcoded text in `page.tsx`.

### B. `components.tsx` (Client Interactivity)

- **Exports:**
  - `FAQAccordion` (Client Component)
  - `ContactForm` (Client Component)
  - Any page-specific interactive elements or custom visual graphics.
- **Imports:** `Lucide` icons if needed for client rendering.

### C. `page.tsx` (Server Layout)

- **Strict Layout Pattern:** Must follow this generalized flow (based on existing solution pages):
    1. **Hero:** (Badge, H1, Subhead, Custom Visual / Dashboard)
    2. **Platform Capabilities/Modules:** (Grid of core features)
    3. **Use Cases:** (Cards with Challenge, Solution, Outcome, Metrics)
    4. **Delivery Process:** (Must use `<ServiceProcessTimeline>` from `@/app/services/components`. Map your `deliveryPhases` data to the `steps` prop with `{ id, title, desc, iconNode }`.)
    5. **Architecture:** (Must use `<SystemArchitecturePipeline>` from `@/app/services/components`. Map your `architectureLayers` to `layers` prop with `{ title, subtitle, iconNode }` and `securityControls` to `pillars` prop with `{ title, description, iconNode }`.)
    6. **Inputs Required:** (What is needed to start)
    7. **Success Metrics (KPIs):** (Grid of metrics)
    8. **Tech Stack:** (Tools & Frameworks grid)
    9. **Proof Points / Success Stories:** (Case Study cards)
    10. **FAQ:** (Accordion)
    11. **CTA:** (NO embedded contact form. Use `<Button>` components linking to `/contact` and `/work`. See existing pages for the exact pattern.)
- **Server-Side Icon Resolution:** define `getIconServer` inside `page.tsx` to map strings from `data.ts` to Lucide components.

---

## 4. Responsive Rules

- **Process Steps:** Handled automatically by `<ServiceProcessTimeline>`. Map your `deliveryPhases` to the `steps` prop and verify `iconNode` mapping. The component adapts grid columns based on step count (4 vs 5).
- **Architecture Pipeline:** Handled automatically by `<SystemArchitecturePipeline>`. Provide `architectureLayers` → `layers` and `securityControls` → `pillars`.
- **Grids:** Ensure proper use of `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` (and so on) for other responsive card layouts.
- **Overflow:** Ensure side-scrolling for any tables or large complex graphics on mobile.

---

## 5. React Key Prop

When using `<>` shorthand fragments with `.map()`, if you need a key, use `import { Fragment } from "react"` and `<Fragment key={...}>`.

---

## 6. Build Verification

// turbo
Always run `npx next build` to verify type safety and broken links before finishing.
