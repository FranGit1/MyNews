import React from "react";
import { NewsContextProvider } from "../context/NewsContextProvider";
import Navbar from "./Navbar";
import NewsList from "./NewsList";

interface ScienceProps {}

export const Science: React.FC<ScienceProps> = ({}) => {
  return (
    <NewsContextProvider category="science">
      <div className="ime">
        <h3 className="text-lg font-semibold mt-5 mb-5">Science</h3>
        <div className="news">
          <NewsList category={"science"} />
        </div>
      </div>
    </NewsContextProvider>
  );
};
export default Science;
