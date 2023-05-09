import React from "react";
import Search from "./Search";
import Navbar from "./Navbar";
import NewsItem from "./NewsItem";
interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div className="mt-10 px-[10%] ">
      <div className="home-container ml-6 flex items-center">
        <h1 className="text-red-500 py-1 pr-10 font-bold text-3xl">
          My<span className="text-gray-900">News</span>
        </h1>

        <Search />
      </div>
      <hr className="h-px my-8 bg-gray-300 border-0 " />

      <div className="flex mt-5">
        <Navbar />
        <div className="ime">
          <h3 className="text-lg font-semibold mt-5 mb-5">News</h3>
          <div className="news">
            <NewsItem />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
