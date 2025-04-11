"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { SearchRecipesComplex } from "../services/rapid_api";

export default function ComplexRecipeSearching() {
  const [res, setRecipe] = useState([]);

  useEffect(() => {
    SearchRecipesComplex().then((data) => {
      if (data) {
        setRecipe(data);
        console.log(data);
      }
    });
  }, []);

  return (
    <div>
      <h1>Welcome to the search complex recipe</h1>

      {res.length === 0 ? (
        <p>Loading recipes...</p>
      ) : (
        res.map((response: any) => (
          <div key={response.id}>
            <h1>Name: {response.title}</h1>
            <Image
              src={response.image}
              alt={response.title}
              width={200}
              height={200}
            />
            <div>
              Calories: {response.calories} Fat: {response.fat} Protein:{" "}
              {response.protein} Carbohydrate: {response.carbs}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
