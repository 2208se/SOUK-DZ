"use client";

import Image from "next/image";
import { useState } from "react";

type Props = { images: string[]; title: string };

export function ProductGallery({ images, title }: Props) {
  const [index, setIndex] = useState(0);
  const main = images[index] ?? images[0];

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-stone-100 shadow-sm">
        <Image
          src={main}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>
      {images.length > 1 ? (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
                i === index ? "border-accent" : "border-transparent ring-1 ring-border"
              }`}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="64px" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
