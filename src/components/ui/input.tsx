import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
  error?: string;
};

export function Input({ label, hint, error, id, className = "", ...props }: Props) {
  const inputId = id ?? props.name;
  return (
    <div className="flex w-full flex-col gap-1.5">
      {label ? (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-stone-700"
        >
          {label}
        </label>
      ) : null}
      <input
        id={inputId}
        className={`w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-foreground shadow-sm transition-shadow placeholder:text-stone-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/40 ${className}`}
        {...props}
      />
      {error ? (
        <p className="text-xs text-red-600">{error}</p>
      ) : hint ? (
        <p className="text-xs text-muted">{hint}</p>
      ) : null}
    </div>
  );
}
