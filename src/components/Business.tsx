import React from "react";
import { NewsContextProvider } from "../context/NewsContextProvider";
import Navbar from "./Navbar";
import NewsList from "./NewsList";

interface BusinessProps {}

export const Business: React.FC<BusinessProps> = ({}) => {
  return (
    <NewsContextProvider category="business">
      <hr className="h-px my-8 bg-gray-300 border-0 " />

      <div className="ime">
        <h3 className="text-lg font-semibold mt-5 mb-5">Business</h3>
        <div className="news">
          <NewsList category={"business"} />
        </div>
      </div>
    </NewsContextProvider>
  );
};
export default Business;
