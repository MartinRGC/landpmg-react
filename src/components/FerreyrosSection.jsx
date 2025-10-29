import React from 'react';
import ferreImage from '../assets/images/ferre.jpg';

const FerreyrosSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">PROGRAMA DE EMPLEABILIDAD</h2>
          <p className="text-gray-700 mt-2">2025</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Imagen a la izquierda */}
          <div className="flex justify-center">
            <div className="aspect-[4/3] w-full max-w-lg bg-gray-100 rounded-xl overflow-hidden shadow-md border border-gray-200">
              <img
                src={ferreImage}
                alt="Martín García en el programa Impulsando Talento con Valores de Ferreycorp"
                className="w-full h-full object-contain bg-white"
              />
            </div>
          </div>

          {/* Texto a la derecha */}
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Programa “Impulsando Talento con Valores”
            </h3>
            <p className="text-gray-700 mb-4">
              Asociación Ferreycorp – Universidad ESAN
            </p>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Tres días intensivos en desarrollo de habilidades blandas: autoconocimiento, liderazgo, marketing personal y responsabilidad social.
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Trabajo en equipo interdisciplinario con enfoque en valores y networking profesional.
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Complemento clave a mi formación técnica en Ingeniería de TI e IA.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FerreyrosSection;