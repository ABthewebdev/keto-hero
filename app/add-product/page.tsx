import FormSubmitButton from "@/components/FormSubmitButton";
import { Input } from "@/components/ui/input";
import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Keto Hero",
  description: "Add keto product",
};

async function addProduct(formData: FormData) {
  "use server";
  const name = formData.get("name")?.toString();
  const rating = Number(formData.get("rating") || 0);
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !rating || !imageUrl || !price) {
    throw Error("Missing required fields");
  }
  await prisma.product.create({
    data: { name, rating, imageUrl, price },
  });
  redirect("/");
}

export default function AddProductPage() {
  return (
    <div>
      <h1>Add Product</h1>
      <form action={addProduct}>
        <Input required name="name" placeholder="Name" />
        <Input required name="rating" type="number" placeholder="Rating" />
        <Input required name="imageUrl" type="url" placeholder="Image Url" />
        <Input required name="price" type="number" placeholder="Price" />
        <FormSubmitButton type="submit">Submit Product</FormSubmitButton>
      </form>
    </div>
  );
}
