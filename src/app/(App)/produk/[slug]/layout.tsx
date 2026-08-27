import { ResolvingMetadata } from "next";
import React from "react";

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
) {
  const name = decodeURIComponent(params.slug);

  return {
    ...parent,
    title: `${name} | Ikhwan Butcher`,
    openGraph: {
      type: "website",
      url: `https://ikhwan-butcher.vercel.app/produk/${params.slug}`,
      description: name,
      title: `${name} | Ikhwan Butcher`,
      siteName: "Ikhwan Butcher",
    },
    twitter: {
      card: "summary_large_image",
      site: "@ikhwanbutcher",
      title: `${name} | Ikhwan Butcher`,
      description: name,
      creator: "@ikhwanbutcher",
    },
  };
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
