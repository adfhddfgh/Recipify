"use client";
import React, { useState, useEffect } from "react";
import { SearchRecipes, getRecipeCard } from "../services/rapid_api";
import Image from "next/image";
import { Search } from "@/components/search";
import { RecipesItems } from "@/types/meal";
import { GetRandomRecipes } from "../services/rapid_api";

export default function RecipesPage() {
  const [recipes, setRecipes] = useState<RecipesItems[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [expandedRecipeId, setExpandedRecipeId] = useState<number | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      setError(null);

      try {
        // Pass empty string to get random recipes initially
        const data = await SearchRecipes(searchTerm);

        if (!Array.isArray(data)) {
          throw new Error("Invalid response from API");
        }

        if (data.length === 0) {
          // Don't throw error for empty results with empty search term
          if (searchTerm) {
            throw new Error("No recipes found. Try a different search term.");
          }
          setRecipes([]);
          return;
        }

        // Fetch cards for first 10 recipes only
        const recipesWithCards = await Promise.all(
          data.slice(0, 10).map(async (recipe) => {
            try {
              const cardUrl = await getRecipeCard(recipe.id);
              return { ...recipe, cardUrl };
            } catch (err) {
              console.error(`Failed to get card for recipe ${recipe.id}:`, err);
              return recipe; // Return recipe without card if fetch fails
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

    const timer = setTimeout(fetchRecipes, 500); // Debounce
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const toggleRecipeDetails = (id: number) => {
    setExpandedRecipeId(expandedRecipeId === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Search onSearch={(term) => setSearchTerm(term)} />

      <h2 className="text-2xl font-bold mb-6">Discover Delicious Recipes</h2>

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
        !searchTerm ? (
          <p className="text-gray-500">Loading delicious recipes...</p>
        ) : (
          <p className="text-gray-500">
            No recipes found. Try a different search term.
          </p>
        )
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Recipe Image */}
              <div className="relative h-48">
                <Image
                  src={recipe.cardUrl || recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = recipe.image;
                  }}
                />
              </div>

              {/* Basic Info */}
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

                {/* View Details Button */}
                <button
                  onClick={() => toggleRecipeDetails(recipe.id)}
                  className="w-full py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition-colors"
                >
                  {expandedRecipeId === recipe.id
                    ? "Hide Details"
                    : "View Details"}
                </button>

                {/* Expanded Details */}
                {expandedRecipeId === recipe.id && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    {/* Summary */}
                    {recipe.summary && (
                      <div className="mb-4">
                        <h4 className="font-semibold mb-1">About</h4>
                        <p
                          className="text-sm text-gray-600"
                          dangerouslySetInnerHTML={{ __html: recipe.summary }}
                        />
                      </div>
                    )}

                    {/* Diets */}
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

                    {/* Nutrition */}
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
                                  {Math.round(nutrient.amount)} {nutrient.unit}
                                </span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}

                    {/* Source Link */}
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
  );
}
