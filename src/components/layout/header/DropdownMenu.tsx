"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { NavigationItem } from "@/types";
import { cn } from "@/lib/utils";

interface DropdownMenuProps {
  item: NavigationItem;
  className?: string;
}

export default function DropdownMenu({ item, className }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!item.children || item.children.length === 0) {
    return item.href ? (
      <Link
        href={item.href}
        className={cn(
          "text-2xl font-serif text-gray-900",
          "hover:text-blue-500 transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-ctp-blue focus:ring-offset-2",
          "px-2 py-1 rounded-md",
          "min-h-[48px] min-w-[48px] flex items-center justify-center",
          className
        )}
      >
        {item.label}
      </Link>
    ) : (
      <span
        className={cn(
          "text-2xl font-serif text-gray-900",
          "px-2 py-1 rounded-md",
          "min-h-[48px] min-w-[48px] flex items-center justify-center",
          className
        )}
      >
        {item.label}
      </span>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "text-2xl font-serif text-gray-900",
          "hover:text-blue-500 transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-ctp-blue focus:ring-offset-2",
          "px-2 py-1 rounded-md flex items-center justify-center",
          "min-h-[48px] min-w-[48px]",
          isOpen && "text-blue-500",
          className
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.label}
        <svg
          className={cn(
            "ml-2 h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="py-2">
            {item.children.map((child) => (
              child.href ? (
                <Link
                  key={child.id}
                  href={child.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-3 text-lg font-serif text-gray-700",
                    "hover:bg-gray-50 hover:text-blue-500",
                    "focus:outline-none focus:ring-2 focus:ring-ctp-blue focus:ring-inset",
                    "transition-colors duration-200",
                    "min-h-[48px] flex items-center"
                  )}
                >
                  {child.label}
                </Link>
              ) : (
                <span
                  key={child.id}
                  className={cn(
                    "block px-4 py-3 text-lg font-serif text-gray-700",
                    "min-h-[48px] flex items-center"
                  )}
                >
                  {child.label}
                </span>
              )
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
