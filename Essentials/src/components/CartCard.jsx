import { useContext } from "react";
import UserCart from "../context/context";

export default function CartCard() {
  const cartUpdated = useContext(UserCart);
  return (
    <div>
      <h2>My cart</h2>
      <ul>
        <li>{cartUpdated}</li>
        <h2>test</h2>
      </ul>
    </div>
  );
}
