"use client";

import type { ReactNode } from "react";
import { FavoritesProvider } from "@/components/providers/favorites-context";

export function AppProviders({ children }: { children: ReactNode }) {
  return <FavoritesProvider>{children}</FavoritesProvider>;
}
