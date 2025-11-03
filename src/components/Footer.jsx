import { Linkedin, Mail, Github, ArrowUp, Download, MessageCircle } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-primary-900 to-primary-950 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para trabajar juntos?
          </h3>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Estoy disponible para proyectos de IA, análisis de datos y desarrollo web.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:martingarcia08.00@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-900 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
            >
              <Mail size={20} />
              Enviar Email
            </a>
            <a
              href="https://wa.me/51972533401?text=¡Hola%20Martín!%20Me%20gustaría%20contactarte."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-8 py-4 rounded-full hover:bg-green-600 transition-all hover:scale-105 shadow-xl"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <a
              href="https://docs.google.com/document/d/1iAhSGBlmXg-iAuEaJFmo866DGvKk657z/edit?usp=sharing&ouid=112717986879074681665&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-primary-900 transition-all hover:scale-105"
            >
              <Download size={20} />
              Mi CV
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 pt-12 mb-8"></div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Martín García</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Ingeniero de Sistemas especializado en IA y Análisis de Datos. 
              Apasionado por crear soluciones innovadoras en salud digital.
            </p>
            <p className="text-white/60 text-sm">
              📍 Lima, Perú<br />
              📧 martingarcia08.00@gmail.com<br />
              📱 +51 972 533 401
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
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-primary-900 transition-all hover:scale-110"
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
                href="https://github.com/MartinRGC"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={20} />
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
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full hover:bg-white hover:text-primary-900 transition-all hover:scale-105"
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