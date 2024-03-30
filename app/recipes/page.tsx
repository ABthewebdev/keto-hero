import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

const page = () => {
  return (
    <div>
      <div className="flex items-center flex-col">
        <h1>Delicious Recipes</h1>
        <form className="flex items-center gap-4 md:gap-8">
          <div className="flex items-center gap-2 w-full md:w-[400px]">
            <SearchIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
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
      <section className="flex justify-evenly">
        <Link href="/">
          <article>
            <Image
              src={"/omelette.jpg"}
              alt="Omelette"
              width={150}
              height={150}
            />
            <h2 className="hover:underline">Jalapeno Omelette</h2>
          </article>
        </Link>
        <Link href="/">
          <Image
            src={"/omelette.jpg"}
            alt="Omelette"
            width={150}
            height={150}
          />
          <h2 className="hover:underline">Jalapeno Omelette</h2>
        </Link>
        <Link href="/">
          <article>
            <Image
              src={"/omelette.jpg"}
              alt="Omelette"
              width={150}
              height={150}
            />
            <h2 className="hover:underline">Jalapeno Omelette</h2>
          </article>
        </Link>
      </section>
    </div>
  );
};

export default page;
