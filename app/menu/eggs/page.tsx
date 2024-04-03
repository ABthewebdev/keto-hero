/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yKtQV4Xr1hm
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
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
import Image from "next/image";
import StarIcon from "@/components/StarIcon";

export default function Lunch() {
  return (
    <div className="grid md:grid-cols-2 items-start max-w-6xl px-4 mx-auto gap-6 lg:gap-12 py-6 bg-white">
      <div className="grid flex-col gap-4 md:gap-10 items-start">
        <>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper bg-opacity-0"
          >
            <SwiperSlide>
              <Image
                src="/vital-eggs.webp"
                alt="Vital Eggs"
                width={280}
                height={280}
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-items-center content-center">
              <h2 className="text-xl font-bold">Nutrition Facts</h2>
              <div className="grid grid-cols-2 gap-2">
                {eggsNutritionFacts.map((item) => (
                  <p key={item.id}>
                    {item.name}: {item.value}
                  </p>
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
      <div className="grid gap-4 items-start">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Farm Fresh Organic Eggs (12 count)
        </h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-0.5">
            <StarIcon className="w-5 h-5 fill-yellow-300" />
            <StarIcon className="w-5 h-5 fill-yellow-300" />
            <StarIcon className="w-5 h-5 fill-yellow-300" />
            <StarIcon className="w-5 h-5 fill-yellow-300" />
            <StarIcon className="w-5 h-5 fill-yellow-300" />
          </div>
        </div>
        <div className="text-4xl font-bold">$2.99</div>
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
  );
}
