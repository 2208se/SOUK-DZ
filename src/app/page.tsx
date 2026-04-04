import Link from "next/link";
import { CategoryCard } from "@/components/category/category-card";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { mockProducts } from "@/lib/mock-data";

const categories = [
  {
    href: "/marketplace?category=women",
    title: "Women",
    subtitle: "Dresses, tops, outerwear",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
  },
  {
    href: "/marketplace?category=men",
    title: "Men",
    subtitle: "Streetwear & classics",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
  },
  {
    href: "/marketplace?category=kids",
    title: "Kids",
    subtitle: "Gentle on budgets",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80",
  },
  {
    href: "/marketplace?category=accessories",
    title: "Accessories",
    subtitle: "Bags, scarves, more",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80",
  },
];

const benefits = [
  {
    title: "Easier on wallets",
    body: "Shop quality second-hand at a fraction of retail — ideal for students and young professionals.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Lower footprint",
    body: "Extending the life of clothing keeps textiles out of landfills — small choice, real impact.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Chat before you buy",
    body: "Ask about fit, fabric, and shipping — stay in control without leaving the app.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  const featured = mockProducts.slice(0, 4);

  return (
    <div>
      <section className="va-hero relative border-b border-[var(--va-border)]">
        <div
          className="va-hero-blob -right-24 top-0 h-72 w-72 bg-[var(--va-primary-soft)]/30 sm:right-0"
          aria-hidden
        />
        <div
          className="va-hero-blob -left-32 bottom-0 h-64 w-64 bg-[var(--va-amber)]/15 sm:left-0"
          aria-hidden
        />
        <div className="relative z-[1] mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1">
            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--va-border-strong)] bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--va-primary-deep)] shadow-sm backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--va-amber)]" aria-hidden />
              Algeria · Second-hand fashion
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-[var(--va-ink)] sm:text-5xl lg:text-[3.35rem]">
              Your circular closet,{" "}
              <span className="text-[var(--va-primary)]">made in DZ</span>.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-[var(--va-ink-muted)]">
              Buy and sell pre-loved clothes with clear condition labels, direct chat, and sellers near you — a Vinted-style experience built for Algeria.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/sell">
                <Button className="w-full px-8 sm:w-auto">Start selling</Button>
              </Link>
              <Link href="/marketplace">
                <Button variant="outline" className="w-full px-8 sm:w-auto">
                  Browse items
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-xs text-[var(--va-ink-muted)]">
              Demo — no real payments or accounts.
            </p>
          </div>
          <div className="relative flex-1 lg:max-w-md">
            <div className="absolute -inset-1 rounded-[1.35rem] bg-gradient-to-br from-[var(--va-primary)]/25 via-transparent to-[var(--va-amber)]/20 blur-sm" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-2 border-[var(--va-border-strong)] bg-stone-200 shadow-[0_20px_50px_rgba(26,47,34,0.12)] ring-2 ring-[var(--va-primary)]/10">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80)",
                }}
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-[var(--va-border-strong)] bg-surface/95 px-4 py-3 shadow-[0_12px_40px_rgba(46,125,50,0.12)] backdrop-blur-sm sm:block">
              <p className="text-xs font-medium text-[var(--va-primary)]">Sweet prices · Cool planet</p>
              <p className="text-sm font-semibold text-[var(--va-ink)]">Students &amp; pros, well dressed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--va-primary)]">
              Vinted Algeria picks
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold text-[var(--va-ink)] sm:text-3xl">
              Featured picks
            </h2>
            <p className="mt-2 text-sm text-[var(--va-ink-muted)]">Highlights from our demo catalog.</p>
          </div>
          <Link
            href="/marketplace"
            className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="va-section-band py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--va-primary)]">
            Browse
          </p>
          <h2 className="mt-1 font-display text-2xl font-bold text-[var(--va-ink)] sm:text-3xl">
            Shop by category
          </h2>
          <p className="mt-2 max-w-xl text-sm text-[var(--va-ink-muted)]">
            Refine on the marketplace by size, brand, city, and price.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <CategoryCard key={c.href} {...c} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--va-primary)]">
          Why choose us
        </p>
        <h2 className="mt-1 font-display text-2xl font-bold text-[var(--va-ink)] sm:text-3xl">
          The Vinted Algeria community
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="va-card-brand rounded-2xl border border-[var(--va-border)] bg-surface p-6 transition-all duration-300 hover:border-[var(--va-primary)]/25 hover:shadow-[0_12px_40px_rgba(46,125,50,0.1)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--va-mint-subtle)] text-[var(--va-primary)]">
                {b.icon}
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-[var(--va-ink)]">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--va-ink-muted)]">{b.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
