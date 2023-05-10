import React from "react";
import { NewsContextProvider } from "../context/NewsContextProvider";
import Navbar from "./Navbar";
import NewsList from "./NewsList";

interface TechnologyProps {}

export const Technology: React.FC<TechnologyProps> = ({}) => {
  return (
    <NewsContextProvider category="technology">
      <hr className="h-px my-8 bg-gray-300 border-0 " />

      <div className="ime">
        <h3 className="text-lg font-semibold mt-5 mb-5">Technology</h3>
        <div className="news ">
          <NewsList category={"technology"} />
        </div>
      </div>
    </NewsContextProvider>
  );
};
export default Technology;
