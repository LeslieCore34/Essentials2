import { useTheContext } from "../context/context";

export default function CartCard() {
  const { quantities } = useTheContext();
  return (
    <div>
      <h2>My cart</h2>
      <ul>
        <li>{quantities}</li>
        <h2>test</h2>
      </ul>
    </div>
  );
}
