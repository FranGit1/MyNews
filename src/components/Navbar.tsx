import React, { useContext } from "react";
import homeIcon from "../assets/Property 2=Home.svg";
import generalIcon from "../assets/Property 2=News.svg";
import sportsIcon from "../assets/Property 2=Sports.svg";
import scienceIcon from "../assets/Property 2=Science.svg";
import businessIcon from "../assets/Property 2=Netguide.svg";
import healthIcon from "../assets/Property 2=Health.svg";
import technologyhIcon from "../assets/Property 2=TV Guide.svg";
import { Link, useLocation } from "react-router-dom";
import { MenuContext } from "../context/MenuContextProvider";

interface NavbarProps {
  direction: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ direction }) => {
  const { pathname } = useLocation();
  const { setMenuOn } = useContext(MenuContext);

  const handleIconClick = (): void => {
    setMenuOn(true);
  };

  return (
    <div
      className={`${
        direction
          ? "inline-flex justify-center items-center flex-col space-y-4 mt-14"
          : "grid grid-cols-3 gap-4 justify-center mt-7"
      }  `}
    >
      <Link
        to="/"
        className="flex flex-col items-center  px-3 py-2  rounded-lg hover:bg-white group"
        onClick={handleIconClick}
      >
        <img src={homeIcon} alt="" className="w-8 h-6" />
        <span
          className={`mt-2 text-sm font-semibold	text-grey group-hover:text-darkRed ${
            pathname === "/" ? "text-darkRed" : "text-gray"
          }`}
        >
          Home
        </span>
      </Link>
      <Link
        to="/general"
        className="flex flex-col items-center  px-3 py-2  rounded-lg hover:bg-white group "
        onClick={handleIconClick}
      >
        <img src={generalIcon} alt="" className="w-8 h-6" />
        <span
          className={`mt-2 text-sm font-semibold	text-grey group-hover:text-darkRed ${
            pathname === "/general" ? "text-darkRed" : "text-gray"
          }`}
        >
          General
        </span>
      </Link>
      <Link
        to="/business"
        className="flex flex-col items-center px-3 py-2  rounded-lg hover:bg-white group"
        onClick={handleIconClick}
      >
        <img src={businessIcon} alt="" className="w-8 h-6" />
        <span
          className={`mt-2 text-sm font-semibold	text-grey group-hover:text-darkRed ${
            pathname === "/business" ? "text-darkRed" : "text-gray"
          }`}
        >
          Business
        </span>
      </Link>
      <Link
        to="/health"
        className="flex flex-col items-center px-3 py-2  rounded-lg hover:bg-white group"
        onClick={handleIconClick}
      >
        <img src={healthIcon} alt="" className="w-8 h-6" />
        <span
          className={`mt-2 text-sm font-semibold	text-grey group-hover:text-darkRed ${
            pathname === "/health" ? "text-darkRed" : "text-gray"
          }`}
        >
          Health
        </span>
      </Link>
      <Link
        to="/science"
        className="flex flex-col items-center px-3 py-2  rounded-lg hover:bg-white group"
        onClick={handleIconClick}
      >
        <img src={scienceIcon} alt="" className="w-8 h-6" />
        <span
          className={`mt-2 text-sm font-semibold	text-grey group-hover:text-darkRed ${
            pathname === "/science" ? "text-darkRed" : "text-gray"
          }`}
        >
          Science
        </span>
      </Link>
      <Link
        to="/sports"
        className="flex flex-col items-center px-3 py-2  rounded-lg hover:bg-white group"
        onClick={handleIconClick}
      >
        <img src={sportsIcon} alt="" className="w-8 h-6" />
        <span
          className={`mt-2 text-sm font-semibold	text-grey group-hover:text-darkRed ${
            pathname === "/sports" ? "text-darkRed" : "text-gray"
          }`}
        >
          Sports
        </span>
      </Link>
      <Link
        to="/technology"
        className="flex flex-col items-center px-3 py-2  rounded-lg hover:bg-white group"
        onClick={handleIconClick}
      >
        <img src={technologyhIcon} alt="" className="w-8 h-6" />
        <span
          className={`mt-2 text-sm font-semibold	text-grey group-hover:text-darkRed ${
            pathname === "/technology" ? "text-darkRed" : "text-gray"
          }`}
        >
          Technology
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
