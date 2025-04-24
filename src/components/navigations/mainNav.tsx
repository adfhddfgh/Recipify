import Link from "next/link";
import Image from "next/image";
import { getCuisine } from "@/components/prisma-db";
import { Search } from "../search";

export type Cuisine = {
  id: number;
  name: string;
  description: string;
};

export const MainNavigation = async () => {
  const cuisines: Cuisine[] = await getCuisine(); // Fetch cuisines here!

  return (
    <div className="hidden lg:block w-screen bg-purple-50/10 backdrop-blur-sm p-4 rounded-lg shadow-md">
      <ul className="flex justify-around items-center gap-4">
        <li>
          <Link href="/" className="hover:text-gray-400">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
          </Link>
        </li>

        <li>
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>

        <li>
          <Link href="/recipes" className="hover:text-gray-400">
            Recipes
          </Link>
        </li>

        <li className="relative group">
          <button className="hover:text-gray-400">Cuisine</button>
          <ul className="absolute top-full left-0 mt-2 w-44 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            {cuisines.map((cuisine) => (
              <li key={cuisine.id}>
                <Link
                  href={`/cuisine/${cuisine.name.toLowerCase()}`} // dynamic link
                  className="block px-4 py-2 text-sm text-blue-700 hover:bg-gray-100"
                >
                  {cuisine.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        <li>
          <Link href="/meal-plans" className="hover:text-gray-400">
            Meal Plans
          </Link>
        </li>

        <li>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
        </li>

        <li>
          <Search />
        </li>
      </ul>
    </div>
  );
};
