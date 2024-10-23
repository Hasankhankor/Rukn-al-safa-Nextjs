import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoCart } from "react-icons/io5";

const MobileStickyFooter = () => {
  return (
    <div className="md:hidden fixed bottom-0 block w-full  bg-[rgb(112,187,33)] text-white">
      <ul className="flex justify-around items-center ">
        <li className="border-r-2 w-[32%] py-3 flex justify-around items-center border-[rgb(112,187,33)]0">
          <a href="">
            <IoPersonSharp className="text-3xl" />
          </a>
        </li>
        <li className="border-r-2 w-[32%] py-3 flex justify-around items-center border-[rgb(112,187,33)]">
          <a href="">
            <FaSearch  className="text-3xl"/>
          </a>
        </li>
        <li className="w-[32%] flex py-3 justify-around items-center">
          <a href="">
            <IoCart  className="text-3xl"/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileStickyFooter;
