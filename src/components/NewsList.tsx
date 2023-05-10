import React, { useContext } from "react";
import { NewsContext } from "../context/NewsContextProvider";
import NewsItem from "./NewsItem";
import LatestNews from "./LatestNews";
import { useLocation } from "react-router-dom";

interface NewsListProps {
  category?: String;
}

export const NewsList: React.FC<NewsListProps> = ({ category }) => {
  const { articles } = useContext(NewsContext);
  const { pathname } = useLocation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles
        ? articles.map((article, index) => {
            if (index == 2 && pathname === "/") {
              return (
                <div className="row-span-2 hidden md:block" key={index}>
                  <LatestNews />
                </div>
              );
            }

            return (
              <NewsItem article={article} category={category} key={index} />
            );
          })
        : "Loading..."}
    </div>
  );
};
export default NewsList;
