# Zigron Design System

This document defines the design tokens, component patterns, and section layouts extracted from the HTML design templates.

---

## Table of Contents

1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Spacing & Border Radius](#spacing--border-radius)
4. [Common Components](#common-components)
5. [Section Patterns](#section-patterns)
6. [Page Structure Patterns](#page-structure-patterns)

---

## Color Palette

### Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#B62427` | Brand red, CTAs, accents, links |
| `primary-dark` | `#8a1b1d` | Hover states for primary |

### Background Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `background` | `#FFFFFF` | `#121212` | Page background |
| `surface` | `#F3F4F6` | `#1E1E1E` | Cards, sections |

### Text Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `text-main` | `#232020` | `#E5E5E5` | Headings, body |
| `text-muted` | `#52525B` | `#A1A1AA` | Descriptions, labels |

### Accent Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `accent-gray` | `#D2D9D9` | Borders, dividers |

### Tailwind Config

```javascript
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#B62427",
                "primary-dark": "#8a1b1d",
                "background-light": "#FFFFFF",
                "background-dark": "#121212",
                "surface-light": "#F3F4F6",
                "surface-dark": "#1E1E1E",
                "text-main-light": "#232020",
                "text-main-dark": "#E5E5E5",
                "text-muted-light": "#52525B",
                "text-muted-dark": "#A1A1AA",
                "accent-gray": "#D2D9D9",
            },
            fontFamily: {
                sans: ["Poppins", "sans-serif"],
                display: ["Poppins", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "4px",
                lg: "8px",
                xl: "12px",
            },
        },
    },
};
```

---

## Typography

### Font Family

- **Primary Font**: Poppins
- **Weights Used**: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)

### Heading Scales

| Element | Classes | Usage |
|---------|---------|-------|
| H1 | `text-4xl md:text-5xl lg:text-6xl font-bold/extrabold` | Page hero titles |
| H2 | `text-3xl font-bold` | Section headers |
| H3 | `text-xl font-bold` | Card titles, subsections |
| H4 | `text-lg font-bold` | Small section titles |

### Body Text

| Type | Classes |
|------|---------|
| Large | `text-lg md:text-xl text-muted leading-relaxed` |
| Base | `text-base text-muted` |
| Small | `text-sm text-gray-600 dark:text-gray-400` |
| Tiny | `text-xs text-gray-500` |

### Labels & Tags

| Type | Classes |
|------|---------|
| Section label | `text-primary font-bold uppercase tracking-widest text-sm` |
| Badge | `text-xs font-bold uppercase tracking-wider` |
| Metric label | `text-[10px] uppercase tracking-wide font-semibold` |

---

## Spacing & Border Radius

### Section Padding

| Size | Classes |
|------|---------|
| Standard | `py-20` or `py-24` |
| Compact | `py-16` |
| Hero | `pt-20 pb-20` or `pt-20 pb-24` |

### Container

```html
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
```

### Border Radius

| Size | Value | Usage |
|------|-------|-------|
| Sharp | `rounded` (4px) | Buttons, cards (engineering feel) |
| Medium | `rounded-lg` (8px) | Cards |
| Large | `rounded-xl` (12px) | Featured cards, modals |
| Full | `rounded-full` | Pills, avatars, badges |

---

## Common Components

### 1. Announcement Bar

```html
<div class="bg-surface-dark text-white text-xs py-2 px-4 text-center tracking-widest uppercase font-semibold hidden md:block">
    <span class="opacity-80">OEM Product Engineering • AI Systems • Enterprise IoT</span>
</div>
```

### 2. Navigation Header

**Structure:**
- Sticky positioning with backdrop blur
- Logo (icon + wordmark)
- Desktop nav links
- CTAs: secondary link + primary button
- Dark mode toggle
- Mobile hamburger

```html
<nav class="sticky top-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-20 items-center">
            <!-- Logo -->
            <!-- Nav Links (hidden lg:flex) -->
            <!-- CTAs (hidden md:flex) -->
            <!-- Mobile Menu Button (lg:hidden) -->
        </div>
    </div>
</nav>
```

**Nav Links:** Services, Solutions, Industries, Work, Company

### 3. Hero Section

**Components:**
- Badge/tag (optional)
- H1 headline
- Subheadline
- CTA buttons (primary + secondary)
- Proof points / trust indicators
- Visual (image, diagram, or illustration)

```html
<section class="relative pt-20 pb-20 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-background-dark dark:via-surface-dark dark:to-background-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Content Column -->
            <!-- Visual Column -->
        </div>
    </div>
</section>
```

### 4. Trust / Metrics Strip

```html
<div class="bg-surface-light dark:bg-surface-dark border-y border-gray-200 dark:border-gray-800 py-8">
    <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
            <!-- Logo strip -->
            <!-- Metrics -->
        </div>
    </div>
</div>
```

**Metric Pattern:**
```html
<div class="text-center">
    <p class="text-3xl font-bold text-black dark:text-white">500k+</p>
    <p class="text-[10px] text-gray-500 uppercase tracking-wide font-semibold mt-1">Devices Connected</p>
</div>
```

### 5. Section Header

**Left-aligned:**
```html
<div class="mb-14">
    <span class="text-primary font-bold uppercase tracking-widest text-sm">Section Label</span>
    <h2 class="text-3xl font-bold mt-2 text-black dark:text-white">Section Title</h2>
    <p class="mt-4 text-text-muted-light dark:text-text-muted-dark max-w-2xl text-lg">Description text.</p>
</div>
```

**Centered:**
```html
<div class="text-center mb-16">
    <h2 class="text-3xl font-bold text-black dark:text-white">Section Title</h2>
    <p class="mt-4 text-gray-500 max-w-2xl mx-auto">Description text.</p>
</div>
```

### 6. Card Patterns

**Service Card:**
```html
<div class="group bg-white dark:bg-surface-dark p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all hover:shadow-xl">
    <div class="w-12 h-12 bg-red-50 dark:bg-red-900/20 rounded-lg flex items-center justify-center mb-6 text-primary">
        <!-- Icon -->
    </div>
    <h3 class="text-xl font-bold mb-2">Title</h3>
    <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">When to use: <span>...</span></p>
    <ul class="space-y-3 mb-8">
        <!-- Feature items with checkmarks -->
    </ul>
    <a class="text-primary font-bold text-sm hover:underline flex items-center gap-2" href="#">
        Learn more <span>→</span>
    </a>
</div>
```

**Solution Card:**
```html
<div class="flex flex-col bg-white dark:bg-gray-900 rounded-xl border hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden">
    <div class="h-52 w-full relative overflow-hidden">
        <!-- Image with hover scale -->
        <div class="absolute top-4 right-4 bg-white/95 px-3 py-1.5 rounded-md text-[10px] font-bold text-primary uppercase">
            Ready to deploy
        </div>
    </div>
    <div class="p-7 flex flex-col flex-1 gap-5">
        <div>
            <h4 class="text-xl font-bold">Title</h4>
            <p class="text-xs font-semibold text-gray-500 uppercase">Best for: ...</p>
        </div>
        <div class="space-y-3">
            <!-- Features with checkmarks -->
        </div>
        <div class="mt-auto pt-5 border-t">
            <!-- Stats -->
            <!-- Tech tags -->
            <a class="flex w-full items-center justify-center rounded-lg h-10 border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white">
                View Solution
            </a>
        </div>
    </div>
</div>
```

**Case Study Card:**
```html
<div class="bg-white dark:bg-background-dark rounded-xl overflow-hidden shadow-sm border flex flex-col group hover:shadow-lg transition-all">
    <div class="h-56 bg-gray-200 relative overflow-hidden">
        <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div class="absolute top-4 left-4 bg-black/80 backdrop-blur text-white px-3 py-1 text-[10px] font-bold rounded uppercase">
            Category
        </div>
    </div>
    <div class="p-8 flex-1 flex flex-col">
        <h3 class="font-bold text-lg mb-4">Title</h3>
        <div class="space-y-4 mb-8 flex-1 border-t pt-4">
            <!-- Problem / Approach / Outcome -->
        </div>
        <a class="text-primary font-bold text-sm flex items-center gap-2">
            Read case study →
        </a>
    </div>
</div>
```

### 7. Process / Timeline Steps

**Horizontal (Desktop):**
```html
<div class="relative">
    <div class="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-4 relative z-10">
        <div class="text-center group">
            <div class="w-12 h-12 mx-auto bg-white border-2 border-primary rounded-full flex items-center justify-center font-bold text-primary mb-4">
                1
            </div>
            <h4 class="font-bold text-sm">Step Title</h4>
            <div class="flex flex-col gap-1 text-xs">
                <!-- Step details -->
            </div>
        </div>
        <!-- More steps... -->
    </div>
</div>
```

### 8. FAQ Accordion

```html
<details class="group bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 open:ring-2 open:ring-primary/20 open:border-primary/50 transition-all">
    <summary class="flex cursor-pointer items-center justify-between p-6 font-bold text-lg list-none">
        <span>Question text?</span>
        <span class="transition-transform group-open:rotate-180">
            <svg><!-- Chevron icon --></svg>
        </span>
    </summary>
    <div class="px-6 pb-6 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
        Answer text...
    </div>
</details>
```

### 9. CTA Section

```html
<section class="py-24 bg-surface-light dark:bg-surface-dark relative overflow-hidden">
    <div class="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 class="text-4xl font-bold mb-4 text-black dark:text-white">CTA Headline</h2>
        <p class="text-gray-500 mb-10">Supporting description text.</p>
        <form class="bg-white dark:bg-background-dark p-8 rounded-xl shadow-2xl max-w-2xl mx-auto text-left border">
            <!-- Form fields -->
            <button class="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded">
                Submit
            </button>
        </form>
    </div>
</section>
```

### 10. Footer

```html
<footer class="bg-surface-light dark:bg-surface-dark pt-16 border-t border-gray-200 dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <!-- Logo column -->
            <!-- Link columns: Solutions, Services, Industries, Company -->
        </div>
        <div class="border-t py-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>© 2024 Zigron Inc. All rights reserved.</p>
            <div class="flex gap-6">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Security</a>
            </div>
        </div>
    </div>
</footer>
```

---

## Section Patterns

### Hub Page Pattern

1. **Hero** - Positioning headline + CTAs
2. **Trust Strip** - Logos, metrics, badges
3. **Filterable Grid** - Cards with category filters
4. **Architecture/Process** - Visual diagram or steps
5. **Cross-Links** - Related solutions/industries/services
6. **Proof** - Case study previews
7. **FAQ** - Common questions
8. **CTA** - Contact/consultation form

### Detail Page Pattern

1. **Hero** - Breadcrumbs + title + CTAs + proof points
2. **Problem** - Pain points section
3. **Solution Overview** - Architecture diagram + capabilities
4. **Deliverables** - What's included
5. **Use Cases** - Who it's for
6. **Process** - How we deliver
7. **Technical Approach** - Stack, tools, architecture
8. **Proof** - Related case studies
9. **Related Links** - Cross-links to related pages
10. **FAQ** - Service/solution-specific questions
11. **CTA** - Contact form

---

## Page Structure Patterns

### Standard Page Shell

```html
<!DOCTYPE html>
<html class="scroll-smooth" lang="en">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>Page Title | Zigron</title>
    <!-- Fonts -->
    <!-- Tailwind -->
    <!-- Config -->
</head>
<body class="bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark antialiased transition-colors duration-300 font-sans">
    <!-- Announcement Bar -->
    <!-- Navigation -->
    <!-- Main Content Sections -->
    <!-- Footer -->
</body>
</html>
```

### Dark Mode Toggle

```javascript
document.documentElement.classList.toggle('dark')
```

### Interactive States

| State | Pattern |
|-------|---------|
| Hover (button) | `hover:bg-primary-dark hover:shadow-xl hover:-translate-y-0.5` |
| Hover (card) | `hover:border-primary hover:shadow-xl hover:-translate-y-1` |
| Hover (link) | `hover:text-primary hover:underline` |
| Focus (input) | `focus:ring-primary focus:border-primary` |
| Active (nav) | `text-primary border-b-2 border-primary` |

---

## Next Steps

This design system document should be used as reference when building React components. Key implementation priorities:

1. **Create Tailwind config** with exact color tokens
2. **Build atomic components** (Button, Card, Badge, etc.)
3. **Build layout components** (Header, Footer, Section containers)
4. **Build section components** (Hero, TrustStrip, CardGrid, FAQ, CTA)
5. **Ensure dark mode support** in all components
