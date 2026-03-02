# Zigron Homepage Build Specification
### Complete Visual, Copy & Development Instructions

> **Brand:** Zigron — Building and Protecting IoT Ventures
> **Stack:** React 19 · Tailwind CSS · GSAP 3 + ScrollTrigger
> **Scope:** Full homepage — 8 Sections + Navbar + Footer

---

## 0. Brand System

### 0.1 Color Palette

| Role | Hex | Name | Usage |
|---|---|---|---|
| Primary Brand | `#C0272D` | Zigron Red | CTAs, badges, accents, logo bg, active states |
| Primary Dark | `#1A1A1A` | Zigron Black | Hero bg, footer bg, dark sections, headings |
| White | `#FFFFFF` | White | Cards, light section bg, text on dark |
| Light Gray | `#F2F2F2` | Gray 100 | Page bg, alternating rows, input fill |
| Mid Gray | `#CCCCCC` | Gray 300 | Borders, dividers, disabled states |
| Dark Gray | `#666666` | Gray 600 | Secondary text, captions, labels |
| Red Tint | `#F5C6C7` | Red 100 | Hover highlights on light backgrounds |

> ⚠️ **Never** use off-brand colors, purple gradients, or generic blue tones. Zigron's palette is strictly **Red / Black / White / Gray**.

---

### 0.2 Typography

**Brand font: Poppins** — Load via Google Fonts.

```html
<!-- Add to <head> in index.html -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

| Element | Font | Weight | Desktop Size | Mobile Size | Letter-Spacing |
|---|---|---|---|---|---|
| Hero H1 | Poppins | 800 ExtraBold | 72–80px | 40px | -0.03em |
| Section H2 | Poppins | 700 Bold | 48px | 32px | -0.02em |
| Card H3 | Poppins | 600 SemiBold | 28px | 22px | -0.01em |
| Subheading H4 | Poppins | 600 SemiBold | 20px | 18px | 0em |
| Body Copy | Poppins | 400 Regular | 16px / 1.7lh | 15px | 0em |
| Button Text | Poppins | 600 SemiBold | 16px | 15px | 0.02em |
| Eyebrow Label | Poppins | 500 Medium | 11px uppercase | 11px | 0.12em |
| Monospace / KPI | IBM Plex Mono | 400 / 500 | 14–16px | 13px | 0em |

---

### 0.3 Logo Usage

| Variant | Where Used |
|---|---|
| Red logo on White bg | Navbar (light mode), footer column, documents |
| White logo on Red bg | Dark hero sections, red CTA boxes |
| White logo on Black bg | Dark footer, dark overlays |
| Black logo on White bg | Print, light documents |

> ⚠️ Never stretch, rotate, recolor, or add drop shadows to the logo. Always maintain a clear zone equal to the logo height on all sides.

---

### 0.4 Grid & Spacing

- Max content width: **1320px**, centered with auto horizontal margins
- Section padding (desktop): **96px** top & bottom | (Mobile): **64px**
- Card grid gap: **24px** | Column gutter: **24px**
- Border radius: `4px` inputs/chips · `12px` cards · `24px` large panels · `9999px` pill buttons
- Card shadow: `box-shadow: 0 2px 16px rgba(0,0,0,0.08)`
- Card hover shadow: `0 8px 32px rgba(192,39,45,0.15)`

---

### 0.5 Brand Values — Iconography Reference

Use these SVG shapes as decorative / directional elements across the site:

- **Red filled right-pointing chevron** — forward motion, IoT data flow direction
- **Red outlined circle** — zero downtime, reliability loop
- **Diagonal slash/arrow** — transformation, the "upgrade" moment
- **Stacked triangle mark** — logo symbol; use sparingly as a watermark or section accent

> 💡 Use as SVG decorative elements in section backgrounds or card corners — never as primary navigation icons.

---

## 1. Technical Stack & Global Requirements

### 1.1 Tech Stack

| Layer | Technology | Version | Notes |
|---|---|---|---|
| Framework | React | 19 | Functional components + hooks only |
| Styling | Tailwind CSS | 3.4.17 | JIT mode, extend config for brand colors |
| Animation | GSAP | 3 latest | ScrollTrigger plugin registered globally |
| Icons | Lucide React | 0.263.1 | UI icons only — never for brand marks |
| Fonts | Google Fonts | — | Poppins + IBM Plex Mono via `<link>` in index.html |
| Build | Vite | Latest | `npm create vite@latest`, React template |
| Images | Unsplash | — | Real URLs only — no placeholders |

---

### 1.2 Tailwind Config

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'zigron-red':   '#C0272D',
        'zigron-black': '#1A1A1A',
        'zigron-gray':  '#666666',
        'zigron-light': '#F2F2F2',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        mono:    ['IBM Plex Mono', 'monospace'],
      },
    },
  },
};
```

---

### 1.3 Global CSS (index.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Noise overlay — eliminates flat digital look */
.noise-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.035;
}

html { scroll-behavior: smooth; }
body { font-family: 'Poppins', sans-serif; background: #F2F2F2; }
```

---

### 1.4 GSAP Global Setup

```js
// main.jsx or App.jsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Pattern for every animated component:
useEffect(() => {
  const ctx = gsap.context(() => {
    // all GSAP animations here
  }, containerRef);
  return () => ctx.revert(); // always cleanup
}, []);
```

---

## NAV — Navbar (Fixed Sticky)

### Layout & Dimensions

| Property | Value |
|---|---|
| Position | `fixed`, top: 0, left: 0, right: 0, z-index: 9998 |
| Height | 72px desktop / 60px mobile |
| Max content width | 1320px |
| Initial state (hero top) | bg: transparent, text: white |
| Scrolled state | `bg: #1A1A1A` 90% opacity + `backdrop-blur-md`, text: white |
| Transition | `all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)` |
| Bottom border (scrolled) | `1px solid rgba(192,39,45,0.4)` |

### Contents (Left → Right)

- **Logo:** Zigron SVG mark (white) + `ZIGRON` wordmark — Poppins 700, white, 20px
- **Nav links:** Services · Solutions · Work · Company · Contact
  - Style: Poppins 500, 15px, white, opacity 0.8
  - Hover: opacity 1.0 + color `#C0272D`, 150ms
- **CTA Button:** `Talk to an engineer`
  - Style: bg `#C0272D`, white text, Poppins 600, 14px, `border-radius: 9999px`, px-5 py-2
  - Hover: `scale(1.04)` + `box-shadow: 0 4px 16px rgba(192,39,45,0.4)`, 200ms

### Mobile Navbar

- Hamburger icon (Lucide `Menu`) — white, 24px
- Opens full-screen overlay: bg `#1A1A1A`, links stacked vertically, 32px bold
- CTA button at bottom of overlay
- Close: tap hamburger again or tap outside

### Scroll Detection

```js
const [scrolled, setScrolled] = useState(false);
useEffect(() => {
  const hero = document.getElementById('hero');
  const obs = new IntersectionObserver(([e]) => setScrolled(!e.isIntersecting));
  obs.observe(hero);
  return () => obs.disconnect();
}, []);
```

---

## 01 — Hero: The Opening Shot

### Layout

| Property | Value |
|---|---|
| Anchor ID | `#hero` |
| Height | `100dvh` |
| Background | Full-bleed dark image + heavy gradient overlay |
| Image URL | `https://images.unsplash.com/photo-1518770660439-4636190af475?w=1800&auto=format&fit=crop&q=80` |
| Gradient overlay | `linear-gradient(to top, #1A1A1A 0%, rgba(26,26,26,0.85) 50%, rgba(26,26,26,0.4) 100%)` |
| Content position | Bottom-left: `flex column`, `justify-end`, padding 80px bottom / 80px left |
| Grid split | Left 55% copy · Right 45% animated diagram |

---

### Left Panel — Copy

**Eyebrow (above H1):**
```
OEM IoT · AI & Automation · Engineering Services
```
Style: IBM Plex Mono, 11px, uppercase, `#C0272D`, letter-spacing 0.12em

**H1:**
```
OEM IoT, AI &
Engineering.
```
Style: Poppins ExtraBold 800, 72px desktop / 40px mobile, white, -0.03em tracking

**Subhead:**
```
Enhanced with automation — not rip-and-replace.
Connect to legacy and modern systems, activate the data that's
already there, and make operations more reliable, efficient, and testable.
```
Style: Poppins Regular 400, 18px, `rgba(255,255,255,0.80)`, 1.7 line-height, max-width 520px

---

### CTAs

| Button | Copy | Style | Action |
|---|---|---|---|
| Primary | Talk to an engineer | bg `#C0272D`, white, Poppins 600, pill, px-8 py-3.5 | `→ #contact` |
| Secondary | Explore solutions → | border 1.5px white, white text, pill, px-8 py-3.5 · hover: bg white + text `#1A1A1A` | `→ #solutions` |

- Both buttons: hover `scale(1.03)`, 200ms `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- CTA row: `display: flex`, gap 16px, flex-wrap on mobile

**Trust strip (below CTAs):**
```
Legacy-friendly integration  ·  Secure-by-design delivery  ·  Field-ready deployment & support
```
Style: IBM Plex Mono, 12px, `rgba(255,255,255,0.55)`

---

### Right Panel — Architecture Diagram (Animated SVG)

Build as an animated SVG component showing the Zigron system architecture:

| Layer | Label | Style |
|---|---|---|
| Layer 1 — Input | SCADA / PLCs / Gateways / IoT Devices | Dark panel, red 3px left-border, Mono 12px |
| Layer 2 — Transport | Connectivity / Edge Computing | Mid panel, animated dashed connector lines |
| Layer 3 — Core | **Zigron AI + Automation Layer** | Glowing red-bordered panel, pulsing animation — most prominent |
| Layer 4 — Output | Dashboards / Alerts / Automations | Right panel, green status dots |

- Connector lines animate: red data particles travel left → right every 2.5s (CSS keyframes)
- AI Layer panel pulse: `box-shadow: 0 0 0 → 0 0 20px rgba(192,39,45,0.5)` every 3s
- **Mobile:** Hide right panel entirely. Hero content is full width.

---

### Hero Entrance Animations (GSAP)

```js
gsap.from('.hero-eyebrow', { y: 24, opacity: 0, duration: 0.6, ease: 'power3.out' });
gsap.from('.hero-h1 span',  { y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.2 });
gsap.from('.hero-subhead',  { y: 32, opacity: 0, duration: 0.7, ease: 'power3.out', delay: 0.5 });
gsap.from('.hero-ctas',     { y: 24, opacity: 0, duration: 0.6, ease: 'power3.out', delay: 0.7 });
gsap.from('.hero-trust',    { y: 16, opacity: 0, duration: 0.5, ease: 'power3.out', delay: 0.9 });
gsap.from('.hero-diagram',  { x: 40, opacity: 0, duration: 1.0, ease: 'power3.out', delay: 0.4 });
```

---

## 02 — Slider: When You Work With Us

### Section Layout

| Property | Value |
|---|---|
| Anchor ID | `#when-you-work-with-us` |
| Background | `#FFFFFF` |
| Eyebrow | `WHEN YOU WORK WITH US` — Poppins Mono 11px, `#C0272D`, uppercase, 0.12em tracking |
| Section H2 | Operations get smarter—without adding complexity. |
| Section subhead | We make dormant data work, reduce manual monitoring, and automate reliability and testing. |
| Slider height | 540px desktop / auto mobile |

### Slider Structure (Per Slide)

- **Left panel (55%):** bg `#F2F2F2`, padding 48px — contains copy
- **Right panel (45%):** bg `#1A1A1A`, padding 32px — contains visual card
- Both panels: `border-radius: 16px`. Overall slider: `border-radius: 24px`, `overflow: hidden`
- **Mobile:** Stack vertically — visual panel above, copy panel below

### Slider Controls

- 3 progress dots: 8px circles, `#CCCCCC` default → `#C0272D` active
- Arrow buttons: 48px circle, bg white, border 1px `#CCCCCC`, hover: bg `#C0272D` + white icon
- Autoplay: 7 seconds per slide. Pause on hover. Resume on mouse-leave.
- Touch/swipe: touchstart + touchend delta > 50px changes slide
- Transition: content fades + slides in from right, 400ms ease-in-out

---

### Slide 1 — "Your data doesn't sit around."

**Headline:** Your data doesn't sit around.
**Support line:** We turn dormant telemetry into signals, predictions, and automated actions.

**Bullets:**
- Stream and unify data from legacy + modern sources
- Detect anomalies and patterns in real time
- Trigger workflows: alerts, tickets, control actions

**Right Visual — "Dormant → Operational":**

Dark panel (`#1A1A1A`) with subtle dot-grid background pattern.

- Left mini-card: `Stored Data` — dimmed icon, gray label `IDLE`, pulsing gray dot
- Animated red dashed connector line → flowing into 3 output cards:
  - **Event Stream card:** 3–4 scrolling monospace lines (real-time log), green status dot
  - **Insights card:** `ANOMALY DETECTED` red badge + sparkline chart
  - **Automation card:** flow nodes: `If anomaly → Create ticket → Notify → Log`
- KPI chips at bottom (IBM Plex Mono 12px, white 10% bg): `Events processed · Anomalies flagged · Actions triggered`

---

### Slide 2 — "You don't manually check systems."

**Headline:** You don't manually check systems.
**Support line:** Monitoring becomes proactive—so teams focus on fixes, not hunting.

**Bullets:**
- Automated health checks + smart alerting
- Reduce noise with priority-based notifications
- Get root-cause hints, not just alarms

**Right Visual — "Health Intelligence Console":**

- `Before` element (top-left): chaotic alert panel, multiple red dots, `Noise: HIGH` label
- Arrow → transitions to `After` main panel:
  - **Health Score gauge:** circular SVG gauge, score `94`, green fill, animates on enter
  - **Top Issues list:** 3 items with priority badges (High / Med / Low)
  - **Probable Cause panel:** single IBM Plex Mono line — e.g. `Gateway timeout — Node 14B`
- KPI chips: `Noise reduced · MTTR improved · High-priority alerts only`

---

### Slide 3 — "Testing doesn't slow you down."

**Headline:** Testing doesn't slow you down.
**Support line:** Reliability improves because validation becomes repeatable and automated.

**Bullets:**
- Automated QA for data pipelines and integrations
- Regression checks before releases and OTA updates
- Faster releases with fewer production surprises

**Right Visual — "QA Pipeline":**

- `Before`: scattered sticky-note cards with labels `Manual test`, `Check again` — conveys chaos
- `After` main panel: pipeline track with 4 connected nodes:
  - `Simulate → Validate → Report → Deploy` (horizontal flow with connecting lines)
  - Active node: scale pulse + red glow
- Metrics: `Test Coverage: 94%` bar (animates on enter) · `98% PASSING` green chip · `ROLLBACK READY` badge
- KPI chips: `Regression caught · Release velocity · Zero surprises`

---

## 03 — Modernize Without Ripping & Replacing

### Section Layout

| Property | Value |
|---|---|
| Anchor ID | `#modernize-without-replacing` |
| Background | `#F2F2F2` |
| Section H2 | Modernize without ripping and replacing. |
| Subhead | We connect to what you already run, layer in AI + automation, and improve reliability, efficiency, and testing. |
| Main element | 3-column transformation graphic (full width) |

---

### 3-Column Transformation Graphic

This is the section's centerpiece. Build as a visual component, not a text list.

#### Column 1 — Your Current Environment

**Title:** Your current environment
**Caption:** Keep what works. Connect the rest.

Items (icon + label cards, dark bg `#1A1A1A`, white text, red 3px left-border):
- SCADA / PLCs / RTUs
- Existing IoT devices & gateways
- ERP / CMMS / CRM systems
- Data silos (databases, spreadsheets)
- On-prem + cloud mixed infrastructure

**Micro caption:** *"No forced rip-and-replace."* — red italic text

---

#### Column 2 — Zigron AI + Automation Layer *(CENTER — most prominent)*

**Title:** Zigron AI + Automation Layer
**Caption:** Make data usable. Make systems smarter.

Visual style: gradient bg (`#1A1A1A → #2A0A0A`), red glowing border, pulse animation every 3s (`box-shadow: 0 0 0 → 0 0 24px rgba(192,39,45,0.6)`).

4 component cards (stacked inside, red-accented):

| # | Card | Description |
|---|---|---|
| 1 | Connectors & Ingestion | Unify data streams, normalize formats |
| 2 | Intelligence (AI Models) | Detect anomalies, predict failures, optimize |
| 3 | Automation & Workflows | Alerts, tickets, actions, reporting |
| 4 | Quality & Observability | Testing pipelines, monitoring, audit trails |

> Animated connector lines flow **from Column 1 nodes into** these cards, and **out to Column 3 tiles**.

---

#### Column 3 — Operational Outcomes

**Title:** What improves fast
**Caption:** Reliability, efficiency, and scale.

Outcome tiles (white cards, green checkmark icons, green accent text):
- Higher reliability — fewer surprises, earlier detection
- Less manual monitoring — signal > noise
- Faster testing & QA — repeatable validation
- Better decision-making — dashboards + insights
- Smoother deployments — runbooks + monitoring

**Micro CTA:** `Explore outcomes →` `/solutions`

---

### Capability Chips Row (below graphic)

3 clickable pill chips, style: bg white, border 1.5px `#C0272D`, text `#C0272D`, Poppins 600, pill:

| Chip Label | Links To |
|---|---|
| Activate dormant data | `#solutions` |
| Automate reliability workflows | `/services` |
| Make testing repeatable | `/services` |

Hover: bg `#C0272D`, text white, 200ms transition.

---

### Mini-Proof Strip (below chips)

3 small cards linking to case studies:

| Card Text | Link |
|---|---|
| From legacy telemetry → automated alerts | `/work/terrasmart-solar-oem` |
| From noisy alarms → health scoring | `/work/abode-smart-home-security` |
| From manual QA → automated validation | `/work/terratrak-ai-solar-tracking` |

Style: white bg, `#CCCCCC` border, 12px radius, 16px padding, red `→` arrow at right. Hover: border `#C0272D`, `translateY(-2px)`, 200ms.

---

## 04 — Solutions Spotlight

### Section Layout

| Property | Value |
|---|---|
| Anchor ID | `#solutions` |
| Background | `#FFFFFF` |
| Section H2 | Solutions that turn legacy data into operational advantage. |
| Subhead | Pick an outcome. We connect to your systems and deliver AI + automation that works in the field. |
| Micro CTA (header right) | `View all solutions →` `/solutions` |
| Tile grid (desktop) | Asymmetric: Row 1: 2 tiles (60% / 40%) · Row 2: 3 tiles (equal thirds) |
| Tile grid (mobile) | Single column stack |

---

### All 5 Solution Tiles

| # | Title | One-Line Promise | Outcome Chips | Route |
|---|---|---|---|---|
| 1 | Smart Energy & Solar | Optimize generation and performance with automated monitoring and intelligence. | Performance optimization · Anomaly detection · O&M automation | `/solutions/smart-energy-solar` |
| 2 | Predictive Maintenance | Predict failures earlier using telemetry, patterns, and reliability workflows. | Downtime reduction · Asset health scoring · Work order automation | `/solutions/predictive-maintenance` |
| 3 | Fleet & Logistics | Turn location + sensor data into live visibility and smarter operations. | Real-time tracking · Route & utilization insights · Automated exceptions | `/solutions/fleet-logistics` |
| 4 | Smart Home Automation | Reliable device performance with secure connectivity, automation, and testing at scale. | Device reliability · Secure integrations · Automated QA & releases | `/solutions/smart-home-automation` |
| 5 | Medical IoT Platform | Build compliant, secure data flows and intelligence for connected care systems. | Secure data pipelines · Monitoring & alerts · Audit-ready operations | `/solutions/medical-iot-platform` |

---

### Tile Style Spec

- **Default:** white bg, border `1px solid #CCCCCC`, radius 16px, padding 28px
- **Top area:** 160px height, bg `#F2F2F2` — contains mini UI visual
- **Industry tag:** Poppins Mono 11px uppercase, `#C0272D`, red border chip — top-left over visual area
- **Title:** Poppins Bold 22px, `#1A1A1A`
- **Promise:** Poppins Regular 15px, `#666666`
- **Outcome chips:** bg `#F2F2F2`, border `1px #CCCCCC`, Poppins 500 12px
- **CTA:** `Explore solution →` — Poppins 600 14px, `#C0272D`. Hover: underline.
- **Hover (card):** `translateY(-6px)` + `box-shadow: 0 12px 40px rgba(192,39,45,0.12)` + border `#C0272D`, 250ms

---

### Mini UI Visuals (per tile)

| Tile | Visual Concept |
|---|---|
| Smart Energy & Solar | SVG sparkline trend chart + `LOSS DETECTED` red marker + automation flow nodes |
| Predictive Maintenance | Circular SVG health score gauge (82%) + anomaly timeline markers + `TICKET CREATED` green chip |
| Fleet & Logistics | Dot map with route line + colored fleet dots + `DELAY RISK` alert chip |
| Smart Home Automation | Device mesh diagram (hub + 6 device nodes) + connectivity health status + pipeline progress bar |
| Medical IoT Platform | Encrypted stream (padlock + flowing data lines) + audit log rows + alert queue badge |

> 💡 All tile visuals use CSS/SVG only — no external images. Animate on hover: lines pulse, gauges move 5%, dots blink.

---

## 05 — Proof / Work: Case Studies

### Section Layout

| Property | Value |
|---|---|
| Anchor ID | `#work` |
| Background | `#1A1A1A` (dark) |
| Section H2 | Proof that ships into real environments. |
| H2 color | White |
| Subhead | We deploy, validate, and support systems—beyond prototypes. |
| Subhead style | Poppins Regular 18px, `rgba(255,255,255,0.65)` |
| Micro CTA | `View all work →` `/work` (white text, underline on hover) |
| Card grid | 3 equal columns (desktop) / single column (mobile) |
| Card bg | `rgba(255,255,255,0.05)` + border `1px solid rgba(255,255,255,0.10)` |

---

### Case Card 1 — Abode Smart Home Security

| Field | Content |
|---|---|
| Industry Tag | Smart Home |
| Title | Abode Smart Home Security |
| Challenge | Improve reliability and visibility across connected devices and security workflows. |
| What We Built | An integrated IoT system with monitoring, data flow automation, and scalable validation. |
| Result Chips | Faster issue detection · Reduced manual checks · More reliable releases |
| Services Used | IoT Platform Development · Connectivity Solutions · Testing & QA |
| CTA | `Read case study →` `/work/abode-smart-home-security` |
| Thumbnail Visual | Device mesh + health panel mini + QA pipeline track |

---

### Case Card 2 — TerraSmart Solar OEM

| Field | Content |
|---|---|
| Industry Tag | Energy / Solar |
| Title | TerraSmart Solar OEM |
| Challenge | Increase operational efficiency and reduce performance loss using field data. |
| What We Built | A monitoring + analytics layer that turns solar operational data into actionable insights and automation. |
| Result Chips | Better performance visibility · Faster O&M decisions · Automated alerts/workflows |
| Services Used | Data Analytics · System Integration · Predictive Analytics |
| CTA | `Read case study →` `/work/terrasmart-solar-oem` |
| Thumbnail Visual | Solar trend chart + anomaly flag + automation flow |

---

### Case Card 3 — TerraTrak AI Solar Tracking

| Field | Content |
|---|---|
| Industry Tag | Energy / AI |
| Title | TerraTrak AI Solar Tracking |
| Challenge | Improve tracking accuracy and operational reliability through intelligence and automation. |
| What We Built | An AI-enhanced tracking and monitoring system with actionable signals and operational dashboards. |
| Result Chips | Improved tracking reliability · Early anomaly detection · Operational automation |
| Services Used | Machine Learning · Edge Computing · MLOps Deployment |
| CTA | `Read case study →` `/work/terratrak-ai-solar-tracking` |
| Thumbnail Visual | Tracking panel + health score gauge + model monitoring card |

---

### Case Card Style Spec

- Padding: 28px · Thumbnail area: 180px height, `#0D0D0D` bg
- Industry tag: Poppins Mono 10px uppercase, red text, red border chip — top-left over thumbnail
- Title: Poppins Bold 20px, white
- Challenge / Built: Poppins Regular 14px, `rgba(255,255,255,0.65)`, max 2 lines each
- **Result chips:** bg `rgba(192,39,45,0.15)`, border `rgba(192,39,45,0.4)`, text `#C0272D`, Poppins 500 12px
- **Services chips:** bg `rgba(255,255,255,0.08)`, text `rgba(255,255,255,0.7)` — each links to service page
- CTA: Poppins 600 14px, `#C0272D`. Arrow lifts `translateX(4px)` on hover.
- Card hover: border `rgba(192,39,45,0.5)`, `translateY(-4px)`, 250ms

**Results strip (below cards):**
```
Reliability improvements  ·  Faster deployments  ·  Reduced manual monitoring  ·  Automated QA adoption
```
Style: IBM Plex Mono 11px, `rgba(255,255,255,0.40)`, uppercase, centered

---

## 06 — Capabilities: Service Pillars

### Section Layout

| Property | Value |
|---|---|
| Anchor ID | `#capabilities` |
| Background | `#F2F2F2` |
| Section H2 | One team from devices to AI to deployment. |
| Subhead | Deep expertise across the full IoT stack — from hardware integration to AI models to QA automation. |
| Layout | 3 equal-width expansion cards (desktop) / stacked (mobile) |
| Interaction | Expand on hover/tap to reveal service list. Contract on mouse-leave. |

---

### 3 Pillar Cards

| # | Title | Services (4–5 items) | Icon | Route |
|---|---|---|---|---|
| 1 | IoT Engineering | Platform Development · Connectivity Solutions · Edge Computing · System Integration · Testing & QA | Circuit / microchip SVG, red | `/services/iot` |
| 2 | AI & Automation | Machine Learning Models · Predictive Analytics · Process Automation · MLOps Deployment · Data Analytics | Neural network SVG, red | `/services/ai` |
| 3 | Engineering Services | Structural Engineering · Electrical Engineering · Geotechnical Engineering · IoT-enabled Monitoring | Blueprint/schematic SVG, red | `/services/engineering` |

### Card Style Spec

- Default: white bg, border `1px #CCCCCC`, radius 16px, padding 32px. Red SVG icon top-left (40px).
- Title: Poppins Bold 22px. Short descriptor: Poppins 15px, `#666666`.
- Expanded state (hover): service list slides down via `max-height` animation, 400ms ease. Each item: bullet + `Explore →` link.
- Bottom CTA: `View all [category] →` Poppins 600 14px, `#C0272D`
- Hover: border `#C0272D`, `box-shadow: 0 8px 32px rgba(192,39,45,0.10)`, 250ms

---

## 07 — How We Work: Delivery Process

### Section Layout

| Property | Value |
|---|---|
| Anchor ID | `#process` |
| Background | `#1A1A1A` |
| Section H2 | A delivery process built for real deployments. |
| H2 color | White |
| Subhead | From first conversation to live system — we deliver with engineering precision, not just prototypes. |
| Layout | Horizontal 5-step timeline (desktop) / vertical accordion (mobile) |

---

### 5 Process Steps

| Step | Title | Description |
|---|---|---|
| 01 | Discover | Audit existing systems, data sources, and operational gaps. Define outcomes. |
| 02 | Architect | Design the integration layer, data model, and automation logic. No unnecessary rebuilds. |
| 03 | Build | Deploy connectors, AI models, pipelines, and automation workflows to your environment. |
| 04 | Validate | Automated QA testing, regression checks, data validation, and staging verification. |
| 05 | Deploy & Support | Go-live with monitoring, runbooks, alerts, and continuous improvement support. |

### Visual Spec

- Each step card: bg `#0D0D0D`, step number in IBM Plex Mono 48px `#C0272D`, title Poppins Bold 20px white
- Horizontal connecting line: red dashed, animates left-to-right on scroll enter (GSAP)
- Active step on scroll: border `#C0272D` + `scale(1.02)` highlight
- Engagement chips below: `Project · Dedicated team · OEM partnership` (white border pills)

---

## 08 — Final CTA: Contact / Conversion

### Section Layout

| Property | Value |
|---|---|
| Anchor ID | `#contact` |
| Background | `#C0272D` (full red section) |
| Section H2 | Enhance your processes with AI and automation. |
| H2 color | White |
| Subhead | Tell us what systems you have. We'll show how to make your data work—without ripping and replacing. |
| Layout | Two columns: Left 50% copy + trust · Right 50% form card |
| Form card style | bg white, radius 24px, padding 40px, subtle shadow |

---

### Left Panel — Copy & Trust

- H2 + subhead as above
- 3 trust items (white checkmark icons):
  - No rip-and-replace required
  - Response within 1 business day
  - Free architecture consultation
- White Zigron logo mark as decorative element at bottom

### Right Panel — Form

| Field | Type | Placeholder |
|---|---|---|
| Name | text | Your full name |
| Email | email | work@company.com |
| Company | text | Company name |
| What systems are you running and what outcome do you want? | textarea (4 rows) | e.g. SCADA + legacy PLCs, want predictive maintenance... |

- **Submit button:** full-width, bg `#1A1A1A`, white text, Poppins Bold 16px, pill, py-4
- **Button copy:** `Request an architecture call`
- **Button hover:** bg `#C0272D`, 200ms transition
- **Input style:** border `1.5px #CCCCCC`, radius 8px, focus: border `#C0272D` + ring `rgba(192,39,45,0.2)`
- **Microcopy below button:** *"No spam. No sales pitch. Just an engineering conversation."* — Poppins 12px, `#666666`

---

## FOOTER

### Layout

| Property | Value |
|---|---|
| Background | `#1A1A1A` |
| Top border | `4px solid #C0272D` |
| Padding | 80px top / 40px bottom |
| Grid | 4 columns: Brand (wider) + 3 nav column groups |
| Mobile | 2 columns → single column |

### Column Contents

| Column | Contents |
|---|---|
| Brand (col 1) | White Zigron logo mark + wordmark. Tagline: *Building and Protecting IoT Ventures.* Social icons (LinkedIn, X/Twitter). |
| Services (col 2) | IoT Engineering · AI & Automation · Engineering Services — each linking to `/services` sub-pages |
| Solutions (col 3) | Smart Energy · Predictive Maintenance · Fleet & Logistics · Smart Home · Medical IoT — linking to `/solutions` sub-pages |
| Company (col 4) | About · Work · Blog · Careers · Contact · Privacy Policy · Terms of Service |

### Bottom Bar

- **Left:** `© 2024 Zigron. All rights reserved.` — Poppins 12px, `rgba(255,255,255,0.40)`
- **Right:** `System Operational` status indicator — green pulsing dot (8px) + IBM Plex Mono 12px, `rgba(255,255,255,0.55)`

```css
/* Green pulse animation */
@keyframes pulse-dot {
  0%, 100% { transform: scale(1);   opacity: 1;   }
  50%       { transform: scale(1.5); opacity: 0.4; }
}
.status-dot { animation: pulse-dot 2s ease infinite; }
```

---

## 9. Animation Reference

### 9.1 Scroll-Triggered Entrances (GSAP ScrollTrigger)

| Element | From | To | Duration | Stagger | Trigger |
|---|---|---|---|---|---|
| Section H2 | y:32, opacity:0 | y:0, opacity:1 | 0.7s | — | top 85% |
| Section subhead | y:24, opacity:0 | y:0, opacity:1 | 0.6s | — | top 85% |
| Feature cards | y:40, opacity:0 | y:0, opacity:1 | 0.6s | 0.15s | top 80% |
| Solution tiles | y:32, opacity:0 | y:0, opacity:1 | 0.5s | 0.10s | top 80% |
| Case cards | y:40, opacity:0 | y:0, opacity:1 | 0.6s | 0.15s | top 80% |
| Process steps | x:-24, opacity:0 | x:0, opacity:1 | 0.5s | 0.12s | top 80% |
| Capability cards | y:32, opacity:0 | y:0, opacity:1 | 0.5s | 0.15s | top 80% |
| Form elements | y:20, opacity:0 | y:0, opacity:1 | 0.5s | 0.08s | top 80% |

### 9.2 Loop / Ongoing Animations

| Element | Animation | Duration |
|---|---|---|
| AI Layer center panel | Border glow pulse — `box-shadow 0 → 24px red → 0` | 3s infinite |
| Architecture diagram | Red data particles traverse connector paths | 2.5s infinite |
| Hero status dot | Opacity 1 → 0.3 → 1 | 2s infinite |
| Footer status dot | Scale 1 → 1.5 + opacity 1 → 0.4 | 2s infinite |
| Event stream (Slide 1) | Character-by-character typing loop | IBM Plex Mono, JS |
| Slider autoplay | 7s per slide | Pause on hover |
| Health score gauge | SVG arc fill on scroll enter | 1.2s GSAP |
| QA pipeline nodes | Sequential active-node pulse | 1.5s per node |

### 9.3 Micro-Interactions

| Interaction | Effect | Timing |
|---|---|---|
| Button hover | `scale(1.03)` + red shadow lift | 200ms ease |
| Card hover | `translateY(-6px)` + red border + shadow | 250ms ease-out |
| Nav link hover | color → `#C0272D`, opacity 1.0 | 150ms |
| Chip hover | bg → `#C0272D`, text → white | 200ms |
| CTA arrow | `translateX(4px)` | 200ms |
| Form input focus | border `#C0272D` + red glow ring | 150ms |
| Case card hover | `translateY(-4px)` + red border glow | 250ms |
| Tile hover | Mini-visual pulses (lines, gauge, dots) | 300ms |

---

## 10. Responsive Breakpoints

| Breakpoint | Width | Key Changes |
|---|---|---|
| Mobile xs | < 480px | Single column. Hero H1: 36px. Hide architecture diagram. Slider stacked. Hamburger only. |
| Mobile sm | 480–768px | Hero H1: 40px. Some 2-col card grids where space allows. |
| Tablet md | 768–1024px | Hero full-width single col. Slider 50/50. Solutions 2-col grid. |
| Desktop lg | 1024–1320px | Full 2-col hero. Slider 55/45. 5-tile asymmetric solutions. Full spec. |
| Wide xl | > 1320px | Content capped at 1320px. Section backgrounds bleed full width. |

> ⚠️ Test at: **375px** (iPhone SE) · **768px** (iPad) · **1280px** (standard laptop) · **1920px** (widescreen)

---

## 11. Performance & Accessibility

### Performance

- All Unsplash images: append `?w=1800&auto=format&fit=crop&q=80`
- Lazy-load all images below the fold: `loading="lazy"` or IntersectionObserver
- GSAP: always `gsap.context()` + return `ctx.revert()` in useEffect cleanup
- Slider: use CSS `transform` (not `margin-left`) for transitions
- SVG animations: prefer CSS keyframes over JS for simple loops
- **Target:** Lighthouse Performance > 85 · LCP < 2.5s

### Accessibility

- All images: meaningful `alt` text, or `aria-hidden="true"` for decorative
- Form inputs: paired `<label>` per input · `aria-required="true"` on required fields
- Slider: `aria-live="polite"` · Arrow buttons: `aria-label="Previous/Next slide"`
- Color contrast: white text on `#C0272D` passes WCAG AA ✓
- Focus states: visible focus ring on all interactive elements — never `outline: 0` without replacement
- Respect reduced motion:

```js
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReduced) {
  // run GSAP animations
}
```

---

## 12. Homepage Anchor Map

| Section | Anchor ID | Nav Label |
|---|---|---|
| Hero | `#hero` | — |
| When You Work With Us | `#when-you-work-with-us` | — |
| Modernize Without Replacing | `#modernize-without-replacing` | Services |
| Solutions Spotlight | `#solutions` | Solutions |
| Proof / Work | `#work` | Work |
| Capabilities | `#capabilities` | Services |
| How We Work | `#process` | — |
| Final CTA / Contact | `#contact` | Contact |

---

*Zigron — Building and Protecting IoT Ventures*
*This document is the complete and authoritative build specification for the Zigron homepage.*
