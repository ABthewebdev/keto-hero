"use client";

import { FaBars } from "react-icons/fa";
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { getProviders, useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const navigation = [
  { name: "Pricing", href: "/pricing" },
  { name: "Recipes", href: "/recipes" },
  { name: "Discounts", href: "/discounts" },
  { name: "Blog", href: "/blog" },
  { name: "Contact us", href: "/contact" },
];

const Nav = () => {
  const isUserLoggedIn = true;
  const [sidebar, setSidebar] = useState(false);
  const [providers, setProviders] = useState(null);
  return (
    <nav>
      <div className="text-center">
        <h2 className="font-bold text-base">Start your 3 month free trial</h2>
      </div>
      <div className="flex justify-between px-6 pt-3">
        <div className="flex">
          <FaBars
            className="w-6 h-6 md:hidden cursor-pointer"
            onClick={() => setSidebar((prev) => !prev)}
          />
          <FiSearch className="w-6 h-6 ml-5 hidden md:block cursor-pointer" />
        </div>
        <Link href="/">
          <Image src="/logo.svg" alt="keto hero logo" width={240} height={80} />
        </Link>
        {isUserLoggedIn ? (
          <div className="flex">
            <Link href="/">
              <FiUser className="w-6 h-6 mr-5" />
            </Link>
            <Link href="/">
              <FiShoppingCart className="w-6 h-6" />
            </Link>
          </div>
        ) : (
          // User authentication
          <Link href="/login" className="font-bold">
            Log In
            <span>&rarr;</span>
          </Link>
        )}
      </div>
      <div className="text-center hidden md:block mt-3">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href} className="px-8">
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
      {/* Toggles sidebar on click */}
      {sidebar && <Sidebar />}
    </nav>
  );
};

export default Nav;
