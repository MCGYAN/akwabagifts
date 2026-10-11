/**
 * Akwaaba Gifts — brand identity & site copy
 * Values still marked YOUR_* / 000 are placeholders awaiting real business details.
 */

export const SITE_NAME = 'Akwaaba Gifts';
export const SITE_SHORT_NAME = 'Akwaaba';
export const SITE_DESCRIPTION =
  'Handmade Ghanaian gifts, crafts, jewelry, home décor and souvenirs. Meaningful presents for every occasion, delivered across Ghana and beyond.';
export const SITE_TAGLINE = 'A Little Piece of Ghana.';
export const SITE_HERO_TAGLINE = 'Handmade with love in Ghana.';
export const SITE_LOCATION_TAGLINE = 'Handmade in Ghana';

export const HERO_HEADLINE = 'A Little Piece of Ghana.';
export const HERO_SUBHEADLINE =
  'Handmade gifts, crafts and keepsakes from Ghanaian makers. Find something meaningful for the people you love, or order on WhatsApp.';

export const SITE_URL = 'https://akwaabagifts.com';
export const CONTACT_EMAIL = 'hello@akwaabagifts.com';
export const CONTACT_PHONE = '0000000000';
export const CONTACT_PHONE_DISPLAY = '000 000 0000';
export const CONTACT_PHONE_SECONDARY = '';
export const CONTACT_PHONE_SECONDARY_DISPLAY = '';
export const WHATSAPP_URL = 'https://wa.me/000000000000';
export const BUSINESS_ADDRESS = 'YOUR_STREET_ADDRESS, Accra';
export const BUSINESS_CITY = 'Accra';
export const BUSINESS_COUNTRY = 'Ghana';

export const LOGO_VERSION = '3';
export const LOGO_MARK_PATH = `/logo-mark.png?v=${LOGO_VERSION}`;
export const LOGO_PATH = `/logo.png?v=${LOGO_VERSION}`;
export const HEADER_LOGO_PATH = `/logo-header.png?v=${LOGO_VERSION}`;
export const FOOTER_LOGO_PATH = `/logo-footer.png?v=${LOGO_VERSION}`;

export function resolveSiteLogo(cmsValue?: string | null): string {
  const v = (cmsValue ?? '').trim().toLowerCase();
  if (!v) return LOGO_PATH;
  return LOGO_PATH;
}

export const OG_IMAGE_PATH = '/og-image.png';
export const HERO_IMAGE_VERSION = '3';
export const HERO_IMAGE_PATH = `/hero.jpg?v=${HERO_IMAGE_VERSION}`;
export const HERO_MOBILE_IMAGE_PATH = `/hero-mobile.jpg?v=${HERO_IMAGE_VERSION}`;

export const HERO_SLIDES = [
  {
    src: HERO_IMAGE_PATH,
    mobileSrc: HERO_MOBILE_IMAGE_PATH,
    alt: 'Handmade Ghanaian gifts: woven Bolga baskets, kente cloth, beaded jewelry and carved wooden crafts',
  },
] as const;

export const SOCIAL_INSTAGRAM = '';
export const SOCIAL_FACEBOOK = '';
export const SOCIAL_TIKTOK = '';
export const SOCIAL_SNAPCHAT = '';

export const DEFAULT_PRODUCT_BRAND = SITE_NAME;
export const CATALOG_PDF_PREFIX = 'akwaaba-gifts-catalog';

export const FEATURED_BENEFITS = [
  { label: 'Handmade', title: 'Crafted By Ghanaian Makers' },
  { label: 'Meaningful', title: 'A Story Behind Every Gift' },
  { label: 'Wrapped', title: 'Gift-Ready, Beautifully Packed' },
  { label: 'Akwaaba', title: 'WhatsApp Us, We Reply Fast' },
] as const;

export const SHOP_CATEGORIES = [
  { label: 'Handmade Gifts', href: '/shop?category=handmade-gifts' },
  { label: 'Ghanaian Crafts', href: '/shop?category=ghanaian-crafts' },
  { label: 'Jewelry & Accessories', href: '/shop?category=jewelry-accessories' },
  { label: 'Home Décor', href: '/shop?category=home-decor' },
  { label: 'Souvenirs', href: '/shop?category=souvenirs' },
] as const;

export const GIFT_OCCASIONS = [
  {
    label: 'Birthdays',
    description: 'Colourful, personal gifts that make their day.',
    image: '/occasions/birthdays.jpg',
    href: '/shop?search=birthday',
  },
  {
    label: 'Weddings',
    description: 'Kente keepsakes and décor for the happy couple.',
    image: '/occasions/weddings.jpg',
    href: '/shop?search=wedding',
  },
  {
    label: 'Anniversaries',
    description: 'Handmade beads and brass to mark the years together.',
    image: '/occasions/anniversaries.jpg',
    href: '/shop?search=anniversary',
  },
  {
    label: 'Corporate Gifts',
    description: 'Proudly Ghanaian gifts for clients, teams and guests.',
    image: '/occasions/corporate.jpg',
    href: '/shop?search=corporate',
  },
] as const;

export const CUSTOMER_REVIEWS = [
  {
    text: 'I sent a kente gift box to my sister in London and she cried when she opened it. It truly felt like a little piece of home.',
    rating: 5,
  },
  {
    text: 'We ordered 40 corporate hampers for our partners. Beautifully wrapped, on time, and everyone asked where they came from.',
    rating: 5,
  },
  {
    text: 'The beaded bracelets are stunning, and I loved reading the little card about the artisan who made them.',
    rating: 5,
  },
  {
    text: 'Ordered on WhatsApp in the morning, picked up the same afternoon. Warm service, gorgeous Bolga basket.',
    rating: 5,
  },
] as const;

export const ABOUT_HEADLINE = 'Akwaaba. You Are Welcome Here.';
export const ABOUT_BODY =
  'Akwaaba Gifts celebrates Ghanaian creativity, culture and craftsmanship. We work with local makers to bring you woven baskets, beadwork, kente accessories, wooden crafts and handmade jewelry, each with a story worth sharing. Whether you are shopping for a loved one in Ghana or sending a little piece of home abroad, we make meaningful gifting easy.';

export const BRAND_COLORS = {
  green: '#174D3C',
  gold: '#D6A84F',
  cream: '#FFF8ED',
  terracotta: '#B85C38',
  charcoal: '#1F2A24',
  white: '#FFFFFF',
} as const;
