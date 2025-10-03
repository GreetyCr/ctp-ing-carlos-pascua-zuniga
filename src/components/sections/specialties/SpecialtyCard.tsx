import Link from "next/link";
import { Specialty } from "@/types";
import { cn } from "@/lib/utils";

interface SpecialtyCardProps {
  specialty: Specialty;
  className?: string;
}

const iconMap = {
  Award: "🏆",
  DollarSign: "💰",
  Calculator: "🧮",
  Code: "💻",
  HardHat: "👷",
  Ruler: "📐"
};

export function SpecialtyCard({ specialty, className }: SpecialtyCardProps) {
  const icon = iconMap[specialty.icon as keyof typeof iconMap] || "📚";

  return (
    <div
      className={cn(
        "group relative bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        "focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2",
        className
      )}
    >
      {/* Icono */}
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full text-3xl group-hover:bg-blue-100 transition-colors duration-300">
        {icon}
      </div>

      {/* Contenido */}
      <div className="text-center space-y-3">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
          {specialty.name}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {specialty.description}
        </p>

        {/* Información adicional */}
        <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
          <span className="flex items-center space-x-1">
            <span>⏱️</span>
            <span>{specialty.duration}</span>
          </span>
          <span className="flex items-center space-x-1">
            <span>📍</span>
            <span>{specialty.modality}</span>
          </span>
        </div>

        {/* Perfil profesional - primeros 2 puntos */}
        <div className="pt-2">
          <ul className="text-xs text-gray-600 space-y-1">
            {specialty.profile.slice(0, 2).map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span className="leading-tight">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Botón de navegación */}
        <div className="pt-4">
          <Link
            href={`/especialidades/${specialty.id}`}
            className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-500/90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 hover:shadow-md min-h-[40px]"
            aria-label={`Ver detalles de ${specialty.name}`}
          >
            Ver Detalles
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Overlay para hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-blue-50/0 to-blue-50/0 group-hover:from-blue-50/20 group-hover:to-blue-50/10 transition-all duration-300 pointer-events-none" />
    </div>
  );
}
