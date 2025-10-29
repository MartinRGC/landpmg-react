// src/components/TenisMesaSection.jsx
import React from 'react';
import pingpongImage from '../assets/images/pingpong.png';

const TenisMesaSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">LIDERAZGO Y DEPORTE</h2>
          <p className="text-gray-700 mt-2">2024</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Imagen a la izquierda */}
          <div className="flex justify-center">
            <div className="aspect-[4/3] w-full max-w-lg bg-gray-100 rounded-xl overflow-hidden shadow-md border border-gray-200">
              <img
                src={pingpongImage}
                alt="Martín García con el equipo del Training Pong Club"
                className="w-full h-full object-contain bg-white"
              />
            </div>
          </div>

          {/* Texto a la derecha */}
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Fundador – Training Pong Club
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Creación de un espacio inclusivo para practicar tenis de mesa, abierto a expertos y principiantes.
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Fomento del liderazgo colaborativo, la constancia y el trabajo en equipo.
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Promoción del deporte como herramienta de integración y desarrollo personal.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenisMesaSection;