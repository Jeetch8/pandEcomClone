import React from "react";
import { PAndCLogo } from "../Svg/NavbarSvg";

const Navbar = ({ setIsOpen }) => {
  return (
    <div>
      <div className="flex justify-between px-12 py-7 text-[14px] sticky top-0 w-[100vw]">
        <div className="flex space-x-12">
          <h3>Men</h3>
          <h3>Women</h3>
          <h3>Sale</h3>
        </div>
        <PAndCLogo />
        <div className="flex space-x-12">
          <h3>Search</h3>
          <h3>Account</h3>
          <h3
            onClick={() => setIsOpen(true)}
            className="hover:font-bold cursor-pointer"
          >
            Cart
          </h3>
        </div>
      </div>
      <div className="bg-[#F2F2F1] py-2 text-center text-[14px]">
        Pay with 4 installments with sezzle
      </div>
    </div>
  );
};

export default Navbar;
