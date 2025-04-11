import Link from "next/link";

export const MiniNavigation = () => {
  return (
    <div className="hidden lg:block w-screen bg-purple-300 backdrop-blur-sm p-4 rounded-lg shadow-md flex justify-center items-center">
      <ul className="flex w-full justify-between">
        <li>
          <Link
            href="/blog"
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};
