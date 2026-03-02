---
description: How to add a new Industry Page following the strict project structure.
---

# Adding a New Industry Page

This workflow describes the mandatory process for adding new deep-dive industry pages.

> [!IMPORTANT]
> **Zigron is a 100% custom development shop.** All page content must reflect this positioning:
>
> - NO "pre-built", "ready to deploy", or "off-the-shelf" language.
> - Emphasize **"You own the IP"**, **"Tailored to your requirements"**, **"No vendor lock-in"**.

---

## 1. Verify Parent Slug & URL Standards

Before creating files, you MUST verify the URL slug against the exact standards defined in the project.

- **MANDATORY**: Read `docs/sitemap-url-standards.md` to ensure your proposed slug matches the agreed-upon standards.
- Check `src/app/industries/page.tsx` (or equivalent category page).
- Ensure the `href` matches your planned folder structure exactly.

## 2. Directory Structure

Create a new directory matching the slug.
**Example:** `src/app/industries/energy/`

---

## 3. The "3-File Structure" (Mandatory)

Every industry page MUST consist of exactly these three files:

### A. `data.ts` (Content & Metadata)

- **Strict Interfaces:** Must implement standard interfaces found in existing industry pages (e.g., `src/app/industries/energy/data.ts`):
  - `HeroData`
  - `Challenge`
  - `Solution` (What We Build)
  - `RecommendedSolution`
  - `ServiceCategory`
  - `SecurityFeature`
  - `CaseStudy`
  - `ImplementationPattern`
  - `FAQ`
- **Content:** All text, badges, and lists go here. No hardcoded text in `page.tsx`.

### B. `components.tsx` (Client Interactivity)

- **Exports:**
  - `FAQAccordion` (Client Component)
  - `ContactForm` (Client Component)
  - Any page-specific interactive elements or custom visual graphics.
- **Imports:** `Lucide` icons if needed for client rendering.

### C. `page.tsx` (Server Layout)

- **Strict Layout Pattern:** Must follow this generalized flow (based on existing industry pages):
    1. **Hero:** (Badge, H1, Subhead, Custom Visual)
    2. **Critical Challenges:** (List of industry-specific hurdles)
    3. **What We Build:** (Grid of relevant custom solutions)
    4. **Recommended Solutions:** (Specific solution cards with Best For/Outcomes)
    5. **Engineering Services:** (Categorized lists of technical services)
    6. **Security & Compliance:** (If architecture/security data exists, use `<SystemArchitecturePipeline>` from `@/app/services/components` with `layers` and `pillars` props. Otherwise use a standard grid.)
    7. **Proven Success:** (Case Studies specific to the industry)
    8. **Implementation Patterns:** (Must use `<ServiceProcessTimeline>` from `@/app/services/components`. Map your `implementationPatterns` data to the `steps` prop with `{ id, title, desc, iconNode }`.)
    9. **FAQ:** (Accordion)
    10. **CTA:** (NO embedded contact form. Use `<Button>` components linking to `/contact` and `/work`. See existing pages for the exact pattern.)
- **Server-Side Icon Resolution:** define `getIconServer` inside `page.tsx` to map strings from `data.ts` to Lucide components.

---

## 4. Responsive Rules

- **Implementation Steps:** Handled automatically by `<ServiceProcessTimeline>`. Map your phase/step data to the `steps` prop and verify `iconNode` mapping. The component adapts grid columns based on step count (4 vs 5).
- **Architecture Pipeline:** If used, handled automatically by `<SystemArchitecturePipeline>`. Provide architecture data → `layers` and security features → `pillars`.
- **Grids:** Ensure proper use of `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` (and so on) for other responsive card layouts.
- **Visuals:** Ensure hero visuals maintain aspect ratio and resize correctly on mobile devices.

---

## 5. React Key Prop

When using `<>` shorthand fragments with `.map()`, if you need a key, use `import { Fragment } from "react"` and `<Fragment key={...}>`.

---

## 6. Build Verification

// turbo
Always run `npx next build` to verify type safety and broken links before finishing.
