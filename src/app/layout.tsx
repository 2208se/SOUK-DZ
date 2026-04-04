import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

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
      className={`${dmSans.variable} ${fraunces.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
