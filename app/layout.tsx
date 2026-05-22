import { Analytics } from "@vercel/analytics/next";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TradeConnectAI | Practical AI toolbox for small trade businesses",
  description:
    "A practical AI toolbox for sole traders and small trade businesses. Capture missed calls, keep jobs organised and update customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

