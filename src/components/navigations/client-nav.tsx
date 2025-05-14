// components/navigations/client-nav.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "@/components/search";

export const ClientNav = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    // Navigate to recipes page with search term
    router.push(`/recipes?search=${encodeURIComponent(term)}`);
  };

  return <Search onSearch={handleSearch} />;
};
