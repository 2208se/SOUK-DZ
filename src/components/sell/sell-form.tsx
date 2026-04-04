"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectField } from "@/components/ui/select-field";
import { Textarea } from "@/components/ui/textarea";
import { categoryLabels, conditionLabels } from "@/lib/format";
import { LISTING_LOCATIONS } from "@/lib/wilayas";
import type { ProductCategory, ProductCondition } from "@/types";

type Preview = { url: string; name: string };

export function SellForm() {
  const router = useRouter();
  const [previews, setPreviews] = useState<Preview[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState<ProductCategory>("women");
  const [condition, setCondition] = useState<ProductCondition>("good");
  const [location, setLocation] = useState<string>(LISTING_LOCATIONS[0]);
  const [submitted, setSubmitted] = useState(false);

  const onFiles = useCallback((files: FileList | null) => {
    if (!files?.length) return;
    setPreviews((prev) => {
      prev.forEach((p) => URL.revokeObjectURL(p.url));
      return Array.from(files).map((f) => ({
        url: URL.createObjectURL(f),
        name: f.name,
      }));
    });
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => router.push("/marketplace"), 1200);
  };

  return (
    <form onSubmit={onSubmit} className="mt-10 flex flex-col gap-8">
      <div>
        <p className="text-sm font-medium text-stone-700">Photos</p>
        <p className="mt-1 text-xs text-muted">
          SRS: up to 10 photos — this demo accepts a few images for preview.
        </p>
        <label className="mt-3 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-surface py-10 transition-colors hover:border-stone-300">
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => onFiles(e.target.files)}
          />
          <span className="text-sm font-medium text-accent">Click to upload</span>
          <span className="mt-1 text-xs text-muted">PNG, JPG up to demo size</span>
        </label>
        {previews.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {previews.map((p) => (
              <div key={p.url} className="relative h-20 w-20 overflow-hidden rounded-lg border border-border">
                <Image src={p.url} alt={p.name} fill className="object-cover" sizes="80px" unoptimized />
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <Input
        label="Title"
        required
        placeholder="e.g. Linen shirt — sage, size M"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Textarea
        label="Description"
        required
        placeholder="Fabric, fit, flaws, how you wore it…"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <Input
          label="Price (DZD)"
          required
          type="number"
          min={0}
          placeholder="2500"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          label="Size"
          required
          placeholder="M, 42, 8Y…"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
      </div>

      <Input
        label="Brand"
        required
        placeholder="Brand or “unbranded”"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <SelectField
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value as ProductCategory)}
        >
          {(Object.keys(categoryLabels) as ProductCategory[]).map((c) => (
            <option key={c} value={c}>
              {categoryLabels[c]}
            </option>
          ))}
        </SelectField>
        <SelectField
          label="Condition"
          value={condition}
          onChange={(e) => setCondition(e.target.value as ProductCondition)}
        >
          {(Object.keys(conditionLabels) as ProductCondition[]).map((c) => (
            <option key={c} value={c}>
              {conditionLabels[c]}
            </option>
          ))}
        </SelectField>
      </div>

      <SelectField
        label="Location (city / wilaya)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        {LISTING_LOCATIONS.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </SelectField>

      {submitted ? (
        <p className="rounded-xl bg-green-50 px-4 py-3 text-sm text-accent">
          Listing saved locally (demo). Redirecting to marketplace…
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" className="sm:min-w-[160px]" disabled={submitted}>
          Publish listing
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push("/marketplace")}
          disabled={submitted}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
