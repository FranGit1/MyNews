import React, { useContext } from "react";
import { NewsContext } from "../context/NewsContextProvider";
import NewsItem from "./NewsItem";

interface NewsListProps {
  category?: String;
}

export const NewsList: React.FC<NewsListProps> = ({ category }) => {
  const { articles } = useContext(NewsContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles
        ? articles.map((article) => {
            return (
              <NewsItem
                article={article}
                category={category}
                key={article.url}
              />
            );
          })
        : "Loading..."}
    </div>
  );
};
export default NewsList;
