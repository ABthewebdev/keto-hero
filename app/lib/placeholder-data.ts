import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const products = [
  {
    id: 1,
    name: "Breakfast Box",
    href: "#",
    imageSrc: "/box.svg",
    imageAlt: "Breakfast Box Option",
    price: "$35",
  },
  {
    id: 2,
    name: "Lunch Box",
    href: "#",
    imageSrc: "/box.svg",
    imageAlt: "Lunch Box Option",
    price: "$35",
  },
  {
    id: 3,
    name: "Dinner Box",
    href: "#",
    imageSrc: "/box.svg",
    imageAlt: "Dinner Box Option",
    price: "$35",
  },
];
