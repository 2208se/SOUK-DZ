import type { Metadata } from "next";
import { SellForm } from "@/components/sell/sell-form";

export const metadata: Metadata = {
  title: "Sell an item",
};

export default function SellPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12">
      <h1 className="font-display text-3xl text-stone-900">List an item</h1>
      <p className="mt-2 text-sm text-muted leading-relaxed">
        Add photos and details. This form is front-end only — nothing is uploaded or saved.
      </p>
      <SellForm />
    </div>
  );
}
