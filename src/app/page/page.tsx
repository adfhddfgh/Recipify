"use client";
import { useState, useEffect } from "react";
import { GetRandomRecipes } from "@/app/services/rapid_api";
import type { Recipe } from "@/types/meal";

export default function RandomRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await GetRandomRecipes();
        setRecipes(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) return <div>Loading recipes...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (recipes.length === 0) return <div>No recipes found</div>;

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <h2>{recipe.title}</h2>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover"
          />
          <p>Ready in: {recipe.readyInMinutes} minutes</p>
          <p>Servings: {recipe.servings}</p>
          <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">
            View Recipe
          </a>
        </div>
      ))}
    </div>
  );
}
