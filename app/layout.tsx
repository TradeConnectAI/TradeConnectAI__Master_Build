import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TradeConnectAI | Job flow for UK plumbers",
  description:
    "For sole-trader and 2-van UK plumbers. Catch enquiries, create job cards, and send a quote or customer text from your phone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
