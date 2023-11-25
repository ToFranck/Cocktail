import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useRef, useEffect } from "react";
import './roots.css'

export default function Roots() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  // Fonction pour fermer le menu en mode responsive
  const closeMenu = () => {
    if (navRef.current.classList.contains("responsive_nav")) {
      showNavbar();
    }
  };

  // Utilisation de useEffect pour ajouter des gestionnaires d'événements
  useEffect(() => {
    const navElements = document.querySelectorAll(
      // ".nav-left .links, .nav-right .links"
      ".nav-left, .nav-right .links"
    );

    navElements.forEach((element) => {
      element.addEventListener("click", closeMenu);
    });

    return () => {
      // Nettoyer les gestionnaires d'événements lorsque le composant est démonté
      navElements.forEach((element) => {
        element.removeEventListener("click", closeMenu);
      });
    };
  }, []);
  return (
   <>
   <header>
   <nav ref={navRef}>

    <div className="nav-left">
      <h3><Link to="/" className='links'>Cocktail idea</Link></h3>
    </div>
    <div className="nav-right">
        {/* <Link to="/" className='links'>Home</Link> */}
        <Link to="/cocktails" className='links'>Cocktails</Link>
        <Link to="/alcoholfree" className='links'>Alcohol Free</Link>
        <Link to="/ingredients" className='links'>Ingredients</Link>
      </div>

      <button className="nav-btn nav-close-btn close" onClick={showNavbar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
    </nav>
    <button className="nav-btn" onClick={showNavbar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
    </header>
      <Outlet />

     </>
  )
}
