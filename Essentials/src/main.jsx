import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Clothes from "./pages/Clothes";
import ShoppingCart from "./pages/ShoppingCart";
import Home from "./pages/Home";
import MakeUp from "./pages/MakeUp";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/clothes",
        element: <Clothes />,
      },
      {
        path: "/cart",
        element: <ShoppingCart />,
      },
      {
        path: "/makeup",
        element: <MakeUp />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
