/**
 * Frontend-only mock catalog, Akwaaba Gifts sample products.
 * Replace with live data once NEXT_PUBLIC_SUPABASE_* env vars are set.
 */

import { isSupabaseConfigured } from '@/lib/supabase';

export function isMockCatalogMode(): boolean {
  return !isSupabaseConfigured();
}

export const MOCK_SHOP_CATEGORIES = [
  {
    id: 'handmade-gifts',
    label: 'Handmade Gifts',
    href: '/shop?category=handmade-gifts',
    image: '/categories/handmade-gifts.jpg',
  },
  {
    id: 'ghanaian-crafts',
    label: 'Ghanaian Crafts',
    href: '/shop?category=ghanaian-crafts',
    image: '/categories/ghanaian-crafts.jpg',
  },
  {
    id: 'jewelry-accessories',
    label: 'Jewelry & Accessories',
    href: '/shop?category=jewelry-accessories',
    image: '/categories/jewelry-accessories.jpg',
  },
  {
    id: 'home-decor',
    label: 'Home Décor',
    href: '/shop?category=home-decor',
    image: '/categories/home-decor.jpg',
  },
  {
    id: 'souvenirs',
    label: 'Souvenirs',
    href: '/shop?category=souvenirs',
    image: '/categories/souvenirs.jpg',
  },
] as const;

export type MockCategory = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image_url: string;
  parent_id: string | null;
  position: number;
};

export const MOCK_CATEGORIES: MockCategory[] = [
  {
    id: 'cat-handmade',
    name: 'Handmade Gifts',
    slug: 'handmade-gifts',
    description: 'Thoughtful, gift-ready pieces made by hand, wrapped and ready to give.',
    image_url: '/categories/handmade-gifts.jpg',
    parent_id: null,
    position: 1,
  },
  {
    id: 'cat-crafts',
    name: 'Ghanaian Crafts',
    slug: 'ghanaian-crafts',
    description: 'Bolga baskets, carved wood and woven treasures from Ghanaian artisans.',
    image_url: '/categories/ghanaian-crafts.jpg',
    parent_id: null,
    position: 2,
  },
  {
    id: 'cat-jewelry',
    name: 'Jewelry & Accessories',
    slug: 'jewelry-accessories',
    description: 'Krobo beads, brass pieces and kente accessories with a story.',
    image_url: '/categories/jewelry-accessories.jpg',
    parent_id: null,
    position: 3,
  },
  {
    id: 'cat-home',
    name: 'Home Décor',
    slug: 'home-decor',
    description: 'Bring warmth and Ghanaian craft into every room.',
    image_url: '/categories/home-decor.jpg',
    parent_id: null,
    position: 4,
  },
  {
    id: 'cat-souvenirs',
    name: 'Souvenirs',
    slug: 'souvenirs',
    description: 'Little pieces of Ghana to take home or send abroad.',
    image_url: '/categories/souvenirs.jpg',
    parent_id: null,
    position: 5,
  },
];

export type MockProduct = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  compare_at_price?: number;
  category: string;
  categorySlug: string;
  image: string;
  images?: string[];
  tagline?: string;
  occasions?: string[];
  rating_avg: number;
  quantity: number;
  moq: number;
  featured?: boolean;
};

const MOCK_PRODUCTS: MockProduct[] = [
  {
    id: 'mock-ankara-pouches',
    slug: 'ankara-drawstring-gift-pouches',
    name: 'Ankara Drawstring Gift Pouches',
    description:
      'A set of six drawstring pouches sewn from vibrant Ankara wax-print fabric. Perfect for wrapping jewelry, sweets or small keepsakes, and lovely as party favours.',
    price: 180,
    compare_at_price: 220,
    category: 'Handmade Gifts',
    categorySlug: 'handmade-gifts',
    image: '/products/ankara-drawstring-gift-pouches.jpg',
    tagline: 'Set of 6, Wax print, Gift wrap',
    occasions: ['birthday', 'wedding', 'corporate'],
    rating_avg: 4.9,
    quantity: 24,
    moq: 1,
    featured: true,
  },
  {
    id: 'mock-kente-gift-box',
    slug: 'kente-celebration-gift-box',
    name: 'Kente Celebration Gift Box',
    description:
      'A keepsake box wrapped in handwoven kente, filled with shea butter, a beaded bracelet and a handwritten card. A little piece of Ghana, ready to give.',
    price: 450,
    compare_at_price: 520,
    category: 'Handmade Gifts',
    categorySlug: 'handmade-gifts',
    image: '',
    tagline: 'Kente wrapped, Gift-ready, Bestseller',
    occasions: ['birthday', 'wedding', 'anniversary', 'corporate'],
    rating_avg: 5.0,
    quantity: 12,
    moq: 1,
    featured: false,
  },
  {
    id: 'mock-shea-hamper',
    slug: 'shea-and-black-soap-hamper',
    name: 'Shea & Black Soap Hamper',
    description:
      'Raw shea butter, African black soap and a woven pouch, packed in a small Bolga basket. Pure, natural and made by women-led cooperatives in Northern Ghana.',
    price: 280,
    category: 'Handmade Gifts',
    categorySlug: 'handmade-gifts',
    image: '',
    tagline: 'Natural, Women-made, Gift-ready',
    occasions: ['birthday', 'corporate'],
    rating_avg: 4.9,
    quantity: 20,
    moq: 1,
    featured: false,
  },
  {
    id: 'mock-corporate-hamper',
    slug: 'proudly-ghanaian-corporate-hamper',
    name: 'Proudly Ghanaian Corporate Hamper',
    description:
      'Ghanaian chocolate, coffee, a carved keyholder and a kente notebook in a branded basket. Bulk orders welcome, with custom cards for your team or clients.',
    price: 650,
    category: 'Handmade Gifts',
    categorySlug: 'handmade-gifts',
    image: '',
    tagline: 'Corporate, Bulk orders, Custom cards',
    occasions: ['corporate'],
    rating_avg: 4.9,
    quantity: 30,
    moq: 1,
    featured: false,
  },
  {
    id: 'mock-bolga-basket',
    slug: 'bolga-market-basket',
    name: 'Bolga Market Basket',
    description:
      'Woven by hand in Bolgatanga from elephant grass, with a leather-wrapped handle. Strong, colourful and beautiful on the shoulder or in the home.',
    price: 320,
    compare_at_price: 380,
    category: 'Ghanaian Crafts',
    categorySlug: 'ghanaian-crafts',
    image: '/products/bolga-market-basket.jpg',
    tagline: 'Bolgatanga, Hand-woven, Leather handle',
    occasions: ['birthday', 'wedding'],
    rating_avg: 4.9,
    quantity: 9,
    moq: 1,
    featured: true,
  },
  {
    id: 'mock-adinkra-carving',
    slug: 'adinkra-wooden-wall-carving',
    name: 'Adinkra Wooden Wall Carving',
    description:
      'Hand-carved Gye Nyame symbol in sese wood, finished with natural wax. A powerful symbol of faith and a striking piece for any wall.',
    price: 240,
    category: 'Ghanaian Crafts',
    categorySlug: 'ghanaian-crafts',
    image: '',
    tagline: 'Gye Nyame, Hand-carved, Sese wood',
    occasions: ['wedding', 'corporate'],
    rating_avg: 4.8,
    quantity: 7,
    moq: 1,
    featured: false,
  },
  {
    id: 'mock-djembe',
    slug: 'mini-djembe-drum',
    name: 'Mini Djembe Drum',
    description:
      'A small, playable djembe carved from a single piece of wood with a goatskin head. Loved by children and collectors alike.',
    price: 190,
    category: 'Ghanaian Crafts',
    categorySlug: 'ghanaian-crafts',
    image: '',
    tagline: 'Playable, Hand-carved, Goatskin',
    occasions: ['birthday'],
    rating_avg: 4.7,
    quantity: 10,
    moq: 1,
    featured: false,
  },
  {
    id: 'mock-krobo-bracelets',
    slug: 'krobo-bead-bracelet-set',
    name: 'Krobo Bead Bracelet Set',
    description:
      'Stacking bracelets of hand-painted recycled glass beads and sunny yellow discs, made by Krobo artisans. Every set is one of a kind.',
    price: 150,
    compare_at_price: 180,
    category: 'Jewelry & Accessories',
    categorySlug: 'jewelry-accessories',
    image: '/products/krobo-bead-bracelet-set.jpg',
    tagline: 'Recycled glass, Stackable, One of a kind',
    occasions: ['birthday', 'anniversary'],
    rating_avg: 5.0,
    quantity: 25,
    moq: 1,
    featured: true,
  },
  {
    id: 'mock-brass-earrings',
    slug: 'ashanti-brass-earrings',
    name: 'Ashanti Brass Earrings',
    description:
      'Lost-wax cast brass earrings inspired by Ashanti goldweights. Light, warm-toned and made to be noticed.',
    price: 180,
    category: 'Jewelry & Accessories',
    categorySlug: 'jewelry-accessories',
    image: '',
    tagline: 'Lost-wax brass, Lightweight, Handmade',
    occasions: ['anniversary', 'birthday'],
    rating_avg: 4.8,
    quantity: 14,
    moq: 1,
    featured: false,
  },
  {
    id: 'mock-kente-stole',
    slug: 'kente-stole',
    name: 'Handwoven Kente Stole',
    description:
      'A strip of handwoven kente from Bonwire, perfect for graduations, weddings and special days. Each colour carries its own meaning.',
    price: 380,
    category: 'Jewelry & Accessories',
    categorySlug: 'jewelry-accessories',
    image: '',
    tagline: 'Bonwire kente, Handwoven, Ceremonial',
    occasions: ['wedding', 'anniversary'],
    rating_avg: 4.9,
    quantity: 8,
    moq: 1,
    featured: false,
  },
  {
    id: 'mock-mudcloth-cushion',
    slug: 'kente-cushion-cover',
    name: 'Kente Cushion Cover',
    description:
      'Woven kente front with a soft cotton back and hidden zip. Brings colour and Ghanaian warmth to any sofa or bed.',
    price: 210,
    compare_at_price: 250,
    category: 'Home Décor',
    categorySlug: 'home-decor',
    image: '',
    tagline: 'Kente front, Cotton back, 45 × 45 cm',
    occasions: ['wedding', 'birthday'],
    rating_avg: 4.8,
    quantity: 15,
    moq: 1,
    featured: false,
  },
  {
    id: 'mock-coil-wall-plates',
    slug: 'hand-painted-coil-wall-plates',
    name: 'Hand-painted Coil Wall Plates',
    description:
      'A set of four coiled rope wall plates, hand-painted with a wrapped-head portrait, tropical toucan, golden leaf and flowing waves. A joyful gallery wall in one gift.',
    price: 420,
    compare_at_price: 480,
    category: 'Home Décor',
    categorySlug: 'home-decor',
    image: '/products/hand-painted-coil-wall-plates.jpg',
    tagline: 'Set of 4, Hand-painted, Statement wall',
    occasions: ['wedding', 'anniversary', 'birthday'],
    rating_avg: 4.9,
    quantity: 8,
    moq: 1,
    featured: true,
  },
  {
    id: 'mock-woven-wall-plates',
    slug: 'woven-wall-plate-set',
    name: 'Woven Wall Plate Set',
    description:
      'Hand-woven grass plates in bold reds, yellows and monochrome patterns, made to hang together as a striking feature wall. Light, natural and easy to style.',
    price: 260,
    category: 'Home Décor',
    categorySlug: 'home-decor',
    image: '/products/woven-wall-plate-set.jpg',
    tagline: 'Hand-woven, Bold patterns, Mix & match',
    occasions: ['wedding', 'anniversary'],
    rating_avg: 4.7,
    quantity: 11,
    moq: 1,
    featured: false,
  },
  {
    id: 'mock-clay-pot',
    slug: 'terracotta-clay-pot',
    name: 'Terracotta Clay Pot',
    description:
      'Hand-shaped and fired by potters in the Volta Region. Lovely as a planter or simply as a statement piece on a shelf.',
    price: 140,
    category: 'Home Décor',
    categorySlug: 'home-decor',
    image: '',
    tagline: 'Volta Region, Hand-fired, Planter',
    occasions: ['birthday'],
    rating_avg: 4.6,
    quantity: 18,
    moq: 1,
    featured: false,
  },
  {
    id: 'mock-greetings-carving',
    slug: 'greetings-from-ghana-wood-carving',
    name: 'Greetings From Ghana Wood Carving',
    description:
      'A hand-carved ebony-finish plaque of a mother carrying her baby, with “Greetings from Ghana” etched across the top. A classic keepsake that tells a story of home.',
    price: 160,
    category: 'Souvenirs',
    categorySlug: 'souvenirs',
    image: '/products/greetings-from-ghana-carving.jpg',
    tagline: 'Hand-carved, Wall plaque, Keepsake',
    occasions: ['birthday', 'corporate'],
    rating_avg: 4.8,
    quantity: 10,
    moq: 1,
    featured: false,
  },
  {
    id: 'mock-adinkra-keyrings',
    slug: 'adinkra-keyring-set',
    name: 'Adinkra Keyring Set',
    description:
      'Four carved wooden keyrings, each with an Adinkra symbol and a card explaining its meaning. A favourite for visitors and corporate guests.',
    price: 75,
    category: 'Souvenirs',
    categorySlug: 'souvenirs',
    image: '',
    tagline: 'Set of 4, Meaning cards included',
    occasions: ['corporate', 'birthday'],
    rating_avg: 4.8,
    quantity: 40,
    moq: 1,
    featured: false,
  },
  {
    id: 'mock-ghana-postcards',
    slug: 'ghana-art-postcard-pack',
    name: 'Ghana Art Postcard Pack',
    description:
      'Ten postcards featuring work by Ghanaian illustrators, from Jamestown lighthouse to Kakum canopy walk. Send a little piece of Ghana.',
    price: 60,
    category: 'Souvenirs',
    categorySlug: 'souvenirs',
    image: '',
    tagline: 'Pack of 10, Local artists',
    occasions: ['corporate'],
    rating_avg: 4.7,
    quantity: 50,
    moq: 1,
    featured: false,
  },
  {
    id: 'mock-akwaaba-mug',
    slug: 'akwaaba-ceramic-mug',
    name: 'Akwaaba Ceramic Mug (New)',
    description:
      'A hand-glazed mug stamped with “Akwaaba” and a gold Adinkra border. Just in, a warm welcome with every cup.',
    price: 95,
    compare_at_price: 110,
    category: 'Souvenirs',
    categorySlug: 'souvenirs',
    image: '',
    tagline: 'New arrival, Hand-glazed',
    occasions: ['birthday', 'corporate'],
    rating_avg: 5.0,
    quantity: 6,
    moq: 1,
    featured: false,
  },
];

export const MOCK_FEATURED_PRODUCTS = MOCK_PRODUCTS.filter((p) => p.featured).map((p) => ({
  id: p.id,
  slug: p.slug,
  name: p.name,
  category: p.category,
  price: p.price,
  originalPrice: p.compare_at_price,
  image: p.image,
  tagline: p.tagline,
}));

export function getMockCategories(): MockCategory[] {
  return MOCK_CATEGORIES;
}

export function getMockProductBySlug(slug: string): MockProduct | undefined {
  return MOCK_PRODUCTS.find((p) => p.slug === slug || p.id === slug);
}

export type MockShopFilters = {
  search?: string | null;
  category?: string;
  priceMin?: number;
  priceMax?: number;
  minRating?: number;
  sortBy?: string;
  page?: number;
  perPage?: number;
};

export function filterMockProducts(filters: MockShopFilters = {}) {
  const {
    search,
    category = 'all',
    priceMin = 0,
    priceMax = 5000,
    minRating = 0,
    sortBy = 'popular',
    page = 1,
    perPage = 9,
  } = filters;

  let results = [...MOCK_PRODUCTS];

  if (search?.trim()) {
    const q = search.trim().toLowerCase();
    results = results.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.tagline?.toLowerCase().includes(q) ?? false) ||
        (p.occasions?.some((o) => o.includes(q)) ?? false)
    );
  }

  if (category !== 'all') {
    results = results.filter((p) => p.categorySlug === category);
  } else if (sortBy === 'new' || sortBy === 'newest') {
    results = results.filter((p) => p.featured);
  }

  if (priceMax < 5000) {
    results = results.filter((p) => p.price >= priceMin && p.price <= priceMax);
  }

  if (minRating > 0) {
    results = results.filter((p) => p.rating_avg >= minRating);
  }

  switch (sortBy) {
    case 'price-low':
      results.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      results.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      results.sort((a, b) => b.rating_avg - a.rating_avg);
      break;
    case 'new':
    case 'newest':
      results.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
      break;
    default:
      results.sort((a, b) => b.rating_avg - a.rating_avg);
      break;
  }

  const total = results.length;
  const from = (page - 1) * perPage;
  const pageItems = results.slice(from, from + perPage);

  return { products: pageItems, total, totalPages: Math.ceil(total / perPage) || 1 };
}

export function mockProductToCard(product: MockProduct) {
  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    price: product.price,
    originalPrice: product.compare_at_price,
    image: product.image,
    rating: product.rating_avg,
    reviewCount: 0,
    badge: product.compare_at_price && product.compare_at_price > product.price ? 'Sale' : undefined,
    inStock: product.quantity > 0,
    maxStock: product.quantity,
    moq: product.moq,
    category: product.category,
    hasVariants: false,
    minVariantPrice: undefined,
    colorVariants: [] as { name: string; hex: string }[],
  };
}

export function mockProductToDetail(product: MockProduct) {
  const images = (product.images?.length ? product.images : [product.image]).filter((src) =>
    Boolean(src?.trim())
  );
  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    description: product.description,
    price: product.price,
    compare_at_price: product.compare_at_price,
    images,
    category: product.category,
    rating: product.rating_avg,
    rating_avg: product.rating_avg,
    reviewCount: 0,
    stockCount: product.quantity,
    quantity: product.quantity,
    moq: product.moq,
    colors: [] as string[],
    colorHexMap: {} as Record<string, string>,
    variants: [] as unknown[],
    sizes: [] as string[],
    features: ['Handmade in Ghana', 'Gift wrapping available', 'Order via WhatsApp'],
    featured: ['Handmade in Ghana', 'Gift wrapping available', 'Order via WhatsApp'],
    care: 'Handmade pieces vary slightly, which makes each one unique. Keep away from prolonged moisture and direct sun; wipe gently with a soft dry cloth.',
    preorderShipping: null,
  };
}

export function getRelatedMockProducts(product: MockProduct, limit = 4) {
  return MOCK_PRODUCTS.filter((p) => p.id !== product.id && p.categorySlug === product.categorySlug)
    .slice(0, limit)
    .map(mockProductToCard);
}
