import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <h1>This is the NavBar</h1>
      <p>
        It should contain a menu with dropping list : accueil, vêtements,
        accessoires, mon panier, mon compte.
      </p>
      <Link to="/Home" className="link">
        Home page
      </Link>
      <Link to="/clothes" className="link">
        Clothes
      </Link>
      <Link to="/cart" className="link">
        Cart
      </Link>
    </div>
  );
}
