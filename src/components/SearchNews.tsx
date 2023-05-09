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
    .pop()}&apiKey=534b4cc866c1451db7165e91a1b63483`;

  const [articles, setArticle] = useState<Article[]>([]);

  useEffect(() => {
    console.log(url);

    axios
      .get(url)
      .then((response) => {
        setArticle(response.data.articles);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="mt-10 px-[10%] ">
      <div className="home-container ml-6 flex items-center">
        <h1 className="text-red-500 py-1 pr-10 font-bold text-3xl">
          My<span className="text-gray-900">News</span>
        </h1>
      </div>
      <hr className="h-px my-8 bg-gray-300 border-0 " />

      <div className="flex mt-5  items-start">
        <Navbar />
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
      </div>
    </div>
  );
};
export default SearchNews;
