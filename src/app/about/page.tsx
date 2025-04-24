// "use client";
// import React from "react";
// import { useState, useEffect } from "react";
// import { SearchRecipes } from "../services/rapid_api";
// import Image from "next/image";

// export default function AboutPage() {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     SearchRecipes().then((data) => {
//       if (data) {
//         setRecipes(data); // store fetched data in state
//         console.log(data); // log the data to the console
//       }
//     });
//   }, []);

//   return (
//     <div>
//       <h1>About Us</h1>
//       <p>We are a recipe app that helps you find delicious recipes.</p>
//       <h2>Discover Delicious Recipes</h2>
//       {recipes.length === 0 ? (
//         <p>Loading recipes...</p>
//       ) : (
//         recipes.map((recipe: any) => (
//           <div key={recipe.id} className="recipe-card">
//             <h2>{recipe.title}</h2>
//             <Image
//               src={recipe.image}
//               alt={recipe.title}
//               width={200}
//               height={200}
//             />
//             <p>Used Ingredients: {recipe.usedIngredientCount}</p>
//             <p>Missing Ingredients: {recipe.missedIngredientCount}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import { SearchRecipes } from "../services/rapid_api";
import Image from "next/image";
import { Search } from "@/components/search";

export default function AboutPage() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("side salad"); // default search

  useEffect(() => {
    SearchRecipes(searchTerm).then((data) => {
      if (data) {
        setRecipes(data);
        console.log(data);
      }
    });
  }, [searchTerm]); // <-- re-fetch when searchTerm changes

  return (
    <div>
      <h1>About Us</h1>
      <p>We are a recipe app that helps you find delicious recipes.</p>

      {/* Include the Search Box */}
      <Search onSearch={(term) => setSearchTerm(term)} />

      <h2>Discover Delicious Recipes</h2>
      {recipes.length === 0 ? (
        <p>Loading recipes...</p>
      ) : (
        recipes.map((recipe: any) => (
          <div key={recipe.id} className="recipe-card">
            <h2>{recipe.title}</h2>
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={200}
              height={200}
            />
            <p>Used Ingredients: {recipe.usedIngredientCount}</p>
            <p>Missing Ingredients: {recipe.missedIngredientCount}</p>
          </div>
        ))
      )}
    </div>
  );
}
