"use client";

import { useState } from "react";
import { COLLEGE_INFO } from "@/data/COLLEGE_INFO";
import { NAVIGATION_ITEMS } from "@/data/NAVIGATION";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import MobileMenu from "./MobileMenu";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header 
      className={cn(
        "w-full bg-[#f7f7f6] border-t-2 border-ctp-red",
        "h-[182px] flex items-center justify-between",
        "px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {/* Logo Institucional */}
      <div className="flex-shrink-0">
        <Logo 
          collegeName={COLLEGE_INFO.name}
          className="h-16 w-16 sm:h-20 sm:w-20"
        />
      </div>

      {/* Navegación Desktop */}
      <nav className="hidden lg:flex items-center space-x-8">
        <NavigationLinks 
          items={NAVIGATION_ITEMS}
          className="text-2xl font-serif text-gray-900"
        />
      </nav>

      {/* Botón Mobile Menu */}
      <button
        className="lg:hidden p-2 rounded-md text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-ctp-blue"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Abrir menú de navegación"
      >
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={NAVIGATION_ITEMS}
      />
    </header>
  );
}
