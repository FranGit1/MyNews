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
      <div className="w-75 pl-2 pt-4">
        <span className="text-blue-500">{formattedTime}</span>
        <h4 className="">{article.title}</h4>
      </div>
    </div>
  );
};
export default LatestNewsItem;
