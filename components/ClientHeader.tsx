"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Tab1", href: "/tab1" },
  { label: "Tab2", href: "/tab2" },
  { label: "Tab3", href: "/tab3" },
  { label: "Tab4", href: "/tab4" },
  { label: "Tab5", href: "/tab5" },
  { label: "Tab6", href: "/tab6" },
  { label: "Tab7", href: "/tab7" },
  { label: "Tab8", href: "/tab8" },
  { label: "Tab9", href: "/tab9" },
  { label: "About", href: "/about" },
];

export default function ClientHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b p-4 shadow-md">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <h1 className="text-lg font-bold text-blue-700">
          nextjs202507050418v15
        </h1>
        <button
          className="sm:hidden text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <nav className="hidden sm:flex gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-blue-500 hover:text-blue-800"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {menuOpen && (
        <nav className="sm:hidden mt-4 px-2">
          <ul className="flex flex-wrap gap-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-blue-500 hover:text-blue-800"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
