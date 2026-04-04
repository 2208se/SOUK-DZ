"use client";

import Image from "next/image";
import type { Conversation } from "@/types";

type Props = {
  items: Conversation[];
  selectedId: string | null;
  onSelect: (id: string) => void;
};

function formatTime(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("fr-DZ", { day: "numeric", month: "short" });
}

export function ConversationList({ items, selectedId, onSelect }: Props) {
  return (
    <ul className="flex flex-col divide-y divide-border border-r border-border bg-surface">
      {items.map((c) => {
        const active = c.id === selectedId;
        return (
          <li key={c.id}>
            <button
              type="button"
              onClick={() => onSelect(c.id)}
              className={`flex w-full gap-3 px-4 py-3 text-left transition-colors ${
                active ? "bg-[var(--va-mint-subtle)]/95" : "hover:bg-stone-50"
              }`}
            >
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-stone-200">
                <Image src={c.peerAvatar} alt="" fill className="object-cover" sizes="48px" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="truncate font-medium text-stone-900">{c.peerName}</span>
                  <span className="shrink-0 text-xs text-muted">{formatTime(c.lastMessageAt)}</span>
                </div>
                {c.listingTitle ? (
                  <p className="truncate text-xs text-accent">{c.listingTitle}</p>
                ) : null}
                <p className="truncate text-sm text-muted">{c.lastMessage}</p>
              </div>
              {c.unread > 0 ? (
                <span className="mt-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-[10px] font-semibold text-white">
                  {c.unread}
                </span>
              ) : null}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
