import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.tradeconnectai.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "TradeConnectAI | AI POWERED. TRADE FOCUSED.",
  description:
    "AI POWERED. TRADE FOCUSED. Job flow for sole-trader and 2-van UK plumbers — catch enquiries, create job cards, and send a quote or customer text from your phone. From £29/mo.",
  applicationName: "TradeConnectAI",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "TradeConnectAI",
    title: "TradeConnectAI | AI POWERED. TRADE FOCUSED.",
    description:
      "AI POWERED. TRADE FOCUSED. Job flow for sole-trader and 2-van UK plumbers. From £29/mo.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "TradeConnectAI — AI POWERED. TRADE FOCUSED.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TradeConnectAI | AI POWERED. TRADE FOCUSED.",
    description:
      "AI POWERED. TRADE FOCUSED. Job flow for sole-trader and 2-van UK plumbers. From £29/mo.",
    images: ["/og.png"],
  },
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
