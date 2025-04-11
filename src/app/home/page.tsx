"use client";
import React from "react";
import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import { GetRecipeBulks } from "@/app/services/rapid_api";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    GetRecipeBulks().then((data) => {
      if (data) {
        setRecipes(data); // store fetched data in state
      }
    });
  }, []);

  return (
    <div>
      <h1>Welcome to Recipify </h1>

      <h2>Discover Delicious Recipes</h2>
      {recipes.map((recipe: any) => (
        <div key={recipe.id} className="recipe-card">
          <h2>{recipe.title}</h2>
          <Image
            src={recipe.image}
            alt={recipe.title}
            width={200}
            height={200}
          />
          {/* <img src={recipe.image} alt={recipe.title} width={200} /> */}
          <p>Ready in: {recipe.readyInMinutes} minutes</p>
          <p>Servings: {recipe.servings}</p>
          <a href={recipe.sourceUrl} target="_blank">
            View Full Recipe
          </a>
        </div>
      ))}
    </div>
  );
}
