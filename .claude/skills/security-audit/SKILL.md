---
name: security-audit
description: Run a security audit on the Zigron website. Checks CSP, headers, sanitization, dependencies, and common vulnerabilities.
disable-model-invocation: true
context: fork
agent: Explore
---

# Security Audit Checklist

Perform a thorough security review of the Zigron Next.js website.

## 1. Content Security Policy
- Read `src/proxy.ts`
- Verify CSP directives are not overly permissive
- Check that all external domains in CSP match what the site actually uses
- Note: `unsafe-inline` is required by Next.js — flag it but don't change it

## 2. Security Headers
- Read `next.config.ts`
- Verify HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- Check for missing headers (COEP, COOP, CORP)

## 3. WordPress Content Sanitization
- Read `src/components/blog/WordPressContent.tsx`
- Verify `sanitize-html` is used (NOT dompurify/jsdom variants)
- Check allowedTags and allowedAttributes are not too permissive
- Verify `javascript:` URLs are blocked in links
- Check for XSS vectors in HTML parsing

## 4. API Security
- Read `src/lib/wordpress.ts`
- Check for SSRF risks in API URL handling
- Verify `encodeURIComponent()` on all user-provided slugs
- Check timeout is set (should be 30s)
- Verify error handling doesn't leak internal details

## 5. Dependencies
- Run `npm audit` and report vulnerabilities
- Check for known vulnerable packages

## 6. Environment
- Verify `.env.local` is in `.gitignore`
- Check no secrets are hardcoded in source code
- Verify no API keys or credentials in committed files

## 7. Input Validation
- Check dynamic route parameters ([slug]) are validated
- Check search params are parsed safely
- Look for injection vectors in any form handling

Report findings as: CRITICAL / HIGH / MEDIUM / LOW with specific file:line references.
