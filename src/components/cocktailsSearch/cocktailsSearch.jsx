import React, { useState } from "react";
import "./cocktailsSearch.css";

const CocktailSearch = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="input-search">
      <div className="input-search2">
      <input
        type="text"
        placeholder="Find a cocktail"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        
      /></div>
      <button onClick={handleSearch}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-check"><path d="m8 11 2 2 4-4"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      </button>
    </div>
  );
};

export default CocktailSearch;