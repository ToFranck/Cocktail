import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import reportWebVitals from './reportWebVitals';

import Home from './pages/home';
import Cocktails from './pages/cocktails';
import Ingredients from './pages/ingredients';
import Random from './pages/random';
import Apropos from './pages/apropos';
import Layout from './components/layout';
import Details from './pages/details'

//Roots
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Utilisation de Layout ici
    children: [
      { path: "/", element: <Home /> },
      { path: "/cocktails", element: <Cocktails /> },
      { path: "/ingredients", element: <Ingredients /> },
      { path: "/:id", element: <Details />},
      { path: "/random-cocktail", element: <Random /> },
      { path: "/apropos", element: <Apropos /> },

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
