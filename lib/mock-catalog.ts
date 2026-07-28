/**
 * Frontend-only mock catalog, Derby's Hair & Beauty sample products.
 * Replace with live data once NEXT_PUBLIC_SUPABASE_* env vars are set.
 */

import { isSupabaseConfigured } from '@/lib/supabase';

export function isMockCatalogMode(): boolean {
  return !isSupabaseConfigured();
}

export const MOCK_SHOP_CATEGORIES = [
  {
    id: 'bob-units',
    label: 'Bob Units',
    href: '/shop?category=bob-units',
    image: '',
  },
  {
    id: 'pixie-cuts',
    label: 'Pixie Cuts',
    href: '/shop?category=pixie-cuts',
    image: '',
  },
  {
    id: 'curly-wigs',
    label: 'Curly Wigs',
    href: '/shop?category=curly-wigs',
    image: '',
  },
  {
    id: 'ready-to-wear',
    label: 'Ready-to-Wear',
    href: '/shop?category=ready-to-wear',
    image: '',
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
    id: 'cat-bob',
    name: 'Bob Units',
    slug: 'bob-units',
    description: 'Clean, face-framing bobs that make you feel polished the second you put them on.',
    image_url: '',
    parent_id: null,
    position: 1,
  },
  {
    id: 'cat-pixie',
    name: 'Pixie Cuts',
    slug: 'pixie-cuts',
    description: 'Short, sharp and full of attitude, pixies for women who love easy glam.',
    image_url: '',
    parent_id: null,
    position: 2,
  },
  {
    id: 'cat-curly',
    name: 'Curly Wigs',
    slug: 'curly-wigs',
    description: 'Soft curls and bouncy volume that feel romantic, feminine and camera-ready.',
    image_url: '',
    parent_id: null,
    position: 3,
  },
  {
    id: 'cat-ready',
    name: 'Ready-to-Wear',
    slug: 'ready-to-wear',
    description: 'Human hair units you can wear today, no long wait, just walk-out confidence.',
    image_url: '',
    parent_id: null,
    position: 4,
  },
  {
    id: 'cat-new',
    name: 'New Arrivals',
    slug: 'new-arrivals',
    description: 'Fresh drops just in. Grab yours before they sell out.',
    image_url: '',
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
  rating_avg: number;
  quantity: number;
  moq: number;
  featured?: boolean;
};

const MOCK_PRODUCTS: MockProduct[] = [
  {
    id: 'mock-bob-straight-12',
    slug: 'straight-bob-unit-12',
    name: 'Straight Bob Unit 12"',
    description:
      'A sleek, chin-length bob that frames your face and makes getting ready feel effortless. Soft human hair with a natural finish, put it on and feel put-together in seconds.',
    price: 850,
    compare_at_price: 980,
    category: 'Bob Units',
    categorySlug: 'bob-units',
    image: '',
    tagline: '12", Straight, Ready to wear',
    rating_avg: 4.9,
    quantity: 8,
    moq: 1,
    featured: true,
  },
  {
    id: 'mock-bob-body-wave',
    slug: 'body-wave-bob-14',
    name: 'Body Wave Bob 14"',
    description:
      'Soft waves with movement that still looks polished. Perfect when you want to feel feminine without spending an hour styling.',
    price: 980,
    compare_at_price: 1150,
    category: 'Bob Units',
    categorySlug: 'bob-units',
    image: '',
    tagline: '14", Body wave, Soft bounce',
    rating_avg: 4.8,
    quantity: 6,
    moq: 1,
    featured: true,
  },
  {
    id: 'mock-pixie-classic',
    slug: 'classic-pixie-cut',
    name: 'Classic Pixie Cut Unit',
    description:
      'Short, sharp and full of life. This pixie gives you that fresh cut feeling every morning, light on the head, strong on confidence.',
    price: 650,
    category: 'Pixie Cuts',
    categorySlug: 'pixie-cuts',
    image: '',
    tagline: 'Short, Bold, Low maintenance',
    rating_avg: 4.9,
    quantity: 10,
    moq: 1,
    featured: true,
  },
  {
    id: 'mock-pixie-textured',
    slug: 'textured-pixie-unit',
    name: 'Textured Pixie Unit',
    description:
      'A soft textured pixie with enough volume to feel playful and enough structure to look intentional. Wear it and own the room.',
    price: 720,
    compare_at_price: 820,
    category: 'Pixie Cuts',
    categorySlug: 'pixie-cuts',
    image: '',
    tagline: 'Textured, Soft volume, Fierce',
    rating_avg: 4.7,
    quantity: 7,
    moq: 1,
    featured: false,
  },
  {
    id: 'mock-curly-14',
    slug: 'soft-curly-wig-14',
    name: 'Soft Curly Wig 14"',
    description:
      'Romantic curls with natural bounce. Soft to the touch and easy to love, the kind of hair that makes you smile when you catch your reflection.',
    price: 1100,
    compare_at_price: 1300,
    category: 'Curly Wigs',
    categorySlug: 'curly-wigs',
    image: '',
    tagline: '14", Soft curls, Camera-ready',
    rating_avg: 4.9,
    quantity: 5,
    moq: 1,
    featured: true,
  },
  {
    id: 'mock-curly-18',
    slug: 'deep-curly-wig-18',
    name: 'Deep Curly Wig 18"',
    description:
      'Fuller, deeper curls for days you want drama and softness at once. Human hair that moves with you and holds that expensive look.',
    price: 1450,
    compare_at_price: 1680,
    category: 'Curly Wigs',
    categorySlug: 'curly-wigs',
    image: '',
    tagline: '18", Deep curly, Statement soft',
    rating_avg: 4.8,
    quantity: 4,
    moq: 1,
    featured: true,
  },
  {
    id: 'mock-ready-straight-16',
    slug: 'ready-straight-unit-16',
    name: 'Ready-to-Wear Straight Unit 16"',
    description:
      'Long, silky straight strands you can wear the same day. Smooth, light and made for women who want to look expensive without the wait.',
    price: 1250,
    category: 'Ready-to-Wear',
    categorySlug: 'ready-to-wear',
    image: '',
    tagline: '16", Straight, Same-day ready',
    rating_avg: 4.8,
    quantity: 9,
    moq: 1,
    featured: true,
  },
  {
    id: 'mock-ready-layered',
    slug: 'layered-ready-unit',
    name: 'Layered Ready-to-Wear Unit',
    description:
      'Soft layers that move when you do. A versatile everyday unit that helps you feel confident from Madina errands to night plans.',
    price: 1050,
    compare_at_price: 1200,
    category: 'Ready-to-Wear',
    categorySlug: 'ready-to-wear',
    image: '',
    tagline: 'Layered, Everyday glam, Soft',
    rating_avg: 4.7,
    quantity: 8,
    moq: 1,
    featured: false,
  },
  {
    id: 'mock-bob-new',
    slug: 'blunt-bob-new-arrival',
    name: 'Blunt Bob (New Arrival)',
    description:
      'Just dropped, a clean blunt bob that feels modern and powerful. Limited stock. Once it is gone, it is gone.',
    price: 900,
    compare_at_price: 1050,
    category: 'New Arrivals',
    categorySlug: 'new-arrivals',
    image: '',
    tagline: 'New drop, Blunt bob, Limited',
    rating_avg: 5.0,
    quantity: 3,
    moq: 1,
    featured: true,
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
        (p.tagline?.toLowerCase().includes(q) ?? false)
    );
  }

  if (category !== 'all') {
    if (category === 'new-arrivals') {
      results = results.filter((p) => p.categorySlug === 'new-arrivals');
    } else {
      results = results.filter((p) => p.categorySlug === category);
    }
  } else if (sortBy === 'new' || sortBy === 'newest') {
    results = results.filter((p) => p.categorySlug === 'new-arrivals' || p.featured);
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
    features: ['100% human hair feel', 'Ready to wear', 'Order via WhatsApp'],
    featured: ['100% human hair feel', 'Ready to wear', 'Order via WhatsApp'],
    care: 'Store on a wig stand, brush gently, and avoid excessive heat. Follow care instructions included with your unit.',
    preorderShipping: null,
  };
}

export function getRelatedMockProducts(product: MockProduct, limit = 4) {
  return MOCK_PRODUCTS.filter((p) => p.id !== product.id && p.categorySlug === product.categorySlug)
    .slice(0, limit)
    .map(mockProductToCard);
}
