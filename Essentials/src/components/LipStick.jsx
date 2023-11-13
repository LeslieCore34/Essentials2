import { useTheContext } from "../context/context";
import "./LipStick.scss";

export default function LipStick() {
  const { apilip } = useTheContext();

  return (
    <div className="container-lip">
      {apilip.slice(11, 16).map((product) => (
        <div className="container2-lip" key={product.key}>
          <h1 className="title-lip">{product.name}</h1>
          <p className="description-lip">{product.description}</p>
          <img
            className="image-lip"
            src={product.image_link}
            alt="product image"
            style={{ maxWidth: "40%", maxHeight: "40%" }}
            onError={(e) => {
              e.target.src = "../assets/rouge-levre.jpg";
            }}
          />
        </div>
      ))}
    </div>
  );
}
