# Akwaaba Gifts

> A Little Piece of Ghana. Handmade Ghanaian gifts, crafts, jewelry, home décor and souvenirs.

Built on Next.js 15 + Supabase with admin dashboard, POS, PWA support, Moolre payments (GHS) and Resend email. See [CUSTOMIZE.md](./CUSTOMIZE.md) for remaining setup.

## Getting Started

```bash
npm install
cp .env.example .env.local
# Fill in .env.local, then:
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Leave the Supabase variables blank to preview the storefront with the built-in mock catalog (`lib/mock-catalog.ts`).

## Environment Variables

Copy `.env.example` to `.env.local` and set your Supabase, Moolre, Resend, and app URL values.

## Brand

All store identity and copy lives in `lib/site-brand.ts` (every `YOUR_*` value is a placeholder).

Logos, icons, favicon and OG image are generated from one file:

```bash
# Replace public/logo-source.png (logo on a black background), then:
node scripts/process-brand-assets.mjs
```

Palette: Deep Forest Green `#174D3C` (primary), Warm Gold `#D6A84F` (accents), Cream `#FFF8ED` (background), Terracotta `#B85C38` (sparing warmth). Fonts: Playfair Display (headings), Inter (body). The Tailwind token `brand-plum` is the primary colour (now forest green); `brand-sage` / `brand-terracotta` are terracotta.

## Deployment

Set all environment variables on your host (e.g. Vercel), then:

```bash
npm run build
```

## License

See [LICENSE](./LICENSE).
