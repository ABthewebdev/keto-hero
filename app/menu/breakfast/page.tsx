/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JqMwhW6O8C3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "@/app/globals.css";
import { slides } from "@/app/lib/placeholder-data";

export default function Breakfast() {
  return (
    <div className="grid md:grid-cols-2 items-start max-w-6xl px-4 mx-auto py-6 gap-6 md:gap-12">
      <div className="flex flex-col gap-4 items-start bg-opacity-100">
        <div className="grid gap-4 items-start">
          <h1 className="font-bold text-3xl lg:text-4xl">
            Farm Fresh Large Eggs
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-0.5">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:gap-10 text-base leading-loose">
          <>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper bg-opacity-0"
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <Image
                    src={slide.imageSrc}
                    alt={slide.imageAlt}
                    width={280}
                    height={280}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-2">
          <div className="text-4xl font-bold">$3.99</div>
          <form className="grid gap-4 md:gap-10">
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
                  <RadioGroupItem id="size-6" value="6" />6 Count
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-12"
                >
                  <RadioGroupItem id="size-12" value="12" />
                  12 Count
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-18"
                >
                  <RadioGroupItem id="size-18" value="18" />
                  18 Count
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
  );
}

function StarIcon({ props }: any) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
