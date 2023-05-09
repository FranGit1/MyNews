import React from "react";
import { NewsContextProvider } from "../context/NewsContextProvider";
import Navbar from "./Navbar";
import NewsList from "./NewsList";

interface TechnologyProps {}

export const Technology: React.FC<TechnologyProps> = ({}) => {
  return (
    <NewsContextProvider category="technology">
      <div className="mt-10 px-[10%] ">
        <div className="home-container ml-6 flex items-center">
          <h1 className="text-red-500 py-1 pr-10 font-bold text-3xl">
            My<span className="text-gray-900">News</span>
          </h1>
        </div>
        <hr className="h-px my-8 bg-gray-300 border-0 " />

        <div className="flex mt-5  items-start">
          <Navbar />
          <div className="ime">
            <h3 className="text-lg font-semibold mt-5 mb-5">Technology</h3>
            <div className="news ">
              <NewsList category={"technology"} />
            </div>
          </div>
        </div>
      </div>
    </NewsContextProvider>
  );
};
export default Technology;