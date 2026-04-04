import type { Metadata, Viewport } from "next";
import { Inter, Nunito } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { AppProviders } from "@/components/providers/app-providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#2e7d32",
};

export const metadata: Metadata = {
  title: {
    default: "Vinted Algeria — Second-hand fashion",
    template: "%s · Vinted Algeria",
  },
  description:
    "Buy and sell second-hand clothes in Algeria. Browse curated pre-loved fashion, chat with sellers, and list items in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${nunito.variable} h-full scroll-smooth antialiased`}
    >
      {/* suppressHydrationWarning: extensions (e.g. ColorZilla) may inject attrs on <body> */}
      <body
        className="flex min-h-full flex-col bg-background font-sans text-foreground"
        suppressHydrationWarning
      >
        <AppProviders>
          <Navbar />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </AppProviders>
      </body>
    </html>
  );
}
