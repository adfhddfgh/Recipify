// src/app/cuisine/[name]/page.tsx

import React from "react";

// ✅ Adjusted paths to match tsconfig.json alias and file locations
// import { SearchRecipes } from "@/services/rapid_api";
// import RecipeList from "@/components/recipe-list";
import { RecipesItems } from "../../../types/meal";
import { SearchRecipes } from "../../services/rapid_api";
import RecipeList from "../../../components/recipe-list";

interface PageProps {
  params: { name: string };
}

export default async function CuisinePage({ params }: PageProps) {
  const cuisineName = params.name.toLowerCase().replace(/-/g, " ");

  let recipes: RecipesItems[] = [];

  try {
    const data = await SearchRecipes("", { cuisine: cuisineName });
    recipes = Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching cuisine recipes:", error);
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 capitalize">
          {cuisineName} Recipes
        </h1>
        <p className="text-red-500">
          Error loading recipes. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {cuisineName} Recipes
      </h1>

      {recipes.length > 0 ? (
        <RecipeList recipes={recipes} />
      ) : (
        <p>No {cuisineName} recipes found. Try adjusting your filters.</p>
      )}
    </div>
  );
}
