export default function Cart() {
  return (
    <div>
      <h1>My cart</h1>
      <div>Quantity = </div>
      <div>Article= </div>
      <div>Price =</div>
      <div>Total =</div>
    </div>
  );
}

// Créez un composant Panier : Tout d'abord, créez un composant "Panier" où vous afficherez les éléments ajoutés. Vous pouvez également y afficher le nom de l'article et la quantité correspondante.

// État du Panier : Dans le composant Panier, créez un état pour stocker les éléments ajoutés au panier. Vous pouvez utiliser un tableau d'objets pour cela. Chaque objet représente un article avec des propriétés telles que "nom" et "quantité".

// jsx
// Copy code
// import React, { useState } from "react";

// export default function Panier() {
//   const [items, setItems] = useState([]);

//   // Affichez les éléments du panier
//   return (
//     <div>
//       <h2>Panier</h2>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             {item.name} - Quantité: {item.quantity}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// Passer les données au composant Panier : Dans votre composant ClothesCard, lorsque vous ajoutez un article au panier, ajoutez cet article (nom et quantité) au tableau items du composant Panier en utilisant la fonction setItems. Vous devrez peut-être également passer des informations sur l'article à partir de ClothesCard vers Panier. Par exemple :
// jsx
// Copy code
// // Dans ClothesCard.js
// import Panier from "./Panier";

// export default function ClothesCard() {
//   // ...
//   const addItemToCart = (name, quantity) => {
//     // Ajoutez l'article au panier
//     setItems([...items, { name, quantity }]);
//   };

//   return (
//     <div>
//       {/* Affichez la liste d'articles et des boutons "ajouter" */}
//       <button onClick={() => addItemToCart(item.name, 1)}>Ajouter</button>

//       {/* Affichez le composant Panier pour afficher le contenu du panier */}
//       <Panier items={items} />
//     </div>
//   );
// }
// Afficher le Panier : Dans le composant Panier, vous pouvez utiliser items pour afficher la liste des articles ajoutés avec leurs noms et quantités.
// Cela permettra de passer les quantités ajoutées pour chaque article et leur nom du composant ClothesCard au composant "Panier" pour affichage. Vous pouvez également ajouter la logique pour supprimer des éléments du panier si nécessaire.
