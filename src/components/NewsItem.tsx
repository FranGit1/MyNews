import React, { useState } from "react";
import Article from "../model/Article";
import { Link, useLocation } from "react-router-dom";
import defaultImage from "../assets/1253325646.svg";
import fav from "../assets/pngwing.com.png";
import remove from "../assets/remove.svg";
import { toast } from "react-toastify";

interface NewsItemProps {
  article: Article | undefined;
  category?: string | undefined;
  handleRemove?: Function;
}

function getRandomCategory(): string {
  const categories: string[] = [
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

export const NewsItem: React.FC<NewsItemProps> = ({
  article,
  category,
  handleRemove,
}) => {
  if (typeof category === "undefined") {
    category = getRandomCategory();
  }

  const { pathname } = useLocation();
  const isFavoritesPage = pathname === "/favourite";
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (): void => {
    console.log(pathname);

    let savedArticles = JSON.parse(
      localStorage.getItem("savedArticles") || "[]"
    );
    savedArticles.push(article);
    localStorage.setItem("savedArticles", JSON.stringify(savedArticles));
    setIsSaved(true);
    toast.success("Article saved as favorite!", { autoClose: 2000 });
  };

  const handleRemoveClick = (): void => {
    if (handleRemove) {
      handleRemove(article);
      toast.success("Article removed from favorites!", { autoClose: 2000 });
    }
  };

  return (
    <div className="bg-white shadow rounded-md max-w-fit relative">
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
        <div className="flex justify-between  ">
          <p className="text-xs">
            {article?.author
              ? article?.author.substring(0, 21)
              : "Justin Davenport"}
          </p>
          {isFavoritesPage ? (
            <button onClick={handleRemoveClick}>
              <img src={remove} alt="Remove from favorites" />
            </button>
          ) : (
            <button onClick={handleSave}>
              <img src={fav} alt="Add to favorites" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
