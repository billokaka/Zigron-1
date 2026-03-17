---
paths:
  - "src/app/**/page.tsx"
  - "src/app/**/layout.tsx"
  - "src/app/sitemap.ts"
  - "src/app/robots.ts"
---

# SEO Rules

## Every Page Must Have
- `generateMetadata` or static `metadata` export
- `title` and `description`
- `alternates.canonical` (relative path)
- OpenGraph tags (title, description, url, images)

## Blog Pages Additionally Need
- JSON-LD structured data via `<script type="application/ld+json">`
- BlogPosting schema for individual posts (headline, datePublished, author, publisher, wordCount, keywords)
- BreadcrumbList schema for all blog pages
- `<time dateTime>` for dates (not just formatted text)
- `generateStaticParams` for pre-rendering popular content

## Semantic HTML
- `<article>` for blog post content
- `<nav aria-label="...">` for all navigation (breadcrumbs, TOC, categories, pagination)
- `<h1>` once per page, proper h2→h3→h4 hierarchy
- `aria-current="page"` on breadcrumb current item

## Sitemap (`src/app/sitemap.ts`)
- Dynamically fetches WordPress posts, categories, tags
- Falls back gracefully if WP API is unreachable
- Priority: homepage 1.0, sections 0.8, posts 0.7, categories 0.5, tags 0.4

## Images
- Always use `next/image` with explicit width/height or fill
- Always include `alt` text (fall back to title if needed)
- Use `sizes` attribute for responsive optimization
- Featured image fallback: `https://zigron.com/logo.svg` for OG tags
