import { Metadata } from "next";
import { COLLEGE_INFO } from "@/data/COLLEGE_INFO";

export const metadata: Metadata = {
  title: "Proceso de Matrícula - CTP Ing. Carlos Pascua Zúñiga",
  description: "Información completa sobre el proceso de matrícula, requisitos y fechas importantes del Colegio Técnico Profesional Ing. Carlos Pascua Zúñiga",
};

export default function MatriculaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 to-blue-500/90 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Proceso de Matrícula
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Información completa para el proceso de admisión 2025
          </p>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Requisitos de Matrícula
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-500 mb-6">
                Documentos Requeridos
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Cédula de identidad (original y copia)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Certificado de noveno año (original y copia)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Fotografía tamaño pasaporte (2 copias)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Comprobante de domicilio (original y copia)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Carné de vacunación (copia)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Constancia de trabajo de los padres (si aplica)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-500 mb-6">
                Requisitos Académicos
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Haber aprobado noveno año de educación general básica</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Promedio mínimo de 70 en todas las materias</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">No tener materias reprobadas en noveno año</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Presentar examen de admisión (si aplica)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Entrevista con orientación (si aplica)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Pasos del Proceso de Matrícula
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Consulta de Especialidades
              </h3>
              <p className="text-gray-600 text-sm">
                Revisa las 6 especialidades disponibles y elige la de tu interés
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Reunión Informativa
              </h3>
              <p className="text-gray-600 text-sm">
                Asiste a la reunión informativa para conocer detalles de la especialidad
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Presentación de Documentos
              </h3>
              <p className="text-gray-600 text-sm">
                Entrega todos los documentos requeridos en la administración
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Confirmación de Matrícula
              </h3>
              <p className="text-gray-600 text-sm">
                Recibe la confirmación y horario de clases asignado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-500 mb-8 text-center">
              Fechas Importantes 2025
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Matrícula Ordinaria</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold">Inicio de matrícula</span>
                    <span className="text-gray-600">15 de enero 2025</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold">Cierre de matrícula</span>
                    <span className="text-gray-600">28 de febrero 2025</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold">Reuniones informativas</span>
                    <span className="text-gray-600">20-25 de enero 2025</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Inicio de Clases</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold">Inicio de clases</span>
                    <span className="text-gray-600">3 de marzo 2025</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold">Período de adaptación</span>
                    <span className="text-gray-600">3-7 de marzo 2025</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold">Primera evaluación</span>
                    <span className="text-gray-600">Abril 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ¿Listo para comenzar tu formación técnica?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contacta con nosotros para más información sobre el proceso de matrícula 
            o para resolver cualquier duda que tengas.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Información de Contacto</h3>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-semibold">Teléfono:</span> {COLLEGE_INFO.phone}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Email:</span> {COLLEGE_INFO.email}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Dirección:</span> {COLLEGE_INFO.location}
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500/90 transition-colors"
            >
              Contactar Ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
