import React, { useState } from "react";
import logo from "./assets/logo.png";
import { Languages, Logs, UserRound, X } from "lucide-react";
import "../App.css";

interface HeaderProps {
  customClass?: string;
}

const Header: React.FC<HeaderProps> = ({ customClass }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <header
      className={`flex bg-white p-2 px-[5vw] sm:px-10 justify-between items-end text-black relative ${customClass} `}
    >
      <div className="left">
        <img src={logo} alt="logo" className="w-20 sm:w-32 cursor-pointer" />
      </div>

      <div className="right flex gap-5 xl:gap-10 font-inter font-bold text-[14px] text-center">
        <div className={`titles flex gap-5 xl:gap-10 transition-all ${toggle? "right-0 z-50" : "-right-[100%]"}`}>
          <div
            className="flex justify-end p-2 lg:hidden"
            onClick={() => setToggle(false)}
          >
            <X size="40px" />
          </div>
          <a href="#">PROPERTIES</a>
          <a href="#">MY DASHBOARD/ACTIVITY</a>
          <a href="#">LIST YOUR PROPERTY</a>
          <a href="#">CONTACT US</a>
          <a href="#">MORE</a>
          <div className="relative max-lg:hidden">
            <a className="text-2xl absolute bottom-0 font-normal">|</a>
          </div>
        </div>
        <Languages className="cursor-pointer" />
        <UserRound className="cursor-pointer" />
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setToggle(true)}
        >
          <Logs />
        </div>
      </div>
    </header>
  );
};

export default Header;
