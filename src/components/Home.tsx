import React from "react";
import { NewsContextProvider } from "../context/NewsContextProvider";
import NewsList from "./NewsList";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <NewsContextProvider>
      <div className="ime">
        <h3 className="text-lg font-semibold mt-5 mb-5  hidden md:block">
          News
        </h3>

        <div className="news">
          <NewsList />
        </div>
      </div>
    </NewsContextProvider>
  );
};
export default Home;
