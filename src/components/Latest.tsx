import React, { useContext, useEffect, useState } from "react";
import { NewsContext } from "../context/NewsContextProvider";
import NewsItem from "./NewsItem";
import axios from "axios";
import Article from "../model/Article";

interface LatestProps {}

export const Latest: React.FC<LatestProps> = ({}) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const apiKey = "60a02aefd26a4cac8b123e78ebc499bf";
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error: any) => console.log(error));
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles
        ? articles.map((article, index) => {
            return <NewsItem article={article} category="latest" key={index} />;
          })
        : ""}
    </div>
  );
};
export default Latest;
