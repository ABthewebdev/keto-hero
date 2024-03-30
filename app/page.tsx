import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div className="flex flex-col text-center justify-center items-center h-96">
          <span className="tracking-wider mb-2 text-xl font-medium">
            Make keto easy by <br className="md:hidden" />
            creating your own bo
          </span>
          <Button />
        </div>
      </main>
      <div className="text-center">
        <h2 className="tracking-wider mb-4 font-semibold text-lg">
          Basic meal boxes we offer
        </h2>
      </div>
      <section className="flex px-3 justify-center mb-10">
        <div className="flex-col items-center flex flex-1">
          <h2 className="mb-2 font-bold text-lg">Breakfast</h2>
          <Image
            width={95}
            height={95}
            src="/breakfast.svg"
            alt="breakfast plate"
            className="md:h-40 md:w-40"
          />
        </div>
        <div className="flex-1 flex items-center flex-col">
          <h2 className="mb-2 font-bold text-lg">Lunch</h2>
          <Image
            width={95}
            height={96}
            src="/avocado.svg"
            alt="avocado"
            className="h-24 md:h-40 md:w-40"
          />
        </div>
        <div className="flex-1 flex items-center flex-col">
          <h2 className="mb-2 font-bold text-lg">Dinner</h2>
          <Image
            width={95}
            height={95}
            src="/shrimp.svg"
            alt="shrimp"
            className="md:h-40 md:w-40"
          />
        </div>
      </section>
    </div>
  );
}
