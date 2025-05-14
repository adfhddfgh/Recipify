// import { getCuisine } from "@/components/prisma-db";

// export type Cuisine = {
//   id: number;
//   name: string;
//   description: string;
// };

// export default async function CuisinePage() {
//   const cuisines: Cuisine[] = await getCuisine();

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2">
//       <h1 className="text-4xl font-bold mb-4">Cuisines</h1>
//       <ul className="list-disc list-inside">
//         {cuisines.map((cuisine) => (
//           <li key={cuisine.id} className="mb-2">
//             <strong>{cuisine.name}</strong>: {cuisine.description}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import { Header } from "@/components/header";

const cuisines = [
  { name: "Mexican", image: "/cuisines/mexican.jpg" },
  { name: "Indian", image: "/cuisines/indian.jpg" },
  { name: "English", image: "/cuisines/english.jpg" },
  { name: "African", image: "/cuisines/african.jpg" },
  { name: "Spanish", image: "/cuisines/spanish.jpg" },
  { name: "Italian", image: "/cuisines/italian.jpg" },
  { name: "Asian", image: "/cuisines/asian.jpg" },
  { name: "Caribbean", image: "/cuisines/caribbean.jpg" },
  { name: "American", image: "/cuisines/american.jpg" },
];

export default function CuisinesPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* <Header /> */}

      <main className="flex-1 p-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Explore Cuisines
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {cuisines.map((cuisine) => (
            <div
              key={cuisine.name}
              className="rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-gray-50"
            >
              <Image
                src={cuisine.image}
                alt={cuisine.name}
                width={300}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold capitalize">
                  {cuisine.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
