import { Metadata } from "next";
import { COLLEGE_INFO } from "@/data/COLLEGE_INFO";
import { VALUES, VALORES_SECTION_CONTENT } from "@/data/VALUES";
import { ValoresSection } from "@/components/sections/valores";
import { LucideIcon } from "lucide-react";
import { Award, Heart, Sun, Users, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nosotros - CTP Ing. Carlos Pascua Zúñiga",
  description:
    "Conoce la misión, visión y valores del Colegio Técnico Profesional Ing. Carlos Pascua Zúñiga - San Rafael, Heredia, Costa Rica",
};

const iconMap: Record<string, LucideIcon> = {
  Award,
  Heart,
  Sun,
  Users,
  Leaf,
};

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="text-white py-20 h-[55vh] flex items-center justify-center bg-gradient-to-tl from-blue-800 via-blue-600 to-blue-500">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Sobre Nosotros
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white drop-shadow-md">
            {COLLEGE_INFO.fullName}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Misión y Visión
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los pilares fundamentales que guían nuestra labor educativa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Misión */}
            <div className="group">
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-500 relative overflow-hidden">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-110 transition-transform duration-300"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-500/10 p-3 rounded-xl mr-4 group-hover:bg-blue-500/20 transition-colors duration-300 text-blue-500">
                      <svg
                        className="w-8 h-8 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 group-hover:text-blue-500 transition-colors duration-300">
                      Misión
                    </h3>
                  </div>

                  <div className="relative">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6 group-hover:text-gray-800 transition-colors duration-300">
                      {COLLEGE_INFO.mission}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visión */}
            <div className="group">
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 hover:shadow-2xl transition-all duration-300 border-l-4 border-ctp-gold relative overflow-hidden">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-110 transition-transform duration-300"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="bg-yellow-500/10 p-3 rounded-xl mr-4 group-hover:bg-yellow-500/20 transition-colors duration-300">
                      <svg
                        className="w-8 h-8 text-yellow-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 group-hover:text-yellow-500 transition-colors duration-300">
                      Visión
                    </h3>
                  </div>

                  <div className="relative">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6 group-hover:text-gray-800 transition-colors duration-300">
                      {COLLEGE_INFO.vision}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <ValoresSection values={VALUES} content={VALORES_SECTION_CONTENT} />

      {/* Location & Contact Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Información Institucional
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conoce más sobre nuestra institución y cómo contactarnos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Información de Contacto */}
            <div className="group">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 lg:p-10 hover:shadow-2xl transition-all duration-300 border border-gray-200">
                <div className="flex items-center mb-8">
                  <div className="bg-blue-500/10 p-4 rounded-xl mr-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-500 transition-colors duration-300">
                    Ubicación y Contacto
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500/5 p-2 rounded-lg">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Dirección</h4>
                      <p className="text-gray-600">{COLLEGE_INFO.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500/5 p-2 rounded-lg">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Teléfono</h4>
                      <p className="text-gray-600">{COLLEGE_INFO.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500/5 p-2 rounded-lg">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">{COLLEGE_INFO.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Compromiso Institucional */}
            <div className="group">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 lg:p-10 hover:shadow-2xl transition-all duration-300 border border-gray-200">
                <div className="flex items-center mb-8">
                  <div className="bg-yellow-500/10 p-4 rounded-xl mr-4 group-hover:bg-yellow-500/20 transition-colors duration-300">
                    <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-yellow-500 transition-colors duration-300">
                    Nuestro Compromiso
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/50 rounded-lg p-6 border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      Formación Integral
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Como institución educativa pública, nos comprometemos con la
                      formación integral de nuestros estudiantes, preparándolos para
                      ser ciudadanos críticos y profesionalmente exitosos.
                    </p>
                  </div>

                  <div className="bg-white/50 rounded-lg p-6 border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      Inclusión y Diversidad
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Promovemos un ambiente inclusivo que respeta y valora la
                      diversidad, creando espacios de aprendizaje accesibles para
                      todos nuestros estudiantes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
