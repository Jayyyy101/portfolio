import "./globals.css";
import type { Metadata, Viewport } from "next";
import { DM_Sans, Great_Vibes } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-signature",
});

export const metadata: Metadata = {
  title: "Jayita Sharma | Product & Growth",
  description:
    "Product & Growth — aggregator and marketplace platforms, discovery UX, SEO-led scale, and AI automation (n8n agents in production).",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${greatVibes.variable}`}>
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
