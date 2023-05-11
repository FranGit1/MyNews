import React, { useEffect, useState, useRef } from "react";
import topList from "../assets/toplist.svg";
import LatestNewsItem from "./LatestNewsItem";
import axios from "axios";
import Article from "../model/Article";
import arrow from "../assets/arrow.svg";
import { Link } from "react-router-dom";

interface LatestNewsProps {}

export const LatestNews: React.FC<LatestNewsProps> = ({}) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const apiKey = "0145e0fa26f14011961893e6bcef91ce";
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&page=${page}`;

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1 }
    );
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setArticles((prevArticles) => [
          ...prevArticles,
          ...response.data.articles,
        ]);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [url]);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current?.observe(document.querySelector(".scroll-anchor")!);
  }, [loading]);

  return (
    <div className="bg-white shadow rounded-md h-full flex flex-col">
      <div className="flex pt-4  pl-4">
        <img src={topList} alt="" className="pr-3" />
        <h4 className="font-semibold">Latest news</h4>
      </div>
      <div className="h-96  overflow-y-auto scrollbar-none pl-2 flex-grow">
        {articles.map((article, index) => {
          return <LatestNewsItem article={article} key={index} />;
        })}
        <div className="scroll-anchor" />
        {loading && <p>Loading...</p>}
      </div>
      <Link to="/latest" className="flex">
        <span className="text-sm font-medium text-blue-500 p-2">
          See all news
        </span>
        <img src={arrow} alt="" />
      </Link>
    </div>
  );
};

export default LatestNews;
