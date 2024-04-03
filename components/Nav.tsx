"use client";

import { FaBars } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Sidebar from "./Sidebar";

const navigation = [
  { name: "Menu", href: "/menu" },
  { name: "Pricing", href: "/pricing" },
  { name: "Recipes", href: "/recipes" },
  { name: "Discounts", href: "/discounts" },
  { name: "Blog", href: "/blog" },
];

const Nav = ({ children }: any) => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <nav className="w-full mb-8">
      <div className="flex justify-between px-4 pt-3">
        <div className="flex">
          <FaBars
            className="w-8 h-8 md:hidden cursor-pointer"
            onClick={() => setSidebar((prev) => !prev)}
          />
          <FiSearch className="w-8 h-8 ml-5 hidden md:block cursor-pointer" />
        </div>
        <Link className=" hover:opacity-70" href="/">
          <Image src="/logo.svg" alt="keto hero logo" width={240} height={80} />
        </Link>
        <div>{children}</div>
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
