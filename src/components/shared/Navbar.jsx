import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-blue-700 text-white py-4 shadow-md ">
        <div className="mx-auto flex justify-between items-center">
          <Link className="text-2xl font-bold" href="/">
            Mysite
          </Link>
          <div className="space-x-6">
            <Link href="/about" className="hover:text-gray-800">
              {" "}
              Abuot Us
            </Link>
            <Link href="/contact" className="hover:text-gray-800">
              {" "}
              Conatct
            </Link>
            <Link href="/login" className="hover:text-gray-800">
              {" "}
              Login
            </Link>
            <Link href="/register" className="hover:text-gray-800">
              {" "}
              Register
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
