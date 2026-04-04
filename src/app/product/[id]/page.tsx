import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PriceSuggest } from "@/components/product/price-suggest";
import { ProductActions } from "@/components/product/product-actions";
import { ProductGallery } from "@/components/product/product-gallery";
import { categoryLabels, conditionLabels, formatPrice } from "@/lib/format";
import { getProductById, getUserById } from "@/lib/mock-data";
import type { Metadata } from "next";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Not found" };
  return {
    title: product.title,
    description: product.description.slice(0, 160),
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const seller = getUserById(product.sellerId);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-muted">
        <Link href="/marketplace" className="hover:text-accent transition-colors">
          Marketplace
        </Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700">{product.title}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <ProductGallery images={product.images} title={product.title} />

        <div className="flex flex-col">
          <p className="text-sm text-muted">{product.brand}</p>
          <h1 className="mt-1 font-display text-3xl tracking-tight text-stone-900 sm:text-4xl">
            {product.title}
          </h1>
          <p className="mt-4 inline-flex items-baseline gap-2 rounded-2xl border border-[var(--va-border-strong)] bg-[var(--va-mint-subtle)] px-4 py-2.5 font-display text-3xl font-extrabold tracking-tight text-[var(--va-primary-deep)] shadow-sm">
            {formatPrice(product.price, product.currency)}
          </p>

          <ul className="mt-8 flex flex-wrap gap-2 text-sm">
            <li className="rounded-full bg-stone-100 px-3 py-1 text-stone-700">
              Size {product.size}
            </li>
            <li className="rounded-full bg-stone-100 px-3 py-1 text-stone-700">
              {conditionLabels[product.condition]}
            </li>
            <li className="rounded-full bg-stone-100 px-3 py-1 text-stone-700">
              {categoryLabels[product.category]}
            </li>
            <li className="rounded-full bg-stone-100 px-3 py-1 text-stone-700">
              {product.location}
            </li>
          </ul>

          <div className="mt-8 border-t border-border pt-8">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Description
            </h2>
            <p className="mt-3 text-sm text-stone-700 leading-relaxed whitespace-pre-wrap">
              {product.description}
            </p>
          </div>

          <div className="mt-8 border-t border-border pt-8">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Seller
            </h2>
            {seller ? (
              <Link
                href="/profile"
                className="mt-4 flex items-center gap-3 rounded-2xl border border-border bg-surface p-4 transition-shadow hover:shadow-md"
              >
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-stone-200">
                  <Image src={seller.avatar} alt="" fill className="object-cover" sizes="48px" />
                </div>
                <div>
                  <p className="font-medium text-stone-900">{seller.name}</p>
                  <p className="text-sm text-muted">
                    {seller.location} · {seller.rating}★ ({seller.reviewCount} reviews)
                  </p>
                </div>
              </Link>
            ) : (
              <p className="mt-3 text-sm text-muted">Seller information unavailable.</p>
            )}
          </div>

          <div className="mt-8">
            <PriceSuggest
              listPrice={product.price}
              currency={product.currency}
              productTitle={product.title}
            />
          </div>

          <div className="mt-8">
            <ProductActions productId={product.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
