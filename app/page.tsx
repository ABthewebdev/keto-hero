import Button from "@/components/Button";
import Questions from "@/components/FAQ";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div className="flex flex-col text-center justify-center items-center h-96">
          <span className="tracking-wider mb-2 text-xl font-medium">
            Make keto easy by <br className="md:hidden" />
            creating your own box
          </span>
          <Button />
        </div>
      </main>
      <section className="flex text-center flex-col justify-center">
        <h2 className="text-xl font-medium">What can you get in your box?</h2>
        <div className="flex justify-center gap-12">
          <Image
            className="size-52 md:size-64"
            src="/box.svg"
            alt="meal box"
            width={250}
            height={95}
          />
          <ul className="flex gap-y-1 lg:gap-y-4 flex-col list-disc text-left">
            <li className="text-md font-medium">
              Anything from breakfast foods to our classic keto bread
            </li>
            <li className="text-md font-medium">
              You can get as much food as you need all in one order
            </li>
            <li className="text-md font-medium">
              Everything is free of artificial sweeteners and preservatives
            </li>
            <li className="text-md font-medium">
              We made everything and affordable and suitable for any budget
            </li>
            <li className="text-md font-medium">
              Choose from any serving size from single person to family size
            </li>
          </ul>
        </div>
      </section>
      <Questions />
    </div>
  );
}
