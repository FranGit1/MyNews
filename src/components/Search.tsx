import React from "react";
import "./Search.scss";
import searchIcon from "../assets/Search.png";

interface SearchProps {}

export const Search: React.FC<SearchProps> = ({}) => {
  return (
    <form id="form" role="search">
      <div className="search-text">
        <img className="icon-search" src={searchIcon} />
        <input
          type="search"
          id="query"
          name="q"
          placeholder="Search news"
          aria-label="Search through site content"
        />
      </div>
      <button>Search</button>
    </form>
  );
};
export default Search;
