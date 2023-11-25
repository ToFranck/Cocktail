import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import reportWebVitals from './reportWebVitals';

import Roots from './roots/roots.jsx';
import Home from './pages/home/home.jsx';
import Cocktails from './pages/cocktails/cocktails.jsx';
import Cocktail from './pages/cocktail/cocktail.jsx';
import Ingredients from './pages/ingredients/ingredients';
import Noalcohol from './pages/alcoholfree/alcoholfree.jsx';

//Roots
import { createBrowserRouter, RouterProvider } from "react-router-dom";





const router = createBrowserRouter([
  {
    element: <Roots />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cocktails", element: <Cocktails/> },
      { path: "/ingredients", element: <Ingredients/>},
      { path:"/alcoholfree", element: <Noalcohol/>},
      { path: "/cocktails/:cocktailName", element: <Cocktail/> },
      { path: "/ingredients/:cocktailName", element: <Cocktail/> },
      // { path: "about", element: <About /> },

      
      // {
      //   path: "cocktail/:id",
      //   element: <cocktail />,
      // },

    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
