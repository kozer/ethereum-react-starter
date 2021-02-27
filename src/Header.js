import React from "react";
import { ReactComponent as Logo } from "./logo.svg";

function Header() {
  return (
    <nav className="flex justify-between items-center py-4 bg-pink-400">
      <div className="flex-shrink-0 ml-10 cursor-pointer flex flex-row justify-items-center items-center">
        <div className="h-12 w-12">
          <Logo />
        </div>
        <span className="text-xl text-warmGray-50 font-semibold">
          Ethereum app
        </span>
      </div>
      <ul className="md:flex overflow-x-hidden font-semibold">
        <li className="mr-6 p-1 border-b-2 border-white">
          <a className="text-warmGray-50 cursor-default" href="/">
            Home
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
