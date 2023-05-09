import React from "react";
import homeIcon from "../assets/Property 2=Home.svg";
import generalIcon from "../assets/Property 2=News.svg";
import sportsIcon from "../assets/Property 2=Sports.svg";
import scienceIcon from "../assets/Property 2=Science.svg";
import businessIcon from "../assets/Property 2=Netguide.svg";
import healthIcon from "../assets/Property 2=Health.svg";
import technologyhIcon from "../assets/Property 2=TV Guide.svg";

export const Navbar: React.FC = ({}) => {
  return (
    <div className="inline-flex justify-center items-center flex-col  space-y-4 mt-7">
      <a
        className="flex flex-col items-center  px-3 py-2  rounded-lg hover:bg-white group"
        href="#"
      >
        <img src={homeIcon} alt="" className="w-8 h-6" />
        <span className="mt-2 text-sm font-semibold	text-grey group-hover:text-darkRed">
          Home
        </span>
      </a>
      <a
        className="flex flex-col items-center px-3 py-2  rounded-lg hover:bg-white group"
        href="#"
      >
        <img src={generalIcon} alt="" className="w-8 h-6" />
        <span className="mt-2 text-sm font-semibold	text-grey group-hover:text-darkRed">
          General
        </span>
      </a>
      <a
        className="flex flex-col items-center px-3 py-2  rounded-lg hover:bg-white group"
        href="#"
      >
        <img src={businessIcon} alt="" className="w-8 h-6" />
        <span className="mt-2 text-sm font-semibold	text-grey group-hover:text-darkRed">
          Business
        </span>
      </a>{" "}
      <a
        className="flex flex-col items-center px-3 py-2  rounded-lg hover:bg-white group"
        href="#"
      >
        <img src={healthIcon} alt="" className="w-8 h-6" />
        <span className="mt-2 text-sm font-semibold	text-grey group-hover:text-darkRed">
          Health
        </span>
      </a>
      <a
        className="flex flex-col items-center px-3 py-2  rounded-lg hover:bg-white group"
        href="#"
      >
        <img src={scienceIcon} alt="" className="w-8 h-6" />
        <span className="mt-2 text-sm font-semibold	text-grey group-hover:text-darkRed">
          Science
        </span>
      </a>
      <a
        className="flex flex-col items-center px-3 py-2  rounded-lg hover:bg-white group"
        href="#"
      >
        <img src={sportsIcon} alt="" className="w-8 h-6" />
        <span className="mt-2 text-sm font-semibold	text-grey group-hover:text-darkRed">
          Sports
        </span>
      </a>
      <a
        className="flex flex-col items-center px-3 py-2  rounded-lg hover:bg-white group"
        href="#"
      >
        <img src={technologyhIcon} alt="" className="w-8 h-6" />
        <span className="mt-2 text-sm font-semibold	text-grey group-hover:text-darkRed">
          Technology
        </span>
      </a>
    </div>
  );
};

export default Navbar;
