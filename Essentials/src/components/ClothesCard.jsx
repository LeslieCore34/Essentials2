import "./ClothesCard.css";

export default function ClothesCard() {
  const clothesList = [
    {
      name: "White Sweater",
      image: "./src/assets/white-sweater.jpg",
      quantity: "2",
    },
    {
      name: "blue jeans",
      image: "./src/assets/blue-jeans.jpg",
      quantity: "3",
    },
  ];

  return (
    <div>
      {clothesList.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>

          <div className="image-container">
            <img src={item.image} alt={item.name} className="clothes-images" />
          </div>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
}
