"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { GetWeeklyMealPlan } from "../services/rapid_api";
import type {
  WeeklyMealPlan,
  DailyMeals,
  MealItem,
  Nutrient,
} from "@/types/meal";

export default function WeeklyMealPlanPage() {
  const [mealPlan, setMealPlan] = useState<WeeklyMealPlan | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await GetWeeklyMealPlan();
        setMealPlan(data);
      } catch (error) {
        console.error("Failed to load meal plan:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const getMealImage = (item: MealItem) => {
    if (item.value.image) {
      return item.value.image.startsWith("http")
        ? item.value.image
        : `https://spoonacular.com/recipeImages/${item.value.image}`;
    }
    return "/placeholder-food.jpg";
  };

  const renderNutrient = (nutrient: Nutrient) => (
    <div key={nutrient.name} className="bg-gray-50 p-3 rounded">
      <p className="font-semibold">{nutrient.name}</p>
      <p>
        {nutrient.amount} {nutrient.unit}
      </p>
      <p className="text-sm text-gray-500">
        {nutrient.percentOfDailyNeeds}% of daily needs
      </p>
    </div>
  );

  const renderDayMeals = (day: DailyMeals) => (
    <div key={day.date} className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{day.day}'s Meal Plan</h2>

      {/* Nutrition Summary */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Daily Nutrition Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {day.nutritionSummary.nutrients.map(renderNutrient)}
        </div>
      </section>

      {/* Meal Times Sections */}
      <div className="space-y-6">
        {/* Breakfast */}
        {day.items.some((item) => item.slot === 1) && (
          <section>
            <h3 className="text-lg font-semibold mb-3">Breakfast</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {day.items
                .filter((item) => item.slot === 1)
                .map((item) => (
                  <MealItemCard key={item.id} item={item} />
                ))}
            </div>
            <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
              {day.nutritionSummaryBreakfast.nutrients.map(renderNutrient)}
            </div>
          </section>
        )}

        {/* Lunch */}
        {day.items.some((item) => item.slot === 2) && (
          <section>
            <h3 className="text-lg font-semibold mb-3">Lunch</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {day.items
                .filter((item) => item.slot === 2)
                .map((item) => (
                  <MealItemCard key={item.id} item={item} />
                ))}
            </div>
            <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
              {day.nutritionSummaryLunch.nutrients.map(renderNutrient)}
            </div>
          </section>
        )}

        {/* Dinner */}
        {day.items.some((item) => item.slot === 3) && (
          <section>
            <h3 className="text-lg font-semibold mb-3">Dinner</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {day.items
                .filter((item) => item.slot === 3)
                .map((item) => (
                  <MealItemCard key={item.id} item={item} />
                ))}
            </div>
            <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
              {day.nutritionSummaryDinner.nutrients.map(renderNutrient)}
            </div>
          </section>
        )}
      </div>
    </div>
  );

  if (loading) return <p className="text-center py-8">Loading meal plan...</p>;
  if (!mealPlan || mealPlan.days.length === 0)
    return <p className="text-center py-8">No meal plan found.</p>;

  return (
    <div className="min-h-screen font-sans px-4 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Weekly Meal Plan</h1>
      {mealPlan.days.map(renderDayMeals)}
    </div>
  );
}

function MealItemCard({ item }: { item: MealItem }) {
  const getMealImage = (item: MealItem) => {
    if (item.value.image) {
      return item.value.image.startsWith("http")
        ? item.value.image
        : `https://spoonacular.com/recipeImages/${item.value.image}`;
    }
    return "/placeholder-food.jpg";
  };

  return (
    <div className="border rounded-lg p-4 flex gap-4">
      <div className="flex-shrink-0">
        <Image
          src={getMealImage(item)}
          alt={item.value.title}
          width={100}
          height={100}
          className="rounded-md object-cover w-24 h-24"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div>
        <h3 className="font-medium">{item.value.title}</h3>
        <p className="text-sm text-gray-500 capitalize">
          {item.type.toLowerCase().replace("_", " ")}
        </p>
        {item.value.servings && (
          <p className="text-sm">Servings: {item.value.servings}</p>
        )}
        {item.value.ingredients && (
          <div className="mt-2">
            <p className="text-sm font-semibold">Ingredients:</p>
            <ul className="text-sm list-disc list-inside">
              {item.value.ingredients.map((ing) => (
                <li key={ing.name}>{ing.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
