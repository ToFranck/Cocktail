import React from "react";
// import Random from "../../components/random/random";
import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="container-home">
        <div className="left-home">
          <h1>Cocktails Idea</h1>

          <p>Grab a drink, browse our collection and be inspired by the vibrant and creative world of cocktails. Cheers!</p>

          <div className="links-home">  
            
            <Link to="/cocktails" className="lnk lnk1" >Search</Link>
            <Link to="/ingredients" className="lnk lnk2">Ingredients</Link>
          
          </div>
        </div>
        <img
          src="/cocktail.png"
          alt=""
          className=""
        />
      </div>
      {/* <Random /> */}
    </>
  );
}
