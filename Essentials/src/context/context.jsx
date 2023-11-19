import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import propTypes from "prop-types";

const Context = createContext();

export function ContextProvider({ children }) {
  const [quantities, setQuantities] = useState(0);
  const [apiLip, setApiLip] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick`
      )
      .then(({ data }) => {
        setApiLip(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des produits:", error);
      });
  }, []);

  return (
    <Context.Provider value={{ quantities, setQuantities, apiLip, setApiLip }}>
      {children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export const useTheContext = () => useContext(Context);
