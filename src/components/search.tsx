// "use client";
// import React, { useState, KeyboardEvent } from "react";

// interface SearchProps {
//   onSearch: (term: string) => void;
// }

// export const Search = ({ onSearch }: SearchProps) => {
//   const [inputValue, setInputValue] = useState("");

//   const handleSearch = () => {
//     if (inputValue.trim()) {
//       onSearch(inputValue.trim());
//     }
//   };

//   const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter" && inputValue.trim()) {
//       onSearch(inputValue.trim());
//     }
//   };

//   return (
//     <div className="flex items-center justify-center gap-4 p-4 bg-purple-50/10 backdrop-blur-sm rounded-lg shadow-md">
//       <input
//         type="text"
//         placeholder="Search for recipes..."
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         onKeyDown={handleKeyDown}
//         className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500"
//       />
//       <button
//         onClick={handleSearch}
//         className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
//       >
//         Search
//       </button>
//     </div>
//   );
// };
// components/search.tsx
"use client";
import React, { useState, useEffect } from "react";

interface SearchProps {
  onSearch: (term: string) => void;
  initialValue?: string;
}

export const Search = ({ onSearch, initialValue = "" }: SearchProps) => {
  const [inputValue, setInputValue] = useState(initialValue);

  useEffect(() => {
    setInputValue(initialValue);
  }, [initialValue]);

  const handleSearch = () => {
    onSearch(inputValue.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 p-4 bg-purple-50/10 backdrop-blur-sm rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Search for recipes..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Search
      </button>
    </div>
  );
};
