"use client";

import React, { useEffect, useState } from "react";
import { allPosts } from "content-collections";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { formatDistance } from "date-fns";
import Image from "next/image";
import produkSapi from './produkSapi.json'
import produkAyam from './produkAyam.json'
import seafood from './seafood.json'
import frozenFood from './frozenFood.json'
import { ProductList } from "@/app/components/ProductList";

interface produkSapi {
  name: string;
  description: string;
  website: string;
  logo: string;
  story: string;
  stack: string[];
  thumbnail: string;
  year: string;
}



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
  const [visibleItems, setVisibleItems] = useState(4); // Default to showing 8 items

  // Function to show more items
  const showMoreItems = () => {
    setVisibleItems((prev) => prev + 4); // Show 4 more items each time
  };

  return (
    <div>
      <ProductList title="Daging Sapi" products={produkSapi} />
      <ProductList title="Frozen Food" products={frozenFood} />
      <ProductList title="Seafood" products={seafood} />
      

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
