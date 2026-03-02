# Zigron Website

A modern, responsive B2B engineering services website built with Next.js 14+ (App Router), TypeScript, and Tailwind CSS v4.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```text
src/
├── app/                    # Next.js App Router pages
│   ├── about-us/           # About Us page
│   ├── careers/            # Careers page (Placeholder)
│   ├── contact/            # Contact page
│   ├── industries/         # Industries hub + sub-pages
│   │   ├── energy/         # Energy & Utilities (Live)
│   │   ├── healthcare/     # Healthcare & MedTech (Planned)
│   │   ├── manufacturing/  # Manufacturing (Planned)
│   │   └── ...             # Other industries
│   ├── services/           # Services hub
│   │   ├── ai/             # AI & Data Systems
│   │   │   ├── ml-development/ # ML/CV/NLP Development
│   │   │   └── ...         # Sub-services
│   │   ├── engineering/    # Engineering Design services
│   │   │   ├── cad-design/ # CAD Design & Drafting
│   │   │   └── ...         # Sub-services
│   │   └── iot/            # IoT services (deep dives)
│   │       ├── connectivity/
│   │       ├── device-firmware/
│   │       ├── oem-product-development/
│   │       └── strategy-consulting/
│   ├── solutions/          # Solutions/Expertise hub
│   │   └── smart-energy-solar/ # Smart Energy & Solar Solution
│   └── work/               # Case studies hub
│       └── terrasmart-solar/ # Detailed case study
├── components/
│   ├── layout/             # Header, Footer
│   └── ui/                 # Reusable UI components (Button, Badge, etc.)
└── globals.css             # Tailwind + custom CSS
```

## 🎨 Design System

### Colors

- **Primary:** `#B62427` (Zigron Red)
- **Backgrounds:** Light/Dark adaptive
- **Text:** Gray scale with muted variants

### Typography

- **Headlines:** `font-bold` / `font-extrabold`
- **Body:** `font-light` for readability
- **Fonts:** Inter (sans), Outfit (headings)

### Icons

- **Library:** Lucide React (tree-shakeable SVGs)
- **Pattern:** Icon component + colored background box

## 🏗️ Service Page Structure (Pattern A)

All service and solution pages follow a strict **Inline JSX Pattern** ("Pattern A"):

```text
/services/[category]/[service]/
├── data.ts        # All content data (interfaces, text, arrays)
├── components.tsx # Client-side interactive components ONLY (e.g., FAQAccordion, ContactForm)
└── page.tsx       # Main SSR page layout with inline section rendering
```

### Standard Sections Order

1. **Hero** - Badge, headline, CTAs, trust badges, visual diagram
2. **Capabilities Grid** - 4-6 feature cards
3. **Use Cases** - Industry examples
4. **Process/Lifecycle** - Numbered steps
5. **Architecture** - Technical diagram components
6. **Tech Stack** - Tools and technologies
7. **Case Studies** - Project highlights
8. **FAQ** - Common questions (Client Component)
9. **CTA** - Contact form (Client Component)

## 🔧 Tech Stack

| Category      | Technology                  |
|---------------|-----------------------------|
| Framework     | Next.js 14+ (App Router)    |
| Language      | TypeScript                  |
| Styling       | Tailwind CSS v4             |
| UI Components | Custom + Shadcn/ui patterns |
| Icons         | Lucide React                |
| Fonts         | next/font (Inter, Outfit)   |

## ✅ Build Status

All pages pass `next build` with:

- No TypeScript errors
- No ESLint errors
- Optimized images (Next.js `<Image />`)

## 📄 Pages (Current Status)

### Main Pages

- `/` - Homepage
- `/about-us` - About Us
- `/contact` - Contact form

### Services

- `/services` - Services Hub
- `/services/iot` - IoT Services Hub
- `/services/iot/strategy-consulting` - Strategy & Advisory
- `/services/iot/device-firmware` - Device & Firmware
- `/services/iot/oem-product-development` - OEM Product Engineering
- `/services/iot/connectivity` - Connectivity & Integration
- `/services/ai` - AI & Data Services Hub
- `/services/ai/ml-development` - ML & Computer Vision
- `/services/engineering` - Engineering Services Hub
- `/services/engineering/cad-design` - CAD Design

### Industries

- `/industries` - Industries Hub
- `/industries/energy` - Energy & Utilities

### Solutions

- `/solutions` - Solutions Hub
- `/solutions/smart-energy-solar` - Smart Energy & Solar

### Work

- `/work` - Case Studies Hub
- `/work/terrasmart-solar` - TerraSmart Case Study

### Legal

- `/privacy-policy`
- `/terms-of-service`
- `/cookie-policy`

## 📝 License

Proprietary - Zigron Technologies
