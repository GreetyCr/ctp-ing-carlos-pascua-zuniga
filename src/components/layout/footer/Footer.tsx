import { COLLEGE_INFO } from "@/data/COLLEGE_INFO";
import { CONTACT_INFO } from "@/data/CONTACT";
import { NAVIGATION_ITEMS } from "@/data/NAVIGATION";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* College Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                {COLLEGE_INFO.name}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {COLLEGE_INFO.mission.substring(0, 200)}...
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300 text-sm">{CONTACT_INFO.address}</span>
              </div>
              
              <div className="flex items-center">
                <svg className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-gray-300 text-sm hover:text-blue-400 transition-colors flex items-center justify-center"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
              
              <div className="flex items-center">
                <svg className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-gray-300 text-sm hover:text-blue-400 transition-colors flex items-center justify-center"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-gray-300 text-sm hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Especialidades
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/especialidades/gestion-calidad"
                  className="text-gray-300 text-sm hover:text-blue-400 transition-colors"
                >
                  Gestión de la Calidad
                </a>
              </li>
              <li>
                <a
                  href="/especialidades/banca-finanzas"
                  className="text-gray-300 text-sm hover:text-blue-400 transition-colors"
                >
                  Banca y Finanzas
                </a>
              </li>
              <li>
                <a
                  href="/especialidades/contabilidad-control-interno"
                  className="text-gray-300 text-sm hover:text-blue-400 transition-colors"
                >
                  Contabilidad y Control Interno
                </a>
              </li>
              <li>
                <a
                  href="/especialidades/desarrollo-aplicaciones-software"
                  className="text-gray-300 text-sm hover:text-blue-400 transition-colors"
                >
                  Desarrollo de Aplicaciones Software
                </a>
              </li>
              <li>
                <a
                  href="/especialidades/construccion-civil"
                  className="text-gray-300 text-sm hover:text-blue-400 transition-colors"
                >
                  Construcción Civil
                </a>
              </li>
              <li>
                <a
                  href="/especialidades/dibujo-modelado-edificaciones"
                  className="text-gray-300 text-sm hover:text-blue-400 transition-colors"
                >
                  Dibujo y Modelado para Edificaciones
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} {COLLEGE_INFO.name}. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Institución del Ministerio de Educación Pública de Costa Rica
              </p>
            </div>

            {/* Social Links & Additional Info */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              
              {/* MEP Badge */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">MEP</span>
                </div>
                <span className="text-gray-400 text-xs">
                  Institución Oficial
                </span>
              </div>

              {/* Quick Actions */}
              <div className="flex space-x-4">
                <a
                  href="/matricula"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
                >
                  Matrícula 2025
                </a>
                <a
                  href="/contacto"
                  className="border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
                >
                  Contacto
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
