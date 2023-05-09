import React, { useContext } from "react";
import img1 from "../assets/1223468480.png";
import { NewsContext } from "../context/NewsContextProvider";
import Article from "../model/Article";
import { Link } from "react-router-dom";
interface NewsItemProps {
  article: Article | undefined;
  category?: String | undefined;
}

function getRandomCategory(): String {
  const categories: String[] = [
    "sports",
    "general",
    "politics",
    "technology",
    "health",
    "business",
  ];
  const randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
}

export const NewsItem: React.FC<NewsItemProps> = ({ article, category }) => {
  if (typeof category === "undefined") {
    category = getRandomCategory();
  }
  return (
    <div className="bg-white shadow rounded-md h-full">
      <img
        src={article?.urlToImage}
        alt=""
        className="rounded-t-xl  h-40 w-96 object-cover"
      />
      <div className="p-3">
        <span className="text-sm font-semibold text-blue-500 uppercase">
          <Link to={{ pathname: `/${category}` }}>{category}</Link>
        </span>
        <h3 className="font-bold mb-4 ">{article?.title}</h3>
        <p className="mb-4 text-xs max-w-xs">{article?.author}</p>
      </div>
    </div>
  );
};
export default NewsItem;
