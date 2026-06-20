# Performance & SEO Updates

Summary of changes made across commits `1c10aa9` – `666f54e` (Jun 17–20 2026).

---

## SEO

### Set HTML lang to `en-SG`
**Commit:** `1c10aa9`

Set `lang="en-SG"` on the `<html>` element in [`BaseLayout.astro`](../src/layouts/BaseLayout.astro) to declare the page language for search engines and screen readers.

### Add 404 page
**Commit:** `b8921d1`

Added [`src/pages/404.astro`](../src/pages/404.astro) so broken URLs return a proper 404 response instead of a blank/redirect, which prevents search engines from indexing dead links.

### Improve color contrast
**Commit:** `2146467`

Changed the "Get in Touch" CTA button on the homepage from `bg-red-500` to `bg-red-700` to meet WCAG AA contrast requirements against white text.

---

## Performance

### Convert images to WebP with loading & priority optimizations
**Commit:** `1dbd8a6`

- Replaced raw `<img>` tags with Astro's `<Image>` component across all pages so images are automatically served as WebP.
- Used `getImage()` for the business-in-numbers parallax background (quality 90).
- Set `fetchpriority="high"` and `loading="eager"` on LCP images (hero seat, hero backgrounds, blog article cover).
- Set `loading="lazy"` on all below-fold images (What We Do cards, van, story images, blog cards).

**Files changed:** `HeroTitle.astro`, `Logo.astro`, `ArticleCard.astro`, `BlogArticleLayout.astro`, `index.astro`, `our-story.astro`, `blog/index.astro`, `contact-us.astro`, `faq.astro`

### Add responsive images
**Commit:** `3ff44b3`

Added `widths` and `sizes` attributes to key images (`HeroTitle`, `Logo`, homepage hero/van/story images) so the browser downloads the smallest image that fits the viewport, reducing bandwidth on mobile.

### Convert WhatsApp affix from React to plain Astro
**Commits:** `9dfcdef`, `0fa9937`, `3f7123a`

Replaced the React-based `WhatsAppAffix.tsx` with a plain Astro component (`WhatsAppAffix.astro`) using the `astro-icon` `Icon` component and vanilla JS. This eliminates the React + Iconify critical request chain (~74 KiB, ~557 ms) from every page load.

The `@astrojs/react` dependency was removed; `iconify-json` was re-added to support `astro-icon`.

**Files changed:** `WhatsAppAffix.tsx` (deleted), `WhatsAppAffix.astro` (added), `BaseLayout.astro`, `package.json`, `pnpm-lock.yaml`

### Scope Tailwind Typography to blog pages only
**Commit:** `666f54e`

Moved the `@tailwindcss/typography` plugin styles out of `global.css` into a new [`src/styles/blog.css`](../src/styles/blog.css) that is imported only by `BlogArticleLayout.astro`. This prevents the typography stylesheet from loading on non-blog pages.
