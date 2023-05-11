import React from "react";
import Article from "../model/Article";

interface BreakingNewsProps {
  article: Article | undefined;
}

export const BreakingNews: React.FC<BreakingNewsProps> = ({ article }) => {
  return (
    <div className="bg-myBlack text-white shadow rounded-md max-w-fit flex h-80 w-96  items-center">
      <div className="main flex-col text-center ">
        <div className="mb-3">
          <span className="bg-darkRed px-3 py-1 text-sm font-bold ">
            BREAKING
          </span>{" "}
        </div>
        <div className="text-lg px-4 font-extrabold">{article?.title}</div>
        <div className="mt-2 text-md">{article?.author}</div>
      </div>
    </div>
  );
};
export default BreakingNews;
