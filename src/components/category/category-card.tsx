import Image from "next/image";
import Link from "next/link";

type Props = {
  href: string;
  title: string;
  subtitle?: string;
  image: string;
};

export function CategoryCard({ href, title, subtitle, image }: Props) {
  return (
    <Link
      href={href}
      className="group relative flex min-h-[140px] overflow-hidden rounded-2xl border-2 border-[var(--va-border)] bg-stone-100 shadow-[0_4px_20px_rgba(26,47,34,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--va-primary)]/40 hover:shadow-[0_12px_36px_rgba(46,125,50,0.15)] sm:min-h-[160px]"
    >
      <Image
        src={image}
        alt=""
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, 25vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--va-footer)]/85 via-[var(--va-primary)]/25 to-transparent" />
      <div className="relative z-10 mt-auto flex w-full flex-col gap-0.5 p-5">
        <span className="font-display text-xl text-white">{title}</span>
        {subtitle ? (
          <span className="text-sm text-white/85">{subtitle}</span>
        ) : null}
      </div>
    </Link>
  );
}
