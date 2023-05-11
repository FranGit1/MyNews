import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";
import Article from "../model/Article";

interface LatestProps {}

export const Latest: React.FC<LatestProps> = ({}) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const apiKey = "0145e0fa26f14011961893e6bcef91ce";
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
    <>
      <h3 className="text-lg font-semibold mt-5 mb-5">Latest News</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles
          ? articles.map((article, index) => {
              return (
                <NewsItem article={article} category="latest" key={index} />
              );
            })
          : ""}
      </div>
    </>
  );
};
export default Latest;
