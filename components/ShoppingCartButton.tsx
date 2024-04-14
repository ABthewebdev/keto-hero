import { ShoppingCart } from "@/lib/db/cart";
import { FiShoppingCart } from "react-icons/fi";
import { Badge } from "./ui/badge";
import { formatPrice } from "@/lib/format";

interface ShoppingCartButtonProps {
  cart: ShoppingCart | null;
}

export default function ShoppingCartButton({ cart }: ShoppingCartButtonProps) {
  return (
    <div>
      <div className="flex items-center space-x-3 mt-1">
        <FiShoppingCart className="size-8 absolute" />
        <Badge className="text-xs relative bottom-3 left-2">
          {cart?.size || 0}
        </Badge>
      </div>
      <div
        tabIndex={0}
        className="absolute mt-3 w-52 bg-base-100 shadow rounded-lg"
      >
        <div>
          <span className="text-lg font-bold">{cart?.size || 0} Items</span>
          <span className="">Subtotal: {formatPrice(cart?.subtotal || 0)}</span>
        </div>
      </div>
    </div>
  );
}
