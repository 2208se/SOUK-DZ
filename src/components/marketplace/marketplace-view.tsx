"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/product/product-card";
import {
  defaultFilters,
  FilterSidebar,
  type FilterState,
} from "@/components/marketplace/filter-sidebar";
import { Input } from "@/components/ui/input";
import { mockProducts } from "@/lib/mock-data";
import type { Product } from "@/types";

const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "price_asc", label: "Price: low to high" },
  { value: "price_desc", label: "Price: high to low" },
] as const;

type SortValue = (typeof sortOptions)[number]["value"];

function applyFilters(products: Product[], f: FilterState, q: string): Product[] {
  const query = q.trim().toLowerCase();
  return products.filter((p) => {
    if (query) {
      const hay = `${p.title} ${p.brand} ${p.description}`.toLowerCase();
      if (!hay.includes(query)) return false;
    }
    if (f.categories.length && !f.categories.includes(p.category)) return false;
    if (f.sizes.length && !f.sizes.includes(p.size)) return false;
    if (f.brands.length && !f.brands.includes(p.brand)) return false;
    if (f.conditions.length && !f.conditions.includes(p.condition)) return false;
    if (f.locations.length && !f.locations.includes(p.location)) return false;
    if (f.priceMin != null && p.price < f.priceMin) return false;
    if (f.priceMax != null && p.price > f.priceMax) return false;
    return true;
  });
}

function sortProducts(products: Product[], sort: SortValue): Product[] {
  const copy = [...products];
  if (sort === "newest") {
    copy.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
  } else if (sort === "price_asc") {
    copy.sort((a, b) => a.price - b.price);
  } else {
    copy.sort((a, b) => b.price - a.price);
  }
  return copy;
}

export function MarketplaceView() {
  const searchParams = useSearchParams();
  const initialQ = searchParams.get("q") ?? "";
  const categoryParam = searchParams.get("category");

  const [search, setSearch] = useState(initialQ);
  const [filters, setFilters] = useState<FilterState>(() => {
    const base = { ...defaultFilters };
    if (
      categoryParam === "men" ||
      categoryParam === "women" ||
      categoryParam === "kids" ||
      categoryParam === "accessories"
    ) {
      base.categories = [categoryParam];
    }
    return base;
  });
  const [sort, setSort] = useState<SortValue>("newest");

  const brands = useMemo(
    () => [...new Set(mockProducts.map((p) => p.brand))].sort(),
    [],
  );
  const sizes = useMemo(
    () => [...new Set(mockProducts.map((p) => p.size))].sort(),
    [],
  );
  const locations = useMemo(
    () => [...new Set(mockProducts.map((p) => p.location))].sort(),
    [],
  );

  const filtered = useMemo(
    () => sortProducts(applyFilters(mockProducts, filters, search), sort),
    [filters, search, sort],
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-8 rounded-2xl border border-[var(--va-border)] bg-[color-mix(in_srgb,var(--va-surface)_92%,var(--va-mint-subtle))] px-5 py-6 shadow-[0_4px_24px_rgba(46,125,50,0.06)] sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--va-primary)]">
          Vinted Algeria
        </p>
        <h1 className="mt-1 font-display text-3xl font-extrabold tracking-tight text-[var(--va-ink)] sm:text-4xl">
          Marketplace
        </h1>
        <p className="mt-2 max-w-xl text-sm text-[var(--va-ink-muted)]">
          Filter by city, brand, size, and budget — demo listings only.
        </p>
      </div>

      <form
        className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex-1">
          <Input
            label="Search"
            placeholder="Try “denim”, “Nike”, “linen”…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            name="marketplace-search"
          />
        </div>
        <div className="sm:w-56">
          <label htmlFor="sort" className="mb-1.5 block text-sm font-medium text-stone-700">
            Sort
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortValue)}
            className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/40"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </form>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        <div className="lg:sticky lg:top-24 lg:w-64 lg:shrink-0">
          <FilterSidebar
            brands={brands}
            sizes={sizes}
            locations={locations}
            value={filters}
            onChange={setFilters}
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="mb-4 text-sm text-muted">
            {filtered.length} item{filtered.length === 1 ? "" : "s"}
          </p>
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-surface/50 py-16 text-center text-sm text-muted">
              No items match your filters. Try clearing filters or broadening search.
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
