import {
  getPantryEssentials,
  getVegetables,
  getMushrooms,
  getFruits,
  getNutsAndSeeds,
  getDairy,
  getMeats,
  getSeafood,
  getHerbsAndSpices,
  getSweeteners,
  getGrains,
  getLegumes,
  getPasta,
  getBreads,
  getOilsAndFats,
  getCondiments,
  getSoupStocks,
  getBeverages,
  getBakingGoods,
  getDoughWrappers,
  getCuisines,
} from "@/components/prisma-db";

export default async function IngredientDashboard() {
  // Fetch all data without filtering
  const [
    pantryItems,
    vegetables,
    mushrooms,
    fruits,
    nutsAndSeeds,
    dairy,
    meats,
    seafood,
    herbsAndSpices,
    sweeteners,
    grains,
    legumes,
    pasta,
    breads,
    oilsAndFats,
    condiments,
    soupStocks,
    beverages,
    bakingGoods,
    doughWrappers,
    cuisines,
  ] = await Promise.all([
    getPantryEssentials(),
    getVegetables(),
    getMushrooms(),
    getFruits(),
    getNutsAndSeeds(),
    getDairy(),
    getMeats(),
    getSeafood(),
    getHerbsAndSpices(),
    getSweeteners(),
    getGrains(),
    getLegumes(),
    getPasta(),
    getBreads(),
    getOilsAndFats(),
    getCondiments(),
    getSoupStocks(),
    getBeverages(),
    getBakingGoods(),
    getDoughWrappers(),
    getCuisines(),
  ]);

  // Example of fetching with search query
  const searchResults = await getVegetables("carrot");

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Ingredient Dashboard</h1>

      {/* Pantry Items Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Pantry Essentials</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pantryItems.map((item) => (
            <li key={item.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium">{item.name}</h3>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Vegetables Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Vegetables</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {vegetables.map((item) => (
            <li key={item.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium">{item.name}</h3>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
              {item.category && (
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                  {item.category}
                </span>
              )}
              {item.isOrganic && (
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded ml-2">
                  Organic
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Mushrooms Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Mushrooms</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mushrooms.map((item) => (
            <li key={item.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium">{item.name}</h3>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
              {item.isWild && (
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                  Wild
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Fruits Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Fruits</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {fruits.map((item) => (
            <li key={item.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium">{item.name}</h3>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
              <div className="flex gap-2 mt-2">
                {item.isTropical && (
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                    Tropical
                  </span>
                )}
                {item.isBerry && (
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                    Berry
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Nuts & Seeds Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Nuts & Seeds</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {nutsAndSeeds.map((item) => (
            <li key={item.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium">{item.name}</h3>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
              <div className="flex gap-2 mt-2">
                {item.isNut && (
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                    Nut
                  </span>
                )}
                {item.isSeed && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    Seed
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Dairy Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Dairy</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {dairy.map((item) => (
            <li key={item.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium">{item.name}</h3>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
              <div className="flex gap-2 mt-2">
                {item.category && (
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {item.category}
                  </span>
                )}
                {item.isVegan && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    Vegan
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Meats Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Meats</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {meats.map((item) => (
            <li key={item.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium">{item.name}</h3>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
              <div className="flex gap-2 mt-2">
                {item.category && (
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                    {item.category}
                  </span>
                )}
                {item.cutType && (
                  <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                    {item.cutType}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Seafood Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Seafood</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {seafood.map((item) => (
            <li key={item.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium">{item.name}</h3>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
              <div className="flex gap-2 mt-2">
                {item.category && (
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {item.category}
                  </span>
                )}
                {item.isFreshwater && (
                  <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded">
                    Freshwater
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Herbs & Spices Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Herbs & Spices</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {herbsAndSpices.map((item) => (
            <li key={item.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium">{item.name}</h3>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
              <div className="flex gap-2 mt-2">
                {item.isHerb && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    Herb
                  </span>
                )}
                {item.isSpice && (
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                    Spice
                  </span>
                )}
                {item.isBlend && (
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                    Blend
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Sweeteners Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sweeteners</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sweeteners.map((item) => (
            <li key={item.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium">{item.name}</h3>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
              <div className="flex gap-2 mt-2">
                {item.isNatural && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    Natural
                  </span>
                )}
                {item.isArtificial && (
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                    Artificial
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Grains Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Grains</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {grains.map((item) => (
            <li key={item.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium">{item.name}</h3>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
              <div className="flex gap-2 mt-2">
                {item.category && (
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                    {item.category}
                  </span>
                )}
                {item.isGlutenFree && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    Gluten-Free
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Legumes Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Legumes</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {legumes.map((item) => (
            <li key={item.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium">{item.name}</h3>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
              <div className="flex gap-2 mt-2">
                {item.isBean && (
                  <span className="text-xs bg-brown-100 text-brown-800 px-2 py-1 rounded">
                    Bean
                  </span>
                )}
                {item.isLentil && (
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                    Lentil
                  </span>
                )}
                {item.isPea && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    Pea
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Pasta Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Pasta</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pasta.map((item) => (
            <li key={item.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium">{item.name}</h3>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
              <div className="flex gap-2 mt-2">
                {item.shape && (
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {item.shape}
                  </span>
                )}
                {item.isFresh && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    Fresh
                  </span>
                )}
                {item.isGlutenFree && (
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                    Gluten-Free
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Breads Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Breads</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {breads.map((item) => (
            <li key={item.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium">{item.name}</h3>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
              <div className="flex gap-2 mt-2">
                {item.category && (
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                    {item.category}
                  </span>
                )}
                {item.isGlutenFree && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    Gluten-Free
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Oils & Fats Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Oils & Fats</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {oilsAndFats.map((item) => (
            <li key={item.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium">{item.name}</h3>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
              <div className="flex gap-2 mt-2">
                {item.source && (
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {item.source}
                  </span>
                )}
                {item.smokePoint && (
                  <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                    {item.smokePoint}°F
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Condiments Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Condiments</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {condiments.map((item) => (
            <li key={item.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium">{item.name}</h3>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
              <div className="flex gap-2 mt-2">
                {item.category && (
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                    {item.category}
                  </span>
                )}
                {item.isSpicy && (
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                    Spicy
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Soup Stocks Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Soup Stocks</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {soupStocks.map((item) => (
            <li key={item.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium">{item.name}</h3>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
              <div className="flex gap-2 mt-2">
                {item.base && (
                  <span className="text-xs bg-brown-100 text-brown-800 px-2 py-1 rounded">
                    {item.base}
                  </span>
                )}
                {item.isInstant && (
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    Instant
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Beverages Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Beverages</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {beverages.map((item) => (
            <li key={item.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium">{item.name}</h3>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
              <div className="flex gap-2 mt-2">
                {item.category && (
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {item.category}
                  </span>
                )}
                {item.isAlcoholic && item.abv && (
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                    {item.abv}% ABV
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Baking Goods Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Baking Goods</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {bakingGoods.map((item) => (
            <li key={item.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium">{item.name}</h3>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
              <div className="flex gap-2 mt-2">
                {item.category && (
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                    {item.category}
                  </span>
                )}
                {item.isGlutenFree && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    Gluten-Free
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Dough Wrappers Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Dough Wrappers</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {doughWrappers.map((item) => (
            <li key={item.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium">{item.name}</h3>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
              <div className="flex gap-2 mt-2">
                {item.type && (
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {item.type}
                  </span>
                )}
                {item.isPreMade && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    Pre-Made
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Cuisines Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Cuisines</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cuisines.map((item) => (
            <li key={item.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium">{item.name}</h3>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Search Results Section */}
      {searchResults.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Search Results for "carrot"
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {searchResults.map((item) => (
              <li key={item.id} className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-medium">{item.name}</h3>
                {item.description && (
                  <p className="text-sm text-gray-600">{item.description}</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Summary Stats */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Inventory Summary</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium">Pantry Items</h3>
            <p className="text-2xl">{pantryItems.length}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium">Vegetables</h3>
            <p className="text-2xl">{vegetables.length}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium">Mushrooms</h3>
            <p className="text-2xl">{mushrooms.length}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium">Fruits</h3>
            <p className="text-2xl">{fruits.length}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium">Dairy</h3>
            <p className="text-2xl">{dairy.length}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium">Meats</h3>
            <p className="text-2xl">{meats.length}</p>
          </div>
          {/* Add more summary cards as needed */}
        </div>
      </div>
    </div>
  );
}
