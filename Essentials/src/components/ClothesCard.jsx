import "./ClothesCard.css";
import { clothesList } from "../data/ClothesData";

export default function ClothesCard() {
  return (
    <div>
      <div className="clothes-card-container">
        {clothesList.map((item) => (
          <div key={item.key}>
            <h2>{item.name}</h2>
            <div className="image-clothes-card">
              <img
                src={item.image}
                alt="image of clothe"
                className="clothes-image"
              />
            </div>
            <p>Quantité en stock :{item.quantity}</p>
            <p>Prix: {item.price} euros</p>
          </div>
        ))}
      </div>
    </div>
  );
}
