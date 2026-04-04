"use client";

import Image from "next/image";
import Link from "next/link";
import { useFavorites } from "@/hooks/use-favorites";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/types";

type Props = { product: Product };

export function ProductCard({ product }: Props) {
  const { toggle, has, ready } = useFavorites();
  const favorited = ready && has(product.id);
  const cover = product.images[0];

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <Link href={`/product/${product.id}`} className="relative aspect-[4/5] overflow-hidden bg-stone-100">
        <Image
          src={cover}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <button
          type="button"
          aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggle(product.id);
          }}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-stone-700 shadow-sm backdrop-blur-sm transition-transform hover:scale-105"
        >
          <svg
            className={`h-5 w-5 ${favorited ? "fill-red-500 text-red-500" : ""}`}
            fill={favorited ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </Link>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <Link href={`/product/${product.id}`} className="block">
          <h3 className="line-clamp-2 text-sm font-medium text-stone-900 transition-colors group-hover:text-accent">
            {product.title}
          </h3>
        </Link>
        <p className="text-xs text-muted">{product.brand} · {product.size}</p>
        <p className="mt-auto pt-2 text-base font-semibold text-stone-900">
          {formatPrice(product.price, product.currency)}
        </p>
      </div>
    </article>
  );
}
