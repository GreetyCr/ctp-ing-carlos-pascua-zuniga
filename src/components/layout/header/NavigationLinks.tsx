"use client";

import { NavigationItem } from "@/types";
import { cn } from "@/lib/utils";
import DropdownMenu from "./DropdownMenu";

interface NavigationLinksProps {
  items: NavigationItem[];
  className?: string;
}

export default function NavigationLinks({ items, className }: NavigationLinksProps) {
  return (
    <ul className={cn("flex space-x-6", className)}>
      {items.map((item) => (
        <li key={item.id}>
          <DropdownMenu item={item} />
        </li>
      ))}
    </ul>
  );
}
