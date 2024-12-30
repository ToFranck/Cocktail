import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Filter = () => {
  const [ingredients, setIngredients] = useState([]); // Liste des alcools
  const [selectedIngredient, setSelectedIngredient] = useState(null); // Alcool sélectionné
  const [searchTerm, setSearchTerm] = useState(""); // Recherche
  const [cocktails, setCocktails] = useState([]); // Résultat des cocktails
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // État du dropdown

  useEffect(() => {
    // Récupérer la liste des alcools au chargement
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
      .then((response) => {
        const data = response.data.drinks.map((drink) => drink.strIngredient1);
        setIngredients(data);
      });
  }, []);

  useEffect(() => {
    // Requête filtrée par alcool ou recherche
    if (selectedIngredient || searchTerm) {
      const url = selectedIngredient
        ? `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${selectedIngredient}`
        : `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`;

      axios.get(url).then((response) => {
        setCocktails(response.data.drinks || []);
      });
    } else {
      setCocktails([]);
    }
  }, [selectedIngredient, searchTerm]);

  return (
    <div className="md:flex">
      {/* Section filtre */}
      <div className="md:w-1/4 p-4  relative">
        <h2 className="font-bold mb-4">Filtres</h2>
        <button
          className="flex items-center justify-between bg-red-400 text-white px-4 py-2 rounded w-full"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span>Sélectionner un ingrédient</span>
          <span>{isDropdownOpen ? "▲" : "▼"}</span>
        </button>

        {isDropdownOpen && (
          <div className="overflow-y-auto">
            {ingredients.map((ingredient, index) => (
              <div
                key={index}
                className={`h-full cursor-pointer px-4 py-2 hover:bg-gray-100 ${
                  selectedIngredient === ingredient ? "bg-blue-100" : ""
                }`}
                onClick={() => {
                  setSelectedIngredient(
                    selectedIngredient === ingredient ? null : ingredient
                  );
                  setSearchTerm(""); // Réinitialiser la recherche
                  setIsDropdownOpen(false); // Fermer le menu
                }}
              >
                {ingredient}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Section résultats */}
      <div className="md:w-3/4 p-4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Chercher un cocktail"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setSelectedIngredient(null); // Réinitialiser le filtre
            }}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cocktails.length > 0 ? (
            cocktails.map((cocktail) => (
              
              <div
                key={cocktail.idDrink}
                // className="border rounded overflow-hidden shadow-sm"
                className="card relative pb-8"
              >
                <Link
      to={`/${cocktail.idDrink}`}
      key={cocktail.idDrink}
    >

                <img
                  src={cocktail.strDrinkThumb}
                  alt={cocktail.strDrink}
                  // className="w-full h-32 object-cover"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div 
                // className="p-2"
                className="absolute inset-0 bg-opacity-50 flex flex-col justify-end items-center text-black"
                >
                  
                  <h3 className="font-bold text-lg">{cocktail.strDrink}</h3>
                </div>
                </Link>
              </div>
            ))
          ) : (
            <p>Aucun cocktail trouvé</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
