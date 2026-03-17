---
name: deploy
description: Deploy the Zigron website to Vercel. Runs build validation, checks for errors, and deploys.
disable-model-invocation: true
---

# Deploy to Vercel

## Pre-Deploy Checks

1. **Run production build locally:**
   ```bash
   npm run build
   ```
   Must pass with zero errors. Warnings are OK.

2. **Check for uncommitted changes:**
   ```bash
   git status
   ```

3. **Verify environment variables are set on Vercel:**
   - `NEXT_PUBLIC_WORDPRESS_API_URL` = `https://zigron.com/wp-json/wp/v2`

4. **Test WordPress API is reachable:**
   ```bash
   curl -s -o /dev/null -w "%{http_code}" --max-time 10 "https://zigron.com/wp-json/wp/v2/posts?per_page=1"
   ```

## Deploy

5. **Push to main branch** (Vercel auto-deploys from main):
   ```bash
   git push origin main
   ```

   Or use Vercel CLI for preview deploy:
   ```bash
   npx vercel
   ```

## Post-Deploy Verification

6. **Check these URLs on production:**
   - `/blog` — post grid loads with category filter
   - `/blog/[any-recent-post-slug]` — full article with TOC
   - `/blog/[any-old-post-slug]` — dynamically rendered post (not pre-rendered)
   - `/blog/category/[any-category]` — filtered posts
   - `/sitemap.xml` — includes blog URLs
   - View page source — JSON-LD structured data present

7. **Check Vercel runtime logs for 500 errors:**
   - If blog posts return 500, likely a `jsdom` issue — see wp-blog skill
