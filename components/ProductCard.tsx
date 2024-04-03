import { Product } from "@prisma/client";
import Link from "next/link";

import PriceTag from "./PriceTag";
interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isNew =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 7;
  return (
    <Link href={"/products/" + product.id}>
      <img
        className="h-48 object-cover rounded"
        src={product.imageSrc}
        alt={product.name}
      />
      <div className="flex flex-1 flex-col gap-2 p-8">
        <h2 className="flex">
          {product.name}
          {isNew && (
            <div className="flex justify-center items-center rounded-2xl h-6 w-12 bg-yellow-300">
              NEW
            </div>
          )}
        </h2>
        <PriceTag price={product.price} />
      </div>
    </Link>
  );
}
