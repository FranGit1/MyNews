import React, { useContext, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { OfferContext } from "../context/OfferContextProvider";
import Offer from "./Offer";
import Search from "./Search";
import Navbar from "./Navbar";
import hamburger from "../assets/ham.svg";
import { LatestNewsContext } from "../context/LatestNewsContextProvider";
interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({}) => {
  const { showOffer } = useContext(OfferContext);
  const { showLatest, setShowLatest } = useContext(LatestNewsContext);
  const [featured, setFeatured] = useState(true);

  const handleClickFeature = (): undefined => {
    setFeatured(true);
    setShowLatest(false);
    return undefined;
  };

  const handleClickLatest = (): undefined => {
    setShowLatest(true);
    setFeatured(false);
    return undefined;
  };

  return (
    <main className="App">
      <div className="hidden md:block">{showOffer && <Offer />}</div>
      <div className="mt-10 px-5 md:px-[10%]  ">
        <div className="home-container mx-auto md:ml-10 flex flex-col items-center md:flex-row md:items-center">
          <div className="flex  justify-between w-full md:w-fit">
            <h1 className="text-red-500 py-1 pr-10 font-bold text-3xl mb-5 md:mb-0 md:mr-5">
              My<span className="text-gray-900">News</span>
            </h1>
            <button className="block py-1 mb-5 md:hidden">
              <img src={hamburger} alt="" />
            </button>
          </div>
          <div className="w-full md:w-auto">
            <Search />
          </div>
        </div>

        <div className="flex mt-5 items-start justify-center md:justify-start ">
          <div className="hidden md:block">
            <Navbar />
          </div>
          <div className="flex-col">
            <div className="flex justify-center py-4 font-semibold  md:hidden	">
              <div
                onClick={handleClickFeature}
                className={` py-3 px-5 cursor-pointer  ${
                  featured || !showLatest
                    ? "bg-redTrans rounded-3xl text-darkRed"
                    : ""
                }`}
              >
                Featured
              </div>
              <div
                onClick={handleClickLatest}
                className={` py-3 px-5 cursor-pointer  ${
                  showLatest ? "bg-redTrans rounded-3xl text-darkRed" : ""
                }`}
              >
                Latest
              </div>
            </div>
            <hr className="h-px my-8 bg-gray-300 border-0 hidden md:block" />

            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Layout;
