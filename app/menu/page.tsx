import AddItem from "@/components/AddItem";

const page = () => {
  return (
    <div className="bg-white mt-6 mx-6">
      <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
        Basic meal boxes
      </h2>
      <AddItem />
    </div>
  );
};

export default page;
