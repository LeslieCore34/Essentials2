import { useEffect, useState } from "react";
import { useTheContext } from "../context/context";
import "../styles/LipStick.scss";
import axios from "axios";

export default function LipStick() {
  const { apiLip } = useTheContext();

  // Trier pour seulement lipstick > refaire le fecth useContext et en faire un pour chaque type de produit +
  // afficher le component lipstick avec 3 articles seulement
  // créer un boutton "see all lipsticks" qui affiche toute la liste des lipsticks avec des filtres par marques(ou autres)

  return (
    <div className="container-lip">
      {apiLip.slice(1, 4).map((product) => (
        <div className="container2-lip" key={product.id}>
          <h1 className="title-lip">{product.name}</h1>
          <p className="description-lip">{product.description}</p>
          <img
            className="image-lip"
            src={product.api_featured_image}
            alt="product image"
            style={{ maxWidth: "40%", maxHeight: "40%" }}
            onError={(e) => {
              e.target.src = "../assets/rouge-levre.jpg";
            }}
          />
          <div>
            {" "}
            Available Colors
            {product.product_colors.slice(1, 5).map((color, index) => (
              <p key={index}>{color.colour_name}</p>
            ))}
          </div>
          <p>Shop now at {product.product_link}</p>
        </div>
      ))}
    </div>
  );
}
