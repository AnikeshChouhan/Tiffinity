import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="p-5">
      {/* Header Section */}
      <nav className="flex justify-between items-center h-24 max-w-[1400px] mx-auto px-2">
        {/* Logo */}
        <h1 className="text-5xl font-bold text-gray-800">Cook.</h1>
        {/* Search Bar (Desktop Only) */}
        <div className="hidden md:flex items-center border-2 rounded-md border-gray-700">
          <div className="w-10 pl-2 bg-white">
            <AiOutlineSearch size={25} />
          </div>
          <input
            className="outline-none w-64 h-10 p-5 font-thin lg+:ml-16"
            type="text"
            placeholder="Search Here"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg+:flex lg+:items-center gap-4">
          <li className="p-2 text-lg font-medium text-gray-800 hover:text-orange-500 cursor-pointer">
            Home
          </li>
          <li className="p-2 text-lg font-medium text-gray-800 hover:text-orange-500 cursor-pointer">
            About
          </li>
          <li>
            <select
              className="p-4 text-lg border-b border-gray-300 text-gray-800 font-medium hover:text-orange-500 cursor-pointer"
              name="Service"
              id="Services"
            >
              <option value="Service">Service</option>
              <option value="Web_Development">Web Development</option>
              <option value="App_Development">App Development</option>
              <option value="Software_Development">Software Development</option>
            </select>
          </li>
          <li className="p-2 text-lg font-medium text-gray-800 hover:text-orange-500 cursor-pointer">
            Contest
          </li>
          <div className="hidden md:flex gap-3">
            <button className="whitespace-nowrap bg-gray-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white">
              Sign Up
            </button>
            <button className="whitespace-nowrap bg-gray-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white">
              Log In
            </button>
          </div>
        </ul>

        {/* Mobile Navigation Toggle */}
        <div onClick={handleNav} className="block lg:hidden cursor-pointer">
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            nav
              ? "fixed left-0 top-0 w-[60%] h-full bg-white shadow-md z-50"
              : "fixed left-[-100%]"
          } transition-all duration-500 ease-in-out`}
        >
          <h1 className="text-3xl font-bold text-orange-400 m-4">Cook.</h1>
          <ul className="uppercase p-4">
            <li className="p-4 text-lg border-b border-gray-300 text-gray-800 hover:text-orange-500 cursor-pointer">
              Home
            </li>
            <li className="p-4 text-lg border-b border-gray-300 text-gray-800 hover:text-orange-500 cursor-pointer">
              About Us
            </li>
            <li>
              <select
                className="p-4 text-lg border-b border-gray-300 text-gray-800 hover:text-orange-500 cursor-pointer"
                name="Service"
                id="Services"
              >
                <option value="Service">SERVICES</option>
                <option value="Web_Development">Web Development</option>
                <option value="App_Development">App Development</option>
                <option value="Software_Development">
                  Software Development
                </option>
              </select>
            </li>
            <li className="p-4 text-lg border-b border-gray-300 text-gray-800 hover:text-orange-500 cursor-pointer">
              Contest
            </li>
            <div className="grid grid-col-12 gap-2">
              <button className=" grid-col-6 bg-gray-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white">
                Sign Up
              </button>
              <button className=" grid-col-6 bg-gray-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white">
                Log In
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
