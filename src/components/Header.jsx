import React from 'react';
import profileImage from '../assets/images/profile.jpg'; // Asegúrate de que sea .jpg o .png

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Foto de cuerpo completo */}
        <div className="flex-shrink-0">
          <img
            src={profileImage}
            alt="Martín García - Ingeniero de Sistemas"
            className="w-40 h-auto md:w-56 rounded-lg object-cover"
          />
        </div>

        {/* Información personal */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">Martín Raid García Collahuaso</h1>
          <p className="mt-2 text-lg md:text-xl opacity-90">
            Egresado de Ingeniería de Sistemas | Especialista en IA y Análisis de Datos
          </p>
          <p className="mt-4 text-sm opacity-75">Lima, Perú · +51 972 533 401</p>

          {/* Botones de contacto */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="mailto:martingarcia08.00@gmail.com"
              className="bg-white text-blue-900 font-semibold px-5 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              Enviar email
            </a>
            <a
              href="https://www.linkedin.com/in/martin-garcol"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white font-semibold px-5 py-2 rounded-lg hover:bg-white hover:text-blue-900 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;