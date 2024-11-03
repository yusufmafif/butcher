"use client";

import React, { useEffect, useState } from "react";
import { allPosts } from "content-collections";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { formatDistance } from "date-fns";
import Image from "next/image";

const dagingSapi = [
  {
    name: "Daging",
    description: "Berbagai daging berkualitas",
    website: "https://evaly.io",
    logo: "/evaly.webp",
    story: "/project/evaly",
    stack: [
      "Rendang",
      "Giling",
      "Slices",
      "Tenderloin",
      "Tetelan",
      "Paru",
      "Dll",
    ],
    thumbnail: "/daging.webp",
    year: "2024",
  },
  {
    name: "Daging Ayam",
    description: "Berbagai bagian ayam berkualitas",
    website: "https://evaly.io",
    logo: "/evaly.webp",
    story: "/project/evaly",
    stack: [
      "Ayam Sehat",
      "Berbagai bagian ayam",
      "Fillet",
      "Hati",
      "Ceker",
      "Kulit",
      "Dll",
    ],
    thumbnail: "/ayam.webp",
    year: "2024",
  },
  {
    name: "Daging Domba",
    description: "Domba berkualitas yang disembelih sendiri",
    website: "https://evaly.io",
    logo: "/evaly.webp",
    story: "/project/evaly",
    stack: [
      "Lamb Steak",
      "Iga",
      "Kepala",
      "Dll",
    ],
    thumbnail: "/domba.webp",
    year: "2024",
  },
  {
    name: "Seafood",
    description: "Berbagai seafood berkualitas",
    website: "https://typehere.fun",
    logo: "/typehere.webp",
    story: "/project/typehere",
    stack: ["Ikan", "Udang", "Cumi", "Dll"],
    thumbnail: "/seaafood.webp",
    year: "2024",
  },
  {
    name: "Frozen Food",
    description: "Berbagai frozen food halal & lezat",
    website: "https://typehere.fun",
    logo: "/typehere.webp",
    story: "/project/typehere",
    stack: ["Nugget", "Sosis", "French Fries", "Dll"],
    thumbnail: "/sosis.webp",
    year: "2024",
  },
  {
    name: "Dan lain-lain",
    website: "https://github.com/ikhwanbutcher",
    description: "Open-source quiz generator tool for teacher.",
    story: "/project/bikinsoal",
    thumbnail: "/basmati.webp",
    stack: ["Aneka bumbu", "Beras", "Saus", "Aneka rempah", "Dll"],
    year: "2023",
  }
];

const dagingAyam = [
  {
    name: "Daging",
    description: "Berbagai daging berkualitas",
    website: "https://evaly.io",
    logo: "/evaly.webp",
    story: "/project/evaly",
    stack: [
      "Rendang",
      "Giling",
      "Slices",
      "Tenderloin",
      "Tetelan",
      "Paru",
      "Dll",
    ],
    thumbnail: "/daging.webp",
    year: "2024",
  },
  {
    name: "Daging Ayam",
    description: "Berbagai bagian ayam berkualitas",
    website: "https://evaly.io",
    logo: "/evaly.webp",
    story: "/project/evaly",
    stack: [
      "Ayam Sehat",
      "Berbagai bagian ayam",
      "Fillet",
      "Hati",
      "Ceker",
      "Kulit",
      "Dll",
    ],
    thumbnail: "/ayam.webp",
    year: "2024",
  },
  {
    name: "Daging Domba",
    description: "Domba berkualitas yang disembelih sendiri",
    website: "https://evaly.io",
    logo: "/evaly.webp",
    story: "/project/evaly",
    stack: [
      "Lamb Steak",
      "Iga",
      "Kepala",
      "Dll",
    ],
    thumbnail: "/domba.webp",
    year: "2024",
  },
  {
    name: "Seafood",
    description: "Berbagai seafood berkualitas",
    website: "https://typehere.fun",
    logo: "/typehere.webp",
    story: "/project/typehere",
    stack: ["Ikan", "Udang", "Cumi", "Dll"],
    thumbnail: "/seaafood.webp",
    year: "2024",
  },
  {
    name: "Frozen Food",
    description: "Berbagai frozen food halal & lezat",
    website: "https://typehere.fun",
    logo: "/typehere.webp",
    story: "/project/typehere",
    stack: ["Nugget", "Sosis", "French Fries", "Dll"],
    thumbnail: "/sosis.webp",
    year: "2024",
  },
  {
    name: "Dan lain-lain",
    website: "https://github.com/ikhwanbutcher/ikhwanbutcher",
    description: "Open-source quiz generator tool for teacher.",
    story: "/project/bikinsoal",
    thumbnail: "/basmati.webp",
    stack: ["Aneka bumbu", "Beras", "Saus", "Aneka rempah", "Dll"],
    year: "2023",
  }
];

const Page = () => {
  // const [isClientIndonesian, setIsClientIndonesian] = useState<boolean>();
  // useEffect(() => {
  //   setIsClientIndonesian(localStorage.getItem("location") === "ID");
  // }, []);
  // const posts = allPosts
  //   .filter((e) => e._meta.directory === (isClientIndonesian ? "id" : "en"))
  //   .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  // if (isClientIndonesian === undefined) {
  //   return <div className="container max-w-[680px]">Loading...</div>;
  // }



  return (
    <div>
      <p className="font-medium mt-10 sm:text-2xl text-xl text-center pb-5">Daging Sapi :</p>
      <div className="container max-w-[1080px] grid md:grid-cols-4 grid-cols-2 gap-6">
        {dagingSapi.map((post, index) => (
          <Link
            key={index}
            href={`/blog/${post.name}`}
            className="flex flex-col items-start border border-foreground/0 hover:bg-foreground/5 hover:border-foreground/10 transition-all rounded-md -m-3 p-3"
          >
            <Image src={post.thumbnail} alt={post.name} width={400} height={300} className="aspect-square object-cover rounded-lg border border-foreground/5 shadow-sm w-full h-auto" />
            <p className="mt-4 mx-auto">{post.name}</p>
            {/* <span className="opacity-50">
                {formatDistance(post.createdAt, new Date(), {
                  addSuffix: true,
                  })}
                  </span> */}
            {/* <Views slug={post.slug} /> */}
          </Link>
        ))}
      </div>

      <p className="font-medium mt-10 sm:text-2xl text-xl text-center pb-5">Daging Ayam :</p>
     <div className="container max-w-[1080px] grid md:grid-cols-4 grid-cols-2 gap-6">
        {dagingSapi.map((post, index) => (
          <Link
            key={index}
            href={`/blog/${post.name}`}
            className="flex flex-col items-start border border-foreground/0 hover:bg-foreground/5 hover:border-foreground/10 transition-all rounded-md -m-3 p-3"
          >
            <Image src={post.thumbnail} alt={post.name} width={400} height={300} className="aspect-square object-cover rounded-lg border border-foreground/5 shadow-sm w-full h-auto" />
            <p className="mt-4 mx-auto">{post.name}</p>
            {/* <span className="opacity-50">
                {formatDistance(post.createdAt, new Date(), {
                  addSuffix: true,
                  })}
                  </span> */}
            {/* <Views slug={post.slug} /> */}
          </Link>
        ))}
      </div> 

      <p className="font-medium mt-10 sm:text-2xl text-xl text-center pb-5">Daging Domba :</p>
     <div className="container max-w-[1080px] grid md:grid-cols-4 grid-cols-2 gap-6">
        {dagingSapi.map((post, index) => (
          <Link
            key={index}
            href={`/blog/${post.name}`}
            className="flex flex-col items-start border border-foreground/0 hover:bg-foreground/5 hover:border-foreground/10 transition-all rounded-md -m-3 p-3"
          >
            <Image src={post.thumbnail} alt={post.name} width={400} height={300} className="aspect-square object-cover rounded-lg border border-foreground/5 shadow-sm w-full h-auto" />
            <p className="mt-4 mx-auto">{post.name}</p>
            {/* <span className="opacity-50">
                {formatDistance(post.createdAt, new Date(), {
                  addSuffix: true,
                  })}
                  </span> */}
            {/* <Views slug={post.slug} /> */}
          </Link>
        ))}
      </div> 

      <p className="font-medium mt-10 sm:text-2xl text-xl text-center pb-5">Seafood :</p>
     <div className="container max-w-[1080px] grid md:grid-cols-4 grid-cols-2 gap-6">
        {dagingSapi.map((post, index) => (
          <Link
            key={index}
            href={`/blog/${post.name}`}
            className="flex flex-col items-start border border-foreground/0 hover:bg-foreground/5 hover:border-foreground/10 transition-all rounded-md -m-3 p-3"
          >
            <Image src={post.thumbnail} alt={post.name} width={400} height={300} className="aspect-square object-cover rounded-lg border border-foreground/5 shadow-sm w-full h-auto" />
            <p className="mt-4 mx-auto">{post.name}</p>
            {/* <span className="opacity-50">
                {formatDistance(post.createdAt, new Date(), {
                  addSuffix: true,
                  })}
                  </span> */}
            {/* <Views slug={post.slug} /> */}
          </Link>
        ))}
      </div> 

      <p className="font-medium mt-10 sm:text-2xl text-xl text-center pb-5">Frozen Food :</p>
     <div className="container max-w-[1080px] grid md:grid-cols-4 grid-cols-2 gap-6">
        {dagingSapi.map((post, index) => (
          <Link
            key={index}
            href={`/blog/${post.name}`}
            className="flex flex-col items-start border border-foreground/0 hover:bg-foreground/5 hover:border-foreground/10 transition-all rounded-md -m-3 p-3"
          >
            <Image src={post.thumbnail} alt={post.name} width={400} height={300} className="aspect-square object-cover rounded-lg border border-foreground/5 shadow-sm w-full h-auto" />
            <p className="mt-4 mx-auto">{post.name}</p>
            {/* <span className="opacity-50">
                {formatDistance(post.createdAt, new Date(), {
                  addSuffix: true,
                  })}
                  </span> */}
            {/* <Views slug={post.slug} /> */}
          </Link>
        ))}
      </div> 

      <p className="font-medium mt-10 sm:text-2xl text-xl text-center pb-5">Dan lain-lain :</p>
     <div className="container max-w-[1080px] grid md:grid-cols-4 grid-cols-2 gap-6">
        {dagingSapi.map((post, index) => (
          <Link
            key={index}
            href={`/blog/${post.name}`}
            className="flex flex-col items-start border border-foreground/0 hover:bg-foreground/5 hover:border-foreground/10 transition-all rounded-md -m-3 p-3"
          >
            <Image src={post.thumbnail} alt={post.name} width={400} height={300} className="aspect-square object-cover rounded-lg border border-foreground/5 shadow-sm w-full h-auto" />
            <p className="mt-4 mx-auto">{post.name}</p>
            {/* <span className="opacity-50">
                {formatDistance(post.createdAt, new Date(), {
                  addSuffix: true,
                  })}
                  </span> */}
            {/* <Views slug={post.slug} /> */}
          </Link>
        ))}
      </div> 
    </div>
  );
};

function Views({ slug }: { slug: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ["views"],
    queryFn: async () => await fetch(`/api/views`).then((r) => r.json()),
    refetchOnWindowFocus: false,
  });

  const views =
    data?.find((v: any) => v.id === slug.replace("-en", "").replace("-id", ""))
      ?.views || 1;

  if (isLoading) return <div className="w-[60px] h-[16px] my-1 " />;

  return <span className="opacity-50">{views} views</span>;
}

export default Page;
