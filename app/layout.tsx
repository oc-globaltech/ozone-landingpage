import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import I18nProvider from "@/components/I18nProvider";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ozone | OC Global Technology",
  description:
    "Ozone is OC Global Technology’s streaming platform for movies, creators, and AI-driven entertainment. Sign up for early access.",
  manifest: "/site.webmanifest",
  themeColor: "#0b0c10",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/ozlogo2.png", type: "image/png", sizes: "512x512" },
      { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/ozlogo2.png", sizes: "180x180" },
    ],
  },
  openGraph: {
    title: "Ozone | OC Global Technology",
    description:
      "Ozone is OC Global Technology’s streaming platform for movies, creators, and AI-driven entertainment. Sign up for early access.",
    url: "https://ozone.ocglobaltech.com",
    siteName: "Ozone",
    images: [{ url: "/ozlogo2.png", width: 512, height: 512 }],
  },
  twitter: {
    card: "summary",
    title: "Ozone | OC Global Technology",
    description:
      "Ozone is OC Global Technology’s streaming platform for movies, creators, and AI-driven entertainment. Sign up for early access.",
    images: ["/ozlogo2.png"],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6948552174888567"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js"
          strategy="beforeInteractive"
        />
        <I18nProvider>
          <SmoothScroll>{children}</SmoothScroll>
          <CookieBanner />
        </I18nProvider>
      </body>
    </html>
  );
}
