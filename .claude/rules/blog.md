---
paths:
  - "src/app/blog/**/*.tsx"
  - "src/components/blog/**/*.tsx"
  - "src/lib/wordpress.ts"
---

# WordPress Blog Rules

## API Client (`src/lib/wordpress.ts`)
- All API calls go through `wpFetch()` — never call `fetch()` directly for WP
- Always use `_embed` query param to avoid extra round trips
- ISR: `next: { revalidate: 60 }` on every fetch
- 30s timeout via `AbortController` — prevents Vercel function timeouts
- Pagination reads `X-WP-TotalPages` and `X-WP-Total` headers

## Content Safety
- WordPress HTML MUST be sanitized with `sanitize-html` (pure JS, no DOM)
- Never use `dompurify`, `isomorphic-dompurify`, or any `jsdom`-dependent library
- Block `<script>`, `<style>`, `<form>`, `<input>` tags
- Block `javascript:` URLs in href attributes
- Allow `<iframe>` (for YouTube/Vimeo embeds), `<img>`, `<figure>`, `<video>`

## Components
- `WordPressContent` is a client component — handles sanitization + parsing
- `BlogPostCard` is a server component — no client JS
- `Pagination` is a server component — uses `<a href>` not `onClick`
- `TableOfContents` is a client component — uses IntersectionObserver for scroll-spy
- Headings (h2/h3/h4) get `id` attributes via `slugify()` for TOC anchors
- All headings need `scroll-mt-24` to offset the sticky header

## Page Patterns
- Blog listing: category filter bar + 3x3 grid + pagination
- Single post: hero + breadcrumbs + TOC (desktop sidebar / mobile accordion) + article + related posts
- Category/tag archive: same grid pattern, `basePath` prop for pagination URLs
- Always `try/catch` WordPress API calls with graceful fallback (empty state or notFound)

## SEO per blog page
- `generateMetadata` with dynamic title, description, canonical, OG image
- JSON-LD structured data (BlogPosting for posts, BreadcrumbList for all)
- `generateStaticParams` on `[slug]/page.tsx` — pre-renders top 20 posts
