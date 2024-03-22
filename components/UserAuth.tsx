import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

const UserAuth = () => {
  const { userId } = auth();
  return (
    <div>
      {!userId ? (
        <div>
          <Link href="/sign-in" className="font-bold text-base mr-5">
            Log In<span>&rarr;</span>
          </Link>
        </div>
      ) : (
        <div className="flex">
          <Link href="/" className="mr-7">
            <UserButton afterSignOutUrl="/" />
          </Link>
          <Link href="/">
            <FiShoppingCart className="w-8 h-8 mr-2" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserAuth;
