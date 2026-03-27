import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jayita Sharma | Product & Growth",
  description: "Portfolio with login, analytics tracking, and inline editing.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
