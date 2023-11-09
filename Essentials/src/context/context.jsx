import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import propTypes from "prop-types";

const Context = createContext();

export function ContextProvider({ children }) {
  const [quantities, setQuantities] = useState(0);
  const [api, setApi] = useState([]);

  useEffect(() => {
    axios
      .get(`https://makeup-api.herokuapp.com/api/v1/products.json`)
      .then(({ data }) => {
        setApi(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des produits:", error);
      });
  }, []);

  return (
    <Context.Provider value={{ quantities, setQuantities, api, setApi }}>
      {children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export const useTheContext = () => useContext(Context);
