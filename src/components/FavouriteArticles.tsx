import React, { useState, useEffect } from "react";
import Article from "../model/Article";
import NewsItem from "./NewsItem";

interface FavouriteArticlesProps {}

export const FavouriteArticles: React.FC<FavouriteArticlesProps> = ({}) => {
  const [savedArticles, setSavedArticles] = useState<Article[]>([]);

  useEffect(() => {
    const savedArticlesJson = localStorage.getItem("savedArticles");
    if (savedArticlesJson) {
      const savedArticlesArray: Article[] = JSON.parse(savedArticlesJson);
      setSavedArticles(savedArticlesArray);
    }
  }, []);

  const handleRemove = (article: Article): void => {
    const filteredArticles = savedArticles.filter(
      (savedArticle: Article) => savedArticle.url !== article.url
    );
    setSavedArticles(filteredArticles);
    localStorage.setItem("savedArticles", JSON.stringify(filteredArticles));
  };

  return (
    <>
      <h1 className="text-lg font-semibold mt-5 mb-5">Favourite Articles</h1>
      {savedArticles.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {savedArticles.map((article: Article) => (
            <NewsItem
              key={article.url}
              article={article}
              handleRemove={() => handleRemove(article)}
            />
          ))}
        </div>
      ) : (
        <p>You have no saved articles.</p>
      )}
    </>
  );
};

export default FavouriteArticles;
