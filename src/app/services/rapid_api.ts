import { Meal, WeeklyMealPlan, DailyMeals, Recipe } from "@/types/meal";

const API_HOST_NAME = "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com";
const USERNAME = "toheeb-orelope";

export async function GetRecipeBulks() {
  const url =
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids=456%2C987%2C321";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
      "x-rapidapi-host": API_HOST_NAME,
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json(); // Parse as JSON
    return result; // Return data instead of logging
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return null;
  }
}

// export async function SearchRecipes() {
//   // const fetch = require("node-fetch");

//   // const url =
//   //   "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=side%20salad&diet=vegetarian&intolerances=gluten&includeIngredients=cheese%2Cnuts&excludeIngredients=eggs&instructionsRequired=true&fillIngredients=false&addRecipeInformation=false&addRecipeInstructions=false&addRecipeNutrition=false&maxReadyTime=45&ignorePantry=true&sort=max-used-ingredients&offset=0&number=2";
//   // // const url =
//   // "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=side%20salad&cuisine=%20african%2C%20chinese%2C%20japanese%2C%20korean%2C%20vietnamese%2C%20thai%2C%20indian%2C%20british%2C%20irish%2C%20french%2C%20italian%2C%20mexican%2C%20spanish%2C%20middle%20eastern%2C%20jewish%2C%20american%2C%20cajun%2C%20southern%2C%20greek%2C%20german%2C%20nordic%2C%20eastern%20european%2C%20caribbean%2C%20latin%20american&diet=vegetarian%2C%20pescetarian%2C%20%20lacto%20vegetarian%2C%20ovo%20vegetarian%2C%20vegan%2C%20paleo%2C%20primal%2C%20%20vegetarian&intolerances=dairy%2C%20egg%2C%20gluten%2C%20peanut%2C%20sesame%2C%20seafood%2C%20shellfish%2C%20soy%2C%20sulfite%2C%20tree%20nut%2C%20wheat&includeIngredients=cheese%2Cnuts&excludeIngredients=eggs&type=main%20course%2C%20side%20dish%2C%20dessert%2C%20appetizer%2C%20salad%2C%20bread%2C%20breakfast%2C%20soup%2C%20beverage%2C%20sauce%2C%20drink&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeInstructions=true&addRecipeNutrition=true&maxReadyTime=45&ignorePantry=false&sort=max-used-ingredients&sortDirection=asc&offset=0&number=100";
//   const url =
//     "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=side%20salad&cuisine=african,italian,mexican,french&diet=vegetarian&intolerances=gluten,dairy&includeIngredients=cheese,nuts&excludeIngredients=eggs&type=main%20course,side%20dish&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&maxReadyTime=45&ignorePantry=false&sort=max-used-ingredients&sortDirection=asc&offset=0&number=100";

//   const options = {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
//       "x-rapidapi-host": API_HOST_NAME,
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     if (!response.ok) throw new Error("Failed to fetch");
//     const data = await response.json(); // Parse as JSON
//     return data.results; // Spoonacular wraps recipes in `results`
//   } catch (error) {
//     console.error("API Error:", error);
//     return []; // Return empty array on error
//   }
// }

// services/rapid_api.ts
export async function SearchRecipes(searchTerm: string = "side salad") {
  const query = encodeURIComponent(searchTerm);

  const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${query}&cuisine=african,chinese,japanese,korean,vietnamese,thai,indian,british,irish,french,italian,mexican,spanish,jewish,american,cajun,southern,greek,german,nordic,eastern%20european,caribbean&diet=vegetarian&intolerances=gluten&includeIngredients=cheese,nuts&excludeIngredients=eggs&type=main%20course,side%20dish,dessert,appetizer,salad,bread,breakfast,soup,beverage,sauce,drink&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeInstructions=true&addRecipeNutrition=true&maxReadyTime=45&ignorePantry=false&sort=max-used-ingredients&sortDirection=asc&offset=0&number=100`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok)
      throw new Error(`Failed to fetch: ${response.statusText}`);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}

export async function SearchRecipesComplex() {
  const url =
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex?limitLicense=false&offset=0&number=10&minIron=0&minCalcium=0&maxVitaminB2=1000&maxMagnesium=1000&minPotassium=0&maxVitaminB6=1000&intolerances=peanut%2C%20shellfish&maxVitaminB5=1000&minFolicAcid=0&minVitaminA=0&maxSodium=1000&maxSugar=1000&maxVitaminA=5000&maxFluoride=1000&minFluoride=0&minVitaminB1=0&minCholine=0&ranking=2&minFat=5&maxVitaminB1=1000&minVitaminB12=0&maxSelenium=1000&minZinc=0&minFolate=0&maxManganese=1000&maxVitaminB12=1000&maxPotassium=1000&maxIron=1000&minSelenium=0&minVitaminK=0&maxFiber=1000&minSodium=0&maxCopper=1000&minCalories=150&maxCholine=1000&minCholesterol=0&maxVitaminE=1000&minProtein=5&minVitaminB3=0&minVitaminB6=0&maxIodine=1000&excludeIngredients=coconut%2C%20mango&maxProtein=100&minMagnesium=0&minCarbs=5&cuisine=american&maxCaffeine=1000&maxSaturatedFat=50&maxVitaminK=1000&minAlcohol=0&minIodine=0&query=burger&minSaturatedFat=0&includeIngredients=onions%2C%20lettuce%2C%20tomato&minVitaminE=0&maxCalcium=1000&minFiber=0&minVitaminC=0&maxZinc=1000&maxCalories=1500&maxAlcohol=1000&minPhosphorus=0&minVitaminD=0&minVitaminB2=0&minSugar=0&maxFolate=1000&type=main%20course&maxCholesterol=1000&maxVitaminB3=1000&minCaffeine=0&minVitaminB5=0&maxFolicAcid=1000&maxCarbs=100&maxVitaminD=1000&equipment=pan&maxFat=100&minCopper=0&maxVitaminC=1000&maxPhosphorus=1000&minManganese=0";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
      "x-rapidapi-host": API_HOST_NAME,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Unable to fetch the data from API");
    // This is an array from API ends
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("API error", error);
    return [];
  }
}

export async function SearchForAllFood() {
  const url =
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/search?query=apple&offset=0&number=10";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
      "x-rapidapi-host": API_HOST_NAME,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Unable to fetch the data from API");
    // This is an array from API ends
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("API error", error);
    return [];
  }
}

export async function SearchFoodVideo() {
  const url =
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/videos/search?query=chicken%20soup&minLength=0&maxLength=999&number=10&includeingredients=chicken&excludeingredients=mustard&offset=0";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
      "x-rapidapi-host": API_HOST_NAME,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Unable to fetch the data from API");
    // This is an array from API ends
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("API error", error);
    return [];
  }
}

export async function GetARandomFoodJoke() {
  const url =
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/jokes/random";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
      "x-rapidapi-host": API_HOST_NAME,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Unable to fetch the data from API");
    // This is an array from API ends
    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("API error", error);
    return [];
  }
}

export async function TalkToChatbot() {
  const url =
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/converse?text=donut%20recipes&contextId=342938";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
      "x-rapidapi-host": API_HOST_NAME,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Unable to fetch the data from API");
    // This is an array from API ends
    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("API error", error);
    return [];
  }
}

export async function ConversationSuggestions() {
  const url =
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/converse/suggest?query=tell&number=10";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
      "x-rapidapi-host": API_HOST_NAME,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Unable to fetch the data from API");
    // This is an array from API ends
    const data = await response.json();
    return data.suggestions;
  } catch (error) {
    console.error("API error", error);
    return [];
  }
}

export async function GetRandomRecipes(): Promise<Recipe[]> {
  const url = new URL(
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert&number=1"
  );

  // Add query parameters
  url.searchParams.append("tags", "vegetarian,dessert");
  url.searchParams.append("number", "20");

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
      "x-rapidapi-host": API_HOST_NAME,
    },
  };

  try {
    console.log("Making API request to:", url.toString()); // Debug log

    const response = await fetch(url.toString(), options);

    // Check for 401 Unauthorized specifically
    if (response.status === 401) {
      throw new Error(
        "API key is invalid or missing. Please check your RapidAPI key."
      );
    }

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log("API response:", data); // Debug log

    if (!data.recipes || !Array.isArray(data.recipes)) {
      throw new Error("Invalid API response format");
    }

    return data.recipes;
  } catch (error) {
    console.error("Error in GetRandomRecipes:", error);

    // Provide more specific error messages
    if (error instanceof Error && error.message.includes("API key")) {
      throw new Error("Authentication failed. Please verify your API key.");
    } else if (
      error instanceof Error &&
      error.message.includes("failed with status")
    ) {
      throw new Error(`Server error: ${error.message}`);
    } else {
      throw new Error(
        "Failed to fetch random recipes. Please try again later."
      );
    }
  }
}

export async function GetWeeklyMealPlan(): Promise<WeeklyMealPlan> {
  const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/mealplanner/${USERNAME}/week/2025-04-21?hash=${process.env.NEXT_PUBLIC_RAPIDAPI_KEY}`;
  const options = {
    method: "GET",
    headers: {
      // "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
      "x-rapidapi-host": API_HOST_NAME,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Failed to fetch weekly plan");
    const data: WeeklyMealPlan = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return { days: [] };
  }
}
