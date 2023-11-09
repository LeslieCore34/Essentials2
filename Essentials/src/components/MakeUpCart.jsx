import { useTheContext } from "../context/context";

export default function MakeUpCart() {
  const { api } = useTheContext();
  console.log(api);

  return (
    <div>
      <h1>Make up Name</h1>
      <p>Make up Price</p>
      <ul>
        {api.slice(0, 5).map((product) => (
          <li key={product.key}>{product.name}</li>
        ))}
        {api.slice(0, 5).map((image) => (
          <li key={image.key}>{image.api_featured_image}</li>
        ))}
      </ul>
    </div>
  );
}
