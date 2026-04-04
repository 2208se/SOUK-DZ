import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-cta text-white shadow-[0_2px_14px_rgba(255,143,0,0.35)] hover:bg-cta-hover hover:shadow-[0_4px_18px_rgba(255,143,0,0.4)] active:scale-[0.98]",
  secondary:
    "bg-[var(--va-primary)] text-white shadow-[0_2px_12px_rgba(46,125,50,0.25)] hover:bg-[var(--va-primary-deep)] active:scale-[0.98]",
  outline:
    "border-2 border-[var(--va-border-strong)] bg-surface text-[var(--va-ink)] hover:border-[var(--va-primary)]/35 hover:bg-[var(--va-mint-subtle)] active:scale-[0.98]",
  ghost:
    "text-[var(--va-ink-muted)] hover:bg-[var(--va-mint-subtle)] hover:text-[var(--va-ink)] active:scale-[0.98]",
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: Props) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
