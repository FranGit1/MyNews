import React from "react";
import Article from "../model/Article";
import { Link } from "react-router-dom";
import defaultImage from "../assets/1253325646.svg";
import fav from "../assets/pngwing.com.png";
interface NewsItemProps {
  article: Article | undefined;
  category?: String | undefined;
}

function getRandomCategory(): String {
  const categories: String[] = [
    "sports",
    "general",
    "science",
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
    <div className="bg-white shadow rounded-md max-w-fit	 relative">
      <img
        src={article?.urlToImage ? article?.urlToImage : defaultImage}
        alt=""
        className="rounded-t-xl h-40 w-96 object-cover"
      />
      {article?.urlToImage === null && (
        <button className="absolute top-0 left-0 m-3 px-2 py-1 bg-darkRed text-white rounded-md">
          Ad
        </button>
      )}
      <div className="p-3 h-40 flex flex-col justify-between">
        <div>
          <span className="text-sm font-semibold text-blue-500 uppercase">
            <Link to={{ pathname: `/${category}` }}>{category}</Link>
          </span>
          <h3 className="font-bold mb-1 line-clamp-2 max-w-xs hover:line-clamp-none transition-all duration-300 ease-in-out">
            {article?.title}
          </h3>
        </div>
        <div className="flex justify-between">
          <p className="text-xs">
            {article?.author
              ? article?.author.substring(0, 21)
              : "Justin Davenport"}
          </p>
          <button>
            <img src={fav} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
