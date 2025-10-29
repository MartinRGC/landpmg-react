import React from 'react';
import { Linkedin, Mail, Github, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Martín García</h3>
            <p className="text-white/80 leading-relaxed">
              Ingeniero de Sistemas especializado en IA y Análisis de Datos. 
              Apasionado por crear soluciones innovadoras en salud digital.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  Acerca de mí
                </a>
              </li>
              <li>
                <a href="#certifications" className="text-white/80 hover:text-white transition-colors">
                  Certificaciones
                </a>
              </li>
              <li>
                <a href="#project" className="text-white/80 hover:text-white transition-colors">
                  Proyecto
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Social media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Sígueme</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/martin-garcol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:martingarcia08.00@gmail.com"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/martin-garcol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://twitter.com/martin-garcol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm text-center md:text-left">
            © 2025 Martín García. Todos los derechos reservados.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full hover:bg-white hover:text-blue-900 transition-all hover:scale-105"
            aria-label="Volver arriba"
          >
            <ArrowUp size={18} />
            <span className="font-medium">Volver arriba</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;