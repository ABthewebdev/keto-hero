import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import { getCart } from "@/lib/db/cart";
import ShoppingCartButton from "./ShoppingCartButton";

export default async function UserAuth() {
  const cart = await getCart();
  const { userId } = auth();
  return (
    <div className="flex justify-center">
      {!userId ? (
        <div>
          <Link href="/sign-in" className="font-bold text-base mr-5">
            Log In<span>&rarr;</span>
          </Link>
        </div>
      ) : (
        <div className="flex gap-x-10">
          <UserButton afterSignOutUrl="/" />
          <Link href="/" className="hidden md:block">
            <ShoppingCartButton cart={cart} />
          </Link>
        </div>
      )}
    </div>
  );
}
