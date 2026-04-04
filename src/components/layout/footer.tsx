import Link from "next/link";
import { LogoLink } from "@/components/brand/logo";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--va-footer-border)] bg-[var(--va-footer)] text-green-50/90">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <LogoLink variant="light" className="pointer-events-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Second-hand fashion for Algeria — circular, local, and within reach.
            </p>
            <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-[#c8e6c9]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#81c784]" aria-hidden />
              Circular fashion · DZ
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#81c784]">
              Shop
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/marketplace"
                  className="text-white/85 transition-colors hover:text-[#ffcc80]"
                >
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  href="/marketplace?category=women"
                  className="text-white/85 transition-colors hover:text-[#ffcc80]"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  href="/marketplace?category=men"
                  className="text-white/85 transition-colors hover:text-[#ffcc80]"
                >
                  Men
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#81c784]">
              Sell
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/sell" className="text-white/85 transition-colors hover:text-[#ffcc80]">
                  List an item
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-white/85 transition-colors hover:text-[#ffcc80]">
                  Your profile
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#81c784]">
              Trust
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li>Buyer–seller chat</li>
              <li>Clear condition labels</li>
              <li>Local pickup &amp; delivery</li>
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/45">
          © {new Date().getFullYear()} Vinted Algeria — demo frontend · No real transactions.
        </p>
      </div>
    </footer>
  );
}
