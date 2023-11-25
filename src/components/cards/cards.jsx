import React from "react";
import "./cards.css";
import { Link } from "react-router-dom";

const Cards = ({ cocktail }) => {
  console.log(cocktail.strDrink);
  return (
    <div className="cards">
      <Link to={`/cocktails/${cocktail.strDrink}`} className="link-card">
        <div className="img-card">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        </div>
        
        <h3>{cocktail.strDrink}</h3>
      </Link>
    </div>
  );
};

export default Cards;
