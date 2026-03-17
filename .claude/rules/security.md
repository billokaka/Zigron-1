---
paths:
  - "src/proxy.ts"
  - "next.config.ts"
  - "src/components/CookieConsent.tsx"
  - "src/app/layout.tsx"
---

# Security Rules

## CSP (`src/proxy.ts`)
- `unsafe-inline` for script-src and style-src is REQUIRED by Next.js — do not remove
- When adding external domains, add to both CSP and `next.config.ts` remotePatterns
- Allowed image sources: self, data:, blob:, zigron.com, cms.zigron.com, images.unsplash.com
- `frame-ancestors 'none'` — no iframing allowed
- `upgrade-insecure-requests` — force HTTPS

## Security Headers (`next.config.ts`)
- HSTS: 2-year max-age with includeSubDomains and preload
- X-Frame-Options: SAMEORIGIN (backup for CSP frame-ancestors)
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera, microphone, geolocation disabled

## Content Sanitization
- ALL external HTML (WordPress) must be sanitized before rendering
- Use `sanitize-html` (pure JS) — NOT dompurify/jsdom variants
- Whitelist approach: only explicitly allowed tags/attributes pass through

## Environment
- Never hardcode API URLs, secrets, or keys
- `.env.local` is gitignored — store `NEXT_PUBLIC_WORDPRESS_API_URL` there
- WordPress API URL is `NEXT_PUBLIC_` (exposed to client) — this is intentional as the WP REST API is public
