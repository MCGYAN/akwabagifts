# Asset Replacement Guide

All brand images in `/public` are neutral placeholders. Replace them with your own.

## Generated from one source

Put your logo on a **black background** at `/public/logo-source.png` (square, ~1000×1000px, emblem in the top ~60%, wordmark below), then run:

```bash
node scripts/process-brand-assets.mjs
```

This regenerates:

| File | Size | Purpose |
|------|------|---------|
| `/public/logo.png`, `/public/logo-header.png` | Source size | Main / header logo (transparent) |
| `/public/logo-footer.png` | Source size | Footer logo (dark wordmark recoloured gold) |
| `/public/logo-mark.png` | Emblem only | Circular mark |
| `/public/favicon.ico`, `/public/favicon.png` | 32×32px | Browser tab icon |
| `/public/apple-touch-icon.png` | 180×180px | iOS home screen |
| `/public/icon-192.png`, `/public/icon-512.png` | 192 / 512px | Android PWA |
| `/public/og-image.png` | 1200×630px | Social share preview |

Also copy `/public/favicon.ico` to `/app/favicon.ico`.

## Replace manually

| File | Size | Purpose |
|------|------|---------|
| `/public/hero.jpg` | 1920×1080px | Homepage hero |

## Tools

- [RealFaviconGenerator](https://realfavicongenerator.net)
- [OG Playground](https://og-playground.vercel.app)
- [Squoosh](https://squoosh.app) — image compression
