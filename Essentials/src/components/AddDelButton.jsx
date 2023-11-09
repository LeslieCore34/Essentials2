import { useTheContext } from "../context/context";

export default function ButtonQuantity() {
  const { quantities, setQuantities } = useTheContext();

  const quantityPlus = () => {
    setQuantities(quantities + 1);
    console.log(quantities);
  };

  const quantityMinus = () => {
    if (quantities > 0) {
      setQuantities(quantities - 1);
    }
  };

  return (
    <div>
      <button onClick={quantityPlus}>Ajouter</button>

      <input
        type="text"
        value={quantities}
        name="quantity"
        id="quantity-added-button"
        onChange={(event) => setQuantities(event.target.value)}
      />

      <button onClick={quantityMinus}>Supprimer</button>
    </div>
  );
}
