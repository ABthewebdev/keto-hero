import Link from "next/link";

export default function Button() {
  return (
    <Link href="/menu">
      <button
        type="button"
        className="rounded-md bg-indigo-600 px-5 py-3 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Create Box
      </button>
    </Link>
  );
}
