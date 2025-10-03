"use client";

import Image from "next/image";
import { GALLERY_CONTENT } from "@/data/COLLEGE_INFO";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface GallerySectionProps {
  className?: string;
}

export function GallerySection({ className }: GallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageId: string) => {
    setSelectedImage(imageId);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const selectedImageData = selectedImage 
    ? GALLERY_CONTENT.images.find(img => img.id === selectedImage)
    : null;

  return (
    <section 
      id="galeria" 
      className={cn(
        "py-16 sm:py-20 lg:py-24 bg-gray-50",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de la sección */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {GALLERY_CONTENT.title}
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {GALLERY_CONTENT.subtitle}
          </p>
        </div>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {GALLERY_CONTENT.images.map((image) => (
            <div
              key={image.id}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Imagen */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay para hover */}
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/20 transition-colors duration-300" />
                
                {/* Botón de expandir */}
                <button
                  onClick={() => openModal(image.id)}
                  className="absolute inset-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
                  aria-label={`Ver imagen ampliada: ${image.title}`}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <svg 
                      className="w-6 h-6 text-blue-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" 
                      />
                    </svg>
                  </div>
                </button>
              </div>

              {/* Información de la imagen */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {image.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para imagen ampliada */}
      {selectedImageData && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            {/* Botón de cerrar */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-white/30"
              aria-label="Cerrar imagen ampliada"
            >
              <svg 
                className="w-6 h-6 text-gray-900" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>

            {/* Imagen ampliada */}
            <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] max-h-[70vh]">
                <Image
                  src={selectedImageData.src}
                  alt={selectedImageData.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                />
              </div>
              
              {/* Información de la imagen en el modal */}
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                  {selectedImageData.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {selectedImageData.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
