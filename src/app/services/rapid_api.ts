const API_HOST_NAME = "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com";

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

export async function SearchRecipes() {
  // const fetch = require("node-fetch");

  const url =
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=side%20salad&diet=vegetarian&intolerances=gluten&includeIngredients=cheese%2Cnuts&excludeIngredients=eggs&instructionsRequired=true&fillIngredients=false&addRecipeInformation=false&addRecipeInstructions=false&addRecipeNutrition=false&maxReadyTime=45&ignorePantry=true&sort=max-used-ingredients&offset=0&number=10";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
      "x-rapidapi-host": API_HOST_NAME,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Failed to fetch");
    const data = await response.json(); // Parse as JSON
    return data.results; // Spoonacular wraps recipes in `results`
  } catch (error) {
    console.error("API Error:", error);
    return []; // Return empty array on error
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
