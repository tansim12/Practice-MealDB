import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/home/Home.jsx";
import CategoryButton from "./Components/Category/CategoryButton.jsx";
import CategorySingleDetails from "./Components/Category/CategorySingleDetails.jsx";
import Seafood from "./Components/Seafood/Seafood.jsx";
import SeafoodSingleDiv from "./Components/Seafood/SeafoodSingleDiv.jsx";
import Error404 from "./Components/Error404/Error404.jsx";
import HomeChickenBreast from "./Components/home/HomeChickenBreast.jsx";

// import CategorySingleItemDiv from "./Components/Category/CategorySingleItemDiv.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error404></Error404>,
    children: [
      // 1
      {
        path: "/",
        loader: async () => {
          const resp = await fetch(
            "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
          );
          const data = await resp.json();
          return data;
        },
        element: <HomeChickenBreast></HomeChickenBreast>,
      },

      // 2
      {
        path: "/category",
        loader: async () => {
          const resp = await fetch(
            "https://www.themealdb.com/api/json/v1/1/categories.php"
          );
          const data = await resp.json();
          return data;
        },
        element: <CategoryButton></CategoryButton>,
      },
      // 3
      {
        path: "/category/:categoryId",
        loader: async ({ params }) => {
          const resp = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryId}`
          );
          const data = await resp.json();
          return data;
        },
        element: <CategorySingleDetails></CategorySingleDetails>,
      },

      // 4
      {
        path: "/filterSeafood",
        loader: async () => {
          const resp = await fetch(
            "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
          );
          const data = await resp.json();
          return data;
        },
        element: <Seafood></Seafood>,
      },
      // 5
      {
        path: "/filterSeafood/:id",
        loader: async ({ params }) => {
          const resp = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
          );
          const data = await resp.json();
          return data;
        },
        element: <SeafoodSingleDiv></SeafoodSingleDiv>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
