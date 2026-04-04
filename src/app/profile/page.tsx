import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product/product-card";
import { mockReviews, mockUsers, getProductsBySeller } from "@/lib/mock-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

export default function ProfilePage() {
  const user = mockUsers[0];
  const listings = getProductsBySeller(user.id);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-sm">
        <div className="h-28 bg-gradient-to-r from-teal-100/80 via-stone-100 to-amber-50 sm:h-36" />
        <div className="relative px-6 pb-8 sm:px-10">
          <div className="-mt-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-6">
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border-4 border-surface bg-stone-200 shadow-md">
                <Image src={user.avatar} alt="" fill className="object-cover" sizes="112px" />
              </div>
              <div className="pb-1">
                <h1 className="font-display text-2xl text-stone-900 sm:text-3xl">{user.name}</h1>
                <p className="mt-1 text-sm text-muted">{user.location} · Member since {user.memberSince}</p>
                <p className="mt-3 max-w-xl text-sm text-stone-700 leading-relaxed">{user.bio}</p>
                <p className="mt-3 text-sm font-medium text-stone-800">
                  {user.rating}★ average · {user.reviewCount} reviews
                </p>
              </div>
            </div>
            <Link
              href="/sell"
              className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              New listing
            </Link>
          </div>
        </div>
      </div>

      <section className="mt-14">
        <h2 className="font-display text-xl text-stone-900 sm:text-2xl">Active listings</h2>
        <p className="mt-2 text-sm text-muted">Items you&apos;re selling (demo data).</p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {listings.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="mt-16 border-t border-border pt-14">
        <h2 className="font-display text-xl text-stone-900 sm:text-2xl">Reviews</h2>
        <p className="mt-2 text-sm text-muted">What buyers say — UI preview only.</p>
        <ul className="mt-8 flex flex-col gap-4">
          {mockReviews.map((r) => (
            <li
              key={r.id}
              className="rounded-2xl border border-border bg-surface p-5 shadow-sm"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-medium text-stone-900">{r.authorName}</span>
                <span className="text-sm text-amber-600">{r.rating}★</span>
              </div>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed">{r.text}</p>
              <p className="mt-3 text-xs text-muted">{r.date}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
