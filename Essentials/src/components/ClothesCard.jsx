import { useState } from "react";
import "./ClothesCard.css";

const clothesList = [
  {
    name: "White Sweater",
    image: "./src/assets/white-sweater.jpg",
    quantity: 2,
    price: 20,
  },
  {
    name: "Blue Jeans",
    image: "./src/assets/blue-jeans.jpg",
    quantity: 3,
    price: 20,
  },
];

export default function ClothesCard() {
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
      {clothesList.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          <div className="image-container">
            <img src={item.image} alt={item.name} className="clothes-images" />
          </div>
          <p>Quantity in stock: {item.quantity}</p>
          <p>price : {item.price} euros</p>
          <button onClick={() => quantityPlus(index)}>ajouter</button>
          <button onClick={() => quantityMinus(index)}>supprimer</button>
          <div>{quantities[index]}</div>
        </div>
      ))}
    </div>
  );
}
