import type { SelectHTMLAttributes } from "react";

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
};

export function SelectField({
  label,
  id,
  className = "",
  children,
  ...props
}: Props) {
  const sid = id ?? props.name;
  return (
    <div className="flex w-full flex-col gap-1.5">
      {label ? (
        <label htmlFor={sid} className="text-sm font-medium text-stone-700">
          {label}
        </label>
      ) : null}
      <select
        id={sid}
        className={`w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-foreground shadow-sm transition-shadow focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/40 ${className}`}
        {...props}
      >
        {children}
      </select>
    </div>
  );
}
