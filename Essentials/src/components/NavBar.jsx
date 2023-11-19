import { Link } from "react-router-dom";
import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <div className="navigation-bar-container">
      <Link to="/clothes" className="link">
        Clothes
      </Link>
      <Link to="/makeup" className="link">
        Make Up
      </Link>
      <Link to="/cart" className="link">
        Cart
      </Link>
    </div>
  );
}
