import { getCuisine } from "@/components/prisma-db";

export type Cuisine = {
  id: number;
  name: string;
  description: string;
};

export default async function CuisinePage() {
  const cuisines: Cuisine[] = await getCuisine();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Cuisines</h1>
      <ul className="list-disc list-inside">
        {cuisines.map((cuisine) => (
          <li key={cuisine.id} className="mb-2">
            <strong>{cuisine.name}</strong>: {cuisine.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
