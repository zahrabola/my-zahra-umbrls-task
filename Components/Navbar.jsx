"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
import { navigation } from "../DataNav/index";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [state, setState] = useState(false);
  return (
    <div>
      <nav className="bg-white border-b w-full md:static md:text-sm md:border-none">
        <div className="items-center px-4 w-full mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="#">
              <Image src={logo} width={154} height={28} alt="logo" />
            </Link>

            {/*hamburger menu */}
            <div className="md:hidden">
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={() => setState(!state)}
              >
                {state ? (
                      <AiOutlineClose size={25} />
                  
                ) : (
                    <AiOutlineMenu size={25} />
                )}
              </button>
            </div>
          </div>
          {/*nav menu */}
          <div
            className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="text-gray-700 font-semibold ">
                    <Link href="#" className="block">
                      {item.title}
                    </Link>
                  </li>
                );
              })}
              <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
              <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
                <li>
                  <Link
                    href="#"
                    className="block py-3 font-semibold text-center text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
                  >
                    Sign Up
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
