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
      className="group relative flex min-h-[140px] overflow-hidden rounded-2xl border border-border bg-stone-100 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:min-h-[160px]"
    >
      <Image
        src={image}
        alt=""
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, 25vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent" />
      <div className="relative z-10 mt-auto flex w-full flex-col gap-0.5 p-5">
        <span className="font-display text-xl text-white">{title}</span>
        {subtitle ? (
          <span className="text-sm text-white/85">{subtitle}</span>
        ) : null}
      </div>
    </Link>
  );
}
