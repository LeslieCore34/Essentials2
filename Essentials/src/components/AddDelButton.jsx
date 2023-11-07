import { useState } from "react";
import { clothesList } from "../data/ClothesData";

export default function ButtonQuantity() {
  const [quantities, setQuantities] = useState(clothesList.map(() => 0));

  const quantityPlus = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const quantityMinus = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] -= 1;
    if (newQuantities[index] < 0) {
      newQuantities[index] = 0;
    }
    setQuantities(newQuantities);
  };

  return (
    <div>
      {clothesList.map((clothes, index) => (
        <div key={index}>
          <button onClick={() => quantityPlus(index)}>Ajouter</button>
          <input type="text" value={quantities[index]} />
          <button onClick={() => quantityMinus(index)}>Supprimer</button>
        </div>
      ))}
    </div>
  );
}
