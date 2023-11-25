import React, { useState, useEffect } from 'react';
import { filterByNonAlcoholicURL } from "../../api/api";
import Cards from "../../components/cards/cards";
import './alcoholfree.css';

const Alcoholfree = () => {
  const [alcoholFreeDrinks, setAlcoholFreeDrinks] = useState([]);

  useEffect(() => {
    const fetchAlcoholFreeDrinks = async () => {
      try {
        const response = await fetch(filterByNonAlcoholicURL);
        const data = await response.json();
        setAlcoholFreeDrinks(data.drinks || []);
      } catch (error) {
        console.error('Erreur lors de la récupération des boissons sans alcool : ', error);
      }
    };

    fetchAlcoholFreeDrinks();
  }, []);

  return (
    <>
    <div className='alcoholfree-hero'>
      <h1>Boissons sans alcool</h1>
      
    </div>
      <div className="alcoholfree-container">
        {alcoholFreeDrinks.map((drink) => (
          <Cards key={drink.idDrink} cocktail={drink} />
        ))}
      </div>
    
    </>
  );
};

export default Alcoholfree;
