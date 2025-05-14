// components/recipe-list.tsx
"use client";

import { RecipesItems } from "@/types/meal";
import Image from "next/image";

export default function RecipeList({ recipes }: { recipes: RecipesItems[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="relative h-48">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">{recipe.title}</h3>
            {recipe.readyInMinutes && (
              <p className="text-sm text-gray-600">
                ⏱️ {recipe.readyInMinutes} mins
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
