import type { Metadata } from "next";

import "./globals.css";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Provider } from "./provider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://fahrezi.fyi"),
  title: "Ikhwan Butcher - Bogor",
  description: "Software Engineer",
  openGraph: {
    type: "website",
    url: "https://fahrezi.fyi",
    description: "Frontend Engineer",
    title: "Fahrezi Adha",
    siteName: "Fahrezi Adha",
    locale: "en_US",
    images: [
      {
        url: "/Ikhwan_Butcher.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@fahreziadhaa",
    title: "Fahrezi Adha",
    description: "Frontend Engineer",
    images: "/Ikhwan_Butcher.png",
    creator: "@fahreziadhaa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-background font-sans text-foreground antialiased ${GeistSans.variable} ${GeistMono.variable}`}
      >
        <Toaster position="top-center"/>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
