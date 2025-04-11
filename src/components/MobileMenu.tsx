"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // Or use your icon system

const navLinks = [
  { name: "HOME", href: "#" },
  { name: "RECIPES", href: "#" },
  { name: "CUISINES", href: "#" },
  { name: "MEAL PLANNING", href: "#" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-black dark:text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-black shadow-lg z-50 px-6 py-4 space-y-4 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-black dark:text-white hover:underline"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
