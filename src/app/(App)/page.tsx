import Image from "next/image";
import Link from "next/link";
import Contacts from "../components/contacts";
import { ArrowBigRight } from "lucide-react";
import Component from "../components/banner";
import { id } from "date-fns/locale/id";

const products = [
  {
    name: "Daging",
    description: "Berbagai daging berkualitas",
    website: "/produk",
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
    website: "/produk",

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
    website: "/produk",
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
    website: "/produk",
    logo: "/typehere.webp",
    story: "/project/typehere",
    stack: ["Ikan", "Udang", "Cumi", "Dll"],
    thumbnail: "/seaafood.webp",
    year: "2024",
  },
  {
    name: "Frozen Food",
    description: "Berbagai frozen food halal & lezat",
    website: "/produk",
    logo: "/typehere.webp",
    story: "/project/typehere",
    stack: ["Nugget", "Sosis", "French Fries", "Dll"],
    thumbnail: "/sosis.webp",
    year: "2024",
  },
  {
    name: "Dan lain-lain",
    website: "/produk",
    description: "Open-source quiz generator tool for teacher.",
    story: "/project/bikinsoal",
    thumbnail: "/basmati.webp",
    stack: ["Aneka bumbu", "Beras", "Saus", "Aneka rempah", "Dll"],
    year: "2023",
  }
];

const Banner = [
  {
    id: 1,
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
    imageUrl: "/daging.webp",
  },
  {
    id: 2,
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
    imageUrl: "/ayam.webp",
  },
];

export const dynamic = "force-static";

export default async function Home() {
  return (
    <main className="container max-w-[1080px] mx-auto leading-relaxed antialiased pb-20">
      <div className="flex flex-col items-center justify-center text-center">
        {/* <Link href="/" className="font-medium text-2xl pt-3">
          Ikhwan butcher
        </Link>
        <p className="opacity-70 font-medium text-sm">Pasar Bersih Sentul, Blok B-2 - Babakan Madang, Kab. Bogor</p>
        <p className="mt-6 text-foreground/70">
          Kami Menyediakan Berbagai Kebutuhan Daging Berkualitas untuk Memenuhi Kebutuhan Anda!{" "}
        </p>
        <p className="mt-2 text-foreground/70">
          Melayani delivery order disekitar Babakan Madang{" "}
        </p> */}
      </div>
      <Component items={Banner} />
      <Contacts />
      <p className="font-medium mt-10 text-2xl text-center">Kami Menyediakan :</p>
      {/* <p className="font-medium mt-20">products</p> */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-4">
        {products.map((project) => (
          <Link
            href={project.website}
            key={project.name}
            className="relative hover:bg-foreground/5 hover:border-foreground/10 border border-foreground/0 rounded-lg -m-3 p-3 sm:-m-2 sm:p-2 transition-colors duration-100"
          >

            <Image
              src={project.thumbnail}
              alt={project.name}
              width={300}
              height={300}
              className="aspect-square object-cover rounded-lg border border-foreground/5 shadow-sm w-full h-auto"
            />

            <div className="mt-4 flex flex-row items-start justify-between w-full">
              <p>{project.name}</p>
              {/* <p className="text-xs opacity-50">{project.year}</p> */}
            </div>
            <h2 className="opacity-70 text-xs">{project.description}</h2>
            <h2 className="opacity-70 flex flex-row flex-wrap gap-1.5 text-xs mt-2">
              {project.stack?.map((e) => (
                <span key={e} className="px-2 py-1 rounded-sm bg-foreground/5">
                  {e}
                </span>
              ))}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
