# ZIGRON — Website Enhancement

## Requirement Document
**WordPress Blog Integration & Hosting Migration**

| Field | Detail |
|---|---|
| **Document Version** | 1.0 |
| **Date** | March 13, 2026 |
| **Prepared For** | Zigron Development Team |
| **Status** | Ready for Implementation |
| **Priority** | High – Same-Day Deployment |

---

## 1. Project Overview

Zigron currently operates two separate website instances:

- A **new production website** built with Next.js (TypeScript/TSX), serving as the primary company website.
- An **older legacy website** built on WordPress with custom theme/code, hosted on AWS (EC2/Lightsail).

**Objective:** Integrate the blog content from the legacy WordPress site into the current Next.js website, and connect WordPress as a headless CMS to power the blog section of the new site. This must be completed and deployed today (March 13, 2026).

---

## 2. Current Architecture

### 2.1 New Website (Production)

- **Framework:** Next.js with TypeScript (TSX)
- **Current Status:** Live and serving all pages except blog
- **Hosting:** [Confirm current host – Vercel / AWS / other]

### 2.2 Legacy WordPress Site

- **Platform:** WordPress with custom-coded theme (not a standard theme)
- **Hosting:** AWS (confirm instance type – EC2, Lightsail, or Elastic Beanstalk)
- **Content:** Contains all existing blog posts, categories, tags, media/images, and author data
- **Database:** MySQL (standard WordPress database)
- **Status:** Currently running on AWS; blog content is the primary asset to preserve

---

## 3. Scope of Work

### 3.1 Enable WordPress REST API (Headless Mode)

The existing WordPress installation must be configured to serve as a headless CMS, exposing blog data via API while the front-end rendering is handled entirely by the Next.js application.

1. Verify the WordPress REST API is enabled and accessible (default endpoint: `/wp-json/wp/v2/`).
2. Ensure all required endpoints are exposed: posts, categories, tags, media, authors, pages (if needed).
3. Install and configure the following plugins (if not already present):
   - **ACF to REST API** – if any Advanced Custom Fields are used on blog posts.
   - **WP REST Cache** – to cache API responses and reduce load on the WordPress server.
   - **Application Passwords or JWT Authentication** – if any write/authenticated endpoints are needed.
4. Set up proper CORS headers on WordPress to allow requests from the Next.js domain.
5. Restrict or disable the WordPress front-end theme rendering (optional but recommended to avoid confusion and reduce attack surface).

### 3.2 Build Blog Section in Next.js

Create a full blog experience within the existing Next.js application that fetches all content from WordPress via the REST API.

1. Create an API utility/service layer in Next.js for WordPress API calls (e.g., `lib/wordpress.ts`).
2. Implement the following pages and components:
   - **Blog Listing Page (`/blog`)** – paginated list of all posts with title, excerpt, featured image, date, and category.
   - **Single Blog Post Page (`/blog/[slug]`)** – full post content with proper HTML rendering, images, author info, published date, and related posts.
   - **Category Filter Page (`/blog/category/[slug]`)** – filtered view of posts by category.
   - **Tag Filter Page (`/blog/tag/[slug]`)** – filtered view of posts by tag (optional, confirm if needed).
3. Use Next.js **ISR (Incremental Static Regeneration)** or SSR for blog pages to ensure fresh content while maintaining performance.
4. Implement proper SEO metadata (title, description, Open Graph tags, canonical URLs) for all blog pages.
5. Render WordPress HTML content safely, preserving formatting, embedded media, and code blocks.
6. Ensure all images from WordPress are properly loaded (either proxied or served directly from the WordPress media URL).
7. Match the blog UI/UX to Zigron's current website design system (fonts, colors, layout, navigation).

### 3.3 WordPress Hosting – Keep on AWS

The legacy WordPress instance must remain hosted on AWS since it acts as the backend CMS. Ensure it is stable, secure, and optimized for API-only usage.

1. Confirm the AWS instance is healthy (disk space, memory, PHP version, MySQL version).
2. Set up or verify a proper domain/subdomain for API access (e.g., `cms.zigron.com` or `blog-api.zigron.com`).
3. Install an SSL certificate (Let's Encrypt or AWS Certificate Manager) for HTTPS on the WordPress API domain.
4. Harden WordPress security: disable XML-RPC, limit login attempts, update WordPress core/plugins/themes, remove unused plugins.
5. Set up automated daily backups for the WordPress database and `wp-content` directory.
6. Configure server-level caching (e.g., Nginx FastCGI cache or Varnish) for API responses.

### 3.4 DNS & Domain Configuration

1. Point a subdomain (e.g., `cms.zigron.com`) to the AWS WordPress instance.
2. Ensure the main Zigron domain continues pointing to the Next.js deployment.
3. Update any necessary DNS records (A record, CNAME) and verify propagation.

### 3.5 Deployment & Go-Live (Today)

This integration must be deployed and live by end of day, March 13, 2026.

1. Deploy the updated Next.js application with the blog section.
2. Verify all blog pages render correctly in production.
3. Test API connectivity between Next.js and WordPress.
4. Check all blog images and media load properly.
5. Validate SEO tags and Open Graph metadata on blog pages.
6. Test on mobile and desktop browsers.
7. Monitor WordPress server performance under production traffic.

---

## 4. Task Breakdown & Priority

| # | Task | Priority | Status |
|---|---|---|---|
| 1 | Verify/enable WordPress REST API endpoints | 🔴 Critical | To Do |
| 2 | Configure CORS headers on WordPress for Next.js domain | 🔴 Critical | To Do |
| 3 | Set up subdomain (cms.zigron.com) pointing to AWS | 🔴 Critical | To Do |
| 4 | Install SSL on WordPress subdomain | 🔴 Critical | To Do |
| 5 | Create WordPress API service layer in Next.js (`lib/wordpress.ts`) | 🔴 Critical | To Do |
| 6 | Build blog listing page (`/blog`) with pagination | 🔴 Critical | To Do |
| 7 | Build single post page (`/blog/[slug]`) | 🔴 Critical | To Do |
| 8 | Build category filter page (`/blog/category/[slug]`) | 🟠 High | To Do |
| 9 | Implement ISR/SSR for blog pages | 🟠 High | To Do |
| 10 | Add SEO metadata and Open Graph tags | 🟠 High | To Do |
| 11 | Style blog pages to match Zigron design system | 🟠 High | To Do |
| 12 | Harden WordPress security (disable XML-RPC, updates, etc.) | 🟡 Medium | To Do |
| 13 | Set up WordPress backups on AWS | 🟡 Medium | To Do |
| 14 | Add server-level caching on WordPress | 🟡 Medium | To Do |
| 15 | Full QA – cross-browser, mobile, images, links | 🔴 Critical | To Do |
| 16 | Deploy to production and verify | 🔴 Critical | To Do |

---

## 5. Technical Notes for the Developer

### 5.1 WordPress API Endpoints to Use

- `GET /wp-json/wp/v2/posts` – Fetch all posts (supports pagination via `?page=` and `?per_page=` params)
- `GET /wp-json/wp/v2/posts?slug={slug}` – Fetch single post by slug
- `GET /wp-json/wp/v2/categories` – Fetch all categories
- `GET /wp-json/wp/v2/tags` – Fetch all tags
- `GET /wp-json/wp/v2/media/{id}` – Fetch media/image details
- `GET /wp-json/wp/v2/users/{id}` – Fetch author info
- Use `?_embed` query param to include featured image and author data inline with posts

### 5.2 Next.js Data Fetching Strategy

- Use ISR with a revalidation period (e.g., `revalidate: 60` seconds) so new blog posts appear within a minute without full rebuilds.
- Use `generateStaticParams` for pre-rendering popular/recent posts at build time.
- Handle WordPress HTML content rendering carefully – use `dangerouslySetInnerHTML` with proper sanitization or a library like `html-react-parser`.
- Store the WordPress API base URL in environment variables (e.g., `NEXT_PUBLIC_WORDPRESS_API_URL`).

### 5.3 Image Handling

- WordPress media URLs will point to the AWS-hosted WordPress instance. Ensure these URLs are accessible from the public internet.
- Add the WordPress domain to `next.config.js` under `images.remotePatterns` for Next.js Image component optimization.
- Consider using `next/image` with the WordPress source for automatic optimization and lazy loading.

### 5.4 Environment Variables Required

```
NEXT_PUBLIC_WORDPRESS_API_URL=https://cms.zigron.com/wp-json/wp/v2
WORDPRESS_AUTH_TOKEN=<if authenticated endpoints are needed>
```

---

## 6. Acceptance Criteria

The implementation will be considered complete when all of the following are true:

1. The `/blog` page on the Next.js site displays all WordPress blog posts with correct titles, excerpts, images, and dates.
2. Clicking any blog post navigates to `/blog/[slug]` and renders the full post content correctly.
3. Blog category filtering works at `/blog/category/[slug]`.
4. All images from WordPress render properly on the Next.js site.
5. New posts published on WordPress appear on the Next.js blog within the ISR revalidation window.
6. The blog pages are fully responsive and match the existing Zigron website design.
7. SEO metadata (title, description, OG tags) is present on all blog pages.
8. The WordPress API subdomain is accessible over HTTPS.
9. The site is deployed and live in production.

---

## 7. Assumptions & Open Questions

### 7.1 Assumptions

- The developer has access to the AWS console and the WordPress admin dashboard.
- The developer has access to the Next.js codebase repository and deployment pipeline.
- The WordPress REST API has not been intentionally disabled on the legacy site.
- The existing WordPress blog posts do not rely on plugins that generate front-end-only dynamic content (e.g., shortcodes that won't render via API).

### 7.2 Open Questions (Confirm Before Starting)

1. What is the exact AWS instance type and region for the WordPress site?
2. Where is the Next.js site currently hosted (Vercel, AWS, Netlify, other)?
3. What subdomain should be used for the WordPress API? (Suggested: `cms.zigron.com`)
4. Are there any WordPress shortcodes used in blog posts that need special handling?
5. Is the tag filter page (`/blog/tag/[slug]`) needed for launch, or can it be added later?
6. Are there any authenticated/private blog posts, or is everything public?
7. Is there an existing CI/CD pipeline for the Next.js deployment?

---

## 8. Timeline

**Target:** Complete integration and deploy to production by end of day, March 13, 2026.

| Phase | Tasks | Duration (Est.) |
|---|---|---|
| **Phase 1: Backend Setup** | WordPress API config, CORS, subdomain, SSL | 1–2 hours |
| **Phase 2: Next.js Development** | API layer, blog pages, styling, SEO | 3–4 hours |
| **Phase 3: QA & Deploy** | Testing, bug fixes, production deployment | 1–2 hours |

---

*End of Document*
