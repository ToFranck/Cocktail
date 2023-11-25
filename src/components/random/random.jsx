import React, { useEffect, useState } from "react";
import { randomCocktailURL } from "../../api/api";
import "./random.css";

const Random = () => {
  const [randomCocktail, setRandomCocktail] = useState(null);

  useEffect(() => {
    // Récupérer un cocktail aléatoire depuis l'API
    fetch(randomCocktailURL)
      .then((response) => response.json())
      .then((data) => {
        // Mettre à jour l'état avec le cocktail aléatoire
        setRandomCocktail(data.drinks[0]);
      })
      .catch((error) =>
        console.error(
          "Erreur lors de la récupération du cocktail aléatoire : ",
          error
        )
      );
  }, []);

  return (
    <>

    
      <div className="random-card">
        {randomCocktail && (
          <div>
          
            {/* <h3>{randomCocktail.strDrink}</h3> */}
            <img
              src={randomCocktail.strDrinkThumb}
              alt={randomCocktail.strDrink}
              className="img-cocktail"
            />
            {/* <p>{randomCocktail.strInstructions}</p>
          <ul>
            <li>{randomCocktail.strCategory} </li>
            <li>{randomCocktail.strAlcoholic} </li>
            <li>{randomCocktail.strGlass} </li>
            <li>{randomCocktail.strIngredient1} </li>
            <li>{randomCocktail.strIngredient2} </li>
            <li>{randomCocktail.strIngredient3} </li>
            <li>{randomCocktail.strIngredient4} </li>
            <li>{randomCocktail.strIngredient5} </li>
            <li>{randomCocktail.strIngredient6} </li>

            
          </ul> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Random;
