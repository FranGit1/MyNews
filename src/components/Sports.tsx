import React from "react";
import { NewsContextProvider } from "../context/NewsContextProvider";
import Navbar from "./Navbar";
import NewsList from "./NewsList";

interface SportsProps {}

export const Sports: React.FC<SportsProps> = ({}) => {
  return (
    <NewsContextProvider category="sports">
      <hr className="h-px my-8 bg-gray-300 border-0 " />

      <div className="ime">
        <h3 className="text-lg font-semibold mt-5 mb-5">Sports</h3>
        <div className="news">
          <NewsList category={"sports"} />
        </div>
      </div>
    </NewsContextProvider>
  );
};
export default Sports;
