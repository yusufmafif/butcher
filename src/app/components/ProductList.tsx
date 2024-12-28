import { ProductCard } from "./ProductCard";

interface Product {
    name: string;
    website: string;
    description: string;
    story: string;
    thumbnail: string;
    stack: string[];
    price: number;
    unit: string;
}

export const ProductList: React.FC<{ title: string; products: Product[] }> = ({ title, products }: { title: string; products: Product[] }) => (
    <>
        <p className="font-medium mt-10 sm:text-2xl text-xl text-center pb-5">{title}:</p>
        <div className="container max-w-[1080px] grid md:grid-cols-4 grid-cols-2 gap-6">
            {products.map((post, index) => (
                <ProductCard key={index} post={post} />
            ))}
        </div>
    </>
);
