"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "vinted-dz-favorites";

type FavoritesContextValue = {
  favorites: Set<string>;
  toggle: (productId: string) => void;
  has: (productId: string) => boolean;
  ready: boolean;
};

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Set<string>>(() => new Set());
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        // Hydrate from localStorage after mount (avoids SSR mismatch).
        // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional
        setFavorites(new Set(JSON.parse(raw) as string[]));
      }
    } catch {
      /* ignore */
    }
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

  const value = useMemo(
    () => ({ favorites, toggle, has, ready }),
    [favorites, toggle, has, ready],
  );

  return (
    <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }
  return ctx;
}
