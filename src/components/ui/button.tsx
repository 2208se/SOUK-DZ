import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-sm hover:bg-accent-hover active:scale-[0.98]",
  secondary:
    "bg-stone-900 text-white shadow-sm hover:bg-stone-800 active:scale-[0.98]",
  outline:
    "border border-border bg-surface text-foreground hover:bg-stone-50 active:scale-[0.98]",
  ghost: "text-foreground hover:bg-stone-100/80 active:scale-[0.98]",
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
