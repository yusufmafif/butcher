import type { Metadata } from "next";
import Head from 'next/head';
import "./globals.css";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Provider } from "./provider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://ikhwan-butcher.vercel.app"),
  title: "Ikhwan Butcher - Bogor",
  description: "Toko Daging Ayam Ikhwan Butcher Bogor",
  openGraph: {
    type: "website",
    url: "https://ikhwan-butcher.vercel.app",
    description: "Toko Daging Ayam Ikhwan Butcher Bogor",
    title: "Ikhwan Butcher",
    siteName: "Ikhwan Butcher",
    locale: "en_US",
    images: [
      {
        url: "/Ikhwan_Butcher.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ikhwanbutcher",
    title: "Ikhwan Butcher",
    description: "Toko Daging Ayam Ikhwan Butcher Bogor",
    images: "/Ikhwan_Butcher.png",
    creator: "@ikhwanbutcher",
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
  verification: {
    google: "DDd59BTuEsfdEUYCVdtJLZvK9vVOJx5_QhQ7cPr--hY",
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
        <Toaster position="top-center" />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
