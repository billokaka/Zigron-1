# Zigron Website - Quick Reference

## Create a New Page (Copy & Paste)

```bash
# 1. Create folder
mkdir -p src/app/[route]/[slug]

# 2. Copy template files
cp docs/templates/page-template/* src/app/[route]/[slug]/

# 3. Edit the files
# - data.ts: Update all content
# - components.tsx: Adjust sections as needed
# - page.tsx: Rename function, adjust sections

# 4. Test
npm run build
```

---

## File Structure Cheat Sheet

```
src/app/
├── [route]/
│   ├── page.tsx              # Hub page
│   ├── components.tsx        # Hub components (optional)
│   ├── data.ts               # Hub data (optional)
│   └── [slug]/               # Detail page
│       ├── page.tsx          # ← Required
│       ├── components.tsx    # ← Required
│       └── data.ts           # ← Required
```

---

## Common Routes

| Route | Purpose | Example Detail |
|-------|---------|----------------|
| `/solutions/[slug]` | Solution pages | `smart-energy-solar` |
| `/industries/[slug]` | Industry pages | `energy` |
| `/services/iot/[slug]` | IoT services | `oem-product-development` |
| `/services/ai/[slug]` | AI services | `ml-development` |
| `/services/engineering/[slug]` | Engineering | `cad-design` |
| `/work/[slug]` | Case studies | `terrasmart-solar` |

---

## Component Imports

```typescript
// Layout
import { Header, Footer } from "@/components/layout";

// UI Components
import { Button, Badge, Container, Section, SectionHeader } from "@/components/ui";

// Icons (Lucide)
import { Cpu, Cloud, Zap, Shield, ArrowRight, CheckCircle } from "lucide-react";
```

---

## Section Component Pattern

```typescript
<Section background="default|surface|gradient" padding="default|hero|none">
  <Container size="default|narrow">
    <SectionHeader
      label="Badge Text"
      title="Section Title"
      description="Description"
    />
    {/* Content */}
  </Container>
</Section>
```

---

## Button Variants

```typescript
<Button>Default (Red)</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="outline">Outline</Button>
<Button size="lg">Large</Button>
<Button href="/contact">Link Button</Button>
```

---

## Responsive Grid

```typescript
// 2 columns on tablet, 3 on desktop
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

// 4 columns on desktop
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
```

---

## Icon Mapping Pattern

```typescript
// In data.ts
export type IconName = "cpu" | "cloud" | "zap";

// In components.tsx
import { Cpu, Cloud, Zap, LucideIcon } from "lucide-react";

const iconMap: Record<IconName, LucideIcon> = {
  cpu: Cpu,
  cloud: Cloud,
  zap: Zap,
};

const getIcon = (name: IconName) => iconMap[name] || Cpu;
```

---

## Design References

Located in `/design-references/`:

| File | Use For |
|------|---------|
| `homepage.html` | Homepage structure |
| `solution-hub.html` | Solutions listing |
| `solution-detail.html` | Solution detail page |
| `industry-hub.html` | Industries listing |
| `industry-energy.html` | Industry detail page |
| `service-iot-hub.html` | Service category hub |
| `service-iot-detail.html` | Service detail page |
| `work-hub.html` | Case studies listing |
| `case-study-terrasmart.html` | Case study detail |

---

## Build & Test

```bash
# Development
npm run dev

# Build (check for errors)
npm run build

# Type check
npx tsc --noEmit
```
