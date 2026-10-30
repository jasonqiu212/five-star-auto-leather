# SEO & Performance Improvements

> This document summarizes the changes made to improve the website’s SEO and performance, including recommendations from MediaOne.

<!-- TODO: summarize new on-page recommendations -->

## Search Engine Optimization (SEO)

- Set HTML lang to `en-SG`
- Add 404 page
- Set `http://www`, `http://`, and `https://` versions to 301 permanent redirects

## Performance

- Use [PageSpeed Insights](https://pagespeed.web.dev/) to measure performance on desktop and mobile
- Convert images to WebP with loading & priority optimizations
- Set `fetchpriority="high"` and `loading="eager"` on Largest Contentful Paint (LCP) images; set `loading="lazy"` on all below-fold images
- Add `widths` and `sizes` attributes to key images
  - Rationale: Browser can download the smallest image that fits the viewport, reducing bandwidth on mobile
- Replace the React-based `WhatsAppAffix.tsx` with a plain Astro component using the Astro `Icon` component and vanilla JS
  - Rationale: Eliminate the React + Iconify critical request chain (~74 KiB, ~557 ms) from every page load
- Move the `@tailwindcss/typography` plugin styles out of `global.css` into a new [`src/styles/blog.css`](../src/styles/blog.css) that is imported only by `BlogArticleLayout.astro`
  - Rationale: Prevent the typography stylesheet from loading on non-blog pages

## Others

- Use [UptimeRobot](https://uptimerobot.com/) to monitor websites around the clock to see if they are online
