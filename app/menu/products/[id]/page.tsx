import { cache } from "react";
import { prisma } from "@/lib/db/prisma";
import notFound from "@/app/not-found";
import { Label } from "@/components/ui/label";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Button } from "@/components/ui/button";
import { eggsNutritionFacts } from "@/app/lib/placeholder-data";
import { StarIcon } from "lucide-react";
import { Metadata } from "next";
import PriceTag from "@/components/PriceTag";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) notFound();
  return product;
});

export async function generateMetadata({
  params: { id },
}: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(id);

  return {
    title: product?.name + " - Keto Hero",
    description: `Buy some ${product?.name} at Keto Hero`,
  };
}

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
  const product = await getProduct(id);
  return (
    <div className="grid md:grid-cols-2 items-start max-w-6xl px-4 mx-auto gap-6 lg:gap-12 py-6 bg-white">
      <div className="grid flex-col gap-4 md:gap-10 items-start">
        <div className="flex gap-x-2">
          <div className="flex-1">
            <img className=" max" src={product?.imageUrl} alt={product?.name} />
          </div>
          <div className="grid gap-4 items-start flex-1">
            <h1 className="text-3xl font-bold sm:text-4xl">{product?.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-0.5">
                {product?.rating}
                <StarIcon className="w-4 h-4 fill-yellow-300" />
              </div>
            </div>
            <PriceTag price={product?.price || 999} />
            <form className="grid gap-4 md:gap-10">
              <div className="grid gap-2">
                <Label className="text-base" htmlFor="color">
                  Color
                </Label>
                <RadioGroup
                  className="flex items-center gap-2"
                  defaultValue="white"
                  id="color"
                >
                  <Label
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-500"
                    htmlFor="color-white"
                  >
                    <RadioGroupItem id="color-white" value="white" />
                    White
                  </Label>
                  <Label
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-500"
                    htmlFor="color-brown"
                  >
                    <RadioGroupItem id="color-brown" value="brown" />
                    Brown
                  </Label>
                </RadioGroup>
              </div>
              <div className="grid gap-2">
                <Label className="text-base" htmlFor="size">
                  Size
                </Label>
                <RadioGroup
                  className="flex items-center gap-2"
                  defaultValue="12"
                  id="size"
                >
                  <Label
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-500"
                    htmlFor="size-6"
                  >
                    <RadioGroupItem id="size-6" value="6" />
                    6-pack
                  </Label>
                  <Label
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-500"
                    htmlFor="size-12"
                  >
                    <RadioGroupItem id="size-12" value="12" />
                    12-pack
                  </Label>
                  <Label
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-500"
                    htmlFor="size-18"
                  >
                    <RadioGroupItem id="size-18" value="18" />
                    18-pack
                  </Label>
                </RadioGroup>
              </div>
              <div className="grid gap-2">
                <Label className="text-base" htmlFor="quantity">
                  Quantity
                </Label>
                <Select defaultValue="1">
                  <SelectTrigger className="w-24">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button size="lg">Add to cart</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
