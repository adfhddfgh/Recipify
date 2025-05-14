export interface Meal {
  id: number;
  title: string;
  readyInMinutes?: number;
  servings?: number;
}

export interface Nutrient {
  name: string;
  amount: number;
  unit: string;
  percentOfDailyNeeds: number;
}

export interface NutritionSummary {
  nutrients: Nutrient[];
}

export interface MealItem {
  id: number;
  slot: number;
  position: number;
  type: "RECIPE" | "CUSTOM_FOOD" | "INGREDIENTS" | "MENU_ITEM";
  value: {
    id?: number;
    title: string;
    servings?: number;
    image?: string;
    imageType?: string;
    ingredients?: Array<{
      name: string;
      unit: string;
      amount: string;
      image: string;
    }>;
  };
}

export interface DailyMeals {
  nutritionSummary: NutritionSummary;
  nutritionSummaryBreakfast: NutritionSummary;
  nutritionSummaryLunch: NutritionSummary;
  nutritionSummaryDinner: NutritionSummary;
  date: number;
  day: string;
  items: MealItem[];
}

// export interface WeeklyMealPlan {
//   days: DailyMeals[];
// }
// In your types/meal.ts file
export interface WeeklyMealPlan {
  days: {
    nutritionSummary: {
      nutrients: Nutrient[];
    };
    nutritionSummaryBreakfast: {
      nutrients: Nutrient[];
    };
    nutritionSummaryLunch: {
      nutrients: Nutrient[];
    };
    nutritionSummaryDinner: {
      nutrients: Nutrient[];
    };
    date: number;
    day: string;
    items: MealItem[];
  }[];
}

// types/recipe.ts
export interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
  servings: number;
  readyInMinutes: number;
  sourceUrl: string;
  spoonacularSourceUrl: string;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  preparationMinutes: number;
  cookingMinutes: number;
  aggregateLikes: number;
  creditText: string;
  sourceName: string;
  extendedIngredients: {
    id: number;
    aisle: string;
    image: string;
    name: string;
    amount: number;
    unit: string;
    unitShort: string;
    unitLong: string;
    originalString: string;
    metaInformation: string[];
  }[];
  instructions: string;
}

export interface RecipesItems {
  id: number;
  title: string;
  image: string;
  imageType?: string;
  usedIngredientCount?: number;
  missedIngredientCount?: number;
  readyInMinutes?: number;
  servings?: number;
  likes?: number;
  dishTypes?: string[];
  diets?: string[];
  summary?: string;
  spoonacularScore?: number;
  sourceUrl?: string;
  sourceName?: string;
  analyzedInstructions?: any[]; // Optional: replace `any` with more specific type if needed
  nutrition?: {
    nutrients?: {
      title: string;
      amount: number;
      unit: string;
    }[];
  };
  cardUrl?: string; // custom field you'll add after fetching from /{id}/card
}
