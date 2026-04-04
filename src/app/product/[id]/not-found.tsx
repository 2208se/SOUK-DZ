import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProductNotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center">
      <h1 className="font-display text-2xl text-stone-900">Item not found</h1>
      <p className="mt-3 text-sm text-muted">
        This listing may have been removed or the link is incorrect.
      </p>
      <Link href="/marketplace" className="mt-8">
        <Button>Back to marketplace</Button>
      </Link>
    </div>
  );
}
