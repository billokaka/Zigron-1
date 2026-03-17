---
name: wp-blog
description: WordPress blog troubleshooting, content debugging, and API verification. Use when blog posts aren't loading, showing errors, or content looks wrong.
---

# WordPress Blog Troubleshooting

## Quick Diagnostics

1. **Test API connectivity:**
   ```bash
   curl -s -o /dev/null -w "%{http_code}" --max-time 10 "$NEXT_PUBLIC_WORDPRESS_API_URL/posts?per_page=1"
   ```
   Expected: `200`

2. **Check post count:**
   ```bash
   curl -s -I --max-time 10 "$NEXT_PUBLIC_WORDPRESS_API_URL/posts?per_page=1" | grep X-WP-Total
   ```

3. **Test specific post by slug:**
   ```bash
   curl -s --max-time 10 "$NEXT_PUBLIC_WORDPRESS_API_URL/posts?slug=$ARGUMENTS&_embed" | python3 -c "import sys,json; d=json.load(sys.stdin); print(f'Found: {len(d)} posts') if d else print('Not found')"
   ```

4. **Check categories:**
   ```bash
   curl -s --max-time 10 "$NEXT_PUBLIC_WORDPRESS_API_URL/categories?per_page=100"
   ```

## Common Issues

### 500 Errors on Vercel
- Check if using `jsdom`-dependent libraries (dompurify, isomorphic-dompurify)
- Must use `sanitize-html` instead (pure JS, no DOM)
- Only affects dynamically rendered posts (not pre-rendered by generateStaticParams)

### Posts Not Appearing
- ISR revalidation is 60 seconds — wait and refresh
- Check if WordPress REST API is publicly accessible (no auth plugin blocking it)
- Check CORS headers if fetching from client

### Content Rendering Issues
- Check `sanitize-html` allowedTags — may be stripping needed tags
- WordPress shortcodes should be preprocessed in `preprocessShortcodes()`
- Images need `zigron.com` and `cms.zigron.com` in next.config.ts remotePatterns

### Build Timeouts
- Sitemap fetches up to 100 posts — needs 30s timeout
- generateStaticParams fetches 20 posts — also needs timeout
- Both have try/catch fallbacks

## Key Files
- API client: `src/lib/wordpress.ts`
- Content renderer: `src/components/blog/WordPressContent.tsx`
- Blog pages: `src/app/blog/`
- Config: `next.config.ts` (image domains), `src/proxy.ts` (CSP)
- Env: `.env.local` (`NEXT_PUBLIC_WORDPRESS_API_URL`)
