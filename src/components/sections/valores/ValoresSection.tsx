import { Value, ValoresSectionContent } from "@/types";
import { 
  Award, 
  Heart, 
  Sun, 
  Users, 
  Leaf,
  CheckCircle,
  Quote
} from "lucide-react";

interface ValoresSectionProps {
  values: Value[];
  content: ValoresSectionContent;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  Heart,
  Sun,
  Users,
  Leaf,
};

export default function ValoresSection({ values, content }: ValoresSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {content.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            {content.subtitle}
          </p>
          <div className="bg-white rounded-xl p-8 max-w-4xl mx-auto shadow-lg">
            <div className="flex items-start space-x-4">
              <Quote className="h-8 w-8 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {content.description}
                </p>
                <p className="text-base text-gray-900 font-semibold">
                  {content.commitment}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value) => {
            const IconComponent = iconMap[value.icon];
            return (
              <div
                key={value.id}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 group"
              >
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className="bg-blue-500/10 p-4 rounded-xl mr-4 group-hover:bg-blue-500/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {value.category}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {value.description}
                </p>
                
                {/* Values List */}
                <div className="space-y-3">
                  {value.values.map((val, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Commitment Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-blue-500/20">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Nuestro Compromiso Educativo
            </h3>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Como institución educativa pública, nos comprometemos con la formación 
              integral de nuestros estudiantes, preparándolos para ser ciudadanos 
              críticos y profesionalmente exitosos.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-500/5 rounded-lg p-6 border border-blue-500/20">
                <h4 className="text-xl font-bold mb-3 text-gray-900">Formación Integral</h4>
                <p className="text-gray-700">
                  Desarrollo moral, espiritual, intelectual, cultural, social y laboral
                </p>
              </div>
              
              <div className="bg-blue-500/5 rounded-lg p-6 border border-blue-500/20">
                <h4 className="text-xl font-bold mb-3 text-gray-900">Inclusión y Diversidad</h4>
                <p className="text-gray-700">
                  Espacios de responsabilidad ambiental e inclusión de la diversidad
                </p>
              </div>
              
              <div className="bg-blue-500/5 rounded-lg p-6 border border-blue-500/20">
                <h4 className="text-xl font-bold mb-3 text-gray-900">Excelencia Académica</h4>
                <p className="text-gray-700">
                  Integración de disciplinas profesionales para el logro de los fines educativos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
