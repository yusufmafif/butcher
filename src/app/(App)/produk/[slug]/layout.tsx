import { allPosts } from "content-collections";
import { ResolvingMetadata } from "next";
import React from "react";

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
) {
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post) return null;

  return {
    ...parent,
    title: post.title,
    openGraph: {
      type: "website",
      url: `https://ikhwan-butcher.vercel.app/${post.slug}`,
      description: "",
      title: post.title,
      siteName: "Ikhwan Butcher",
      images: [
        {
          url: `https://ikhwan-butcher.vercel.app/${post.slug}/og`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@ikhwanbutcher",
      title: post.title,
      description: "",
      images: [
        {
          url: `https://ikhwan-butcher.vercel.app/blog/${post.slug}/og`,
        },
      ],
      creator: "@ikhwanbutcher",
    },
  };
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
