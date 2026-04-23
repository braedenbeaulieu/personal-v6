---
title: Building a Portfolio with Astro 5 and Tailwind CSS v4
description: How I migrated from a Nuxt-based portfolio to Astro 5 and hit a 100 Lighthouse performance score — and what changed with Tailwind v4's new approach.
pubDate: 2025-04-20
tags: [Astro, Tailwind CSS, Performance, Portfolio]
draft: false
---

## Why Astro?

I've been using Nuxt for years and genuinely love it. But for a portfolio — a mostly static, content-light site — it's overkill. The hydration overhead, the JS bundle, the SSR complexity: none of it serves a site that's mostly text, a few images, and some links.

Astro's island architecture means you ship zero JavaScript by default. Every component renders at build time to pure HTML. The only JS that ships is what you deliberately opt in to.

## Tailwind CSS v4

The new v4 approach is a significant departure. Gone is `tailwind.config.js`. Gone are the three `@tailwind` directives. Instead:

```css
@import "tailwindcss";

@theme {
  --color-accent: #f97316;
  --font-sans: 'Inter Variable', sans-serif;
}
```

That `@theme` block defines CSS custom properties that Tailwind v4 automatically turns into utility classes. `--color-accent` becomes `bg-accent`, `text-accent`, `border-accent`. No config file, no plugin, just CSS.

## Performance Results

With self-hosted Inter Variable, zero client JS, and Cloudflare Pages edge delivery:

- **Performance**: 100
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

The keys are boring: explicit image dimensions (prevents CLS), `font-display: swap`, `rel="preload"` for the primary font file, and letting Astro's Vite build shake out unused CSS classes.

## Cloudflare Pages

The `_headers` file in `/public` is all you need for proper cache control. Astro hashes all asset filenames at build time, so fonts and CSS can be cached for a year with `immutable`:

```
/_astro/*
  Cache-Control: public, max-age=31536000, immutable
```

Combine that with Cloudflare's global CDN and HTTP/3, and first-byte times are consistently under 200ms.
