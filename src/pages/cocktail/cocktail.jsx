import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { cocktailByNameURL } from "../../api/api";
import './cocktail.css';

const Cocktail = () => {
  const { cocktailName } = useParams();
  const [cocktailDetails, setCocktailDetails] = useState(null);

  useEffect(() => {
    // Faites une requête API pour obtenir les détails du cocktail en fonction de l'ID
    const fetchCocktailDetails = async () => {
      try {
        const response = await fetch(`${cocktailByNameURL}${cocktailName}`);
        const data = await response.json();
        setCocktailDetails(
          data.drinks[0]
          
        ); // Assurez-vous que la structure de votre réponse correspond
      } catch (error) {
        console.error('Erreur lors de la récupération des détails du cocktail : ', error);
      }
    };

    fetchCocktailDetails();
    
  }, [cocktailName]);

  return (
    <>
    
      
      {cocktailDetails ? (
        <div className="cocktail-detail">
          <div className="detail-left">
          <img src={cocktailDetails.strDrinkThumb} alt={cocktailDetails.strDrink} />

          </div>
          <div className="detail-right">
          <h1>{cocktailDetails.strDrink}</h1>
          <div className="line"></div>
          
          <p>{cocktailDetails.strInstructions}</p>
          <p className='ingre'> Ingredients : </p>
          <p>{cocktailDetails.strIngredient1}</p>
          <p>{cocktailDetails.strIngredient2}</p>
          <p>{cocktailDetails.strIngredient3}</p>
          <p>{cocktailDetails.strIngredient4}</p>
          <p>{cocktailDetails.strIngredient5}</p>
          <p>{cocktailDetails.strIngredient6}</p>
          <p>{cocktailDetails.strIngredient7}</p>
     



          </div>


        </div>
      ) : (
        <p>Chargement des détails du cocktail...</p>
      )}
     
    </>
  );
};

export default Cocktail;
