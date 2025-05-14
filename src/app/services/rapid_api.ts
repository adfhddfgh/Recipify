import { Meal, WeeklyMealPlan, DailyMeals, Recipe } from "@/types/meal";

const API_HOST_NAME = "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com";
const USERNAME = "toheeb-orelope0";
const FIRSTNAME = "Toheeb";
const LASTNAME = "Husain";
const EMAIL = "toheeborelope@gmail.com";
const HASH = "a7840bafa8d07dfb9597ec917326e42d6b504891";

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

// export async function SearchRecipes(
//   searchTerm: string = "",
//   filters: { cuisine?: string } = {}
// ) {
//   const url = new URL(
//     "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch"
//   );

//   // Only add query parameter if search term is provided
//   if (searchTerm) {
//     url.searchParams.append("query", encodeURIComponent(searchTerm));
//   } else {
//     // When no search term, get random recipes
//     url.searchParams.append("sort", "random"); // Sort randomly
//     url.searchParams.append("addRecipeInformation", "true"); // Ensure we get full recipe info
//   }

//   // Add cuisine filter if provided, otherwise use your default cuisines
//   if (filters.cuisine) {
//     url.searchParams.append("cuisine", filters.cuisine);
//   } else {
//     url.searchParams.append(
//       "cuisine",
//       "african,chinese,japanese,korean,vietnamese,thai,indian,british,irish,french,italian,mexican,spanish,jewish,american,cajun,southern,greek,german,nordic,eastern european,caribbean"
//     );
//   }

//   // Add all your default parameters
//   url.searchParams.append("diet", "vegetarian");
//   url.searchParams.append("intolerances", "gluten");
//   url.searchParams.append("includeIngredients", "cheese,nuts");
//   url.searchParams.append("excludeIngredients", "eggs");
//   url.searchParams.append(
//     "type",
//     "main course,side dish,dessert,appetizer,salad,bread,breakfast,soup,beverage,sauce,drink"
//   );
//   url.searchParams.append("instructionsRequired", "true");
//   url.searchParams.append("fillIngredients", "true");
//   url.searchParams.append("addRecipeInformation", "true");
//   url.searchParams.append("addRecipeInstructions", "true");
//   url.searchParams.append("addRecipeNutrition", "true");
//   url.searchParams.append("maxReadyTime", "45");
//   url.searchParams.append("ignorePantry", "false");
//   url.searchParams.append("sortDirection", "asc");
//   url.searchParams.append("offset", "0");
//   url.searchParams.append("number", "12"); // Reduced from 100 to 12 for better performance

//   const options = {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
//       "x-rapidapi-host": API_HOST_NAME,
//     },
//   };

//   try {
//     const response = await fetch(url.toString(), options);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch: ${response.statusText}`);
//     }
//     const data = await response.json();
//     return data.results || [];
//   } catch (error) {
//     console.error("API Error:", error);
//     return [];
//   }
// }
export async function SearchRecipes(
  searchTerm: string = "",
  filters: { cuisine?: string } = {}
) {
  const url = new URL(
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch"
  );

  // Basic parameters
  url.searchParams.append("query", encodeURIComponent(searchTerm));
  url.searchParams.append("number", "5"); // Reduced number for chat context
  url.searchParams.append("addRecipeInformation", "true");

  // Simplified filters for chat context
  if (filters.cuisine) {
    url.searchParams.append("cuisine", filters.cuisine);
  }

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url.toString(), options);
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

// export async function TalkToChatbot(inputText: string, contextId: string = "") {
//   const url = new URL(
//     "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/converse"
//   );

//   // Add query parameters
//   url.searchParams.append("text", encodeURIComponent(inputText));
//   if (contextId) {
//     url.searchParams.append("contextId", contextId);
//   }

//   const options = {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
//       "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url.toString(), options);
//     if (!response.ok)
//       throw new Error(`API request failed with status ${response.status}`);
//     const data = await response.json();
//     return data.text || "I didn't get a response. Please try again.";
//   } catch (error) {
//     console.error("API error", error);
//     return "Sorry, I'm having trouble connecting. Please try again later.";
//   }
// }

// export async function ConversationSuggestions() {
//   const url =
//     "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/converse/suggest?query=tell&number=10";
//   const options = {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
//       "x-rapidapi-host": API_HOST_NAME,
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     if (!response.ok) throw new Error("Unable to fetch the data from API");
//     // This is an array from API ends
//     const data = await response.json();
//     return data.suggestions;
//   } catch (error) {
//     console.error("API error", error);
//     return [];
//   }
// }
export async function TalkToChatbot(inputText: string, contextId: string = "") {
  const url = new URL(
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/converse"
  );

  url.searchParams.append("text", encodeURIComponent(inputText));
  if (contextId) {
    url.searchParams.append("contextId", contextId);
  }

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url.toString(), options);
    if (!response.ok) {
      // Try falling back to recipe search if conversation fails
      if (response.status === 404 || response.status === 500) {
        return handleRecipeFallback(inputText);
      }
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();
    return data.text || (await handleRecipeFallback(inputText));
  } catch (error) {
    console.error("API error", error);
    return await handleRecipeFallback(inputText);
  }
}

async function handleRecipeFallback(query: string): Promise<string> {
  try {
    const recipes = await SearchRecipes(query);
    if (recipes.length > 0) {
      const recipeList = recipes
        .slice(0, 3)
        .map((r: { title: any }) => r.title)
        .join(", ");
      return `I found these recipes: ${recipeList}. Would you like details on any?`;
    }
    return "I couldn't find recipes matching your query. Could you try different terms?";
  } catch (error) {
    console.error("Recipe fallback failed:", error);
    return "I'm having trouble connecting to recipe data. Please try again later.";
  }
}

export async function ConversationSuggestions(
  query: string = "tell",
  number: number = 5
) {
  const url = new URL(
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/converse/suggest"
  );

  // Add query parameters
  url.searchParams.append("query", query);
  url.searchParams.append("number", number.toString());

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url.toString(), options);
    if (!response.ok)
      throw new Error(`API request failed with status ${response.status}`);
    const data = await response.json();
    return data.suggestions || [];
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

// export async function GetWeeklyMealPlan(): Promise<WeeklyMealPlan> {
//   const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/mealplanner/${USERNAME}/week/2025-04-21?hash=${
//     process.env.NEXT_PUBLIC_RAPIDAPI_HASH || HASH
//   }`;
//   const options = {
//     method: "GET",
//     headers: {
//       // "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
//       "x-rapidapi-host": API_HOST_NAME,
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     if (!response.ok) throw new Error("Failed to fetch weekly plan");
//     const data: WeeklyMealPlan = await response.json();
//     return data;
//   } catch (error) {
//     console.error("API Error:", error);
//     return { days: [] };
//   }
// }
// export async function GetWeeklyMealPlan(): Promise<WeeklyMealPlan> {
//   const API_HOST_NAME = "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com";
//   // const USERNAME = "toheeb-orelope0";
//   // const HASH = "a7840bafa8d07dfb9597ec917326e42d6b504891";

//   // Try a fixed date first for debugging
//   const dateString = "2025-04-21";

//   const url = `https://${API_HOST_NAME}/mealplanner/${USERNAME}/week/${dateString}?hash=${HASH}`;

//   console.log("Making request to:", url); // Debug URL

//   const options = {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
//       "x-rapidapi-host": API_HOST_NAME,
//     },
//   };

//   try {
//     const response = await fetch(url, options);

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error("API Error:", {
//         status: response.status,
//         statusText: response.statusText,
//         errorText,
//       });
//       return { days: [] };
//     }

//     const data = await response.json();
//     console.log("Full API Response:", data); // Debug full response

//     // Ensure data matches WeeklyMealPlan type
//     if (!data.days || !Array.isArray(data.days)) {
//       console.warn("Unexpected data structure:", data);
//       return { days: [] };
//     }

//     return data;
//   } catch (error) {
//     console.error("Network Error:", error);
//     return { days: [] };
//   }
// }
export async function GetWeeklyMealPlan(): Promise<WeeklyMealPlan> {
  const API_HOST_NAME = "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com";
  const USERNAME = "toheeb-orelope10";
  const HASH = "6dc11ee6fda30ffdfaa61868abad747d1c267de8";
  const dateString = "2020-06-01";

  const url = `https://${API_HOST_NAME}/mealplanner/${USERNAME}/week/${dateString}?hash=${HASH}`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
      "x-rapidapi-host": API_HOST_NAME,
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Validate response structure
    if (!data?.days || !Array.isArray(data.days)) {
      throw new Error("Invalid meal plan data structure");
    }

    return data;
  } catch (error) {
    console.error("API Error:", error);
    // Return a properly structured empty response
    return {
      days: [],
    };
  }
}

export async function ConnectUser() {
  const API_HOST_NAME = "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com";
  // const USERNAME = "your_default_username"; // Define this or ensure env var exists

  const url =
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/users/connect";
  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
      "x-rapidapi-host": API_HOST_NAME,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // Must stringify the body
      username: process.env.NEXT_PUBLIC_RAPIDAPI_USERNAME || USERNAME,
      firstName: process.env.NEXT_PUBLIC_FIRST_NAME || FIRSTNAME,
      lastName: process.env.NEXT_PUBLIC_LAST_NAME || LASTNAME,
      email: process.env.NEXT_PUBLIC_EMAIL || EMAIL,
    }),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log("Connect User Result:", result);
    return result;
  } catch (error) {
    console.error("Error connecting user:", error);
    throw error;
  }
}

export async function GetMealPlan(): Promise<string> {
  const API_HOST_NAME = "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com";
  const url =
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=day&targetCalories=2000&diet=vegetarian&exclude=shellfish%2C%20olives";

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
      "x-rapidapi-host": API_HOST_NAME,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error("API Error:", error);
    return JSON.stringify({ meals: [], nutrients: {} });
  }
}

// services/rapid_api.ts
export async function getRecipeCard(recipeId: number) {
  const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/card?mask=ellipseMask&backgroundImage=background1&backgroundColor=ffffff&fontColor=333333`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.url; // this is the image URL
  } catch (error) {
    console.error("Error fetching recipe card:", error);
    return null;
  }
}

export async function GetIngredient(
  searchTerm: string = "common",
  filters: {
    number?: number;
    sort?: string; // Only allow nutrient-based sorting
    sortDirection?: string;
    addChildren?: boolean;
    minProteinPercent?: number;
    maxProteinPercent?: number;
    minFatPercent?: number;
    maxFatPercent?: number;
    minCarbsPercent?: number;
    maxCarbsPercent?: number;
    metaInformation?: boolean;
    intolerances?: string;
  } = {}
) {
  const API_HOST_NAME = "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com";
  const url = new URL(`https://${API_HOST_NAME}/food/ingredients/search`);

  url.searchParams.append("query", encodeURIComponent(searchTerm));
  url.searchParams.append("number", String(filters.number || 10));
  url.searchParams.append("offset", "0");

  // Only add sort if it's a valid nutrient parameter
  if (filters.sort && isValidNutrientSort(filters.sort)) {
    url.searchParams.append("sort", filters.sort);
    if (filters.sortDirection) {
      url.searchParams.append("sortDirection", filters.sortDirection);
    }
  }

  // Add other optional parameters...
  if (filters.addChildren !== undefined) {
    url.searchParams.append("addChildren", filters.addChildren.toString());
  }
  // Add remaining parameters...

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
      "x-rapidapi-host": API_HOST_NAME,
    },
  };

  try {
    const response = await fetch(url.toString(), options);
    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error Response:", {
        status: response.status,
        statusText: response.statusText,
        url: url.toString(),
        error: errorText,
      });
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Failed to fetch ingredients:", {
      error,
      url: url.toString(),
      options,
    });
    return [];
  }
}

// Helper function to validate nutrient sort parameters
function isValidNutrientSort(sort: string): boolean {
  const validSorts = [
    "calories",
    "protein",
    "fat",
    "carbohydrates",
    // Add other valid nutrient sort options from the API docs
  ];
  return validSorts.includes(sort.toLowerCase());
}
