import Button from "@/components/Button";

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
      <div className="text-center">
        <h2 className="tracking-wider mb-4 font-semibold text-lg">
          Different options we offer
        </h2>
      </div>
      <section className="flex px-3 justify-center mb-10">
        <div className="flex-col items-center flex flex-1">
          <h2 className="mb-2">Breakfast</h2>
          <img className="md:h-36 h-24" src="/breakfast.svg" alt="" />
        </div>
        <div className="flex-1 flex items-center flex-col">
          <h2 className="mb-2">Lunch</h2>
          <img className="md:h-36 h-24" src="/hamburger.svg" alt="/" />
        </div>
        <div className="flex-1 flex items-center flex-col">
          <h2 className="mb-2">Dinner</h2>
          <img className="md:h-36 h-24" src="/shrimp.svg" alt="/" />
        </div>
      </section>
    </div>
  );
}
