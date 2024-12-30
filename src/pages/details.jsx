import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Details() {
  const { id } = useParams(); // Récupération de l'ID depuis l'URL
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    // Récupérer les détails du cocktail
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        setCocktail(response.data.drinks[0]); // Les données du cocktail
      });
  }, [id]);

  if (!cocktail) return <p>Chargement...</p>;

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      
      <div className="left flex-1 flex justify-center items-center h-auto md:px-8">
        <img
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
          className=" object-cover"
        />
      </div>

      <div className="right flex-1 flex flex-col md:justify-center md:p-6 h-auto">
        <div className="w-4/5 mx-auto text-lg">
          <h1 className="text-3xl font-bold mb-4">{cocktail.strDrink}</h1>
          <hr className="border-t border-gray-400 w-full my-2" />
          <p className="mb-2">
            <strong>Catégorie :</strong> {cocktail.strCategory}
          </p>
          <hr className="border-t border-gray-400 w-full my-2" />
          <p className="mb-2">
            <strong>Type :</strong> {cocktail.strAlcoholic}
          </p>
          <hr className="border-t border-gray-400 w-full my-2" />
          <p className="mb-2">
            <strong>Instructions :</strong> {cocktail.strInstructions}
          </p>
          <hr className="border-t border-gray-400 w-full my-2" />
          <ul className="mb-4">
            <strong>Ingrédients :</strong>
            {Object.keys(cocktail)
              .filter((key) => key.includes("strIngredient") && cocktail[key])
              .map((key, index) => (
                <li key={index}>{cocktail[key]}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
