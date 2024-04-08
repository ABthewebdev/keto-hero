import { Product } from "@prisma/client";
import Link from "next/link";
import { StarIcon } from "lucide-react";

import PriceTag from "./PriceTag";
interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isNew =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 7;
  return (
    <Link className="flex flex-col pr-8" href={"/products/" + product.id}>
      <img
        className="h-48 max-w-[800] self-center object-cover rounded"
        src={product.imageSrc}
        alt={product.name}
      />
      <div className="flex flex-1 flex-col gap-2 p-8">
        <h2 className="flex text-lg font-medium">
          {product.name}
          {isNew && (
            <div className="flex justify-center text-base ml-2 items-center rounded-2xl p-1 bg-yellow-300">
              NEW
            </div>
          )}
        </h2>
        <div className="flex items-center gap-0.5">
          <PriceTag price={product.price} />
        </div>
        <div className="flex">
          <span className="font-medium text-lg">{product.rating}</span>
          <StarIcon className="w-5 h-5 fill-yellow-300" />
        </div>
      </div>
    </Link>
  );
}
