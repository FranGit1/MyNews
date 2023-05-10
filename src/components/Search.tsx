import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Search.scss";
import searchIcon from "../assets/Search.png";

interface SearchProps {}

export const Search: React.FC<SearchProps> = ({}) => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = inputRef.current?.value;
    navigate(`/search/${query}`);
    e.currentTarget.reset();
  };

  return (
    <form id="form" role="search" onSubmit={handleSearch}>
      <div className="search-text">
        <img className="icon-search" src={searchIcon} alt="search icon" />
        <input
          type="search"
          id="query"
          name="q"
          placeholder="Search news"
          aria-label="Search through site content"
          ref={inputRef}
        />
      </div>
      <button className="srchButton" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
