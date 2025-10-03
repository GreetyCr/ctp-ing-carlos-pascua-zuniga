import { Metadata } from "next";
import { COLLEGE_INFO } from "@/data/COLLEGE_INFO";
import { CONTACT_INFO } from "@/data/CONTACT";

export const metadata: Metadata = {
  title: "Contacto - CTP Ing. Carlos Pascua Zúñiga",
  description: "Información de contacto, ubicación y horarios de atención del Colegio Técnico Profesional Ing. Carlos Pascua Zúñiga - San Rafael, Heredia, Costa Rica",
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 to-blue-500/90 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contacto
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Estamos aquí para ayudarte con cualquier consulta
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-500 mb-6">
                Información de Contacto
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                    <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Teléfono</h3>
                    <p className="text-gray-600">{CONTACT_INFO.phone}</p>
                    <a 
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-blue-500 hover:text-blue-500/80 transition-colors"
                    >
                      Llamar ahora
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                    <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">{CONTACT_INFO.email}</p>
                    <a 
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-blue-500 hover:text-blue-500/80 transition-colors"
                    >
                      Enviar email
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                    <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Dirección</h3>
                    <p className="text-gray-600">{CONTACT_INFO.address}</p>
                    <a 
                      href={CONTACT_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-500/80 transition-colors"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                    <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Horarios de Atención</h3>
                    <p className="text-gray-600">
                      Lunes a Viernes: 7:00 AM - 4:00 PM<br />
                      Sábados: 8:00 AM - 12:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-500 mb-6">
                Ubicación
              </h2>
              
              {/* Map Container */}
              <div className="relative rounded-lg overflow-hidden mb-6">
                <div className="bg-gray-100 rounded-lg h-64 sm:h-80 flex items-center justify-center">
                  {/* Google Maps Embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1234567890!2d-84.1002567!3d10.0118127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e54b69846763%3A0xf1d8fef1fd9eeb60!2sCTP%20Ing.%20Carlos%20Pascua%20Z%C3%BA%C3%B1iga!5e0!3m2!1ses!2scr!4v1234567890123!5m2!1ses!2scr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    title="Ubicación del CTP Ing. Carlos Pascua Zúñiga - Ruta Nacional Secundaria 113, San Rafael, Heredia"
                  />
                </div>
                
                {/* Map Overlay with Info */}
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg max-w-[280px] sm:max-w-xs">
                  <div className="flex items-start space-x-2">
                    <div className="bg-blue-500/10 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                      <svg className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-900 text-xs sm:text-sm truncate">CTP Ing. Carlos Pascua Zúñiga</h3>
                      <p className="text-xs text-gray-600 leading-tight">{CONTACT_INFO.address}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional Location Info */}
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-blue-900 mb-3 flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Información de Ubicación
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="font-medium text-blue-900">Dirección:</span>
                    <span className="text-blue-700 ml-2">Ruta Nacional Secundaria 113</span>
                  </div>
                  <div>
                    <span className="font-medium text-blue-900">Provincia:</span>
                    <span className="text-blue-700 ml-2">Heredia</span>
                  </div>
                  <div>
                    <span className="font-medium text-blue-900">Cantón:</span>
                    <span className="text-blue-700 ml-2">San Rafael</span>
                  </div>
                  <div>
                    <span className="font-medium text-blue-900">Distrito:</span>
                    <span className="text-blue-700 ml-2">San Rafael</span>
                  </div>
                  <div>
                    <span className="font-medium text-blue-900">Código Postal:</span>
                    <span className="text-blue-700 ml-2">40101</span>
                  </div>
                  <div>
                    <span className="font-medium text-blue-900">Plus Code:</span>
                    <span className="text-blue-700 ml-2 font-mono">2W62+M4</span>
                  </div>
                </div>
              </div>
              
              {/* Map Actions */}
              <div className="space-y-3">
                <a 
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-500 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-500/90 transition-colors font-semibold"
                >
                  <svg className="inline-block w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Abrir en Google Maps
                </a>
                
                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CONTACT_INFO.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Cómo llegar
                  </a>
                  
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Buscar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
