import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "sojubutt",
  description: "useless useful things and stuff",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="animate-glitch-trigger">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
