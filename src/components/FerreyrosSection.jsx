import React from 'react';
import ferreImage from '../assets/images/ferre.jpg';

const FerreyrosSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Programa de Empleabilidad
          </h2>
          <p className="text-xl text-gray-600 mb-2">Ferreycorp - Universidad ESAN · 2025</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Imagen a la izquierda */}
          <div className="flex justify-center">
            <div className="aspect-[4/3] w-full max-w-lg bg-gray-100 rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200 hover:shadow-2xl transition-all">
              <img
                src={ferreImage}
                alt="Martín García en el programa Impulsando Talento con Valores de Ferreycorp"
                className="w-full h-full object-contain bg-white"
              />
            </div>
          </div>

          {/* Texto a la derecha */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              "Impulsando Talento con Valores"
            </h3>
            <p className="text-lg text-gray-600 mb-6 font-medium">
              Asociación Ferreycorp – Universidad ESAN
            </p>
            <ul className="text-gray-700 space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-base leading-relaxed">Tres días intensivos en desarrollo de habilidades blandas: autoconocimiento, liderazgo, marketing personal y responsabilidad social.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-base leading-relaxed">Trabajo en equipo interdisciplinario con enfoque en valores y networking profesional.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-base leading-relaxed">Complemento clave a mi formación técnica en Ingeniería de TI e IA.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FerreyrosSection;