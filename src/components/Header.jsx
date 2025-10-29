import React from 'react';
import profileImage from '../assets/images/profile.jpg';
import { Linkedin, Mail, Github, Twitter } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-20 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-lg mb-2 opacity-90">¡Hola! Soy</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Martín Raid García Collahuaso
            </h1>
            <h2 className="text-xl md:text-2xl mb-4 opacity-95 font-medium">
              Ing. Sistemas
            </h2>
            <p className="text-base md:text-lg mb-2 opacity-90">Lima, Perú</p>
            <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed max-w-2xl">
              Especialista en IA y Análisis de Datos | Egresado de Universidad Esan
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8">
              <a
                href="mailto:martingarcia08.00@gmail.com"
                className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
              >
                Contáctame
              </a>
              <a
                href="#about"
                className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition-all hover:scale-105"
              >
                Acerca de Mí
              </a>
            </div>

            {/* Social media icons */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="https://www.linkedin.com/in/martin-garcol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:martingarcia08.00@gmail.com"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/martin-garcol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://twitter.com/martin-garcol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Right side - Profile image with stats */}
          <div className="flex-shrink-0 relative">
            {/* Profile image */}
            <div className="relative">
              <img
                src={profileImage}
                alt="Martín García - Ingeniero de Sistemas"
                className="w-64 h-auto md:w-80 lg:w-96 rounded-2xl shadow-2xl object-cover"
              />
              
              {/* Floating stat badges */}
              <div className="absolute -top-4 -left-4 bg-white text-blue-900 rounded-2xl shadow-xl p-4 animate-bounce-slow">
                <div className="text-3xl font-bold text-blue-600">2025</div>
                <div className="text-sm font-medium">Egresado</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-orange-400 to-red-500 text-white rounded-2xl shadow-xl p-4">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold">4+</span>
                  <div className="text-xs leading-tight">
                    <div>Certificaciones</div>
                    <div>AWS</div>
                  </div>
                </div>
              </div>

              {/* Trophy icon */}
              <div className="absolute -top-6 -right-6 bg-yellow-400 rounded-2xl shadow-xl p-3 animate-pulse">
                <svg className="w-8 h-8 text-yellow-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;