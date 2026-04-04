import type { TextareaHTMLAttributes } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  hint?: string;
};

export function Textarea({ label, hint, id, className = "", ...props }: Props) {
  const tid = id ?? props.name;
  return (
    <div className="flex w-full flex-col gap-1.5">
      {label ? (
        <label htmlFor={tid} className="text-sm font-medium text-stone-700">
          {label}
        </label>
      ) : null}
      <textarea
        id={tid}
        className={`min-h-[120px] w-full resize-y rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-foreground shadow-sm transition-shadow placeholder:text-stone-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/40 ${className}`}
        {...props}
      />
      {hint ? <p className="text-xs text-muted">{hint}</p> : null}
    </div>
  );
}
