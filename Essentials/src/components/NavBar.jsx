import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <h1>This is the NavBar</h1>
      <p>
        It should contain a menu with dropping list : accueil, vêtements,
        accessoires, mon panier, mon compte.
      </p>
      <Link to="/Home">Home page</Link>
    </div>
  );
}
