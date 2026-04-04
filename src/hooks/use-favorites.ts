"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "vinted-dz-favorites";

function readFavorites(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw) as string[];
    return new Set(parsed);
  } catch {
    return new Set();
  }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setFavorites(readFavorites());
    setReady(true);
  }, []);

  const persist = useCallback((next: Set<string>) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
  }, []);

  const toggle = useCallback(
    (productId: string) => {
      setFavorites((prev) => {
        const next = new Set(prev);
        if (next.has(productId)) next.delete(productId);
        else next.add(productId);
        persist(next);
        return next;
      });
    },
    [persist],
  );

  const has = useCallback(
    (productId: string) => favorites.has(productId),
    [favorites],
  );

  return { favorites, toggle, has, ready };
}
