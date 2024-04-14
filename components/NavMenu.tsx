"use client";

import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
export default function NavMenu() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="flex flex-row">
      {/* Toggles sidebar on click */}
      {sidebar && <Sidebar />}
      <FaBars
        className="size-8 md:hidden cursor-pointer"
        onClick={() => setSidebar((prev) => !prev)}
      />
    </div>
  );
}
