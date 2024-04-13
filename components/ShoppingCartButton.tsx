import { ShoppingCart } from "@/lib/db/cart";
import { FiShoppingCart } from "react-icons/fi";
import { Badge } from "./ui/badge";

interface ShoppingCartButtonProps {
  cart: ShoppingCart | null;
}

export default function ShoppingCartButton({ cart }: ShoppingCartButtonProps) {
  return (
    <div className="flex items-center space-x-2">
      <FiShoppingCart className="size-6" />
      <Badge className="text-xs">{cart?.size || 0}</Badge>
    </div>
  );
}
