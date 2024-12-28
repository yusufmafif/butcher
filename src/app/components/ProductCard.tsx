import Image from "next/image";
import Link from "next/link";

interface Product {
    name: string;
    description: string;
    website: string;
    story: string;
    stack: string[];
    thumbnail: string;
  }

  
export const ProductCard = ({ post }: { post: Product }) => (
    <Link
      href={`/produk/${post.name}`}
      className="flex flex-col items-start border border-foreground/0 hover:bg-foreground/5 hover:border-foreground/10 transition-all rounded-md -m-3 p-3"
    >
      <Image
        src={post.thumbnail}
        alt={post.name}
        width={400}
        height={300}
        className="aspect-square object-cover rounded-lg border border-foreground/5 shadow-sm w-full h-auto"
      />
      <p className="mt-4 mx-auto">{post.name}</p>
    </Link>
  );
  