import Link from "next/link";

export const MainNavigation = () => {
  return (
    <div className="hidden lg:block w-screen bg-purple-50/10 backdrop-blur-sm p-4 rounded-lg shadow-md">
      <ul className="flex  justify-around items-center gap-4">
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
        <li>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
        </li>
        <li className="relative group">
          <Link href="#" className="hover:text-gray-400">
            Projects
          </Link>

          <ul className="absolute top-full left-0 mt-2 w-44  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <li>
              <Link
                href="/blog"
                className="block px-4 py-2 text-sm text-blue-700 hover:bg-gray-100"
              >
                Blog 3
              </Link>
            </li>
            <li>
              <Link
                href="/blog/recipes"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Recipes 3
              </Link>
            </li>
          </ul>
        </li>

        <li>
          Sear
        </li>
      </ul>
    </div>
  );
};
