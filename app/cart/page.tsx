import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import { getCart } from "@/lib/db/cart";
import CartEntry from "./CartEntry";
import setProductQuantity from "./actions";

export const metadata = {
  title: "Keto Hero - Shopping Cart",
};

export default async function CartPage() {
  const cart = await getCart();
  return (
    <section>
      <Card className="w-full max-w-4xl p-0">
        <CardHeader className="border-b">
          <CardTitle>Cart</CardTitle>
          <CardDescription>Review your order</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {cart?.items.map((cartItem) => (
            <CartEntry
              cartItem={cartItem}
              key={cartItem.id}
              setProductQuantity={setProductQuantity}
            />
          ))}
          {/* <div className="grid grid-cols-2 items-center gap-4">
              <div className="flex items-center gap-2">
                <img
                  alt={product.name}
                  className="aspect-square rounded-lg overflow-hidden object-cover"
                  height="100"
                  src={product.imageUrl}
                  width="100"
                />
                <div className="grid gap-1">
                  <h2 className="font-medium">{product.name}</h2>
        
                </div>
              </div>
              <div className="flex items-center gap-2 text-right">
                <div className="font-medium">x1</div>
                <PriceTag price={product.price} />
              </div>
            </div>
            <Separator />
            <div className="grid grid-cols-2 items-center gap-4">
              <div className="flex items-center gap-2">
                <img
                  alt="Thumbnail"
                  className="aspect-square rounded-lg overflow-hidden object-cover"
                  height="100"
                  src="/placeholder.svg"
                  width="100"
                />
                <div className="grid gap-1">
                  <div className="font-medium">Aqua Filters</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    #0987654321
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-right">
                <div className="font-medium">x1</div>
                <div>$49.00</div>
              </div>
            </div> */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            <Button className="justify-center">Pay now</Button>
          </div>
        </CardContent>
        <CardFooter className="flex items-center gap-4 p-4">
          <div className="flex flex-1 items-center gap-2">
            <ShieldCheckIcon className="h-6 w-6 text-green-500" />
            <div className="text-sm">
              Your connection to this site is secure.
              <Link href="#"> More info</Link>
            </div>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}

function ShieldCheckIcon({ props }: any) {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
