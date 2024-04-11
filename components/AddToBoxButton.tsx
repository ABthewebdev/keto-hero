"use client";

import { Button } from "./ui/button";
import { prisma } from "@/lib/db/prisma";

interface AddToCartButtonProps {
  productId: string;
}

export default function AddToBoxButton({ productId }: AddToCartButtonProps) {
  return (
    <div className="flex items-center gap-2">
      <Button onClick={() => {}}>Add To Box</Button>
    </div>
  );
}
