# Customization Checklist

Complete these steps to make this project fully yours.

## Identity

- [ ] Edit `lib/site-brand.ts` — replace all `YOUR_*` placeholders (name, copy, contact, socials, benefits, reviews, about)
- [ ] Update `SHOP_CATEGORIES` in `lib/site-brand.ts` and the sample data in `lib/mock-catalog.ts` to match your real categories
- [ ] Update `BRAND_COLORS` in `lib/site-brand.ts`, then mirror in `app/globals.css`, `tailwind.config.js`, `public/manifest.json` and `themeColor` in `app/layout.tsx`
- [ ] Add your own keywords in `SEO_KEYWORDS` (`lib/seo.ts`)
- [ ] Replace `yourdomain.com` in `.env.local` and deployment env
- [ ] Update `package.json` name, author, homepage, repository URL

## Page copy

The copy is generic placeholder text. Review and rewrite:

- [ ] `app/(store)/page.tsx` — home page section headings
- [ ] `app/(store)/about/page.tsx` and `components/WhoWeAreSection.tsx`
- [ ] `app/(store)/contact/page.tsx` — FAQ answers
- [ ] `app/(store)/shipping/page.tsx` — delivery zones, prices and free-shipping threshold
- [ ] `app/(store)/faqs/page.tsx`

## Assets (see `/public/ASSETS_GUIDE.md`)

- [ ] Replace `/public/logo-source.png` with your logo on a black background, then run `node scripts/process-brand-assets.mjs` to regenerate logos, icons, favicon and OG image
- [ ] Replace `/public/hero.jpg` (1920×1080) and bump `HERO_IMAGE_VERSION` in `lib/site-brand.ts`
- [ ] Copy `/public/favicon.ico` over `/app/favicon.ico`
- [ ] Update `components/Logo.tsx` if using a custom logo component

## Configuration

- [ ] Fill in all values in `.env.local` (copy from `.env.example`)
- [ ] Update `public/manifest.json` with your app name and theme colors
- [ ] Create a Supabase project; set `NEXT_PUBLIC_SUPABASE_*` and `SUPABASE_SERVICE_ROLE_KEY`
- [ ] Configure Moolre payment keys (`MOOLRE_*`)
- [ ] Configure Resend (`RESEND_API_KEY`, `EMAIL_FROM`, `ADMIN_EMAIL`)
- [ ] Set `NEXT_PUBLIC_APP_URL` to your production URL
- [ ] Optional: `NEXT_PUBLIC_GA_MEASUREMENT_ID`, reCAPTCHA keys

## Legal & content

- [ ] Replace `/LICENSE` with your chosen license
- [ ] Review `app/(store)/terms/page.tsx` and `privacy/page.tsx`
- [ ] Update CMS settings in Supabase or via admin when live

## SEO

- [ ] Update `public/robots.txt` sitemap URL
- [ ] Confirm metadata in `app/layout.tsx` and `lib/seo.ts`

## Deployment

- [ ] Set env vars on Vercel/Netlify
- [ ] Connect your Git repo (`YOUR_USERNAME/YOUR_REPO_NAME`)
- [ ] Configure custom domain

## Git remote (optional)

```bash
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```
