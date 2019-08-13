import React from "react";
import "./search.css";

const Search = () => (
  <form className="search">
    <input className="search__input" type="text" placeholder="Search ..." />
    <button className="search__button">Search</button>
  </form>
);

export default Search;
