"use client";

import Link from "next/link";
import { useId } from "react";

type Tone = "emerald" | "light";

/** Hangtag + leaf — Vinted Algeria brand mark. */
export function LogoMark({
  className = "h-9 w-9",
  tone = "emerald",
}: {
  className?: string;
  tone?: Tone;
}) {
  const uid = useId().replace(/:/g, "");

  if (tone === "light") {
    return (
      <svg
        className={className}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M12 6h16l6 8v18a4 4 0 01-4 4H10a4 4 0 01-4-4V14l6-8z"
          fill="white"
          opacity="0.92"
        />
        <path
          d="M20 18c-2 4-6 6-6 10 0 3 2.5 5 6 5s6-2 6-5c0-4-4-6-6-10z"
          fill="#ffb74d"
        />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={`va-g-${uid}`} x1="8" y1="4" x2="32" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#43a047" />
          <stop offset="1" stopColor="#1b5e20" />
        </linearGradient>
      </defs>
      <path
        d="M12 6h16l6 8v18a4 4 0 01-4 4H10a4 4 0 01-4-4V14l6-8z"
        fill={`url(#va-g-${uid})`}
        opacity="0.96"
      />
      <path
        d="M20 8v6M14 11h12"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M20 18c-2 4-6 6-6 10 0 3 2.5 5 6 5s6-2 6-5c0-4-4-6-6-10z"
        fill="#ff8f00"
      />
      <path
        d="M20 22v8M17 25h6"
        stroke="#1a2f22"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.2"
      />
    </svg>
  );
}

type LogoProps = {
  className?: string;
  variant?: "default" | "light";
};

export function LogoWordmark({ className = "", variant = "default" }: LogoProps) {
  const isLight = variant === "light";
  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span className="font-display text-lg font-extrabold tracking-tight sm:text-xl">
        <span className={isLight ? "text-[#c8e6c9]" : "text-[var(--va-primary)]"}>SOUKDZ</span>
        <span className={isLight ? "text-white" : " text-[var(--va-ink)]"}> </span>
      </span>
      <span
        className={`mt-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] ${
          isLight ? "text-white/50" : "text-[var(--va-primary)]/75"
        }`}
      >
        Second-hand · DZ
      </span>
    </span>
  );
}

export function LogoLink({
  className = "",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "light";
}) {
  const tone = variant === "light" ? "light" : "emerald";
  return (
    <Link
      href="/"
      className={`group flex shrink-0 items-center gap-2.5 rounded-xl py-1 transition-opacity hover:opacity-90 ${className}`}
    >
      <LogoMark
        className="h-9 w-9 transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10"
        tone={tone}
      />
      <LogoWordmark variant={variant} />
    </Link>
  );
}
