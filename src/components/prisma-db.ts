// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

const seedCuisines = async () => {
  const count = await prisma.cuisine.count();
  if (count === 0) {
    await prisma.cuisine.createMany({
      data: [
        {
          name: "African",
          description:
            "African cuisine is diverse and rich in flavors, featuring stews, grains, and unique spice blends.",
        },
        {
          name: "Chinese",
          description:
            "Chinese cuisine offers regional diversity from spicy Sichuan to delicate Cantonese dishes.",
        },
        {
          name: "Japanese",
          description:
            "Japanese cuisine emphasizes seasonality, fresh ingredients, and beautiful presentation.",
        },
        {
          name: "Korean",
          description:
            "Korean cuisine features bold flavors with fermented foods like kimchi and various banchan (side dishes).",
        },
        {
          name: "Vietnamese",
          description:
            "Vietnamese cuisine is known for its fresh herbs, light broths, and balance of flavors.",
        },
        {
          name: "Thai",
          description:
            "Thai cuisine balances sweet, sour, spicy, and salty flavors in vibrant dishes.",
        },
        {
          name: "Indian",
          description:
            "Indian cuisine varies by region but is universally rich in spices and complex flavors.",
        },
        {
          name: "British",
          description:
            "British cuisine features hearty dishes like fish and chips, roasts, and savory pies.",
        },
        {
          name: "Irish",
          description:
            "Irish cuisine is known for its dairy products, seafood, and traditional stews.",
        },
        {
          name: "French",
          description:
            "French cuisine is renowned for its techniques, sauces, and emphasis on quality ingredients.",
        },
        {
          name: "Italian",
          description:
            "Italian cuisine varies regionally but is globally loved for its pasta, pizza, and fresh ingredients.",
        },
        {
          name: "Mexican",
          description:
            "Mexican cuisine features corn, beans, chili peppers, and complex moles with ancient roots.",
        },
        {
          name: "Spanish",
          description:
            "Spanish cuisine includes tapas, paella, and excellent cured meats and cheeses.",
        },
        {
          name: "Middle Eastern",
          description:
            "Middle Eastern cuisine features hummus, falafel, kebabs, and aromatic spices.",
        },
        {
          name: "Jewish",
          description:
            "Jewish cuisine varies by tradition but includes dishes like matzo ball soup and challah.",
        },
        {
          name: "American",
          description:
            "American cuisine is a melting pot of influences with regional specialties.",
        },
        {
          name: "Cajun",
          description:
            "Cajun cuisine from Louisiana features bold spices, rice dishes, and seafood.",
        },
        {
          name: "Southern",
          description:
            "Southern U.S. cuisine includes fried chicken, biscuits, and soul food traditions.",
        },
        {
          name: "Greek",
          description:
            "Greek cuisine features olive oil, feta, fresh vegetables, and grilled meats.",
        },
        {
          name: "German",
          description:
            "German cuisine is known for sausages, pretzels, potatoes, and hearty breads.",
        },
        {
          name: "Nordic",
          description:
            "Nordic cuisine emphasizes seafood, foraged foods, and preservation techniques.",
        },
        {
          name: "Eastern European",
          description:
            "Eastern European cuisine includes pierogi, borscht, and hearty comfort foods.",
        },
        {
          name: "Caribbean",
          description:
            "Caribbean cuisine blends African, European, and indigenous influences with tropical flavors.",
        },
        {
          name: "Latin American",
          description:
            "Latin American cuisine varies by country but shares corn, beans, and vibrant flavors.",
        },
      ],
    });
  }
};

async function seedAll() {
  await seedPantryEssentials();
  await seedVegetables();
  await seedMushrooms();
  await seedFruits();
  await seedNutsAndSeeds();
  await seedDairy();
  await seedMeats();
  await seedSeafood();
  await seedHerbsAndSpices();
  await seedSweeteners();
  await seedGrains();
  await seedLegumes();
  await seedPasta();
  await seedBreads();
  await seedOilsAndFats();
  await seedCondiments();
  await seedSoupStocks();
  await seedBeverages();
  await seedBakingGoods();
  await seedDoughWrappers();
  await seedCuisines();
}

// 1. Pantry Essentials
const seedPantryEssentials = async () => {
  const count = await prisma.pantryEssential.count();
  if (count === 0) {
    await prisma.pantryEssential.createMany({
      data: [
        { name: "Flour", description: "All-purpose white flour" },
        { name: "Sugar", description: "Granulated white sugar" },
        { name: "Salt", description: "Iodized table salt" },
        { name: "Black Pepper", description: "Whole peppercorns" },
        { name: "Olive Oil", description: "Extra virgin olive oil" },
      ],
    });
  }
};

// 2. Vegetables
const seedVegetables = async () => {
  const count = await prisma.vegetable.count();
  if (count === 0) {
    await prisma.vegetable.createMany({
      data: [
        {
          name: "Carrot",
          description: "Orange root vegetable",
          category: "root",
          isOrganic: true,
        },
        {
          name: "Broccoli",
          description: "Green cruciferous vegetable",
          category: "floret",
        },
        {
          name: "Spinach",
          description: "Leafy green",
          category: "leafy",
          isOrganic: false,
        },
      ],
    });
  }
};

// 3. Mushrooms
const seedMushrooms = async () => {
  const count = await prisma.mushroom.count();
  if (count === 0) {
    await prisma.mushroom.createMany({
      data: [
        {
          name: "Button Mushroom",
          description: "Common white mushroom",
          isWild: false,
        },
        {
          name: "Shiitake",
          description: "Asian variety with rich flavor",
          isWild: false,
        },
        {
          name: "Chanterelle",
          description: "Wild golden mushroom",
          isWild: true,
        },
      ],
    });
  }
};

// 4. Fruits (including berries)
const seedFruits = async () => {
  const count = await prisma.fruit.count();
  if (count === 0) {
    await prisma.fruit.createMany({
      data: [
        {
          name: "Apple",
          description: "Red delicious variety",
          isTropical: false,
          isBerry: false,
        },
        {
          name: "Banana",
          description: "Yellow tropical fruit",
          isTropical: true,
        },
        { name: "Strawberry", description: "Red berry fruit", isBerry: true },
      ],
    });
  }
};

// 5. Nuts & Seeds
const seedNutsAndSeeds = async () => {
  const count = await prisma.nutAndSeed.count();
  if (count === 0) {
    await prisma.nutAndSeed.createMany({
      data: [
        { name: "Almond", description: "Tree nut", isNut: true, isSeed: false },
        {
          name: "Sunflower Seed",
          description: "Edible seed",
          isNut: false,
          isSeed: true,
        },
      ],
    });
  }
};

// 6. Dairy (including cheeses)
const seedDairy = async () => {
  const count = await prisma.dairy.count();
  if (count === 0) {
    await prisma.dairy.createMany({
      data: [
        {
          name: "Milk",
          description: "Whole milk",
          category: "milk",
          isVegan: false,
        },
        {
          name: "Cheddar Cheese",
          description: "Aged cheddar",
          category: "cheese",
        },
        {
          name: "Almond Milk",
          description: "Dairy-free alternative",
          category: "milk",
          isVegan: true,
        },
      ],
    });
  }
};

// 7. Meats (including poultry)
const seedMeats = async () => {
  const count = await prisma.meat.count();
  if (count === 0) {
    await prisma.meat.createMany({
      data: [
        {
          name: "Chicken Breast",
          description: "Boneless skinless",
          category: "poultry",
          cutType: "breast",
        },
        {
          name: "Ground Beef",
          description: "80/20 blend",
          category: "red meat",
          cutType: "ground",
        },
      ],
    });
  }
};

// 8. Seafood (including seaweed)
const seedSeafood = async () => {
  const count = await prisma.seafood.count();
  if (count === 0) {
    await prisma.seafood.createMany({
      data: [
        {
          name: "Salmon",
          description: "Atlantic salmon fillet",
          category: "fish",
          isFreshwater: false,
        },
        {
          name: "Nori",
          description: "Dried seaweed sheets",
          category: "seaweed",
        },
      ],
    });
  }
};

// 9. Herbs & Spices
const seedHerbsAndSpices = async () => {
  const count = await prisma.herbAndSpice.count();
  if (count === 0) {
    await prisma.herbAndSpice.createMany({
      data: [
        {
          name: "Basil",
          description: "Fresh herb",
          isHerb: true,
          isSpice: false,
          isBlend: false,
        },
        {
          name: "Cumin",
          description: "Ground spice",
          isHerb: false,
          isSpice: true,
          isBlend: false,
        },
        {
          name: "Italian Seasoning",
          description: "Herb blend",
          isBlend: true,
          isHerb: false,
          isSpice: false,
        },
      ],
    });
  }
};

// 10. Sweeteners
const seedSweeteners = async () => {
  const count = await prisma.sweetener.count();
  if (count === 0) {
    await prisma.sweetener.createMany({
      data: [
        { name: "Honey", description: "Natural sweetener", isNatural: true },
        {
          name: "Aspartame",
          description: "Artificial sweetener",
          isArtificial: true,
        },
      ],
    });
  }
};

// 11. Grains
const seedGrains = async () => {
  const count = await prisma.grain.count();
  if (count === 0) {
    await prisma.grain.createMany({
      data: [
        {
          name: "Brown Rice",
          description: "Whole grain rice",
          category: "whole",
          isGlutenFree: true,
        },
        {
          name: "Quinoa",
          description: "Protein-rich seed",
          isGlutenFree: true,
        },
      ],
    });
  }
};

// 12. Legumes
const seedLegumes = async () => {
  const count = await prisma.legume.count();
  if (count === 0) {
    await prisma.legume.createMany({
      data: [
        {
          name: "Black Beans",
          description: "Canned beans",
          isBean: true,
          isLentil: false,
          isPea: false,
        },
        {
          name: "Red Lentils",
          description: "Split lentils",
          isLentil: true,
          isBean: false,
          isPea: false,
        },
      ],
    });
  }
};

// 13. Pasta
const seedPasta = async () => {
  const count = await prisma.pasta.count();
  if (count === 0) {
    await prisma.pasta.createMany({
      data: [
        {
          name: "Spaghetti",
          description: "Long thin pasta",
          shape: "long",
          isFresh: false,
        },
        {
          name: "Ravioli",
          description: "Stuffed pasta",
          shape: "filled",
          isFresh: true,
        },
      ],
    });
  }
};

// 14. Breads
const seedBreads = async () => {
  const count = await prisma.bread.count();
  if (count === 0) {
    await prisma.bread.createMany({
      data: [
        { name: "Sourdough", description: "Artisan bread", category: "loaf" },
        {
          name: "Pita",
          description: "Middle Eastern flatbread",
          category: "flatbread",
        },
      ],
    });
  }
};

// 15. Oils & Fats
const seedOilsAndFats = async () => {
  const count = await prisma.oilAndFat.count();
  if (count === 0) {
    await prisma.oilAndFat.createMany({
      data: [
        {
          name: "Coconut Oil",
          description: "Solid at room temp",
          source: "plant",
          smokePoint: 350,
        },
        { name: "Butter", description: "Dairy fat", source: "animal" },
      ],
    });
  }
};

// 16. Condiments
const seedCondiments = async () => {
  const count = await prisma.condiment.count();
  if (count === 0) {
    await prisma.condiment.createMany({
      data: [
        { name: "Ketchup", description: "Tomato condiment", category: "sauce" },
        { name: "Hummus", description: "Chickpea spread", category: "dip" },
      ],
    });
  }
};

// 17. Soups & Stocks
const seedSoupStocks = async () => {
  const count = await prisma.soupStock.count();
  if (count === 0) {
    await prisma.soupStock.createMany({
      data: [
        {
          name: "Chicken Stock",
          description: "Homemade stock",
          base: "chicken",
          isInstant: false,
        },
        {
          name: "Vegetable Bouillon",
          description: "Concentrated cubes",
          base: "vegetable",
          isInstant: true,
        },
      ],
    });
  }
};

// 18. Beverages
const seedBeverages = async () => {
  const count = await prisma.beverage.count();
  if (count === 0) {
    await prisma.beverage.createMany({
      data: [
        {
          name: "Coffee",
          description: "Brewed coffee",
          category: "non-alcoholic",
          isAlcoholic: false,
        },
        {
          name: "Cabernet Sauvignon",
          description: "Red wine",
          category: "wine",
          isAlcoholic: true,
          abv: 13.5,
        },
      ],
    });
  }
};

// 19. Baking Goods
const seedBakingGoods = async () => {
  const count = await prisma.bakingGood.count();
  if (count === 0) {
    await prisma.bakingGood.createMany({
      data: [
        {
          name: "Baking Powder",
          description: "Leavening agent",
          category: "leavener",
        },
        {
          name: "Dark Chocolate",
          description: "70% cocoa",
          category: "chocolate",
        },
      ],
    });
  }
};

// 20. Doughs & Wrappers
const seedDoughWrappers = async () => {
  const count = await prisma.doughWrapper.count();
  if (count === 0) {
    await prisma.doughWrapper.createMany({
      data: [
        {
          name: "Pie Crust",
          description: "Pre-made crust",
          type: "pastry",
          isPreMade: true,
        },
        {
          name: "Wonton Wrappers",
          description: "Thin dough squares",
          type: "wrapper",
        },
      ],
    });
  }
};

// Execute all seed functions
seedAll()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

//Db fetching endpoints
export async function getCuisine(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.cuisine.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { description: { contains: query } },
        ],
      },
    });
  }
  return prisma.cuisine.findMany();
}

export async function addCuisine(name: string, description: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.cuisine.create({
    data: { name, description },
  });
}

export async function updateCuines(
  id: number,
  name: string,
  description: string
) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.cuisine.update({
    where: { id },
    data: { name, description },
  });
}

export async function deleteCuisine(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.cuisine.delete({
    where: { id },
  });
}

// 1. Pantry Essentials
export async function getPantryEssentials(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.pantryEssential.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { description: { contains: query } },
        ],
      },
    });
  }
  return prisma.pantryEssential.findMany();
}

// 2. Vegetables
export async function getVegetables(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.vegetable.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { description: { contains: query } },
          { category: { contains: query } },
        ],
      },
    });
  }
  return prisma.vegetable.findMany();
}

// 3. Mushrooms
export async function getMushrooms(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.mushroom.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { description: { contains: query } },
        ],
      },
    });
  }
  return prisma.mushroom.findMany();
}

// 4. Fruits
export async function getFruits(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.fruit.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { description: { contains: query } },
        ],
      },
    });
  }
  return prisma.fruit.findMany();
}

// 5. Nuts & Seeds
export async function getNutsAndSeeds(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.nutAndSeed.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { description: { contains: query } },
        ],
      },
    });
  }
  return prisma.nutAndSeed.findMany();
}

// 6. Dairy
export async function getDairy(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.dairy.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { description: { contains: query } },
          { category: { contains: query } },
        ],
      },
    });
  }
  return prisma.dairy.findMany();
}

// 7. Meats
export async function getMeats(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.meat.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { description: { contains: query } },
          { category: { contains: query } },
          { cutType: { contains: query } },
        ],
      },
    });
  }
  return prisma.meat.findMany();
}

// 8. Seafood
export async function getSeafood(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.seafood.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { description: { contains: query } },
          { category: { contains: query } },
        ],
      },
    });
  }
  return prisma.seafood.findMany();
}

// 9. Herbs & Spices
export async function getHerbsAndSpices(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.herbAndSpice.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { description: { contains: query } },
        ],
      },
    });
  }
  return prisma.herbAndSpice.findMany();
}

// 10. Sweeteners
export async function getSweeteners(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.sweetener.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { description: { contains: query } },
        ],
      },
    });
  }
  return prisma.sweetener.findMany();
}

// 11. Grains
export async function getGrains(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.grain.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { description: { contains: query } },
          { category: { contains: query } },
        ],
      },
    });
  }
  return prisma.grain.findMany();
}

// 12. Legumes
export async function getLegumes(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.legume.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { description: { contains: query } },
        ],
      },
    });
  }
  return prisma.legume.findMany();
}

// 13. Pasta
export async function getPasta(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.pasta.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { description: { contains: query } },
          { shape: { contains: query } },
        ],
      },
    });
  }
  return prisma.pasta.findMany();
}

// 14. Breads
export async function getBreads(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.bread.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { description: { contains: query } },
          { category: { contains: query } },
        ],
      },
    });
  }
  return prisma.bread.findMany();
}

// 15. Oils & Fats
export async function getOilsAndFats(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.oilAndFat.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { description: { contains: query } },
          { source: { contains: query } },
        ],
      },
    });
  }
  return prisma.oilAndFat.findMany();
}

// 16. Condiments
export async function getCondiments(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.condiment.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { description: { contains: query } },
          { category: { contains: query } },
        ],
      },
    });
  }
  return prisma.condiment.findMany();
}

// 17. Soup Stocks
export async function getSoupStocks(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.soupStock.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { description: { contains: query } },
          { base: { contains: query } },
        ],
      },
    });
  }
  return prisma.soupStock.findMany();
}

// 18. Beverages
export async function getBeverages(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.beverage.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { description: { contains: query } },
          { category: { contains: query } },
        ],
      },
    });
  }
  return prisma.beverage.findMany();
}

// 19. Baking Goods
export async function getBakingGoods(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.bakingGood.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { description: { contains: query } },
          { category: { contains: query } },
        ],
      },
    });
  }
  return prisma.bakingGood.findMany();
}

// 20. Dough Wrappers
export async function getDoughWrappers(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.doughWrapper.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { description: { contains: query } },
          { type: { contains: query } },
        ],
      },
    });
  }
  return prisma.doughWrapper.findMany();
}

// 21. Cuisines
export async function getCuisines(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.cuisine.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { description: { contains: query } },
        ],
      },
    });
  }
  return prisma.cuisine.findMany();
}
