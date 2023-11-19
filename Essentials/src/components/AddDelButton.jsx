import { useTheContext } from "../context/context";

export default function ButtonQuantity() {
  const { quantities, setQuantities } = useTheContext();

  const quantityPlus = () => {
    if (quantities >= 0) {
      setQuantities(quantities + 1);
    }
  };

  const quantityMinus = () => {
    if (quantities >= 0) {
      setQuantities(quantities - 1);
    }
  };

  return (
    <div>
      <button onClick={quantityPlus}>Ajouter</button>
      <button onClick={quantityMinus}>Supprimer</button>

      <input
        type="text"
        value={quantities}
        name="quantity"
        id="quantity-added-button"
        onChange={(event) => setQuantities(event.target.value)}
      />
    </div>
  );
}
