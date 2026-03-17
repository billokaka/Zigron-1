# WordPress Headless CMS Integration — Technical Documentation

## Zigron Website (Next.js + WordPress REST API)

**Date:** March 2026
**Stack:** Next.js 16.1.6 (App Router) + React 19 + TypeScript + Tailwind CSS v4
**Hosting:** Next.js on Vercel, WordPress on AWS
**Architecture:** Headless CMS — WordPress serves content only, Next.js handles rendering and styling

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Architecture & Data Flow](#2-architecture--data-flow)
3. [Files Created & Modified](#3-files-created--modified)
4. [WordPress API Client](#4-wordpress-api-client)
5. [Blog Pages & Routing](#5-blog-pages--routing)
6. [Content Rendering Pipeline](#6-content-rendering-pipeline)
7. [SEO Implementation](#7-seo-implementation)
8. [Security Measures](#8-security-measures)
9. [Performance Optimizations](#9-performance-optimizations)
10. [Challenges Faced & Solutions](#10-challenges-faced--solutions)
11. [Deployment Checklist](#11-deployment-checklist)
12. [WordPress Admin Requirements](#12-wordpress-admin-requirements)

---

## 1. Project Overview

### What We Built

Connected Zigron's legacy WordPress site (hosted on AWS at `zigron.com`) to the new Next.js website as a headless CMS. WordPress serves as the content storage layer only — all blog posts, categories, tags, and featured images are fetched via the WordPress REST API and rendered with Next.js styling.

### Key Decisions

| Decision | Choice | Reasoning |
|----------|--------|-----------|
| CMS approach | Headless WordPress | Existing 172+ blog posts already in WordPress |
| Data fetching | WordPress REST API (`/wp-json/wp/v2/`) | Built-in, no plugins needed, public endpoints |
| Caching strategy | ISR with `revalidate: 60` | New posts appear within 60 seconds, no rebuild needed |
| Content sanitization | `sanitize-html` (pure JS) | Works on both server & client, no DOM dependency |
| HTML parsing | `html-react-parser` | Converts WordPress HTML to styled React components |
| URL structure | `/blog/[slug]`, `/blog/category/[slug]`, `/blog/tag/[slug]` | SEO-friendly, matches common blog conventions |

---

## 2. Architecture & Data Flow

```
┌──────────────┐    REST API     ┌──────────────┐    ISR (60s)    ┌──────────┐
│  WordPress   │ ──────────────► │   Next.js    │ ──────────────► │  Vercel  │
│  (AWS)       │  /wp-json/wp/  │  (App Router) │   Static +     │  CDN     │
│              │   v2/posts     │               │   On-demand    │          │
│  - Posts     │   v2/categories│  - SSR/ISR    │                │  Edge    │
│  - Media     │   v2/tags      │  - Sanitize   │                │  Cached  │
│  - Categories│                │  - Style      │                │          │
│  - Tags      │                │  - SEO meta   │                │          │
└──────────────┘                └──────────────┘                └──────────┘
```

### How New Posts Appear Automatically

1. Author publishes a post on WordPress (`zigron.com/wp-admin`)
2. WordPress REST API immediately reflects the new post
3. Next.js has `revalidate: 60` on all API fetches
4. After 60 seconds, the next visitor triggers a background regeneration
5. Fresh content is served from that point — no rebuild or redeploy needed
6. The sitemap (`/sitemap.xml`) also updates dynamically

---

## 3. Files Created & Modified

### New Files

| File | Purpose |
|------|---------|
| `src/lib/wordpress.ts` | WordPress REST API client — all fetch functions, types, helpers |
| `src/lib/slugify.ts` | URL-safe slug generator for heading anchor IDs |
| `src/components/blog/BlogPostCard.tsx` | Post card component for listing grids |
| `src/components/blog/Pagination.tsx` | Server-side pagination with page numbers |
| `src/components/blog/WordPressContent.tsx` | WordPress HTML sanitizer + parser + styler |
| `src/components/blog/TableOfContents.tsx` | Auto-generated TOC with scroll-spy |
| `src/components/blog/index.ts` | Barrel exports |
| `src/app/blog/page.tsx` | Blog listing page (3x3 grid, category filter, pagination) |
| `src/app/blog/[slug]/page.tsx` | Single post page (article, TOC, related posts, breadcrumbs) |
| `src/app/blog/category/[slug]/page.tsx` | Category archive page |
| `src/app/blog/tag/[slug]/page.tsx` | Tag archive page |
| `.env.local` | WordPress API URL environment variable |

### Modified Files

| File | Changes |
|------|---------|
| `next.config.ts` | Added `zigron.com` and `cms.zigron.com` to `images.remotePatterns`; added security headers |
| `src/proxy.ts` | Added CSP header with WordPress domains in allowed sources |
| `src/components/layout/Header.tsx` | Added "Blog" to navigation links |
| `src/components/layout/Footer.tsx` | Added "Blog" to company links |
| `src/app/sitemap.ts` | Made async; dynamically includes blog posts, categories, tags |
| `src/app/globals.css` | Added `.wp-content` styles for WordPress HTML (lists, tables, iframes) |

---

## 4. WordPress API Client

**File:** `src/lib/wordpress.ts`

### Core Fetch Function

All API calls go through a single `wpFetch` function with:
- **30-second timeout** via `AbortController` — prevents infinite hangs
- **ISR caching** via `next: { revalidate: 60 }` — content refreshes every 60 seconds
- **Pagination headers** — reads `X-WP-TotalPages` and `X-WP-Total` from response headers

```typescript
async function wpFetch<T>(endpoint: string): Promise<{ data: T; headers: Headers }> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);

  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      next: { revalidate: 60 },
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`WordPress API error: ${res.status}`);
    return { data: await res.json() as T, headers: res.headers };
  } finally {
    clearTimeout(timeout);
  }
}
```

### Available Functions

| Function | Endpoint | Returns |
|----------|----------|---------|
| `getPosts(page, perPage)` | `/posts?_embed&page=X&per_page=Y` | Paginated posts with embedded media/terms |
| `getPostBySlug(slug)` | `/posts?slug=X&_embed` | Single post or `null` |
| `getPostsByCategory(id, page, perPage)` | `/posts?_embed&categories=X` | Posts filtered by category |
| `getPostsByTag(id, page, perPage)` | `/posts?_embed&tags=X` | Posts filtered by tag |
| `getCategories()` | `/categories?per_page=100` | All categories |
| `getTags()` | `/tags?per_page=100` | All tags |
| `getCategoryBySlug(slug)` | `/categories?slug=X` | Single category or `null` |
| `getTagBySlug(slug)` | `/tags?slug=X` | Single tag or `null` |

### Helper Functions

| Function | Purpose |
|----------|---------|
| `getFeaturedImageUrl(post)` | Extracts featured image URL from `_embedded` |
| `getFeaturedImageAlt(post)` | Gets alt text, falls back to post title |
| `getAuthorName(post)` | Gets author name, falls back to "Zigron Team" |
| `getPostCategories(post)` | Extracts category array from `_embedded["wp:term"]` |
| `getPostTags(post)` | Extracts tag array from `_embedded["wp:term"]` |
| `formatDate(dateString)` | Formats to "March 15, 2026" style |
| `stripHtml(html)` | Removes all HTML tags for plain text |
| `estimateReadTime(content)` | Word count ÷ 200 WPM |

### TypeScript Types

```typescript
interface WPPost {
  id: number;
  slug: string;
  date: string;
  modified: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: { /* author, featured media, terms */ };
}

interface WPCategory { id: number; name: string; slug: string; count: number; description: string; }
interface WPTag { id: number; name: string; slug: string; count: number; }
interface WPPaginatedResponse<T> { data: T[]; totalPages: number; total: number; }
```

---

## 5. Blog Pages & Routing

### URL Structure

| Route | Page | Data Source |
|-------|------|-------------|
| `/blog` | Blog listing — 3x3 grid with category filter bar | `getPosts(page, 9)` + `getCategories()` |
| `/blog?page=2` | Paginated listing | `getPosts(2, 9)` |
| `/blog/[slug]` | Single post — article, TOC, related posts | `getPostBySlug(slug)` |
| `/blog/category/[slug]` | Category archive — filtered grid | `getCategoryBySlug(slug)` + `getPostsByCategory(id)` |
| `/blog/category/[slug]?page=2` | Paginated category archive | Same, page 2 |
| `/blog/tag/[slug]` | Tag archive — filtered grid | `getTagBySlug(slug)` + `getPostsByTag(id)` |

### Single Post Page Features

- **Hero section** with breadcrumb navigation, category badge, title, author/date/read-time meta
- **Featured image** with `next/image` optimization (`priority`, `fill`, responsive `sizes`)
- **Table of Contents** — auto-generated from h2/h3/h4 headings in content
  - Desktop: sticky sidebar (right column)
  - Mobile: collapsible accordion above content
  - Scroll-spy via `IntersectionObserver` highlights active heading
  - Smooth scroll on click
- **WordPress HTML content** — sanitized, parsed, and styled with Tailwind classes
- **Tags section** — links to tag archive pages
- **Related Articles** — 3 posts from the same primary category (excludes current post)

### Pagination Component

- Shows up to 5 page numbers centered around the current page
- Ellipsis (`...`) for gaps between first/last and visible range
- Previous/Next buttons with chevron icons
- Uses `Button` component with `href` for server-side rendering (no client JS needed)
- Accepts `basePath` prop for category/tag filtered views

---

## 6. Content Rendering Pipeline

**File:** `src/components/blog/WordPressContent.tsx` (Client Component)

### Pipeline

```
WordPress HTML → preprocessShortcodes() → sanitize-html → html-react-parser → Styled React Components
```

### Step 1: Shortcode Preprocessing

```typescript
function preprocessShortcodes(html: string): string {
  // Convert [caption] to <figure>
  html.replace(/\[caption[^\]]*\]([\s\S]*?)\[\/caption\]/g, '<figure class="wp-caption">$1</figure>');
  // Strip remaining shortcodes
  html.replace(/\[[^\]]+\]/g, "");
}
```

### Step 2: HTML Sanitization (`sanitize-html`)

Chosen over DOMPurify/isomorphic-dompurify because it's **pure JavaScript** — no DOM dependency, works identically on server (Node.js/Vercel) and client. This was a critical fix (see [Challenge #7](#challenge-7-isomorphic-dompurify--jsdom-crash-on-vercel)).

**Allowed tags:** All default tags + `img`, `iframe`, `figure`, `figcaption`, `video`, `source`, `h1-h6`, `span`
**Allowed attributes:** `href`, `src`, `alt`, `width`, `height`, `class`, `id`, `style` (on span/div), `target`, `rel`, `frameborder`, `allow`, `allowfullscreen`
**Blocked:** `<script>`, `<style>`, `<form>`, `<input>`, `<textarea>`, `<select>`, event handlers (`onerror`, `onclick`, etc.)

### Step 3: HTML Parsing & Styling (`html-react-parser`)

Each HTML element is intercepted and replaced with a styled React component:

| WordPress HTML | Styled Output |
|----------------|---------------|
| `<h2>` | `<h2>` with `id` (for TOC anchors), `scroll-mt-24`, bold, dark text |
| `<h3>` | Same pattern with appropriate sizing |
| `<h4>` | Same pattern |
| `<p>` | Responsive text, relaxed leading, gray color, bottom margin |
| `<a>` | Primary color, underline, `target="_blank"` + `noopener` for external links, `javascript:` URLs blocked |
| `<blockquote>` | Left border, italic, light background |
| `<pre>` | Dark background, rounded, monospace, horizontal scroll |
| `<code>` (inline) | Gray background, primary color, rounded |
| `<img>` | Converted to `next/image` with width/height, rounded corners, responsive sizes |
| `<figcaption>` | Centered, small, italic, gray |

### Heading Anchor IDs

Each heading gets a URL-safe `id` attribute generated by the `slugify()` function:
- "8 Benefits of AIoT" → `id="8-benefits-of-aiot"`
- Used by the Table of Contents for smooth scroll navigation
- `scroll-mt-24` ensures headings aren't hidden behind the sticky header

---

## 7. SEO Implementation

### Per-Page Dynamic Metadata (`generateMetadata`)

Every blog page generates unique metadata:

```typescript
// Single post
title: post.title.rendered
description: excerpt truncated to 160 chars
canonical: /blog/[slug]
openGraph: { type: "article", publishedTime, modifiedTime, images, tags }
twitter: { card: "summary_large_image" }

// Category page
title: "Category Name — Blog"
canonical: /blog/category/[slug]

// Tag page
title: "Tag Name — Blog"
canonical: /blog/tag/[slug]
```

### JSON-LD Structured Data

| Page | Schema Types |
|------|-------------|
| `/blog` | `Blog` (name, description, publisher) |
| `/blog/[slug]` | `BlogPosting` + `BreadcrumbList` |
| `/blog/category/[slug]` | `BreadcrumbList` |
| `/blog/tag/[slug]` | `BreadcrumbList` |

**BlogPosting schema includes:**
- `headline`, `description`, `url`
- `datePublished`, `dateModified`
- `wordCount`
- `author` (Person)
- `publisher` (Organization with logo)
- `image` (featured image or fallback)
- `articleSection` (primary category)
- `keywords` (comma-separated tags)
- `mainEntityOfPage`

**BreadcrumbList schema:** Home → Blog → Category (if applicable) → Post Title

### Visual Breadcrumbs

All blog pages have visual breadcrumb navigation with `aria-label="Breadcrumb"` and `aria-current="page"` on the current item.

### Pre-rendering (`generateStaticParams`)

The top 20 most recent posts are pre-rendered at build time as static HTML:

```typescript
export async function generateStaticParams() {
  const { data } = await getPosts(1, 20);
  return data.map((post) => ({ slug: post.slug }));
}
```

Remaining posts are rendered on-demand (SSR) and then cached via ISR.

### Dynamic Sitemap

`src/app/sitemap.ts` fetches all posts, categories, and tags from WordPress at request time:

| Entry Type | Priority | Change Frequency |
|------------|----------|-----------------|
| `/blog` | 0.8 | daily |
| `/blog/[slug]` (each post) | 0.7 | weekly |
| `/blog/category/[slug]` | 0.5 | weekly |
| `/blog/tag/[slug]` | 0.4 | weekly |

Falls back to just `/blog` if the WordPress API is unreachable.

### OG Fallback Image

If a post has no featured image, `https://zigron.com/logo.svg` is used as the OpenGraph image.

### Semantic HTML

- `<article>` wraps post content
- `<nav aria-label="Breadcrumb">` for breadcrumbs
- `<nav aria-label="Table of contents">` for TOC
- `<nav aria-label="Blog categories">` for category filter bar
- `<nav aria-label="Blog pagination">` for pagination
- `<time dateTime="2026-03-15T...">` for dates
- `<h1>` for page titles, proper heading hierarchy in content

---

## 8. Security Measures

### Content Sanitization

- **`sanitize-html`** strips all `<script>`, `<style>`, `<form>`, `<input>`, `<textarea>`, `<select>` tags
- Event handler attributes (`onerror`, `onload`, `onclick`, `onmouseover`) are blocked
- `javascript:` URLs in `<a href>` are replaced with `#`
- Only explicitly whitelisted tags and attributes pass through

### Security Headers (`next.config.ts`)

| Header | Value |
|--------|-------|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `X-Frame-Options` | `SAMEORIGIN` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |
| `X-DNS-Prefetch-Control` | `on` |

### Content Security Policy (`src/proxy.ts`)

```
default-src 'self';
script-src 'self' 'unsafe-inline';          ← Required by Next.js for inline scripts
style-src 'self' 'unsafe-inline';           ← Required for Tailwind
img-src 'self' data: blob: zigron.com cms.zigron.com images.unsplash.com;
font-src 'self' fonts.gstatic.com;
connect-src 'self' zigron.com cms.zigron.com;
frame-ancestors 'none';
upgrade-insecure-requests;
```

### API Security

- Slugs are encoded with `encodeURIComponent()` before use in API URLs
- 30-second timeout on all API requests via `AbortController`
- API base URL from environment variable (not hardcoded)
- All WordPress content sanitized before rendering (defense in depth)

---

## 9. Performance Optimizations

### Image Optimization

- All WordPress `<img>` tags converted to `next/image` with:
  - Explicit `width`/`height` to prevent layout shift (CLS)
  - Responsive `sizes="(max-width: 768px) 100vw, 720px"`
  - Vercel's image CDN handles format conversion (WebP/AVIF) and resizing
- Featured images use `fill` + `priority` on post pages
- Blog cards use `fill` with responsive `sizes`

### Caching Strategy

| Layer | TTL | Purpose |
|-------|-----|---------|
| ISR (`revalidate: 60`) | 60 seconds | Content freshness |
| Vercel Edge CDN | Automatic | Global distribution |
| `generateStaticParams` | Build-time | Top 20 posts pre-rendered |
| WordPress `_embed` | Per-request | Single API call includes author, media, terms |

### Code Splitting

- `WordPressContent` and `TableOfContents` are client components — only loaded on blog post pages
- Blog pages use server components for listing (no client JS for grid/pagination)

### DNS Prefetch

`src/app/layout.tsx` includes `<link rel="dns-prefetch" href="//cms.zigron.com" />` for faster API resolution.

---

## 10. Challenges Faced & Solutions

### Challenge 1: Broken Import — `@/i18n/routing`

**Problem:** `src/components/layout/Header.tsx` had `import { Link, usePathname } from "@/i18n/routing"` — this module doesn't exist in the project, causing build failure.

**Solution:** Removed the broken import. The file already had `Link` from `next/link` and `usePathname` from `next/navigation`. Also added missing `Zap` to lucide-react imports.

---

### Challenge 2: WordPress API Connectivity — "Just Loading"

**Problem:** Blog pages were loading indefinitely. The `fetch()` call to the WordPress API had no timeout, so if the API was slow or unreachable, the page would hang forever.

**Solution:** Added `AbortController` with a 30-second timeout:

```typescript
const controller = new AbortController();
const timeout = setTimeout(() => controller.abort(), 30000);
const res = await fetch(url, { signal: controller.signal });
clearTimeout(timeout);
```

Also confirmed the WordPress REST API was accessible via `curl https://zigron.com/wp-json/wp/v2/posts` — returned 200 with 172 posts and 7 categories.

---

### Challenge 3: `middleware.ts` → `proxy.ts` (Next.js 16 Breaking Change)

**Problem:** Created `src/middleware.ts` with CSP headers. Build warned: *"The middleware file convention is deprecated. Please use proxy instead."*

**Solution:** Renamed file to `src/proxy.ts` and changed export from `middleware` to `proxy`:

```typescript
// Before (Next.js 15)
export function middleware(request: NextRequest) { ... }

// After (Next.js 16)
export function proxy(request: NextRequest) { ... }
```

After rename, the build initially failed with *"Proxy is missing expected function export name"* — fixed by ensuring the function was named `proxy` (not `middleware`).

---

### Challenge 4: Regex `s` Flag Incompatible with ES2017

**Problem:** `WordPressContent.tsx` used `/pattern/gs` regex flag, but tsconfig targets ES2017. Build error: *"This regular expression flag is only available when targeting 'es2018' or later."*

**Solution:** Replaced `.` (with `s` flag) with `[\s\S]` (which matches any character including newlines without the `s` flag):

```typescript
// Before
/\[caption[^\]]*\](.*?)\[\/caption\]/gs

// After
/\[caption[^\]]*\]([\s\S]*?)\[\/caption\]/g
```

---

### Challenge 5: npm Audit Vulnerabilities

**Problem:** `npm audit` found 3 vulnerabilities:
1. Next.js DoS vulnerability (high)
2. `minimatch` ReDoS (medium)
3. `ajv` ReDoS (low)

**Solution:**
1. `npm audit fix` resolved 2 of 3 (minimatch + ajv)
2. `npm audit fix --force` upgraded Next.js to 16.1.6 (resolved the DoS vulnerability)

---

### Challenge 6: Sitemap Fetch Timeout During Build

**Problem:** The sitemap calls `getPosts(1, 100)` to include all posts. During `npm run build`, this timed out at 10 seconds (original timeout). Build still succeeded because of the `try/catch` fallback, but the sitemap only included static pages.

**Solution:** Increased timeout from 10s to 30s. Also ensured the `try/catch` fallback includes at least the `/blog` hub page so the sitemap is never completely empty for blog content.

---

### Challenge 7: `isomorphic-dompurify` + jsdom Crash on Vercel (CRITICAL)

**Problem:** After adding HTML sanitization with `isomorphic-dompurify`, all dynamically rendered blog posts (not pre-rendered by `generateStaticParams`) returned **500 errors** on Vercel:

```
Error: Failed to load external module jsdom-4cccfac9827ebcfe:
Error [ERR_REQUIRE_ESM]: require() of ES Module
/var/task/node_modules/@exodus/bytes/encoding-lite.js
from /var/task/node_modules/html-encoding-sniffer/lib/html-encoding-sniffer.js
not supported.
```

**Root Cause:** `isomorphic-dompurify` depends on `jsdom` for server-side DOM emulation. `jsdom` has a transitive dependency (`@exodus/bytes/encoding-lite.js`) that's an ES Module, but `html-encoding-sniffer` tries to `require()` it (CommonJS). This ESM/CJS incompatibility crashes Vercel's serverless runtime.

**Why only some posts failed:** The top 20 posts were pre-rendered at build time via `generateStaticParams` (HTML was generated during `npm run build` on a full Node.js environment where jsdom works fine). Posts beyond the top 20 were rendered at runtime on Vercel's serverless functions where jsdom fails.

**Solution:** Replaced `isomorphic-dompurify` with `sanitize-html` — a pure JavaScript library with zero DOM dependencies. Works identically on server and client:

```bash
npm uninstall isomorphic-dompurify
npm install sanitize-html @types/sanitize-html
```

```typescript
import sanitizeHtml from "sanitize-html";

const sanitized = sanitizeHtml(html, {
  allowedTags: sanitizeHtml.defaults.allowedTags.concat([
    "img", "iframe", "figure", "figcaption", "video", "source",
    "h1", "h2", "h3", "h4", "h5", "h6", "span",
  ]),
  allowedAttributes: {
    ...sanitizeHtml.defaults.allowedAttributes,
    img: ["src", "alt", "width", "height", "class", "loading"],
    iframe: ["src", "width", "height", "frameborder", "allow", "allowfullscreen", "title"],
    "*": ["id", "class"],
  },
});
```

**Lesson:** Avoid any library that depends on `jsdom` when deploying to Vercel serverless. Always verify with dynamically rendered pages, not just pre-rendered ones.

---

### Challenge 8: `next.config.ts` Edit Without Read

**Problem:** Attempted to use the `Edit` tool on `next.config.ts` without reading it first, resulting in a *"File has not been read yet"* error.

**Solution:** Always read a file before editing. Used `Read` then `Write` for the full rewrite.

---

## 11. Deployment Checklist

### Environment Variables (Vercel Dashboard)

| Variable | Value |
|----------|-------|
| `NEXT_PUBLIC_WORDPRESS_API_URL` | `https://zigron.com/wp-json/wp/v2` (or `https://cms.zigron.com/wp-json/wp/v2` after DNS migration) |

### WordPress Requirements

1. **REST API must be public** — `/wp-json/wp/v2/posts` must return data without authentication (default WordPress behavior; check that no security plugin blocks it)

2. **CORS must be enabled** — Add to your theme's `functions.php`:
   ```php
   add_action('init', function() {
       header("Access-Control-Allow-Origin: *");
   });
   ```
   Or install a CORS plugin (e.g., "WP CORS" or "Enable CORS").

3. **Featured images should be set** — Posts without featured images will show a gradient placeholder.

4. **`_embed` parameter support** — The REST API must support `?_embed` to include author, featured media, and terms in a single request (built-in to WordPress, no plugin needed).

### After Deploy Verification

- [ ] Visit `/blog` — should show post grid with category filter
- [ ] Click a post — should show full article with TOC
- [ ] Visit `/blog/category/[any-category-slug]` — should filter posts
- [ ] Visit `/blog/tag/[any-tag-slug]` — should filter posts
- [ ] Visit `/sitemap.xml` — should include all blog URLs
- [ ] Check page source — JSON-LD structured data should be present
- [ ] Publish a new post on WordPress — should appear on `/blog` within ~60 seconds
- [ ] Test a post that is NOT in the top 20 — should render without 500 error

---

## 12. WordPress Admin Requirements

### For Blog Authors

- **Publish posts normally** — use the standard WordPress editor (Gutenberg or Classic)
- **Set a featured image** — this becomes the hero image and OG image
- **Assign categories** — the first category becomes the "primary" category (used for breadcrumbs, related posts, article section in schema)
- **Add tags** — appear in the tag section below the article and in schema keywords
- **Write clear excerpts** — used as meta description (truncated to 160 characters)

### What Doesn't Need to Change

- WordPress theme doesn't matter (content is fetched via API, not rendered by WP)
- WordPress plugins can stay installed (as long as they don't block the REST API)
- Permalink structure doesn't matter (we use the `slug` field from the API)
- No special plugins needed for the headless setup

### Content Tips for SEO

- Use h2/h3/h4 headings in blog content — they become the auto-generated Table of Contents
- Write descriptive headings — they become anchor links (e.g., `/blog/post-slug#heading-text`)
- Set featured images — they appear in Google search results, social shares, and related posts cards
- Fill in the excerpt field — otherwise WordPress auto-generates one from the first paragraph

---

## Appendix: Package Dependencies Added

```json
{
  "dependencies": {
    "html-react-parser": "^5.2.17",
    "sanitize-html": "^2.x"
  },
  "devDependencies": {
    "@types/sanitize-html": "^2.x"
  }
}
```

**Packages tried and removed:**
- `dompurify` + `@types/dompurify` — requires browser DOM, `sanitize` is not a function during SSR
- `isomorphic-dompurify` — depends on `jsdom`, crashes Vercel serverless due to ESM/CJS incompatibility in transitive dependency `@exodus/bytes/encoding-lite.js`
