import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const defaultMenuBoxes = [
  {
    id: 1,
    name: "Breakfast Box",
    href: "/menu/breakfast",
    imageSrc: "/box.svg",
    imageAlt: "Breakfast Box Option",
    price: "$35",
  },
  {
    id: 2,
    name: "Lunch Box",
    href: "/menu/lunch",
    imageSrc: "/box.svg",
    imageAlt: "Lunch Box Option",
    price: "$35",
  },
  {
    id: 3,
    name: "Dinner Box",
    href: "/menu/dinner",
    imageSrc: "/box.svg",
    imageAlt: "Dinner Box Option",
    price: "$35",
  },
];

export const proteinItems = [
  {
    id: 1,
    name: "Farm Raised Eggs",
    imageSrc: "/breakfast.svg",
    imageAlt: "eggs",
    price: "$2.99",
  },
  {
    id: 2,
    name: "Bacon",
    imageSrc: "/breakfast.svg",
    imageAlt: "bacon",
    price: "$3.99",
  },
  {
    id: 3,
    name: "Chicken Breast",
    imageSrc: "/breakfast.svg",
    imageAlt: "chicken breast",
    price: "$4.99",
  },
  {
    id: 4,
    name: "Salmon",
    imageSrc: "/breakfast.svg",
    imageAlt: "salmon",
    price: "$6.99",
  },
  {
    id: 5,
    name: "Steak",
    imageSrc: "/breakfast.svg",
    imageAlt: "steak",
    price: "$8.99",
  },
  {
    id: 6,
    name: "Tofu",
    imageSrc: "/breakfast.svg",
    imageAlt: "tofu",
    price: "$3.99",
  },
  {
    id: 7,
    name: "Pork Chops",
    imageSrc: "/breakfast.svg",
    imageAlt: "pork chops",
    price: "$5.99",
  },
];
