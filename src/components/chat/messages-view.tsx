"use client";

import { useMemo, useState } from "react";
import { ChatWindow } from "@/components/chat/chat-window";
import { ConversationList } from "@/components/chat/conversation-list";
import {
  mockConversations,
  mockMessagesByConversation,
} from "@/lib/mock-data";
import type { Message } from "@/types";

export function MessagesView() {
  const [selectedId, setSelectedId] = useState<string | null>(
    mockConversations[0]?.id ?? null,
  );
  const [messagesByConv, setMessagesByConv] = useState(mockMessagesByConversation);

  const conversation = useMemo(
    () => mockConversations.find((c) => c.id === selectedId) ?? null,
    [selectedId],
  );

  const messages = selectedId ? messagesByConv[selectedId] ?? [] : [];

  const onSend = (body: string) => {
    if (!selectedId) return;
    const list = messagesByConv[selectedId] ?? [];
    const next: Message = {
      id: `local-${Date.now()}`,
      conversationId: selectedId,
      senderId: "me",
      body,
      sentAt: new Date().toISOString(),
    };
    setMessagesByConv({
      ...messagesByConv,
      [selectedId]: [...list, next],
    });
  };

  return (
    <div className="mx-auto flex max-w-6xl flex-col px-0 py-4 sm:px-6 sm:py-8">
      <div className="px-4 sm:px-0">
        <h1 className="font-display text-2xl text-stone-900 sm:text-3xl">Messages</h1>
        <p className="mt-2 text-sm text-muted">
          Chat with sellers — mock thread, messages stay in this session only.
        </p>
      </div>

      <div className="mt-6 flex min-h-[calc(100vh-14rem)] overflow-hidden rounded-2xl border border-border bg-surface shadow-sm sm:mt-8">
        <div className="hidden w-full max-w-xs shrink-0 sm:block lg:max-w-sm">
          <ConversationList
            items={mockConversations}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col sm:border-l sm:border-border">
          <div className="border-b border-border p-3 sm:hidden">
            <label htmlFor="conv" className="sr-only">
              Conversation
            </label>
            <select
              id="conv"
              className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
              value={selectedId ?? ""}
              onChange={(e) => setSelectedId(e.target.value || null)}
            >
              {mockConversations.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.peerName}
                </option>
              ))}
            </select>
          </div>
          <ChatWindow
            conversation={conversation}
            messages={messages}
            onSend={onSend}
          />
        </div>
      </div>
    </div>
  );
}
