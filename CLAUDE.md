# Zigron Website

Next.js 16.1.6 (App Router) + React 19 + TypeScript + Tailwind CSS v4
Deployed on Vercel. WordPress (AWS) as headless CMS for `/blog`.

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build (validates all pages)
npm run lint         # ESLint
npm start            # Start production server
```

## Architecture

- **App Router** — all pages in `src/app/`, layouts + server components by default
- **WordPress headless CMS** — REST API at `NEXT_PUBLIC_WORDPRESS_API_URL` (.env.local)
- **ISR** — `revalidate: 60` on all WP API calls; new posts appear within 60s
- **Proxy (middleware)** — `src/proxy.ts` (Next.js 16 convention, NOT middleware.ts)

## Key Directories

```
src/lib/wordpress.ts          # WP REST API client (all fetch functions)
src/lib/slugify.ts            # URL-safe slug generator
src/components/blog/          # Blog components (Card, TOC, Content, Pagination)
src/components/layout/        # Header, Footer (shared layout)
src/components/ui/            # Reusable UI (Button, Badge, Section, Container)
src/app/blog/                 # Blog pages (listing, [slug], category, tag)
```

## Code Style

- TypeScript strict mode, ES2017 target
- Server components by default; `"use client"` only when needed
- Tailwind classes inline (no CSS modules)
- `next/image` for all images — never use `<img>` or `unoptimized`
- Slugs always encoded with `encodeURIComponent()` in API URLs

## WordPress Integration Rules

- All WP content MUST be sanitized with `sanitize-html` before rendering
- Never use `isomorphic-dompurify` or `jsdom` — crashes Vercel serverless (ESM/CJS incompatibility)
- Use `AbortController` with 30s timeout on all fetch calls
- The `_embed` query param includes author, media, terms in one request
- Featured image fallback: gradient placeholder in cards, `logo.svg` for OG

## SEO Requirements

- Every page needs `generateMetadata` with title, description, canonical, OG
- Blog posts need JSON-LD (`BlogPosting` + `BreadcrumbList`)
- Category/tag pages need `BreadcrumbList` JSON-LD
- Semantic HTML: `<article>`, `<nav aria-label>`, `<time dateTime>`, heading hierarchy
- Sitemap (`src/app/sitemap.ts`) dynamically includes WP posts/categories/tags

## Security

- CSP in `src/proxy.ts` — `unsafe-inline` required by Next.js
- Security headers in `next.config.ts` (HSTS, X-Frame-Options, nosniff, etc.)
- WordPress image domains whitelisted in `next.config.ts` remotePatterns
- Never commit `.env.local`

## Git

- Branch naming: `feature/description` or `fix/description`
- Commit messages: imperative mood
- Run `npm run build` before pushing — catches type errors and broken pages

## Docs

@docs/WordPress_Integration.md
@docs/Zigron_Website_Requirement_Document.md
