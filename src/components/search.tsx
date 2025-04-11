import Link from "next/link";



export const Search = () => {
  return (
    <div className="flex items-center justify-center gap-4 p-4 bg-purple-50/10 backdrop-blur-sm rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Search for recipes..."
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
        Search
      </button>
    </div>
  );
};
