import React from "react";
import { allPosts } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import { format, formatDistance } from "date-fns";
import { id } from "date-fns/locale/id";
import Views from "./views";
import Image from "next/image";
import produkSapi from '../produkSapi.json'

export const dynamic = "force-static";

const Page = ({ params }: { params: { slug: string } }) => {
  const produk = produkSapi.find((p) => p.name === params.slug)
  if (!produk) return notFound();
  
  return (
    <div className="container max-w-[680px]">
      {produk?.website}
      {produk?.description}
      {produk?.price}

      {/* <h2 className="text-2xl text-start tracking-tight font-bold font-mono">
        {post.title}
      </h2>
      <div className="list-disc flex flex-row items-center justify-between mt-2 opacity-50 font-mono  text-sm">
        <span>
          {format(post.createdAt, "MMMM dd,  yyyy")} (
          {formatDistance(post.createdAt, new Date(), {
            addSuffix: true,
          })}
          )
        </span>
        <Views slug={post.slug} />
      </div>

      <Image src={post.thumbnail} alt={post.title} width={680} height={400} className="w-full aspect-video object-cover mt-4"/>
      <div className="prose dark:prose-invert  prose-zinc mt-8">
        <MDXContent code={post.mdx} />
      </div> */}
      <div>{params.slug}</div>
    </div>
  );
};

export default Page;
