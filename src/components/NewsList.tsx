import React, { useContext, useEffect, useState } from "react";
import { NewsContext } from "../context/NewsContextProvider";
import NewsItem from "./NewsItem";
import LatestNews from "./LatestNews";
import { useLocation } from "react-router-dom";
import { LatestNewsContext } from "../context/LatestNewsContextProvider";
import BreakingNews from "./BreakingNews";

interface NewsListProps {
  category?: string;
}

export const NewsList: React.FC<NewsListProps> = ({ category }) => {
  const { articles } = useContext(NewsContext);
  const { pathname } = useLocation();
  const { showLatest, setShowLatest } = useContext(LatestNewsContext);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  useEffect(() => {
    if (windowWidth > 758) {
      setShowLatest(false);
    }
  }, [windowWidth]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {showLatest ? <LatestNews /> : ""}

      {articles && !showLatest
        ? articles.map((article, index) => {
            if (index == 2 && pathname === "/") {
              return (
                <div className="row-span-2 hidden md:block" key={index}>
                  <LatestNews />
                </div>
              );
            }

            if (index == 4 && pathname === "/") {
              return (
                <div className=" hidden md:block" key={index}>
                  <BreakingNews article={article} />
                </div>
              );
            }

            return (
              <NewsItem article={article} category={category} key={index} />
            );
          })
        : ""}
    </div>
  );
};
export default NewsList;
