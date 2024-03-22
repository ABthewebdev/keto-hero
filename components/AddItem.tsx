// "use client";

// import { useState } from "react";
// import { CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/box.svg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "White Tee",
    href: "#",
    imageSrc: "/box.svg",
    imageAlt: "Front of white tee",
    price: "$35",
    color: "White",
  },
  // More products...
];

export default function AddItem() {
  // const [check, setCheck] = useState(true);
  return (
    <div className="bg-opacity-0">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width={25}
                  height={25}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
              {/* <div className="mt-6">
                <a
                  onClick={() => setCheck((prev) => !prev)}
                  href={product.href}
                  className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  {check ? (
                    "Add to cart"
                  ) : (
                    <CheckIcon
                      className="h-6 w-6 flex-shrink-0 text-green-500"
                      aria-hidden="true"
                    />
                  )}
                  <span className="sr-only">, {product.name}</span>
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
