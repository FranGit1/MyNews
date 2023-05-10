import React from "react";
import { NewsContextProvider } from "../context/NewsContextProvider";
import NewsList from "./NewsList";

interface GeneralProps {}

export const General: React.FC<GeneralProps> = ({}) => {
  return (
    <NewsContextProvider category="general">
      <div className="ime">
        <h3 className="text-lg font-semibold mt-5 mb-5">General</h3>
        <div className="news">
          <NewsList category={"general"} />
        </div>
      </div>
    </NewsContextProvider>
  );
};
export default General;
