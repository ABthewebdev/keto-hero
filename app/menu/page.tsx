/**
 * v0 by Vercel.
 * @see https://v0.dev/t/J88xY0B3asg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AddDefaultBox from "@/components/AddDefaultBox";
import { prisma } from "@/lib/db/prisma";
import ProductCard from "@/components/ProductCard";

export default async function Menu() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });
  return (
    <div className="sm:px-8 bg-white rounded-xl">
      <section className="flex flex-col"></section>
      <AddDefaultBox />
      <section className="w-full py-6 md:py-12">
        <div className="container grid justify-center justify-items-center gap-4 px-6 md:gap-8 lg:px-14">
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-3xl">Customize Your Box</h2>
            <p className="text-gray-500">
              Select your items for the perfect meal
            </p>
          </div>
          <div className="">
            <form className="flex items-center gap-4 md:gap-8">
              <div className="flex items-center gap-2 w-full md:w-[400px]">
                <Input
                  className="font-normal bg-white text-base w-full"
                  placeholder="Search for food..."
                  type="search"
                />
              </div>
              <Button className="border-black border" type="submit">
                Search
              </Button>
            </form>
          </div>
          <div>
            <h3 className="font-bold text-lg">Protein Sources</h3>
          </div>
          <div className="flex flex-wrap justify-evenly gap-8 md:gap-12">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function SearchIcon({ props }: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
