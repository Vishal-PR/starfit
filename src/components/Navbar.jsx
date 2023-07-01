import React from "react";
import { BsSmartwatch } from "react-icons/bs";
import {RiArrowDropDownLine} from 'react-icons/ri';

function Navbar() {
  return (
    <div className="w-full h-20  flex flex-row items-center justify-between px-8 mt-5 text-gray-300 uppercase  ">

        {/* Logo */}
      <div className="flex flex-row items-center justify-center space-x-2 cursor-pointer hover:scale-110">
        <span> <BsSmartwatch size={40} /> </span>

        <h1 className="font-semibold text-2xl">Startfit</h1>
      </div>

      {/* Navbar */}
      <div className="flex flex-row items-center justify-evenly space-x-12 text-xl font-light">
        <ul className="flex flex-row items-center justify-center cursor-pointer hover:scale-110">Prouct<RiArrowDropDownLine size={30}/></ul>
        <ul className="cursor-pointer hover:scale-110">About us</ul>
        <ul className="cursor-pointer hover:scale-110">Pricing</ul>
        <ul className="cursor-pointer hover:scale-110">Helpdesk</ul>
      </div>

      <button className="bg-gray-700 rounded-full px-8 py-2 uppercase ">Sign in</button>
    </div>
  );
}

export default Navbar;
