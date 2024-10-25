// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">React</h1>
      <ul className="hidden md:flex text-[#00df9a]">
        <li className="px-4 py-2 hover:text-[#00df985b] hover:border-b border-[#00df985b] ease-in-out duration-100">
          Home
        </li>
        <li className="px-4 py-2 hover:text-[#00df985b] hover:border-b border-[#00df985b] ease-in-out duration-100">
          About
        </li>
        <li className="px-4 py-2 hover:text-[#00df985b] hover:border-b border-[#00df985b] ease-in-out duration-100">
          Contact
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-[-100%]"
            : "fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-white ease-in-out duration-300"
        }
      >
        <h1 className="w-full text-3xl font-bold m-4 text-[#00df9a]">React</h1>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
