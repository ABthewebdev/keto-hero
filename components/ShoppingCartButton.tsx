import { ShoppingCart } from "@/lib/db/cart";
import { FiShoppingCart } from "react-icons/fi";
import { Badge } from "./ui/badge";

interface ShoppingCartButtonProps {
  cart: ShoppingCart | null;
}

export default function ShoppingCartButton({ cart }: ShoppingCartButtonProps) {
  return (
    <div className="relative inline-flex flex-col">
      <div className="flex items-center cursor-pointer space-x-3 mt-1">
        <FiShoppingCart className="size-8 absolute" />
        <Badge className="text-xs relative bottom-3 left-2">
          {cart?.size || 0}
        </Badge>
      </div>
    </div>
  );
}
