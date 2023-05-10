import React from "react";

import { NewsContextProvider } from "../context/NewsContextProvider";
import NewsList from "./NewsList";
import { Link, useLocation } from "react-router-dom";
interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  const { pathname } = useLocation();

  return (
    <NewsContextProvider>
      <hr className="h-px my-8 bg-gray-300 border-0 " />

      <div className="ime">
        <h3 className="text-lg font-semibold mt-5 mb-5 hidden md:block">
          News
        </h3>
        <div className="flex justify-center py-4 font-semibold  md:hidden	">
          <Link
            to=""
            className={` py-3 px-5 cursor-pointer  ${
              pathname === "/" ? "bg-redTrans rounded-3xl text-darkRed" : ""
            }`}
          >
            Featured
          </Link>
          <Link
            to=""
            className={` py-3 px-5 cursor-pointer  ${
              pathname === "/latest"
                ? "bg-redTrans rounded-3xl text-darkRed"
                : ""
            }`}
          >
            {" "}
            Latest
          </Link>
        </div>
        <div className="news">
          <NewsList />
        </div>
      </div>
    </NewsContextProvider>
  );
};
export default Home;
