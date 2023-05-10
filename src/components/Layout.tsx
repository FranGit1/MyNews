import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { OfferContext } from "../context/OfferContextProvider";
import Offer from "./Offer";
import Search from "./Search";
import Navbar from "./Navbar";
import hamburger from "../assets/ham.svg";
import exitHamburger from "../assets/exit.svg";
import { LatestNewsContext } from "../context/LatestNewsContextProvider";
import { MenuContext } from "../context/MenuContextProvider";
interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({}) => {
  const { showOffer } = useContext(OfferContext);
  const { showLatest, setShowLatest } = useContext(LatestNewsContext);
  const [featured, setFeatured] = useState(true);
  const { menuOff, setMenuOn } = useContext(MenuContext);

  const handleClickFeature = (): void => {
    setFeatured(true);
    setShowLatest(false);
  };

  const handleClickLatest = (): void => {
    setShowLatest(true);
    setFeatured(false);
  };

  const handleClickMenu = (): void => {
    setMenuOn(!menuOff);
  };

  return (
    <main className="App">
      <div className="hidden md:block">{showOffer && <Offer />}</div>
      <div className="mt-10 px-5 md:px-[10%]  ">
        <div className="home-container mx-auto md:ml-10 flex flex-col   items-center md:flex-row md:items-center">
          <div
            className={`flex ${
              !menuOff
                ? "flex-col-reverse items-center"
                : "justify-between items-center "
            } w-full md:w-fit`}
          >
            <h1 className="text-darkRed py-1 pr-10 font-extrabold	 text-3xl  md:mb-0 md:mr-5 mb-4 md:mb-0">
              My<span className="text-gray-900">News</span>
            </h1>
            <div
              className={` ${
                !menuOff ? "flex justify-between w-full md:w-fit" : ""
              }`}
            >
              <div className={` ${!menuOff ? " invisible" : "hidden"}`}>
                place
              </div>
              <button
                onClick={handleClickMenu}
                className="block mb-4 md:mb-0  md:hidden "
              >
                <img
                  src={menuOff ? hamburger : exitHamburger}
                  className={` ${!menuOff ? "mb-10" : ""}`}
                />
              </button>
            </div>
          </div>
          <div
            className={` ${
              !menuOff ? "mt-10 w-full md:w-auto" : "w-full md:w-auto"
            }`}
          >
            <Search />
          </div>
        </div>

        {menuOff && (
          <div className="flex mt-5 items-start justify-center md:justify-start ">
            <div className="hidden md:block">
              <Navbar direction={true} />
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
        )}

        {!menuOff && <Navbar direction={false} />}
      </div>
    </main>
  );
};
export default Layout;
