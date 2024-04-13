import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
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
      <div className="flex px-1 pt-3">
        <div className="flex flex-1">
          <NavMenu />
          <form className="flex" action={searchProducts}>
            <FiSearch className="w-8 h-8 ml-5 hidden md:block cursor-pointer" />
            <Input
              className="hidden md:block"
              name="searchQuery"
              placeholder="Search"
            />
          </form>
        </div>
        <Link className="hover:opacity-70 flex-1 justify-center" href="/">
          <Image src="/logo.svg" alt="keto hero logo" width={240} height={80} />
        </Link>
        <div className="flex-1 justify-center">{children}</div>
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
