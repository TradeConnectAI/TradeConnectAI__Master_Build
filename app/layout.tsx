import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const siteUrl = "https://www.tradeconnectai.co.uk";
const title = "TradeConnectAI — The job, quote and customer app for tradespeople";
const description =
  "Less admin. More time. TradeConnectAI is the job, quote and customer app built for tradespeople. Keep jobs, photos, quotes, appointments and customer updates together — without spending your evenings doing admin.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "TradeConnectAI",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png", sizes: "64x64" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "TradeConnectAI",
    locale: "en_GB",
    title,
    description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "TradeConnectAI — Your jobs. Your quotes. Your customers. One app.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f2a3d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
