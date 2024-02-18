"use client";
import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
import { navigation } from "../DataNav/index";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
          <div>
            <Link href="#">
              <Image src={logo} width={154} height={28} alt="logo" />
            </Link>
          </div>
          {/*hamburger menu */}
          <div>
               {/*hamburger menu */}
          </div>
             {/*nav menu */}
             <div>
                <ul>
                    {navigation.map((item, idx) => {
                        return (
                            <li key={idx}>
                                <Link href="#">
                                {item.title}
                                </Link>
                            </li>
                        )
                    })}
                    <span>
                        <div>
                            <li>
                                <Link href="#">
                                    <div>
                                        Sign In
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <div>
                                        Sign Up
                                    </div>
                                </Link>
                            </li>
                        </div>
                    </span>
                </ul>
             </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
