import { useTheContext } from "../context/context";

export default function WishList() {
  const { quantities } = useTheContext();

  return (
    <div>
      <h2>My cart</h2>
      <ul>
        <li>{quantities}</li>
        <h3>test</h3>
      </ul>
    </div>
  );
}
