"use client";

import Link from "next/link";
import { useFavorites } from "@/hooks/use-favorites";
import { Button } from "@/components/ui/button";

type Props = { productId: string };

export function ProductActions({ productId }: Props) {
  const { toggle, has, ready } = useFavorites();
  const favorited = ready && has(productId);

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Button
        type="button"
        variant={favorited ? "secondary" : "outline"}
        className="sm:min-w-[160px]"
        onClick={() => toggle(productId)}
      >
        {favorited ? "Saved" : "Add to favorites"}
      </Button>
      <Link href="/messages" className="sm:min-w-[160px]">
        <Button className="w-full">Contact seller</Button>
      </Link>
    </div>
  );
}
