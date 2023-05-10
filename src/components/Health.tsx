import React from "react";
import { NewsContextProvider } from "../context/NewsContextProvider";
import Navbar from "./Navbar";
import NewsList from "./NewsList";

interface HealthProps {}

export const Health: React.FC<HealthProps> = ({}) => {
  return (
    <NewsContextProvider category="health">
      <div className="ime">
        <h3 className="text-lg font-semibold mt-5 mb-5">Health</h3>
        <div className="news">
          <NewsList category={"health"} />
        </div>
      </div>
    </NewsContextProvider>
  );
};
export default Health;
