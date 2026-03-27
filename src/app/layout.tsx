import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans, Great_Vibes } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm",
});

const signatureLogo = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-signature",
});

export const metadata: Metadata = {
  title: "Jayita Sharma | Product & Growth Strategist",
  description:
    "Product & Growth Strategist — marketplace platforms, discovery UX, and AI automation.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${signatureLogo.variable}`}>
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
