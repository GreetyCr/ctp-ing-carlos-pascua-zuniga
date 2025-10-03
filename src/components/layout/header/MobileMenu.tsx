"use client";

import { useEffect } from "react";
import Link from "next/link";
import { NavigationItem } from "@/types";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavigationItem[];
}

export default function MobileMenu({ isOpen, onClose, items }: MobileMenuProps) {
  // Prevenir scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      // Guardar el scroll actual
      const scrollY = window.scrollY;
      
      // Aplicar estilos para prevenir scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      // Cleanup function para restaurar el scroll
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay con fondo negro mejorado */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-60 z-40 lg:hidden backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Menu Panel con scroll controlado */}
      <div className={cn(
        "fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden",
        "transform transition-transform duration-300 ease-in-out",
        "flex flex-col",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {/* Header del menú móvil */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Menú</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            aria-label="Cerrar menú"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Enlaces de navegación con scroll controlado */}
        <nav className="flex-1 overflow-y-auto p-6">
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.id}>
                {item.href ? (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "block text-xl font-serif text-gray-900",
                      "hover:text-blue-500 hover:bg-gray-50",
                      "focus:outline-none focus:ring-2 focus:ring-ctp-blue focus:ring-offset-2",
                      "px-4 py-3 rounded-md transition-colors duration-200",
                      "min-h-[48px] flex items-center"
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={cn(
                      "block text-xl font-serif text-gray-900",
                      "px-4 py-3 rounded-md",
                      "min-h-[48px] flex items-center"
                    )}
                  >
                    {item.label}
                  </span>
                )}
                
                {/* Submenú para especialidades */}
                {item.children && item.children.length > 0 && (
                  <ul className="ml-4 mt-2 space-y-1">
                    {item.children.map((child) => (
                      <li key={child.id}>
                        {child.href ? (
                          <Link
                            href={child.href}
                            onClick={onClose}
                            className={cn(
                              "block text-lg font-serif text-gray-600",
                              "hover:text-blue-500 hover:bg-gray-50",
                              "focus:outline-none focus:ring-2 focus:ring-ctp-blue focus:ring-offset-2",
                              "px-4 py-2 rounded-md transition-colors duration-200",
                              "min-h-[44px] flex items-center"
                            )}
                          >
                            {child.label}
                          </Link>
                        ) : (
                          <span
                            className={cn(
                              "block text-lg font-serif text-gray-600",
                              "px-4 py-2 rounded-md",
                              "min-h-[44px] flex items-center"
                            )}
                          >
                            {child.label}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer del menú móvil fijo */}
        <div className="flex-shrink-0 p-6 border-t border-gray-200 bg-white">
          <div className="text-sm text-gray-600 text-center">
            CTP Ing. Carlos Pascua Zúñiga
          </div>
        </div>
      </div>
    </>
  );
}
