/**
 * Derby's Hair & Beauty, brand identity & site copy
 */

export const SITE_NAME = "Derby's Hair & Beauty";
export const SITE_SHORT_NAME = "Derby's";
export const SITE_DESCRIPTION =
  'Ready-to-wear human hair wigs in Madina, bob units, pixie cuts and curly styles that help you feel like yourself again, only softer, fuller and more confident.';
export const SITE_TAGLINE = 'Hair that feels like you.';
export const SITE_HERO_TAGLINE = 'Ready to wear. Ready to glow.';
export const SITE_LOCATION_TAGLINE = 'Madina near Ritz Hotel';

export const HERO_HEADLINE = 'Put it on. Feel like you again.';
export const HERO_SUBHEADLINE =
  'Soft human hair wigs, bobs, pixies and curls, ready to wear today. Order on WhatsApp or visit us in Madina.';

export const SITE_URL = 'https://derbyshairandbeauty.com';
export const CONTACT_EMAIL = 'hello@derbyshairandbeauty.com';
export const CONTACT_PHONE = '0249828766';
export const CONTACT_PHONE_DISPLAY = '024 982 8766';
export const CONTACT_PHONE_SECONDARY = '0245831685';
export const CONTACT_PHONE_SECONDARY_DISPLAY = '024 583 1685';
export const WHATSAPP_URL = 'https://wa.me/233249828766';
export const BUSINESS_ADDRESS = 'Madina, near Ritz Hotel, Accra';
export const BUSINESS_CITY = 'Madina, Accra';
export const BUSINESS_COUNTRY = 'Ghana';

export const LOGO_VERSION = '5';
export const LOGO_PATH = `/logo.png?v=${LOGO_VERSION}`;
export const HEADER_LOGO_PATH = `/logo-header.png?v=${LOGO_VERSION}`;
export const FOOTER_LOGO_PATH = `/logo-footer.png?v=${LOGO_VERSION}`;

export function resolveSiteLogo(cmsValue?: string | null): string {
  const v = (cmsValue ?? '').trim().toLowerCase();
  if (!v) return LOGO_PATH;
  return LOGO_PATH;
}

export const OG_IMAGE_PATH = '/og-image.png';
export const HERO_IMAGE_VERSION = '6';
export const HERO_IMAGE_PATH = `/hero.jpg?v=${HERO_IMAGE_VERSION}`;

export const HERO_SLIDES = [
  {
    src: `/hero.jpg?v=${HERO_IMAGE_VERSION}`,
    alt: "Woman with long, sleek ready-to-wear human hair from Derby's Hair & Beauty",
  },
] as const;

export const SOCIAL_INSTAGRAM = 'https://instagram.com/derbys_hair_and_beauty_';
export const SOCIAL_FACEBOOK = '';
export const SOCIAL_TIKTOK = '';
export const SOCIAL_SNAPCHAT = '';

export const DEFAULT_PRODUCT_BRAND = "Derby's Hair & Beauty";
export const CATALOG_PDF_PREFIX = 'derbys-hair-beauty-catalog';

export const FEATURED_BENEFITS = [
  { label: 'Feel', title: 'Soft Confidence, Every Morning' },
  { label: 'Wear', title: 'Put It On. Own The Day.' },
  { label: 'Near', title: 'Madina Pickup That Feels Easy' },
  { label: 'Reach', title: 'WhatsApp When You Need Us' },
] as const;

export const SHOP_CATEGORIES = [
  { label: 'Bob Units', href: '/shop?category=bob-units' },
  { label: 'Pixie Cuts', href: '/shop?category=pixie-cuts' },
  { label: 'Curly Wigs', href: '/shop?category=curly-wigs' },
  { label: 'Ready-to-Wear', href: '/shop?category=ready-to-wear' },
] as const;

export const CUSTOMER_REVIEWS = [
  {
    text: 'I looked in the mirror and finally felt like me again, soft, polished, and ready. People keep asking who did my hair.',
    rating: 5,
  },
  {
    text: 'WhatsApped in the morning, picked up in Madina by evening. The bob sits so naturally I forget I am wearing it.',
    rating: 5,
  },
  {
    text: 'My curly unit made me feel beautiful without trying. Light on my head, heavy on compliments.',
    rating: 5,
  },
  {
    text: 'The pixie made me feel fierce and free. From the first call to walking out, zero stress, all glow.',
    rating: 5,
  },
] as const;

export const ABOUT_HEADLINE = 'Beauty That Starts With How You Feel';
export const ABOUT_BODY =
  "In Madina near Ritz Hotel, Derby's Hair & Beauty helps women step into ready-to-wear human hair that feels soft, natural and unmistakably theirs. Bob units, pixie cuts, curly wigs. Order on WhatsApp or walk in. You are not just buying hair. You are choosing the version of you that walks in glowing.";

export const BRAND_COLORS = {
  plum: '#4A183D',
  gold: '#D8B06A',
  ivory: '#FFF8F2',
  charcoal: '#1E1E1E',
  blush: '#E8C7CF',
  white: '#FFFFFF',
} as const;
