"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [authOpen, setAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState<"login" | "signup">("login");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [q, setQ] = useState("");

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (q.trim()) params.set("q", q.trim());
    router.push(`/marketplace?${params.toString()}`);
    setMobileOpen(false);
  };

  const navLink = (href: string, label: string) => {
    const active = pathname === href;
    return (
      <Link
        href={href}
        className={`text-sm font-medium transition-colors ${
          active ? "text-accent" : "text-stone-600 hover:text-stone-900"
        }`}
        onClick={() => setMobileOpen(false)}
      >
        {label}
      </Link>
    );
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/80 bg-surface/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
          <Link
            href="/"
            className="shrink-0 font-display text-lg tracking-tight text-stone-900 transition-opacity hover:opacity-80"
          >
            Vinted Algeria
          </Link>

          <form
            onSubmit={onSearch}
            className="hidden min-w-0 flex-1 md:block md:max-w-md md:pl-4"
          >
            <Input
              name="q"
              placeholder="Search brands, items…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="py-2"
              aria-label="Search"
            />
          </form>

          <nav className="ml-auto hidden items-center gap-6 md:flex">
            {navLink("/marketplace", "Browse")}
            {navLink("/sell", "Sell")}
            {navLink("/messages", "Messages")}
            {navLink("/profile", "Profile")}
            <Button
              variant="outline"
              className="rounded-full px-4 py-2 text-sm"
              onClick={() => setAuthOpen(true)}
            >
              Log in
            </Button>
          </nav>

          <button
            type="button"
            className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface md:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <svg className="h-5 w-5 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-stone-900/40"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col gap-4 border-l border-border bg-surface p-6 shadow-xl">
            <form onSubmit={onSearch} className="flex flex-col gap-3">
              <Input
                placeholder="Search…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                aria-label="Search"
              />
              <Button type="submit" className="w-full">
                Search
              </Button>
            </form>
            <div className="flex flex-col gap-4 border-t border-border pt-4">
              <Link href="/marketplace" className="text-sm font-medium text-stone-800" onClick={() => setMobileOpen(false)}>
                Browse
              </Link>
              <Link href="/sell" className="text-sm font-medium text-stone-800" onClick={() => setMobileOpen(false)}>
                Sell
              </Link>
              <Link href="/messages" className="text-sm font-medium text-stone-800" onClick={() => setMobileOpen(false)}>
                Messages
              </Link>
              <Link href="/profile" className="text-sm font-medium text-stone-800" onClick={() => setMobileOpen(false)}>
                Profile
              </Link>
              <Button variant="outline" className="w-full" onClick={() => { setAuthOpen(true); setMobileOpen(false); }}>
                Log in
              </Button>
            </div>
          </div>
        </div>
      ) : null}

      <Modal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        title={authTab === "login" ? "Welcome back" : "Create an account"}
      >
        <div className="flex gap-2 rounded-full bg-stone-100 p-1">
          <button
            type="button"
            onClick={() => setAuthTab("login")}
            className={`flex-1 rounded-full py-2 text-sm font-medium transition-colors ${
              authTab === "login" ? "bg-surface text-stone-900 shadow-sm" : "text-stone-500"
            }`}
          >
            Log in
          </button>
          <button
            type="button"
            onClick={() => setAuthTab("signup")}
            className={`flex-1 rounded-full py-2 text-sm font-medium transition-colors ${
              authTab === "signup" ? "bg-surface text-stone-900 shadow-sm" : "text-stone-500"
            }`}
          >
            Sign up
          </button>
        </div>
        <div className="mt-6 flex flex-col gap-4">
          <Input label="Email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
          <Input
            label="Password"
            name="password"
            type="password"
            autoComplete={authTab === "login" ? "current-password" : "new-password"}
            placeholder="••••••••"
          />
          {authTab === "signup" ? (
            <Input label="Display name" name="name" autoComplete="name" placeholder="How should sellers see you?" />
          ) : null}
          <p className="text-xs text-muted">
            This is a UI preview only — no account is created.
          </p>
          <Button className="w-full" onClick={() => setAuthOpen(false)}>
            {authTab === "login" ? "Continue" : "Create account"}
          </Button>
        </div>
      </Modal>
    </>
  );
}
