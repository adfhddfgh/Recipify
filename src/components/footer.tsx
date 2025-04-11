import Link from "next/link";

export const Footer = () => {
  return (
    // <footer className="bg-[var(--background)] border-t border-[var(--foreground)]/10 ">
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto text-center flex flex-col items-center py-4">
        <ul className="flex justify-center space-x-4 mt-2">
          <li>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Recipify. All rights reserved.
            </p>
          </li>
          <li>
            <Link href="/about" className="text-gray-500 hover:text-gray-400">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="text-gray-500 hover:text-gray-400">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="text-gray-500 hover:text-gray-400">
              Terms of Service
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
