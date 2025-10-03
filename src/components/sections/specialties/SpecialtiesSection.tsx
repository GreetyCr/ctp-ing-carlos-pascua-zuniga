import { SPECIALTIES } from "@/data/SPECIALTIES";
import { SPECIALTIES_SECTION_CONTENT } from "@/data/COLLEGE_INFO";
import { SpecialtyCard } from "./SpecialtyCard";
import { cn } from "@/lib/utils";

interface SpecialtiesSectionProps {
  className?: string;
}

export function SpecialtiesSection({ className }: SpecialtiesSectionProps) {
  return (
    <section
      id="especialidades"
      className={cn(
        "py-16 px-4 sm:px-6 lg:px-8 bg-gray-50",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {SPECIALTIES_SECTION_CONTENT.title}
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            {SPECIALTIES_SECTION_CONTENT.subtitle}
          </p>
          <p className="text-base text-gray-500 max-w-4xl mx-auto leading-relaxed">
            {SPECIALTIES_SECTION_CONTENT.description}
          </p>
        </div>

        {/* Grid de especialidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALTIES.map((specialty) => (
            <SpecialtyCard
              key={specialty.id}
              specialty={specialty}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
