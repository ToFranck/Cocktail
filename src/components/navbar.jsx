import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)


  return (
    <nav className="flex items-center justify-between px-8 py-4 ">
    {/* Home aligné à gauche */}
    <div>
      <Link to="/" className="text-2xl font-bold">
        Home
      </Link>
    </div>

    {/* Menu principal, caché sur les petits écrans */}
    <div className="hidden md:flex space-x-6 font-bold">
      <Link to="/cocktails" className="hover:text-red-400">
        Cocktails
      </Link>
      <Link to="/ingredients" className="hover:text-red-400">
        Ingredients
      </Link>
      <Link to="/random-cocktail" className="hover:text-red-400">
        Random Cocktail
      </Link>
      <Link to="/apropos" className="hover:text-red-400">
        À Propos
      </Link>
    </div>

    {/* Espace vide à droite visible uniquement en mode desktop */}
    <div className={`w-16 ${isOpen ? 'hidden' : 'md:block'}`}></div>

    {/* Menu hamburger pour les petits écrans */}
    <div className="md:hidden">
      <button onClick={toggleMenu} className="focus:outline-none">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>

    {/* Menu déroulant pour mobile, visible lorsque le menu est ouvert */}
    {isOpen && (
      <div className="absolute top-16 left-0 w-full h-full bg-white flex flex-col items-center space-y-4 font-bold py-4 md:hidden z-10">
        <Link to="/cocktails" className="hover:text-red-400" onClick={toggleMenu}>
          Cocktails
        </Link>
        <Link to="/ingredients" className="hover:text-red-400" onClick={toggleMenu}>
          Ingredients
        </Link>
        <Link to="/random-cocktail" className="hover:text-red-400" onClick={toggleMenu}>
          Random Cocktail
        </Link>
        <Link to="/about" className="hover:text-red-400" onClick={toggleMenu}>
          À Propos
        </Link>
      </div>
    )}
  </nav>
  )
}
