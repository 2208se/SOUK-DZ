"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import type { Conversation, Message } from "@/types";

type Props = {
  conversation: Conversation | null;
  messages: Message[];
  onSend: (body: string) => void;
};

export function ChatWindow({ conversation, messages, onSend }: Props) {
  const [draft, setDraft] = useState("");

  if (!conversation) {
    return (
      <div className="flex flex-1 items-center justify-center bg-background p-8 text-center text-sm text-muted">
        Select a conversation to view messages.
      </div>
    );
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const t = draft.trim();
    if (!t) return;
    onSend(t);
    setDraft("");
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-background">
      <div className="flex items-center gap-3 border-b border-border bg-surface px-4 py-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-stone-200">
          <Image
            src={conversation.peerAvatar}
            alt=""
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div>
          <p className="font-medium text-stone-900">{conversation.peerName}</p>
          <p className="text-xs text-muted">Usually replies within a few hours</p>
        </div>
      </div>

      {conversation.listingId &&
      conversation.listingTitle &&
      conversation.listingImage ? (
        <Link
          href={`/product/${conversation.listingId}`}
          className="flex items-center gap-3 border-b border-[var(--va-border)] bg-[var(--va-mint-subtle)]/80 px-4 py-2.5 transition-colors hover:bg-[var(--va-mint-subtle)]"
        >
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-border bg-stone-100">
            <Image
              src={conversation.listingImage}
              alt=""
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold uppercase tracking-wider text-stone-500">
              About this listing
            </p>
            <p className="truncate text-sm font-medium text-stone-900">{conversation.listingTitle}</p>
            {conversation.listingPrice != null ? (
              <p className="text-xs text-muted">
                {formatPrice(conversation.listingPrice, "DZD")}
              </p>
            ) : null}
          </div>
          <span className="shrink-0 text-xs font-medium text-accent">View</span>
        </Link>
      ) : null}

      <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-4">
        {messages.map((m) => {
          const mine = m.senderId === "me";
          return (
            <div
              key={m.id}
              className={`flex ${mine ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
                  mine
                    ? "rounded-br-md bg-accent text-white"
                    : "rounded-bl-md border border-border bg-surface text-stone-800"
                }`}
              >
                {m.body}
              </div>
            </div>
          );
        })}
      </div>

      <form
        onSubmit={submit}
        className="border-t border-border bg-surface p-3 sm:flex sm:items-end sm:gap-2"
      >
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Write a message…"
          rows={2}
          className="mb-2 w-full resize-none rounded-xl border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/40 sm:mb-0"
        />
        <Button type="submit" className="w-full shrink-0 sm:w-auto sm:px-6">
          Send
        </Button>
      </form>
    </div>
  );
}
