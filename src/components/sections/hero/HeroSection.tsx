"use client";

import Image from "next/image";
import { HERO_CONTENT } from "@/data/COLLEGE_INFO";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="inicio" 
      className={cn(
        "relative h-[calc(100vh-182px)] flex items-center justify-center overflow-hidden",
        "bg-gradient-to-br from-blue-500/95 to-blue-500/10",
        className
      )}
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0 opacity-35">
        <Image
          src={HERO_CONTENT.image}
          alt="CTP Ing. Carlos Pascua Zúñiga - Instalaciones"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay para mejorar legibilidad */}
        <div className="absolute inset-0 bg-blue-500/10" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Título principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight text-shadow-lg/30">
            {HERO_CONTENT.title}
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-medium text-shadow-lg/30">
            {HERO_CONTENT.tagline}
          </p>

          {/* Botón de acción */}
          <div className="flex justify-center items-center">
            <button
              onClick={() => scrollToSection("#matricula")}
              className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-500 font-semibold text-lg rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/30 min-h-[48px]"
              aria-label="Información sobre proceso de matrícula"
            >
              {HERO_CONTENT.secondaryCta}
            </button>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-white/70" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
