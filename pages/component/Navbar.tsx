import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(true);
  //const [sidebar, setSidebar] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex  items-center h-20 max-w-[1240px]  font-domine  z-30   bg-[#EEEBE6] text-[#8B6A2F]">
      <div className="pr-5 fixed flex justify-between items-center border-b-[1px] border-[#8B6A2F]  h-20 w-full bg-[#EEEBE6] z-50">
        <h1 className="w-full ml-10 text-xl md:text-3xl  text-[#CBA35A] tracking-widest ">
          Mazuya cms.
        </h1>
        <ul className="hidden md:flex uppercase tracking-widest ">
          <li className="p-4 hover:text-[#CBA35A] hover:cursor-pointer hover:duration-300 transition">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="p-4 hover:text-[#CBA35A] hover:cursor-pointer hover:duration-300 transition">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="p-4 hover:text-[#CBA35A] hover:cursor-pointer hover:duration-300 transition">
            <Link
              href={
                "https://docs.google.com/spreadsheets/d/1mkQnTM88CZNUxoG7dYwrt045nu4ZsT2Xu02SMts_jPc/edit?usp=sharing"
              }
            >
              Queue
            </Link>
          </li>
          <li className="p-4 hover:text-[#CBA35A] hover:cursor-pointer hover:duration-300 transition">
            <Link href={"/policy"}>Policy</Link>
          </li>
        </ul>

        <div onClick={handleNav} className="block md:hidden mr-8 z-50">
          {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          {/* condition ? true : false */}
          {/* onClick ที่ element tag ด้วย action ใน useState */}
        </div>
      </div>

      <div
        className={
          !nav
            ? "mr-5 z-50 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-700 bg-[#EEEBE6] ease-out duration-300 md:hidden"
            : "z-50 top-0 w-[60%] h-full fixed left-[-50%] ease-in duration-200"
        }
      >
        <h1 className=" ml-[3.2rem] mt-[4rem] text-3xl  text-[#CBA35A] tracking-widest md:hidden">
          Mazuya.
        </h1>
        <ul className="ml-10 pt-20 pr-10 tracking-widest text-xl md:hidden">
          <Link href={"/"}>
            <li className="p-4 hover:text-[#CBA35A] hover:cursor-pointer hover:duration-300 transition border-b-[1px] border-[#8B6A2F]">
              Home
            </li>
          </Link>

          <Link href={"/about"}>
            <li className="p-4 hover:text-[#CBA35A] hover:cursor-pointer hover:duration-300 transition border-b-[1px] border-[#8B6A2F]">
              About
            </li>
          </Link>

          <Link
            href={
              "https://docs.google.com/spreadsheets/d/1mkQnTM88CZNUxoG7dYwrt045nu4ZsT2Xu02SMts_jPc/edit?usp=sharing"
            }
          >
            <li className="p-4 hover:text-[#CBA35A] hover:cursor-pointer hover:duration-300 transition border-b-[1px] border-[#8B6A2F]">
              Queue
            </li>
          </Link>

          <Link href={"/policy"}>
            <li className="p-4 hover:text-[#CBA35A] hover:cursor-pointer hover:duration-300 transition border-b-[1px] border-[#8B6A2F]">
              Policy
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
