import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import { Input } from "./ui/input";
import { redirect } from "next/navigation";
import NavMenu from "./NavMenu";
import { getCart } from "@/lib/db/cart";
import ShoppingCartButton from "./ShoppingCartButton";

const navigation = [
  { name: "Menu", href: "/menu" },
  { name: "Pricing", href: "/pricing" },
  { name: "Recipes", href: "/recipes" },
  { name: "Discounts", href: "/discounts" },
  { name: "Blog", href: "/blog" },
];

async function searchProducts(formData: FormData) {
  "use server";
  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}

export default async function Nav({ children }: any) {
  const cart = await getCart();
  return (
    <nav className="w-full mb-8">
      <div className="flex px-5 pt-3">
        <NavMenu />
        <div>
          <form className="flex flex-grow" action={searchProducts}>
            <FiSearch className="size-8 ml-5 cursor-pointer" />
            <Input className="w-full" name="searchQuery" placeholder="Search" />
          </form>
        </div>
        <Link
          className="hover:opacity-70 hidden md:flex flex-1 justify-center"
          href="/"
        >
          <span className="text-lg lusitana-bold">Keto Hero</span>
        </Link>
        <div className="flex flex-1 justify-end">{children}</div>
      </div>
      <div className="text-center hidden md:block mt-3">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href} className="px-8">
            <span className="text-base font-semibold">{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
