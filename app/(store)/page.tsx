'use client';

import {
  SITE_LOCATION_TAGLINE,
  HERO_HEADLINE,
  HERO_SUBHEADLINE,
  HERO_SLIDES,
  CUSTOMER_REVIEWS,
  ABOUT_HEADLINE,
  ABOUT_BODY,
  WHATSAPP_URL,
  GIFT_OCCASIONS,
} from '@/lib/site-brand';
import { MOCK_SHOP_CATEGORIES, MOCK_FEATURED_PRODUCTS } from '@/lib/mock-catalog';
import Link from 'next/link';
import Image from 'next/image';
import MockCategoryCard from '@/components/MockCategoryCard';
import MockProductCard from '@/components/MockProductCard';
import AnimatedSection, { AnimatedGrid } from '@/components/AnimatedSection';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function Home() {
  usePageTitle('');

  return (
    <main className="min-h-screen bg-brand-cream">
      {/* SECTION 1 HERO, full-bleed photo */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden -mt-[calc(4.75rem+env(safe-area-inset-top,0px))] lg:-mt-[7.25rem] lg:items-center">
        <picture>
          <source media="(min-width: 1024px)" srcSet={HERO_SLIDES[0].src} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_SLIDES[0].mobileSrc}
            alt={HERO_SLIDES[0].alt}
            className="absolute inset-0 h-full w-full object-cover object-[center_30%] lg:object-center"
            fetchPriority="high"
          />
        </picture>
        {/* Mild green wash + mobile bottom fade for copy */}
        <div
          className="absolute inset-0 bg-[rgba(23,77,60,0.12)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[rgba(23,77,60,0.55)] via-[rgba(23,77,60,0.2)] to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 lg:hidden bg-gradient-to-t from-[rgba(23,77,60,0.88)] via-[rgba(23,77,60,0.45)] to-[rgba(23,77,60,0.12)]"
          aria-hidden
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[calc(4.75rem+env(safe-area-inset-top,0px)+0.75rem)] pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] sm:pb-16 md:pb-24 lg:pt-[calc(7.25rem+3rem)] lg:pb-28">
          <AnimatedSection className="max-w-xl text-left">
            <p className="text-[10px] font-semibold tracking-[0.28em] sm:tracking-[0.32em] uppercase text-brand-gold mb-3 sm:mb-5">
              {SITE_LOCATION_TAGLINE}
            </p>
            <h1 className="font-serif text-[2.15rem] leading-[1.08] sm:text-5xl md:text-6xl text-brand-cream mb-4 sm:mb-5">
              {HERO_HEADLINE}
            </h1>
            <p className="text-brand-cream/90 text-[0.95rem] sm:text-base md:text-lg max-w-md mb-7 sm:mb-9 leading-relaxed font-light">
              {HERO_SUBHEADLINE}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/shop"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-3.5 min-h-[48px] bg-brand-gold text-brand-plum rounded-full font-semibold text-sm tracking-wide shadow-boutique transition-all duration-300 hover:bg-[#E2BA68] active:scale-[0.98]"
              >
                Shop now
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-3.5 min-h-[48px] border border-brand-cream/45 text-brand-cream rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-brand-cream/10 active:scale-[0.98]"
              >
                Order on WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3, SHOP BY CATEGORY */}
      <section id="shop-by-category" className="py-12 sm:py-16 md:py-24 bg-brand-cream scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="boutique-section-eyebrow">Explore</span>
            <h2 className="boutique-section-title mb-3">Shop By Category</h2>
            <p className="text-brand-plum/70 max-w-xl mx-auto text-sm sm:text-base px-1">
              From Bolga baskets to Krobo beads, discover gifts made by Ghanaian hands.
            </p>
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 md:gap-6 [&>*:last-child:nth-child(odd)]:col-span-2 md:[&>*:last-child:nth-child(odd)]:col-span-1">
            {MOCK_SHOP_CATEGORIES.map((cat, i) => (
              <MockCategoryCard
                key={cat.id}
                label={cat.label}
                href={cat.href}
                image={cat.image}
                index={i}
              />
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* SECTION 3b, GIFTS BY OCCASION */}
      <section id="gifts-by-occasion" className="py-14 sm:py-20 md:py-24 bg-brand-cream scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8 sm:mb-10 md:mb-12">
            <div className="max-w-xl">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-plum leading-tight mb-3">
                Shop by occasion
              </h2>
              <p className="text-brand-plum/70 text-sm sm:text-base leading-relaxed">
                Something for every celebration, from a friend&apos;s birthday to thank-you gifts for your whole team.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start md:self-auto text-sm font-medium text-brand-plum underline decoration-brand-gold decoration-2 underline-offset-[6px] hover:text-brand-terracotta transition-colors"
            >
              Planning corporate or bulk gifts? Chat with us
            </a>
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {GIFT_OCCASIONS.map((occasion) => (
              <Link
                key={occasion.label}
                href={occasion.href}
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-brand-latte"
              >
                <Image
                  src={occasion.image}
                  alt={occasion.label}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-boutique group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" aria-hidden />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 md:p-6">
                  <h3 className="font-serif text-xl sm:text-2xl md:text-[1.7rem] text-white leading-tight">
                    {occasion.label}
                  </h3>
                  <p className="hidden sm:block mt-1.5 text-sm text-white/80 leading-snug max-w-[24ch]">
                    {occasion.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* SECTION 4, FEATURED PRODUCTS */}
      <section id="featured-products" className="py-12 sm:py-16 md:py-24 bg-white/60 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="boutique-section-eyebrow">Handpicked For You</span>
            <h2 className="boutique-section-title mb-3">Featured Products</h2>
            <p className="text-brand-plum/70 max-w-xl mx-auto text-sm sm:text-base">
              Our most-loved pieces, each with a story behind it.
            </p>
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
            {MOCK_FEATURED_PRODUCTS.map((product) => (
              <MockProductCard
                key={product.id}
                slug={product.slug}
                name={product.name}
                category={product.category}
                price={product.price}
                originalPrice={'originalPrice' in product ? product.originalPrice : undefined}
                image={product.image}
                tagline={product.tagline}
              />
            ))}
          </AnimatedGrid>
          <div className="text-center mt-12">
            <Link href="/shop" className="boutique-btn-secondary">
              Shop all gifts
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5, CUSTOMER REVIEWS */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="boutique-section-eyebrow">Kind Words</span>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-brand-plum mb-3 leading-snug px-1">
              Gifts That Felt Like Home
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {CUSTOMER_REVIEWS.map((review, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-5 sm:p-6 md:p-8 boutique-card-hover"
              >
                <div className="flex gap-0.5 text-brand-plum/30 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <i key={j} className="ri-star-fill text-sm text-brand-rose/70" />
                  ))}
                </div>
                <p className="text-brand-plum/90 text-sm md:text-base leading-relaxed">&ldquo;{review.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6, ABOUT */}
      <section className="py-12 sm:py-16 md:py-24 bg-brand-latte/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-brand-plum mb-4 sm:mb-6 leading-snug">{ABOUT_HEADLINE}</h2>
            <p className="text-brand-plum/80 text-base sm:text-lg leading-relaxed">{ABOUT_BODY}</p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 text-brand-plum font-semibold hover:text-brand-rose transition-colors"
            >
              Learn more <i className="ri-arrow-right-line" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

    </main>
  );
}
