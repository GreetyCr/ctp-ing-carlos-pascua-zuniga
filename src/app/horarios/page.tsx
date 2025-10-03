import { Metadata } from "next";
import { COLLEGE_INFO } from "@/data/COLLEGE_INFO";

export const metadata: Metadata = {
  title: "Horarios - CTP Ing. Carlos Pascua Zúñiga",
  description: "Horarios de clases, atención administrativa y servicios del Colegio Técnico Profesional Ing. Carlos Pascua Zúñiga",
};

export default function HorariosPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 to-blue-500/90 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Horarios
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Horarios de clases y atención administrativa
          </p>
        </div>
      </section>

      {/* Class Schedules */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Regular Schedule */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-500 mb-6">
                Horario Regular de Clases
              </h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-ctp-blue pl-4">
                  <h3 className="font-semibold text-gray-900">Lunes a Viernes</h3>
                  <p className="text-gray-600">7:00 AM - 12:00 PM</p>
                </div>
                
                <div className="border-l-4 border-ctp-gold pl-4">
                  <h3 className="font-semibold text-gray-900">Horario Vespertino</h3>
                  <p className="text-gray-600">1:00 PM - 5:00 PM</p>
                </div>
                
                <div className="border-l-4 border-ctp-red pl-4">
                  <h3 className="font-semibold text-gray-900">Horario Nocturno</h3>
                  <p className="text-gray-600">6:00 PM - 10:00 PM</p>
                </div>
              </div>
            </div>

            {/* Administrative Hours */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-500 mb-6">
                Atención Administrativa
              </h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-ctp-blue pl-4">
                  <h3 className="font-semibold text-gray-900">Oficina Principal</h3>
                  <p className="text-gray-600">Lunes a Viernes: 7:00 AM - 4:00 PM</p>
                </div>
                
                <div className="border-l-4 border-ctp-gold pl-4">
                  <h3 className="font-semibold text-gray-900">Secretaría Académica</h3>
                  <p className="text-gray-600">Lunes a Viernes: 7:30 AM - 3:30 PM</p>
                </div>
                
                <div className="border-l-4 border-ctp-red pl-4">
                  <h3 className="font-semibold text-gray-900">Orientación</h3>
                  <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Schedules */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Horarios Especiales
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-500 mb-4">
                Laboratorios de Computación
              </h3>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-semibold">Lunes a Viernes:</span><br />
                  7:00 AM - 12:00 PM<br />
                  1:00 PM - 5:00 PM
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Sábados:</span><br />
                  8:00 AM - 12:00 PM
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-500 mb-4">
                Talleres Técnicos
              </h3>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-semibold">Construcción Civil:</span><br />
                  Lunes a Viernes: 7:00 AM - 11:00 AM
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Dibujo Técnico:</span><br />
                  Lunes a Viernes: 1:00 PM - 5:00 PM
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-500 mb-4">
                Biblioteca
              </h3>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-semibold">Lunes a Viernes:</span><br />
                  7:00 AM - 6:00 PM
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Sábados:</span><br />
                  8:00 AM - 12:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-500 mb-8 text-center">
              Calendario Académico 2025
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Períodos Lectivos</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold">Inicio de Clases</span>
                    <span className="text-gray-600">Febrero 2025</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold">Vacaciones de Medio Período</span>
                    <span className="text-gray-600">Julio 2025</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold">Fin de Clases</span>
                    <span className="text-gray-600">Noviembre 2025</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Matrícula</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold">Matrícula Ordinaria</span>
                    <span className="text-gray-600">Enero 2025</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold">Matrícula Extraordinaria</span>
                    <span className="text-gray-600">Febrero 2025</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold">Reinscripción</span>
                    <span className="text-gray-600">Diciembre 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ¿Necesitas más información?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Para consultas específicas sobre horarios o cambios de horario, 
            contacta con la administración del colegio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500/90 transition-colors"
            >
              Contactar Administración
            </a>
            <a
              href="tel:2237-2710"
              className="border-2 border-ctp-blue text-blue-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition-colors"
            >
              Llamar: 2237-2710
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
