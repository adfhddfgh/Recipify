// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   SearchRecipes,
//   getRecipeCard,
// } from "../services/rapid_api";
// import Image from "next/image";
// import { Search } from "@/components/search";
// import { RecipesItems } from "@/types/meal";
// import IngredientDashboard from "@/components/pantries";

// export default function RecipesPage() {
//   const [recipes, setRecipes] = useState<RecipesItems[]>([]);
//   const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [expandedRecipeId, setExpandedRecipeId] = useState<number | null>(null);
//   const [showDashboard, setShowDashboard] = useState(false);

//   // Fetch recipes based on search term or selected ingredients
//   useEffect(() => {
//     const fetchRecipes = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         let query = searchTerm;
//         if (selectedIngredients.length > 0 && !searchTerm) {
//           query = selectedIngredients.join(",");
//         }

//         const data = await SearchRecipes(query);

//         if (!Array.isArray(data)) {
//           throw new Error("Invalid response from API");
//         }

//         if (data.length === 0) {
//           if (query) {
//             throw new Error("No recipes found. Try a different search term.");
//           }
//           setRecipes([]);
//           return;
//         }

//         const recipesWithCards = await Promise.all(
//           data.slice(0, 10).map(async (recipe) => {
//             try {
//               const cardUrl = await getRecipeCard(recipe.id);
//               return { ...recipe, cardUrl };
//             } catch (err) {
//               console.error(`Failed to get card for recipe ${recipe.id}:`, err);
//               return recipe;
//             }
//           })
//         );

//         setRecipes(recipesWithCards);
//       } catch (err) {
//         setError(
//           err instanceof Error ? err.message : "Failed to fetch recipes"
//         );
//         setRecipes([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     const timer = setTimeout(fetchRecipes, 500);
//     return () => clearTimeout(timer);
//   }, [searchTerm, selectedIngredients]);

//   const toggleRecipeDetails = (id: number) => {
//     setExpandedRecipeId(expandedRecipeId === id ? null : id);
//   };

//   const handleIngredientClick = (ingredient: string) => {
//     setSelectedIngredients(prev => {
//       if (prev.includes(ingredient)) {
//         return prev.filter(i => i !== ingredient);
//       } else {
//         return [...prev, ingredient];
//       }
//     });
//     setSearchTerm("");
//   };

//   const toggleDashboard = () => {
//     setShowDashboard(!showDashboard);
//   };

//   return (
//     <div className="flex">
//       {/* Pantry Sidebar */}
//       <div className="w-64 p-4 bg-gray-50 border-r border-gray-200 h-screen sticky top-0 overflow-y-auto">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold">Pantry</h2>
//           <button
//             onClick={toggleDashboard}
//             className="p-2 rounded-md hover:bg-gray-200"
//           >
//             {showDashboard ? 'Hide Dashboard' : 'Show Dashboard'}
//           </button>
//         </div>

//         {selectedIngredients.length > 0 && (
//           <div className="mb-4">
//             <h3 className="font-semibold mb-2">Selected Ingredients:</h3>
//             <div className="flex flex-wrap gap-2">
//               {selectedIngredients.map((ingredient) => (
//                 <span
//                   key={ingredient}
//                   className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm flex items-center"
//                 >
//                   {ingredient}
//                   <button
//                     onClick={() => handleIngredientClick(ingredient)}
//                     className="ml-1 text-blue-600 hover:text-blue-800"
//                   >
//                     ×
//                   </button>
//                 </span>
//               ))}
//             </div>
//             <button
//               onClick={() => setSelectedIngredients([])}
//               className="mt-2 text-sm text-red-500 hover:text-red-700"
//             >
//               Clear all
//             </button>
//           </div>
//         )}

//         {showDashboard ? (
//           <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
//             <IngredientDashboard
//               onIngredientSelect={handleIngredientClick}
//               selectedIngredients={selectedIngredients}
//             />
//           </div>
//         ) : (
//           <div className="space-y-2">
//             <p className="text-gray-500">
//               {selectedIngredients.length === 0
//                 ? "No ingredients selected"
//                 : "Select more ingredients from dashboard"}
//             </p>
//           </div>
//         )}
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 container mx-auto px-4 py-8">
//         <Search
//           onSearch={(term) => {
//             setSearchTerm(term);
//             setSelectedIngredients([]);
//           }}
//         />

//         <h2 className="text-2xl font-bold mb-6">
//           {selectedIngredients.length > 0
//             ? `Recipes with ${selectedIngredients.join(", ")}`
//             : searchTerm
//             ? `Search results for "${searchTerm}"`
//             : "Discover Delicious Recipes"}
//         </h2>

//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//             {error}
//           </div>
//         )}

//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//           </div>
//         ) : recipes.length === 0 ? (
//           !searchTerm && selectedIngredients.length === 0 ? (
//             <p className="text-gray-500">Search for recipes or select ingredients</p>
//           ) : (
//             <p className="text-gray-500">
//               No recipes found. Try a different{" "}
//               {selectedIngredients.length > 0 ? "ingredients" : "search term"}.
//             </p>
//           )
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {recipes.map((recipe) => (
//               <div
//                 key={recipe.id}
//                 className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
//               >
//                 <div className="relative h-48">
//                   <Image
//                     src={recipe.cardUrl || recipe.image}
//                     alt={recipe.title}
//                     fill
//                     className="object-cover"
//                     onError={(e) => {
//                       const target = e.target as HTMLImageElement;
//                       target.onerror = null;
//                       target.src = recipe.image;
//                     }}
//                   />
//                 </div>

//                 <div className="p-4">
//                   <h3 className="font-bold text-lg mb-2">{recipe.title}</h3>

//                   <div className="flex flex-wrap gap-2 mb-3">
//                     {recipe.dishTypes?.slice(0, 3).map((type, i) => (
//                       <span
//                         key={i}
//                         className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
//                       >
//                         {type}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="flex justify-between text-sm text-gray-600 mb-3">
//                     <span>⏱️ {recipe.readyInMinutes} mins</span>
//                     <span>🍽️ {recipe.servings} servings</span>
//                     <span>❤️ {recipe.likes || 0} likes</span>
//                   </div>

//                   <button
//                     onClick={() => toggleRecipeDetails(recipe.id)}
//                     className="w-full py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition-colors"
//                   >
//                     {expandedRecipeId === recipe.id
//                       ? "Hide Details"
//                       : "View Details"}
//                   </button>

//                   {expandedRecipeId === recipe.id && (
//                     <div className="mt-4 pt-4 border-t border-gray-100">
//                       {recipe.summary && (
//                         <div className="mb-4">
//                           <h4 className="font-semibold mb-1">About</h4>
//                           <p
//                             className="text-sm text-gray-600"
//                             dangerouslySetInnerHTML={{ __html: recipe.summary }}
//                           />
//                         </div>
//                       )}

//                       {recipe.diets?.length && (
//                         <div className="mb-4">
//                           <h4 className="font-semibold mb-1">Diets</h4>
//                           <div className="flex flex-wrap gap-2">
//                             {recipe.diets.map((diet, i) => (
//                               <span
//                                 key={i}
//                                 className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
//                               >
//                                 {diet}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       )}

//                       {recipe.nutrition?.nutrients?.length && (
//                         <div className="mb-4">
//                           <h4 className="font-semibold mb-1">Nutrition</h4>
//                           <ul className="text-sm space-y-1">
//                             {recipe.nutrition.nutrients
//                               .filter((n) =>
//                                 [
//                                   "Calories",
//                                   "Protein",
//                                   "Carbohydrates",
//                                   "Fat",
//                                 ].includes(n.title)
//                               )
//                               .map((nutrient, i) => (
//                                 <li key={i} className="flex justify-between">
//                                   <span>{nutrient.title}</span>
//                                   <span>
//                                     {Math.round(nutrient.amount)}{" "}
//                                     {nutrient.unit}
//                                   </span>
//                                 </li>
//                               ))}
//                           </ul>
//                         </div>
//                       )}

//                       {recipe.sourceUrl && (
//                         <a
//                           href={recipe.sourceUrl}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-blue-500 text-sm hover:underline"
//                         >
//                           View original recipe
//                         </a>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import { SearchRecipes, getRecipeCard } from "../services/rapid_api";
import Image from "next/image";
import { Search } from "@/components/search";
import { RecipesItems } from "@/types/meal";
import IngredientDashboard from "@/components/pantries";

export default function RecipesPage() {
  const [recipes, setRecipes] = useState<RecipesItems[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [expandedRecipeId, setExpandedRecipeId] = useState<number | null>(null);
  const [showDashboard, setShowDashboard] = useState(true);

  // Fetch recipes based on search term or selected ingredients
  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      setError(null);

      try {
        let query = searchTerm;
        if (selectedIngredients.length > 0 && !searchTerm) {
          query = selectedIngredients.join(",");
        }

        if (!query) {
          setRecipes([]);
          return;
        }

        const data = await SearchRecipes(query);

        if (!Array.isArray(data)) {
          throw new Error("Invalid response from API");
        }

        if (data.length === 0) {
          throw new Error(
            "No recipes found. Try different ingredients or search term."
          );
        }

        const recipesWithCards = await Promise.all(
          data.slice(0, 12).map(async (recipe) => {
            try {
              const cardUrl = await getRecipeCard(recipe.id);
              return { ...recipe, cardUrl };
            } catch (err) {
              console.error(`Failed to get card for recipe ${recipe.id}:`, err);
              return recipe;
            }
          })
        );

        setRecipes(recipesWithCards);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch recipes"
        );
        setRecipes([]);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(fetchRecipes, 500);
    return () => clearTimeout(timer);
  }, [searchTerm, selectedIngredients]);

  const toggleRecipeDetails = (id: number) => {
    setExpandedRecipeId(expandedRecipeId === id ? null : id);
  };

  const handleIngredientSelect = (ingredient: string) => {
    setSelectedIngredients((prev) => {
      if (prev.includes(ingredient)) {
        return prev.filter((i) => i !== ingredient);
      } else {
        return [...prev, ingredient];
      }
    });
    setSearchTerm("");
  };

  const clearSelectedIngredients = () => {
    setSelectedIngredients([]);
  };

  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  return (
    <div className="flex">
      {/* Pantry Sidebar */}
      <div className="w-64 p-4 bg-gray-50 border-r border-gray-200 h-screen sticky top-0 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Pantry</h2>
          <button
            onClick={toggleDashboard}
            className="p-2 rounded-md hover:bg-gray-200"
            aria-label={
              showDashboard
                ? "Hide ingredient dashboard"
                : "Show ingredient dashboard"
            }
          >
            {showDashboard ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
        </div>

        {selectedIngredients.length > 0 && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Selected Ingredients</h3>
              <button
                onClick={clearSelectedIngredients}
                className="text-xs text-red-500 hover:text-red-700"
              >
                Clear all
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedIngredients.map((ingredient) => (
                <span
                  key={ingredient}
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm flex items-center"
                >
                  {ingredient}
                  <button
                    onClick={() => handleIngredientSelect(ingredient)}
                    className="ml-1 text-blue-600 hover:text-blue-800"
                    aria-label={`Remove ${ingredient}`}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}

        {showDashboard ? (
          <div className="overflow-y-auto max-h-[calc(100vh-180px)]">
            <IngredientDashboard
              onIngredientSelect={handleIngredientSelect}
              selectedIngredients={selectedIngredients}
            />
          </div>
        ) : (
          <div className="text-center py-4 text-gray-500">
            <p>Ingredient dashboard hidden</p>
            <button
              onClick={toggleDashboard}
              className="mt-2 text-sm text-blue-500 hover:text-blue-700"
            >
              Show ingredients
            </button>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 py-8">
        <Search
          value={searchTerm}
          onSearch={(term) => {
            setSearchTerm(term);
            setSelectedIngredients([]);
          }}
          placeholder="Search recipes..."
        />

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {selectedIngredients.length > 0
              ? `Recipes with ${selectedIngredients.join(", ")}`
              : searchTerm
              ? `Search results for "${searchTerm}"`
              : "Discover Delicious Recipes"}
          </h2>
          {selectedIngredients.length > 0 && (
            <button
              onClick={clearSelectedIngredients}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Clear ingredients
            </button>
          )}
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : recipes.length === 0 ? (
          !searchTerm && selectedIngredients.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 mb-4">
                Search for recipes or select ingredients
              </p>
              <button
                onClick={toggleDashboard}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Browse Ingredients
              </button>
            </div>
          ) : (
            <p className="text-gray-500">
              No recipes found. Try different{" "}
              {selectedIngredients.length > 0 ? "ingredients" : "search terms"}.
            </p>
          )
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={recipe.cardUrl || recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "/food-placeholder.png";
                    }}
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{recipe.title}</h3>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {recipe.dishTypes?.slice(0, 3).map((type, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                      >
                        {type}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between text-sm text-gray-600 mb-3">
                    <span>⏱️ {recipe.readyInMinutes} mins</span>
                    <span>🍽️ {recipe.servings} servings</span>
                    <span>❤️ {recipe.likes || 0} likes</span>
                  </div>

                  <button
                    onClick={() => toggleRecipeDetails(recipe.id)}
                    className="w-full py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition-colors"
                  >
                    {expandedRecipeId === recipe.id
                      ? "Hide Details"
                      : "View Details"}
                  </button>

                  {expandedRecipeId === recipe.id && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      {recipe.summary && (
                        <div className="mb-4">
                          <h4 className="font-semibold mb-1">About</h4>
                          <p
                            className="text-sm text-gray-600"
                            dangerouslySetInnerHTML={{ __html: recipe.summary }}
                          />
                        </div>
                      )}

                      {recipe.diets?.length && (
                        <div className="mb-4">
                          <h4 className="font-semibold mb-1">Diets</h4>
                          <div className="flex flex-wrap gap-2">
                            {recipe.diets.map((diet, i) => (
                              <span
                                key={i}
                                className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
                              >
                                {diet}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {recipe.nutrition?.nutrients?.length && (
                        <div className="mb-4">
                          <h4 className="font-semibold mb-1">Nutrition</h4>
                          <ul className="text-sm space-y-1">
                            {recipe.nutrition.nutrients
                              .filter((n) =>
                                [
                                  "Calories",
                                  "Protein",
                                  "Carbohydrates",
                                  "Fat",
                                ].includes(n.title)
                              )
                              .map((nutrient, i) => (
                                <li key={i} className="flex justify-between">
                                  <span>{nutrient.title}</span>
                                  <span>
                                    {Math.round(nutrient.amount)}{" "}
                                    {nutrient.unit}
                                  </span>
                                </li>
                              ))}
                          </ul>
                        </div>
                      )}

                      {recipe.sourceUrl && (
                        <a
                          href={recipe.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 text-sm hover:underline"
                        >
                          View original recipe
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
