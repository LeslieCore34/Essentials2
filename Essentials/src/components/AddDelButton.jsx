import { useState } from "react";

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
      <button onClick={() => quantityPlus()}>Ajouter</button>
      <input
        type="text"
        value={quantities}
        name="quantity"
        id="quantity-added-button"
      />
      <button onClick={() => quantityMinus()}>Supprimer</button>
    </div>
  );
}

/* <div>
      {clothesList.map((clothes, index) => (
        <div key={index}>
          <button onClick={() => quantityPlus(index)}>Ajouter</button>
          <button onClick={() => quantityMinus(index)}>Supprimer</button>
        </div>
      ))}
    </div>
  );
// } */
// }

// import { useState } from "react";
// import { clothesList } from "../data/ClothesData";

// export default function ButtonQuantity() {
//   const [quantities, setQuantities] = useState();

//   const quantityPlus = () => {
//     const newQuantities = [...quantities];
//     newQuantities[index] += 1;
//     setQuantities(newQuantities);
//   };

//   const quantityMinus = () => {
//     const newQuantities = [...quantities];
//     newQuantities[index] -= 1;
//     if (newQuantities[index] < 0) {
//       newQuantities[index] = 0;
//     }
//     setQuantities(newQuantities);
//   }
