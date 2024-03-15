"use client";

import { FaBars } from "react-icons/fa";
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { getProviders, useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const navigation = [
  { name: "Menu", href: "/menu" },
  { name: "Pricing", href: "/pricing" },
  { name: "Recipes", href: "/recipes" },
  { name: "Discounts", href: "/discounts" },
  { name: "Blog", href: "/blog" },
];

const Nav = () => {
  const isUserLoggedIn = false;
  const [sidebar, setSidebar] = useState(false);
  const [form, setForm] = useState(false);
  const [providers, setProviders] = useState(null);
  const { data: session } = useSession();
  useEffect(() => {
    const fetchProviders = async () => {
      const providerData = await getProviders();
      setProviders(providerData);
    };
    fetchProviders();
  })
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
          <FiSearch
            onClick={() => setForm((prev) => !prev)}
            className="w-6 h-6 ml-5 hidden md:block cursor-pointer"
          />
          {form && (
            <form action="/menus" method="get">
              <input
                className="h-3"
                type="text"
                name="text"
                id="text"
                placeholder="Search"
              />
            </form>
          )}
        </div>
        <Link className=" hover:opacity-70" href="/">
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
          <Link href="/login" className="font-bold text-base">
            Log In
            <span>&rarr;</span>
          </Link>
        )}
      </div>
      <div className="text-center hidden md:block mt-3">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href} className="px-8">
            <span className="text-base font-semibold">{item.name}</span>
          </Link>
        ))}
      </div>
      {/* Toggles sidebar on click */}
      {sidebar && <Sidebar />}
    </nav>
  );
};

export default Nav;
