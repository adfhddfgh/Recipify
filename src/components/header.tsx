"use client";

import { useState } from "react";
import MobilEMenu from "@/components/MobileMenu"; // Make sure the path is correct

export const Header = () => {
  return (
    <header className="flex flex-wrap justify-between items-center gap-4 p-6 shadow-sm relative">
      <h1 className="text-2xl font-bold">Recipify</h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-sm font-medium">
        <a href="#">HOME</a>
        <a href="#">RECIPES</a>
        <a href="#">CUISINES</a>
        <a href="#">MEAL PLANNING</a>
      </nav>

      {/* Mobile Navigation */}
      <MobilEMenu />

      {/* Search and Login */}
      <form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
        <input
          type="text"
          name="search"
          placeholder="🔍 Hinted search text"
          className="border px-4 py-2 rounded-full text-sm w-full sm:w-64"
        />
        <button
          type="submit"
          className="bg-black text-white px-5 py-2 rounded-md text-sm"
        >
          Login
        </button>
      </form>
    </header>
  );
};
