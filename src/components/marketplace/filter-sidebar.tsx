"use client";

import type { ProductCategory, ProductCondition } from "@/types";
import { categoryLabels, conditionLabels } from "@/lib/format";

export type FilterState = {
  categories: ProductCategory[];
  sizes: string[];
  brands: string[];
  conditions: ProductCondition[];
  priceMin: number | null;
  priceMax: number | null;
};

const defaultFilters: FilterState = {
  categories: [],
  sizes: [],
  brands: [],
  conditions: [],
  priceMin: null,
  priceMax: null,
};

type Props = {
  brands: string[];
  sizes: string[];
  value: FilterState;
  onChange: (next: FilterState) => void;
};

const categoryKeys = Object.keys(categoryLabels) as ProductCategory[];
const conditionKeys = Object.keys(conditionLabels) as ProductCondition[];

function toggleArray<T extends string>(arr: T[], item: T): T[] {
  return arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item];
}

export function FilterSidebar({ brands, sizes, value, onChange }: Props) {
  const reset = () => onChange({ ...defaultFilters });

  return (
    <aside className="flex flex-col gap-8 rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <h2 className="font-display text-lg text-stone-900">Filters</h2>
        <button
          type="button"
          onClick={reset}
          className="text-xs font-medium text-accent hover:text-accent-hover"
        >
          Clear all
        </button>
      </div>

      <fieldset className="space-y-2">
        <legend className="text-xs font-semibold uppercase tracking-wider text-stone-500">
          Category
        </legend>
        <div className="flex flex-col gap-2">
          {categoryKeys.map((c) => (
            <label key={c} className="flex cursor-pointer items-center gap-2 text-sm text-stone-700">
              <input
                type="checkbox"
                checked={value.categories.includes(c)}
                onChange={() =>
                  onChange({
                    ...value,
                    categories: toggleArray(value.categories, c),
                  })
                }
                className="h-4 w-4 rounded border-stone-300 text-accent focus:ring-ring"
              />
              {categoryLabels[c]}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="space-y-2">
        <legend className="text-xs font-semibold uppercase tracking-wider text-stone-500">
          Size
        </legend>
        <div className="flex flex-wrap gap-2">
          {sizes.map((s) => {
            const on = value.sizes.includes(s);
            return (
              <button
                key={s}
                type="button"
                onClick={() =>
                  onChange({
                    ...value,
                    sizes: toggleArray(value.sizes, s),
                  })
                }
                className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                  on
                    ? "border-accent bg-teal-50 text-accent"
                    : "border-border bg-background text-stone-600 hover:border-stone-300"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="space-y-2">
        <legend className="text-xs font-semibold uppercase tracking-wider text-stone-500">
          Brand
        </legend>
        <div className="flex max-h-40 flex-col gap-2 overflow-y-auto pr-1">
          {brands.map((b) => (
            <label key={b} className="flex cursor-pointer items-center gap-2 text-sm text-stone-700">
              <input
                type="checkbox"
                checked={value.brands.includes(b)}
                onChange={() =>
                  onChange({
                    ...value,
                    brands: toggleArray(value.brands, b),
                  })
                }
                className="h-4 w-4 rounded border-stone-300 text-accent focus:ring-ring"
              />
              {b}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="text-xs font-semibold uppercase tracking-wider text-stone-500">
          Price (DZD)
        </legend>
        <div className="flex gap-2">
          <input
            type="number"
            min={0}
            placeholder="Min"
            value={value.priceMin ?? ""}
            onChange={(e) =>
              onChange({
                ...value,
                priceMin: e.target.value === "" ? null : Number(e.target.value),
              })
            }
            className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/40"
          />
          <input
            type="number"
            min={0}
            placeholder="Max"
            value={value.priceMax ?? ""}
            onChange={(e) =>
              onChange({
                ...value,
                priceMax: e.target.value === "" ? null : Number(e.target.value),
              })
            }
            className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/40"
          />
        </div>
      </fieldset>

      <fieldset className="space-y-2">
        <legend className="text-xs font-semibold uppercase tracking-wider text-stone-500">
          Condition
        </legend>
        <div className="flex flex-col gap-2">
          {conditionKeys.map((c) => (
            <label key={c} className="flex cursor-pointer items-center gap-2 text-sm text-stone-700">
              <input
                type="checkbox"
                checked={value.conditions.includes(c)}
                onChange={() =>
                  onChange({
                    ...value,
                    conditions: toggleArray(value.conditions, c),
                  })
                }
                className="h-4 w-4 rounded border-stone-300 text-accent focus:ring-ring"
              />
              {conditionLabels[c]}
            </label>
          ))}
        </div>
      </fieldset>
    </aside>
  );
}

export { defaultFilters };
