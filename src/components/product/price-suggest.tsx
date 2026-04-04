"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatPrice } from "@/lib/format";

const PRESET_PCT = [5, 10, 15, 20] as const;

type Mode = "percent" | "manual";

type Props = {
  listPrice: number;
  currency: string;
  productTitle: string;
};

export function PriceSuggest({ listPrice, currency, productTitle }: Props) {
  const [mode, setMode] = useState<Mode>("percent");
  const [percent, setPercent] = useState(10);
  const [manualAmount, setManualAmount] = useState(
    Math.max(1, Math.round(listPrice * 0.9)),
  );
  const [sent, setSent] = useState(false);

  const offerFromPercent = useMemo(() => {
    const raw = listPrice * (1 - percent / 100);
    return Math.max(1, Math.round(raw));
  }, [listPrice, percent]);

  const offerAmount = mode === "percent" ? offerFromPercent : manualAmount;

  const discountPct =
    listPrice > 0 ? Math.round((1 - offerAmount / listPrice) * 1000) / 10 : 0;

  const invalid =
    !Number.isFinite(offerAmount) ||
    offerAmount < 1 ||
    offerAmount > listPrice;

  const submit = () => {
    if (invalid) return;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
        <h3 className="font-display text-lg text-stone-900">Offer sent (demo)</h3>
        <p className="mt-2 text-sm text-muted leading-relaxed">
          You suggested {formatPrice(offerAmount, currency)} for &ldquo;{productTitle}&rdquo;
          {discountPct > 0 ? ` (~${discountPct}% below list).` : "."} In production this would
          notify the seller and appear in your chat thread.
        </p>
        <Link href="/messages" className="mt-4 inline-block text-sm font-medium text-accent hover:text-accent-hover">
          Open messages →
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <h3 className="font-display text-lg text-stone-900">Suggest a price</h3>
      <p className="mt-1 text-sm text-muted">
        Propose what you&apos;d pay — the seller can accept, decline, or counter (UI only for now).
      </p>

      <div className="mt-4 flex rounded-full bg-stone-100 p-1">
        <button
          type="button"
          onClick={() => setMode("percent")}
          className={`flex-1 rounded-full py-2 text-sm font-medium transition-colors ${
            mode === "percent" ? "bg-surface text-stone-900 shadow-sm" : "text-stone-500"
          }`}
        >
          By percentage
        </button>
        <button
          type="button"
          onClick={() => setMode("manual")}
          className={`flex-1 rounded-full py-2 text-sm font-medium transition-colors ${
            mode === "manual" ? "bg-surface text-stone-900 shadow-sm" : "text-stone-500"
          }`}
        >
          Custom amount
        </button>
      </div>

      {mode === "percent" ? (
        <div className="mt-5 space-y-4">
          <div className="flex flex-wrap gap-2">
            {PRESET_PCT.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPercent(p)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                  percent === p
                    ? "border-accent bg-green-50 text-accent"
                    : "border-border bg-background text-stone-600 hover:border-stone-300"
                }`}
              >
                −{p}%
              </button>
            ))}
          </div>
          <div>
            <label htmlFor="offer-pct" className="text-sm font-medium text-stone-700">
              Or choose discount ({percent}%)
            </label>
            <input
              id="offer-pct"
              type="range"
              min={1}
              max={50}
              value={percent}
              onChange={(e) => setPercent(Number(e.target.value))}
              className="mt-2 w-full accent-[var(--primary)]"
            />
          </div>
        </div>
      ) : (
        <div className="mt-5">
          <Input
            label="Your offer (DZD)"
            type="number"
            min={1}
            max={listPrice}
            value={manualAmount || ""}
            onChange={(e) => setManualAmount(Number(e.target.value))}
            hint={`Listed at ${formatPrice(listPrice, currency)} — offer cannot exceed list price in this demo.`}
          />
        </div>
      )}

      <div className="mt-5 rounded-xl bg-stone-50 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
          Your offer
        </p>
        <p className="mt-1 text-xl font-semibold text-stone-900">
          {invalid ? "—" : formatPrice(offerAmount, currency)}
        </p>
        {!invalid && discountPct > 0 ? (
          <p className="mt-1 text-sm text-muted">{discountPct}% below list price</p>
        ) : null}
      </div>

      <Button
        type="button"
        className="mt-5 w-full"
        disabled={invalid}
        onClick={submit}
      >
        Send offer to seller
      </Button>
    </div>
  );
}
