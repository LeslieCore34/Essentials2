import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/ClothesCard.css";

export default function ClothesCard() {
  const [data, getData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => getData(res.data));
  }, []);

  return (
    <div className="clothes-container">
      {data.map((ele) => (
        <div key={ele.id}>
          <h1>{ele.title}</h1>
          <img className="clothes-image" src={ele.image} alt={ele.title} />
          <p>{ele.description}</p>
        </div>
      ))}
    </div>
  );
}
