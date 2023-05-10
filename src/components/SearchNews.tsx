import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Article from "../model/Article";
import NewsItem from "./NewsItem";
import Navbar from "./Navbar";

interface SearchNewsProps {}

export const SearchNews: React.FC<SearchNewsProps> = ({}) => {
  const { pathname } = useLocation();
  const url = `https://newsapi.org/v2/everything?q=${pathname
    .split("/")
    .pop()}&apiKey=3de15fadf5914c1e854ae1a52848f5f1`;

  const [articles, setArticle] = useState<Article[]>([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setArticle(response.data.articles);
      })
      .catch((error) => console.log(error));
  }, [pathname]);

  return (
    <div className="ime">
      <h3 className="text-lg font-semibold mt-5 mb-5">Search</h3>
      <div className="news ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles
            ? articles.map((article) => {
                return <NewsItem article={article} key={article.url} />;
              })
            : "Loading..."}
        </div>{" "}
      </div>
    </div>
  );
};
export default SearchNews;
