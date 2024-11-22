"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="container max-w-[680px] mt-6 lg:mt-10 flex flex-row items-center gap-5 justify-center">
      
      <div className="flex flex-row items-center tracking-tight gap-4 md:gap-6">
        <a href="/" className="hover:opacity-70">
        <Image className="absolute top-5 left-5" src="/Butcher.png" width={60} height={60} alt="logo" />
        </a>
        <a href="/" className="hover:opacity-70">
          home
        </a>
        <a href="/produk" className="hover:opacity-70">
          produk
        </a>
        <a href="/contact" className="hover:opacity-70">
          contact
        </a>
      </div>
      {/* <div className="flex flex-row items-center gap-4 md:gap-6 ">
        {isClient ? (
          <button
            type="button"
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
            className="transition-all hover:opacity-70"
          >
            {theme === "dark" ? <SunIcon size={16}/> : <MoonIcon size={16}/>}
          </button>
        ) : null}
      </div> */}
    </div>
  );
};
