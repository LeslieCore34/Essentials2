import { useState } from "react";
import UserCart from "../context/context";

export default function ButtonQuantity() {
  const [quantities, setQuantities] = useState(0);

  const quantityPlus = () => {
    setQuantities(quantities + 1);
  };

  const quantityMinus = () => {
    if (quantities > 0) {
      setQuantities(quantities - 1);
    }
  };

  return (
    <div>
      <button onClick={quantityPlus}>Ajouter</button>
      <UserCart.Provider value={{ quantities: quantities }}>
        <input
          type="text"
          value={quantities}
          name="quantity"
          id="quantity-added-button"
        />
      </UserCart.Provider>
      <button onClick={quantityMinus}>Supprimer</button>
    </div>
  );
}
