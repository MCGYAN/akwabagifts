import sharp from 'sharp';
import fs from 'fs';

// Source: full-colour Akwaaba Gifts logo on a transparent background.
const src = 'public/logo-source.png';
if (!fs.existsSync(src)) {
  console.error('Missing public/logo-source.png');
  process.exit(1);
}

const CREAM = { r: 255, g: 248, b: 237 };
const GOLD = { r: 214, g: 168, b: 79 };

const logo = await sharp(src).ensureAlpha().trim({ threshold: 1 }).png().toBuffer();
const { width: w, height: h } = await sharp(logo).metadata();

// Header / main: full-colour logo for light (cream) backgrounds
await sharp(logo).resize({ width: 1200, withoutEnlargement: true }).png().toFile('public/logo.png');
await sharp(logo).resize({ width: 1200, withoutEnlargement: true }).png().toFile('public/logo-header.png');

// Footer: purple wordmark → cream so it reads on forest green; gold and kente untouched
const { data, info } = await sharp(logo).raw().toBuffer({ resolveWithObject: true });
const footerData = Buffer.from(data);
for (let i = 0; i < footerData.length; i += 4) {
  if (footerData[i + 3] < 8) continue;
  const r = footerData[i], g = footerData[i + 1], b = footerData[i + 2];
  if (r > g + 12 && b > g + 12) {
    footerData[i] = CREAM.r;
    footerData[i + 1] = CREAM.g;
    footerData[i + 2] = CREAM.b;
  }
}
const footerLogo = await sharp(footerData, {
  raw: { width: info.width, height: info.height, channels: 4 },
}).png().toBuffer();
await sharp(footerLogo).resize({ width: 1200, withoutEnlargement: true }).png().toFile('public/logo-footer.png');

// Monogram: the calligraphic "A" with its gold swoosh. Crop box is in logo-source pixels
// and must be updated if the source logo is replaced.
const MARK_CROP = { left: 0, top: 160, width: 440, height: 400 };
const scale = w / 1587;
const markCrop = {
  left: Math.round(MARK_CROP.left * scale),
  top: Math.round(MARK_CROP.top * scale),
  width: Math.min(Math.round(MARK_CROP.width * scale), w),
  height: Math.min(Math.round(MARK_CROP.height * scale), h),
};
const mark = await sharp(logo).extract(markCrop).trim({ threshold: 1 }).png().toBuffer();
await sharp(mark).png().toFile('public/logo-mark.png');

async function icon(size, file, padding = 0.16) {
  const inner = Math.round(size * (1 - padding * 2));
  const markResized = await sharp(mark)
    .resize(inner, inner, { fit: 'contain', background: { ...CREAM, alpha: 0 } })
    .png()
    .toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: { ...CREAM, alpha: 1 } } })
    .composite([{ input: markResized, gravity: 'center' }])
    .png()
    .toFile(file);
}

await icon(192, 'public/icon-192.png');
await icon(512, 'public/icon-512.png', 0.2);
await icon(180, 'public/apple-touch-icon.png');
await icon(32, 'public/favicon.png', 0.06);
fs.copyFileSync('public/favicon.png', 'public/favicon.ico');

// OG: full-colour logo on cream with a gold rule
const ogLogo = await sharp(logo)
  .resize(920, 460, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();
const goldRule = await sharp({
  create: { width: 1200, height: 10, channels: 4, background: { ...GOLD, alpha: 1 } },
}).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: { ...CREAM, alpha: 1 } } })
  .composite([
    { input: ogLogo, top: 85, left: 140 },
    { input: goldRule, top: 620, left: 0 },
  ])
  .flatten({ background: CREAM })
  .png()
  .toFile('public/og-image.png');

console.log('Brand assets ready', { w, h });
