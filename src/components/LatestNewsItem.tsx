import React from "react";
import Article from "../model/Article";

interface LatestNewsItemProps {
  article: Article;
}

const getTimeFromISOString = (dateString: string): string => {
  const date = new Date(dateString);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};

export const LatestNewsItem: React.FC<LatestNewsItemProps> = ({ article }) => {
  const formattedTime = getTimeFromISOString(article.publishedAt);
  return (
    <div className="">
      <div className="w-75 pl-2 pt-6">
        <span className="text-blue-400 font-semibold text-sm">
          {formattedTime}
        </span>
        <h4 className="font-semibold text-sm">{article.title}</h4>
      </div>
      <hr className="h-px mt-5 bg-gray-100 border-0" />
    </div>
  );
};
export default LatestNewsItem;
