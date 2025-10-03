import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SPECIALTIES } from "@/data/SPECIALTIES";
import { Specialty } from "@/types";

// Mapeo de iconos para la página
const iconMap = {
  Award: "🏆",
  DollarSign: "💰",
  Calculator: "🧮",
  Code: "💻",
  HardHat: "👷",
  Ruler: "📐"
};

// Función para generar metadata dinámica
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const specialty = SPECIALTIES.find(s => s.id === id);
  
  if (!specialty) {
    return {
      title: "Especialidad no encontrada - CTP Ing. Carlos Pascua Zúñiga",
      description: "La especialidad solicitada no fue encontrada."
    };
  }

  return {
    title: `${specialty.name} - CTP Ing. Carlos Pascua Zúñiga`,
    description: `${specialty.description} Duración: ${specialty.duration}. Modalidad: ${specialty.modality}. Total de horas: ${specialty.totalHours}.`,
  };
}

// Función para generar rutas estáticas
export async function generateStaticParams() {
  return SPECIALTIES.map((specialty) => ({
    id: specialty.id,
  }));
}

// Función para obtener la especialidad
function getSpecialty(id: string): Specialty | undefined {
  return SPECIALTIES.find(specialty => specialty.id === id);
}

export default async function SpecialtyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const specialty = getSpecialty(id);

  if (!specialty) {
    notFound();
  }

  const icon = iconMap[specialty.icon as keyof typeof iconMap] || "📚";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Mejorado */}
      <section className="relative h-[75vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo con overlay */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
          {/* Patrón decorativo sutil */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Icono y título principal */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-6 shadow-2xl">
                <div className="text-5xl">{icon}</div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight">
                {specialty.name}
              </h1>
              <div className="w-24 h-1 bg-white/60 mx-auto rounded-full mb-6"></div>
            </div>

            {/* Información destacada */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white mb-1">{specialty.duration}</div>
                <div className="text-white/80 text-sm">Duración</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white mb-1">{specialty.modality}</div>
                <div className="text-white/80 text-sm">Modalidad</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white mb-1">{specialty.totalHours}</div>
                <div className="text-white/80 text-sm">Horas Totales</div>
              </div>
            </div>

            {/* Descripción breve */}
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
              {specialty.description}
            </p>
          </div>
        </div>
        
      </section>

      {/* Perfil del Egresado y Contenido/Herramientas - 2 columnas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Perfil del Egresado */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-500/10 p-2 rounded-lg mr-3">👨‍🎓</span>
                Perfil del Egresado
              </h3>
              <p className="text-gray-600 mb-6">
                Al finalizar esta especialidad, el egresado estará preparado para:
              </p>
              <ul className="space-y-4">
                {specialty.profile.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contenido y Herramientas */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-500/10 p-2 rounded-lg mr-3">🛠️</span>
                Contenido y Herramientas
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Información General</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-500">Duración:</span>
                      <div className="font-semibold text-gray-900">{specialty.duration}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-500">Modalidad:</span>
                      <div className="font-semibold text-gray-900">{specialty.modality}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-500">Total Horas:</span>
                      <div className="font-semibold text-gray-900">{specialty.totalHours}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-500">Especialidad:</span>
                      <div className="font-semibold text-gray-900">{specialty.name}</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Preparación Incluye</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">•</span>
                      Formación técnica especializada
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">•</span>
                      Inglés especializado en el área
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">•</span>
                      Preparación para estudios universitarios
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">•</span>
                      Competencias laborales actualizadas
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estructura Curricular */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Estructura Curricular
          </h2>
          
          <div className="bg-white rounded-xl p-8 shadow-sm">
            {/* Tabla responsive para móvil */}
            <div className="block lg:hidden">
              {specialty.curriculum.map((year, yearIndex) => (
                <div key={yearIndex} className="mb-8">
                  <div className="bg-blue-500/5 border-l-4 border-blue-500 p-4 mb-4">
                    <h4 className="text-lg font-bold text-gray-900">{year.grade} Año</h4>
                    <div className="text-sm text-gray-600 mt-1">
                      {year.totalHoursPerWeek} horas semanales • {year.totalHoursPerYear} horas anuales
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {year.subjects.map((subject, subjectIndex) => (
                      <div key={subjectIndex} className="bg-gray-50 rounded-lg p-4">
                        <div className="font-semibold text-gray-900 text-sm mb-2">{subject.name}</div>
                        <div className="flex justify-between text-xs text-gray-600">
                          <span>{subject.hoursPerWeek}h/semana</span>
                          <span>{subject.hoursPerYear}h/año</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Tabla para desktop */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-blue-500/10">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Subárea</th>
                    <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">Décimo<br/>Hrs. sem.</th>
                    <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">Décimo<br/>Hrs. anuales</th>
                    <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">Undécimo<br/>Hrs. sem.</th>
                    <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">Undécimo<br/>Hrs. anuales</th>
                    <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">Duodécimo<br/>Hrs. sem.</th>
                    <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">Duodécimo<br/>Hrs. anuales</th>
                  </tr>
                </thead>
                <tbody>
                  {specialty.curriculum[0].subjects.map((subject, subjectIndex) => (
                    <tr key={subjectIndex} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">
                        {subjectIndex + 1}. {subject.name}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center text-sm text-gray-700">
                        {specialty.curriculum[0].subjects[subjectIndex]?.hoursPerWeek || '-'}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center text-sm text-gray-700">
                        {specialty.curriculum[0].subjects[subjectIndex]?.hoursPerYear || '-'}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center text-sm text-gray-700">
                        {specialty.curriculum[1].subjects[subjectIndex]?.hoursPerWeek || '-'}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center text-sm text-gray-700">
                        {specialty.curriculum[1].subjects[subjectIndex]?.hoursPerYear || '-'}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center text-sm text-gray-700">
                        {specialty.curriculum[2].subjects[subjectIndex]?.hoursPerWeek || '-'}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center text-sm text-gray-700">
                        {specialty.curriculum[2].subjects[subjectIndex]?.hoursPerYear || '-'}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-blue-500/5 font-semibold">
                    <td className="border border-gray-200 px-4 py-3 text-sm font-bold text-gray-900">Total</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-sm font-bold text-gray-900">
                      {specialty.curriculum[0].totalHoursPerWeek}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-sm font-bold text-gray-900">
                      {specialty.curriculum[0].totalHoursPerYear}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-sm font-bold text-gray-900">
                      {specialty.curriculum[1].totalHoursPerWeek}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-sm font-bold text-gray-900">
                      {specialty.curriculum[1].totalHoursPerYear}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-sm font-bold text-gray-900">
                      {specialty.curriculum[2].totalHoursPerWeek}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-sm font-bold text-gray-900">
                      {specialty.curriculum[2].totalHoursPerYear}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Información adicional */}
            <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4 mt-6">
              <h4 className="font-semibold text-gray-900 mb-2">Información del Programa</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Total del programa:</strong> {specialty.totalHours} horas</li>
                <li>• <strong>Duración de lecciones:</strong> 60 minutos cada una</li>
                <li>• <strong>Duodécimo año:</strong> Menos horas debido a la práctica empresarial</li>
                <li>• <strong>Inglés especializado:</strong> Incluido en todas las especialidades</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Interesado en esta especialidad?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contacta con nosotros para más información sobre el proceso de matrícula
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/matricula"
              className="bg-white text-blue-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors min-h-[48px] flex items-center justify-center"
            >
              Proceso de Matrícula
            </Link>
            <Link
              href="/contacto"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-500 transition-colors min-h-[48px] flex items-center justify-center"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
