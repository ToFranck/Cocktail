import React from "react";
import "./cocktails.css";
import { useState, useEffect } from "react";
import CocktailSearch from "../../components/cocktailsSearch/cocktailsSearch";
import { cocktailByNameURL } from "../../api/api";
import Cards from "../../components/cards/cards";

const Cocktails = () => {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (searchText) => {
    setSearchText(searchText);
  };

  useEffect(() => {
    if (searchText) {
      fetch(`${cocktailByNameURL}${searchText}`)
        .then((response) => response.json())
        .then((data) => {
          setResults(data.drinks || []);
        })
        .catch((error) =>
          console.error("Erreur lors de la récupération des données : ", error)
        );
    }
  }, [searchText]);

  return (
    <>
      <div className="cocktails-hero">
        <h1>Cocktails</h1>

        <CocktailSearch onSearch={handleSearch} />
        
      </div>
      {searchText && (
        <div>

          <h2 className="result">
            Résultats de la recherche pour "{searchText}" :
          </h2>
          <div className="cocktails-list">
            {results.length === 0 && (
              <p className="cocktails-empty">
                Oups malheureusement aucun cocktail trouvé
              </p>
            )}
            {results.map((result) => (
              <div key={result.idDrink}>
                <Cards cocktail={result} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Cocktails;
