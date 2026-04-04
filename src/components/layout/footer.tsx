import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg text-stone-900">Vinted Algeria</p>
            <p className="mt-2 max-w-xs text-sm text-muted leading-relaxed">
              Second-hand fashion for Algeria. List in minutes, chat safely, ship nationwide.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Shop
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/marketplace" className="text-stone-700 hover:text-accent transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/marketplace?category=women" className="text-stone-700 hover:text-accent transition-colors">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/marketplace?category=men" className="text-stone-700 hover:text-accent transition-colors">
                  Men
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Sell
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/sell" className="text-stone-700 hover:text-accent transition-colors">
                  List an item
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-stone-700 hover:text-accent transition-colors">
                  Your profile
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Trust
            </p>
            <ul className="mt-3 space-y-2 text-sm text-stone-700">
              <li>Buyer–seller chat</li>
              <li>Clear condition labels</li>
              <li>Local pickup &amp; delivery</li>
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-border pt-8 text-center text-xs text-muted">
          © {new Date().getFullYear()} Vinted Algeria — demo frontend, no real transactions.
        </p>
      </div>
    </footer>
  );
}
