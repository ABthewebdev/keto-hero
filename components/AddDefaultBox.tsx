// "use client";

// import { useState } from "react";
// import { CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { defaultMenuBoxes } from "@/app/lib/placeholder-data";
import { Button } from "./ui/button";

export default function AddDefaultBox() {
  // const [check, setCheck] = useState(true);
  return (
    <div className="bg-opacity-0">
      <div className="mx-auto max-w-2xl py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 flex gap-x-4 justify-evenly">
          {defaultMenuBoxes.map((product) => (
            <div
              key={product.id}
              className="flex flex-col flex-wrap relative bg-opacity-0"
            >
              <div className="w-full overflow-hidden bg-opacity-0 lg:aspect-none lg:h-80">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width={95}
                  height={95}
                  className="object-cover object-center sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-64 lg:w-64 xl:h-full xl:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between flex-col gap-y-1">
                <div>
                  <h3 className="text-base hover:opacity-90 text-gray-700">
                    {product.name}
                  </h3>
                </div>
                <p className="text-base font-medium text-gray-900">
                  {product.price}
                </p>
                <Button className="border-black border hover:opacity-90">
                  Add To Box
                </Button>
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
