import React from "react";
import "./search-bar.styles.css";
const SearchBar = ({ topic, changeTopic }) => (
  <input
    value={topic}
    onChange={(e) => {
      changeTopic(e);
    }}
    placeholder="Search a topic here"
    type="search"
    className='search-bar'
  />
);

export default SearchBar;
