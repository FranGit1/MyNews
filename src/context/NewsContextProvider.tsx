import React, { ReactNode, createContext, useEffect, useState } from "react";
import axios from "axios";
import Article from "../model/Article";

interface NewsProviderProps {
  children: ReactNode;
  category?: String;
}

export interface NewsContextProps {
  articles: Article[] | undefined;
}

export const NewsContext = createContext<NewsContextProps>({
  articles: undefined,
});

export const NewsContextProvider: React.FC<NewsProviderProps> = ({
  children,
  category,
}) => {
  const [articles, setArticle] = useState(undefined);
  const apiKey = "3de15fadf5914c1e854ae1a52848f5f1";

  let url = `https://newsapi.org/v2/everything?q=america&sortBy=publishedAt&apiKey=${apiKey} `;

  if (category) {
    url = `http://newsapi.org/v2/top-headlines?country=us&category=${category}&sortBy=publishedAt?country=us&apiKey=${apiKey}`;
  }

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setArticle(response.data.articles);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ articles }}>{children}</NewsContext.Provider>
  );
};
