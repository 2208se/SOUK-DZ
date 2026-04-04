import { Suspense } from "react";
import { MarketplaceView } from "@/components/marketplace/marketplace-view";

function MarketplaceFallback() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 text-center text-sm text-muted sm:px-6">
      Loading marketplace…
    </div>
  );
}

export default function MarketplacePage() {
  return (
    <Suspense fallback={<MarketplaceFallback />}>
      <MarketplaceView />
    </Suspense>
  );
}
