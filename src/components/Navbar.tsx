import React, { useContext } from "react";
import homeIcon from "../assets/Property 2=Home.svg";
import homeIconRed from "../assets/home-red.svg";
import generalIcon from "../assets/Property 2=News.svg";
import generalIconRed from "../assets/news-red.svg";
import sportsIcon from "../assets/Property 2=Sports.svg";
import sportsIconRed from "../assets/sports-red.svg";
import scienceIcon from "../assets/Property 2=Science.svg";
import scienceIconRed from "../assets/science-red.svg";
import businessIcon from "../assets/Property 2=Business.svg";
import businessIconRed from "../assets/business-red.svg";
import bookmarkIcon from "../assets/Property 2=Netguide.svg";
import bookmarkIconRed from "../assets/netguide-red.svg";
import healthIcon from "../assets/Property 2=Health.svg";
import healthIconRed from "../assets/health-red.svg";
import technologyhIcon from "../assets/Property 2=TV Guide.svg";
import technologyhIconRed from "../assets/tv-guide-red.svg";
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
          ? "inline-flex justify-center items-center flex-col space-y-4 mt-14 mr-5  "
          : "grid grid-cols-3 gap-4 justify-center mt-7"
      }  `}
    >
      <Link
        to="/"
        className={`flex flex-col items-center  px-3 py-2  rounded-md ${
          pathname === "/" ? "bg-white" : ""
        } hover:bg-white group min-w-fit md:w-24`}
        onClick={handleIconClick}
      >
        <img
          src={pathname === "/" ? homeIconRed : homeIcon}
          alt=""
          className="w-8 h-6 "
        />
        <span
          className={`mt-2 text-sm font-semibold text-grey ${
            pathname === "/" ? "text-darkRed" : ""
          } group-hover:text-darkRed`}
        >
          Home
        </span>
      </Link>
      <Link
        to="/general"
        className={`flex flex-col items-center  px-3 py-2  rounded-md ${
          pathname === "/general" ? "bg-white" : ""
        } hover:bg-white group  min-w-fit md:w-24 `}
        onClick={handleIconClick}
      >
        <img
          src={pathname === "/general" ? generalIconRed : generalIcon}
          alt=""
          className="w-8 h-6 "
        />
        <span
          className={`mt-2 text-sm font-semibold text-grey ${
            pathname === "/general" ? "text-darkRed" : ""
          } group-hover:text-darkRed`}
        >
          General
        </span>
      </Link>
      <Link
        to="/business"
        className={`flex flex-col items-center  px-3 py-2  rounded-md ${
          pathname === "/business" ? "bg-white" : ""
        } hover:bg-white group   min-w-fit md:w-24`}
        onClick={handleIconClick}
      >
        <img
          src={pathname === "/business" ? businessIconRed : businessIcon}
          alt=""
          className="w-8 h-6 "
        />
        <span
          className={`mt-2 text-sm font-semibold text-grey ${
            pathname === "/business" ? "text-darkRed" : ""
          } group-hover:text-darkRed`}
        >
          Business
        </span>
      </Link>
      <Link
        to="/health"
        className={`flex flex-col items-center  px-3 py-2  rounded-md ${
          pathname === "/health" ? "bg-white" : ""
        } hover:bg-white group   min-w-fit md:w-24`}
        onClick={handleIconClick}
      >
        <img
          src={pathname === "/health" ? healthIconRed : healthIcon}
          alt=""
          className="w-8 h-6 "
        />
        <span
          className={`mt-2 text-sm font-semibold text-grey ${
            pathname === "/health" ? "text-darkRed" : ""
          } group-hover:text-darkRed`}
        >
          Health
        </span>
      </Link>
      <Link
        to="/science"
        className={`flex flex-col items-center  px-3 py-2  rounded-md ${
          pathname === "/science" ? "bg-white" : ""
        } hover:bg-white group   min-w-fit md:w-24`}
        onClick={handleIconClick}
      >
        <img
          src={pathname === "/science" ? scienceIconRed : scienceIcon}
          alt=""
          className="w-8 h-6 "
        />
        <span
          className={`mt-2 text-sm font-semibold text-grey ${
            pathname === "/science" ? "text-darkRed" : ""
          } group-hover:text-darkRed`}
        >
          Science
        </span>
      </Link>
      <Link
        to="/sports"
        className={`flex flex-col items-center  px-3 py-2   rounded-md ${
          pathname === "/sports" ? "bg-white" : ""
        } hover:bg-white group   min-w-fit md:w-24`}
        onClick={handleIconClick}
      >
        <img
          src={pathname === "/sports" ? sportsIconRed : sportsIcon}
          alt=""
          className="w-8 h-6 "
        />
        <span
          className={`mt-2 text-sm font-semibold text-grey ${
            pathname === "/sports" ? "text-darkRed" : ""
          } group-hover:text-darkRed`}
        >
          Sports
        </span>
      </Link>
      <Link
        to="/technology"
        className={`flex flex-col items-center  px-3 py-2   rounded-md ${
          pathname === "/technology" ? "bg-white" : ""
        } hover:bg-white group   min-w-fit md:w-24`}
        onClick={handleIconClick}
      >
        <img
          src={
            pathname === "/technology" ? technologyhIconRed : technologyhIcon
          }
          alt=""
          className="w-8 h-6 "
        />
        <span
          className={`mt-2 text-sm font-semibold text-grey ${
            pathname === "/technology" ? "text-darkRed" : ""
          } group-hover:text-darkRed`}
        >
          Technology
        </span>
      </Link>
      <Link
        to="/favourite"
        className={`flex flex-col items-center  px-3 py-2  rounded-md ${
          pathname === "/favourite" ? "bg-white" : ""
        } hover:bg-white group   min-w-fit md:w-24`}
        onClick={handleIconClick}
      >
        <img
          src={pathname === "/favourite" ? bookmarkIconRed : bookmarkIcon}
          alt=""
          className="w-8 h-6 "
        />
        <span
          className={`mt-2 text-sm font-semibold text-grey ${
            pathname === "/favourite" ? "text-darkRed" : ""
          } group-hover:text-darkRed`}
        >
          Favourite
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
