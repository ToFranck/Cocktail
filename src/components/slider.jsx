import React from "react";

const Slider = () => {
  // Liste des images à afficher
  const images = [
    "https://www.thecocktaildb.com/images/ingredients/vodka.png",
    "https://www.thecocktaildb.com/images/ingredients/gin.png",
    "https://www.thecocktaildb.com/images/ingredients/rum.png",
    "https://www.thecocktaildb.com/images/ingredients/tequila.png",
    "https://www.thecocktaildb.com/images/ingredients/whiskey.png",
    "https://www.thecocktaildb.com/images/ingredients/Lime%20vodka.png",
    "https://www.thecocktaildb.com/images/ingredients/Madeira.png",
    "https://www.thecocktaildb.com/images/ingredients/Malibu%20Rum.png",
    "https://www.thecocktaildb.com/images/ingredients/Mandarine%20napoleon.png",
    "https://www.thecocktaildb.com/images/ingredients/Maraschino%20Liqueur.png",
    "https://www.thecocktaildb.com/images/ingredients/Melon%20Liqueur.png",
    "https://www.thecocktaildb.com/images/ingredients/Melon%20Vodka.png",
    "https://www.thecocktaildb.com/images/ingredients/Mezcal.png",
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex animate-slider gap-8"
        style={{
          width: `${images.length * 120}%`, // Largeur totale pour que chaque image occupe une place
        }}
      >
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 "
            style={{ width: `${15 / images.length}%` }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-36 h-36 object-cover 
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
