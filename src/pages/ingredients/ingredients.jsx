import React from "react";
import { useState, useEffect } from "react";
import IngredientSearch from "../../components/ingredientSearch/ingredientSearch";
import { ingredientByNameURL } from "../../api/api";
import IngredientsCards from "../../components/cards/ingredientscards";
import "./ingredients.css";

const Ingredients = () => {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (searchText) => {
    setSearchText(searchText);
  };

  useEffect(() => {
    if (searchText) {
      fetch(`${ingredientByNameURL}${searchText}`)
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
      <div className="ingredients-hero">
        <h1>Ingrédients</h1>
        <IngredientSearch onSearch={handleSearch} />
      </div>
      {searchText && (
        <div>
          <h2 className="result">
            Résultats de la recherche pour "{searchText}" :
          </h2>
          <div className="ingredients-list">
            {results.length === 0 && (
              <p className="ingredients-empty">
                Oups malheureusement aucun ingrédient trouvé
              </p>
            )}
            {results.map((result) => (
              <div key={result.idIngredient}>
                {result.strDrink}
                <IngredientsCards cocktail={result} />
              </div>
            ))}

            
          </div>
        </div>
      )}
    </>
  );
};

export default Ingredients;
